// Single source of truth for all portfolio content.
// No fabricated metrics — everything here comes from the resume brief.

export const identity = {
  name: "Skanda Gonur Nagaraj",
  shortName: "Skanda",
  lastName: "Gonur Nagaraj",
  monogram: "SG",
  role: "Software Engineer · AI/ML Engineer",
  location: "San Jose, CA",
  email: "skanda.gonur19@gmail.com",
  phone: "(669) 204-1432",
  linkedin: "https://linkedin.com/in/skandagn",
  github: "https://github.com/19ska",
  githubHandle: "github.com/19ska",
  linkedinHandle: "linkedin.com/in/skandagn",
  tagline: "Backend engineer by trade, ML researcher by training — bringing the two together.",
  availability: "Open to Software Engineer & AI/ML Engineer roles",
  yearsExperience: "2+",
  requestsPerDay: "5M+",
  openToRoles: ["Software Engineer", "AI/ML Engineer", "Backend Engineer"],
} as const;

export const about = {
  /** The career story, in order: academic ML, production backend, bringing both together. */
  bio: [
    "I started in machine learning the academic way, publishing two papers on detecting Parkinson's disease with ML during my undergrad. The models worked on paper, but I had no idea how they would ever reach a real user.",
    "Vodafone taught me that part. Over one and a half years I built backend services handling 5M+ requests a day, and learned that latency, failures, and deployments matter as much as accuracy.",
    "I came to San Jose State to bring those two worlds together. My NLP research there beat a published legal benchmark, and my projects now span the full stack, from fine tuning transformers to simulating GPU architectures to serving models in production.",
    "I'm looking for roles where I build reliable systems at scale, whether that's backend infrastructure, AI products, or both.",
  ],
} as const;

/* ---------------------------------------------------------------- work ---- */

export type Role = {
  slug: string;
  role: string;
  company: string;
  dates: string;
  /** Short range for the timeline rail, e.g. "2023 — 2025". */
  years: string;
  location: string;
  /** The single most load-bearing result. Scannable without opening anything. */
  headline: string;
  bullets: string[];
  tech: string[];
};

