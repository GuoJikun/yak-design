<template><h1 id="tag-标签" tabindex="-1"><a class="header-anchor" href="#tag-标签" aria-hidden="true">#</a> Tag 标签</h1>
<p>用于标记和选择。</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<div class="mt-20">
    <fox-tag type="primary">标签 1</fox-tag>
    <fox-tag type="success">标签 2</fox-tag>
    <fox-tag type="warning">标签 3</fox-tag>
    <fox-tag type="danger">标签 4</fox-tag>
    <fox-tag type="info">标签 5</fox-tag>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="可移除标签" tabindex="-1"><a class="header-anchor" href="#可移除标签" aria-hidden="true">#</a> 可移除标签</h2>
<div class="mt-20">
    <fox-tag
        v-for="tag in tags"
        :key="tag.type"
        :type="tag.type"
        closed
        @close="handleClose(tag.name)"
    >
        {{ tag.name }}
    </fox-tag>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag in tags<span class="token punctuation">"</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag.type<span class="token punctuation">"</span></span>
      <span class="token attr-name">:type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag.type<span class="token punctuation">"</span></span>
      <span class="token attr-name">closable</span>
      <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClose(tag.name)<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      {{ tag.name }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      tags<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"标签一"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"primary"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"标签二"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"success"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"标签四"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"warning"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"标签五"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"danger"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">"标签三"</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">"info"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleClose</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tags <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tags<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cur</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> val <span class="token operator">!=</span> cur<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h2>
<p>Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
<div class="mt-20">
    <fox-tag size="large" closable>大型标签</fox-tag>
    <fox-tag size="default" closable>默认标签</fox-tag>
    <fox-tag size="small" closable>小型标签</fox-tag>
    <fox-tag size="mini" closable>超小标签</fox-tag>
    <p>
        额外的尺寸：large、small、mini，通过设置size属性来配置它们。
    </p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>大型标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>默认标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>小型标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span><span class="token punctuation">></span></span>超小标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="不同主题" tabindex="-1"><a class="header-anchor" href="#不同主题" aria-hidden="true">#</a> 不同主题</h2>
<p>Tag 组件提供了三个不同的主题：dark、light 和 plain</p>
<div>
    <div>
        <fox-button type="text" size="small">Dark </fox-button>
        <fox-tag theme="dark" type="primary">标签 1</fox-tag>
        <fox-tag theme="dark" type="success">标签 2</fox-tag>
        <fox-tag theme="dark" type="warning">标签 3</fox-tag>
        <fox-tag theme="dark" type="danger">标签 4</fox-tag>
        <fox-tag theme="dark" type="info">标签 5</fox-tag>
    </div>
    <div class="mt-20">
        <fox-button type="text" size="small">Plain</fox-button>
        <fox-tag theme="plain" type="primary">标签 1</fox-tag>
        <fox-tag theme="plain" type="success">标签 2</fox-tag>
        <fox-tag theme="plain" type="warning">标签 3</fox-tag>
        <fox-tag theme="plain" type="danger">标签 4</fox-tag>
        <fox-tag theme="plain" type="info">标签 5</fox-tag>
    </div>
    <p slot="description">
        通过设置
        <code class="code">theme</code>
        属性来改变主题，默认为
        <code class="code">light</code>
    </p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dark <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dark<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mt-20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Plain<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-tag</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>plain<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>标签 5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-tag</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>

<script>
export default {
    data() {
        return {
            props: [
                {
                    parameter: 'type',
                    explain: '类型',
                    type: 'String',
                    optionalValue: 'success/info/warning/danger',
                    defaultValue: '-',
                },
                {
                    parameter: 'size',
                    explain: '尺寸',
                    type: 'String',
                    optionalValue: 'large / small / mini',
                    defaultValue: '-',
                },
                {
                    parameter: 'theme',
                    explain: '主题',
                    type: 'String',
                    optionalValue: 'dark / light / plain',
                    defaultValue: 'light',
                },
            ],
            events: [
                {
                    name: 'click',
                    explain: '点击 Tag 时触发的事件',
                    args: '-',
                },
                {
                    name: 'close',
                    explain: '关闭 Tag 时触发的事件',
                    args: '-',
                },
            ],
            tags: [
                { name: '标签一', type: 'primary' },
                { name: '标签二', type: 'success' },
                { name: '标签四', type: 'warning' },
                { name: '标签五', type: 'danger' },
                { name: '标签三', type: 'info' },
            ],
        };
    },
    methods: {
        handleClose(val) {
            this.tags = this.tags.filter(cur => {
                return val != cur.name;
            });
        },
    },
};
</script>
