# Element

:::tip Authoritative document
This page is for senior users. If you are a junior user, you can skip this page.
:::

## Create Element List

### Prototype

```typescript
class fastjsDomList {
    constructor(list: Array<HTMLElement> = []) {}
}
```

### Example

FastjsDomList receives `Array<HTMLElement>`

```javascript
import { FastjsDom } from 'fastjs-next';

const element = new FastjsDomList();
```

```javascript
import { FastjsDom } from 'fastjs-next';

const element = document.createElement("div");
const fastjsDomList = new FastjsDomList([element]);
```

## Set index

### Prototype

```typescript
class fastjsDomList {
    html<T extends string>(val: T): T extends undefined ? string : fastjsDomList {}
    text<T extends string>(val: T): T extends undefined ? string : fastjsDomList {}
}
```

### Example

Use `html` or `text` to set the index of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("div").text("I am div");
```

### Difference between html and text

```text
el.html(text) -> each -> el.innerHTML = text -> el
el.text(text) -> each -> el.innerText = text -> el
```

## Get index

### Example

Use `html` or `text` to get the index of the fastjsDomList[0].

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<span>1</span><span>2</span><span>3</span>");
console.log($("span").text()); // 1
```

## Set attribute

### Prototype

```typescript
class fastjsDomList {
    attr(key: string): string | null
    attr(key: string, value: string | null): fastjsDomList

    attr(key: string, value?: string | null): string | null | fastjsDomList {}
}
```

### Example

Use `attr` to set the attribute of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("div").attr("i-am", "div");
```

## Style

### v1.1.0

### Prototype

```typescript
class fastjsDomList {
    css(): CSSStyleDeclaration
    css(key: object): fastjsDomList
    css(key: string, value: string, other?: string): fastjsDomList

    css(key?: string | object, value?: string, other?: string): fastjsDomList | CSSStyleDeclaration {}
}
```

### Example

Use `css` to set the style of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("span").css("color", "red");
```

This style is important? Write like this

```javascript
import { selecter as $ } from 'fastjs-next';

$("span").css("color", "red", true);
```

You can also use object to set the style of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("span").css({
    "color": "red",
    "font-size": "20px"
});
```

### v1.0.14 <Badge text="obsolete" type="warning"/>

### Example

Use `style` to set the style of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("span").style("color", "red !important");
```

## Event <Badge text="v1.1.0" type="warning"/>

### Prototype

```typescript
class fastjsDomList {
    on(event: string = "click", callback: Function): fastjsDomList {}
    off(event: string = "click", callback: Function): fastjsDomList {}
}
```

Callback function:

```typescript
function callback(el: FastjsDom, ...EventListenerCallback): void {}
```

### Example

### on

Use `on` to add event to the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").on("click", (el) => {
    console.log(el, "clicked");
});
```

### off <Badge text="v1.1.0" type="warning"/>

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

### Prototype

```typescript
class fastjsDomList {
    el(key): HTMLElement {}
    getEl(key): fastjsDom {}
}
```

### Example

Use `el(key)` to change FastjsDomList -> FastjsDom to Element.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("div").el()); // Element
```

Use `getEl(key)` to get FastjsDom in FastjsDomList.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("div").getEl()); // FastjsDom
```

## Access element

:::tip
You can also use `el()` to get the element.
:::

### Prototype

```typescript
class fastjsDom {
    get<T extends keyof HTMLElement>(key: T): HTMLElement[T] {}
    set<T extends keyof HTMLElement>(key: T, val: HTMLElement[T]): fastjsDom {}
}
```

Use `get(index)` or `set(index, value)` to operate element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").set("innerHTML", "<h1>Hello World</h1>");
console.log($("body").get("innerHTML")); // <h1>Hello World</h1>
```

## Get Parent

### Prototype

```typescript
class fastjsDomList {
    father(): fastjsDom {}
}
```

### Example

Use `father()` to get the parent of the fastjsDomList[0].

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<div></div>");
console.log($("div").father()); // FastjsDom -> body
```

## Get Child

### Prototype

```typescript
class fastjsDom {
    first(): fastjsDom | null {}
    last(): fastjsDom | null {}
}
```

### Example

Use `first` or `last` to get the first or last child of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<span></span><div></div>");
console.log($("body").first()); // FastjsDom -> span
console.log($("body").last()); // FastjsDom -> div
```

## Focus

### Prototype

```typescript
class fastjsDom {
    focus(): fastjsDom {}
}
```

### Example

Use `focus()` to focus input element.

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