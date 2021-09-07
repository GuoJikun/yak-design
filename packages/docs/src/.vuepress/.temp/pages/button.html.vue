<template><h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1>
<p>常用的操作按钮。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>按钮的基础用法</p>
<div class="mt-20">
<fox-button>默认按钮</fox-button>
<fox-button type="primary">主要按钮</fox-button>
<fox-button type="success">success</fox-button>
<fox-button type="warning">warning</fox-button>
<fox-button type="danger">danger</fox-button>
<fox-button type="info">info</fox-button>
</div>
<div class="mt-20">
<fox-button plain>朴素按钮</fox-button>
<fox-button type="primary" plain>主要按钮</fox-button>
<fox-button type="success" plain>success</fox-button>
<fox-button type="warning" plain>warning</fox-button>
<fox-button type="danger" plain>danger</fox-button>
<fox-button type="info" plain>info</fox-button>
</div>
<div class="mt-20">
<fox-button round>圆角按钮</fox-button>
<fox-button type="primary" round>主要按钮</fox-button>
<fox-button type="success" round>success</fox-button>
<fox-button type="warning" round>warning</fox-button>
<fox-button type="danger" round>danger</fox-button>
<fox-button type="info" round>info</fox-button>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span><span class="token punctuation">></span></span>默认按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>朴素按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>圆角按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2>
<p>按钮的禁用状态</p>
<div class="mt-20">
<fox-button disabled>默认按钮</fox-button>
<fox-button type="primary" disabled>主要按钮</fox-button>
<fox-button type="success" disabled>success</fox-button>
<fox-button type="warning" disabled>warning</fox-button>
<fox-button type="danger" disabled>danger</fox-button>
<fox-button type="info" disabled>info</fox-button>
</div>
<div class="mt-20">
<fox-button plain disabled>朴素按钮</fox-button>
<fox-button type="primary" plain disabled>主要按钮</fox-button>
<fox-button type="success" plain disabled>success</fox-button>
<fox-button type="warning" plain disabled>warning</fox-button>
<fox-button type="danger" plain disabled>danger</fox-button>
<fox-button type="info" plain disabled>info</fox-button>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>默认按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>朴素按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="文字按钮" tabindex="-1"><a class="header-anchor" href="#文字按钮" aria-hidden="true">#</a> 文字按钮</h2>
<p>没有边框和背景色的按钮。</p>
<fox-button type="text">文字按钮</fox-button>
<fox-button disabled type="text">文字按钮</fox-button>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">disabled</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>文字按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h2>
<p><code>Button</code>组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸</p>
<div class="mt-20">
<fox-button size="large">large</fox-button>
<fox-button>默认</fox-button>
<fox-button size="small">small</fox-button>
<fox-button size="mini">mini</fox-button>
</div>
<div class="mt-20">
<fox-button size="large" round>large</fox-button>
<fox-button round>默认</fox-button>
<fox-button size="small" round>small</fox-button>
<fox-button size="mini" round>mini</fox-button>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span><span class="token punctuation">></span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>mini<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>large<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>small<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">round</span><span class="token punctuation">></span></span>mini<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="loading-状态" tabindex="-1"><a class="header-anchor" href="#loading-状态" aria-hidden="true">#</a> loading 状态</h2>
<p>使用 <em><code>loading</code></em> 图标表示加载中的状态</p>
<fox-button :loading="loading">加载中</fox-button>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>加载中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="select-props" tabindex="-1"><a class="header-anchor" href="#select-props" aria-hidden="true">#</a> Select Props</h2>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>类型</td>
<td>string</td>
<td>primary / success / warning / danger / info / text</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>尺寸</td>
<td>string</td>
<td>large / small / mini</td>
<td>-</td>
</tr>
<tr>
<td>plain</td>
<td>是否朴素按钮</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>是否圆角按钮</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>是否加载中状态</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
</template>

<script>
export default {
    data(){
        return {
            loading: true
        }
    }
}
</script>
