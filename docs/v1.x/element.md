# Element

:::tip Authoritative document
This page is for junior users. If you want to know more, please see [FastjsDom](./dom.html) and [FastjsDomList](./domlist.html).
:::

## Create Element

Use `FastjsDom` to create a element.

```javascript
import { FastjsDom } from 'fastjs-next';

const div = new FastjsDom("div");
const span = new FastjsDom("span");
```

You can also use `FastjsDom` to manage an existing element.

```javascript
import { FastjsDom } from 'fastjs-next';

const div = document.createElement("div");
const fastjsDom = new FastjsDom(div);
```

## Set index

Use `html` or `text` to set the index of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<h1>Hello World</h1>");
```

## Get index

Use `html` or `text` to get the index of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").html()); // <h1>Hello World</h1>
```

## Set value

:::tip Set value in FastjsDomList <Badge text="v1.1.1" type="tip" />
Function `val()` in FastjsDomList is added in `v1.1.1`.
:::

Use `val` to set or get the value of the `input`, `textarea` and `button` element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("input").val("Hello World");
console.log($("input")[0].val()); // Hello World
```


## Set attribute

Use `attr` to set the attribute of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").attr("id", "body");
```

## Get attribute

Use `attr` to get the attribute of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").attr("id")); // body
```

## Set style

Use `css` to set the style of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

// css(key, value, isImportant)
$("body").css("background-color", "red", true);
$("div").css({
    "background-color": "red",
    "color": "white"
});
```

### v1.0.14 <Badge text="obsolete" type="warning"/>

Use `css` to set the style of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").css("background-color", "red !important");
```

## Event

### Add event

Use `on` to add event to the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").on("click", () => {
    console.log("click");
});
```

### Remove event <Badge text="v1.1.0" type="tip"/>

Use `off` to remove event from the element.

```javascript
import { selecter as $ } from 'fastjs-next';

const callback = (el) => {
  console.log(el, "clicked");
  el.off("click", callback);
};
$("body").on("click", callback);
```

## Change to Element

### FastjsDom

Use `el()` to change FastjsDom to Element.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").el()); // Element
```

### FastjsDomList

Use `getEl(index)` to get FastjsDom, index default is 0.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").getEl().el()); // Element
```

Use `el(index)` to change FastjsDomList -> FastjsDom to Element, index default is 0.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").el()); // Element
```

## Add element

Use `append` to add element.

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div")
$("body").append(div);
```

## Add to place

:::warning
Please give an Element, not FastjsDom or FastjsDomList.
:::

### Add to end

### Add to end

Use `appendTo` or `push` to add the element to the end of the place.

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div");
div.html("Hello World");
div.appendTo($("body").el());
```

### Add to start

Use `addFirst` to add the element to the start of the place.

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

let div = new FastjsDom("div");
div.html("Hello World");
div.addFirst($("body").el());
```

### Add after element

Use `addAfter` to add the element after the place.

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

$("body").html("<span>This is a website</span>")
new FastjsDom("h1").text("Website").addAfter($("span").el());
```

### Add before element

Use `addBefore` to add the element before the place.

```javascript
import { selecter as $, FastjsDom } from 'fastjs-next';

$("body").html("<h1>Website</h1>")
new FastjsDom("span").text("This is a website").addBefore($("h1").el());
```

## Access element

:::tip
You can also use `el(index)` to get the element.
:::

Use `get(index)` or `set(index, value)` to operate element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").set("innerHTML", "<h1>Hello World</h1>");
console.log($("body").get("innerHTML")); // <h1>Hello World</h1>
```

## Get Parent

Use `father()` to get the parent of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<div></div>");
console.log($("div").father()); // FastjsDom -> body
```

## Get Child

:::warning
It only work on FastjsDom.
:::

Use `first` or `last` to get the first or last child of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<span></span><div></div>");
console.log($("body").first()); // FastjsDom -> span
console.log($("body").last()); // FastjsDom -> div
```

## Focus

Use `focus()` to focus input element.

:::warning
It only work on FastjsDom.
:::

```javascript
import { selecter as $ } from 'fastjs-next';

$("input").getEl().focus();
```

## Demo

### Create and push to body

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