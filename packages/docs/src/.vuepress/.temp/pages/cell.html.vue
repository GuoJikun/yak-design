<template><h1 id="cell-单元格" tabindex="-1"><a class="header-anchor" href="#cell-单元格" aria-hidden="true">#</a> cell 单元格</h1>
<p>在一组备选项中进行单选</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>包含各类用法的综合示例。</p>
<fox-card style="width: 400px;">
<div slot="name">选项</div>
<fox-cell-group>
<fox-cell title="只显示标题"></fox-cell>
<fox-cell title="显示label" label="label的内容"></fox-cell>
<fox-cell title="显示extra" extra="extra"></fox-cell>
<fox-cell title="显示向右的icon" is-link name="link"></fox-cell>
<fox-cell
title="链接"
is-link
name="link"
to="/layout"
@click="handleClick"
extra="详细信息" ></fox-cell>
<fox-cell
title="新窗口打开"
is-link
name="link"
to="/layout"
@click="handleClick"
target="\_blank" ></fox-cell>
<fox-cell title="禁用" disabled></fox-cell>
<fox-cell title="选中" selected></fox-cell>
<!-- <fox-cell title="开关">
            <fox-switch
                slot="extra"
                v-model="status"
            ></fox-switch>
        </fox-cell> -->
</fox-cell-group>
</fox-card>
<h2 id="是否显示-border" tabindex="-1"><a class="header-anchor" href="#是否显示-border" aria-hidden="true">#</a> 是否显示 border</h2>
<p>给 cell 加上边框</p>
<fox-card style="width: 400px;">
<fox-cell-group border>
<fox-cell title="只显示标题"></fox-cell>
<fox-cell
            title="显示label"
            label="label的内容"
        ></fox-cell>
<fox-cell title="显示extra" extra="extra"></fox-cell>
<fox-cell
            title="显示向右的icon"
            is-link
            name="link"
        ></fox-cell>
<fox-cell
title="链接"
is-link
name="link"
to="/layout"
@click="handleClick"
extra="详细信息" ></fox-cell>
<fox-cell
title="新窗口打开"
is-link
name="link"
to="/layout"
@click="handleClick"
target="\_blank" ></fox-cell>
<fox-cell title="禁用" disabled></fox-cell>
<fox-cell title="选中" selected></fox-cell>
<!-- <fox-cell title="开关">
            <fox-switch
                slot="extra"
                v-model="status"
            ></fox-switch>
        </fox-cell> -->
</fox-cell-group>
</fox-card>
</template>

<script>
    export default {
        methods: {
            handleClick(val){}
        }
    }
</script>
