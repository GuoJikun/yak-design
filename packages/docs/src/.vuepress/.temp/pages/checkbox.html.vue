<template><h1 id="checkbox-多选框" tabindex="-1"><a class="header-anchor" href="#checkbox-多选框" aria-hidden="true">#</a> Checkbox 多选框</h1>
<p>一组备选项中进行多选</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
<fox-checkbox v-model="value">选项一</fox-checkbox>
<fox-checkbox v-model="value1" true-label="1" false-label="0" @change="changes">选项二</fox-checkbox>
<h2 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2>
<p>单选框不可用的状态。</p>
<fox-checkbox v-model="value" disabled>选项一</fox-checkbox>
<fox-checkbox v-model="value1" disabled>选项二</fox-checkbox>
<h2 id="多选框组" tabindex="-1"><a class="header-anchor" href="#多选框组" aria-hidden="true">#</a> 多选框组</h2>
<p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
<fox-checkbox-group v-model="value2" @change="handleWitch">
<fox-checkbox label="1">选项一</fox-checkbox>
<fox-checkbox label="2">选项二</fox-checkbox>
<fox-checkbox label="3">选项三</fox-checkbox>
<fox-checkbox label="4" disabled>禁用</fox-checkbox>
<fox-checkbox label="5" disabled>选中且禁用</fox-checkbox>
</fox-checkbox-group>
<h2 id="indeterminate-状态" tabindex="-1"><a class="header-anchor" href="#indeterminate-状态" aria-hidden="true">#</a> indeterminate 状态</h2>
<p><code class="code">indeterminate</code>属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
<fox-checkbox class="mb-20" v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</fox-checkbox>
<fox-checkbox-group v-model="value3" @change="handleCheckedCitiesChange">
<fox-checkbox label="1">选项一</fox-checkbox>
<fox-checkbox label="2">选项二</fox-checkbox>
<fox-checkbox label="3">选项三</fox-checkbox>
<fox-checkbox label="4">禁用</fox-checkbox>
<fox-checkbox label="5">选中且禁用</fox-checkbox>
</fox-checkbox-group>
</template>

<script>
const cityOptions = ['1', '2', '3', '4', '5'];
export default {
    data() {
        return {
            value: true,
            value1: '0',
            value2: ['1', '5'],
            value3: ['1', '4'],
            checkAll: false,
            isIndeterminate: true,
        };
    },
    methods: {
        handleWitch(val) {
            console.log(val, 'v-model');
        },
        changes(val) {
            console.log(val, this.value1);
        },
        handleCheckAllChange(val) {
            this.value3 = val ? [...cityOptions] : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            const checkedCount = value.length;
            this.checkAll = checkedCount === cityOptions.length;
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < cityOptions.length;
        },
    },
}
</script>
