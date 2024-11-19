## Install

```
npm install rinney-test-tools
```

## Import

```js
const testTools = require('./rinney-test-tools')
```

## Date Format
```js
// to format date
const dateStr = testTools.dateFormat(new Date())

// result: 2024-11-07 20:00:04
console.log(dateStr)
```

## Escape HTML
```js
// HTML string to be escape
const htmlStr = '<h1 title="abc">This is H1 <span>123&nbsp;</span></h1>'

// escape HTML
const str = testTools.htmlEscape(htmlStr)

// result: &lt;h1 title=&quot;abc&quot;&gt;This is H1 &lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## Unescape HTML
```js
const str2 = testTools.htmlUnescape(str)
// result: <h1 title="abc">This is H1 <span>123&nbsp;</span></h1>
console.log(str2)
```

## License
ISC