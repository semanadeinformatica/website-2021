const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/pages/404.js"))),
  "component---src-pages-coming-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/pages/coming.js"))),
  "component---src-pages-competicao-programacao-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/pages/competicao-programacao.js"))),
  "component---src-pages-equipa-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/pages/equipa.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/pages/index.js"))),
  "component---src-pages-program-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/pages/program.js"))),
  "component---src-pages-speakers-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/pages/speakers.js"))),
  "component---src-templates-session-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/templates/session.js"))),
  "component---src-templates-talk-js": hot(preferDefault(require("/home/iohan-sardinha/Documentos/website-2021/src/templates/talk.js")))
}

