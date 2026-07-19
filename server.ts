import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API endpoint for AI path generation
  app.post("/api/generate-path", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Prompt is required and must be a string." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: "Gemini API key is not configured. Please ensure GEMINI_API_KEY is defined in the Secrets panel." 
        });
      }

      // Initialize GoogleGenAI with telemetry header
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      console.log("[Server] Calling Gemini API for path generation...");
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "A catchy title for the learning path" },
              description: { type: Type.STRING, description: "An overview explaining why this path works for their goal" },
              estimatedTime: { type: Type.STRING, description: "Estimated completion time, e.g., 3-6 months" },
              steps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING, description: "Step title" },
                    description: { type: Type.STRING, description: "Detailed explanation of why this step is critical" },
                    resourceId: { type: Type.STRING, description: "ID if matched from catalog, otherwise null" },
                    resourceType: { type: Type.STRING, enum: ["course", "roadmap", "external"] }
                  },
                  required: ["title", "description", "resourceType"]
                }
              }
            },
            required: ["title", "description", "estimatedTime", "steps"]
          }
        }
      });

      if (!response.text) {
        throw new Error("No response content text received from Gemini.");
      }

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("[Server] Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Failed to generate learning path from AI." });
    }
  });

  // Serve static assets or mount Vite dev middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
