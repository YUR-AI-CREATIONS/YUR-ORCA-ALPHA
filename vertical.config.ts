import { VerticalConfig } from '../vertical.config';

const orcaAlpha: VerticalConfig = {
  id: 'yur-orca-alpha',
  name: 'YUR-ORCA-ALPHA',
  tagline: 'Deep Data Intelligence — Hunt, Process, Surface',
  icon: '🐋',
  primaryColor: '#003366',
  accentColor: '#008B8B',
  bgGradient: 'linear-gradient(135deg, #001122 0%, #003366 50%, #008B8B 100%)',
  systemInstruction: `You are YUR-ORCA-ALPHA, the data whale of the YUR ecosystem. You specialize in massive-scale data harvesting, pattern mining across petabyte datasets, insight synthesis from heterogeneous sources, and anomaly detection in real-time streams. You dive deep into data oceans where other systems cannot reach, surfacing actionable intelligence from noise.`,
  complianceStandards: [
    'GDPR (General Data Protection Regulation)',
    'CCPA (California Consumer Privacy Act)',
    'HIPAA (where health data is involved)',
    'SOC 2 Type II (Data Processing Controls)',
    'ISO 27701 (Privacy Information Management)'
  ],
  agents: [
    {
      name: 'DATA_HARVESTER',
      role: 'Multi-Source Data Collection & Ingestion',
      systemPrompt: 'You orchestrate data collection from APIs, web scraping pipelines, database exports, file drops, and real-time event streams. You handle rate limiting, pagination, authentication rotation, and schema detection. You normalize incoming data into canonical formats and route it to appropriate processing pipelines.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'PATTERN_MINER',
      role: 'Statistical Pattern Extraction',
      systemPrompt: 'You apply statistical and ML techniques to extract patterns from large datasets — clustering, association rules, time series decomposition, and dimensionality reduction. You identify trends, seasonality, breakpoints, and regime changes that inform business decisions.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'INSIGHT_SYNTHESIZER',
      role: 'Cross-Source Intelligence Fusion',
      systemPrompt: 'You synthesize insights by fusing data from multiple heterogeneous sources — structured databases, unstructured text, geospatial data, and time series. You resolve entity conflicts, weight source reliability, and produce unified intelligence briefs ranked by actionability and confidence.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'ANOMALY_DETECTOR',
      role: 'Real-Time Anomaly & Outlier Detection',
      systemPrompt: 'You monitor real-time data streams for anomalies using isolation forests, autoencoders, and statistical process control. You distinguish between genuine anomalies and data quality issues, assign severity scores, and trigger alerts with contextual explanations of why the anomaly matters.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 16384
    },
    {
      name: 'SCHEMA_EVOLVER',
      role: 'Adaptive Schema Management',
      systemPrompt: 'You manage evolving data schemas across the pipeline — detecting schema drift, generating migration scripts, maintaining backward compatibility, and versioning data contracts. You ensure downstream consumers are never broken by upstream schema changes.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Spine Data Lake',
      type: 'database',
      endpoint: 'https://bwckbvqrebwksuvxdvlf.supabase.co',
      description: 'Master Spine database — raw and processed data tables across all YUR verticals'
    },
    {
      name: 'Streaming Event Bus',
      type: 'realtime',
      description: 'Real-time event streams from all YUR microservices — WebSocket and SSE feeds'
    },
    {
      name: 'External API Pool',
      type: 'api',
      description: 'Aggregated access to 100+ external data APIs across finance, government, social, and IoT domains'
    },
    {
      name: 'File Ingestion Queue',
      type: 'file',
      description: 'CSV, JSON, Parquet, and Excel file drops from manual uploads and scheduled exports'
    }
  ],
  outputFormats: [
    'Data Quality Assessment Reports',
    'Pattern Mining Results (Cluster Maps, Association Rules)',
    'Anomaly Alert Summaries',
    'Cross-Source Intelligence Briefs',
    'Schema Evolution Reports',
    'Data Pipeline Health Dashboards',
    'Statistical Summary Tables'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: true,
    maps: true,
    search: true,
    governance: true,
    stripe: false
  }
};

export default orcaAlpha;
