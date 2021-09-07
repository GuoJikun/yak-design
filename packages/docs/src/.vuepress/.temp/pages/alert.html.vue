<template><h1 id="alert-警告" tabindex="-1"><a class="header-anchor" href="#alert-警告" aria-hidden="true">#</a> Alert 警告</h1>
<p>用于页面中展示重要的提示信息。</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<p>页面中的非浮层元素，不会自动消失。</p>
<fox-alert>
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</fox-alert>
<h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2>
<p>有状态的提示信息</p>
<fox-alert type="success">
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="danger">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<h2 id="自定义颜色" tabindex="-1"><a class="header-anchor" href="#自定义颜色" aria-hidden="true">#</a> 自定义颜色</h2>
<p>通过 props 中的 color 来自定义颜色</p>
<fox-alert type="success" :color="{background: 'pink',line: 'red',font: 'white'}">
<div>这是提示信息</div>
<div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="danger" :color="{ font: 'white', background: 'black' }">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="warning">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
<fox-alert type="info">
    <div>这是提示信息</div>
    <div>用来让人注意的提示文字</div>
</fox-alert>
</template>
