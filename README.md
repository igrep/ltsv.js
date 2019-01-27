# ltsv.js

[![Build Status](https://travis-ci.org/sasaplus1/ltsv.js.svg?branch=master)](https://travis-ci.org/sasaplus1/ltsv.js)
[![npm version](https://badge.fury.io/js/ltsv.svg)](https://badge.fury.io/js/ltsv)
[![Try ltsv on RunKit](https://badge.runkitcdn.com/ltsv.svg)](https://npm.runkit.com/ltsv)
[![renovate](https://badges.renovateapi.com/github/sasaplus1/ltsv.js)](https://renovatebot.com)

[LTSV](http://ltsv.org/) parser, formatter, validator and TransformStream

## Installation

### npm

```console
$ npm install ltsv
```

## Usage

### node.js

```js
const ltsv = require('ltsv');
```

### browser

```html
<script src="ltsv.min.js"></script>
```

### Example

```js
ltsv.parse(
  'label1:value1\tlabel2:value2\n' +
  'label1:value1\tlabel2:value2\n' +
  'label1:value1\tlabel2:value2'
);
// [ { label1: 'value1', label2: 'value2' },
//   { label1: 'value1', label2: 'value2' },
//   { label1: 'value1', label2: 'value2' } ]

ltsv.parseLine('label1:value1\tlabel2:value2');
// { label1: 'value1', label2: 'value2' }
ltsv.parseLine('label1:value1\tlabel2:value2\n');
// { label1: 'value1', label2: 'value2' }
ltsv.parseLine('label1:value1\tlabel2:value2\r\n');
// { label1: 'value1', label2: 'value2' }

ltsv.format([
  { label1: 'value1', label2: 'value2' },
  { label1: 'value1', label2: 'value2' },
  { label1: 'value1', label2: 'value2' }
]);
// 'label1:value1\tlabel2:value2\nlabel1:value1\tlabel2:value2\nlabel1:value1\tlabel2:value2'

ltsv.format({ label1: 'value1', label2: 'value2' });
// 'label1:value1\tlabel2:value2'
```

```js
const fs = require('fs'),

const ltsv = require('ltsv'),

const stream = ltsv.createLtsvToJsonStream({
  encoding: 'utf8',
  obectMode: false,
  strict: false
});

// access.log:
// l1:v1\tl2:v2\n
// l1:v1\tl2:v2\n
// l1:v1\tl2:v2\n
fs.createReadStream('./access.log').pipe(stream).pipe(process.stdout);
// {"l1":"v1","l2":"v2"}{"l1":"v1","l2":"v2"}{"l1":"v1","l2":"v2"}
```

## Functions

see [docs](docs) or https://sasaplus1.github.io/ltsv.js

## License

The MIT license.
