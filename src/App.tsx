/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import Roadmaps from './pages/Roadmaps';
import RoadmapDetail from './pages/RoadmapDetail';
import CourseDetail from './pages/CourseDetail';
import Projects from './pages/Projects';
import Universities from './pages/Universities';
import AIGenerator from './pages/AIGenerator';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/roadmap/:id" element={<RoadmapDetail />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/ai-path" element={<AIGenerator />} />
        </Routes>
      </Layout>
    </Router>
  );
}
