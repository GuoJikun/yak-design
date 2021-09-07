export const data = {
  "key": "v-23c95f2e",
  "path": "/theme.html",
  "title": "主题设置",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "theme.md",
  "git": {
    "updatedTime": 1630912713000,
    "contributors": [
      {
        "name": "GuoJikun",
        "email": "guojikun@y-open.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
