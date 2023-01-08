# Bind <Badge type="warning" text="v1.2.0" />

## Create Bind

Use `FastjsDom.bind` to create a bind.

```javascript
import { selector as $ } from 'fastjs-next';

let obj = {
  time: 0,
};

obj = selector("body").bind("innerHTML", "time", obj);

setInterval(() => {
  obj.time++;
}, 1000);
```

## Update

```html
<button onclick="obj.time++">Click</button>
<button onclick="add()">Add a div</button>
<div></div>
```

```javascript
import { selector as $ } from 'fastjs-next';

let obj = {
  time: 0,
};

obj = selector("div").bind("innerHTML", "time", obj);

setInterval(() => {
  obj.time++;
}, 1000);

function add() {
  new FastjsDom("div").appendTo()
  obj = selector("div").bind("innerHTML", "time", obj);
}
```

## Remove

```javascript
import { selector as $ } from 'fastjs-next';

let obj = {
  time: 0,
};

obj = selector("body").bind("innerHTML", "time", obj);
delete obj._event
```