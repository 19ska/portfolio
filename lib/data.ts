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

export const about = [
  "I'm a Software Engineer and AI/ML Engineer currently completing my Master's in Computer Science at San Jose State University. I spent a year at Vodafone Intelligent Solutions building backend systems that handled millions of requests daily — that experience taught me what production really means.",
  "I believe the best engineers operate at the boundary between research and shipping. I'm not interested in building demos — I want to build things that work at scale, that hold up under pressure, and that other engineers respect when they read the code.",
  "Right now I'm deep in the intersection of NLP, distributed systems, and large language model infrastructure. I'm actively seeking roles where I can contribute to AI/ML systems, backend platforms, or both.",
] as const;

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
      "Built a Legal Document Analysis system processing 9,280+ civil rights cases; engineered long-context inference handling 75,000+ token documents via chunking, context windowing, and input routing across BART, LED, and LongT5 architectures.",
      "Achieved 88% Micro-F1 / 83% Macro-F1 on the 100-class LEDGAR benchmark across 8 controlled experiments with systematic hyperparameter tuning using fine-tuned BERT and Legal-BERT.",
      "Built a model evaluation and benchmarking framework across 11 configurations comparing domain-specific vs. general-purpose NLP models on legal text — covering classification accuracy, generalization, and overfitting behavior.",
    ],
    tech: ["Python", "BERT", "Legal-BERT", "BART", "LongT5", "HuggingFace", "PyTorch"],
  },
  {
    role: "Software Engineer",
    company: "Vodafone Intelligent Solutions (VOIS)",
    dates: "Aug 2023 – Aug 2024",
    location: "Bangalore, India",
    bullets: [
      "Developed Spring Boot microservices and REST APIs for core workflows deployed on AWS ECS with Docker, contributing to systems handling 5M+ requests/day with p95 <300ms latency.",
      "Optimized MongoDB queries on 50M+ document collections via compound indexes and aggregation pipeline refactoring, reducing API response latency by 25% under peak traffic.",
      "Integrated a payment gateway with idempotent request handling, exponential backoff, and circuit-breaker patterns via Resilience4j — preventing duplicate charges and handling downstream failures gracefully.",
      "Contributed to GitLab CI/CD pipelines, reducing average deployment time from 45 to 12 minutes and cutting failed deployments by 40% through automated integration tests and staged rollouts.",
    ],
    tech: ["Java", "Spring Boot", "AWS ECS", "Docker", "MongoDB", "Kafka", "Redis", "Resilience4j", "JWT", "GitLab CI/CD"],
  },
  {
    role: "Machine Learning Intern",
    company: "Ekathva Innovations Pvt. Ltd.",
    dates: "Aug 2022 – Oct 2022",
    bullets: [
      "Built an end-to-end customer risk classification pipeline on 3M+ transaction records covering feature engineering, model training, and threshold tuning.",
      "Improved recall from 62% to 78% while maintaining 75% precision — reducing missed high-risk customers through confusion-matrix analysis and false-negative error review.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
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
    gpa: "3.5 / 4.0",
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
  description: string;
  impact: string[];
  tech: string[];
  github: string;
};

export const featuredProjects: Project[] = [
  {
    name: "Distributed LLM-Powered Document Retrieval",
    subtitle: "RAG architecture sustaining 300+ QPS with sub-650ms p95 latency",
    description:
      "A production-grade Retrieval-Augmented Generation (RAG) system built on FastAPI microservices with LangChain, Redis vector storage, and parallel embedding generation. Designed for high-throughput document question answering at scale.",
    impact: [
      "Sustained 300+ QPS (peak 900) with p95 latency <650ms across distributed nodes",
      "Improved retrieval quality by +51% nDCG@10 through query optimization and embedding pipeline tuning",
      "Achieved 99.95% uptime on AWS EC2 with end-to-end latency <500ms p95",
    ],
    tech: ["Python", "FastAPI", "LangChain", "Redis", "Docker", "AWS EC2", "RAG", "LLM"],
    github: "https://github.com/19ska",
  },
  {
    name: "Legal Document Analysis System",
    subtitle: "NLP pipeline classifying 100 legal clause types with 88% Micro-F1",
    description:
      "An NLP research system that automates clause classification and summarization across 9,280+ civil rights cases. Engineered long-context inference strategies to handle documents exceeding 75,000 tokens — a challenge standard 1,024-token models cannot address.",
    impact: [
      "88% Micro-F1 / 83% Macro-F1 on the LEDGAR 100-class benchmark (Legal-BERT fine-tuning)",
      "Designed 3 summarization experiments comparing BART, LED, and LongT5 with 16K token capacity",
      "Built evaluation framework across 11 model configurations for reproducible benchmarking",
    ],
    tech: ["Python", "BERT", "Legal-BERT", "BART", "LED", "LongT5", "HuggingFace", "PyTorch"],
    github: "https://github.com/19ska",
  },
  {
    name: "Cadence — Live-Coding DSL for Real-Time Music",
    subtitle: "A custom programming language with <5ms parse time and ±2ms audio jitter",
    description:
      "A domain-specific language for live music coding, built from scratch: lexer, recursive-descent parser, AST, and tree-walking interpreter. Cadence lets musicians write code that generates audio in real-time, with live hot-swap that reflects code changes in under 100ms without stopping playback.",
    impact: [
      "Full execution pipeline parses and executes programs in under 5ms",
      "Multi-track runtime sustains 8 simultaneous tracks at 120–180 BPM with ±2ms jitter",
      "95%+ grammar rule coverage in unit test suite",
    ],
    tech: ["Python", "NumPy", "Pygame", "Threading", "DSL Design", "Compilers"],
    github: "https://github.com/19ska/A-Live-Coding-Language-for-Real-Time-Music-Generation",
  },
  {
    name: "DQN Routing & Spectrum Allocation Agent",
    subtitle: "Reinforcement learning agent achieving 99.8% allocation success across 1,000 scenarios",
    description:
      "A Deep Q-Network agent trained for real-time Routing and Spectrum Allocation (RSA) decisions in optical networks. Built a custom Gymnasium simulation environment with a 15-dimensional state space and 9 discrete actions, enforcing wavelength continuity, link capacity, and wavelength conflict constraints.",
    impact: [
      "99.8% allocation success rate (0.2% blocking) across 1,000 unseen evaluation scenarios",
      "Trained for 1M timesteps (~10,000 episodes) using experience replay and target networks",
      "Hyperparameter optimization via Optuna (TPE + median pruning) over multiple trials",
    ],
    tech: ["Python", "PyTorch", "Stable-Baselines3", "Gymnasium", "Optuna", "DQN", "RL"],
    github: "https://github.com/19ska/Routing-and-Spectrum-Allocation-Problem",
  },
  {
    name: "AudioTranscriber — Real-Time Speech AI Pipeline",
    subtitle: "iOS app with <2s transcription latency and 95%+ word accuracy",
    description:
      "A modular SwiftUI iOS application with a real-time speech AI pipeline built on AVAudioEngine. Features a dual-backend failover system (OpenAI Whisper API + on-device SFSpeechRecognizer) that was designed based on a rigorous benchmark comparing accuracy, latency, and offline capability.",
    impact: [
      "<2s end-to-end transcription latency with 95%+ word accuracy via Whisper cloud inference",
      "60% memory reduction via background writes, lazy loading, and file-path storage",
      "Dual-backend failover reduces failed transcriptions by 40%; supports 4+ hour continuous sessions",
    ],
    tech: ["Swift", "SwiftUI", "AVAudioEngine", "OpenAI Whisper", "SFSpeechRecognizer", "SwiftData", "iOS"],
    github: "https://github.com/19ska/AudioTranscriber",
  },
];

export type MoreProject = {
  name: string;
  description: string;
  tech: string[];
  github: string;
};

export const moreProjects: MoreProject[] = [
  {
    name: "TastyThreads",
    description:
      "Location-based food discussion platform on AWS with Terraform IaC, Cognito auth, and a serverless backend. 45% faster geospatial search.",
    tech: ["AWS", "Terraform", "Lambda", "API Gateway", "Cognito", "React"],
    github: "https://github.com/19ska/tastythreads-app",
  },
  {
    name: "Multimodal Sleep Stage Classification",
    description:
      "Wearable AI pipeline on EEG + accelerometer signals achieving 0.82 accuracy (0.67 macro-F1). 32% improvement over baseline.",
    tech: ["Python", "scikit-learn", "NumPy", "Signal Processing", "EEG"],
    github: "https://github.com/19ska/automated-sleep-stage-classification",
  },
  {
    name: "Anomaly Detection in Surveillance Videos",
    description:
      "Unsupervised video anomaly detection using CAE, VAE, and ConvLSTM on UCSD Ped2. 12% ROC-AUC improvement.",
    tech: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Autoencoders"],
    github: "https://github.com/19ska/Anomaly-Detection-in-Surveillance-Videos-using-Autoencoders-",
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
