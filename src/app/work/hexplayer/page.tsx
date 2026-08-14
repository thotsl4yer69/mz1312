import CaseStudy, { type CaseStudyData } from '../CaseStudy';

const data: CaseStudyData = {
  index: '05',
  name: 'HEXPLAYER',
  kicker: 'PHYSICAL MEDIA / NFC',
  maturity: 'BENCH PROTOTYPE',
  thesis: 'The interesting part of “modern vinyl” is not the hexagon. It is making a physical object reliably resolve into a digital playback action.',
  summary:
    'HexPlayer is a Raspberry Pi physical-media experiment built around NFC-tagged album tiles. A tile is presented to the reader, its identifier or stored URI is resolved, and the player triggers mapped media without requiring a phone at the point of interaction. It is compact, but it crosses the complete hardware/software/product loop.',
  target: 'Raspberry Pi + NFC reader + local/network playback endpoint',
  role: 'Product concept, reader/hardware selection, SPI/NFC bring-up, Python integration, media mapping, playback/API exploration and bench validation, with AI assistance used for implementation and troubleshooting.',
  repo: 'https://github.com/thotsl4yer69/Hexplayer',
  accent: '#ff8cc8',
  stack: ['Python', 'Raspberry Pi', 'NFC', 'SPI', 'PN532 / RC522', 'Spotify URI/API', 'Linux', 'systemd'],
  outcomes: [
    'Physical NFC object mapped into a complete software action instead of stopping at “tag detected”.',
    'Raspberry Pi/Linux used as the appliance layer for a phone-independent interaction.',
    'Reader integration, tag mapping and media resolution treated as one product flow.',
    'A small project that clearly demonstrates physical-computing and interface-design instincts.',
  ],
  architecture: [
    { name: 'PHYSICAL TILE', detail: 'Album artwork and NFC identity turn digital media into a tangible object with a single obvious interaction.' },
    { name: 'NFC READER', detail: 'PN532/RC522-style hardware detects the tile over a Raspberry Pi-connected interface such as SPI.' },
    { name: 'TAG RESOLUTION', detail: 'Python maps UID or stored content into a canonical Spotify/media URI rather than embedding product logic in the reader layer.' },
    { name: 'PLAYBACK COMMAND', detail: 'The resolved URI is handed to the chosen playback endpoint/API path.' },
    { name: 'APPLIANCE LAYER', detail: 'Linux service behaviour, boot startup and error handling are what let the player act like an object instead of a development script.' },
    { name: 'PHYSICAL PRODUCT', detail: 'Tile form factor, reader placement, feedback and enclosure/audio choices determine whether the interaction feels deliberate.' },
  ],
  decisions: [
    { title: 'No phone in the primary interaction.', copy: 'The entire appeal is that choosing music feels like selecting a physical record. A phone can exist behind the service ecosystem, but it should not be the user interface for every play.' },
    { title: 'Store a stable media identity, not brittle UI automation.', copy: 'A URI/ID mapping is easier to reason about and maintain than simulating taps or keyboard navigation against a changing desktop interface.' },
    { title: 'Keep hardware variants explicit.', copy: 'PN532 and RC522 readers, SPI wiring and playback hardware are not universally interchangeable. The portfolio should document the tested combination rather than imply plug-and-play equivalence.' },
  ],
  constraints: [
    'Reader voltage, bus wiring and Linux permissions must match the actual board/revision being used.',
    'Spotify/API authentication and playback-control behaviour can change independently of the NFC layer.',
    'A bench interaction can feel reliable while still needing boot/recovery testing before it becomes a household appliance.',
    'Enclosure, audio output and reader placement materially affect the physical experience even though they do not appear in the core software loop.',
  ],
  next: [
    'Document one canonical tested hardware build with exact reader, wiring, power and audio endpoint.',
    'Capture a short end-to-end video: tile presented → tag resolved → playback begins.',
    'Add explicit user feedback for unknown tags, network/playback failures and successful resolution.',
    'Package the service and mapping workflow so a clean Raspberry Pi can reproduce the demo without hand repair.',
  ],
};

export default function HexPlayerCaseStudy() {
  return <CaseStudy data={data} />;
}
