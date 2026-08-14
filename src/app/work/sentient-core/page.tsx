import CaseStudy, { type CaseStudyData } from '../CaseStudy';

const data: CaseStudyData = {
  index: '01',
  name: 'SENTIENT CORE',
  kicker: 'EDGE AI / LOCAL SYSTEMS',
  maturity: 'DEPLOYED PROTOTYPE / ACTIVE HARDENING',
  thesis: 'Local AI becomes much more interesting when it has to behave like an appliance instead of a notebook demo.',
  summary:
    'Sentient Core is a Jetson-class edge-AI system integrating local inference, persistent state, voice, APIs, a message bus and browser interfaces. The technical value is the composition: services have to start, recover, exchange state and fit inside a constrained edge device rather than a cloud playground.',
  target: 'NVIDIA Jetson Orin Nano / Linux edge node',
  role: 'System definition, architecture, hardware selection, service integration, debugging, deployment and verification, with AI coding agents used heavily for implementation and iteration.',
  repo: 'https://github.com/thotsl4yer69/sentient-core',
  accent: '#70e6ff',
  stack: ['Python', 'FastAPI', 'MQTT', 'Redis', 'Ollama', 'Whisper', 'Piper', 'systemd', 'Jetson'],
  outcomes: [
    'Local-first conversational AI stack running on Jetson-class edge hardware.',
    'FastAPI/async services connected through MQTT and Redis rather than one monolithic process.',
    'Local LLM inference, persistent memory/state and browser/PWA interaction integrated into one system.',
    'Linux deployment and service-management work became part of the product, not an afterthought.',
  ],
  architecture: [
    { name: 'INPUT / INTERFACE', detail: 'Browser/PWA, terminal and voice paths turn user input into a consistent conversation/event model.' },
    { name: 'CONVERSATION ORCHESTRATION', detail: 'Coordinates state, retrieval and generation rather than letting each interface call the model independently.' },
    { name: 'MEMORY + WORLD STATE', detail: 'Persistent context and perception services provide state beyond a stateless chat request.' },
    { name: 'LOCAL INFERENCE', detail: 'Ollama-backed local models keep the core response path on the edge device.' },
    { name: 'MESSAGE / SERVICE SPINE', detail: 'MQTT, Redis and HTTP service boundaries let subsystems evolve and fail independently.' },
    { name: 'LINUX OPERATIONS', detail: 'systemd, logs, runtime configuration and recovery behaviour are required to make the device usable after reboot.' },
  ],
  decisions: [
    { title: 'Keep the core inference path local.', copy: 'The project is most defensible as an edge-compute system when conversation, state and major service behaviour can run without relying on a remote orchestration PC.' },
    { title: 'Break the assistant into services.', copy: 'Voice, memory, perception and conversation have different failure modes. Explicit service boundaries make it possible to diagnose and restart one layer without flattening everything into one Python process.' },
    { title: 'Treat Linux deployment as product work.', copy: 'A prototype that only runs from an active shell is not an appliance. Services, environment configuration, logs and reboot behaviour are part of the architecture.' },
  ],
  constraints: [
    'Edge memory and GPU resources make model choice, concurrency and latency materially different from desktop/cloud development.',
    'Voice depends on real microphone/speaker paths; software completion alone is not proof of audio hardware readiness.',
    'Service health snapshots and latency numbers become stale quickly and should not be turned into permanent marketing claims.',
    'Credential handling and network exposure require the same scrutiny as model behaviour once the device is continuously running.',
  ],
  next: [
    'Repeatable clean-install and recovery verification from a known image.',
    'Consolidated automated acceptance tests tied to a tagged release.',
    'Sustained thermal/resource tests on the target Jetson under realistic concurrent load.',
    'Versioned rollback path and current demo evidence captured from the exact release being presented.',
  ],
};

export default function SentientCoreCaseStudy() {
  return <CaseStudy data={data} />;
}
