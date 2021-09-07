<template><h1 id="rate-评分" tabindex="-1"><a class="header-anchor" href="#rate-评分" aria-hidden="true">#</a> Rate 评分</h1>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<fox-rate v-model="value"></fox-rate>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-rate</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-rate</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="click-选择" tabindex="-1"><a class="header-anchor" href="#click-选择" aria-hidden="true">#</a> click 选择</h2>
<fox-rate v-model="value1" tigger="click"></fox-rate>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-rate</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value1<span class="token punctuation">"</span></span> <span class="token attr-name">tigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-rate</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="自定义-icon" tabindex="-1"><a class="header-anchor" href="#自定义-icon" aria-hidden="true">#</a> 自定义 icon</h2>
<fox-rate v-model="value1" tigger="click" icon="heart" active-icon="heart-fill"> </fox-rate>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-rate</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value1<span class="token punctuation">"</span></span>
  <span class="token attr-name">tigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>click<span class="token punctuation">"</span></span>
  <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>heart<span class="token punctuation">"</span></span>
  <span class="token attr-name">active-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>heart-fill<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-rate</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="只读" tabindex="-1"><a class="header-anchor" href="#只读" aria-hidden="true">#</a> 只读</h2>
<fox-rate v-model="value2" disabled></fox-rate>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fox-rate</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>value2<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fox-rate</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            value: 1,
            value1: 2,
            value2: 2,
            tableData: [
                {
                    parameter: 'value',
                    explain: '绑定值',
                    type: 'Number',
                    optionalValue: '—',
                    defaultValue: '0',
                },
                {
                    parameter: 'disabled',
                    explain: '是否为只读',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'allow-half',
                    explain: '是否允许半选',
                    type: 'Boolean',
                    optionalValue: '—',
                    defaultValue: 'false',
                },
                {
                    parameter: 'tigger',
                    explain: '选择方式',
                    type: 'String',
                    optionalValue: 'click,hover',
                    defaultValue: 'hover',
                },
            ],
        };
    },
});
</script>
