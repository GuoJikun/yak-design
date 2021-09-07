export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "fox-design",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "使用",
      "slug": "使用",
      "children": [
        {
          "level": 3,
          "title": "安装",
          "slug": "安装",
          "children": []
        },
        {
          "level": 3,
          "title": "引用",
          "slug": "引用",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "README.md",
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
