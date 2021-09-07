export const themeData = {
  "nav": [
    {
      "text": "Gitee",
      "link": "https://gitee.com/guojikun_admin/fox-design.git"
    },
    {
      "text": "GitHub",
      "link": "https://github.com/guojikun/fox-design.git"
    }
  ],
  "sidebar": [
    {
      "text": "快速开始",
      "link": "/README.md"
    },
    {
      "text": "更新日志",
      "link": "/changelog.md"
    },
    {
      "text": "组件",
      "children": [
        {
          "text": "基础组件",
          "children": [
            {
              "text": "Transition 动画",
              "link": "/transition.md"
            },
            {
              "text": "Icon 图标",
              "link": "/icon.md"
            },
            {
              "text": "Button 按钮",
              "link": "/button.md"
            }
          ]
        },
        {
          "text": "布局",
          "children": [
            {
              "text": "Grid 栅格",
              "link": "/grid.md"
            },
            {
              "text": "Layout 布局",
              "link": "/layout.md"
            },
            {
              "text": "Divider 分隔线",
              "link": "/divider.md"
            },
            {
              "text": "Collapse 折叠面板",
              "link": "/collapse.md"
            },
            {
              "text": "Card 卡片",
              "link": "/card.md"
            },
            {
              "text": "Cell 单元格",
              "link": "/cell.md"
            }
          ]
        },
        {
          "text": "表单",
          "children": [
            {
              "text": "Input 输入框",
              "link": "/input.md"
            },
            {
              "text": "InputNumber 输入框",
              "link": "/inputnumber.md"
            },
            {
              "text": "Select 选择器",
              "link": "/select.md"
            },
            {
              "text": "Radio 单选框",
              "link": "/radio.md"
            },
            {
              "text": "Checkbox 复选框",
              "link": "/checkbox.md"
            },
            {
              "text": "Rate 评分",
              "link": "/rate.md"
            },
            {
              "text": "Switch 开关",
              "link": "/switch.md"
            },
            {
              "text": "DatePicker 日期选择器",
              "link": "/datepicker.md"
            },
            {
              "text": "Form 表单",
              "link": "/form.md"
            }
          ]
        },
        {
          "text": "数据",
          "children": [
            {
              "text": "Tag 标签",
              "link": "/tag.md"
            },
            {
              "text": "Progress 进度条",
              "link": "/progress.md"
            },
            {
              "text": "Alert 警告",
              "link": "/alert.md"
            }
          ]
        },
        {
          "text": "视图",
          "children": [
            {
              "text": "Tooltip 文字提示",
              "link": "/tooltip.md"
            }
          ]
        },
        {
          "text": "导航",
          "children": [
            {
              "text": "Breadcrumb 面包屑",
              "link": "/breadcrumb.md"
            },
            {
              "text": "Steps 步骤条",
              "link": "/steps.md"
            }
          ]
        },
        {
          "text": "其它",
          "children": [
            {
              "text": "Timeline 时间线",
              "link": "/timeline.md"
            }
          ]
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
