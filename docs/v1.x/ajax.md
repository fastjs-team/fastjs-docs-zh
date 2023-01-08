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

### get <Badge text="v1.2.0" type="tip" />

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://fastjs.com.cn/");
ajax.get();

// or
new FastjsAjax("https://fastjs.com.cn/").get()
```

### post <Badge text="v1.2.0" type="tip" />

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://fastjs.com.cn/");
ajax.post();

// or
new FastjsAjax("https://fastjs.com.cn/").post()
```

### send

:::tip
Small or Big letter is not important when you use `send` .
:::

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://fastjs.com.cn/");
ajax.send("GET");

// or
new FastjsAjax("https://fastjs.com.cn/").send("GET")
new FastjsAjax("https://fastjs.com.cn/").send("POST")
```

### Keep Alive <Badge text="Learn more" type="tip" />

Set `config.keepAlive` to `true` to keep alive.

When an ajax request is success or fail, it will send again.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://fastjs.com.cn/", {}, {
    keepAlive: true
});
ajax.get();
```

## Send With Data

### Data

Give an object to `data` to send data.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/getUser.php", {
    token: "iAmATokenHaHaHa(HaHaHa*100)"
});
ajax.post();
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
ajax.post();
```

## Callback

### then <Badge text="v1.2.0" type="tip" />

```javascript
import {FastjsAjax} from 'fastjs-next';

new FastjsAjax("https://demo.lalala.com/").get().then((data) => {
    console.log(data);
});
```

### success

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/iWillReturnAnObjectWithMsg", {}, {
    callback: data => {
        console.log("Ajax success, msg is " + data.msg);
    }
});
ajax.get();
```

### catch <Badge text="v1.2.0" type="tip" />

```javascript
import {FastjsAjax} from 'fastjs-next';

// When no network
new FastjsAjax("https://demo.lalala.com/").get().catch((data) => {
    // data = FastjsError
    console.log(data);
});

// When server return error, like 404 500
new FastjsAjax("https://demo.lalala.com/iWillReturnAnObjectWithMsg").get().catch((data) => {
    // data = server return data
    console.log(data);
});
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
        ajax.get();
    }
});
ajax.get();
```

## Common Config

### timeout

Set `config.timeout` to set timeout.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    timeout: 1000
});
ajax.get();
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
ajax.get();
```

### wait

Set `config.wait` to set wait time.

When you send an ajax request, it will wait `config.wait` time to send.

If there is a new ajax request when it is waiting, it will cancel the old one and send the new one.

```javascript
import {FastjsAjax, selector} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    wait: 1000
});
selector("#btn").on("click", () => {
    ajax.get();
});

selector("#btn").el().click();
setTimeout(() => {
    selector("#btn").el().click();
    setTimeout(() => {
        selector("#btn").el().click();
    }, 500);
}, 500);
// It will only send 1 ajax request
```

### shutdown

Set `config.shutdown` to set shutdown or not.

If `config.shutdown` is `true`, if you already send an ajax request, it will not send again.

```javascript
import {FastjsAjax, selector} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    shutdown: true,
    callback: data => {
        console.log("Ajax success");
        ajax.get();
    }
});
ajax.get();
// It will only send 1 ajax request
```

### keepalive

:::warning Promise
It will only do one time `then()` or `catch()` when you're using Promise, you can use `config.callback` and `config.failed` to keepalive the ajax request.
:::

:::tip Keep Alive
Set `config.keepAlive` to `true` to keep alive.

When an ajax request is success or fail, it will automatically send again.
:::

Set `config.keepalive` to set keepalive or not.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    keepalive: true
}).get()
```

### keepaliveWait

Set `config.keepaliveWait` to set keepalive wait time.

When you set keepaliveWait, before send again, it will wait `config.keepaliveWait` time.

```javascript
import {FastjsAjax} from 'fastjs-next';

const ajax = new FastjsAjax("https://demo.lalala.com/", {}, {
    keepalive: true,
    keepaliveWait: 1000
}).get()
```