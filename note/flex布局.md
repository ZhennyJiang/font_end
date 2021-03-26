### flex 布局(弹性布局)

特点：
极为方便，但在 PC 端支持情况较差，IE11 及以上才支持，在移动端开发更为常见

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

拥有 flex 属性的容器成为 flex 容器，其子元素则是 flex 项目

```css
.box {
  display: flex;
}
.box {
  display: inline-flex;
}
/*Webkit 内核的浏览器，必须加上-webkit前缀。*/

.box {
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

<strong>
    注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
</strong>

#### 常见父项属性：

1. flex-direction: 设置主轴 (子元素是跟着主轴来排列的)；
   | 属性值 | 说明 |
   | ------ | ---------------------------------------------------------------- |
   | row | 设 x 轴为主轴，那么侧轴就是 y 轴. row-reverse 则是沿着 x 轴从右到左 |
   | column | 设 y 轴为主轴，那么侧轴就是 x 轴. column-reverse 则是沿着 y 轴从下到上 |

2. justify-content 设置主轴上的子元素排列方式

   <strong>使用这个属性之前一定要确定好主轴是那个</strong>

   | 属性值        | 说明                                                                    |
   | ------------- | ----------------------------------------------------------------------- |
   | flex-start    | 默认值。向左或向上对齐                                                  |
   | flex-start    | 向右或向下对齐                                                          |
   | center        | 居中对齐                                                                |
   | space-around  | 平分剩余的空间 ，左边的距离和右边的距离相等（margin-left=margin-right） |
   | space-between | 两边的元素分别对两边对齐，再平均分配剩余空间                            |

   以 x 轴为主轴示例：

   ![](../static/images/justify-content.png)

3. flex-wrap

   flex 布局默认不换行/列，当一行/列空间不够时，会自动缩小子元素的高度或宽度让所有元素的在同一行/列上.

   | 属性值 | 说明                |
   | ------ | ------------------- |
   | nowrap | 默认不换行/列       |
   | wrap   | 空间不够时，换行/列 |

4. align-items 设置侧轴上的子元素排列方式（仅适用于单行/列）
   | 属性值 | 说明 |
   | ---------- | -------------------------- |
   | center | 在主轴上的子元素于侧轴居中 |
   | flex-start | 最左/上排列 |
   | flex-end | 最右/下排列 |

5. align-content 设置侧轴上的子元素排列方式（适用于多行并且需要设置 flex-wrap: wrap.对单行无效）
   | 属性值 | 说明 |
   | ------------- | ----------------------------------------------------------------------- |
   | flex-start | 默认值。向左或向上对齐 |
   | flex-start | 向右或向下对齐 |
   | center | 居中对齐 |
   | space-around | 平分剩余的空间 ，左边的距离和右边的距离相等（margin-left=margin-right） |
   | space-between | 两边的元素分别对两边对齐，再平均分配剩余空间 |

6. flex-flow 复合属性 设置主轴方向和是否换行

   flex-flow: row/column wrap/nowrap

#### 常见子项属性

1. flex : number (默认是 0); 分配剩余空间。 flex 值越大，所占比就越大。
2.
