# 元素基础

:::tip 官方文档说明
这个页面是为初级用户准备的。如果你想了解更多，请参阅[元素](./dom.html)和[元素列表](./domlist.html)。
:::

## 创建元素

使用 `FastjsDom` 来创建一个元素。

```javascript
import { FastjsDom } from 'fastjs-next';

const div = new FastjsDom("div");
const span = new FastjsDom("span");
```

你也可以通过使用 `FastjsDom` 来管理一个已经存在的元素。

```javascript
import { FastjsDom } from 'fastjs-next';

const div = document.createElement("div");
const fastjsDom = new FastjsDom(div);
```

## 设置元素内容

使用 `html` 或 `text` 来设置元素的内容。

```javascript
import { selector as $ } from 'fastjs-next';

$("body").html("<h1>Hello World</h1>");
```

## 获取元素内容

使用 `html` 或 `text` 来获取元素的内容。

```javascript
import { selector as $ } from 'fastjs-next';

console.log($("body").html()); // <h1>Hello World</h1>
```

## 设置元素值 <Badge text="FastjsDomList v1.1.1" type="tip"/>

:::tip 在 FastjsDomList 中设置值 <Badge text="v1.1.1" type="tip" />
`val()` 在 `v1.1.1` 中被添加到 FastjsDomList 中。
:::

Use `val` to set or get the value of the `input`, `textarea` and `button` element.

```javascript
import { selector as $ } from 'fastjs-next';

$("input").val("Hello World");
console.log($("input")[0].val()); // Hello World
```


## 设置元素属性

使用 `attr` 来设置元素的属性。

```javascript
import { selector as $ } from 'fastjs-next';

$("body").attr("id", "body");
```

## 获取元素属性

使用 `attr` 来获取元素的属性。

```javascript
import { selector as $ } from 'fastjs-next';

console.log($("body").attr("id")); // body
```

## 设置元素样式

使用 `css` 来设置元素的样式。

```javascript
import { selector as $ } from 'fastjs-next';

// css(key, value, isImportant)
$("body").css("background-color", "red", true);
$("div").css({
    "background-color": "red",
    "color": "white"
});
```

### v1.0.14 <Badge text="过时" type="warning"/>

使用 `css` 来设置元素的样式。

```javascript
import { selector as $ } from 'fastjs-next';

$("body").css("background-color", "red !important");
```

## 元素事件

### 为元素添加事件

使用 `on` 来为元素添加事件。

```javascript
import { selector as $ } from 'fastjs-next';

$("body").on("click", () => {
    console.log("click");
});
```

### 移除元素事件 <Badge text="v1.1.0" type="tip"/>

使用 `off` 来移除元素事件。

```javascript
import { selector as $ } from 'fastjs-next';

const callback = (el) => {
  console.log(el, "clicked");
  el.off("click", callback);
};
$("body").on("click", callback);
```

## 类型转换

### FastjsDom

使用 `el()` 来将 FastjsDom 转换为 Element。

```javascript
import { selector as $ } from 'fastjs-next';

console.log($("body").el()); // Element
```

### FastjsDomList

使用 `getEl(index)` 来获取 FastjsDom，默认下标为 0。

```javascript
import { selector as $ } from 'fastjs-next';

console.log($("div").getEl()) // FastjsDom
console.log($("div").getEl().el()); // Element
```

使用 `el(index)` 来将 FastjsDomList 转换为 Element，index 默认为 0。

```javascript
import { selector as $ } from 'fastjs-next';

console.log($("div").el()); // Element
```

## 为元素添加子元素

:::warning
传递的参数必须是 Element，不能是 FastjsDom 或 FastjsDomList。
:::

使用 `append` 来在元素内部的末尾插入子元素。

```javascript
import { selector as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div")
$("body").append(div);
```

## 将元素添加到指定位置

:::warning
传递的参数必须是 Element，不能是 FastjsDom 或 FastjsDomList。
:::

### 添加到末尾

使用 `appendTo` 或 `push` 将元素添加到另一个元素的末尾。

```javascript
import { selector as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div");
div.html("Hello World");
div.appendTo($("body").el());
```

### 插入至首位

使用 `addFirst` 将元素插入到另一个元素的首位。

```javascript
import { selector as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div");
div.html("Hello World");
div.addFirst($("body").el());
```

### 添加到指定元素的后方

使用 `addAfter` 在另一个元素的后方添加元素。

```javascript
import { selector as $, FastjsDom } from 'fastjs-next';

$("body").html("<span>This is a website</span>")
new FastjsDom("h1").text("Website").addAfter($("span").el());
// <body> <span></span> <h1></h1> </body>
```

### 添加到指定元素的前方

使用 `addBefore` 将另一个元素的前方添加元素。

```javascript
import { selector as $, FastjsDom } from 'fastjs-next';

$("body").html("<h1>Website</h1>")
new FastjsDom("span").text("This is a website").addBefore($("h1").el());
```

## 访问原始元素

:::tip
你也可以使用 `el(index)` 来获取原始元素。
:::

使用 `get(index)` 或 `set(index, value)` 来操作原始元素。

```javascript
import { selector as $ } from 'fastjs-next';

$("body").set("innerHTML", "<h1>Hello World</h1>");
console.log($("body").get("innerHTML")); // <h1>Hello World</h1>
```

## 获取父元素

使用 `father()` 来获取元素的父元素。

```javascript
import { selector as $ } from 'fastjs-next';

$("body").html("<div></div>");
console.log($("div").father()); // FastjsDom -> body
```

## 获取子级

:::warning
它只在 FastjsDom 上适用。
:::

使用 `first` or `last` 获取元素的第一个或最后一个子元素。

```javascript
import { selector as $ } from 'fastjs-next';

$("body").html("<span></span><div></div>");
console.log($("body").first()); // FastjsDom -> span
console.log($("body").last()); // FastjsDom -> div
```

## 聚焦

使用 `focus()` 聚焦输入框。

:::warning
它只在 FastjsDom 上适用。
:::

```javascript
import { selector as $ } from 'fastjs-next';

$("input").getEl().focus();
```

## 示例

### 创建一个元素并添加到到 body

```javascript
import { FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div");
div.html("Hello World")
   .css({
       "color": "green",
       "font-size": "20px",
       "font-weight": "bold"
   })
   .appendTo();
```