export const data = {
  "key": "v-5ce799de",
  "path": "/cell.html",
  "title": "cell 单元格",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "基础用法",
      "slug": "基础用法",
      "children": []
    },
    {
      "level": 2,
      "title": "是否显示 border",
      "slug": "是否显示-border",
      "children": []
    }
  ],
  "filePathRelative": "cell.md",
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
