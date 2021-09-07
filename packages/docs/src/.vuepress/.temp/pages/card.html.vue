<template><h1 id="card-卡片" tabindex="-1"><a class="header-anchor" href="#card-卡片" aria-hidden="true">#</a> Card 卡片</h1>
<p>将信息聚合在卡片容器中展示。</p>
<h2 id="卡片的基础用法" tabindex="-1"><a class="header-anchor" href="#卡片的基础用法" aria-hidden="true">#</a> 卡片的基础用法</h2>
<p>包含标题，内容和操作</p>
<fox-card>
<div slot="header" style="display: flex;justify-content: space-between;align-items: center;">
    <span>卡片名称</span>
    <fox-button type="text">操作按钮</fox-button>
</div>
<p>列表内容 1</p>
<p>列表内容 2</p>
<p>列表内容 3</p>
</fox-card>
<h2 id="卡片的简单用法" tabindex="-1"><a class="header-anchor" href="#卡片的简单用法" aria-hidden="true">#</a> 卡片的简单用法</h2>
<fox-card>
<p>列表内容 1</p>
<p>列表内容 2</p>
<p>列表内容 3</p>
</fox-card>
<h2 id="卡片阴影" tabindex="-1"><a class="header-anchor" href="#卡片阴影" aria-hidden="true">#</a> 卡片阴影</h2>
<p>可对阴影的显示进行配置。</p>
<div style="display: inline-block;width: 30%;">
    <fox-card>
        <p>总是显示</p>
    </fox-card>
</div>
<div style="display: inline-block;width: 30%;margin: 0 2%;">
    <fox-card shadow="hover">
        <p>Hover 显示</p>
    </fox-card>
</div>
<div style="display: inline-block;width: 30%;">
    <fox-card shadow="never">
        <p>永不显示</p>
    </fox-card>
</div>
</template>
