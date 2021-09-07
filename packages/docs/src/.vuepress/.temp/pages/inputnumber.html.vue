<template><h1 id="inputnumber-计数器" tabindex="-1"><a class="header-anchor" href="#inputnumber-计数器" aria-hidden="true">#</a> InputNumber 计数器</h1>
<p>仅允许输入标准的数字值，可定义范围</p>
<h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2>
<div class="mt-10">
    <fox-input-number v-model="num1" :max="9" :min="-3" @change="handleChange"></fox-input-number>
</div>
<h2 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2>
<div class="mt-10">
    <fox-input-number v-model="num2" :step="2" :max="9" :min="-3" disabled></fox-input-number>
</div>
<h2 id="设置步长" tabindex="-1"><a class="header-anchor" href="#设置步长" aria-hidden="true">#</a> 设置步长</h2>
<p>允许定义递增递减的步数控制</p>
<div class="mt-10">
    <fox-input-number v-model="num3" :step="2"></fox-input-number>
</div>
<h2 id="精度" tabindex="-1"><a class="header-anchor" href="#精度" aria-hidden="true">#</a> 精度</h2>
<p>设置 <em><code>precision</code></em> 属性可以控制数值精度，接收一个 <em><code>Number</code></em>。</p>
<p><em><code>precision</code></em> 的值必须是一个非负整数，并且不能小于 step 的小数位数。</p>
<div class="mt-10">
    <fox-input-number v-model="num4" :step="0.1" :precision="2"></fox-input-number>
</div>
</template>

<script>
export default {
    data(){
        return {
            num1: 1,
            num2: 1,
            num3: 1,
            num4: 1,
            num5: 5,
        }
    },
    methods: {
        handleChange(val){
            console.log(val)
        },
        ok1(){
            this.value = false;
        },
        cancel1(){
            this.value = false;
        }
    }
}
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
