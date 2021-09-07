import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-3fd180b6","/alert.html","Alert 警告",["/alert","/alert.md"]],
  ["v-2912369d","/breadcrumb.html","Breadcrumb 面包屑",["/breadcrumb","/breadcrumb.md"]],
  ["v-71c51f64","/button.html","Button 按钮",["/button","/button.md"]],
  ["v-25bcf620","/card.html","Card 卡片",["/card","/card.md"]],
  ["v-5ce799de","/cell.html","cell 单元格",["/cell","/cell.md"]],
  ["v-ce159204","/changelog.html","更新日志",["/changelog","/changelog.md"]],
  ["v-63ff709d","/checkbox.html","Checkbox 多选框",["/checkbox","/checkbox.md"]],
  ["v-4cfc6a1a","/collapse.html","Collapse 折叠面板",["/collapse","/collapse.md"]],
  ["v-5f411484","/datepicker.html","Select 选择器",["/datepicker","/datepicker.md"]],
  ["v-4e290a4e","/divider.html","Divider 分割线",["/divider","/divider.md"]],
  ["v-679ae3bc","/form.html","Form 表单",["/form","/form.md"]],
  ["v-480f267a","/grid.html","",["/grid","/grid.md"]],
  ["v-ae4785b2","/icon.html","Icon 图标",["/icon","/icon.md"]],
  ["v-20058708","/input.html","Input 输入框",["/input","/input.md"]],
  ["v-6ff09bc2","/inputnumber.html","InputNumber 计数器",["/inputnumber","/inputnumber.md"]],
  ["v-b03b5154","/layout.html","Layout 布局容器",["/layout","/layout.md"]],
  ["v-ff81871a","/progress.html","",["/progress","/progress.md"]],
  ["v-65807d12","/radio.html","Radio 单选框",["/radio","/radio.md"]],
  ["v-08a55520","/rate.html","Rate 评分",["/rate","/rate.md"]],
  ["v-8daa1a0e","/","fox-design",["/index.html","/README.md"]],
  ["v-3cd370c4","/select.html","Select 选择器",["/select","/select.md"]],
  ["v-2abd3476","/sidebar.html","",["/sidebar","/sidebar.md"]],
  ["v-b8c4c46a","/steps.html","Steps 步骤条",["/steps","/steps.md"]],
  ["v-a230dce8","/switch.html","",["/switch","/switch.md"]],
  ["v-b32bc910","/tag.html","Tag 标签",["/tag","/tag.md"]],
  ["v-23c95f2e","/theme.html","主题设置",["/theme","/theme.md"]],
  ["v-2f915242","/timeline.html","",["/timeline","/timeline.md"]],
  ["v-2e6f402f","/tooltip.html","",["/tooltip","/tooltip.md"]],
  ["v-5fd97c8b","/transition.html","内置过渡动画",["/transition","/transition.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
