// Single source of truth for all portfolio content.
// No fabricated metrics — everything here comes from the resume brief.

export const identity = {
  name: "Skanda Gonur Nagaraj",
  monogram: "SG",
  role: "Software Engineer · AI/ML Engineer",
  location: "San Jose, CA",
  email: "skanda.gonur19@gmail.com",
  phone: "(669) 204-1432",
  linkedin: "https://linkedin.com/in/skandagn",
  github: "https://github.com/19ska",
  resume: "/resume.pdf",
  tagline: "I build production AI systems — from model to infrastructure.",
  subTagline: "MS Computer Science · SJSU · Former Software Engineer at Vodafone",
} as const;

export const credibility = [
  { icon: "trophy", label: "UC Berkeley & Stanford AI Hackathon Finalist" },
  { icon: "zap", label: "5M+ req/day @ Vodafone" },
  { icon: "brain", label: "Legal-BERT · 88% Micro-F1" },
] as const;

export const about = {
  quote: "Building at the intersection of NLP, distributed systems, and LLM infrastructure.",
  intro: [
    "I'm a Software Engineer and AI/ML Engineer with production backend experience at Vodafone Intelligent Solutions and NLP research at San Jose State University. I've built systems handling 5M+ requests/day and fine-tuned transformer models that beat published benchmarks.",
    "Right now I'm deep in the intersection of NLP, distributed systems, and LLM infrastructure. I'm looking for roles where I can build AI/ML systems, backend platforms, or both.",
  ],
  background:
    "I'm a Software Engineer and AI/ML Engineer currently completing my Master's in Computer Science at San Jose State University. I spent a year at Vodafone Intelligent Solutions building backend systems that handled millions of requests daily — that experience taught me what production really means.",
  rightNow:
    "Right now I'm deep in the intersection of NLP, distributed systems, and large language model infrastructure. I'm actively seeking roles where I can contribute to AI/ML systems, backend platforms, or both.",
} as const;

