// config/client.ts
// Auto-generated for: Innovarise
// Platform Type: impact_investor
// Platform Mode: screening
// Generated: 2025-12-10T20:11:20.720Z

export const clientConfig = {
  // Platform Configuration
  platformType: "impact_investor" as const,
  platformMode: "screening" as const,
  
  company: {
    name: "Innovarise",
    legalName: "Innovarise",
    tagline: "Impact-First Investing",
    description: "Screen founders for financial returns AND measurable social/environmental impact",
    website: "https://innovarise.com/",
    platformUrl: "https://innovarise.vercel.app",
    supportEmail: "mcmdennis@gmail.com",
    salesEmail: "mcmdennis@gmail.com",
    social: { linkedin: "", twitter: "", youtube: "" },
    logo: { light: "/logo-light.svg", dark: "/logo-dark.svg", favicon: "/favicon.ico" },
  },
  
  admin: {
    firstName: "Lonneke",
    lastName: "Louise Boonzaaijer",
    email: "mcmdennis@gmail.com",
    phone: "+61402612471",
    position: "Managing Partner",
    linkedIn: "",
  },
  
  offices: [{ city: "Office", country: "", address: "", phone: "+61402612471", isPrimary: true }],
  
  theme: {
    mode: "dark" as const,
    colors: {
      primary: "#003399",
      primaryHover: "#2563EB",
      accent: "#ABB8C3",
      accentHover: "#059669",
      background: "#0F172A",
      surface: "#1E293B",
      text: "#F8FAFC",
      textMuted: "#94A3B8",
      border: "#334155",
      gradient: { from: "#003399", via: "#0F172A", to: "#ABB8C3" },
      success: "#22C55E",
      warning: "#F59E0B",
      error: "#EF4444",
    },
    gradients: { hero: "from-blue-600 to-purple-600", button: "from-blue-500 to-blue-600", card: "from-slate-800 to-slate-900" },
    fonts: { heading: "Inter", body: "Inter" },
    borderRadius: "0.5rem",
  },
  
  coaching: {
    coachName: "Lonneke",
    coachPersonality: "friendly",
    voiceAgentId: "agent_4501kc4y7bbkemcacw6yp4js6xvh",
    scoringFocus: "impact_alignment" as const,
    scoringCriteria: [
          {
                "key": "sdg_alignment",
                "label": "SDG Alignment",
                "weight": 0.2
          },
          {
                "key": "impact_measurability",
                "label": "Impact Measurability",
                "weight": 0.15
          },
          {
                "key": "theory_of_change",
                "label": "Theory of Change",
                "weight": 0.15
          },
          {
                "key": "financial_viability",
                "label": "Financial Viability",
                "weight": 0.15
          },
          {
                "key": "team",
                "label": "Team & Mission Fit",
                "weight": 0.1
          },
          {
                "key": "market",
                "label": "Market Opportunity",
                "weight": 0.1
          },
          {
                "key": "traction",
                "label": "Impact Traction",
                "weight": 0.1
          },
          {
                "key": "scalability",
                "label": "Impact Scalability",
                "weight": 0.05
          }
    ],
    welcomeMessages: {
      discovery: "Welcome! I'm Lonneke from Innovarise. Let's explore how your startup creates meaningful impact aligned with the SDGs.",
      practice: "Ready to practice your impact pitch? I'll help you articulate both your financial and social returns.",
      simulation: "Let's simulate a meeting with an impact investor. I'll ask about your theory of change and impact metrics.",
    },
  },
  
  platform: {
    urlPrefix: "innovarise",
    adminRole: "portal_admin",
    features: {"voiceCoaching":true,"investorMatching":true,"deckVersioning":true,"teamMembers":false,"analytics":true,"apiAccess":false,"sdgScoring":true,"impactMetrics":true,"blendedReturns":true},
    founderJourney: [
          {
                "id": "upload",
                "label": "Upload Deck",
                "icon": "Upload"
          },
          {
                "id": "impact",
                "label": "Impact Analysis",
                "icon": "Heart"
          },
          {
                "id": "discovery",
                "label": "Story Discovery",
                "icon": "MessageSquare"
          },
          {
                "id": "practice",
                "label": "Practice Pitch",
                "icon": "Mic"
          },
          {
                "id": "match",
                "label": "Investor Matching",
                "icon": "Target"
          }
    ],
    readinessLevels: [
          {
                "key": "not-aligned",
                "label": "Not Aligned",
                "minScore": 0,
                "color": "red"
          },
          {
                "key": "emerging",
                "label": "Emerging Impact",
                "minScore": 40,
                "color": "orange"
          },
          {
                "key": "strong",
                "label": "Strong Impact",
                "minScore": 60,
                "color": "yellow"
          },
          {
                "key": "exemplary",
                "label": "Exemplary Impact",
                "minScore": 80,
                "color": "green"
          }
    ],
  },
  
  services: {
    supabase: { projectId: "jtpzchzywyuhuqgojpak", url: "https://jtpzchzywyuhuqgojpak.supabase.co" },
    vercel: { projectId: "", deploymentUrl: "https://innovarise.vercel.app" },
    elevenlabs: { agentId: "agent_4501kc4y7bbkemcacw6yp4js6xvh", voiceId: "" },
  },
  
  footer: {
    description: "Impact-first investing with measurable outcomes",
    serviceLinks: [{"label":"For Impact Founders","href":"/signup/founder"},{"label":"Investor Portal","href":"/login"}],
    companyLinks: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }],
    legalLinks: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Terms of Service", href: "/terms" }],
    copyright: "© 2025 Innovarise. All rights reserved.",
  },
  
  legal: { privacyUrl: "/privacy", termsUrl: "/terms", copyrightYear: 2025, complianceRegions: ["GDPR", "CCPA"] },
  
  thesis: {
      "focusAreas": [
          "SDG Alignment",
          "Measurable Impact",
          "Sustainable Business Model"
      ],
      "sectors": [
          "CleanTech",
          "HealthTech",
          "EdTech",
          "AgTech",
          "FinTech for Good"
      ],
      "stages": [
          "Pre-Seed",
          "Seed",
          "Series A"
      ],
      "geographies": [
          "Global"
      ],
      "ticketSize": {
          "min": "$100K",
          "max": "$5M",
          "sweet": "$500K - $2M"
      },
      "philosophy": "Transform systemic challenges into businesses that improve lives by combining structured methodology with fearless innovation and broad partnerships across entrepreneurs, corporates, NGOs, investors, and communities.",
      "idealFounder": "Mission-driven founders with clear impact metrics and sustainable business models.",
      "dealBreakers": [
          "No clear impact thesis",
          "Unmeasurable outcomes",
          "Impact washing"
      ]
  },
  
  landing: {
    hero: {
          "headline": "Impact Meets Returns",
          "subHeadline": "Innovarise backs founders creating measurable social and environmental impact",
          "ctaText": "Submit Your Pitch",
          "ctaLink": "/signup/founder",
          "secondaryCtaText": "Our Impact Thesis",
          "secondaryCtaLink": "#thesis"
    },
    stats: [
          {
                "value": "$50M+",
                "label": "Impact Capital Deployed"
          },
          {
                "value": "30+",
                "label": "Portfolio Companies"
          },
          {
                "value": "12",
                "label": "SDGs Addressed"
          },
          {
                "value": "1M+",
                "label": "Lives Impacted"
          }
    ],
    valueProps: [
          {
                "icon": "Heart",
                "title": "Impact Alignment",
                "description": "We score your alignment with UN Sustainable Development Goals."
          },
          {
                "icon": "Target",
                "title": "Blended Returns",
                "description": "We evaluate both financial returns and measurable impact."
          },
          {
                "icon": "Users",
                "title": "Impact Network",
                "description": "Connect with our network of impact-focused co-investors."
          }
    ],
    howItWorks: [
          {
                "step": 1,
                "title": "Submit Your Impact Pitch",
                "description": "Upload your deck and impact metrics for AI analysis."
          },
          {
                "step": 2,
                "title": "SDG Alignment Review",
                "description": "We assess your theory of change and impact measurability."
          },
          {
                "step": 3,
                "title": "Connect with Our Team",
                "description": "High-scoring founders get fast-tracked to our investment team."
          }
    ],
  },
  
  impactInvestor: {
    prioritySdgs: [1,7,10,6,13],
    targetFinancialReturn: 8,
    targetImpactReturn: 4,
    usesRealChangeIndex: true,
  },
};

