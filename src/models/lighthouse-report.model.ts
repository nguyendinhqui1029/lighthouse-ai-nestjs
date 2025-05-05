export interface Environment {
  /** Network user agent string */
  networkUserAgent: string;

  /** Host user agent string */
  hostUserAgent: string;

  /** Performance benchmark index */
  benchmarkIndex: number;

  /** Credits for third-party libraries and versions */
  credits: Record<string, string>;
}

export interface ScreenEmulationSettings {
  mobile: boolean;
  width: number;
  height: number;
  deviceScaleFactor: number;
  disabled: boolean;
}

export interface ThrottlingSettings {
  rttMs: number;
  throughputKbps: number;
  requestLatencyMs: number;
  downloadThroughputKbps: number;
  uploadThroughputKbps: number;
  cpuSlowdownMultiplier: number;
}

export interface ConfigSettings {
  output: string[];
  maxWaitForFcp: number;
  maxWaitForLoad: number;
  pauseAfterFcpMs: number;
  pauseAfterLoadMs: number;
  networkQuietThresholdMs: number;
  cpuQuietThresholdMs: number;
  formFactor: string;
  throttling: ThrottlingSettings;
  throttlingMethod: string;
  screenEmulation: ScreenEmulationSettings;
  emulatedUserAgent: string;
  auditMode: boolean;
  gatherMode: boolean;
  clearStorageTypes: string[];
  disableStorageReset: boolean;
  debugNavigation: boolean;
  channel: string;
  usePassiveGathering: boolean;
  disableFullPageScreenshot: boolean;
  skipAboutBlank: boolean;
  blankPage: string;
  ignoreStatusCode: boolean;
  locale: string;
  blockedUrlPatterns: string[] | null;
  additionalTraceCategories: string[] | null;
  extraHeaders: Record<string, string> | null;
  precomputedLanternData: Record<string, any> | null;
  onlyAudits: string[] | null;
  onlyCategories: string[] | null;
  skipAudits: string[] | null;
}

export interface AuditRef {
  id: string;
  weight: number;
  group: string;
  acronym?: string;
}

export interface Category {
  title: string;
  description?: string;
  manualDescription?: string;
  supportedModes: string[];
  auditRefs: AuditRef[];
  id: string;
  score: number;
}

export interface CategoryReport {
  performance: Category;
  accessibility: Category;
  bestPractices: Category;
  seo: Category;
}

export interface Entities {
  name: string;
  origins: string[];
  isFirstParty: boolean;
  isUnrecognized: boolean;
}

export interface Screenshot {
  data: string;
  width: number;
  height: number;
}

export interface NodeBox {
  id: string;
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface ScreenshotOverlay {
  screenshot: Screenshot;
  nodes: Record<string, NodeBox>;
}

export interface MeasureEntry {
  startTime: number;
  name: string;
  duration: number;
  entryType: string;
}

export interface PerformanceLog {
  entries: MeasureEntry[];
  total: number;
}

export interface RendererFormattedStrings {
  warningHeader: string;
}

export interface IcuValueEntry {
  values: Record<string, string | number>;
  path: string;
}

type IcuMessagePaths = Record<string, string[] | IcuValueEntry[]>;

export interface LocalizationData {
  rendererFormattedStrings: RendererFormattedStrings;
  icuMessagePaths: IcuMessagePaths;
}

export interface ScoringOptions {
  p10: number;
  median: number;
}

export interface NewEngineResult {
  cumulativeLayoutShift: number;
  cumulativeLayoutShiftMainFrame: number;
}

export interface DetailItem {
  cumulativeLayoutShiftMainFrame: number;
  newEngineResult: NewEngineResult;
  newEngineResultDiffered: boolean;
  origin: string;
  rtt: number;
}

export interface Heading {
  key: string;
  valueType: string;
  granularity: number;
  label: string;
  url: string;
  sessionTargetType: string;
  protocol: string;
  rendererStartTime: number;
  networkRequestTime: number;
  networkEndTime: number;
  finished: boolean;
  transferSize: number;
  resourceSize: number;
  statusCode: number;
  mimeType: string;
  resourceType: string;
  priority: string;
  experimentalFromMainFrame: boolean;
  entity: string;
}

export interface DebugData {
  type: string;
  networkStartTimeTs: number;
}

export interface AuditDetails {
  type: string;
  items: DetailItem[];
  headings: Heading[];
  debugData: DebugData;
}

export interface AuditResult {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  scoringOptions: ScoringOptions;
  details: AuditDetails;
}

export interface LighthouseReport {
  /** Lighthouse version used for this report */
  lighthouseVersion: string;

  /** URL initially requested */
  requestedUrl: string;

  /** URL of the main document */
  mainDocumentUrl: string;

  /** URL displayed in the browser after redirects */
  finalDisplayedUrl: string;

  /** Final fetched URL after any navigation */
  finalUrl: string;

  /** ISO timestamp when the fetch occurred */
  fetchTime: string;

  /** Mode in which data was gathered (e.g., "navigation") */
  gatherMode: string;

  /** Any warnings generated during the run */
  runWarnings: string[];

  /** User agent string used for fetching */
  userAgent: string;

  /** Environment details at runtime */
  environment: Environment;

  audits: AuditResult;
  configSettings: ConfigSettings;
  categories: CategoryReport;
  categoryGroups: Record<string, { title: string; description: string }>;
  stackPacks: unknown[];
  entities: Entities[];
  fullPageScreenshot: ScreenshotOverlay;
  timing: PerformanceLog;
  i18n: LocalizationData;
}
