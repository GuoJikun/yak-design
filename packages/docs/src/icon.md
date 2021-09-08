# Icon 图标

提供了一套常用的图标集合。

## 使用方法

直接通过设置类名为 yak-icon-iconName 来使用即可。

<yak-icon name="arrow-repeat"></yak-icon>
<yak-icon name="broadcast-pin"></yak-icon>
<yak-icon name="cloud"></yak-icon>

```html
<yak-icon name="arrow-repeat"></yak-icon>
<yak-icon name="broadcast-pin"></yak-icon>
<yak-icon name="cloud"></yak-icon>
```

## 设置大小

通过 _`size`_ 属性来设置图标的大小

<yak-icon name="arrow-repeat" size="16px"></yak-icon>
<yak-icon name="broadcast-pin" size="24px"></yak-icon>
<yak-icon name="cloud" size="30px"></yak-icon>

```html
<yak-icon name="arrow-repeat" size="16px"></yak-icon>
<yak-icon name="broadcast-pin" size="24px"></yak-icon>
<yak-icon name="cloud" size="30px"></yak-icon>
```

## 设置颜色

通过 _`color`_ 属性来设置图标的大小

<yak-icon name="arrow-repeat" color="pink"></yak-icon>
<yak-icon name="broadcast-pin" color="blue"></yak-icon>
<yak-icon name="cloud" color="purple"></yak-icon>

```html
<yak-icon name="arrow-repeat" color="pink"></yak-icon>
<yak-icon name="broadcast-pin" color="blue"></yak-icon>
<yak-icon name="cloud" color="purple"></yak-icon>
```

## props

| 属性  | 说明       | 类型           | 可选值 | 默认值 |
| ----- | ---------- | -------------- | ------ | ------ |
| name  | 图标的名称 | String         | -      | -      |
| size  | 图标的大小 | String，Number | -      | -      |
| color | 图标的颜色 | String         | -      | -      |
