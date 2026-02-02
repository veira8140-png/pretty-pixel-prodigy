import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Veira Brand Typography v3.1
        // Display: Playfair Display (marketing hero, headlines)
        display: ['Playfair Display', 'Georgia', 'serif'],
        // Sans: DM Sans (body, UI, labels, CTAs)
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(var(--accent-light))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Veira Brand Purple (#5A3D7D)
        veira: {
          purple: "#5A3D7D",
          "purple-light": "#7A59A6",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Brand-specific radii
        card: "var(--radius-card)",
        modal: "var(--radius-modal)",
        button: "var(--radius-button)",
      },
      spacing: {
        // Brand spacing tokens
        "brand-1": "var(--space-1)",
        "brand-2": "var(--space-2)",
        "brand-3": "var(--space-3)",
        "brand-4": "var(--space-4)",
        "brand-5": "var(--space-5)",
        "brand-6": "var(--space-6)",
      },
      transitionDuration: {
        // Brand animation timing
        micro: "var(--duration-micro)",
        standard: "var(--duration-standard)",
        loading: "var(--duration-loading)",
      },
      boxShadow: {
        // Single soft elevation per brand guide
        soft: "0 2px 8px rgba(0, 0, 0, 0.08)",
        elevated: "0 4px 16px rgba(0, 0, 0, 0.12)",
        orb: "0 0 30px rgba(90, 61, 125, 0.4), 0 0 60px rgba(90, 61, 125, 0.2)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        // Orb animations from brand guide
        "orb-idle": {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "50%": { transform: "translateY(-4px) scale(1.02)", opacity: "0.95" },
        },
        "orb-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
        "orb-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "orb-loading": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-sweep": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        // Orb state animations
        "orb-idle": "orb-idle 3s ease-in-out infinite",
        "orb-pulse": "orb-pulse 0.8s ease-in-out infinite",
        "orb-float": "orb-float 4s ease-in-out infinite",
        "orb-loading": "orb-loading 2s linear infinite",
        "gradient-sweep": "gradient-sweep 3s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