export type Experience = {
  role: string;
  company: string;
  dates: string;
  location?: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Research Assistant",
    company: "San Jose State University",
    dates: "Aug 2025 – May 2026",
    location: "San Jose, CA",
    bullets: [
      "Conducted NLP research on transformer-based legal document analysis, fine-tuning language models for clause classification and long-document summarization on civil rights litigation and SEC contract data.",
      "Surpassed the published LexGLUE benchmark on 100-class legal clause classification (88.62% vs. 88.20% Micro-F1) by fine-tuning Legal-BERT and BERT across 4 class-imbalance strategies in 8 controlled experiments.",
      "Designed a hierarchical chunking pipeline fitting 89.1% of 9,280 legal cases within BART's token limit, improving ROUGE-2 by +3.45 points over prior state-of-the-art on Multi-LexSum.",
    ],
    tech: ["Python", "BERT", "Legal-BERT", "BART", "LongT5", "HuggingFace", "PyTorch"],
  },
  {
    role: "Software Engineer",
    company: "Vodafone Intelligent Solutions (VOIS)",
    dates: "Jan 2023 – Aug 2025",
    location: "Pune, India",
    bullets: [
      "Developed Spring Boot microservices and REST APIs for core workflows on AWS ECS with Docker, supporting systems handling 5M+ requests/day at p95 < 300ms latency.",
      "Optimized MongoDB queries on collections exceeding 50M documents by adding compound indexes and refactoring aggregation pipelines, cutting API response latency by 25% under peak traffic.",
      "Integrated a third-party payment gateway with idempotent request handling and circuit-breaker patterns via Resilience4j to prevent duplicate charges during downstream failures.",
      "Contributed to Kafka-based async event streaming, decoupling services and adding dead-letter topic handling to prevent message loss during consumer downtime.",
      "Helped build GitLab CI/CD pipelines, cutting average deployment time from 45 to 12 minutes and failed deployments by 40% through staged rollouts.",
      "Secured 40+ REST endpoints with Spring Security and JWT, documenting APIs via Swagger/OpenAPI to reduce integration defects.",
    ],
    tech: ["Java", "Spring Boot", "AWS ECS", "Docker", "MongoDB", "Kafka", "Redis", "Resilience4j", "JWT", "GitLab CI/CD"],
  },
  {
    role: "Machine Learning Intern",
    company: "Ekathva Innovations Pvt. Ltd.",
    dates: "Aug 2022 – Dec 2022",
    location: "Bangalore, India",
    bullets: [
      "Built an end-to-end customer risk classification pipeline on 3M+ transaction records, engineering behavioral and statistical features that improved recall from 62% to 78% while maintaining 75% precision.",
      "Evaluated Logistic Regression, Random Forest, and XGBoost using stratified cross-validation, selecting the best model based on precision-recall tradeoffs for imbalanced fraud data.",
      "Built PySpark preprocessing pipelines for cleaning, missing-value handling, and feature encoding over large transaction datasets, cutting model prep time by 45%.",
      "Indexed transaction data in Elasticsearch and built Kibana dashboards to visualize risk score distributions and model outputs for engineering and business stakeholders.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "PySpark", "XGBoost", "Elasticsearch", "Kibana"],
  },
  {
    role: "AI/ML Intern",
    company: "Tequed Labs",
    dates: "Aug 2021 – Sept 2021",
    location: "Bangalore, India",
    bullets: [
      "Developed and evaluated machine learning models using Python and scikit-learn to solve supervised learning and classification problems across structured datasets.",
      "Performed data cleaning, feature engineering, and exploratory data analysis on datasets containing over 100,000 records, improving data quality and model readiness.",
      "Implemented and compared multiple machine learning algorithms, achieving up to 15% improvement in predictive performance over baseline models.",
      "Presented findings and model insights through visualizations and reports, helping stakeholders understand performance trends and key business drivers.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  dates: string;
  gpa: string;
  coursework: string[];
};

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "San Jose State University",
    location: "San Jose, CA",
    dates: "Aug 2024 – May 2026",
    gpa: "3.6 / 4.0",
    coursework: [
      "Distributed Systems",
      "Cloud Computing",
      "Machine Learning",
      "Artificial Intelligence",
      "Deep Learning",
      "Big Data Analytics",
      "NoSQL",
      "Database Systems",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Visvesvaraya Technological University",
    location: "Bangalore, India",
    dates: "Aug 2019 – Jun 2023",
    gpa: "3.97 / 4.0",
    coursework: [
      "Data Structures",
      "Analysis and Design of Algorithms",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Advanced Java",
      "Software Engineering",
      "OOPs",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  bullets: string[];
  tech: string[];
  github: string;
  /** Optional prominent badge (e.g. an award/finalist). */
  badge?: string;
};

export type ProjectGroup = { category: string; projects: Project[] };

// One unified grid, grouped into 3 domains.
export const projectGroups: ProjectGroup[] = [
  {
    category: "AI / ML & Research",
    projects: [
      {
        name: "GPU Architecture Studio",
        subtitle:
          "Autonomous multi-agent GPU design-space exploration with real GPGPU-Sim simulations",
        bullets: [
          "Built an autonomous multi-agent system for GPU microarchitecture design-space exploration, orchestrating agents to simulate kernel workloads via GPGPU-Sim across 15 SM cores",
          "Parsed simulator output into structured performance profiles (L1D miss rates, DRAM bandwidth, row-buffer locality, warp stall cycles) to surface memory- and interconnect-level bottlenecks",
          "Integrated RedisVL for vector-based state caching and Sentry for error monitoring, enabling stable multi-hour autonomous exploration sessions; built at UC Berkeley AI Hackathon 2026",
        ],
        tech: [
          "Python",
          "Claude API",
          "FastAPI",
          "GPGPU-Sim",
          "Docker",
          "Redis",
          "RedisVL",
          "Fetch.ai",
          "uAgents",
          "Sentry",
          "SSE",
        ],
        github: "https://github.com/DevMewada1299/gpu-arch-studio",
        badge: "Hackathon Finalist · UC Berkeley & Stanford",
      },
      {
        name: "Legal Document Analysis System",
        subtitle: "NLP pipeline classifying 100 legal clause types with 88% Micro-F1",
        bullets: [
          "Built an end-to-end legal NLP pipeline for clause classification and case summarization using PyTorch and Hugging Face, integrating preprocessing, tokenization, fine-tuning, inference, and evaluation across LEDGAR and Multi-LexSum datasets",
          "Implemented BERT-base and Legal-BERT classifiers for 100-class contract clause prediction, applying weighted loss, focal loss, and oversampling to handle class imbalance; achieved 88.62% Micro-F1 and 83.11% Macro-F1",
          "Developed a hierarchical chunking summarization pipeline for 75K+ token legal cases, increasing document ingestion from 6.1% under BART truncation to 89.1%; achieved ROUGE-1 52.41, ROUGE-2 24.25, ROUGE-L 30.01",
        ],
        tech: ["Python", "BERT", "Legal-BERT", "BART", "LED", "LongT5", "HuggingFace", "PyTorch"],
        github: "https://github.com/19ska",
      },
      {
        name: "DQN Routing & Spectrum Allocation Agent",
        subtitle: "Reinforcement learning agent achieving 99.8% allocation success across 1,000 scenarios",
        bullets: [
          "Trained a DQN agent for real-time Routing and Spectrum Allocation, achieving 99.8% allocation success across 1,000 unseen evaluation scenarios",
          "Engineered a custom Gymnasium simulator with a 15-D state space and 9 discrete actions, enforcing wavelength continuity, link capacity, and wavelength conflict constraints via first-fit allocation",
          "Optimized training via Optuna (TPE + median pruning) over 1M timesteps in Stable-Baselines3, using experience replay and target networks for stable convergence",
        ],
        tech: ["Python", "PyTorch", "Stable-Baselines3", "Gymnasium", "Optuna", "DQN", "RL"],
        github: "https://github.com/19ska/Routing-and-Spectrum-Allocation-Problem",
      },
      {
        name: "Multimodal Sleep Stage Classification",
        subtitle: "Wearable AI pipeline on EEG + accelerometer signals",
        bullets: [
          "Built a multimodal sleep stage classification pipeline for wearable AI/mHealth using the Dreem dataset (6,405 labeled 30s epochs of EEG + accelerometer signals)",
          "Improved cross-sensor alignment via resampling and band-pass filtering, validating segmentation across 10 window sizes",
          "Engineered 58 time/frequency features across multiple windowing strategies, reaching 0.82 accuracy (0.67 macro-F1) with the best model",
        ],
        tech: ["Python", "scikit-learn", "NumPy", "Signal Processing", "EEG"],
        github: "https://github.com/19ska/automated-sleep-stage-classification",
      },
      {
        name: "Anomaly Detection in Surveillance Videos",
        subtitle: "Unsupervised video anomaly detection on UCSD Ped2",
        bullets: [
          "Built a multi-architecture pipeline for low-label video anomaly detection on UCSD Ped2, training CAE, VAE, and ConvLSTM models on normal-only sequences for reconstruction-based anomaly scoring",
          "Converted 10K+ grayscale frames into fixed-length temporal sequences with batched loading and prefetch, cutting data load time by 35%",
          "Refined spatiotemporal feature extraction and calibrated reconstruction-error thresholds, boosting ROC-AUC by 12% over baseline",
        ],
        tech: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Autoencoders"],
        github: "https://github.com/19ska/Anomaly-Detection-in-Surveillance-Videos-using-Autoencoders-",
      },
      {
        name: "Customer Churn Analysis",
        subtitle: "End-to-end churn prediction on 7K+ telecom records",
        bullets: [
          "Designed an end-to-end churn prediction pipeline covering preprocessing, feature engineering, and EDA on 7K+ customer records",
          "Trained and fine-tuned Logistic Regression, Random Forest, and TensorFlow models, achieving a 93% F1-score and 28% recall improvement over baseline",
        ],
        tech: ["Python", "TensorFlow", "scikit-learn", "Pandas", "Feature Engineering"],
        github: "https://github.com/19ska",
      },
    ],
  },
  {
    category: "Software Engineering & Systems",
    projects: [
      {
        name: "Distributed LLM-Powered Document Retrieval",
        subtitle: "RAG architecture sustaining 300+ QPS with sub-650ms p95 latency",
        bullets: [
          "Designed a distributed RAG platform using FastAPI microservices with parallel embedding generation and concurrent query execution for large-scale knowledge retrieval",
          "Built a retrieval backend sustaining 300+ QPS (peak 900) with p95 latency under 650ms, using Redis for vector storage and optimized query routing",
          "Containerized microservices with Docker on AWS EC2, achieving 99.95% uptime and end-to-end p95 latency under 500ms across distributed nodes",
        ],
        tech: ["Python", "FastAPI", "LangChain", "Redis", "Docker", "AWS EC2", "RAG", "LLM"],
        github: "https://github.com/19ska",
      },
      {
        name: "Cadence — Live-Coding DSL for Real-Time Music",
        subtitle: "A custom programming language with <5ms parse time and ±2ms audio jitter",
        bullets: [
          "Prototyped and built Cadence, a custom domain-specific language (DSL) for live music coding, implementing a full execution pipeline: lexer, recursive-descent parser, AST, and tree-walking interpreter parsing and executing programs in under 5ms",
          "Built a multi-track concurrent runtime in Python with beat-accurate timing (±2ms jitter), NumPy audio synthesis, and hot-swap file watching that reflects code changes to live audio in under 100ms without restarting playback",
          "Validated correctness with a unit test suite covering 95%+ of grammar rules; benchmarked runtime sustaining 8 simultaneous tracks with no audio dropout at 120-180 BPM",
        ],
        tech: ["Python", "NumPy", "Pygame", "Threading", "DSL Design", "Compilers"],
        github: "https://github.com/19ska/A-Live-Coding-Language-for-Real-Time-Music-Generation",
      },
    ],
  },
  {
    category: "Product & Mobile",
    projects: [
      {
        name: "TastyThreads",
        subtitle: "Location-based food discussion platform on AWS",
        bullets: [
          "Designed and deployed a full-stack platform using React and TypeScript on the frontend with AWS (Terraform, CI/CD) on the backend for consistent, repeatable releases",
          "Implemented authentication via Amazon Cognito and a serverless backend (Lambda, API Gateway) with S3 media storage, adding health checks to improve reliability",
          "Optimized geospatial search by integrating Google Maps and OpenStreetMap APIs with caching and request batching, cutting search response time by 45%",
        ],
        tech: ["AWS", "Terraform", "Lambda", "API Gateway", "Cognito", "React"],
        github: "https://github.com/19ska/tastythreads-app",
      },
      {
        name: "AudioTranscriber — Real-Time Speech AI Pipeline",
        subtitle: "iOS app with <2s transcription latency and 95%+ word accuracy",
        bullets: [
          "Built a modular SwiftUI iOS app using AVAudioEngine with 30-second audio segmentation, achieving under 2s end-to-end transcription latency",
          "Engineered a dual-backend failover system (Whisper API + on-device SFSpeechRecognizer), cutting failed transcriptions by 40% and enabling full offline support",
          "Designed a SwiftData persistence layer with background writes and lazy loading, reducing memory usage by 60% and supporting sessions over 4 hours",
        ],
        tech: ["Swift", "SwiftUI", "AVAudioEngine", "OpenAI Whisper", "SFSpeechRecognizer", "SwiftData", "iOS"],
        github: "https://github.com/19ska/AudioTranscriber",
      },
    ],
  },
];

export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML",
    skills: ["Transformers", "LLMs", "RAG", "LangChain", "PyTorch", "TensorFlow", "HuggingFace", "Stable-Baselines3", "Optuna", "scikit-learn"],
  },
  {
    category: "NLP",
    skills: ["BERT", "Legal-BERT", "BART", "LED", "LongT5", "Fine-tuning", "Embeddings"],
  },
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "Spring Security", "FastAPI", "REST APIs", "JWT", "Swagger/OpenAPI", "Resilience4j"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, Lambda, S3, API Gateway, ECS, Cognito)", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD"],
  },
  {
    category: "Data & Streaming",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Kafka", "PySpark", "Hadoop", "Pandas", "NumPy"],
  },
  {
    category: "Languages",
    skills: ["Python", "Java", "TypeScript", "C++", "Swift"],
  },
  {
    category: "Tools",
    skills: ["Git", "Postman", "JIRA", "Kibana"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export type Publication = {
  title: string;
  journal: string;
  issn: string;
  date: string;
  url?: string;
  upcoming?: boolean;
};

export const publications: Publication[] = [
  {
    title: "Machine-learning and Deep-learning Based Parkinson Disease Detection System",
    journal: "IJSREM",
    issn: "ISSN 2582-3930",
    date: "June 2023",
    url: "https://ijsrem.com/download/machine-learning-and-deep-learning-based-parkinson-disease-detection-system",
  },
  {
    title: "A Review on Detection of Parkinson's Disease Using ML Algorithms",
    journal: "IJRASET",
    issn: "ISSN 2321-9653",
    date: "March 2023",
    url: "https://www.ijraset.com/best-journal/a-review-on-detection-of-parkinsons-disease-using-ml-algorithms",
  },
  {
    title: "Legal Document Analysis: Clause Classification and Summarization",
    journal: "IEEE (upcoming)",
    issn: "",
    date: "",
    upcoming: true,
  },
];
