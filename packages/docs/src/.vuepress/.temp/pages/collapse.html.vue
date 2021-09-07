<template><h1 id="collapse-折叠面板" tabindex="-1"><a class="header-anchor" href="#collapse-折叠面板" aria-hidden="true">#</a> Collapse 折叠面板</h1>
<p>通过折叠面板收纳内容区域</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>可同时展开多个面板，面板之间不影响</p>
<fox-collapse v-model="value" @change="handleClick">
<fox-collapse-item title="史蒂夫·乔布斯">
<div>史蒂夫·乔布斯（Steve Jobs），1955 年 2 月 24 日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
</fox-collapse-item>
<fox-collapse-item title="盖瑞·沃兹尼亚克">
<div>
斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
Berkeley）并获得电机工程及计算机（EECS）本科学位（1987 年）。
</div>
</fox-collapse-item>
<fox-collapse-item title="乔纳森·伊夫">
<div>
乔纳森·伊夫是一位工业设计师，现任 Apple 公司设计师兼资深副总裁，英国爵士。他曾参与设计了 iPod，iMac，iPhone，iPad 等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
</div>
</fox-collapse-item>
</fox-collapse>
<h2 id="手风琴效果" tabindex="-1"><a class="header-anchor" href="#手风琴效果" aria-hidden="true">#</a> 手风琴效果</h2>
<p>每次只能展开一个面板</p>
<fox-collapse v-model="value1" accordion @change="handleClick">
<fox-collapse-item title="史蒂夫·乔布斯">
<div>
史蒂夫·乔布斯（Steve
Jobs），1955 年 2 月 24 日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
</div>
</fox-collapse-item>
<fox-collapse-item title="盖瑞·沃兹尼亚克">
<div>
斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
Berkeley）并获得电机工程及计算机（EECS）本科学位（1987 年）。
</div>
</fox-collapse-item>
<fox-collapse-item title="乔纳森·伊夫">
<div>
乔纳森·伊夫是一位工业设计师，现任 Apple 公司设计师兼资深副总裁，英国爵士。他曾参与设计了 iPod，iMac，iPhone，iPad 等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
</div>
</fox-collapse-item>
</fox-collapse>
<h2 id="自定义-arrow-的位置和显示" tabindex="-1"><a class="header-anchor" href="#自定义-arrow-的位置和显示" aria-hidden="true">#</a> 自定义 arrow 的位置和显示</h2>
<p>适用于在多个互斥的选项中选择的场景</p>
<fox-collapse v-model="value2" accordion arrow="right">
<fox-collapse-item title="史蒂夫·乔布斯">
<div>
史蒂夫·乔布斯（Steve
Jobs），1955 年 2 月 24 日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
</div>
</fox-collapse-item>
<fox-collapse-item title="盖瑞·沃兹尼亚克">
<div>
斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
Berkeley）并获得电机工程及计算机（EECS）本科学位（1987 年）。
</div>
</fox-collapse-item>
<fox-collapse-item title="乔纳森·伊夫">
<div>
乔纳森·伊夫是一位工业设计师，现任 Apple 公司设计师兼资深副总裁，英国爵士。他曾参与设计了 iPod，iMac，iPhone，iPad 等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
</div>
</fox-collapse-item>
</fox-collapse>
<p>arrow不显示</p>
<fox-collapse v-model="value3" accordion arrow="none">
    <fox-collapse-item title="史蒂夫·乔布斯">
        <div>
            史蒂夫·乔布斯（Steve
            Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
        </div>
    </fox-collapse-item>
    <fox-collapse-item title="盖瑞·沃兹尼亚克">
        <div>
            斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
            Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
            Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
        </div>
    </fox-collapse-item>
    <fox-collapse-item title="乔纳森·伊夫">
        <div>
            乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
        </div>
    </fox-collapse-item>
</fox-collapse>
</template>

<script>
export default {
    data(){
        return {
            value: [],
            value1: "",
            value2: "",
            value3: "",
        }
    },
    methods: {
        handleClick(val){
            console.log(val)
        }
    }
}
</script>
