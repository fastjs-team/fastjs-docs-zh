# Array <Badge type="warning" text="v1.0.11" />

:::tip Strong FastjsArray
FastjsArray's type check can use without typescript, it also has a lot of useful methods.
:::

:::tip Suggestions
Use `const` to define FastjsArray.
:::

FastjsArray is a strong type array.
It can let you find error in runtime with some error output.

## Create Array

Use `new FastjsArray()` to create a FastjsArray.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray();
```

## Type check

Give parameter `config.type` to allow type check.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["string", "number"]
});
```

## Max length

Give parameter `config.length` to allow max length.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  length: 10
});
```

## Demo

First, create a `<number>FastjsArray` .

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["number"],
});
```

Then, add some number to the array.

```javascript
array.push(1);
array.push(2);
array.push(3);
array.toArray(); // [1, 2, 3]
```

If you add a string to the array, it will throw an error.

```javascript
try {
  array.push("4");
} catch (e) {
  console.log(e); // Error
  console.log(array.toArray()); // [1, 2, 3]
}
```

## Add index

### Push

Use `push` to add some index to the end of the array.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["number"],
});

array.push(1, 2, 3);
array.toArray(); // [1, 2, 3]
```

### Add

:::warning
Function `add` only can add one index each time.
:::

Use `add` to add some index to the array.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["number"],
});

array.add(2);
array.add(1, 0);
array.toArray(); // [1, 2]
```

## Remove index

### Remove

Use `remove` to remove some index from the array.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["number"],
});

array.push(1, 2, 3);
array.remove(1);
array.toArray(); // [1, 3]
```

## Foreach

Use `each` to loop the array.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["number"],
});

array.push(1, 2, 3);
array.each((value, index) => {
  console.log(value, index);
});
// 1 0
// 2 1
// 3 2
```

## Access Array

Use `get(index)` or `set(index, value)` to access the array.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["number"],
});

array.push(1, 2, 3);
array.get(1); // 2
array.set(1, 4); // <number>FastjsArray -> [1, 4, 3]
```

### OR

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["number"],
});
// array._array = [1, 2, 3]; // Don't use this, it will lose type check, hooks and other features.
array._array[0] = 1;
array._array[1] = 2;
array._array[2] = 3;
array.toArray(); // [1, 2, 3]
```

## Then

Use `then(func, time)` to run a function async

:::tip Suggestions
Give empty time to run the function immediately.
:::

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([], {
  type: ["number"],
});

array.push(1, 2, 3).then(() => {
  console.log(array.toArray()); // [1, 2, 3, 4]
});
array.push(4);
```

## Get Length

### Length

Use `length` to get the length of the array.

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([1, 2, 3], {
  type: ["number"],
});

array.length(); // 3
```

### Get

```javascript
import {FastjsArray} from 'fastjs-next';

const array = new FastjsArray([1, 2, 3], {
  type: ["number"],
});

array.get("length"); // 3
```

## Hook <Badge type="tip" text="v1.0.12" /> <Badge type="warning" text="v1.0.13" />

You can use `addHook` to register a hook, it will run when the array changed.

```javascript
// Vue
import {FastjsArray} from 'fastjs-next';

export default {
  data() {
    const arr = new FastjsArray([]);
    arr.addHook(() => {
      this.$nextTick(this.$forceUpdate)
    });
    return {
      arr
    };
  }
}
```

:::details Common Problem
**- My hook not work in vue**

Did you use `toArray()` to get the array? Try to use `_array` to get the array.

**- My hook still not work**

Did you use `each()` to loop the array? Try to use `_array.forEach()` to loop the array.
:::

## Other methods

* map
* filter

