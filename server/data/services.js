export const serviceCategories = [
  {
    id: "assessment",
    title: "Security Assessment",
    subtitle: "Adversarial testing, architecture review, and evidence that informs real fixes.",
  },
  {
    id: "managed",
    title: "Managed Security",
    subtitle: "Operate and improve detection and response without staffing a 24/7 floor yourself.",
  },
  {
    id: "specialized",
    title: "Specialized Services",
    subtitle: "High-impact programs when stakes are high or adversaries are persistent.",
  },
  {
    id: "compliance",
    title: "Compliance & Advisory",
    subtitle: "Framework-aligned programs that still work for engineering calendars.",
  },
];

export const services = [
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    summary:
      "Adversarial testing across web, mobile, APIs, and infrastructure to uncover exploitable risk.",
    bullets: [
      "Scope tailored to threat model and asset criticality",
      "Clear reproduction, impact, and remediation guidance",
      "Executive summary plus developer-ready technical detail",
    ],
  },
  {
    slug: "soc-as-a-service",
    title: "SOC-as-a-Service",
    summary: "Managed detection and response with 24/7 visibility, escalation paths, and retainer-backed response.",
    bullets: [
      "Detection-as-code aligned to your environment",
      "Tiered triage with business-context routing",
      "Quarterly program metrics and tabletop exercises",
    ],
  },
  {
    slug: "threat-intelligence",
    title: "Threat Intelligence",
    summary: "Localized intel, takedowns, brand protection and monitoring tailored to your sectors.",
    bullets: [
      "Region-aware actor and campaign tracking",
      "Dark web and credential exposure monitoring",
      "Breach memo templates for legal and communications",
    ],
  },
  {
    slug: "red-teaming",
    title: "Red Teaming",
    summary: "Assumed-breach simulations to stress people, processes, and controls end-to-end.",
    bullets: [
      "Purple-team checkpoints to accelerate hardening",
      "Safe emulation with documented guardrails",
      "Leadership readouts with decision-ready scoring",
    ],
  },
  {
    slug: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    summary: "Continuous scanning and prioritized remediation roadmaps grounded in exploitability.",
    bullets: [
      "Business-aligned SLAs for critical classes",
      "Integration with ticketing and change windows",
      "Executive dashboards for aging and debt reduction",
    ],
  },
  {
    slug: "cloud-security",
    title: "Cloud Security",
    summary: "Secure landing zones, IaC reviews, identity hardening, and guardrails that scale.",
    bullets: [
      "Multi-cloud control baselines",
      "Pipeline and secrets hygiene review",
      "Detection hooks for risky configuration drift",
    ],
  },
  {
    slug: "forensics-ir",
    title: "Forensics & Incident Response",
    summary: "Rapid containment, investigation, evidence handling, post-incident reviews.",
    bullets: [
      "Structured evidence chain and regulatory awareness",
      "Technical root-cause and lateral movement mapping",
      "Repair backlog with tracked remediation",
    ],
  },
  {
    slug: "risk-compliance",
    title: "Risk & Compliance",
    summary: "ISO 27001, SOC 2, PCI DSS, NDPR with practical, risk-based controls—and audit collaboration.",
    bullets: [
      "Control mapping that engineers can implement",
      "Evidence collection playbooks to reduce scramble",
      "Board-ready views of residual risk",
    ],
  },
];

const slugToCategory = {
  "penetration-testing": "assessment",
  "vulnerability-assessment": "assessment",
  "cloud-security": "assessment",
  "soc-as-a-service": "managed",
  "threat-intelligence": "managed",
  "red-teaming": "specialized",
  "forensics-ir": "specialized",
  "risk-compliance": "compliance",
};

export function categoryForSlug(slug) {
  return slugToCategory[slug] ?? "assessment";
}

export function servicesInCategory(catId) {
  return services.filter((s) => slugToCategory[s.slug] === catId);
}
