# Ajax

You can use FastjsAjax to create a ajax request.

:::tip Document version <Badge text="v1.1.0" type="tip" />
This document is for FastjsAjax v1.1.x or higher. If you are using FastjsAjax v1.0.x, please update or go to [github](https://github.com/fastjs-team/fastjs-docs/) and find release `v1.1.0`
:::

## Parameters

```typescript
class fastjsAjax {
    constructor(url: string, data: object = {}, config: selectConfig = {}): fastjsAjax {}
}
```

## Create Ajax

:::warning Setup
You need to give a `url` to create an ajax request.
:::

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://fastjs.com.cn/");
```

## Send Ajax

### send

:::tip
Small or Big letter is not important when you use `send` .
:::

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://fastjs.com.cn/");
ajax.send("GET");
```

### Keep Alive <Badge text="Learn more" type="tip" />

Set `config.keepAlive` to `true` to keep alive.

When a ajax request is success or fail, it will be send again.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://fastjs.com.cn/", {}, {
    keepAlive: true
});
ajax.send("GET");
```

## Send With Data

### Data

Give an object to `data` to send data.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/getUser.php", {
    token: "iAmATokenHaHaHa(HaHaHa*100)"
});
ajax.send("POST");
```

### Headers

:::warning Security Headers
Some headers can't be set, like `Cookie`, it will reject by browser.
:::

Set `config.headers` to send headers.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    headers: {
        "Content-Type": "application/json"
    }
});
ajax.send("POST");
```

## Callback

### success

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/iWillReturnAnObjectWithMsg", {}, {
    callback: data => {
        console.log("Ajax success, msg is " + data.msg);
    }
});
ajax.send("GET");
```

### fail

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/iWillReturnAnObjectWithMsg", {}, {
    callback: data => {
        console.log("Ajax success, msg is " + data.msg);
    },
    failed: data => {
        console.log("Ajax fail, Retry?");
        // You can resend ajax here
        ajax.send("GET");
    }
});
ajax.send("GET");
```

## Common Config

### timeout

Set `config.timeout` to set timeout.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    timeout: 1000
});
ajax.send("GET");
```

### responseType

:::tip Auto Type
FastjsAjax response type default is `auto`, it will try to parse response to json when success.
:::

Set `config.responseType` to set response type.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    responseType: "text"
});
ajax.send("GET");
```

### wait

Set `config.wait` to set wait time.

When you send a ajax request, it will wait `config.wait` time to send.

If there is a new ajax request when it is waiting, it will cancel the old one and send the new one.

```javascript
import {FastjsAjax, selecter} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    wait: 1000
});
selecter("#btn").on("click", () => {
    ajax.send("GET");
});

selecter("#btn").el().click();
setTimeout(() => {
    selecter("#btn").el().click();
    setTimeout(() => {
        selecter("#btn").el().click();
    }, 500);
}, 500);
// It will only send 1 ajax request
```

### shutdown

Set `config.shutdown` to set shutdown or not.

If `config.shutdown` is `true`, if you already send a ajax request, it will not send again.

```javascript
import {FastjsAjax, selecter} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    shutdown: true,
    callback: data => {
        console.log("Ajax success");
        ajax.send("GET");
    }
});
ajax.send("GET");
// It will only send 1 ajax request
```