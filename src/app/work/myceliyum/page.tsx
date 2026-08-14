import CaseStudy, { type CaseStudyData } from '../CaseStudy';

const data: CaseStudyData = {
  index: '03',
  name: 'MYCELIYUM',
  kicker: 'ANDROID / FIELD RESEARCH',
  maturity: 'APPLICATION PROTOTYPE / ACTIVE',
  thesis: 'A useful field app should still work when the interesting place has terrible reception.',
  summary:
    'Myceliyum is a native Android field-research application built around local observations first, then enriched with maps, location, weather/environmental context and public species data. The project is deliberately framed as decision-support software rather than pretending its environmental suggestions are validated scientific forecasting.',
  target: 'Native Android / outdoor field workflow',
  role: 'Product definition, Android architecture, local-data design, maps/location/API integration, build/release workflow and verification, with AI coding agents supporting implementation and iteration.',
  repo: 'https://github.com/thotsl4yer69/Myceliyum',
  accent: '#a4d47b',
  stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit', 'Moshi', 'OkHttp', 'osmdroid', 'Play Services Location'],
  outcomes: [
    'Native Kotlin/Compose application rather than a wrapped web prototype.',
    'Offline-first observation log built on Room so the core field workflow does not depend on connectivity.',
    'Maps and location integrated with OpenStreetMap/osmdroid and Android location services.',
    'Public species/weather/environmental APIs enrich local records without becoming the source of truth for the logbook.',
  ],
  architecture: [
    { name: 'FIELD UI', detail: 'Compose screens capture observations, navigation and context around the actual outdoor workflow.' },
    { name: 'LOCAL DATA', detail: 'Room owns the durable observation record so loss of network access does not remove the core product.' },
    { name: 'MAP + LOCATION', detail: 'osmdroid/OpenStreetMap and Play Services Location connect records to geography.' },
    { name: 'PUBLIC DATA', detail: 'Species and weather/environmental APIs add context through Retrofit/Moshi/OkHttp.' },
    { name: 'CAMERA / FILE FLOWS', detail: 'Android platform APIs handle capture, sharing and local file boundaries.' },
    { name: 'BUILD / RELEASE', detail: 'Gradle, CI, signing and migration work turn an app project into something that can repeatedly produce installable builds.' },
  ],
  decisions: [
    { title: 'Local observations are primary data.', copy: 'The field log must remain useful even when public services fail, rate-limit or disappear. Remote data enriches the record; it does not own it.' },
    { title: 'Native Android for a physical workflow.', copy: 'Location, camera, storage, background lifecycle and offline behaviour are core to the product, making native platform integration worth the extra tooling complexity.' },
    { title: 'Keep ecological suggestions in the right epistemic category.', copy: 'Environmental context can help decide where to look, but the interface and portfolio should not imply scientifically validated prediction where none has been established.' },
  ],
  constraints: [
    'Outdoor connectivity is intermittent, so remote services must degrade without taking the logbook down with them.',
    'Location and environmental data can look precise while still being incomplete or stale; UI confidence should not exceed source quality.',
    'Android signing, SDK migrations and release tooling are operational dependencies that can break an otherwise healthy app.',
    'Species suggestions and fruiting-zone ideas are decision support, not scientific guarantees or safety advice.',
  ],
  next: [
    'Keep release signing private and repeatable after the historical debug-key cleanup.',
    'Expand device-level field testing across offline/online transitions and interrupted location/network states.',
    'Tie public screenshots and feature claims to tagged builds rather than a moving main branch.',
    'Continue separating experimental prediction features from the reliable observation/logging core.',
  ],
};

export default function MyceliyumCaseStudy() {
  return <CaseStudy data={data} />;
}
