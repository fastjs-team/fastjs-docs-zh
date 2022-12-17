# Selecter

:::tip Newest version
Fastjs-next `v1.1.0` is now available. [Click here](/other/changelog.html) to view the changelog.
:::

## Select element

:::tip
Use `selecter as $name` to change the name of the selecter.
:::

```javascript
import { selecter } from 'fastjs-next';

console.log(selecter("body")); // FastjsDom
```

### Select element by id

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("#id")); // FastjsDom
```

### Select element by class

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($(".class")); // FastjsDomList
```

::: details FastjsDom and FastjsDomList
When will it return FastjsDom?

If you use id to select element, it will return `FastjsDom`.<br/>
Also, if your selector is selecting something in ./src/config.ts -> dom.specialDom: Array\<string\>, it will return `FastjsDom`.
:::

## Return

`selecter` will return a `FastjsDom` or `FastjsDomList` object.