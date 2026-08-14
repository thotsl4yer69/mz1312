import CaseStudy, { type CaseStudyData } from '../CaseStudy';

const data: CaseStudyData = {
  index: '02',
  name: 'DRIFTER',
  kicker: 'VEHICLE INTELLIGENCE / RASPBERRY PI',
  maturity: 'HARDWARE-INTEGRATED PROTOTYPE / ACTIVE HARDENING',
  thesis: 'A car is a hostile integration environment: old protocols, noisy data, physical power and very little patience for software theatre.',
  summary:
    'DRIFTER turns a Raspberry Pi into a vehicle intelligence node built around real telemetry rather than a dashboard mockup. It combines OBD-II/CAN transport paths, deterministic safety logic, logging, vehicle profiles, MQTT services and driver-facing interfaces while remaining explicit about which vehicle/protocol combinations have actually been validated.',
  target: 'Raspberry Pi Linux vehicle node / standards-based OBD-II transports',
  role: 'Architecture, vehicle/hardware integration, telemetry design, diagnostic-rule definition, service decomposition, deployment, debugging and road/bench validation, with AI agents assisting implementation and research.',
  repo: 'https://github.com/thotsl4yer69/drifter',
  accent: '#ff9a52',
  stack: ['Python', 'SocketCAN', 'OBD-II', 'ELM327', 'ISO-TP', 'MQTT', 'SQLite', 'systemd', 'Raspberry Pi'],
  outcomes: [
    'Raspberry Pi/Linux deployment in a real vehicle-node role rather than a desktop simulator.',
    'Two telemetry paths: raw CAN/SocketCAN and ELM327/K-line style fallback architecture.',
    'Deterministic safety/diagnostic rules separated from higher-level AI analysis.',
    'Vehicle profiles, logging, watchdog patterns and driver-facing outputs integrated around one telemetry spine.',
  ],
  architecture: [
    { name: 'VEHICLE TRANSPORT', detail: 'SocketCAN/raw CAN or ELM327 path discovers and ingests supported vehicle data.' },
    { name: 'PID / FRAME DECODE', detail: 'Canonical decode logic converts frames into typed metrics while ISO-TP handles multi-frame payloads.' },
    { name: 'MQTT TELEMETRY BUS', detail: 'Normalized vehicle state fans out to safety, logging, dashboards and optional higher-level services.' },
    { name: 'SAFETY ENGINE', detail: 'Local deterministic rules provide explainable alerts without depending on networked model inference.' },
    { name: 'SESSION / LEARNING LAYER', detail: 'Logs, baselines and vehicle profiles preserve context across drives and vehicle-specific behaviour.' },
    { name: 'DRIVER INTERFACES', detail: 'Voice, web/dashboard and RealDash-style outputs turn internal telemetry into usable feedback.' },
  ],
  decisions: [
    { title: 'Deterministic safety before AI interpretation.', copy: 'Thresholds and known vehicle rules should remain locally explainable. LLM analysis can add context, but it should not become the only path for a time-sensitive warning.' },
    { title: 'Discover supported PIDs instead of assuming them.', copy: 'OBD-II is a standard with real-world variation. Polling only supported metrics and keeping transport selection explicit makes the system more honest and more portable.' },
    { title: 'Make vehicle identity a runtime concern.', copy: 'Per-VIN profiles and calibration seams are stronger than scattering Jaguar-specific constants through the codebase, while still acknowledging that validation is vehicle-dependent.' },
  ],
  constraints: [
    '“OBD-II compatible” does not mean every vehicle exposes the same useful data or transport behaviour.',
    'Bench-valid decode logic still needs road evidence for each vehicle, adapter and protocol combination being claimed.',
    'Power loss, ignition cycles, serial disconnects and partial vehicle availability are normal operating states, not edge cases.',
    'Driver-facing software must avoid turning speculative AI output into authoritative mechanical or safety claims.',
  ],
  next: [
    'Complete failure/recovery testing across ignition, adapter disconnect and broker/service restarts.',
    'Document a current hardware/wiring matrix and clean-install procedure tied to a release.',
    'Validate transport/profile behaviour across additional vehicles before broad compatibility language returns.',
    'Capture repeatable road-test evidence and acceptance output for each integration promoted publicly.',
  ],
};

export default function DrifterCaseStudy() {
  return <CaseStudy data={data} />;
}
