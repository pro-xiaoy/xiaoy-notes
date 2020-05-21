> ## flex 布局（弹性布局）

---

#### 很久之前在阮一峰老师的随笔上就看到了他对这个属性的了解，有兴趣的同学可以参考他的博客

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

### 一.基本概念

##### 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

##### 无论你内部属性如何变化，记住父级容器加入属性： display:flex;

### 二. 容器的属性

#### 2.1 flex-direction 属性 [flex-方向]

##### flex-direction 属性决定主轴的方向（即项目的排列方向）。

```css
.box {
  display: flex; // 重点代码
  flex-direction: row; // 主轴为水平方向，起点在左端(从左到右)
  width: 100px;
  border: 1px solid #cccccc;
}
.item {
  width: 30px;
  height: 30px;
  background: #ff00ff;
  margin: 10px;
}
```

```css
        row（默认值）：主轴为水平方向，起点在左端。--从左到右
        row-reverse：主轴为水平方向，起点在右端。---从右到左
        column：主轴为垂直方向，起点在上沿。     ---从上到下
        column-reverse：主轴为垂直方向，起点在下沿。---从下到上
    <!---------  在不设置子元素或者是父元素的margin和padding是没有的      -------->
```

#### 2.2 flex-wrap 属性 [flex-包/缠绕]

##### 默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap 属性定义，如果一条轴线排不下，如何换行。(很牛逼的属性牛逼的不行)

```css
    nowrap（默认）：不换行。(当你的父级元素宽度低于内部元素宽度.他会自动适配宽度调节到最佳)
    wrap：换行，第一行在上方。(普通的，但是他还是从左往右的排序，尊重你设置的内部元素宽度)
    wrap-reverse：换行，第一行在下方。（超级骚气和warp很象但是头尾换了过来，具体页面具体对待）
    <!--------    同样的demo直接把上面css中的flex-direction换掉就可以   ------------>
```

#### 2.3 flex-flow [flex-流(理解为流水吧)]

#### flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。

```css
    .box { flex-flow: <flex-direction> || <flex-wrap>; }
           flex-flow: row nowrap;
    <!-- 官网的demo其实是这个意思，后面可以跟两个参数对flex-direction/flex-wrap 后面的值--->
```

#### 2.4 justify-content 属性 [证明内容]

##### justify-content 属性定义了项目在主轴上的对齐方式。[同理利用上面的 css 样式做实验]

```css
    .box {
        justify-content: flex-start | flex-end | center | space-between | space-around;
    }
    flex-start（默认值）：左对齐   --很像flex-direction:row
    flex-end：右对齐
    center： 居中                 -- text-align:center
    space-between：两端对齐，项目之间的间隔都相等。
    space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
```

#### 2.5 align-items 属性 [类似于竖着的 justify-content][排列项目]

#### align-items 属性定义项目在交叉轴上如何对齐。

> 这个属性想要看出来在父级容器上加入高度

```css
    .box {
        align-items: flex-start | flex-end | center | baseline | stretch;
    }
    flex-start：交叉轴的起点对齐。
    flex-end：交叉轴的终点对齐。
    center：交叉轴的中点对齐。
    baseline: 项目的第一行文字的基线对齐。
    stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
    <!-----   这一段是真的很好看懂--！可以好好参考   ----->
```

#### 2.6 align-content 属性

#### align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
    .box {
        align-content: flex-start | flex-end | center | space-between | space-around |  stretch;
    }
    flex-start：与交叉轴的起点对齐。
    flex-end：与交叉轴的终点对齐。
    center：与交叉轴的中点对齐。
    space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    stretch（默认值）：轴线占满整个交叉轴。

```

### 3. 项目的属性

#### 3.1 order 属性[改变顺序]

```css
//  一排div改变顺序
.box {
  display: flex;
}
.order {
  order: -1;
}
```

#### 3.2 flex-grow 属性

#### flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

```css
    //  改变比例有点像col-lg-x这个一说基本都懂
    .box{
        display: flex;
    }
    .item{
        flex-grow：4
    }
```

#### 3.3 flex-shrink

#### 如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。负值对该属性无效。

```css
.item {
  flex-shrink: 1;
}
```

#### 3.4 flex-basis 属性

#### flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小

```css
.item {
  flex-basis: 264px; // 不会超出父级宽度。
}
```

#### 3.5 flex 属性

#### flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

#### 3.6 align-self 属性

#### align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}

.box {
  display: flex;
  height: 400px;
}
item {
  align-self: flex-end;
}
```
