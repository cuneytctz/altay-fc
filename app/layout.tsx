export const metadata: Metadata = {
  url: "https://altayfc.kz",


  title: {
    default: "Altay FC | Almatı Veteran Futbol Kulübü",
    template: "%s | Altay FC",
  },

  description:
    "Altay FC, Almatı Veteran Futbol Ligi'nde mücadele eden Türk veteran futbol kulübüdür. Kulüp tarihi, oyuncu kadrosu, başarılar, galeri ve haberleri keşfedin.",

  keywords: [
    "Altay FC",
    "Almatı",
    "Veteran Futbol",
    "Veteran League",
    "Kazakhstan Football",
    "Türk Futbol Kulübü",
    "Almaty Veterans",
    "Football Club",
  ],

  authors: [{ name: "Altay FC" }],
  creator: "Altay FC",
  publisher: "Altay FC",

  openGraph: {
    title: "Altay FC | Almatı Veteran Futbol Kulübü",
    description:
      "Altay FC'nin resmi web sitesi. Kulüp tarihi, oyuncular, haberler, galeri ve başarılarımız.",
    url: "https://altayfc.kz",
    siteName: "Altay FC",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Altay FC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Altay FC",
    description:
      "Altay FC Resmi Web Sitesi",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
  canonical: "https://altayfc.kz",
},
};
