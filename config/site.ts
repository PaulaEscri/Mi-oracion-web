export const siteConfig = {
    name: "NIYYAH — Mi Oración",
    description: "Una app musulmana para tu práctica espiritual, sin presión ni culpa.",

    // App Store Links (update with real URLs)
    appStoreUrl: "https://apps.apple.com/app/niyyah-mi-oracion", // TODO: Update with real URL
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.niyyah.mioracion", // TODO: Update with real URL

    // Feature Flags
    showRamadanSection: true, // Set to false to hide Ramadan section

    // Contact
    supportEmail: "support@niyyahprayer.com",

    // SEO
    seo: {
        title: "NIYYAH — Mi Oración | App musulmana sin presión ni culpa",
        description: "Una app espiritual para tu práctica musulmana. Calma, privacidad total y sin presión. Diario, Qibla, retos suaves y más.",
        keywords: ["app musulmana", "oración", "islam", "diario espiritual", "qibla", "ramadán", "privacidad"],
        ogImage: "/og-image.png", // TODO: Add OG image
    },

    // Legal
    legalDisclaimer: "NIYYAH no está afiliada a ninguna institución religiosa.",
} as const;

