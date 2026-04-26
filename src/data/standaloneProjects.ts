import { Project } from '../types';

export const standaloneProjects: Project[] = [
  // Intro Level (Beginner)
  {
    id: 'standalone-search-framework',
    title: 'Search Algorithms Framework',
    domain: 'AI',
    level: 'Intro',
    skillTargets: ['Graph Search', 'Heuristics', 'AI Fundamentals'],
    steps: [
      'Implement BFS, DFS, and A* search algorithms',
      'Apply algorithms to problems like the 8-puzzle or pathfinding',
      'Conduct a heuristic comparison study'
    ],
    definitionOfDone: 'A framework that can solve tile puzzles with optimal moves.',
    suggestedTools: ['Python', 'PyGame (for visualization)'],
    role: 'Junior',
    isMustOnCV: false,
    possiblePositions: ['AI Programmer', 'Game Developer', 'Software Engineer']
  },
  {
    id: 'standalone-da-sql-analytics',
    title: 'SQL Analytics Project',
    domain: 'Data Analysis',
    level: 'Intro',
    skillTargets: ['SQL', 'Data Warehousing', 'Performance'],
    steps: [
      'Write complex joins and window functions',
      'Calculate key business metrics (LTV, Churn, ARR)',
      'Perform query optimization for large datasets'
    ],
    definitionOfDone: 'A GitHub repository with organized SQL scripts and a findings summary.',
    suggestedTools: ['PostgreSQL', 'BigQuery/Snowflake', 'dbt'],
    role: 'Junior',
    isMustOnCV: true,
    possiblePositions: ['Data Analyst', 'BI Analyst', 'Analytics Engineer']
  },
  {
    id: 'standalone-da-eda-report',
    title: 'Exploratory Data Analysis Report',
    domain: 'Data Analysis',
    level: 'Intro',
    skillTargets: ['Communication', 'Visualization', 'Statistics'],
    steps: [
      'Clean a messy, real-world dataset',
      'Perform visual and statistical testing',
      'Write a clear narrative report for non-technical stakeholders'
    ],
    definitionOfDone: 'A long-form report with clear visualizations and data-driven conclusions.',
    suggestedTools: ['Jupyter', 'Tableau/PowerBI', 'Matplotlib'],
    role: 'Junior',
    isMustOnCV: false,
    possiblePositions: ['Junior Data Analyst', 'Reporter', 'Operations Analyst']
  },
  {
    id: 'standalone-data-quality-audit',
    title: 'Data Cleaning & Quality Audit',
    domain: 'Data Science',
    level: 'Intro',
    skillTargets: ['Data Profiling', 'Reproducible Research', 'Automation'],
    steps: [
      'Identify missing values and detect duplicates in a messy dataset',
      'Implement outlier detection using statistical methods (Z-score, IQR)',
      'Validate complex business rules across related fields',
      'Generate a "Before & After" data quality report with metrics'
    ],
    definitionOfDone: 'A reproducible cleaning pipeline and a comprehensive audit report.',
    suggestedTools: ['Python', 'Pandas', 'Great Expectations', 'Dedupe.io'],
    role: 'Junior',
    isMustOnCV: true,
    possiblePositions: ['Data Quality Analyst', 'Junior Data Engineer', 'Associate Data Scientist']
  },

  // Intermediate Level
  {
    id: 'standalone-ds-library',
    title: 'Data Structures Library',
    domain: 'Computer Science',
    level: 'Intermediate',
    skillTargets: ['Algorithms', 'TypeScript', 'Unit Testing'],
    steps: [
      'Implement a high-performance Hash Table with collision handling',
      'Implement a Balanced Binary Search Tree (AVL or Red-Black)',
      'Implement a Graph API with BFS, DFS, and Dijkstra\'s algorithms',
      'Include comprehensive unit tests and Big-O complexity analysis'
    ],
    definitionOfDone: 'A tested library with clear API documentation and performance benchmarks.',
    suggestedTools: ['TypeScript', 'Jest', 'GitHub Actions'],
    role: 'Junior',
    isMustOnCV: true,
    possiblePositions: ['Software Engineer', 'Backend Developer', 'Computer Scientist']
  },
  {
    id: 'standalone-numerical-optimization',
    title: 'Numerical Optimization Toolkit',
    domain: 'Mathematics',
    level: 'Intermediate',
    skillTargets: ['Optimization', 'Numerical Methods', 'Calculus'],
    steps: [
      'Implement Gradient Descent and its variants',
      'Implement Newton\'s Method for optimization',
      'Solve constrained optimization problems',
      'Compare convergence rates of different algorithms'
    ],
    definitionOfDone: 'A library of optimization functions with visualization of convergence paths.',
    suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
    role: 'Junior',
    isMustOnCV: false,
    possiblePositions: ['Quantitative Analyst', 'Scientific Programmer', 'Mathematical Modeler']
  },
  {
    id: 'standalone-linalg-engine',
    title: 'Linear Algebra Engine',
    domain: 'Mathematics',
    level: 'Intermediate',
    skillTargets: ['Linear Algebra', 'Algorithms', 'Efficiency'],
    steps: [
      'Implement optimized Matrix Multiplication algorithms',
      'Perform LU Decomposition for solving linear systems',
      'Implement QR Decomposition for least-squares problems',
      'Implement Eigenvalue computation'
    ],
    definitionOfDone: 'A mathematical library that passes a suite of linear algebra test cases.',
    suggestedTools: ['C++', 'Eigen (as reference)', 'BLAS'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Graphics Programmer', 'Simulation Engineer', 'High Performance Computing Developer']
  },
  {
    id: 'standalone-game-ai',
    title: 'Game AI',
    domain: 'AI',
    level: 'Intermediate',
    skillTargets: ['Minimax', 'Alpha-Beta Pruning', 'Game Theory'],
    steps: [
      'Implement Minimax with Alpha-Beta pruning',
      'Build a playable Tic-Tac-Toe or Chess engine',
      'Evaluate performance against different difficulty levels'
    ],
    definitionOfDone: 'An AI opponent that is mathematically unbeatable in Tic-Tac-Toe.',
    suggestedTools: ['Python', 'Chess.js (if web)'],
    role: 'Junior',
    isMustOnCV: true,
    possiblePositions: ['Game AI Developer', 'Software Engineer (Games)', 'Robotics Engineer']
  },
  {
    id: 'standalone-csp-solver',
    title: 'Constraint Satisfaction Solver',
    domain: 'AI',
    level: 'Intermediate',
    skillTargets: ['CSP', 'Backtracking', 'Logic'],
    steps: [
      'Build a generalized Sudoku solver',
      'Implement backtracking with forward checking and heuristics',
      'Add constraint propagation logic'
    ],
    definitionOfDone: 'A solver that can handle difficult Sudoku puzzles in milliseconds.',
    suggestedTools: ['Python', 'Constraint Propagators'],
    role: 'Senior',
    isMustOnCV: false,
    possiblePositions: ['Operations Researcher', 'Backend Engineer', 'Logic Programmer']
  },
  {
    id: 'standalone-ml-from-scratch',
    title: 'Machine Learning From Scratch',
    domain: 'Machine Learning',
    level: 'Intermediate',
    skillTargets: ['ML Algorithms', 'Mathematics', 'Python'],
    steps: [
      'Implement Linear Regression and Logistic Regression without libraries',
      'Implement a Decision Tree classifier',
      'Implement Gradient Descent optimization from scratch'
    ],
    definitionOfDone: 'A custom ML library that achieves comparable accuracy to scikit-learn.',
    suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Machine Learning Engineer', 'ML Researcher', 'Data Scientist']
  },
  {
    id: 'standalone-ml-pipeline',
    title: 'End-to-End ML Pipeline',
    domain: 'Machine Learning',
    level: 'Intermediate',
    skillTargets: ['Data Engineering', 'Scikit-Learn', 'Pipeline Design'],
    steps: [
      'Solve a business problem like Credit Risk Prediction',
      'Perform data cleaning and feature engineering',
      'Implement cross-validation and hyperparameter tuning',
      'Conduct a detailed metric analysis'
    ],
    definitionOfDone: 'A reproducible Jupyter Notebook documenting the entire pipeline.',
    suggestedTools: ['Python', 'Pandas', 'Scikit-Learn', 'Seaborn'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Data Scientist', 'Machine Learning Engineer', 'Data Analyst']
  },
  {
    id: 'standalone-dl-from-scratch',
    title: 'Neural Network From Scratch',
    domain: 'Deep Learning',
    level: 'Intermediate',
    skillTargets: ['Calculus', 'Backpropagation', 'Tensors'],
    steps: [
      'Implement forward pass and backpropagation manually',
      'Train the network on the MNIST dataset',
      'Visualize loss curves and weights'
    ],
    definitionOfDone: 'A NumPy-only implementation that reaches >90% accuracy on MNIST.',
    suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Deep Learning Engineer', 'AI Researcher', 'Computer Vision Developer']
  },
  {
    id: 'standalone-cnn-classifier',
    title: 'CNN Image Classifier',
    domain: 'Deep Learning',
    level: 'Intermediate',
    skillTargets: ['CNN', 'Computer Vision', 'Data Augmentation'],
    steps: [
      'Train a Convolutional Neural Network on CIFAR-10',
      'Implement data augmentation for better generalization',
      'Apply regularization techniques like Dropout or Batch Norm',
      'Compare performance of different architectures'
    ],
    definitionOfDone: 'A PyTorch or TensorFlow script showing high validation accuracy.',
    suggestedTools: ['PyTorch/TensorFlow', 'CUDA', 'OpenCV'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Computer Vision Engineer', 'Machine Learning Engineer', 'AI Developer']
  },
  {
    id: 'standalone-ds-case-study',
    title: 'Business Case Study',
    domain: 'Data Science',
    level: 'Intermediate',
    skillTargets: ['EDA', 'Forecasting', 'Business Logic'],
    steps: [
      'Solve a sales forecasting or inventory problem',
      'Perform exhaustive Exploratory Data Analysis (EDA)',
      'Develop time series models and extract business insights'
    ],
    definitionOfDone: 'A business-ready presentation detailing the data-driven strategy.',
    suggestedTools: ['Python/R', 'Prophet', 'Plotly'],
    role: 'Manager',
    isMustOnCV: true,
    possiblePositions: ['Business Analyst', 'Decision Scientist', 'Data Science Manager']
  },
  {
    id: 'standalone-ds-segmentation',
    title: 'Customer Segmentation',
    domain: 'Data Science',
    level: 'Intermediate',
    skillTargets: ['Clustering', 'PCA', 'Visualization'],
    steps: [
      'Implement KMeans and DBSCAN for customer clustering',
      'Visualize segments using PCA or t-SNE',
      'Interpret and label segments based on behavior'
    ],
    definitionOfDone: 'A segmentation report providing actionable marketing recommendations.',
    suggestedTools: ['Scikit-Learn', 'Seaborn', 'Python'],
    role: 'Senior',
    isMustOnCV: false,
    possiblePositions: ['Marketing Analyst', 'Behavioral Data Scientist', 'Product Analyst']
  },
  {
    id: 'standalone-ds-dashboard',
    title: 'Interactive Dashboard',
    domain: 'Data Science',
    level: 'Intermediate',
    skillTargets: ['Frontend', 'Data Visualization', 'Streamlit'],
    steps: [
      'Build a web dashboard using Streamlit or Dash',
      'Add live data filters and interactive charts',
      'Integrate model predictions into the UI'
    ],
    definitionOfDone: 'A public-facing web app with functional data interactions.',
    suggestedTools: ['Streamlit', 'Plotly', 'Pandas'],
    role: 'Junior',
    isMustOnCV: true,
    possiblePositions: ['Fullstack Data Developer', 'BI Developer', 'Frontend Engineer']
  },
  {
    id: 'standalone-da-ab-testing',
    title: 'A/B Testing Analysis',
    domain: 'Data Analysis',
    level: 'Intermediate',
    skillTargets: ['Statistics', 'Experimental Design', 'Analysis'],
    steps: [
      'Design an experiment and define sample size',
      'Calculate hypothesis testing and confidence intervals',
      'Analyze practical significance and provide recommendations'
    ],
    definitionOfDone: 'A comprehensive A/B test analysis report with a clear decision outcome.',
    suggestedTools: ['Python', 'SciPy', 'Statsmodels'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Product Growth Analyst', 'Experimentalist', 'Conversion Rate Optimizer']
  },
  {
    id: 'standalone-cohort-retention',
    title: 'Cohort Retention Analysis',
    domain: 'Data Analysis',
    level: 'Intermediate',
    skillTargets: ['Python', 'SQL', 'Product Analytics', 'Visualization'],
    steps: [
      'Define user cohorts by signup month or acquisition channel',
      'SQL: Aggregate user activity into a cohort matrix',
      'Compute retention rates over time (Day/Month N retention)',
      'Visualize results using a retention heatmap'
    ],
    definitionOfDone: 'A retention matrix, heatmap, and report with churn-reduction recommendations.',
    suggestedTools: ['SQL (PostgreSQL)', 'Python', 'Seaborn', 'Pandas'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Product Analyst', 'Growth Data Scientist', 'Retention Specialist']
  },
  {
    id: 'standalone-funnel-analysis',
    title: 'Behavioral Funnel Analysis',
    domain: 'Data Analysis',
    level: 'Intermediate',
    skillTargets: ['User Path Tracking', 'Conversion Rate Optimization', 'Segment Analysis'],
    steps: [
      'Map the user journey from visit to conversion',
      'Calculate drop-off rates at each stage of the funnel',
      'Perform segment analysis by device, country, and channel',
      'Identify critical bottlenecks using friction analysis'
    ],
    definitionOfDone: 'A funnel visualization dashboard and a bottleneck identification report.',
    suggestedTools: ['SQL Window Functions', 'Mixpanel/GA4 (concepts)', 'Plotly'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['E-commerce Analyst', 'Market Growth Lead', 'Conversion Rate Analyst']
  },
  {
    id: 'standalone-nlp-scratch',
    title: 'NLP Pipeline From Scratch',
    domain: 'NLP',
    level: 'Intermediate',
    skillTargets: ['Parsing', 'TF-IDF', 'Classification'],
    steps: [
      'Implement custom tokenization and text normalization',
      'Calculate TF-IDF scores from scratch',
      'Build a Naive Bayes classifier for text'
    ],
    definitionOfDone: 'A documented library capable of classifying documents with decent performance.',
    suggestedTools: ['Python', 'NumPy', 'Regex'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['NLP Scientist', 'Computational Linguist', 'Machine Learning Engineer']
  },
  {
    id: 'standalone-nlp-application',
    title: 'End-to-End NLP Application',
    domain: 'NLP',
    level: 'Intermediate',
    skillTargets: ['Software Dev', 'Deployment', 'NLP'],
    steps: [
      'Develop a Resume Classifier or Spam Detector',
      'Deploy the model as a REST API',
      'Build a simple web interface for user input'
    ],
    definitionOfDone: 'A functional application where users can input text and see real-time predictions.',
    suggestedTools: ['FastAPI', 'React', 'Docker'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Product Software Engineer (AI)', 'Backend Engineer', 'Fullstack ML Developer']
  },
  {
    id: 'standalone-cv-cnn-scratch',
    title: 'CNN From Scratch',
    domain: 'Computer Vision',
    level: 'Intermediate',
    skillTargets: ['Math of CNNs', 'Implementation', 'Matrix Calculus'],
    steps: [
      'Implement convolution and pooling layers from scratch',
      'Implement backpropagation through convolutional layers',
      'Train on the MNIST dataset'
    ],
    definitionOfDone: 'A module showing a raw pixel-to-prediction flow without DL frameworks.',
    suggestedTools: ['Python', 'NumPy'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Computer Vision Researcher', 'Deep Learning Engineer', 'Scientific Programmer']
  },
  {
    id: 'standalone-cv-realtime-app',
    title: 'Real-Time Vision Application',
    domain: 'Computer Vision',
    level: 'Intermediate',
    skillTargets: ['OpenCV', 'Deployment', 'Inference'],
    steps: [
      'Build a Face Recognition or Mask Detection system',
      'Integrate OpenCV for web cam stream processing',
      'Deploy the application for real-world usage'
    ],
    definitionOfDone: 'A desktop or web app that performs visually accurate real-time inference.',
    suggestedTools: ['OpenCV', 'Python', 'Flask/FastAPI'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Embedded Vision Engineer', 'Product Engineer (AI)', 'Security Systems Developer']
  },

  // Advanced Level (Senior)
  {
    id: 'standalone-http-server-cpp',
    title: 'Multithreaded HTTP Server in C/C++',
    domain: 'Systems',
    level: 'Advanced',
    skillTargets: ['C++', 'Networking', 'Concurrency', 'HTTP/1.1'],
    steps: [
      'Build a basic HTTP 1.1 server from scratch',
      'Implement a thread pool to handle concurrent clients',
      'Handle concurrent clients using non-blocking I/O or multi-threading',
      'Benchmark performance under load',
      'Add logging and request parsing logic'
    ],
    definitionOfDone: 'A functional C++ server capable of serving static files to multiple concurrent users.',
    suggestedTools: ['g++', 'Make/CMake', 'pthreads', 'Apache Benchmark (ab)'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Backend Engineer', 'Systems Programmer', 'Network Engineer']
  },
  {
    id: 'standalone-memory-allocator',
    title: 'Custom Memory Allocator',
    domain: 'Systems',
    level: 'Advanced',
    skillTargets: ['C', 'Memory Management', 'Data Structures'],
    steps: [
      'Implement malloc and free alternatives',
      'Handle memory fragmentation with coalescing',
      'Implement an efficient free list strategy (e.g., buddy system)',
      'Compare performance and overhead with the system allocator'
    ],
    definitionOfDone: 'A library that can be used to manage a fixed-size memory pool with low overhead.',
    suggestedTools: ['C', 'Valgrind', 'GDB'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Systems Engineer', 'Embedded Developer', 'Kernel Engineer']
  },
  {
    id: 'standalone-file-system',
    title: 'Simple File System Simulator',
    domain: 'Systems',
    level: 'Advanced',
    skillTargets: ['C', 'Storage', 'Data Structures'],
    steps: [
      'Simulate inodes and block allocation strategies',
      'Support file operations: create, read, write, and delete',
      'Implement a hierarchical directory structure',
      'Add persistence using a binary file as a virtual disk'
    ],
    definitionOfDone: 'A CLI tool that can format, mount, and manage a simulated file system.',
    suggestedTools: ['C', 'Binary I/O', 'Hex Editor (for debugging)'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Storage Engineer', 'Operating Systems Developer', 'Systems Software Engineer']
  },
  {
    id: 'standalone-db-engine',
    title: 'Mini Database Engine',
    domain: 'Computer Science',
    level: 'Advanced',
    skillTargets: ['Databases', 'Indexing', 'Parsing'],
    steps: [
      'Support basic SQL commands (SELECT, INSERT)',
      'Implement efficient indexing using B-Trees',
      'Handle file-based storage for persistence',
      'Develop a simple query parser'
    ],
    definitionOfDone: 'A lightweight database engine that stores and retrieves data efficiently.',
    suggestedTools: ['Python/C++', 'B-Tree Implementation', 'SQL Parser'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Database Engineer', 'Backend Architect', 'Systems Engineer']
  },
  {
    id: 'standalone-compiler',
    title: 'Compiler for a Small Language',
    domain: 'Computer Science',
    level: 'Advanced',
    skillTargets: ['Compilers', 'Context-Free Grammars', 'Optimization'],
    steps: [
      'Build a lexical analyzer (lexer)',
      'Design and implement a recursive-descent parser',
      'Generate an Abstract Syntax Tree (AST)',
      'Implement a simple interpreter or a bytecode generator'
    ],
    definitionOfDone: 'A compiler that transforms source code into executable bytecode or immediate results.',
    suggestedTools: ['ANTLR', 'LLVM (optional)', 'Python/Java'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Compiler Engineer', 'Language Tools Developer', 'Senior Software Engineer']
  },
  {
    id: 'standalone-revenue-kpi',
    title: 'Executive Revenue & KPI Dashboard',
    domain: 'Data Analysis',
    level: 'Advanced',
    skillTargets: ['Business KPIs', 'Executive Reporting', 'Financial Modeling'],
    steps: [
      'Calculate core metrics: Revenue Trends, ARPU, LTV, and Growth Rate (MoM/YoY)',
      'Implement advanced SQL aggregations and time-based grouping',
      'BONUS: Forecast future revenue utilizing simple regression models',
      'Design an executive-style dashboard that communicates strategic value'
    ],
    definitionOfDone: 'A high-level business dashboard with predictive insights and clear KPI trends.',
    suggestedTools: ['Tableau/PowerBI', 'SQL Aggregations', 'Python (Scikit-Learn)'],
    role: 'Manager',
    isMustOnCV: true,
    possiblePositions: ['Business Intelligence Lead', 'Senior Revenue Operations Analyst', 'Strategic Data Consultant']
  },
  {
    id: 'standalone-time-series-forecast',
    title: 'Time Series Forecasting & Analysis',
    domain: 'Data Science',
    level: 'Advanced',
    skillTargets: ['Time Series Modeling', 'Forecasting', 'Statistical Testing'],
    steps: [
      'Decompose series into trend, seasonality, and residual components',
      'Conduct stationarity testing (ADF test) and rolling average analysis',
      'Implement forecasting models using ARIMA, SARIMA, or Facebook Prophet',
      'Verify performance using error metrics like MAE and RMSE'
    ],
    definitionOfDone: 'A validated forecasting engine with a detailed evaluation of various model performances.',
    suggestedTools: ['Python', 'Statsmodels', 'Prophet', 'Matplotlib'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Forecasting Specialist', 'Demand Planner', 'Research Data Scientist']
  },
  {
    id: 'standalone-monte-carlo',
    title: 'Monte Carlo Simulation Project',
    domain: 'Mathematics',
    level: 'Advanced',
    skillTargets: ['Statistics', 'Bayesian Inference', 'MCMC'],
    steps: [
      'Perform Bayesian parameter estimation using simulation',
      'Implement a Markov Chain Monte Carlo (MCMC) sampler',
      'Conduct confidence interval analysis',
      'Compare analytical results with simulated outcomes'
    ],
    definitionOfDone: 'A research-style report showing the power of simulation for complex math.',
    suggestedTools: ['Python', 'PyMC', 'ArviZ'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Risk Analyst', 'Data Scientist', 'Statistical Researcher']
  },
  {
    id: 'standalone-ml-deployment',
    title: 'Production ML Deployment',
    domain: 'Machine Learning',
    level: 'Advanced',
    skillTargets: ['MLOps', 'FastAPI', 'Docker', 'Cloud'],
    steps: [
      'Train and serialize a machine learning model',
      'Build a prediction API using FastAPI',
      'Dockerize the application for portability',
      'Deploy on a cloud provider and add monitoring/logging'
    ],
    definitionOfDone: 'A live URL or Docker image providing a model endpoint.',
    suggestedTools: ['FastAPI', 'Docker', 'AWS/GCP/Azure', 'Prometheus'],
    role: 'Manager',
    isMustOnCV: true,
    possiblePositions: ['MLOps Engineer', 'AI Infrastructure Engineer', 'Software Architect']
  },
  {
    id: 'standalone-transformer-nlp',
    title: 'Transformer-Based NLP Model',
    domain: 'Deep Learning',
    level: 'Advanced',
    skillTargets: ['Transformers', 'Hugging Face', 'BERT'],
    steps: [
      'Fine-tune a BERT-style model for a text classification task',
      'Perform hyperparameter tuning and error analysis',
      'Examine model interpretability via attention maps'
    ],
    definitionOfDone: 'A fine-tuned model achieving state-of-the-art results on a target dataset.',
    suggestedTools: ['Hugging Face Transformers', 'PyTorch', 'Weights & Biases'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['NLP Engineer', 'Deep Learning Researcher', 'Large Language Model Developer']
  },
  {
    id: 'standalone-nlp-transformers',
    title: 'Sentiment Analysis with Transformers',
    domain: 'NLP',
    level: 'Advanced',
    skillTargets: ['DL for NLP', 'BERT', 'Error Analysis'],
    steps: [
      'Fine-tune a pretrained BERT model on sentiment data',
      'Perform detailed error analysis on edge cases',
      'Compare Transformer performance with classical ML approaches'
    ],
    definitionOfDone: 'A performance report comparing various NLP modeling strategies.',
    suggestedTools: ['Hugging Face', 'PyTorch', 'Scikit-Learn'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Senior NLP Specialist', 'Research Scientist', 'AI Specialist']
  },
  {
    id: 'standalone-cv-object-detection',
    title: 'Object Detection Project',
    domain: 'Computer Vision',
    level: 'Advanced',
    skillTargets: ['Object Detection', 'YOLO', 'mAP'],
    steps: [
      'Fine-tune a YOLO-style model on a custom dataset',
      'Evaluate performance using mean Average Precision (mAP)',
      'Perform inference speed and accuracy optimization'
    ],
    definitionOfDone: 'A detector that correctly identifies custom objects in images or real-time video.',
    suggestedTools: ['Ultralytics YOLO', 'PyTorch', 'Roboflow'],
    role: 'Senior',
    isMustOnCV: true,
    possiblePositions: ['Junior Robotics Developer', 'Video Analytics Engineer', 'AI Hardware Specialist']
  }
];
