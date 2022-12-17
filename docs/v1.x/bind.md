# Bind

## Create Bind

Use `FastjsDom.bind` to create a bind.

```javascript
import { selecter as $ } from 'fastjs-next';

let obj = {
  time: 0,
};

obj = selecter("body").bind("innerHTML", "time", obj);

setInterval(() => {
  obj.time++;
}, 1000);
```

## Update

```javascript
import { selecter as $ } from 'fastjs-next';

let obj = {
  time: 0,
};

setInterval(() => {
  obj.time++;
  obj = selecter("body").bind("innerHTML", "time", obj);
}, 1000);
```

## Remove

```javascript
import { selecter as $ } from 'fastjs-next';

let obj = {
  time: 0,
};

obj = selecter("body").bind("innerHTML", "time", obj);
obj = Object.assign({}, obj);
```