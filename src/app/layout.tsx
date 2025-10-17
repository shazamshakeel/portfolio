import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RESUME_DATA } from "@/data/resume-data";

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: RESUME_DATA.description,

  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.description,
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: `${RESUME_DATA.name} Portfolio`,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.description,
    creator:
      RESUME_DATA.contact.social
        .find((s) => s.name === "X")
        ?.url.replace("https://x.com/", "@") || undefined,
    images: ["/og.png"],
  },

  keywords: [
    "Shazam Shakeel",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Full Stack Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Portfolio",
    "Resume",
    "CV",
    "GitHub",
    "LinkedIn",
    "Tech Enthusiast",
    "Programming",
    "Coding",
    "Top Pakistan Developer",
    "Tech Teacher",
    "Tech Community",
    "Open Source",
    "Open Source Contribution",
    "Pakistan",
    "Freelance",
    "Freelancer",
    "Freelancing",
  ],

  authors: [{ name: RESUME_DATA.name, url: RESUME_DATA.personalWebsiteUrl }],
  creator: RESUME_DATA.name,
  publisher: RESUME_DATA.name,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
};

// Optimized font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon setup */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || ""}
        />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
