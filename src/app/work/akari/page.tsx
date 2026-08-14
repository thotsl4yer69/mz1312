import CaseStudy, { type CaseStudyData } from '../CaseStudy';

const data: CaseStudyData = {
  index: '06',
  name: 'AKARI',
  kicker: 'PRIVACY-FIRST ANDROID',
  maturity: 'APPLICATION PROTOTYPE',
  thesis: 'Sometimes the strongest product decision is deciding what data never needs to leave the phone.',
  summary:
    'Akari is a local-first Android energy diary focused on a small, repeatable self-management workflow. It demonstrates native Compose UI, Room/DataStore persistence, optional read-only Health Connect, explicit export/backup decisions, CI and emulator-driven accessibility QA without requiring an account or cloud backend for the core product.',
  target: 'Native Android / private personal diary workflow',
  role: 'Product definition, privacy boundary, Android architecture, persistence, Health Connect integration, CI, smoke-test design and accessibility verification, with AI assistance used during implementation and refactoring.',
  repo: 'https://github.com/thotsl4yer69/akari-android',
  accent: '#ffe36f',
  stack: ['Kotlin', 'Jetpack Compose', 'Room', 'DataStore', 'Health Connect', 'GitHub Actions', 'Android Emulator'],
  outcomes: [
    'Local-first native Android architecture with no required account or cloud path.',
    'Room/DataStore persistence keeps diary state on-device and explicit JSON export preserves user control.',
    'Optional read-only Health Connect integration adds context without making external health data mandatory.',
    'CI builds/tests the app and emulator smoke tests generate screenshots and exercise real screens.',
  ],
  architecture: [
    { name: 'COMPOSE UI', detail: 'A small set of daily check-in, trends and history screens keeps the product focused on repeat use.' },
    { name: 'LOCAL PERSISTENCE', detail: 'Room and DataStore separate structured diary records from lightweight preferences/state.' },
    { name: 'PRIVACY BOUNDARY', detail: 'No account is required for the core workflow; OS backup/data behaviour and export paths are explicit design decisions.' },
    { name: 'OPTIONAL HEALTH CONTEXT', detail: 'Read-only Health Connect data can enrich the experience without becoming a prerequisite.' },
    { name: 'CI / EMULATOR QA', detail: 'GitHub Actions compiles/tests the app and boots it on an emulator for smoke coverage and screenshots.' },
    { name: 'ACCESSIBILITY REVIEW', detail: 'Large-font and screen-level QA treat usability under real Android settings as part of completion.' },
  ],
  decisions: [
    { title: 'No cloud just because it is easy to add one.', copy: 'The product does not need identity, syncing or analytics to perform its core job. Omitting those systems reduces both privacy exposure and operational complexity.' },
    { title: 'Make export explicit.', copy: 'Local-first should not mean trapped data. JSON export provides a simple user-controlled path out without silently introducing a server.' },
    { title: 'Automate screen-level verification.', copy: 'Compilation is weak evidence for a UI product. Emulator smoke tests and screenshot generation make regressions and first-run behaviour much easier to inspect.' },
  ],
  constraints: [
    'The app is self-management software, not a medical device; its language should never imply diagnosis or treatment.',
    'A local-first design still has data-loss risks, so backup/export behaviour needs explicit communication and testing.',
    'Android accessibility issues often appear only under font scaling, device settings and real navigation flows rather than unit tests.',
    'Release signing is security infrastructure: once a historical key is exposed, the identity—not just the file—must be treated as compromised.',
  ],
  next: [
    'Maintain a private stable signing identity and keep signing material outside the repository.',
    'Continue emulator/device coverage across first-run, large-font and interrupted-flow states.',
    'Tie screenshots and release artifacts to tagged versions for stronger portfolio evidence.',
    'Keep Health Connect optional and preserve the no-account/no-cloud core as features evolve.',
  ],
};

export default function AkariCaseStudy() {
  return <CaseStudy data={data} />;
}
