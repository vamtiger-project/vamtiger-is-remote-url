# VAMTIGER Is Remote URL
[VAMTIGER Is Remote URL](https://github.com/vamtiger-project/vamtiger-is-remote-url) will return a boolean when evaluating a defined url string.

## Installation
[VAMTIGER Is Remote URL](https://github.com/vamtiger-project/vamtiger-is-remote-url) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-is-remote-url
```
or
```bash
yarn add vamtiger-is-remote-url
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Is Remote URL](https://github.com/vamtiger-project/vamtiger-is-remote-url):
```javascript
import isRemoteUrl from 'vamtiger-is-remote-url';
```
or
```javascript
const isRemoteUrl = require('vamtiger-is-remote-url').default;
```

[VAMTIGER Is Remote URL](https://github.com/vamtiger-project/vamtiger-is-remote-url) will return **true** for a valid remote url:
```javascript
const isRemoteUrl = require('vamtiger-is-remote-url').default;

const url = 'https://some/https/url';

isRemoteUrl({ url })
    // .then(result => handleResult(result)) // result = true
    // .catch(handleError)
```

Otherwise, it will return **false**:
```javascript
const isRemoteUrl = require('vamtiger-is-remote-url').default;

const url = 'some/relative/file/path.ext';

isRemoteUrl({ url })
    // .then(result => handleResult(result)) // result = false
    // .catch(handleError)
```

Since [VAMTIGER Is Remote URL](https://github.com/vamtiger-project/vamtiger-is-remote-url)  returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), the result can be more conveniently referenced within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const remoteUrl = await isRemoteUrl({ url });
}
```
