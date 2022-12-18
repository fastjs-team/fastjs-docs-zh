# Element

:::tip Authoritative document
This page is for senior users. If you are a junior user, you can skip this page.
:::

## Create Element

### Prototype

```typescript
class fastjsDom {
    constructor(el: HTMLElement | string) {}
}
```

### Example

FastjsDom receives `tagname<string>`

```javascript
import { FastjsDom } from 'fastjs-next';

const element = new FastjsDom("div");
```

If you already have a element, and just want to use FastjsDom to manage it, you can give parameter `element<HTMLElement>` to FastjsDom.

```javascript
import { FastjsDom } from 'fastjs-next';

const element = document.createElement("div");
const fastjsDom = new FastjsDom(element);
```

## Set index

### Prototype

```typescript
class fastjsDom {
    html<T extends string>(val: T): T extends undefined ? string : fastjsDom {}
    text<T extends string>(val: T): T extends undefined ? string : fastjsDom {}
}
```

### Example

Use `html` or `text` to set the index of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").html("<h1>Hello World</h1>");
```

### Difference between html and text

```text
el.html(text) -> el.innerHTML = text -> el
el.text(text) -> el.innerText = text -> el
```

## Get index

### Example

Use `html` or `text` to get the index of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").html()); // <h1>Hello World</h1>
```

## Set value

:::warning
After v1.2.0, val become stricter. Parameter `val` only be `string | undefined`.
:::

### Prototype

```typescript
class fastjsDom {
    val(): string
    val(val: string): fastjsDom
    
    val(val?: string): fastjsDom | string {}
}
```

### Example

Use `val` to set or get the value of the `input`, `textarea` and `button` element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("input").val("Hello World");
console.log($("input").val()); // Hello World
```

## Set attribute

### Prototype

```typescript
class fastjsDom {
    attr(key: string): string | null
    attr(key: string, value: string | null): fastjsDom

    attr(key: string, value?: string | null): string | null | fastjsDom {}
}
```

### Example

Use `attr` to set the attribute of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").attr("id", "body");
```

## Get attribute

### Example

Use `attr` to get the attribute of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").attr("id")); // body
```

## Style

### v1.1.0

### Prototype

```typescript
class fastjsDom {
    css(): CSSStyleDeclaration
    css(key: object): fastjsDom
    css(key: string, value: string, other?: string): fastjsDom

    css(key?: string | object, value?: string, other?: string): fastjsDom | CSSStyleDeclaration {}
}
```

### Example

Use `css` to set the style of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").css("background-color", "red");
```

This style is important? Write like this

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").css("background-color", "red", true);
```

You can also use object to set the style of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").css({
    "background-color": "red",
    "color": "white"
});
```

If you want to get the style of the element, you can use `css` without parameter, it will return a `CSSStyleDeclaration`.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").css()); // $("#body").css() instanceof CSSStyleDeclaration
```

### v1.0.14 <Badge text="obsolete" type="warning"/>

### Example

Use `css` to set the style of the element.

```javascript
import { selecter as $ } from 'fastjs-next';

$("body").css("background-color", "red !important");
```

## Event <Badge text="v1.1.0" type="warning"/>

### Prototype

```typescript
class fastjsDom {
    on(event: string = "click", callback: Function): fastjsDom {}
    off(event: string = "click", callback: Function): fastjsDom {}
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

### off <Badge text="v1.1.0" type="tip"/>

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
class fastjsDom {
    el(): HTMLElement {}
}
```

### Example

Use `el()` to change FastjsDom to Element.

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("body").el()); // Element
```

## Add element

:::warning
Please give an Element, not FastjsDom or FastjsDomList.
:::

### Prototype

```typescript
class fastjsDom {
    append(el: HTMLElement): fastjsDom {}
}
```

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

### Prototype

```typescript
class fastjsDom {
    appendTo(el: HTMLElement): fastjsDom {}
    push(el: HTMLElement): fastjsDom {}
    addFirst(el: HTMLElement): fastjsDom {}
    addAfter(el: HTMLElement): fastjsDom {}
    addBefore(el: HTMLElement): fastjsDom {}
}
```

### Example

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
class fastjsDom {
    father(): fastjsDom {}
}
```

### Example

Use `father()` to get the parent of the element.

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