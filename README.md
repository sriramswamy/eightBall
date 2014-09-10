# eightBall

> Get 8-ball predictions

The predictions itself is just a [JSON file](predictions.json) and can be used wherever.


## Install

```sh
$ npm install --save eightBall
```


## Usage

```js
var predict = require('eightBall');

predict();
//=> Without a doubt

predict();
//=> Ask again later

predict.predictions;
// ['Without a doubt', 'Ask again later', ...]
```

## CLI

```sh
$ npm install --global eightBall
```

```sh
$ eightBall --help

Example
  $ eightBall
  Without a doubt
```
