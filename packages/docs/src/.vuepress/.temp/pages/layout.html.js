export const data = {
  "key": "v-b03b5154",
  "path": "/layout.html",
  "title": "Layout 布局容器",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "常见页面布局",
      "slug": "常见页面布局",
      "children": []
    }
  ],
  "filePathRelative": "layout.md",
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
