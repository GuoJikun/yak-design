<template><h1 id="divider-分割线" tabindex="-1"><a class="header-anchor" href="#divider-分割线" aria-hidden="true">#</a> Divider 分割线</h1>
<p>区隔内容的分割线。<br />对不同章节的文本段落进行分割。<br />对行内文字/链接进行分割，例如表格的操作列。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>默认为水平分割线，可在中间加入文字。</p>
<p>
    Steven Paul Jobs was an American entrepreneur and
    business magnate. He was the chairman, chief executive
    officer, and a co-founder of Apple Inc.
</p>
<fox-divider></fox-divider>
<p>
    Steven Paul Jobs was an American entrepreneur and
    business magnate. He was the chairman, chief executive
    officer, and a co-founder of Apple Inc.
</p>
<fox-divider>文字在中间</fox-divider>
<p>
    Steven Paul Jobs was an American entrepreneur and
    business magnate. He was the chairman, chief executive
    officer, and a co-founder of Apple Inc.
</p>
<fox-divider dashed></fox-divider>
<p>
    Steven Paul Jobs was an American entrepreneur and
    business magnate. He was the chairman, chief executive
    officer, and a co-founder of Apple Inc.
</p>
<h2 id="垂直分割线" tabindex="-1"><a class="header-anchor" href="#垂直分割线" aria-hidden="true">#</a> 垂直分割线</h2>
<p>使用 type=&quot;vertical&quot; 设置为行内的垂直分割线。</p>
<p><span>text</span></p>
<fox-divider type="vertical"></fox-divider>
<span>image</span>
<fox-divider type="vertical"></fox-divider>
<span>link</span>
<fox-divider type="vertical"></fox-divider>
<h2 id="标题位置" tabindex="-1"><a class="header-anchor" href="#标题位置" aria-hidden="true">#</a> 标题位置</h2>
<p>修改分割线标题的位置</p>
<p>
Steven Paul Jobs was an American entrepreneur and
business magnate. He was the chairman, chief executive
officer, and a co-founder of Apple Inc.
</p>
<fox-divider placement="left">文字在左侧</fox-divider>
<p>
Steven Paul Jobs was an American entrepreneur and
business magnate. He was the chairman, chief executive
officer, and a co-founder of Apple Inc.
</p>
<fox-divider>文字在中间</fox-divider>
<p>
Steven Paul Jobs was an American entrepreneur and
business magnate. He was the chairman, chief executive
officer, and a co-founder of Apple Inc.
</p>
<fox-divider placement="right">文字在右侧</fox-divider>
<p>
Steven Paul Jobs was an American entrepreneur and
business magnate. He was the chairman, chief executive
officer, and a co-founder of Apple Inc.
</p>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    parameter: 'direction',
                    explain: '设置分割线方向',
                    type: 'String',
                    optionalValue: 'horizontal / vertical',
                    defaultValue: 'horizontal',
                },
                {
                    parameter: 'placement',
                    explain: '设置分割线文案的位置',
                    type: 'String',
                    optionalValue: 'left / right / center',
                    defaultValue: 'center',
                },
            ],
        };
    },
    methods: {
        handleClose(val) {
            this.tags = this.tags.filter(cur => {
                return val != cur.name;
            });
        },
        ok1() {
            this.value = false;
        },
        cancel1() {
            this.value = false;
        },
    },
};
</script>
