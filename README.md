# umi-plugin-tongji

[![NPM version](https://img.shields.io/npm/v/umi-plugin-tongji.svg?style=flat)](https://npmjs.org/package/umi-plugin-tongji)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-tongji.svg?style=flat)](https://npmjs.org/package/umi-plugin-tongji)

baidu tongji

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-tongji', {
       code: '5a66cxxxxxxxxxx9e13',
      judge: ()=>true // true or false
    }],
  ],
}
```

## Code

e.g `hm.src = "https://hm.baidu.com/hm.js?5a66c03cxxxxxx554f2b9e13";`
code is `5a66c03cxxxxxx554f2b9e13`

## LICENSE

MIT
