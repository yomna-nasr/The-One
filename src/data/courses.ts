import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'mit-6-0001',
    title: '6.0001 Introduction to Computer Science and Programming in Python',
    university: 'MIT',
    topics: ['Computer Science'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A rigorous introduction to the fundamental concepts of computational thinking and programming.',
    forWhom: 'Complete beginners or those looking for a solid foundation in Python and Computer Science logic.',
    links: {
      coursePage: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/',
      playlist: 'https://www.youtube.com/playlist?list=PLUl4u3cNGP63WbdFxL8giv4yhgdMGaZNA'
    },
    editorialReview: 'This is the gold standard for starting your Computer Science journey. It doesn\'t just teach syntax; it teaches you how to think like a computer scientist.',
    studyGuide: 'Do all problem sets. Rewrite your solutions cleanly. Keep a log of your errors and how you fixed them.',
    projects: [
      {
        id: 'cli-habit-tracker',
        title: 'CLI Habit Tracker',
        domain: 'Computer Science',
        level: 'Intro',
        skillTargets: ['Python', 'Data Structures', 'File I/O'],
        steps: [
          'Design the data model (JSON or CSV)',
          'Implement CRUD operations for habits',
          'Add weekly stats calculation',
          'Write basic unit tests'
        ],
        definitionOfDone: 'A functional CLI app with a README explaining how to use it.',
        suggestedTools: ['Python', 'Pytest'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Python Developer', 'Junior Backend Engineer', 'Junior Software Developer']
      }
    ]
  },
  {
    id: 'mit-18-06',
    title: '18.06 Linear Algebra',
    university: 'MIT',
    topics: ['Mathematics', 'Machine Learning'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Gilbert Strang provides the best intuition for SVD, eigenvalues, and projections.',
    forWhom: 'Anyone wanting to understand the mathematical engine behind Machine Learning.',
    links: {
      coursePage: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
      playlist: 'https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8'
    },
    editorialReview: 'Strang is a legend. His ability to make abstract concepts feel physical is unmatched.',
    studyGuide: 'Watch the lectures, but spend twice as much time on the problems. Focus on the "why" of matrix decompositions.',
    projects: [
      {
        id: 'svd-image-compressor',
        title: 'SVD Image Compressor',
        domain: 'Mathematics',
        level: 'Intro',
        skillTargets: ['Linear Algebra', 'NumPy', 'Image Processing'],
        steps: [
          'Load an image as a matrix',
          'Perform Singular Value Decomposition (SVD)',
          'Reconstruct the image using top-k components',
          'Plot quality vs. k and write an explanation'
        ],
        definitionOfDone: 'A Jupyter notebook with visualizations and a short report.',
        suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Data Scientist (Junior)', 'Research Assistant', 'ML Engineer (Theory)']
      }
    ]
  },
  {
    id: 'harvard-cs50',
    title: 'CS50: Introduction to Computer Science',
    university: 'Harvard',
    topics: ['Computer Science'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'Paid',
    whyItsGreat: 'The most engaging and well-produced introduction to Computer Science in the world.',
    forWhom: 'Beginners who want a high-energy, project-based introduction to the field.',
    links: {
      coursePage: 'https://cs50.harvard.edu/x/',
      playlist: 'https://www.youtube.com/user/cs50tv'
    },
    editorialReview: 'David Malan is a force of nature. The production quality is unmatched, and the assignments are genuinely fun.',
    studyGuide: 'Engage with the community. Don\'t be afraid of the "C" portion—it builds character and understanding.',
    projects: [
      {
        id: 'cs50-web-app',
        title: 'Final CS50-style Web App',
        domain: 'Computer Science',
        level: 'Intro',
        skillTargets: ['Web Dev', 'Flask/Django', 'SQL'],
        steps: [
          'Define a problem to solve',
          'Design the database schema',
          'Build the backend and frontend',
          'Deploy the application'
        ],
        definitionOfDone: 'A deployed web app with a demo video and documentation.',
        suggestedTools: ['Python', 'Flask', 'SQLite', 'HTML/CSS'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Fullstack Developer', 'Junior Web Developer', 'Product Engineer']
      }
    ]
  },
  {
    id: 'harvard-stat110',
    title: 'STAT 110: Probability',
    university: 'Harvard',
    topics: ['Mathematics', 'Data Science'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Joe Blitzstein makes probability intuitive and fun through storytelling and clear examples.',
    forWhom: 'Anyone needing a solid foundation in probability for data science or machine learning.',
    links: {
      coursePage: 'https://projects.iq.harvard.edu/stat110',
      playlist: 'https://www.youtube.com/playlist?list=PLLVplP8OIVc8EktkrD3Q8td0GmId7DjW0'
    },
    editorialReview: 'Blitzstein is one of the best teachers at Harvard. His "Strategic Practice" problems are excellent for building intuition.',
    studyGuide: 'Watch the lectures and do the practice problems. Don\'t just memorize formulas; understand the stories behind them.',
    projects: [
      {
        id: 'probability-simulator',
        title: 'Probability Simulator',
        domain: 'Mathematics',
        level: 'Intro',
        skillTargets: ['Python', 'Statistics', 'Visualization'],
        steps: [
          'Simulate classic probability puzzles (e.g., Monty Hall)',
          'Visualize the convergence of empirical results to theoretical values',
          'Implement various probability distributions',
          'Create an interactive dashboard'
        ],
        definitionOfDone: 'An interactive dashboard or notebook with simulations and visualizations.',
        suggestedTools: ['Python', 'Streamlit', 'Matplotlib'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Data Analyst', 'Simulation Engineer', 'Quantitative Junior']
      }
    ]
  },
  {
    id: 'berkeley-cs61a',
    title: 'CS 61A: The Structure and Interpretation of Computer Programs',
    university: 'UC Berkeley',
    topics: ['Computer Science'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Deep programming foundations focusing on abstraction and recursion.',
    forWhom: 'Those who want to understand the "soul" of programming beyond just syntax.',
    links: {
      coursePage: 'https://cs61a.org/'
    },
    editorialReview: 'Based on the legendary SICP, this course will change how you think about code. It\'s challenging but transformative.',
    studyGuide: 'Focus on the labs. The projects are where the real learning happens. Don\'t rush the recursion section.',
    projects: [
      {
        id: 'mini-interpreter',
        title: 'Mini-Interpreter',
        domain: 'Computer Science',
        level: 'Intro',
        skillTargets: ['Recursion', 'Parsing', 'Functional Programming'],
        steps: [
          'Define the grammar for a tiny language',
          'Implement the lexer and parser',
          'Build the evaluation engine',
          'Add support for variables and functions'
        ],
        definitionOfDone: 'A working interpreter for a subset of a language with tests.',
        suggestedTools: ['Python'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Software Engineer', 'Systems Developer', 'Language Tools Developer']
      }
    ]
  },
  {
    id: 'mit-6-034',
    title: '6.034 Artificial Intelligence',
    university: 'MIT',
    topics: ['AI'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Patrick Winston\'s legendary lectures provide a deep, intuitive understanding of AI foundations.',
    forWhom: 'Anyone wanting a classic, high-signal introduction to AI reasoning and search.',
    links: {
      coursePage: 'https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/',
      playlist: 'https://www.youtube.com/playlist?list=PLUl4u3cNGP63gFHB6xb-kVBiQHYe_4hSi'
    },
    editorialReview: 'Winston was a master communicator. This course is timeless, focusing on the core ideas that still drive AI today.',
    studyGuide: 'Watch the lectures for the intuition, then implement the search algorithms. The "Right-to-Left" rule in alpha-beta pruning is a classic.',
    projects: [
      {
        id: 'constraint-satisfaction-solver',
        title: 'Constraint Satisfaction Solver',
        domain: 'AI',
        level: 'Intro',
        skillTargets: ['Search', 'Backtracking', 'Logic'],
        steps: [
          'Define a CSP problem (e.g., Map Coloring)',
          'Implement backtracking search',
          'Add heuristics like Forward Checking',
          'Test on various problem sizes'
        ],
        definitionOfDone: 'A solver that can efficiently solve standard CSP problems.',
        suggestedTools: ['Python'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Backend Engineer', 'Logistics Developer', 'Optimization Specialist']
      }
    ]
  },
  {
    id: 'harvard-cs109',
    title: 'CS109 Data Science',
    university: 'Harvard',
    topics: ['Data Science'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A fantastic, end-to-end introduction to the data science lifecycle.',
    forWhom: 'Aspiring data scientists who want to learn how to handle real, messy data.',
    links: {
      coursePage: 'http://cs109.github.io/2015/',
      playlist: 'https://www.youtube.com/playlist?list=PL2SOU6wwxB0uWWHSbdjwREbcGu8mev082'
    },
    editorialReview: 'This course is very practical. It teaches you not just the models, but the storytelling and communication aspects of data science.',
    studyGuide: 'The labs are excellent. Focus on the data cleaning and exploratory data analysis (EDA) phases.',
    projects: [
      {
        id: 'election-predictor',
        title: 'Election Predictor',
        domain: 'Data Analysis',
        level: 'Intro',
        skillTargets: ['Web Scraping', 'EDA', 'Modeling'],
        steps: [
          'Scrape polling data from the web',
          'Perform EDA to find trends',
          'Build a simple predictive model',
          'Visualize the uncertainty in your predictions'
        ],
        definitionOfDone: 'A notebook that predicts an election outcome with clear visualizations.',
        suggestedTools: ['Python', 'Pandas', 'BeautifulSoup', 'Seaborn'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Data Journalist', 'Political Analyst', 'Data Scientist']
      },
      {
        id: 'customer-churn-pipeline',
        title: 'End-to-End Customer Churn Pipeline',
        domain: 'Data Analysis',
        level: 'Intro',
        skillTargets: ['ETL', 'Classification', 'Model Deployment'],
        steps: [
          'Ingest raw customer behavior data from multiple sources',
          'Perform automated feature engineering and selection',
          'Train and tune a Gradient Boosted model (XGBoost/LightGBM)',
          'Create a simple API endpoint to serve predictions'
        ],
        definitionOfDone: 'A complete pipeline from raw data to a prediction API with performance metrics.',
        suggestedTools: ['Python', 'Pandas', 'XGBoost', 'Flask/FastAPI'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Business Analyst', 'Data Engineer', 'Product Data Scientist']
      }
    ]
  },
  {
    id: 'harvard-cs50-ai',
    title: 'CS50\'s Introduction to Artificial Intelligence with Python',
    university: 'Harvard',
    topics: ['AI'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'Paid',
    whyItsGreat: 'A project-based introduction to the concepts and algorithms at the foundation of modern AI.',
    forWhom: 'Learners who have completed CS50 and want to dive into AI.',
    links: {
      coursePage: 'https://cs50.harvard.edu/ai/',
      playlist: 'https://www.youtube.com/playlist?list=PLhQjrBD2T382Nz7z1AEXgu8dxSen7j7zX'
    },
    editorialReview: 'Brian Yu does a fantastic job of making complex AI concepts accessible through Python. The projects are the highlight.',
    studyGuide: 'Do the projects. They are the best way to internalize the concepts of search, logic, and probability.',
    projects: [
      {
        id: 'degrees-of-separation',
        title: 'Degrees of Separation (Six Degrees of Kevin Bacon)',
        domain: 'AI',
        level: 'Intro',
        skillTargets: ['Search', 'BFS', 'Data Structures'],
        steps: [
          'Load movie and actor data',
          'Implement Breadth-First Search (BFS)',
          'Find the shortest path between two actors',
          'Optimize for large datasets'
        ],
        definitionOfDone: 'A functional script that finds the shortest path between any two actors.',
        suggestedTools: ['Python'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Backend Engineer', 'Graph Data Specialist', 'Software Developer']
      }
    ]
  },
  {
    id: 'mit-6-036',
    title: '6.036 Introduction to Machine Learning',
    university: 'MIT',
    topics: ['Machine Learning'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A very structured and accessible introduction to the core algorithms of ML.',
    forWhom: 'Undergraduates or beginners who want a solid, first-principles introduction to ML.',
    links: {
      coursePage: 'https://ocw.mit.edu/courses/6-036-introduction-to-machine-learning-fall-2020/'
    },
    editorialReview: 'MIT\'s intro ML course is fantastic. It builds up from simple linear models to neural networks with great clarity.',
    studyGuide: 'Work through the online exercises. They are designed to build your intuition step-by-step.',
    projects: [
      {
        id: 'linear-classifier-from-scratch',
        title: 'Linear Classifier from Scratch',
        domain: 'Machine Learning',
        level: 'Intro',
        skillTargets: ['Python', 'NumPy', 'Optimization'],
        steps: [
          'Implement the Perceptron algorithm',
          'Implement Logistic Regression with SGD',
          'Compare performance on a synthetic dataset',
          'Visualize the decision boundaries'
        ],
        definitionOfDone: 'A notebook with implementations and visualizations of linear classifiers.',
        suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Junior ML Engineer', 'Data Analyst', 'Software Developer']
      }
    ]
  },
  {
    id: 'stanford-cs109-prob',
    title: 'CS109: Probability for Computer Scientists',
    university: 'Stanford',
    topics: ['Mathematics', 'Computer Science'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A modern, CS-first approach to probability that uses code to build intuition.',
    forWhom: 'Computer science students who want to see how probability applies to real algorithms.',
    links: {
      coursePage: 'https://web.stanford.edu/class/cs109/'
    },
    editorialReview: 'Chris Piech makes probability feel like a tool for building, not just a set of formulas to memorize.',
    studyGuide: 'The "Problem Sets" are where you apply the theory to things like biometric security and medical testing.',
    projects: [
      {
        id: 'naive-bayes-classifier',
        title: 'Naive Bayes Classifier from Scratch',
        domain: 'Computer Science',
        level: 'Intro',
        skillTargets: ['Probability', 'Python', 'Classification'],
        steps: [
          'Implement the Naive Bayes algorithm for text classification',
          'Handle Laplace smoothing',
          'Train on a spam detection dataset',
          'Evaluate using precision and recall'
        ],
        definitionOfDone: 'A working classifier with a performance report on a real dataset.',
        suggestedTools: ['Python'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Junior Data Scientist', 'Backend Developer', 'Machine Learning Junior']
      }
    ]
  },
  {
    id: 'michigan-eecs445',
    title: 'EECS 445: Introduction to Machine Learning',
    university: 'Michigan',
    topics: ['Machine Learning'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A very strong, comprehensive undergraduate introduction to machine learning.',
    forWhom: 'Students looking for a solid, first-principles introduction to ML algorithms.',
    links: {
      coursePage: 'https://eecs445-f21.github.io/'
    },
    editorialReview: 'Michigan\'s intro ML course is excellent. It provides a very balanced view of theory and application.',
    studyGuide: 'The "Projects" are the core of the course. Make sure you understand the implementation details of each algorithm.',
    projects: [
      {
        id: 'random-forest-from-scratch',
        title: 'Random Forest from Scratch',
        domain: 'Machine Learning',
        level: 'Intro',
        skillTargets: ['Algorithms', 'Decision Trees', 'Ensemble Learning'],
        steps: [
          'Implement a Decision Tree classifier',
          'Implement the Bagging procedure',
          'Build the Random Forest ensemble',
          'Evaluate on a standard dataset and compare with Scikit-Learn'
        ],
        definitionOfDone: 'A working Random Forest implementation with a performance report.',
        suggestedTools: ['Python', 'NumPy'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Junior ML Engineer', 'Data Analyst', 'Software Developer']
      }
    ]
  },
  {
    id: 'mit-6-s191',
    title: '6.S191: Introduction to Deep Learning',
    university: 'MIT',
    topics: ['Deep Learning'],
    level: 'Intro',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A high-intensity, incredibly well-produced introduction to the field.',
    forWhom: 'Beginners who want a fast-paced, engaging overview of deep learning.',
    links: {
      coursePage: 'http://introtodeeplearning.com/',
      playlist: 'https://www.youtube.com/playlist?list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI'
    },
    editorialReview: 'MIT\'s 6.S191 is a masterpiece of educational production. It covers a lot of ground in a very short time.',
    studyGuide: 'The "Labs" are designed to be completed in Google Colab. They are very hands-on and fun.',
    projects: [
      {
        id: 'music-generation-rnn',
        title: 'Music Generation with RNNs',
        domain: 'Deep Learning',
        level: 'Intro',
        skillTargets: ['RNNs', 'LSTMs', 'Sequence Generation'],
        steps: [
          'Preprocess a dataset of MIDI or ABC notation music',
          'Build and train an LSTM model for sequence prediction',
          'Generate new music sequences from a seed',
          'Evaluate the quality of the generated music'
        ],
        definitionOfDone: 'A functional music generation script with sample outputs.',
        suggestedTools: ['Python', 'TensorFlow/PyTorch'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Junior AI Researcher', 'Creative Coder', 'Backend Developer (AI)']
      }
    ]
  },
  {
    id: '3b1b-linear-algebra',
    title: 'Essence of Linear Algebra',
    university: '3Blue1Brown',
    topics: ['Mathematics'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'The most intuitive explanation of linear algebra ever created. It focuses on geometric intuition rather than just formulas.',
    forWhom: 'Anyone who wants to truly understand what matrices and vectors are doing.',
    links: {
      coursePage: 'https://www.3blue1brown.com/topics/linear-algebra',
      playlist: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'
    },
    editorialReview: 'Grant Sanderson has a gift for making abstract math feel physical. This series is essential for anyone entering Machine Learning.',
    studyGuide: 'Watch these before or alongside a formal course like MIT 18.06. Try to visualize the transformations in your head.',
    projects: [
      {
        id: 'linear-trans-viz',
        title: 'Linear Transformation Visualizer',
        domain: 'Mathematics',
        level: 'Intro',
        skillTargets: ['Python', 'Matplotlib', 'Linear Algebra'],
        steps: [
          'Create a 2D grid of points',
          'Apply a 2x2 matrix transformation to the grid',
          'Animate the transition from the original grid to the transformed one',
          'Add support for basis vector visualization'
        ],
        definitionOfDone: 'A Python script that produces a smooth animation of a linear transformation.',
        suggestedTools: ['Python', 'Matplotlib', 'NumPy'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Math Educator', 'Simulation Junior', 'Data Visualization Specialist']
      }
    ]
  },
  {
    id: '3b1b-calculus',
    title: 'Essence of Calculus',
    university: '3Blue1Brown',
    topics: ['Mathematics'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Makes the core concepts of calculus (derivatives, integrals, Taylor series) feel obvious and natural.',
    forWhom: 'Students struggling with the "why" of calculus or those about to start a formal course.',
    links: {
      coursePage: 'https://www.3blue1brown.com/topics/calculus',
      playlist: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr'
    },
    editorialReview: 'Calculus is often taught as a set of rules to memorize. This series teaches it as a way of seeing change.',
    studyGuide: 'Focus on the episode about the "Chain Rule" and "Taylor Series". They are the most impactful for ML.',
    projects: [
      {
        id: 'derivative-explorer',
        title: 'Interactive Derivative Explorer',
        domain: 'Mathematics',
        level: 'Intro',
        skillTargets: ['JavaScript', 'Canvas', 'Calculus'],
        steps: [
          'Plot a function (e.g., sin(x) or x^2)',
          'Implement a draggable point on the curve',
          'Calculate and draw the tangent line at that point',
          'Show the numerical value of the slope in real-time'
        ],
        definitionOfDone: 'An interactive web page where users can explore derivatives visually.',
        suggestedTools: ['JavaScript', 'p5.js'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Educational Software Developer', 'Frontend Developer', 'Simulation Junior']
      }
    ]
  },
  {
    id: '3b1b-neural-networks',
    title: 'Neural Networks',
    university: '3Blue1Brown',
    topics: ['Deep Learning', 'AI'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'The best visual introduction to how neural networks actually work, from neurons to backpropagation.',
    forWhom: 'Beginners who want to understand the "black box" of AI.',
    links: {
      coursePage: 'https://www.3blue1brown.com/topics/neural-networks',
      playlist: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'
    },
    editorialReview: 'If you only watch one thing to understand AI, make it this. It demystifies the math behind the hype.',
    studyGuide: 'Pay close attention to the "Gradient Descent" and "Backpropagation" episodes. They are the engine of modern AI.',
    projects: [
      {
        id: 'mnist-from-scratch-viz',
        title: 'Visual MNIST from Scratch',
        domain: 'Deep Learning',
        level: 'Intro',
        skillTargets: ['Python', 'NumPy', 'Visualization'],
        steps: [
          'Implement a simple feedforward network using only NumPy',
          'Train it on the MNIST dataset',
          'Create a visualization that shows which pixels activate which neurons',
          'Add a "drawing pad" where you can draw a digit and see the network predict it'
        ],
        definitionOfDone: 'A functional MNIST classifier with a visual representation of the hidden layers.',
        suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['AI Enthusiast', 'Junior DL Developer', 'Tech Blogger']
      }
    ]
  },
  {
    id: '3b1b-probability',
    title: 'Probability',
    university: '3Blue1Brown',
    topics: ['Mathematics'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Explores the counter-intuitive nature of probability with clear, visual logic.',
    forWhom: 'Anyone who wants to improve their statistical intuition.',
    links: {
      coursePage: 'https://www.3blue1brown.com/topics/probability',
      playlist: 'https://www.youtube.com/playlist?list=PLMrJAkhIeNNT_Xh3OyS2E9z1aNZU3H3aD'
    },
    editorialReview: 'Probability is notoriously difficult to get right. This series helps you build a solid mental model.',
    studyGuide: 'The "Bayes Theorem" video is a must-watch for anyone interested in Data Science.',
    projects: [
      {
        id: 'bayes-viz',
        title: 'Bayes Theorem Visualizer',
        domain: 'Mathematics',
        level: 'Intro',
        skillTargets: ['Probability', 'Visualization', 'React'],
        steps: [
          'Create an interactive area-based representation of probability',
          'Allow users to adjust prior probabilities and likelihoods',
          'Show how the posterior probability updates in real-time',
          'Include a "Medical Test" example to show common fallacies'
        ],
        definitionOfDone: 'An interactive web tool that makes Bayes Theorem intuitive through area-based visuals.',
        suggestedTools: ['React', 'D3.js'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Data Analyst', 'Decision Scientist (Junior)', 'Educational Tool Creator']
      }
    ]
  },
  {
    id: '3b1b-old-linear-algebra',
    title: 'Old Linear Algebra (2016)',
    university: '3Blue1Brown',
    topics: ['Mathematics'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Grant\'s original take on linear algebra. While less polished than the "Essence" series, it contains unique insights and a different pace.',
    forWhom: 'Students who want a second perspective on linear algebra concepts.',
    links: {
      playlist: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNYt7bPAvV3e2XdbmcH5g2g'
    },
    editorialReview: 'Even Grant\'s "old" work is better than most modern educational content. It\'s a great supplement to the main series.',
    studyGuide: 'Use this if a specific concept in the "Essence" series didn\'t click. Sometimes a different explanation is all you need.',
    projects: [
      {
        id: 'matrix-determinant-intuition',
        title: 'Determinant Intuition Tool',
        domain: 'Mathematics',
        level: 'Intro',
        skillTargets: ['Python', 'NumPy', 'Visualization'],
        steps: [
          'Represent a 2D linear transformation with a 2x2 matrix',
          'Calculate the change in area of a unit square',
          'Visualize how the determinant correlates with area scaling',
          'Handle the case where the determinant is zero (linearly dependent)'
        ],
        definitionOfDone: 'A functional tool showing the geometric meaning of the determinant.',
        suggestedTools: ['Manim', 'Python', 'NumPy'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Math Visualizer', 'Python Developer (Math focus)', 'Junior Simulation Engineer']
      }
    ]
  },
  {
    id: 'statquest-stats-fundamentals',
    title: 'Statistics Fundamentals',
    university: 'StatQuest',
    topics: ['Mathematics', 'Data Science'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Josh Starmer has a unique ability to explain p-values, hypothesis testing, and variance without the confusing jargon.',
    forWhom: 'Anyone who finds traditional statistics textbooks intimidating.',
    links: {
      playlist: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQW1Y9jk'
    },
    editorialReview: 'Triple Bam! This is the most accessible entry point into the world of statistics.',
    studyGuide: 'Watch the "p-values" and "Hypothesis Testing" videos multiple times. They are the foundation of all scientific research.',
    projects: [
      {
        id: 'hypothesis-tester',
        title: 'A/B Test Calculator',
        domain: 'Data Science',
        level: 'Intro',
        skillTargets: ['Python', 'Statistics', 'Hypothesis Testing'],
        steps: [
          'Collect conversion data from two groups',
          'Calculate the t-statistic and p-value',
          'Determine if the results are statistically significant',
          'Visualize the distributions of both groups'
        ],
        definitionOfDone: 'A tool that takes raw data and outputs a clear "Significant" or "Not Significant" result with a p-value.',
        suggestedTools: ['Python', 'SciPy', 'Streamlit'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['A/B Testing Specialist', 'Data Analyst', 'Growth Analyst']
      }
    ]
  },
  {
    id: 'statquest-ml-fundamentals',
    title: 'Machine Learning Fundamentals',
    university: 'StatQuest',
    topics: ['Machine Learning', 'Data Science'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Covers the essential "meta" concepts of ML like Bias/Variance, Cross-Validation, and ROC curves.',
    forWhom: 'Beginners who want to understand how to evaluate and improve their models.',
    links: {
      playlist: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF'
    },
    editorialReview: 'Before you build a model, you need to know how to measure it. This series is the best guide for that.',
    studyGuide: 'The video on "Bias and Variance" is a classic. It explains the core trade-off in all of machine learning.',
    projects: [
      {
        id: 'bias-variance-explorer',
        title: 'Bias-Variance Tradeoff Dashboard',
        domain: 'Machine Learning',
        level: 'Intermediate',
        skillTargets: ['Python', 'Scikit-Learn', 'Feature Engineering'],
        steps: [
          'Generate a synthetic non-linear dataset',
          'Fit models with varying polynomial degrees',
          'Calculate training and validation errors',
          'Plot the bias-variance tradeoff curve'
        ],
        definitionOfDone: 'A dashboard or script showing the impact of model complexity on error.',
        suggestedTools: ['Streamlit', 'Scikit-Learn', 'Matplotlib'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Model Validator', 'Data Scientist', 'ML Engineer']
      }
    ]
  },
  {
    id: 'statquest-linear-models',
    title: 'Linear & Logistic Regression',
    university: 'StatQuest',
    topics: ['Machine Learning', 'Mathematics'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Breaks down the most common predictive models into simple geometric and algebraic steps.',
    forWhom: 'Students starting their journey into predictive modeling.',
    links: {
      playlist: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUIzaIrbuotLluSMEK79f3K6'
    },
    editorialReview: 'Regression is the bread and butter of data science. Josh makes it feel like a walk in the park.',
    studyGuide: 'Compare how Linear Regression handles continuous data vs how Logistic Regression handles classification.',
    projects: [
      {
        id: 'iris-logistic-reg',
        title: 'Logistic Regression Decision Boundaries',
        domain: 'Machine Learning',
        level: 'Intro',
        skillTargets: ['Python', 'Logistic Regression', 'Data Bio-stats'],
        steps: [
          'Load the Iris dataset',
          'Implement logistic regression for binary classification',
          'Visualize decision boundaries for different feature pairs',
          'Calculate p-values for coefficients'
        ],
        definitionOfDone: 'A well-documented notebook with clear decision boundary visualizations.',
        suggestedTools: ['Python', 'Statsmodels', 'Seaborn'],
        role: 'Junior',
        isMustOnCV: true,
        possiblePositions: ['Junior Data Scientist', 'Bio-statistician', 'Backend ML Developer']
      }
    ]
  },
  {
    id: 'statquest-prob-dist',
    title: 'Probability Distributions',
    university: 'StatQuest',
    topics: ['Mathematics', 'Data Science'],
    level: 'Intro',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Visualizes the Normal, Binomial, and Poisson distributions so you never forget how they work.',
    forWhom: 'Anyone who needs to understand the shape of their data.',
    links: {
      playlist: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUK7gB_T-V6f2L5XasHIdQ2F'
    },
    editorialReview: 'Distributions are the building blocks of statistics. Josh makes them intuitive.',
    studyGuide: 'Focus on the "Normal Distribution" and "Central Limit Theorem" videos.',
    projects: [
      {
        id: 'distribution-sim-kit',
        title: 'Probability Distribution Simulator',
        domain: 'Mathematics',
        level: 'Intro',
        skillTargets: ['Statistics', 'Python', 'Monte Carlo'],
        steps: [
          'Implement samplers for Binomial and Poisson distributions',
          'Apply the Central Limit Theorem to multiple samplings',
          'Verify results using Q-Q plots',
          'Calculate confidence intervals'
        ],
        definitionOfDone: 'A script that validates statistical theorems through simulation.',
        suggestedTools: ['Python', 'SciPy', 'Matplotlib'],
        role: 'Junior',
        isMustOnCV: false,
        possiblePositions: ['Statistical Simulation Specialist', 'Data Analyst', 'Research Assistant']
      }
    ]
  },
  {
    id: 'stanford-cs229',
    title: 'CS229 Machine Learning',
    university: 'Stanford',
    topics: ['Machine Learning', 'AI'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A math-first approach to Machine Learning that builds deep understanding of algorithms.',
    forWhom: 'Students with a strong math background who want to go beyond just calling library functions.',
    links: {
      coursePage: 'https://cs229.stanford.edu/',
      playlist: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXS7oZEIgI8LMLyz'
    },
    editorialReview: 'Andrew Ng\'s classic course. It\'s demanding but rewarding. The focus on derivation ensures you actually understand what\'s happening under the hood.',
    studyGuide: 'Don\'t skip the derivations. Implement the algorithms from scratch before using libraries like Scikit-Learn.',
    projects: [
      {
        id: 'ml-error-analysis',
        title: 'End-to-End ML Error Analysis',
        domain: 'Machine Learning',
        level: 'Intermediate',
        skillTargets: ['Model Evaluation', 'Error Analysis', 'Python'],
        steps: [
          'Train a baseline model',
          'Calculate comprehensive metrics (not just accuracy)',
          'Analyze error slices (where does it fail?)',
          'Implement and test improvements'
        ],
        definitionOfDone: 'A detailed report and a repository with the analysis code.',
        suggestedTools: ['Python', 'Scikit-Learn', 'Pandas'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Machine Learning Engineer', 'ML Operations Specialist', 'Data Scientist']
      }
    ]
  },
  {
    id: 'stanford-cs230',
    title: 'CS230 Deep Learning',
    university: 'Stanford',
    topics: ['Deep Learning', 'AI'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'Paid',
    whyItsGreat: 'A comprehensive introduction to deep learning, covering CNNs, RNNs, and more.',
    forWhom: 'Learners who want to understand the foundations and applications of deep neural networks.',
    links: {
      coursePage: 'https://cs230.stanford.edu/',
      playlist: 'https://www.youtube.com/playlist?list=PLoROMvodv4rOABXSygHT82uzSMLneXC20'
    },
    editorialReview: 'Taught by Andrew Ng, this course provides a perfect balance between theory and practical application. It\'s the natural successor to CS229.',
    studyGuide: 'Focus on the programming assignments. They are designed to give you hands-on experience with building and training models.',
    projects: [
      {
        id: 'neural-network-from-scratch',
        title: 'Neural Network from Scratch',
        domain: 'Deep Learning',
        level: 'Intermediate',
        skillTargets: ['Python', 'NumPy', 'Calculus'],
        steps: [
          'Implement forward propagation',
          'Implement backward propagation',
          'Build an optimizer (e.g., SGD)',
          'Train on a simple dataset like MNIST'
        ],
        definitionOfDone: 'A working neural network implementation without using high-level DL libraries.',
        suggestedTools: ['Python', 'NumPy'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Deep Learning Engineer', 'AI Research Assistant', 'Backend ML Developer']
      }
    ]
  },
  {
    id: 'berkeley-cs188',
    title: 'CS188: Introduction to Artificial Intelligence',
    university: 'UC Berkeley',
    topics: ['AI'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'The classic AI course that covers search, games, and probabilistic reasoning.',
    forWhom: 'Students who want a broad overview of AI techniques before diving into deep learning.',
    links: {
      coursePage: 'https://inst.eecs.berkeley.edu/~cs188/fa23/'
    },
    editorialReview: 'Famous for its Pac-Man projects, this course makes learning AI concepts incredibly engaging and practical.',
    studyGuide: 'Do the Pac-Man projects. They are the highlight of the course and perfectly illustrate the concepts.',
    projects: [
      {
        id: 'pacman-ai',
        title: 'Pac-Man AI Agent',
        domain: 'AI',
        level: 'Intermediate',
        skillTargets: ['Search Algorithms', 'MDPs', 'Reinforcement Learning'],
        steps: [
          'Implement BFS, DFS, and A* for pathfinding',
          'Build a minimax agent with alpha-beta pruning',
          'Implement Q-learning for the Pac-Man agent',
          'Evaluate performance across different levels'
        ],
        definitionOfDone: 'A Pac-Man agent that can successfully navigate and win levels using AI.',
        suggestedTools: ['Python'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Game AI Developer', 'Robotics Engineer', 'Software Engineer (AI)']
      }
    ]
  },
  {
    id: 'princeton-algorithms',
    title: 'Algorithms, Part I & II',
    university: 'Princeton',
    topics: ['Computer Science'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Crystal-clear explanations and high-quality Java implementations.',
    forWhom: 'Intermediate students looking to master data structures and algorithms.',
    links: {
      coursePage: 'https://algs4.cs.princeton.edu/home/'
    },
    editorialReview: 'Sedgewick and Wayne provide the most structured and clear path to mastering algorithms. The visualizations are excellent.',
    studyGuide: 'Implement every data structure from scratch. Don\'t just watch—code.',
    projects: [
      {
        id: 'pathfinding-visualizer',
        title: 'Pathfinding Visualizer',
        domain: 'Computer Science',
        level: 'Intermediate',
        skillTargets: ['Algorithms', 'Data Structures', 'Visualization'],
        steps: [
          'Implement Dijkstra and A* algorithms',
          'Create a grid-based UI',
          'Visualize the search process in real-time',
          'Add obstacles and weight variations'
        ],
        definitionOfDone: 'A working visual demo with performance notes.',
        suggestedTools: ['Java', 'JavaScript/React'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Frontend Engineer', 'Algorithms Developer', 'Software Developer']
      }
    ]
  },
  {
    id: 'stanford-cs221',
    title: 'CS221 Artificial Intelligence: Principles and Techniques',
    university: 'Stanford',
    topics: ['AI'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A modern, comprehensive look at AI through the lens of modeling, inference, and learning.',
    forWhom: 'Students who want a unified view of AI that bridges classic logic and modern ML.',
    links: {
      coursePage: 'https://stanford-cs221.github.io/',
      playlist: 'https://www.youtube.com/playlist?list=PLoROMvodv4rO1vbcX609PzHdfpS_7shnS'
    },
    editorialReview: 'Percy Liang and Silvio Savarese provide a brilliant framework for understanding AI. The focus on "Search, Logic, and Probability" is very effective.',
    studyGuide: 'Focus on the modeling aspect. How do you translate a real-world problem into a search or logic problem?',
    projects: [
      {
        id: 'blackjack-ai',
        title: 'Blackjack AI with MDPs',
        domain: 'AI',
        level: 'Intermediate',
        skillTargets: ['MDPs', 'Reinforcement Learning', 'Modeling'],
        steps: [
          'Model Blackjack as a Markov Decision Process',
          'Implement Value Iteration',
          'Implement Q-learning',
          'Compare the optimal policy with human strategies'
        ],
        definitionOfDone: 'An AI agent that plays Blackjack optimally based on MDP modeling.',
        suggestedTools: ['Python'],
        role: 'Senior',
        isMustOnCV: false,
        possiblePositions: ['Game Developer', 'Reinforcement Learning Engineer', 'Data Scientist']
      }
    ]
  },
  {
    id: 'berkeley-data100',
    title: 'DATA 100: Principles and Techniques of Data Science',
    university: 'UC Berkeley',
    topics: ['Data Science'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'The definitive intermediate data science course, covering the full lifecycle with rigor.',
    forWhom: 'Students who have taken an intro DS course and want to level up their skills.',
    links: {
      coursePage: 'https://ds100.org/'
    },
    editorialReview: 'Berkeley\'s Data 100 is the gold standard for intermediate data science. It covers everything from SQL to modeling with great depth.',
    studyGuide: 'The labs and projects are essential. Focus on the "Human-in-the-loop" aspects of data science.',
    projects: [
      {
        id: 'housing-price-predictor',
        title: 'Advanced Housing Price Predictor',
        domain: 'Data Analysis',
        level: 'Intermediate',
        skillTargets: ['Feature Engineering', 'Regularization', 'EDA'],
        steps: [
          'Perform extensive EDA on the Ames housing dataset',
          'Implement complex feature engineering',
          'Train Lasso and Ridge regression models',
          'Evaluate using cross-validation'
        ],
        definitionOfDone: 'A high-performing model with a detailed notebook explaining the feature engineering.',
        suggestedTools: ['Python', 'Pandas', 'Scikit-Learn'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Real Estate Data Analyst', 'Predictive Modeler', 'Junior Data Scientist']
      },
      {
        id: 'global-health-dashboard',
        title: 'Interactive Global Health Engine (End-to-End)',
        domain: 'Data Analysis',
        level: 'Intermediate',
        skillTargets: ['Data Cleaning', 'Statistical Analysis', 'Interactive Viz'],
        steps: [
          'Clean and join multiple WHO/World Bank datasets',
          'Perform time-series analysis on health indicators',
          'Build an interactive dashboard with drill-down capabilities',
          'Deploy the dashboard as a web application'
        ],
        definitionOfDone: 'A deployed interactive dashboard providing actionable health insights.',
        suggestedTools: ['Python', 'Pandas', 'Plotly/Dash', 'Streamlit'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Public Health Data Analyst', 'BI Developer', 'Data Visualization Specialist']
      }
    ]
  },
  {
    id: 'michigan-eecs498',
    title: 'EECS 498-007 / 598-005: Deep Learning for Computer Vision',
    university: 'Michigan',
    topics: ['Deep Learning', 'Computer Vision'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Justin Johnson (co-creator of CS231n) brings his incredible teaching style to Michigan.',
    forWhom: 'Students who want a modern, PyTorch-first introduction to DL for Vision.',
    links: {
      coursePage: 'https://web.eecs.umich.edu/~justjn/ads/',
      playlist: 'https://www.youtube.com/playlist?list=PL5-TkQAfAZFbzxjBHtzdVC66UTWad4qd1'
    },
    editorialReview: 'Justin Johnson is one of the best teachers in the field. This course is a perfect modern alternative to CS231n.',
    studyGuide: 'The assignments are excellent and very well-structured. They will build your PyTorch skills from the ground up.',
    projects: [
      {
        id: 'style-transfer-app',
        title: 'Neural Style Transfer App',
        domain: 'Computer Vision',
        level: 'Intermediate',
        skillTargets: ['PyTorch', 'CNNs', 'Optimization'],
        steps: [
          'Implement the Gatys et al. style transfer algorithm',
          'Optimize for speed or quality',
          'Create a simple CLI or web interface',
          'Test on various content and style images'
        ],
        definitionOfDone: 'A functional style transfer application with a gallery of results.',
        suggestedTools: ['Python', 'PyTorch'],
        role: 'Senior',
        isMustOnCV: false,
        possiblePositions: ['Multimedia Software Engineer', 'Creative Technologist', 'AI Developer']
      }
    ]
  },
  {
    id: 'berkeley-cs182',
    title: 'CS182: Deep Neural Networks',
    university: 'UC Berkeley',
    topics: ['Deep Learning'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A comprehensive look at the principles and practices of deep learning from one of the top CS schools.',
    forWhom: 'Students who want a solid, engineering-focused understanding of neural networks.',
    links: {
      coursePage: 'https://inst.eecs.berkeley.edu/~cs182/'
    },
    editorialReview: 'Berkeley\'s CS182 provides a very balanced view of deep learning. It covers the theory well while keeping a strong focus on practical implementation.',
    studyGuide: 'The assignments are designed to build your intuition for how different architectures behave. Pay attention to the training dynamics.',
    projects: [
      {
        id: 'custom-cnn-architecture',
        title: 'Custom CNN Architecture Design',
        domain: 'Deep Learning',
        level: 'Intermediate',
        skillTargets: ['PyTorch', 'CNNs', 'Architecture Design'],
        steps: [
          'Design a custom CNN architecture for a specific task',
          'Implement and train in PyTorch',
          'Compare with standard architectures (e.g., ResNet)',
          'Analyze the trade-offs between depth, width, and performance'
        ],
        definitionOfDone: 'A custom model implementation with a comparative analysis report.',
        suggestedTools: ['Python', 'PyTorch'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Deep Learning Architect', 'ML Engineer', 'Computer Vision Specialist']
      }
    ]
  },
  {
    id: 'columbia-nlp',
    title: 'COMS 4705: Natural Language Processing',
    university: 'Columbia',
    topics: ['NLP'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A rigorous introduction to the computational study of human language.',
    forWhom: 'Students who want to understand the classic and modern foundations of NLP.',
    links: {
      coursePage: 'http://www.cs.columbia.edu/~mcollins/cs4705-fall2018/'
    },
    editorialReview: 'Michael Collins is a world-renowned expert in NLP. This course provides a very strong foundation in the field.',
    studyGuide: 'Focus on the parsing and sequence modeling sections. They are the core of the course.',
    projects: [
      {
        id: 'dependency-parser',
        title: 'Dependency Parser from Scratch',
        domain: 'NLP',
        level: 'Intermediate',
        skillTargets: ['NLP', 'Parsing', 'Algorithms'],
        steps: [
          'Implement a transition-based dependency parser',
          'Build a feature extractor for the parser',
          'Train on a treebank dataset',
          'Evaluate using UAS and LAS metrics'
        ],
        definitionOfDone: 'A working dependency parser with evaluation results.',
        suggestedTools: ['Python', 'PyTorch'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['NLP Engineer', 'Computational Linguist', 'Software Engineer']
      }
    ]
  },
  {
    id: 'mit-18-6501',
    title: '18.6501 Fundamentals of Statistics',
    university: 'MIT',
    topics: ['Mathematics', 'Data Science'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'The rigorous mathematical backbone for data science and statistical inference.',
    forWhom: 'Students who want to understand the "why" behind statistical tests and estimators.',
    links: {
      coursePage: 'https://ocw.mit.edu/courses/18-650-fundamentals-of-statistics-fall-2016/'
    },
    editorialReview: 'This course bridges the gap between probability and machine learning. It\'s essential for rigorous data analysis.',
    studyGuide: 'Focus on the properties of estimators (bias, variance, consistency). It will change how you look at ML models.',
    projects: [
      {
        id: 'statistical-inference-framework',
        title: 'Statistical Inference Framework',
        domain: 'Mathematics',
        level: 'Intermediate',
        skillTargets: ['Statistics', 'Hypothesis Testing', 'Python'],
        steps: [
          'Implement various hypothesis tests (t-test, chi-square)',
          'Build a framework for confidence interval estimation',
          'Apply to a real-world dataset to test a hypothesis',
          'Visualize the p-value distributions'
        ],
        definitionOfDone: 'A Python library or notebook for performing rigorous statistical tests.',
        suggestedTools: ['Python', 'SciPy', 'Statsmodels'],
        role: 'Senior',
        isMustOnCV: false,
        possiblePositions: ['Statistician', 'Data Scientist (Inference)', 'Research Assistant']
      }
    ]
  },
  {
    id: 'brown-csci1470',
    title: 'CSCI 1470: Deep Learning',
    university: 'Brown',
    topics: ['Deep Learning'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Known for its high-quality, accessible lecture recordings and modern curriculum.',
    forWhom: 'Students looking for a well-paced, comprehensive introduction to deep learning.',
    links: {
      coursePage: 'https://brown-deep-learning.github.io/'
    },
    editorialReview: 'Brown\'s DL course is incredibly well-structured. It covers the basics and moves into generative models with great clarity.',
    studyGuide: 'The "Homeworks" are designed to be implemented in TensorFlow/Keras or PyTorch. Choose one and stick with it.',
    projects: [
      {
        id: 'gan-image-generator',
        title: 'GAN for Image Generation',
        domain: 'Deep Learning',
        level: 'Intermediate',
        skillTargets: ['GANs', 'PyTorch', 'Computer Vision'],
        steps: [
          'Implement the Generator and Discriminator architectures',
          'Implement the adversarial training loop',
          'Train on a dataset like CelebA or MNIST',
          'Visualize the generated images over training epochs'
        ],
        definitionOfDone: 'A working GAN implementation that generates realistic images.',
        suggestedTools: ['Python', 'PyTorch'],
        role: 'Senior',
        isMustOnCV: false,
        possiblePositions: ['Generative AI Engineer', 'Deep Learning Developer', 'Creative AI Specialist']
      }
    ]
  },
  {
    id: 'columbia-ml',
    title: 'COMS 4771: Machine Learning',
    university: 'Columbia',
    topics: ['Machine Learning'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A rigorous, mathematically-grounded introduction to machine learning.',
    forWhom: 'Students who want a deep understanding of the principles behind ML algorithms.',
    links: {
      coursePage: 'https://www.cs.columbia.edu/~djhsu/coms4771-f20/'
    },
    editorialReview: 'Daniel Hsu provides a very clear and rigorous look at ML. The focus on the mathematical properties of algorithms is excellent.',
    studyGuide: 'The "Homeworks" are challenging but very rewarding. Focus on the sections covering Boosting and Kernel methods.',
    projects: [
      {
        id: 'boosting-algorithm',
        title: 'Boosting Algorithm Implementation',
        domain: 'Machine Learning',
        level: 'Intermediate',
        skillTargets: ['Algorithms', 'Boosting', 'Python'],
        steps: [
          'Implement the AdaBoost algorithm',
          'Implement a Gradient Boosting Regressor',
          'Test on various datasets',
          'Visualize the decision boundaries over iterations'
        ],
        definitionOfDone: 'A notebook with implementations and visualizations of boosting algorithms.',
        suggestedTools: ['Python', 'NumPy'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['ML Engineer', 'Data Scientist', 'Quantitative Analyst']
      }
    ]
  },
  {
    id: 'cornell-cs4780',
    title: 'CS 4780: Machine Learning for Intelligent Systems',
    university: 'Cornell',
    topics: ['Machine Learning'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Kilian Weinberger makes complex ML concepts incredibly intuitive with his whiteboard-style lectures.',
    forWhom: 'Students who want a deep, intuitive understanding of ML algorithms from first principles.',
    links: {
      coursePage: 'https://www.cs.cornell.edu/courses/cs4780/2018fa/',
      playlist: 'https://www.youtube.com/playlist?list=PLl8OlHZGYOQ7bkVbuRthEsaLr7bONzbXS'
    },
    editorialReview: 'One of the best ML courses for building intuition. The focus on geometric interpretations of algorithms is a game-changer.',
    studyGuide: 'Watch the lectures and follow along with the scribed notes. The derivations are key to understanding the "why" behind the models.',
    projects: [
      {
        id: 'knn-from-scratch',
        title: 'k-Nearest Neighbors from Scratch',
        domain: 'Machine Learning',
        level: 'Intermediate',
        skillTargets: ['Python', 'NumPy', 'Algorithms'],
        steps: [
          'Implement the Euclidean distance metric',
          'Build a k-NN classifier with efficient neighbor search',
          'Implement cross-validation for choosing k',
          'Visualize decision boundaries'
        ],
        definitionOfDone: 'A functional k-NN implementation with performance analysis on a toy dataset.',
        suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Data Scientist', 'Algorithms Specialist', 'ML Engineer']
      }
    ]
  },
  {
    id: 'cornell-cs4820',
    title: 'CS 4820: Introduction to Analysis of Algorithms',
    university: 'Cornell',
    topics: ['Computer Science'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A rigorous dive into the design and analysis of algorithms, focusing on proof techniques and efficiency.',
    forWhom: 'Students who want to master the art of algorithmic thinking and formal proofs.',
    links: {
      coursePage: 'https://www.cs.cornell.edu/courses/cs4820/'
    },
    editorialReview: 'This course is a rite of passage for CS students. It covers greedy algorithms, dynamic programming, and NP-completeness with great depth.',
    studyGuide: 'Focus on the problem sets. Learning to write clear, formal proofs of correctness is as important as the code itself.',
    projects: [
      {
        id: 'dynamic-programming-solver',
        title: 'Dynamic Programming Solver',
        domain: 'Computer Science',
        level: 'Intermediate',
        skillTargets: ['Algorithms', 'Dynamic Programming', 'Optimization'],
        steps: [
          'Implement solutions for classic DP problems (e.g., Knapsack, Edit Distance)',
          'Analyze time and space complexity',
          'Optimize for space using memoization vs. tabulation',
          'Visualize the DP table for small inputs'
        ],
        definitionOfDone: 'A collection of optimized DP solutions with complexity analysis.',
        suggestedTools: ['Python', 'C++'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Software Engineer', 'Algorithms Developer', 'Quantitative Researcher']
      }
    ]
  },
  {
    id: 'cornell-cs4410',
    title: 'CS 4410: Operating Systems',
    university: 'Cornell',
    topics: ['Computer Science'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Covers the fundamental principles of OS design, including concurrency, memory management, and file systems.',
    forWhom: 'Students who want to understand how the software layer directly above the hardware works.',
    links: {
      coursePage: 'https://www.cs.cornell.edu/courses/cs4410/'
    },
    editorialReview: 'A very solid OS course. It provides a great balance between theoretical concepts and the practical challenges of building a kernel.',
    studyGuide: 'Pay close attention to the concurrency and synchronization sections. They are the most challenging but also the most rewarding.',
    projects: [
      {
        id: 'simple-shell',
        title: 'Simple Unix Shell',
        domain: 'Computer Science',
        level: 'Intermediate',
        skillTargets: ['C', 'Systems Programming', 'Processes'],
        steps: [
          'Implement a command parser',
          'Use fork() and exec() to run processes',
          'Implement I/O redirection and piping',
          'Add support for background processes'
        ],
        definitionOfDone: 'A working shell that can execute basic Unix commands and handle pipes.',
        suggestedTools: ['C', 'GDB'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Systems Programmer', 'Embedded Systems Engineer', 'Cybersecurity Analyst']
      }
    ]
  },
  {
    id: 'gatech-cs7641',
    title: 'CS 7641: Machine Learning',
    university: 'Georgia Tech',
    topics: ['Machine Learning'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'Paid',
    whyItsGreat: 'The cornerstone of the OMSCS program, providing a balanced view of supervised, unsupervised, and reinforcement learning.',
    forWhom: 'Students looking for a comprehensive, graduate-level introduction to ML with a focus on both theory and application.',
    links: {
      coursePage: 'https://omscs.gatech.edu/cs-7641-machine-learning'
    },
    editorialReview: 'This course is famous for its "four assignments" that require deep analysis and comparison of different algorithms on various datasets.',
    studyGuide: 'Don\'t just run the code; focus on the analysis. Why did one algorithm perform better than another on a specific dataset?',
    projects: [
      {
        id: 'ml-algorithm-comparison',
        title: 'ML Algorithm Comparison Study',
        domain: 'Machine Learning',
        level: 'Intermediate',
        skillTargets: ['Scikit-Learn', 'Analysis', 'Model Selection'],
        steps: [
          'Select two diverse datasets',
          'Implement and tune five different ML algorithms',
          'Compare performance across various metrics',
          'Write a detailed report on the findings'
        ],
        definitionOfDone: 'A comprehensive report comparing multiple ML algorithms on diverse datasets.',
        suggestedTools: ['Python', 'Scikit-Learn', 'Pandas'],
        role: 'Senior',
        isMustOnCV: false,
        possiblePositions: ['Data Scientist', 'Model Validator', 'Junior ML Engineer']
      }
    ]
  },
  {
    id: 'gatech-cs6601',
    title: 'CS 6601: Artificial Intelligence',
    university: 'Georgia Tech',
    topics: ['AI'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'Paid',
    whyItsGreat: 'A broad, modern overview of AI techniques, from search and logic to probabilistic reasoning.',
    forWhom: 'Students who want a solid foundation in the core techniques of artificial intelligence.',
    links: {
      coursePage: 'https://omscs.gatech.edu/cs-6601-artificial-intelligence'
    },
    editorialReview: 'Taught by Thad Starner, this course is very project-heavy and provides a great hands-on introduction to AI.',
    studyGuide: 'The projects are the highlight. Make sure you understand the algorithms before you start coding.',
    projects: [
      {
        id: 'adversarial-search-agent',
        title: 'Adversarial Search Agent (Isolation Game)',
        domain: 'AI',
        level: 'Intermediate',
        skillTargets: ['Minimax', 'Alpha-Beta Pruning', 'Heuristics'],
        steps: [
          'Implement a minimax agent',
          'Add alpha-beta pruning for efficiency',
          'Design and test custom heuristics',
          'Compete against other agents'
        ],
        definitionOfDone: 'A functional AI agent that can play the game of Isolation effectively.',
        suggestedTools: ['Python'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Game Developer', 'AI Researcher', 'Competitive Programmer']
      }
    ]
  },
  {
    id: 'uw-cse473',
    title: 'CSE 473: Introduction to Artificial Intelligence',
    university: 'University of Washington',
    topics: ['AI'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A modern look at AI with a focus on probabilistic modeling and reasoning under uncertainty.',
    forWhom: 'Students who want a broad, modern introduction to AI techniques.',
    links: {
      coursePage: 'https://courses.cs.washington.edu/courses/cse473/'
    },
    editorialReview: 'UW\'s intro AI course is excellent. It provides a very balanced view of search, logic, and probability.',
    studyGuide: 'Focus on the probabilistic reasoning section. It is the core of modern AI.',
    projects: [
      {
        id: 'bayesian-network-inference',
        title: 'Bayesian Network Inference',
        domain: 'AI',
        level: 'Intermediate',
        skillTargets: ['Probability', 'Inference', 'Python'],
        steps: [
          'Define a Bayesian network structure',
          'Implement variable elimination for inference',
          'Test on various query types',
          'Analyze the complexity of inference'
        ],
        definitionOfDone: 'A solver that can perform inference on standard Bayesian networks.',
        suggestedTools: ['Python'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['AI Engineer', 'Probabilistic Modeler', 'Research Scientist']
      }
    ]
  },
  {
    id: 'uw-cse446',
    title: 'CSE 446: Machine Learning',
    university: 'University of Washington',
    topics: ['Machine Learning'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A high-quality undergraduate course covering the core of modern ML with a focus on both theory and practice.',
    forWhom: 'Students looking for a solid, application-oriented introduction to machine learning.',
    links: {
      coursePage: 'https://courses.cs.washington.edu/courses/cse446/'
    },
    editorialReview: 'UW is a powerhouse in ML research, and this course reflects that. It\'s up-to-date and very practical.',
    studyGuide: 'The homeworks are excellent. Focus on the implementation and analysis of different algorithms.',
    projects: [
      {
        id: 'lasso-regression-study',
        title: 'Lasso Regression & Feature Selection',
        domain: 'Machine Learning',
        level: 'Intermediate',
        skillTargets: ['Regression', 'Regularization', 'Python'],
        steps: [
          'Implement Lasso regression using coordinate descent',
          'Analyze the effect of the regularization parameter',
          'Visualize the sparsity of the learned weights',
          'Compare with Ridge regression'
        ],
        definitionOfDone: 'A detailed analysis of Lasso regression and its feature selection properties.',
        suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
        role: 'Senior',
        isMustOnCV: false,
        possiblePositions: ['Data Scientist', 'Statistical Analyst', 'Machine Learning Engineer']
      }
    ]
  },
  {
    id: 'uw-cse455',
    title: 'CSE 455: Computer Vision',
    university: 'University of Washington',
    topics: ['Computer Vision'],
    level: 'Intermediate',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Taught by industry leaders, focusing on how machines interpret and understand visual data.',
    forWhom: 'Students who want to understand the principles and practices of modern computer vision.',
    links: {
      coursePage: 'https://courses.cs.washington.edu/courses/cse455/'
    },
    editorialReview: 'A very practical and engaging CV course. It covers everything from image processing to deep learning for vision.',
    studyGuide: 'Focus on the image features and matching sections. They are the foundation of many CV applications.',
    projects: [
      {
        id: 'image-stitcher',
        title: 'Panoramic Image Stitcher',
        domain: 'Computer Vision',
        level: 'Intermediate',
        skillTargets: ['Image Processing', 'Feature Matching', 'Homography'],
        steps: [
          'Detect keypoints and extract descriptors (e.g., SIFT or ORB)',
          'Match features between images',
          'Estimate the homography matrix using RANSAC',
          'Warp and blend images to create a panorama'
        ],
        definitionOfDone: 'A functional script that can stitch multiple images into a panorama.',
        suggestedTools: ['Python', 'OpenCV'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Computer Vision Engineer', 'Image Processing Specialist', 'Perception Engineer']
      }
    ]
  },
  {
    id: '3b1b-diff-eq',
    title: 'Differential Equations',
    university: '3Blue1Brown',
    topics: ['Mathematics'],
    level: 'Intermediate',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'A beautiful exploration of how differential equations describe the world, from pendulums to heat flow.',
    forWhom: 'Students who have finished calculus and want to see its most powerful applications.',
    links: {
      coursePage: 'https://www.3blue1brown.com/topics/differential-equations',
      playlist: 'https://www.youtube.com/playlist?list=PLMrJAkhIeNNSVxmuq5Qz4n9QWGkSrT0fO'
    },
    editorialReview: 'Differential equations are the language of physics. Grant makes that language accessible and visual.',
    studyGuide: 'The episode on "Fourier Series" is a masterpiece. It connects math, music, and heat transfer in one go.',
    projects: [
      {
        id: 'pendulum-sim',
        title: 'Double Pendulum Simulator',
        domain: 'Mathematics',
        level: 'Intermediate',
        skillTargets: ['Physics', 'Differential Equations', 'Simulation'],
        steps: [
          'Derive the equations of motion for a double pendulum',
          'Implement a numerical solver (like Runge-Kutta)',
          'Animate the pendulum\'s chaotic motion',
          'Trace the path of the lower pendulum to show the fractal-like patterns'
        ],
        definitionOfDone: 'A smooth simulation of a double pendulum with path tracing.',
        suggestedTools: ['Python', 'SciPy', 'Matplotlib'],
        role: 'Senior',
        isMustOnCV: false,
        possiblePositions: ['Physics Simulation Engineer', 'Dynamics Specialist', 'Quantitative Researcher']
      }
    ]
  },
  {
    id: 'statquest-trees-forests',
    title: 'Decision Trees & Random Forests',
    university: 'StatQuest',
    topics: ['Machine Learning'],
    level: 'Intermediate',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Explains how simple decisions can scale into powerful ensemble models like Random Forests and XGBoost.',
    forWhom: 'Learners ready to move beyond simple linear models.',
    links: {
      playlist: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUIE96dI3U7oxHaC_2h2VmWp'
    },
    editorialReview: 'The visual explanation of how a Random Forest "votes" is simply the best in the business.',
    studyGuide: 'Watch the XGBoost series carefully; it is the most popular algorithm for tabular data competitions.',
    projects: [
      {
        id: 'titanic-forest',
        title: 'Titanic Survival Predictor',
        domain: 'Machine Learning',
        level: 'Intermediate',
        skillTargets: ['Python', 'Scikit-learn', 'Random Forest'],
        steps: [
          'Clean the Titanic dataset (handle missing values)',
          'Perform feature engineering on passenger titles',
          'Train a Random Forest classifier',
          'Evaluate using a confusion matrix and ROC curve'
        ],
        definitionOfDone: 'A model that predicts survival with >80% accuracy on the test set.',
        suggestedTools: ['Python', 'Pandas', 'Scikit-learn'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Data Scientist', 'Predictive Modeler', 'Kaggle Competitor']
      }
    ]
  },
  {
    id: 'statquest-deep-learning',
    title: 'Neural Networks & Transformers',
    university: 'StatQuest',
    topics: ['Deep Learning', 'AI'],
    level: 'Intermediate',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'A step-by-step breakdown of Backpropagation, CNNs, and the Attention mechanism in Transformers.',
    forWhom: 'Anyone curious about the inner workings of modern AI like GPT.',
    links: {
      playlist: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUP2QfK9nEN69yZatV760Iq9'
    },
    editorialReview: 'Josh takes the "scary" out of deep learning. His explanation of Attention is particularly clear.',
    studyGuide: 'The "Attention" video is critical for understanding how LLMs process language.',
    projects: [
      {
        id: 'neural-net-visualizer',
        title: 'Dynamic Neural Net Visualizer',
        domain: 'Deep Learning',
        level: 'Intermediate',
        skillTargets: ['React', 'D3.js', 'Backpropagation Intuition'],
        steps: [
          'Build a small multi-layer perceptron in JavaScript',
          'Create a D3.js visualization of the network layers',
          'Animate weights changing during a simulated training step',
          'Provide interactive sliders for activation functions'
        ],
        definitionOfDone: 'An interactive web app that visualizes neural network training conceptually.',
        suggestedTools: ['React', 'D3.js', 'Tailwind CSS'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Frontend AI Developer', 'AI Tool Creator', 'Senior Web Developer']
      }
    ]
  },
  {
    id: 'gatech-cs7642',
    title: 'CS 7642: Reinforcement Learning',
    university: 'Georgia Tech',
    topics: ['Machine Learning', 'Deep Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'Paid',
    whyItsGreat: 'A deep dive into the algorithms that power game-playing and robotics AI, covering both classic and deep RL.',
    forWhom: 'Students who want to master the principles of learning from interaction and rewards.',
    links: {
      coursePage: 'https://omscs.gatech.edu/cs-7642-reinforcement-learning'
    },
    editorialReview: 'A very rigorous and up-to-date RL course. It covers the foundations of MDPs and moves into modern deep RL methods.',
    studyGuide: 'Focus on the Bellman equations and the convergence properties of different RL algorithms.',
    projects: [
      {
        id: 'q-learning-agent',
        title: 'Q-Learning Agent for Gridworld',
        domain: 'Machine Learning',
        level: 'Advanced',
        skillTargets: ['Reinforcement Learning', 'MDPs', 'Python'],
        steps: [
          'Model a gridworld environment as an MDP',
          'Implement the Q-learning algorithm',
          'Test with different exploration strategies (e.g., epsilon-greedy)',
          'Visualize the learned policy'
        ],
        definitionOfDone: 'A working Q-learning agent that can find the optimal path in a gridworld.',
        suggestedTools: ['Python', 'NumPy'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['RL Engineer', 'Robotics Developer', 'AI Researcher']
      }
    ]
  },
  {
    id: 'stanford-cs224n',
    title: 'CS224N: NLP with Deep Learning',
    university: 'Stanford',
    topics: ['NLP', 'Deep Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'The gold standard for learning NLP. It covers everything from word vectors to the latest transformer models.',
    forWhom: 'Students who want to master the techniques behind modern language models like GPT.',
    links: {
      coursePage: 'https://web.stanford.edu/class/cs224n/',
      playlist: 'https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z'
    },
    editorialReview: 'Chris Manning is a giant in the field. This course is rigorous, up-to-date, and incredibly well-taught.',
    studyGuide: 'The projects are challenging. Make sure you have a solid handle on PyTorch before you start.',
    projects: [
      {
        id: 'sentiment-analyzer',
        title: 'Deep Sentiment Analyzer',
        domain: 'NLP',
        level: 'Advanced',
        skillTargets: ['LSTMs', 'Transformers', 'PyTorch'],
        steps: [
          'Preprocess the Stanford Sentiment Treebank',
          'Implement a baseline LSTM model',
          'Fine-tune a pretrained BERT model',
          'Analyze model errors and biases'
        ],
        definitionOfDone: 'A functional model that achieves high accuracy on sentiment classification tasks.',
        suggestedTools: ['PyTorch', 'Hugging Face Transformers'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['NLP Engineer', 'Deep Learning Developer', 'AI Scientist']
      }
    ]
  },
  {
    id: 'stanford-cs231n',
    title: 'CS231n: Convolutional Neural Networks for Visual Recognition',
    university: 'Stanford',
    topics: ['Computer Vision', 'Deep Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'The definitive course on computer vision. It teaches how to build, train, and understand CNNs from the ground up.',
    forWhom: 'Anyone who wants to understand how machines see and interpret the world.',
    links: {
      coursePage: 'http://cs231n.stanford.edu/',
      playlist: 'https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHm8c_EuQP_BKmGjBA6h7W'
    },
    editorialReview: 'This course changed the way AI is taught. The focus on backpropagation and the "innards" of neural networks is vital.',
    studyGuide: 'The assignments are legendary. Do them all without looking at solutions.',
    projects: [
      {
        id: 'image-classifier-pipeline',
        title: 'End-to-End Image Classifier',
        domain: 'Computer Vision',
        level: 'Advanced',
        skillTargets: ['CNNs', 'Backpropagation', 'Optimization'],
        steps: [
          'Implement a fully connected network from scratch',
          'Implement a CNN with layers like Convolution, Pooling, and FC',
          'Train on the CIFAR-10 dataset',
          'Visualize filter weights and saliency maps'
        ],
        definitionOfDone: 'A complete pipeline that trains a CNN and provides interpretability visualizations.',
        suggestedTools: ['Python', 'NumPy', 'PyTorch'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Computer Vision Engineer', 'Deep Learning Researcher', 'AI Core Engineer']
      }
    ]
  },
  {
    id: 'berkeley-cs189',
    title: 'CS 189: Introduction to Machine Learning',
    university: 'UC Berkeley',
    topics: ['Machine Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Known for its mathematical depth and rigorous treatment of machine learning theory and algorithms.',
    forWhom: 'Students who want a more theoretical and deeper understanding of ML than what is typically offered in an intro course.',
    links: {
      coursePage: 'https://www.eecs189.org/'
    },
    editorialReview: 'Berkeley\'s graduate-level intro to ML. It is very demanding and covers the mathematical foundations in great detail.',
    studyGuide: 'Brush up on your multivariate calculus and linear algebra before starting. You will need it.',
    projects: [
      {
        id: 'kernel-svm-implementation',
        title: 'Kernel SVM with SMO',
        domain: 'Machine Learning',
        level: 'Advanced',
        skillTargets: ['SVM', 'Optimization', 'Kernel Methods'],
        steps: [
          'Implement the Sequential Minimal Optimization (SMO) algorithm',
          'Add support for different kernels (e.g., RBF, Polynomial)',
          'Test on various classification tasks',
          'Analyze the effect of the margin parameter (C)'
        ],
        definitionOfDone: 'A functional Kernel SVM implementation with comparative analysis.',
        suggestedTools: ['Python', 'NumPy'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Machine Learning Scientist', 'Algorithm Engineer', 'Quant Researcher']
      }
    ]
  },
  {
    id: 'stanford-cs224u',
    title: 'CS224U: Natural Language Understanding',
    university: 'Stanford',
    topics: ['NLP'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Focuses on the higher-level understanding of language, moving beyond just processing words to capturing meaning and intent.',
    forWhom: 'Students interested in the intersection of linguistics, logic, and deep learning.',
    links: {
      coursePage: 'https://web.stanford.edu/class/cs224u/'
    },
    editorialReview: 'A perfect follow-up to CS224N. It covers concepts like compositional semantics and large-scale NLU tasks.',
    studyGuide: 'The "Bakeoffs" are a great way to compete and learn. Focus on the final project; it\'s the core of the course.',
    projects: [
      {
        id: 'nlu-bakeoff-entry',
        title: 'NLU Bakeoff: Sentiment or Entailment',
        domain: 'NLP',
        level: 'Advanced',
        skillTargets: ['Semantics', 'Deep Learning', 'Experiment Design'],
        steps: [
          'Choose a task (e.g., Natural Language Inference)',
          'Implement a strong baseline model',
          'Experiment with advanced architectures (e.g., RoBERTa)',
          'Write a detailed report on experimental findings'
        ],
        definitionOfDone: 'A high-performance NLU model and a research-quality technical report.',
        suggestedTools: ['PyTorch', 'Hugging Face', 'Pandas'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['NLU Researcher', 'Sentiment Analyst', 'AI Linguist']
      }
    ]
  },
  {
    id: 'stanford-ee263',
    title: 'EE263: Linear Dynamical Systems',
    university: 'Stanford',
    topics: ['Mathematics', 'Machine Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Stephen Boyd makes linear algebra feel like a superpower for solving real-world engineering problems.',
    forWhom: 'Students who want to see how advanced linear algebra applies to control, optimization, and ML.',
    links: {
      coursePage: 'https://web.stanford.edu/class/ee263/',
      playlist: 'https://www.youtube.com/playlist?list=PL06960BA52D0DB32B'
    },
    editorialReview: 'Boyd is a master of applied math. This course will give you a much deeper appreciation for the matrices you use in ML.',
    studyGuide: 'The homework is where the magic happens. Don\'t just find the answer; understand the geometric interpretation.',
    projects: [
      {
        id: 'least-squares-solver',
        title: 'Custom Least Squares Solver',
        domain: 'Mathematics',
        level: 'Advanced',
        skillTargets: ['Linear Algebra', 'Optimization', 'Python'],
        steps: [
          'Implement various least squares solvers (QR, SVD)',
          'Compare stability and performance',
          'Apply to a system identification problem',
          'Visualize the results'
        ],
        definitionOfDone: 'A solver with performance benchmarks and an application example.',
        suggestedTools: ['Python', 'NumPy', 'SciPy'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Numerical Programmer', 'Algorithms Engineer', 'Quantitative Researcher']
      }
    ]
  },
  {
    id: 'mit-6-819',
    title: '6.819 / 6.869: Advances in Computer Vision',
    university: 'MIT',
    topics: ['Computer Vision', 'Deep Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Covers the cutting edge of computer vision research from one of the world\'s top labs.',
    forWhom: 'Advanced students who want to understand the research frontier in CV.',
    links: {
      coursePage: 'http://6.869.csail.mit.edu/fa19/'
    },
    editorialReview: 'Bill Freeman and Antonio Torralba are legends in CV. This course is a deep dive into how machines can truly "see."',
    studyGuide: 'Read the papers. This course is as much about understanding research as it is about implementation.',
    projects: [
      {
        id: 'cv-research-replication',
        title: 'CV Research Replication',
        domain: 'Computer Vision',
        level: 'Advanced',
        skillTargets: ['Research', 'PyTorch', 'Computer Vision'],
        steps: [
          'Select a recent CV paper from the course list',
          'Implement the core method',
          'Test on a standard dataset',
          'Write a summary of your findings'
        ],
        definitionOfDone: 'A working implementation of a research paper with a summary report.',
        suggestedTools: ['Python', 'PyTorch', 'OpenCV'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Computer Vision Researcher', 'Senior AI Developer', 'Research Scientist']
      }
    ]
  },
  {
    id: 'berkeley-cs285',
    title: 'CS285: Deep Reinforcement Learning',
    university: 'UC Berkeley',
    topics: ['Machine Learning', 'Deep Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Sergey Levine provides the most comprehensive and up-to-date look at Deep RL.',
    forWhom: 'Students who want to master the algorithms that power modern robotics and game AI.',
    links: {
      coursePage: 'http://rail.eecs.berkeley.edu/deeprlcourse/',
      playlist: 'https://www.youtube.com/playlist?list=PLkFD6_40KJIwhWJpGazJ9na588IadMHiE'
    },
    editorialReview: 'Levine is at the forefront of RL research. This course is intense but provides an unparalleled understanding of the field.',
    studyGuide: 'The homeworks are very challenging. Start early and focus on understanding the policy gradient derivations.',
    projects: [
      {
        id: 'rl-agent-training',
        title: 'Deep RL Agent Training',
        domain: 'Machine Learning',
        level: 'Advanced',
        skillTargets: ['Reinforcement Learning', 'PyTorch', 'Gym'],
        steps: [
          'Implement a DQN or PPO agent',
          'Train on a standard Gym environment',
          'Perform hyperparameter tuning',
          'Visualize the learning curve'
        ],
        definitionOfDone: 'A trained RL agent with a performance report and visualizations.',
        suggestedTools: ['Python', 'PyTorch', 'Gym'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Reinforcement Learning Engineer', 'Robotics Programmer', 'AI Scientist']
      }
    ]
  },
  {
    id: 'mit-6-867',
    title: '6.867 Machine Learning',
    university: 'MIT',
    topics: ['Machine Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A graduate-level deep dive into the mathematical foundations of machine learning.',
    forWhom: 'Students who want to understand the theoretical limits and properties of ML algorithms.',
    links: {
      coursePage: 'https://ocw.mit.edu/courses/6-867-machine-learning-fall-2006/'
    },
    editorialReview: 'This is a heavy course. It covers the theory of learning, kernel methods, and graphical models with great mathematical depth.',
    studyGuide: 'Focus on the problem sets. They are designed to test your understanding of the underlying theory, not just your ability to code.',
    projects: [
      {
        id: 'theoretical-ml-report',
        title: 'Theoretical ML Analysis',
        domain: 'Machine Learning',
        level: 'Advanced',
        skillTargets: ['Mathematics', 'Theory', 'Analysis'],
        steps: [
          'Select a specific ML algorithm',
          'Analyze its convergence properties',
          'Derive its generalization bounds',
          'Write a detailed theoretical report'
        ],
        definitionOfDone: 'A comprehensive theoretical report on a specific ML algorithm.',
        suggestedTools: ['LaTeX', 'Mathematics'],
        role: 'Manager',
        isMustOnCV: false,
        possiblePositions: ['ML Researcher', 'Theoretical Computer Scientist', 'PhD Candidate']
      }
    ]
  },
  {
    id: 'stanford-cs246',
    title: 'CS246: Mining Massive Data Sets',
    university: 'Stanford',
    topics: ['Data Science', 'Computer Science'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'The definitive guide to the algorithms and systems needed to handle petabyte-scale data.',
    forWhom: 'Students who want to master MapReduce, PageRank, and large-scale recommender systems.',
    links: {
      coursePage: 'http://web.stanford.edu/class/cs246/',
      playlist: 'https://www.youtube.com/playlist?list=PLoROMvodv4rOABXSygHT82uzSMLneXC20'
    },
    editorialReview: 'Jure Leskovec is the authority on large-scale graphs and data mining. This course is essential for anyone aiming for big data roles.',
    studyGuide: 'The textbook (available free online) is a masterpiece. Read it alongside the lectures.',
    projects: [
      {
        id: 'pagerank-implementation',
        title: 'PageRank from Scratch',
        domain: 'Data Science',
        level: 'Advanced',
        skillTargets: ['Algorithms', 'Graphs', 'Python'],
        steps: [
          'Implement the power iteration method for PageRank',
          'Handle "spider traps" and "dead ends"',
          'Test on a small web graph dataset',
          'Visualize the ranking results'
        ],
        definitionOfDone: 'A functional PageRank implementation with a report on convergence.',
        suggestedTools: ['Python', 'NumPy'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Search Engine Engineer', 'Data Scientist (Graphs)', 'Software Architect']
      },
      {
        id: 'realtime-fraud-detection',
        title: 'Real-time Fraud Detection (End-to-End)',
        domain: 'Data Analysis',
        level: 'Advanced',
        skillTargets: ['Streaming Data', 'Anomaly Detection', 'Scalability'],
        steps: [
          'Simulate a stream of financial transactions',
          'Implement an online anomaly detection algorithm',
          'Build a real-time alerting system for suspicious activity',
          'Evaluate the system on a large-scale historical dataset'
        ],
        definitionOfDone: 'A real-time system capable of detecting and flagging fraudulent transactions with low latency.',
        suggestedTools: ['Python', 'PySpark', 'Kafka (Simulated)', 'Scikit-Learn'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Fraud Detection Specialist', 'FinTech Backend Engineer', 'MLOps Lead']
      }
    ]
  },
  {
    id: 'berkeley-eecs126',
    title: 'EECS 126: Probability and Random Processes',
    university: 'UC Berkeley',
    topics: ['Mathematics', 'Machine Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A high-level, mathematically intensive look at the random processes that drive modern AI.',
    forWhom: 'Advanced students who want to master Markov chains, information theory, and inference.',
    links: {
      coursePage: 'https://inst.eecs.berkeley.edu/~ee126/'
    },
    editorialReview: 'This is a "hardcore" probability course. It\'s the secret weapon of top-tier ML researchers.',
    studyGuide: 'The "Notes" are legendary. Spend time on the sections covering Kalman filters and Information Theory.',
    projects: [
      {
        id: 'mcmc-simulation',
        title: 'MCMC Simulation for Complex Distributions',
        domain: 'Mathematics',
        level: 'Advanced',
        skillTargets: ['Probability', 'Simulation', 'Python'],
        steps: [
          'Implement the Metropolis-Hastings algorithm',
          'Implement Gibbs Sampling',
          'Sample from a complex, multi-modal distribution',
          'Visualize the chain convergence'
        ],
        definitionOfDone: 'A notebook demonstrating MCMC sampling with convergence diagnostics.',
        suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Bayesian Statistician', 'Inference Specialist', 'Scientific Researcher']
      }
    ]
  },
  {
    id: 'mit-6-864',
    title: '6.864 Advanced Natural Language Processing',
    university: 'MIT',
    topics: ['NLP'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A graduate-level look at the latest research and techniques in NLP.',
    forWhom: 'Advanced students and researchers looking to understand the state-of-the-art in language processing.',
    links: {
      coursePage: 'http://6864.csail.mit.edu/'
    },
    editorialReview: 'Jacob Andreas is a brilliant researcher. This course covers the theoretical underpinnings of modern NLP systems.',
    studyGuide: 'Focus on the "Reading List." This course is about understanding the research papers that defined the field.',
    projects: [
      {
        id: 'qa-system',
        title: 'Question Answering System',
        domain: 'NLP',
        level: 'Advanced',
        skillTargets: ['NLP', 'Transformers', 'Information Retrieval'],
        steps: [
          'Implement a retriever-reader architecture',
          'Fine-tune a model on the SQuAD dataset',
          'Build an interface for asking questions over a custom document',
          'Evaluate using Exact Match and F1 scores'
        ],
        definitionOfDone: 'A functional QA system that can answer questions from a given text.',
        suggestedTools: ['Python', 'Hugging Face', 'PyTorch'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Search & QA Specialist', 'NLP Project Manager', 'Senior AI Engineer']
      }
    ]
  },
  {
    id: 'harvard-am207',
    title: 'AM207: Advanced Scientific Computing',
    university: 'Harvard',
    topics: ['Data Science', 'Mathematics'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Focuses on Bayesian methods, uncertainty, and stochastic optimization.',
    forWhom: 'Students who want to master the probabilistic side of scientific computing and ML.',
    links: {
      coursePage: 'https://am207.github.io/'
    },
    editorialReview: 'This course is a deep dive into how we can use computation to solve complex statistical problems. The focus on Bayesian inference is excellent.',
    studyGuide: 'The "Labs" are very high quality. Focus on the sections covering Gaussian Processes and MCMC.',
    projects: [
      {
        id: 'bayesian-inference-model',
        title: 'Bayesian Inference for Complex Systems',
        domain: 'Data Science',
        level: 'Advanced',
        skillTargets: ['Bayesian Stats', 'PyMC3/Stan', 'Modeling'],
        steps: [
          'Define a complex probabilistic model',
          'Implement Bayesian inference using PyMC3 or Stan',
          'Perform posterior predictive checks',
          'Visualize the uncertainty in the model parameters'
        ],
        definitionOfDone: 'A complete Bayesian analysis of a complex dataset with uncertainty quantification.',
        suggestedTools: ['Python', 'PyMC3', 'ArviZ'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Bayesian Data Scientist', 'Quantitative Researcher', 'Decision Scientist']
      }
    ]
  },
  {
    id: 'stanford-cs25',
    title: 'CS25: Transformers United',
    university: 'Stanford',
    topics: ['Deep Learning', 'AI'],
    level: 'Advanced',
    format: 'Seminar',
    certificate: 'None',
    whyItsGreat: 'A seminar series dedicated to the architecture that revolutionized AI.',
    forWhom: 'Advanced students and researchers who want to understand the latest in Transformer research.',
    links: {
      coursePage: 'https://web.stanford.edu/class/cs25/',
      playlist: 'https://www.youtube.com/playlist?list=PLoROMvodv4rNiGQp3WXS7oZEIgI8LMLyz'
    },
    editorialReview: 'This seminar series brings together the top researchers in the field to discuss the past, present, and future of Transformers.',
    studyGuide: 'Pick one seminar and read the associated papers. Try to understand the specific architectural innovations discussed.',
    projects: [
      {
        id: 'transformer-analysis',
        title: 'Transformer Architecture Analysis',
        domain: 'Deep Learning',
        level: 'Advanced',
        skillTargets: ['Research', 'Transformers', 'Analysis'],
        steps: [
          'Select a specific Transformer variant (e.g., Vision Transformer, Perceiver)',
          'Implement the core architectural change',
          'Evaluate on a relevant task',
          'Write a summary of the performance trade-offs'
        ],
        definitionOfDone: 'A working implementation of a Transformer variant with an analysis report.',
        suggestedTools: ['Python', 'PyTorch', 'Transformers'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['AI Research Engineer', 'Deep Learning Specialist', 'NLP Lead']
      }
    ]
  },
  {
    id: 'berkeley-cs288',
    title: 'CS288: Natural Language Processing',
    university: 'UC Berkeley',
    topics: ['NLP'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A systems-heavy approach to NLP, focusing on the engineering challenges of large-scale language systems.',
    forWhom: 'Advanced students who want to understand the engineering side of NLP.',
    links: {
      coursePage: 'https://inst.eecs.berkeley.edu/~cs288/'
    },
    editorialReview: 'Berkeley\'s CS288 is a very unique course. it bridges the gap between NLP research and large-scale engineering.',
    studyGuide: 'The "Projects" are very demanding. Focus on the sections covering Machine Translation and Question Answering.',
    projects: [
      {
        id: 'machine-translation-system',
        title: 'Machine Translation System',
        domain: 'NLP',
        level: 'Advanced',
        skillTargets: ['NLP', 'Machine Translation', 'Systems'],
        steps: [
          'Implement a sequence-to-sequence model with attention',
          'Train on a parallel corpus (e.g., English-French)',
          'Implement beam search for decoding',
          'Evaluate using BLEU scores'
        ],
        definitionOfDone: 'A functional machine translation system with evaluation results.',
        suggestedTools: ['Python', 'PyTorch', 'Transformers'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Machine Translation Engineer', 'Senior NLP Developer', 'Localization Lead']
      }
    ]
  },
  {
    id: 'oxford-deep-learning',
    title: 'Deep Learning (Nando de Freitas)',
    university: 'University of Oxford',
    topics: ['Deep Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Legendary lectures that bridge the gap between ML theory and modern Deep Learning practice.',
    forWhom: 'Students who want a deep, foundational understanding of neural networks from one of the field\'s masters.',
    links: {
      coursePage: 'https://www.cs.ox.ac.uk/people/nando.defreitas/machinelearning/',
      playlist: 'https://www.youtube.com/playlist?list=PLE6Wd9FR--EfW8dtjAuPoTuPcqmOV52Fu'
    },
    editorialReview: 'Nando de Freitas is a master communicator. These lectures are a rite of passage for many AI students.',
    studyGuide: 'Watch the lectures carefully. Nando\'s ability to explain the intuition behind complex ideas is unmatched.',
    projects: [
      {
        id: 'autoencoder-reconstruction',
        title: 'Autoencoder for Image Reconstruction',
        domain: 'Deep Learning',
        level: 'Advanced',
        skillTargets: ['Neural Networks', 'Autoencoders', 'PyTorch'],
        steps: [
          'Implement an encoder-decoder architecture',
          'Train on a dataset like MNIST or CIFAR-10',
          'Visualize the latent space',
          'Reconstruct noisy images'
        ],
        definitionOfDone: 'A working autoencoder implementation with reconstruction visualizations.',
        suggestedTools: ['Python', 'PyTorch'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['DL Research Engineer', 'AI Research Scientist', 'Neural Network Architect']
      }
    ]
  },
  {
    id: 'oxford-ml-grad',
    title: 'Machine Learning (Graduate)',
    university: 'University of Oxford',
    topics: ['Machine Learning'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'A mathematically intensive look at advanced statistical learning from a top-tier global university.',
    forWhom: 'Advanced students who want a rigorous, research-oriented understanding of ML.',
    links: {
      coursePage: 'https://www.cs.ox.ac.uk/teaching/courses/2020-2021/ml/'
    },
    editorialReview: 'Oxford\'s graduate ML course is very rigorous. it covers the latest developments in the field with great mathematical precision.',
    studyGuide: 'Focus on the probabilistic and statistical foundations. They are essential for advanced research.',
    projects: [
      {
        id: 'gaussian-process-regressor',
        title: 'Gaussian Process Regressor from Scratch',
        domain: 'Machine Learning',
        level: 'Advanced',
        skillTargets: ['Probability', 'Kernels', 'Regression'],
        steps: [
          'Implement a Gaussian Process kernel (e.g., RBF)',
          'Build the GP regressor with mean and covariance functions',
          'Visualize the predictive mean and uncertainty',
          'Test on a non-linear regression task'
        ],
        definitionOfDone: 'A working GP regressor with uncertainty visualizations.',
        suggestedTools: ['Python', 'NumPy', 'Matplotlib'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Probabilistic ML Engineer', 'Statistical Modeler', 'Quantitative Researcher']
      }
    ]
  },
  {
    id: 'oxford-nlp',
    title: 'Natural Language Processing',
    university: 'University of Oxford',
    topics: ['NLP'],
    level: 'Advanced',
    format: 'Full Course',
    certificate: 'None',
    whyItsGreat: 'Focuses on the latest transformer-based architectures and their applications in language tasks.',
    forWhom: 'Students who want to understand the state-of-the-art in NLP from a research perspective.',
    links: {
      coursePage: 'https://www.cs.ox.ac.uk/teaching/courses/2020-2021/nlp/'
    },
    editorialReview: 'A very up-to-date and rigorous NLP course. It covers the latest research in the field with great depth.',
    studyGuide: 'Focus on the attention mechanism and transformer architectures. They are the core of modern NLP.',
    projects: [
      {
        id: 'transformer-from-scratch',
        title: 'Transformer Block from Scratch',
        domain: 'NLP',
        level: 'Advanced',
        skillTargets: ['Transformers', 'Attention', 'PyTorch'],
        steps: [
          'Implement multi-head self-attention',
          'Build the position-wise feed-forward network',
          'Add layer normalization and residual connections',
          'Test on a simple sequence task'
        ],
        definitionOfDone: 'A working transformer block implementation with tests.',
        suggestedTools: ['Python', 'PyTorch'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['NLP Engineer', 'Transformer Architect', 'AI Scientist']
      }
    ]
  },
  {
    id: '3b1b-quaternions',
    title: 'Quaternions and 3D Rotation',
    university: '3Blue1Brown',
    topics: ['Mathematics', 'Computer Vision'],
    level: 'Advanced',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'Demystifies one of the most confusing topics in 3D graphics and robotics.',
    forWhom: 'Game developers, robotics engineers, and math enthusiasts.',
    links: {
      coursePage: 'https://www.3blue1brown.com/topics/quaternions',
      playlist: 'https://www.youtube.com/playlist?list=PLp-ll7Dh7B8e9cE7qI8k5rWupj5jJ5-5m'
    },
    editorialReview: 'Quaternions are often treated as magic formulas. Grant shows them as a natural extension of complex numbers.',
    studyGuide: 'Use the interactive "Quaternion Explorer" on the 3Blue1Brown website while watching.',
    projects: [
      {
        id: 'quaternion-camera',
        title: 'Quaternion-based Camera System',
        domain: 'Computer Vision',
        level: 'Advanced',
        skillTargets: ['3D Graphics', 'Quaternions', 'Linear Algebra'],
        steps: [
          'Implement a 3D camera using Euler angles (and observe gimbal lock)',
          'Rewrite the camera system using Quaternions',
          'Implement smooth spherical linear interpolation (SLERP) between rotations',
          'Demonstrate the lack of gimbal lock in the new system'
        ],
        definitionOfDone: 'A 3D scene where the camera rotates smoothly using quaternions without gimbal lock.',
        suggestedTools: ['Three.js', 'JavaScript'],
        role: 'Manager',
        isMustOnCV: true,
        possiblePositions: ['Game Engine Developer', 'Graphics Programmer', 'Robotics Engineer']
      }
    ]
  },
  {
    id: 'statquest-xgboost',
    title: 'XGBoost In-Depth',
    university: 'StatQuest',
    topics: ['Machine Learning'],
    level: 'Advanced',
    format: 'Playlist',
    certificate: 'None',
    whyItsGreat: 'A deep dive into the math and logic of the world\'s most popular gradient boosting library.',
    forWhom: 'Data scientists who want to master the details of XGBoost.',
    links: {
      playlist: 'https://www.youtube.com/playlist?list=PLblh5JKOoLULU0irPgs1AfzSrwnU6U9S8'
    },
    editorialReview: 'XGBoost is often used as a black box. Josh opens it up and shows you the gears.',
    studyGuide: 'Watch the "Mathematical Details" video if you want to truly understand the objective function.',
    projects: [
      {
        id: 'xgboost-house-pred',
        title: 'XGBoost Hyperparameter Tuner',
        domain: 'Machine Learning',
        level: 'Intermediate',
        skillTargets: ['XGBoost', 'Grid Search', 'Feature Importance'],
        steps: [
          'Ingest the Ames Housing dataset',
          'Perform robust scaling and categorical encoding',
          'Apply XGBoost with cross-validation',
          'Extract and visualize feature importance'
        ],
        definitionOfDone: 'A model with optimized hyperparameters and a feature importance report.',
        suggestedTools: ['XGBoost', 'Optuna', 'Python'],
        role: 'Senior',
        isMustOnCV: true,
        possiblePositions: ['Pricing Specialist', 'ML Engineer (Tabular Data)', 'Senior Data Scientist']
      }
    ]
  }
];
