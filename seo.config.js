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
    {
      name: "google-site-verification",
      content: "LYL5-ebau488qs0-TSVvu3h1OkkN83EX__fB16RzbUg",
    },
  ],
};

export default seoConfig;