export const roles: Role[] = [
  {
    slug: "sjsu-research-assistant",
    role: "Research Assistant",
    company: "San Jose State University",
    dates: "Aug 2025 – May 2026",
    years: "2025 — 2026",
    location: "San Jose, CA",
    headline: "Beat the published LexGLUE benchmark at 88.62% Micro-F1",
    bullets: [
      "Beat the published LexGLUE benchmark by fine-tuning Legal-BERT across 4 class-imbalance strategies, achieving **88.62% Micro-F1** on 100-class legal clause classification.",
      "Improved summarization by **+3.45 ROUGE-2 points** by designing a hierarchical chunking pipeline that fit 89.1% of 9,280 legal cases within BART's token limit.",
      "Accelerated long-document ingestion from **6.1% to 89.1%** token compliance by restructuring case preprocessing for Multi-LexSum summarization.",
    ],
    tech: ["Python", "BERT", "Legal-BERT", "BART", "LongT5", "HuggingFace", "PyTorch"],
  },
  {
    slug: "vodafone-software-engineer",
    role: "Software Engineer",
    company: "Vodafone Intelligent Solutions (VOIS)",
    dates: "Jan 2023 – Aug 2024",
    years: "2023 — 2024",
    location: "Pune, India",
    headline: "Served 5M+ requests/day at p95 under 300ms",
    bullets: [
      "Handled **5M+** requests/day at **p95 < 300ms** by building Spring Boot microservices and REST APIs deployed on AWS ECS with Docker.",
      "Cut API response latency by **25%** under peak traffic by adding compound indexes and refactoring aggregation pipelines on 50M+ document MongoDB collections.",
      "Prevented duplicate charges during downstream failures by integrating a third-party payment gateway with idempotent request handling and circuit-breaker patterns via Resilience4j.",
      "Eliminated message loss during consumer downtime by contributing to Kafka-based async event streaming with dead-letter topic handling.",
      "Reduced deployment time from **45 to 12 minutes** by building GitLab CI/CD pipelines with staged rollouts, cutting failed deployments by **40%**.",
      "Reduced integration defects by securing **40+ REST endpoints** with Spring Security and JWT, documenting APIs via Swagger/OpenAPI.",
    ],
    tech: ["Java", "Spring Boot", "AWS ECS", "Docker", "MongoDB", "Kafka", "Redis", "Resilience4j", "JWT", "GitLab CI/CD"],
  },
  {
    slug: "ekathva-ml-intern",
    role: "Machine Learning Intern",
    company: "Ekathva Innovations Pvt. Ltd.",
    dates: "Aug 2022 – Dec 2022",
    years: "2022",
    location: "Bangalore, India",
    headline: "Lifted customer risk recall from 62% to 78% at 75% precision",
    bullets: [
      "Improved customer risk recall from **62% to 78%** by engineering behavioral and statistical features across 3M+ transaction records while maintaining 75% precision.",
      "Cut model prep time by **45%** by building PySpark pipelines for missing-value handling, feature encoding, and cleaning over large transaction datasets.",
      "Selected optimal fraud detection model by benchmarking Logistic Regression, Random Forest, and XGBoost using stratified cross-validation on imbalanced data.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "PySpark", "XGBoost", "Elasticsearch", "Kibana"],
  },
  {
    slug: "tequed-labs-ai-intern",
    role: "AI/ML Intern",
    company: "Tequed Labs",
    dates: "Aug 2021 – Sept 2021",
    years: "2021",
    location: "Bangalore, India",
    headline: "Improved predictive performance 15% over baseline",
    bullets: [
      "Improved predictive performance by **15%** over baseline by implementing and comparing multiple ML algorithms on structured classification datasets.",
      "Increased model readiness by cleaning and engineering features across **100K+ records** using Pandas and NumPy.",
      "Enabled stakeholder decisions by visualizing model performance trends and business drivers through Matplotlib reports.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
];

/* ------------------------------------------------------------ projects ---- */

export const PROJECT_CATEGORIES = ["AI / ML", "Systems", "Product"] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** One line on the card. Never longer than a line at desktop width. */
  summary: string;
  /** The number that makes the project worth opening. */
  metric: string;
  bullets: string[];
  tech: string[];
  github: string;
  /** Optional prominent badge (e.g. an award/finalist). */
  badge?: string;
  /** Shown in the homepage's 4-up featured grid. */
  featured?: boolean;
};

// One flat list. Category is a filter, not a wall to scroll past.
export const projects: Project[] = [
  {
    slug: "gpu-architecture-studio",
    name: "GPU Architecture Studio",
    category: "AI / ML",
    summary: "Autonomous multi-agent GPU design-space exploration on real GPGPU-Sim runs.",
    metric: "15 SM cores simulated",
    badge: "Hackathon Finalist · UC Berkeley & Stanford",
    featured: true,
    bullets: [
      "Built an autonomous multi-agent system for GPU microarchitecture design-space exploration, orchestrating agents to simulate kernel workloads via GPGPU-Sim across 15 SM cores",
      "Parsed simulator output into structured performance profiles (L1D miss rates, DRAM bandwidth, row-buffer locality, warp stall cycles) to surface memory- and interconnect-level bottlenecks",
      "Integrated RedisVL for vector-based state caching and Sentry for error monitoring, enabling stable multi-hour autonomous exploration sessions; built at UC Berkeley AI Hackathon 2026",
    ],
    tech: ["Python", "Claude API", "FastAPI", "GPGPU-Sim", "Docker", "Redis", "RedisVL", "Fetch.ai", "uAgents", "Sentry", "SSE"],
    github: "https://github.com/DevMewada1299/gpu-arch-studio",
  },
  {
    slug: "legal-document-analysis",
    name: "Legal Document Analysis System",
    category: "AI / ML",
    summary: "NLP pipeline classifying 100 legal clause types and summarizing 75K-token cases.",
    metric: "88.62% Micro-F1",
    featured: true,
    bullets: [
      "Built an end-to-end legal NLP pipeline for clause classification and case summarization using PyTorch and Hugging Face, integrating preprocessing, tokenization, fine-tuning, inference, and evaluation across LEDGAR and Multi-LexSum datasets",
      "Implemented BERT-base and Legal-BERT classifiers for 100-class contract clause prediction, applying weighted loss, focal loss, and oversampling to handle class imbalance; achieved 88.62% Micro-F1 and 83.11% Macro-F1",
      "Developed a hierarchical chunking summarization pipeline for 75K+ token legal cases, increasing document ingestion from 6.1% under BART truncation to 89.1%; achieved ROUGE-1 52.41, ROUGE-2 24.25, ROUGE-L 30.01",
    ],
    tech: ["Python", "BERT", "Legal-BERT", "BART", "LED", "LongT5", "HuggingFace", "PyTorch"],
    github: "https://github.com/19ska",
  },
  {
    slug: "computer-use-automation",
    name: "LLM-Driven Computer-Use Automation System",
    category: "AI / ML",
    summary: "GenAI computer-use agent that discovers and replays browser workflows.",
    metric: "341 automated tests",
    featured: true,
    bullets: [
      "Built a GenAI computer-use agent that discovers workflows on live web UIs via an observe → decide → act loop and Playwright; completed the production workflow in a 6-step live discovery run.",
      "Compiled successful runs into typed, parameterized Pydantic artifacts, enabling deterministic zero-LLM replay with new runtime inputs, robust locators, output extraction, and checkpoint verification.",
      "Implemented policy guardrails, bounded failure recovery, and human handoff for risky actions, with 341 automated tests covering discovery, compilation, replay, safety, and failure handling.",
    ],
    tech: ["Python", "Playwright", "Pydantic", "LLM", "GenAI"],
    github: "https://github.com/19ska/computer-use-automation",
  },
  {
    slug: "distributed-rag-retrieval",
    name: "Distributed LLM Document Retrieval",
    category: "Systems",
    summary: "RAG platform of FastAPI microservices with parallel embedding and query routing.",
    metric: "300+ QPS · p95 < 650ms",
    featured: true,
    bullets: [
      "Designed a distributed RAG platform using FastAPI microservices with parallel embedding generation and concurrent query execution for large-scale knowledge retrieval",
      "Built a retrieval backend sustaining 300+ QPS (peak 900) with p95 latency under 650ms, using Redis for vector storage and optimized query routing",
      "Containerized microservices with Docker on AWS EC2, achieving 99.95% uptime and end-to-end p95 latency under 500ms across distributed nodes",
    ],
    tech: ["Python", "FastAPI", "LangChain", "Redis", "Docker", "AWS EC2", "RAG", "LLM"],
    github: "https://github.com/19ska",
  },
  {
    slug: "cadence-live-coding-dsl",
    name: "Cadence — Live-Coding DSL",
    category: "Systems",
    summary: "A language for real-time music: lexer, parser, AST, and a beat-accurate runtime.",
    metric: "<5ms parse · ±2ms jitter",
    bullets: [
      "Prototyped and built Cadence, a custom domain-specific language (DSL) for live music coding, implementing a full execution pipeline: lexer, recursive-descent parser, AST, and tree-walking interpreter parsing and executing programs in under 5ms",
      "Built a multi-track concurrent runtime in Python with beat-accurate timing (±2ms jitter), NumPy audio synthesis, and hot-swap file watching that reflects code changes to live audio in under 100ms without restarting playback",
      "Validated correctness with a unit test suite covering 95%+ of grammar rules; benchmarked runtime sustaining 8 simultaneous tracks with no audio dropout at 120-180 BPM",
    ],
    tech: ["Python", "NumPy", "Pygame", "Threading", "DSL Design", "Compilers"],
    github: "https://github.com/19ska/A-Live-Coding-Language-for-Real-Time-Music-Generation",
  },
  {
    slug: "mininet-network-routing",
    name: "Mininet Network: IP Routing & OpenFlow Control",
    category: "Systems",
    summary: "Software-defined router and switch topologies with DHCP/DNS/NTP built in.",
    metric: "4 subnets · 2 OVS switches",
    bullets: [
      "Built a Linux router topology in Mininet with 2 routers, 3 hosts, and 4 subnets, configuring static routes and IP forwarding via sysctl, and a second topology with 2 OVS switches using custom OpenFlow rules for Layer 2/3 traffic control.",
      "Extended the topology with dnsmasq for combined DHCP/DNS resolution and chrony for NTP time synchronization, verifying lease assignment, name resolution, and clock sync across client hosts.",
      "Automated experiment execution and validation with Python and Bash scripts, capturing routing tables, OpenFlow flow tables, and DHCP/DNS/NTP verification output to structured result logs for repeatable testing.",
    ],
    tech: ["Mininet", "OpenFlow", "Open vSwitch", "Python", "Bash", "dnsmasq", "chrony"],
    github: "https://github.com/19ska/mininet-assign",
  },
  {
    slug: "dqn-routing-spectrum-allocation",
    name: "DQN Routing & Spectrum Allocation",
    category: "AI / ML",
    summary: "Reinforcement learning agent allocating optical routes and spectrum in real time.",
    metric: "99.8% success rate",
    bullets: [
      "Trained a DQN agent for real-time Routing and Spectrum Allocation, achieving 99.8% allocation success across 1,000 unseen evaluation scenarios",
      "Engineered a custom Gymnasium simulator with a 15-D state space and 9 discrete actions, enforcing wavelength continuity, link capacity, and wavelength conflict constraints via first-fit allocation",
      "Optimized training via Optuna (TPE + median pruning) over 1M timesteps in Stable-Baselines3, using experience replay and target networks for stable convergence",
    ],
    tech: ["Python", "PyTorch", "Stable-Baselines3", "Gymnasium", "Optuna", "DQN", "RL"],
    github: "https://github.com/19ska/Routing-and-Spectrum-Allocation-Problem",
  },
  {
    slug: "audio-transcriber",
    name: "AudioTranscriber",
    category: "Product",
    summary: "iOS speech pipeline with dual-backend failover and full offline support.",
    metric: "<2s latency · 95%+ accuracy",
    bullets: [
      "Built a modular SwiftUI iOS app using AVAudioEngine with 30-second audio segmentation, achieving under 2s end-to-end transcription latency",
      "Engineered a dual-backend failover system (Whisper API + on-device SFSpeechRecognizer), cutting failed transcriptions by 40% and enabling full offline support",
      "Designed a SwiftData persistence layer with background writes and lazy loading, reducing memory usage by 60% and supporting sessions over 4 hours",
    ],
    tech: ["Swift", "SwiftUI", "AVAudioEngine", "OpenAI Whisper", "SFSpeechRecognizer", "SwiftData", "iOS"],
    github: "https://github.com/19ska/AudioTranscriber",
  },
  {
    slug: "tastythreads",
    name: "TastyThreads",
    category: "Product",
    summary: "Location-based food discussion platform on a serverless, Terraform-managed AWS stack.",
    metric: "45% faster geo search",
    bullets: [
      "Designed and deployed a full-stack platform using React and TypeScript on the frontend with AWS (Terraform, CI/CD) on the backend for consistent, repeatable releases",
      "Implemented authentication via Amazon Cognito and a serverless backend (Lambda, API Gateway) with S3 media storage, adding health checks to improve reliability",
      "Optimized geospatial search by integrating Google Maps and OpenStreetMap APIs with caching and request batching, cutting search response time by 45%",
    ],
    tech: ["AWS", "Terraform", "Lambda", "API Gateway", "Cognito", "React"],
    github: "https://github.com/19ska/tastythreads-app",
  },
  {
    slug: "multimodal-sleep-staging",
    name: "Multimodal Sleep Stage Classification",
    category: "AI / ML",
    summary: "Wearable AI pipeline fusing EEG and accelerometer signals across windowing strategies.",
    metric: "0.82 accuracy",
    bullets: [
      "Built a multimodal sleep stage classification pipeline for wearable AI/mHealth using the Dreem dataset (6,405 labeled 30s epochs of EEG + accelerometer signals)",
      "Improved cross-sensor alignment via resampling and band-pass filtering, validating segmentation across 10 window sizes",
      "Engineered 58 time/frequency features across multiple windowing strategies, reaching 0.82 accuracy (0.67 macro-F1) with the best model",
    ],
    tech: ["Python", "scikit-learn", "NumPy", "Signal Processing", "EEG"],
    github: "https://github.com/19ska/automated-sleep-stage-classification",
  },
  {
    slug: "video-anomaly-detection",
    name: "Anomaly Detection in Surveillance Video",
    category: "AI / ML",
    summary: "Unsupervised video anomaly detection trained on normal-only sequences.",
    metric: "+12% ROC-AUC",
    bullets: [
      "Built a multi-architecture pipeline for low-label video anomaly detection on UCSD Ped2, training CAE, VAE, and ConvLSTM models on normal-only sequences for reconstruction-based anomaly scoring",
      "Converted 10K+ grayscale frames into fixed-length temporal sequences with batched loading and prefetch, cutting data load time by 35%",
      "Refined spatiotemporal feature extraction and calibrated reconstruction-error thresholds, boosting ROC-AUC by 12% over baseline",
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Autoencoders"],
    github: "https://github.com/19ska/Anomaly-Detection-in-Surveillance-Videos-using-Autoencoders-",
  },
  {
    slug: "customer-churn-analysis",
    name: "Customer Churn Analysis",
    category: "AI / ML",
    summary: "End-to-end churn prediction over telecom records, from EDA to tuned models.",
    metric: "93% F1-score",
    bullets: [
      "Designed an end-to-end churn prediction pipeline covering preprocessing, feature engineering, and EDA on 7K+ customer records",
      "Trained and fine-tuned Logistic Regression, Random Forest, and TensorFlow models, achieving a 93% F1-score and 28% recall improvement over baseline",
    ],
    tech: ["Python", "TensorFlow", "scikit-learn", "Pandas", "Feature Engineering"],
    github: "https://github.com/19ska",
  },
];

/* ----------------------------------------------------------- education ---- */

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
    degree: "M.S. Computer Science",
    school: "San Jose State University",
    location: "San Jose, CA",
    dates: "2024 — 2026",
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
    degree: "B.E. Computer Science",
    school: "Visvesvaraya Technological University",
    location: "Bangalore, India",
    dates: "2019 — 2023",
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

/* -------------------------------------------------------------- skills ---- */

export type SkillGroup = { category: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "HuggingFace", "Transformers", "LLMs", "RAG", "LangChain", "Stable-Baselines3", "Optuna", "scikit-learn"],
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
    skills: ["AWS", "EC2", "Lambda", "S3", "API Gateway", "ECS", "Cognito", "Docker", "Kubernetes", "Terraform", "GitLab CI/CD"],
  },
  {
    category: "Data & Streaming",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch", "Kafka", "PySpark", "Hadoop", "Pandas", "NumPy"],
  },
  {
    category: "Languages",
    skills: ["Python", "Java", "TypeScript", "C++", "Swift"],
  },
];

/* -------------------------------------------------------- publications ---- */

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
    title: "Legal Document Analysis: Clause Classification and Summarization",
    journal: "IEEE",
    issn: "",
    date: "",
    upcoming: true,
  },
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
];

/* ---------------------------------------------------------------- nav ----- */

export const navLinks = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Publications", href: "/#publications" },
] as const;
