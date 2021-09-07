<template><h1 id="radio-单选框" tabindex="-1"><a class="header-anchor" href="#radio-单选框" aria-hidden="true">#</a> Radio 单选框</h1>
<p>在一组备选项中进行单选</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
<div>
    <fox-radio v-model="value" label="1">选项一</fox-radio>
    <fox-radio v-model="value" label="2">选项二</fox-radio>
</div>
<h2 id="禁用状态" tabindex="-1"><a class="header-anchor" href="#禁用状态" aria-hidden="true">#</a> 禁用状态</h2>
<p>单选框不可用的状态。</p>
<div>
    <fox-radio v-model="value1" label="1" disabled>
        选项一
    </fox-radio>
    <fox-radio v-model="value1" label="2" disabled>
        选项二
    </fox-radio>
</div>
<h2 id="单选框组" tabindex="-1"><a class="header-anchor" href="#单选框组" aria-hidden="true">#</a> 单选框组</h2>
<p>适用于在多个互斥的选项中选择的场景</p>
<fox-radio-group v-model="value2">
<fox-radio label="1">选项一</fox-radio>
<fox-radio label="2">选项二</fox-radio>
<fox-radio label="3">选项三</fox-radio>
</fox-radio-group>
</template>

<script>
export default {
    data() {
        return {
            value: '2',
            value1: '1',
            value2: '1',
            pcData: [
                {
                    parameter: 'value/v-model',
                    explain: '绑定值',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'label',
                    explain: 'Radio 的 value',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'disabled',
                    explain: '是否禁用',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'false',
                },
                {
                    parameter: 'name',
                    explain: '原生 name 属性',
                    type: 'string',
                    optionalValue: '-',
                    defaultValue: '-',
                },
            ],
            ecData: [
                {
                    name: 'change',
                    explain: '绑定值变化时触发的事件',
                    args: '选中的 Radio label 值',
                },
            ],
            pcgData: [
                {
                    parameter: 'value/v-model',
                    explain: '绑定值',
                    type: 'string / number / boolean',
                    optionalValue: '-',
                    defaultValue: '-',
                },
                {
                    parameter: 'disabled',
                    explain: '是否禁用',
                    type: 'boolean',
                    optionalValue: '-',
                    defaultValue: 'false',
                },
            ],
        };
    },
};
</script>
