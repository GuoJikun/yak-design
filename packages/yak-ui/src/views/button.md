# Button 按钮

常用的操作按钮。

## 基础用法

按钮的基础用法

```vue demo
<template>
  <div>
    <yak-button>默认按钮</yak-button>
    <yak-button type="primary">主要按钮</yak-button>
    <yak-button type="success">success</yak-button>
    <yak-button type="warning">warning</yak-button>
    <yak-button type="danger">danger</yak-button>
    <yak-button type="info">info</yak-button>
  </div>
  <div class="mt-20">
    <yak-button plain>朴素按钮</yak-button>
    <yak-button type="primary" plain>主要按钮</yak-button>
    <yak-button type="success" plain>success</yak-button>
    <yak-button type="warning" plain>warning</yak-button>
    <yak-button type="danger" plain>danger</yak-button>
    <yak-button type="info" plain>info</yak-button>
  </div>
  <div class="mt-20">
    <yak-button round>圆角按钮</yak-button>
    <yak-button type="primary" round>主要按钮</yak-button>
    <yak-button type="success" round>success</yak-button>
    <yak-button type="warning" round>warning</yak-button>
    <yak-button type="danger" round>danger</yak-button>
    <yak-button type="info" round>info</yak-button>
  </div>
</template>
```

## 禁用状态

按钮的禁用状态

```vue demo
<template>
  <div class="mt-20">
    <yak-button disabled>默认按钮</yak-button>
    <yak-button type="primary" disabled>主要按钮</yak-button>
    <yak-button type="success" disabled>success</yak-button>
    <yak-button type="warning" disabled>warning</yak-button>
    <yak-button type="danger" disabled>danger</yak-button>
    <yak-button type="info" disabled>info</yak-button>
  </div>
  <div class="mt-20">
    <yak-button plain disabled>朴素按钮</yak-button>
    <yak-button type="primary" plain disabled>主要按钮</yak-button>
    <yak-button type="success" plain disabled>success</yak-button>
    <yak-button type="warning" plain disabled>warning</yak-button>
    <yak-button type="danger" plain disabled>danger</yak-button>
    <yak-button type="info" plain disabled>info</yak-button>
  </div>
</template>
```

## 文字按钮

没有边框和背景色的按钮。

```vue demo
<template>
  <yak-button type="text">文字按钮</yak-button>
  <yak-button disabled type="text">文字按钮</yak-button>
</template>
```

## 不同尺寸

`Button`组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸

```vue demo
<template>
  <div class="mt-20">
    <yak-button size="large">large</yak-button>
    <yak-button>默认</yak-button>
    <yak-button size="small">small</yak-button>
    <yak-button size="mini">mini</yak-button>
  </div>
  <div class="mt-20">
    <yak-button size="large" round>large</yak-button>
    <yak-button round>默认</yak-button>
    <yak-button size="small" round>small</yak-button>
    <yak-button size="mini" round>mini</yak-button>
  </div>
</template>
```

## loading 状态

使用 _`loading`_ 图标表示加载中的状态

```vue demo
<template>
  <yak-button :loading="loading">加载中</yak-button>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
};
</script>
```

## Select Props

| 属性     | 说明           | 类型    | 可选值                                             | 默认值 |
| -------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type     | 类型           | string  | primary / success / warning / danger / info / text | -      |
| size     | 尺寸           | string  | large / small / mini                               | -      |
| plain    | 是否朴素按钮   | boolean | -                                                  | false  |
| round    | 是否圆角按钮   | boolean | -                                                  | false  |
| loading  | 是否加载中状态 | boolean | -                                                  | false  |
| disabled | 是否禁用       | boolean | -                                                  | false  |
