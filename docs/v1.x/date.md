# Date <Badge text="v1.1.0" type="tip" />

You can use `FastjsDate` to get date and format date whatever you want.

## Format

```text
Y = year
M = month
D = day
H = hour (12)
A = AM/PM
a = am/pm
h = hour (24)
m = minute
s = second
S = millisecond

<any> to ignore (eg. "<date>: Y-M-D h:m:s")
```

## Create A Date

:::warning Time Elapse
When you change time to string | number, it will be `time + <time elapse>`, if you only want to format time or don't want time dynamic, use `toStringLocal` or `toNumberLocal`, but these two methods is available in `v1.2.0` or higher.
:::

### Original

```javascript
import {FastjsDate} from 'fastjs-next';

const date = new FastjsDate("Y-M-D h:m:s");
```

### With Date

```javascript
import {FastjsDate} from 'fastjs-next';

const date = new FastjsDate("Y-M-D h:m:s", 1620000000000);
```

## Get Date

### To String

```javascript
import {FastjsDate} from 'fastjs-next';

const date = new FastjsDate("Y-M-D h:m:s", 1620000000000);
console.log(date.toString()); // 2021-05-05 10:40:00
```

### To Number

```javascript
import {FastjsDate} from 'fastjs-next';

const date = new FastjsDate("Y-M-D h:m:s", 1620000000000);
setTimeout(() => {
  console.log(date.toNumber()); // 1620000001000
}, 1000);
```

## Get Date without Time Elapse

When you change time to string | number, it will be `time + <time elapse>`, if you only want to format time or don't want time dynamic, use `toStringLocal` or `toNumberLocal`, but these two methods is available in `v1.2.0` or higher.

Let's see the example:

```javascript
import {FastjsDate} from 'fastjs-next';

const date = new FastjsDate("Y-M-D h:m:s", 1620000000000);
setTimeout(() => {
  console.log(date.toNumber()); // 1620000001000
}, 1000);
```

### toStringLocal <Badge text="v1.2.0" type="tip" />

```javascript
import {FastjsDate} from 'fastjs-next';

const date = new FastjsDate("Y-M-D h:m:s", 1620000000000);
setTimeout(() => {
  console.log(date.toStringLocal()); // 2021-05-05 10:40:00
}, 1000);
```


### toNumberLocal <Badge type="tip" text="v1.2.0" />

```javascript
import {FastjsDate} from 'fastjs-next';

const date = new FastjsDate("Y-M-D h:m:s", 1620000000000);
setTimeout(() => {
  console.log(date.toNumberLocal()); // 1620000000000
}, 1000);
```