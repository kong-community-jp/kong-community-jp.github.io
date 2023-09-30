export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        { src: "/js/jquery.min.js", defer: true },
        { src: "/js/bootstrap.min.js", defer: true },
        { src: "/js/popup.js", defer: true },
        { src: "/js/tabs.js", defer: true },
        { src: "/js/custom.js", defer: true },
      ],
    },
  },
  css: [
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/animate.css",
    "@/assets/css/fontawesome.css",
    "@/assets/css/template.css",
  ],
  ssr: true,
  components: [
    {
      path: "@/components/",
      pathPrefix: false,
    },
  ],
})