export const getCompanyName = () => clientConfig.company.name;
export const getAdminName = () => `${clientConfig.admin.firstName} ${clientConfig.admin.lastName}`;
export const getAdminRole = () => clientConfig.platform.adminRole;
export const getUrlPrefix = () => clientConfig.platform.urlPrefix;
export const getCoachName = () => clientConfig.coaching.coachName;
export const getPlatformType = () => clientConfig.platformType;
export const getPlatformMode = () => clientConfig.platformMode;
export const isScreeningMode = () => clientConfig.platformMode === 'screening';
export const isCoachingMode = () => clientConfig.platformMode === 'coaching';
export const getPortalRoute = (path: string) => `/${clientConfig.platform.urlPrefix}${path}`;
export const getThemeColor = (color: keyof typeof clientConfig.theme.colors) => clientConfig.theme.colors[color];
export const replaceTemplateVars = (text: string): string => {
  return text
    .replace(/{company}/g, clientConfig.company.name)
    .replace(/{coach}/g, clientConfig.coaching.coachName)
    .replace(/{year}/g, String(clientConfig.legal.copyrightYear))
    .replace(/{admin}/g, getAdminName())
    .replace(/{email}/g, clientConfig.company.supportEmail);
};
export const isFeatureEnabled = (feature: keyof typeof clientConfig.platform.features) => clientConfig.platform.features[feature];
export type ClientConfig = typeof clientConfig;
