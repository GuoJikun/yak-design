# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用单一分栏创建基础的栅格布局。

```vue demo
<template>
  <yak-row>
    <yak-col
      :span="24"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      24
    </yak-col>
  </yak-row>
  <yak-row class="mt-10">
    <yak-col
      :span="12"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      12
    </yak-col>
    <yak-col
      :span="12"
      style="background: #e5e9f2;line-height: 30px;text-align: center;"
    >
      12
    </yak-col>
  </yak-row>
  <yak-row class="mt-10">
    <yak-col
      :span="8"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      8
    </yak-col>
    <yak-col
      :span="8"
      style="background: #e5e9f2;line-height: 30px;text-align: center;"
    >
      8
    </yak-col>
    <yak-col
      :span="8"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      8
    </yak-col>
  </yak-row>
  <yak-row class="mt-10">
    <yak-col
      :span="6"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      6
    </yak-col>
    <yak-col
      :span="6"
      style="background: #e5e9f2;line-height: 30px;text-align: center;"
    >
      6
    </yak-col>
    <yak-col
      :span="6"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      6
    </yak-col>
    <yak-col
      :span="6"
      style="background: #e5e9f2;line-height: 30px;text-align: center;"
    >
      6
    </yak-col>
  </yak-row>
  <yak-row class="mt-10">
    <yak-col
      :span="4"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      6
    </yak-col>
    <yak-col
      :span="4"
      style="background: #e5e9f2;line-height: 30px;text-align: center;"
    >
      4
    </yak-col>
    <yak-col
      :span="4"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      6
    </yak-col>
    <yak-col
      :span="4"
      style="background: #e5e9f2;line-height: 30px;text-align: center;"
    >
      4
    </yak-col>
    <yak-col
      :span="4"
      style="background: #d3dce6;line-height: 30px;text-align: center;"
    >
      4
    </yak-col>
    <yak-col
      :span="4"
      style="background: #e5e9f2;line-height: 30px;text-align: center;"
    >
      4
    </yak-col>
  </yak-row>
</template>
```

## 分栏间隔

分栏之间存在间隔

```vue demo
<template>
  <yak-row :gutter="20">
    <yak-col :span="6">
      <div style="background: #d3dce6;line-height: 30px;text-align: center;">
        6
      </div>
    </yak-col>
    <yak-col :span="6">
      <div style="background: #e5e9f2;line-height: 30px;text-align: center;">
        6
      </div>
    </yak-col>
    <yak-col :span="6">
      <div style="background: #d3dce6;line-height: 30px;text-align: center;">
        6
      </div>
    </yak-col>
    <yak-col :span="6">
      <div style="background: #e5e9f2;line-height: 30px;text-align: center;">
        6
      </div>
    </yak-col>
  </yak-row>
</template>
```

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

```vue demo
<template>
  <yak-row :gutter="20">
    <yak-col :span="16">
      <div
        class="grid-content"
        style="background: #d3dce6;line-height: 30px;text-align: center;"
      >
        16
      </div>
    </yak-col>
    <yak-col :span="8">
      <div
        class="grid-content"
        style="background: #e5e9f2;line-height: 30px;text-align: center;"
      >
        8
      </div>
    </yak-col>
  </yak-row>
  <yak-row :gutter="20" class="mt-10">
    <yak-col :span="8">
      <div
        class="grid-content"
        style="background: #d3dce6;line-height: 30px;text-align: center;"
      >
        8
      </div>
    </yak-col>
    <yak-col :span="8">
      <div
        class="grid-content"
        style="background: #e5e9f2;line-height: 30px;text-align: center;"
      >
        8
      </div>
    </yak-col>
    <yak-col :span="4">
      <div
        class="grid-content"
        style="background: #d3dce6;line-height: 30px;text-align: center;"
      >
        4
      </div>
    </yak-col>
    <yak-col :span="4">
      <div
        class="grid-content"
        style="background: #e5e9f2;line-height: 30px;text-align: center;"
      >
        4
      </div>
    </yak-col>
  </yak-row>
  <yak-row :gutter="20" class="mt-10">
    <yak-col :span="4">
      <div
        class="grid-content"
        style="background: #d3dce6;line-height: 30px;text-align: center;"
      >
        4
      </div>
    </yak-col>
    <yak-col :span="16">
      <div
        class="grid-content"
        style="background: #e5e9f2;line-height: 30px;text-align: center;"
      >
        16
      </div>
    </yak-col>
    <yak-col :span="4">
      <div
        class="grid-content"
        style="background: #d3dce6;line-height: 30px;text-align: center;"
      >
        4
      </div>
    </yak-col>
  </yak-row>
</template>
```

## 分栏偏移

支持偏移指定的栏数。

```vue demo
<template>
  <yak-row :gutter="20">
    <yak-col :span="6">
      <div style="background: #e5e9f2;line-height: 30px;text-align: center;">
        span: 6; offset: 0
      </div>
    </yak-col>
    <yak-col :span="6" :offset="6">
      <div style="background: #e5e9f2;line-height: 30px;text-align: center;">
        span: 6; offset: 6
      </div>
    </yak-col>
  </yak-row>
  <yak-row :gutter="20" class="mt-10">
    <yak-col :span="6" :offset="6">
      <div style="background: #e5e9f2;line-height: 30px;text-align: center;">
        span: 6; offset: 6
      </div>
    </yak-col>
    <yak-col :span="6" :offset="6">
      <div style="background: #e5e9f2;line-height: 30px;text-align: center;">
        span: 6; offset: 6
      </div>
    </yak-col>
  </yak-row>
  <yak-row :gutter="20" class="mt-10">
    <yak-col :span="12" :offset="6">
      <div style="background: #e5e9f2;line-height: 30px;text-align: center;">
        span: 12; offset: 6
      </div>
    </yak-col>
  </yak-row>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          parameter: "gutter",
          explain: "栅格间隔",
          type: "Number",
          optionalValue: "—",
          defaultValue: "0",
        },
      ],
      ColData: [
        {
          parameter: "span",
          explain: "栅格占据的列数",
          type: "Number",
          optionalValue: "—",
          defaultValue: "24",
        },
        {
          parameter: "offset",
          explain: "栅格左侧的间隔格数",
          type: "Number",
          optionalValue: "—",
          defaultValue: "0",
        },
      ],
    };
  },
  methods: {
    handleClose(val) {
      this.tags = this.tags.filter((cur) => {
        return val != cur.name;
      });
    },
    ok1() {
      this.value = false;
    },
    cancmx1() {
      this.value = false;
    },
  },
};
</script>
```

```css
<style scoped>
.grid + .grid {
  margin-top: 20px;
}
.grid-content {
  height: 32px;
  background: #99a9bf;
  border-radius: 4px;
}
</style>
```
