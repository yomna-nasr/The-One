import { Roadmap } from '../types';

export const roadmaps: Roadmap[] = [
  {
    id: 'cs-foundations',
    title: 'CS Foundations',
    why: 'You\'ll stop being stuck copying code and start building from first principles.',
    forWhom: 'Beginners to intermediate learners who want to fill gaps in their core knowledge.',
    prerequisites: 'None',
    method: 'Watch ≤40% of the time, do ≥60% (problem sets and projects).',
    weeklyPlan: [
      { week: 1, task: 'Start CS50 or MIT 6.0001' },
      { week: 4, task: 'Begin Berkeley CS61A style practice (recursion + abstraction)' },
      { week: 7, task: 'Implement algorithms from Princeton/MIT' },
      { week: 10, task: 'Complete Capstone Project' }
    ],
    options: [
      'Choose either CS50 (more engaging) or MIT 6.0001 (more academic)'
    ],
    capstoneProject: {
      id: 'personal-knowledge-base',
      title: 'Personal Knowledge Base',
      domain: 'Systems',
      skillTargets: ['Schema Design', 'Search', 'UI/UX', 'Deployment'],
      steps: [
        'Design the database schema',
        'Implement search and tagging',
        'Build the UI',
        'Deploy the application'
      ],
      definitionOfDone: 'A deployed app with documentation.',
      suggestedTools: ['React', 'Node.js', 'PostgreSQL']
    }
  },
  {
    id: 'math-for-ml',
    title: 'Mathematics for ML',
    why: 'Understand the "why" behind the algorithms you use every day.',
    forWhom: 'Data scientists and ML engineers who want to deepen their theoretical understanding.',
    prerequisites: 'High school algebra',
    method: 'Derive → Implement tiny example → Explain in words.',
    weeklyPlan: [
      { week: 1, task: 'MIT 18.06 Linear Algebra (Lectures 1-10)' },
      { week: 3, task: 'MIT 18.06 (Lectures 11-20) + Probability basics' },
      { week: 5, task: 'MIT 18.06 (Lectures 21-35) + Multivariate Calculus' },
      { week: 8, task: 'Capstone: From-scratch PCA' }
    ],
    options: [
      'Choose either MIT 18.06 or Stanford notes + lectures'
    ],
    capstoneProject: {
      id: 'from-scratch-pca',
      title: 'From-scratch PCA + Report',
      domain: 'Mathematics',
      skillTargets: ['Linear Algebra', 'NumPy', 'Visualization'],
      steps: [
        'Implement PCA using SVD',
        'Apply to a real dataset',
        'Create visualizations',
        'Write a detailed explanation of the math'
      ],
      definitionOfDone: 'PCA implementation + visualizations + explanation.',
      suggestedTools: ['Python', 'NumPy', 'Matplotlib']
    }
  },
  {
    id: 'ml-core',
    title: 'ML Core',
    why: 'Master the fundamental algorithms and workflows of Machine Learning.',
    forWhom: 'Aspiring ML engineers and data scientists.',
    prerequisites: 'Math for ML roadmap or equivalent knowledge',
    method: 'Implement from scratch before using libraries.',
    weeklyPlan: [
      { week: 1, task: 'Stanford CS229 (Supervised Learning)' },
      { week: 4, task: 'Stanford CS229 (Unsupervised Learning + Theory)' },
      { week: 7, task: 'Data Science practice (Berkeley/HarvardX materials)' },
      { week: 10, task: 'Capstone: Model Debugging Report' }
    ],
    options: [
      'Focus on CS229 for theory, Berkeley Data 100 for practice'
    ],
    capstoneProject: {
      id: 'model-debugging-report',
      title: 'Model Debugging Report',
      domain: 'Machine Learning',
      skillTargets: ['Model Evaluation', 'Debugging', 'Error Analysis'],
      steps: [
        'Select a complex dataset',
        'Train multiple models',
        'Perform systematic error analysis',
        'Create a metric dashboard'
      ],
      definitionOfDone: 'Repo + metric dashboard + written error analysis.',
      suggestedTools: ['Python', 'Scikit-Learn', 'MLflow']
    }
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    why: 'Go deep into neural networks and modern AI architectures.',
    forWhom: 'ML engineers looking to specialize in Deep Learning.',
    prerequisites: 'ML Core roadmap or equivalent',
    method: 'Build and train small models to understand architecture.',
    weeklyPlan: [
      { week: 1, task: 'Neural Network basics (Backprop, Optimizers)' },
      { week: 4, task: 'Convolutional Neural Networks (Stanford CS231n)' },
      { week: 7, task: 'Recurrent Networks and Transformers' },
      { week: 10, task: 'Capstone: Reproducible Training Pipeline' }
    ],
    options: [
      'Focus on Stanford CS231n for CV-leaning DL'
    ],
    capstoneProject: {
      id: 'reproducible-training-pipeline',
      title: 'Reproducible Training Pipeline',
      domain: 'Deep Learning',
      skillTargets: ['PyTorch', 'Experiment Tracking', 'Software Engineering'],
      steps: [
        'Build a config-based training script',
        'Implement checkpointing and logging',
        'Create an evaluation script',
        'Ensure reproducibility across runs'
      ],
      definitionOfDone: 'Config-based training + saved checkpoints + evaluation script.',
      suggestedTools: ['PyTorch', 'WandB', 'Hydra']
    }
  },
  {
    id: 'nlp-path',
    title: 'NLP Path',
    why: 'Understand how machines process and generate human language.',
    forWhom: 'Aspiring NLP engineers.',
    prerequisites: 'Deep Learning roadmap or equivalent',
    method: 'Focus on both classic NLP and modern LLM techniques.',
    weeklyPlan: [
      { week: 1, task: 'Text processing and Word Embeddings' },
      { week: 4, task: 'Sequence models (RNNs, LSTMs)' },
      { week: 7, task: 'Attention and Transformers' },
      { week: 10, task: 'Capstone: Text Classifier + Interpretation' }
    ],
    options: [
      'Curated university NLP lecture playlists (Stanford/Columbia)'
    ],
    capstoneProject: {
      id: 'text-classifier-interpretation',
      title: 'Text Classifier + Interpretation',
      domain: 'NLP',
      skillTargets: ['NLP', 'Transformers', 'Model Interpretability'],
      steps: [
        'Train a text classifier',
        'Perform confusion analysis',
        'Use SHAP or LIME for interpretation',
        'Explain failure cases'
      ],
      definitionOfDone: 'Classifier + confusion analysis + explanation of failure cases.',
      suggestedTools: ['Python', 'Hugging Face', 'SHAP']
    }
  },
  {
    id: 'cv-path',
    title: 'Computer Vision Path',
    why: 'Teach machines to see and understand the visual world.',
    forWhom: 'Aspiring CV engineers.',
    prerequisites: 'Deep Learning roadmap or equivalent',
    method: 'Combine classic CV techniques with modern DL approaches.',
    weeklyPlan: [
      { week: 1, task: 'Image processing basics' },
      { week: 4, task: 'CNNs and Object Detection (Stanford CS231n)' },
      { week: 7, task: 'Segmentation and Generative Models' },
      { week: 10, task: 'Capstone: Object Recognition Mini-System' }
    ],
    options: [
      'Stanford CS231n is the core resource here'
    ],
    capstoneProject: {
      id: 'object-recognition-system',
      title: 'Object Recognition Mini-System',
      domain: 'Computer Vision',
      skillTargets: ['CV', 'Object Detection', 'Real-time Processing'],
      steps: [
        'Build a dataset loader',
        'Implement an object detection model',
        'Evaluate on a test set',
        'Create a live demo'
      ],
      definitionOfDone: 'Dataset loader + model + evaluation + demo.',
      suggestedTools: ['Python', 'OpenCV', 'PyTorch']
    }
  },
  {
    id: 'data-analysis-mastery',
    title: 'Data Analysis Mastery',
    why: 'Master the art of extracting actionable insights from complex datasets.',
    forWhom: 'Aspiring data analysts and business intelligence professionals.',
    prerequisites: 'Basic Python knowledge',
    method: 'Focus on EDA, storytelling, and interactive visualization.',
    weeklyPlan: [
      { week: 1, task: 'Master Pandas and Data Cleaning (Harvard CS109 style)' },
      { week: 4, task: 'Exploratory Data Analysis and Statistics (Berkeley Data 100)' },
      { week: 7, task: 'Interactive Visualization and Dashboards (Streamlit/Dash)' },
      { week: 10, task: 'Capstone: End-to-End Market Analysis Engine' }
    ],
    options: [
      'Focus on Harvard CS109 for storytelling, Berkeley Data 100 for technical depth'
    ],
    capstoneProject: {
      id: 'market-analysis-engine',
      title: 'End-to-End Market Analysis Engine',
      domain: 'Data Analysis',
      skillTargets: ['Data Scraping', 'Statistical Analysis', 'Interactive Dashboards'],
      steps: [
        'Scrape and clean real-world market data',
        'Perform comparative statistical analysis',
        'Build an interactive dashboard for stakeholders',
        'Deploy the engine as a web application'
      ],
      definitionOfDone: 'A deployed dashboard with a comprehensive analysis report.',
      suggestedTools: ['Python', 'Pandas', 'BeautifulSoup', 'Streamlit']
    }
  }
];
