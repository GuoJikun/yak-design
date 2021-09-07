<template><h1 id="breadcrumb-面包屑" tabindex="-1"><a class="header-anchor" href="#breadcrumb-面包屑" aria-hidden="true">#</a> Breadcrumb 面包屑</h1>
<p>显示当前页面的路径，快速返回之前的任意页面。</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<p>适用广泛的基础用法。</p>
<fox-breadcrumb>
<fox-breadcrumb-item to="name">首页</fox-breadcrumb-item>
<fox-breadcrumb-item to="age">组件</fox-breadcrumb-item>
<fox-breadcrumb-item>面包屑</fox-breadcrumb-item>
</fox-breadcrumb>
<h2 id="自定义分隔符" tabindex="-1"><a class="header-anchor" href="#自定义分隔符" aria-hidden="true">#</a> 自定义分隔符</h2>
<fox-breadcrumb separator="/">
<fox-breadcrumb-item to="name">首页</fox-breadcrumb-item>
<fox-breadcrumb-item to="age">组件</fox-breadcrumb-item>
<fox-breadcrumb-item>面包屑</fox-breadcrumb-item>
</fox-breadcrumb>
</template>
