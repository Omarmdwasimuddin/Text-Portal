import localFont from 'next/font/local'
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: './fonts/SolaimanLipi/SolaimanLipi-Normal.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SolaimanLipi/SolaimanLipi-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/SolaimanLipi/SolaimanLipi-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ]
})



export const metadata = {
  metadataBase: new URL("https://taxportalbd.vercel.app/"), // Canonical Base URL
  title: "ট্যাক্স এন্ড ট্রেড সলিউশনস",
  description:
    "One-stop digital platform for VAT, Customs & Income Tax laws, rules, SROs, orders, schedules, circulars, and amendments with consolidated and point-in-time views. Reliable references for officers, practitioners, taxpayers, and students.",
  keywords:
    "Bangladesh VAT, Customs Act 2023, Income Tax Act 2023, SRO, Order, Circular, Gazette, Finance Act, Tariff, Import Policy, Export Policy, Tax Calculator, VAT Rules, Income Tax Rules, Excise Duty, Surcharge, NBR, Tax Law Portal",
  authors: [
    {
      name: "Muhammad Wasim Uddin Omar",
      url: "https://wasim-uddin-portfolio.vercel.app/",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Bangladesh Tax, VAT & Customs Knowledge Portal",
    description:
      "Access all VAT, Customs & Income Tax laws, rules, SROs, orders, circulars, schedules, and guidance with consolidated and point-in-time views. Search, compare, and study tax laws easily on any device.",
    url: "https://taxlaw-portal.vercel.app",
    siteName: "Bangladesh Tax Portal",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "https://taxlaw-portal.vercel.app/og-image.jpg", // OG Image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Bangladesh Tax, VAT & Customs Knowledge Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BangladeshTaxPortal",
    title: "Bangladesh Tax, VAT & Customs Knowledge Portal",
    description:
      "Explore VAT, Customs, Income Tax laws, rules, SROs, orders, schedules & amendments with search, consolidated & point-in-time views.",
    images: [
      "https://taxlaw-portal.vercel.app/twitter-image.jpg",
    ],
  },
};

export function generateViewportMetadata() {
  return {
    viewport: "width=device-width, initial-scale=1",
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        {children}
      </body>
    </html>
  );
}



/* 

const myFont = localFont({
  src: [
    {
      path: './fonts/SolaimanLipi/SolaimanLipi-Normal.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SolaimanLipi/SolaimanLipi-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/SolaimanLipi/SolaimanLipi-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ]
})

*/