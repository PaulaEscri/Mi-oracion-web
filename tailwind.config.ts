import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--text-primary)",
                primary: {
                    DEFAULT: "var(--primary)",
                    dark: "var(--primary-dark)",
                    light: "var(--primary-light)",
                },
                secondary: "var(--secondary)",
                accent: {
                    DEFAULT: "var(--accent)",
                    hover: "var(--accent-hover)",
                },
            },
            borderRadius: {
                card: "var(--radius-card)",
                button: "var(--radius-button)",
            },
        },
    },
    plugins: [],
};

export default config;
