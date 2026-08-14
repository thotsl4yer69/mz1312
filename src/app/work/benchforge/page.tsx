import CaseStudy, { type CaseStudyData } from '../CaseStudy';

const data: CaseStudyData = {
  index: '04',
  name: 'BENCHFORGE',
  kicker: 'AI-NATIVE ELECTRONICS TOOLING',
  maturity: 'SOFTWARE PROTOTYPE / PRIVATE ACTIVE BUILD',
  thesis: 'Generative electronics gets useful when the AI has to respect the parts that are actually on the bench.',
  summary:
    'BenchForge is a private active product that starts from a structured component inventory and carries an idea toward something buildable: project specification, component compatibility, pin and power planning, substitutions, netlist/wiring output, firmware guidance and validation. The ambition is not “AI suggests fun projects”; it is constraining invention with enough engineering structure that the result can survive a datasheet check.',
  target: 'Browser/Node engineering workbench connected to real component inventory',
  role: 'Product thesis, system architecture, component-model requirements, validation rules, integration, acceptance criteria and debugging, with coding agents heavily involved in implementation and iteration.',
  repo: 'https://github.com/thotsl4yer69/bench',
  accent: '#c4a1ff',
  stack: ['TypeScript', 'Node', 'Web Serial', 'Structured component data', 'Pin planning', 'Power rules', 'Netlist validation', 'AI agents'],
  outcomes: [
    'Moves AI-assisted ideation from free-form prose toward a structured idea-to-build pipeline.',
    'Component inventory and compatibility data constrain the generated project rather than merely decorating the response.',
    'Power, pin, substitution and netlist validation become explicit stages with failure states.',
    'The product demonstrates how coding-agent workflows can be embedded inside a practical engineering tool rather than only used to write the tool itself.',
  ],
  architecture: [
    { name: 'INVENTORY', detail: 'Real components, variants and capabilities define the available design space.' },
    { name: 'PROJECT SPEC', detail: 'The concept is converted into explicit functions, parts, interfaces and constraints before wiring is generated.' },
    { name: 'POWER MODEL', detail: 'Voltage rails, logic levels and estimated loads are checked before a project is allowed to look “finished”.' },
    { name: 'PIN / BUS PLAN', detail: 'Pins and shared buses are allocated against board/peripheral constraints rather than guessed independently.' },
    { name: 'NETLIST / WIRING', detail: 'Connections become machine-readable structure that can be validated and used to drive diagrams/guidance.' },
    { name: 'FIRMWARE + VERIFICATION', detail: 'Generated software and build steps are paired with tests/checks so the output ends with evidence, not just code.' },
  ],
  decisions: [
    { title: 'Inventory before invention.', copy: 'The system is much more useful when it answers “what can I build with these parts?” than when it produces another generic ESP32 idea disconnected from the hardware available.' },
    { title: 'Validation is a first-class stage.', copy: 'Pin conflicts, wrong voltage assumptions and impossible buses are exactly the errors fluent AI prose can hide. They need explicit rules and machine-checkable failure states.' },
    { title: 'Datasheets remain authoritative.', copy: 'Generated engineering guidance is assistance, not a replacement for verifying the exact board revision, module pinout, voltage range and component limits.' },
  ],
  constraints: [
    'Electronic modules sold under similar names can have different regulators, level shifting and pinouts across revisions.',
    'A correct logical netlist does not automatically prove current capacity, signal integrity, thermal behaviour or physical assembly quality.',
    'AI-generated firmware can compile while still using the wrong peripheral assumptions, timing or library version.',
    'Private-source status limits direct public code review, so the portfolio must compensate with a clear evidence/demo package before calling this a flagship release.',
  ],
  next: [
    'Publish one end-to-end demo project that begins with inventory and finishes with tested hardware.',
    'Expand automated coverage around voltage, pin-conflict, bus and substitution rules.',
    'Generate a clear wiring/schematic visual from the same canonical netlist used by validation.',
    'Scrub the private repository and publish a demonstrable release when the evidence package is strong enough.',
  ],
};

export default function BenchForgeCaseStudy() {
  return <CaseStudy data={data} />;
}
