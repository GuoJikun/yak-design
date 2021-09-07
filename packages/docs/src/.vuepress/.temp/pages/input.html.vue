<template><h1 id="input-输入框" tabindex="-1"><a class="header-anchor" href="#input-输入框" aria-hidden="true">#</a> Input 输入框</h1>
<p>通过鼠标或键盘输入字符</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<div class="mt-10"></div>
<fox-input placeholder="请输入内容" style="width: 200px;"></fox-input>
<h2 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2>
<div class="mt-10"></div>
<fox-input placeholder="请输入内容" disabled style="width: 200px;"></fox-input>
<h2 id="可清除" tabindex="-1"><a class="header-anchor" href="#可清除" aria-hidden="true">#</a> 可清除</h2>
<div class="mt-10"></div>
<fox-input v-model="value" placeholder="请输入内容" style="width: 200px;" clearable @change="handleClose"></fox-input>
<h2 id="带-icon-的输入框" tabindex="-1"><a class="header-anchor" href="#带-icon-的输入框" aria-hidden="true">#</a> 带 icon 的输入框</h2>
<p>带有图标标记输入类型</p>
<div class="mt-10"></div>
<fox-input style="width: 200px;" suffix-icon="fox-icon-calendar" placeholder="请输入内容" disabled> </fox-input>
<h2 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h2>
<p>Input 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
<div class="mt-10"></div>
<fox-input size="large" placeholder="请输入内容" style="width: 180px;">大型标签</fox-input>
<fox-input placeholder="请输入内容" style="width: 180px;">中型标签</fox-input>
<fox-input size="small" placeholder="请输入内容" style="width: 180px;">小型标签</fox-input>
<fox-input size="mini" placeholder="请输入内容" style="width: 180px;">超小标签</fox-input>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
    data(){
        return {
            value: ''
        }
    },
    methods: {
        handleClose(val){
            console.log(val, this.value)
        },
        ok1(){
            this.value = false;
        },
        cancel1(){
            this.value = false;
        }
    }
})
</script>

<style lang="scss" scoped>
.page-modal{
    font-size: 14px;
    background-color: #fff;
}
.page-modal-item{
    padding: 20px;
}
h1{
    font-weight: 500;
    font-size: 1.7em;
}
.page-modal-item-content{
    padding: 20px;
    border: 1px solid #eeeeee;
}
</style>
