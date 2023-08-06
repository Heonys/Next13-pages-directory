const seoConfig = {
  titleTemplate: "%s - next.js application",
  openGraph: {
    type: "website",
    site_name: "Next.js 시작하기",
    images: [
      { url: "https://nextjs.org/static/blog/next-13/twitter-card.png" },
    ],
  },
  additionalLinkTags: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "naver-site-verification",
      content: "de06af3063268667db5ccbdeac27db27d341b71d",
    },
    // {
    //   name: "google-site-verification",
    //   content: "O0r_20aU1JVk1sbI7E50r6RXiTRFrN8jG_a3uSeG4A0",
    // },
  ],
};

export default seoConfig;
