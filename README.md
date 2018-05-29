# VAMTIGER Bash
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

const url = 'https://some/https/url';

isRemoteUrl({ url })
    // .then(result => handleResult(result)) // result = false
    // .catch(handleError)
```