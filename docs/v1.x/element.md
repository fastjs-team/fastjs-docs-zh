# Element

:::tip 官方文档说明
这个页面是为初级用户准备的。如果你想了解更多，请参阅[元素](./dom.html)和[元素列表](./domlist.html)。
:::

## 创建元素

使用 `FastjsDom` 来创建元素。

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

## 设置索引

使用 `html` 或 `text` 来设置元素的索引。
```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<h1>Hello World</h1>");
```

## 获取索引

使用 `html` 或 `text` 来获取元素的索引。

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").html()); // <h1>Hello World</h1>
```

## 设置值

:::tip 设置值在[元素列表](./domlist.html)中声明 <Badge text="v1.1.1" type="tip" />
方法 `val()` 新增于[元素列表](./domlist.html)的 `v1.1.1` 版本.
:::

Use `val` to set or get the value of the `input`, `textarea` and `button` element.
使用 `val` 来设置或获取 `input`, `textarea` 和 `button` 等的元素值。

```javascript
import { selecter as $ } from 'fastjs-next';

$("input").val("Hello World");
console.log($("input")[0].val()); // Hello World
```


## 设置属性

使用 `attr` 来设置元素的属性。

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").attr("id", "body");
```

## 获取属性

使用 `attr` 来获取元素的属性。

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").attr("id")); // body
```

## 设置样式

使用 `css` 来设置元素的样式

```javascript
import { selecter as $ } from 'fastjs-next';

// css(key, value, isImportant)
$("body").css("background-color", "red", true);
$("div").css({
    "background-color": "red",
    "color": "white"
});
```

### v1.0.14 <Badge text="过时的" type="warning"/>

使用 `css` 来设置元素的样式。

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").css("background-color", "red !important");
```

## 事件

### 添加事件

使用 `on` 来添加元素的事件

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").on("click", () => {
    console.log("click");
});
```

### 移除事件 <Badge text="v1.1.0" type="tip"/>

使用 `off` 来删除元素的事件。

```javascript
import { selecter as $ } from 'fastjs-next';

const callback = (el) => {
  console.log(el, "clicked");
  el.off("click", callback);
};
$("body").on("click", callback);
```

## 改变元素

### FastjsDom

使用 `el()` 将 FastjsDom 的改变展示到元素上。

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").el()); // Element
```

### FastjsDomList

使用 `getEl(index)` 来获取 FastjsDom, 默认下标为 0。

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").getEl().el()); // Element
```

使用 `el(index)` 来改变 FastjsDomList -> FastjsDom 到元素, 下标默认为 0。

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").el()); // Element
```

## 添加元素

使用 `append` 来添加元素。

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div")
$("body").append(div);
```

## 添加到指定位置

:::警告
请给出一个元素，而不是 FastjsDom 或 FastjsDomList 。
:::

### 添加到末尾

使用 `appendTo` 或 `push` 将元素添加到位置的末尾。

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div");
div.html("Hello World");
div.appendTo($("body").el());
```

### 添加到开头

使用 `addFirst` 将元素添加到位置的开头。

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div");
div.html("Hello World");
div.addFirst($("body").el());
```

### 添加到元素的后面

使用 `addAfter` 在位置之后添加元素。

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

$("body").html("<span>This is a website</span>")
new FastjsDom("h1").text("Website").addAfter($("span").el());
```

### 添加到元素的前面

使用 `addBefore` 将元素添加到位置之前。

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

$("body").html("<h1>Website</h1>")
new FastjsDom("span").text("This is a website").addBefore($("h1").el());
```

## 访问元素

:::tip
你也可以使用 `el(index)` 来获得这个元素。
:::

使用 `get(index)` 或 `set(index, value)` 来操作元素。

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").set("innerHTML", "<h1>Hello World</h1>");
console.log($("body").get("innerHTML")); // <h1>Hello World</h1>
```

## 获取父级

使用 `father()` 来获取元素的父元素。

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<div></div>");
console.log($("div").father()); // FastjsDom -> body
```

## 获取子级

:::warning
它只在 FastjsDom 上适用。
:::

使用 `first` or `last` 获取元素的第一个或最后一个子元素。

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<span></span><div></div>");
console.log($("body").first()); // FastjsDom -> span
console.log($("body").last()); // FastjsDom -> div
```

## 聚焦

使用 `focus()` 聚焦输入元素。

:::warning
它只在 FastjsDom 上适用。
:::

```javascript
import { selecter as $ } from 'fastjs-next';

$("input").getEl().focus();
```

## 样例

### 创建并提交到 body 元素

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