
<h1 align="center">ð å°æ¡åç¨± ð</h1>
<p align="center">
    <img src="cover.png" alt="Logo">
</p>

### ç°¡ç¥èªªæ
![last commit][last-commit]
[![node version][node-version]][node-url]

## ð å®è£ä¾è³´

å®è£ä¾è³´æå ±é¯ï¼å»ºè­°ä½¿ç¨yarn

1. å®è£yarn
```sh
npm install -g yarn
```
2. å®è£ä¾è³´
```sh
npx yarn
```
## âï¸ æä»¤

éç¼éè¡:

```sh
npm run dev
```

å»ºç½®:

```sh
npm run build:prod
```

## ð¨ ä½¿ç¨æ¸åç¯ä¾

éæ¯ä½¿ç¨èªªææå­
```js
let rootVue = new Vue({
  router,
  store,
  render: h => h(App),
})
```

_æé«æå­ç¯ä¾ è©³ç´°èªªæèµ·è³[é£çµæå­][wiki]_

## ð·ï¸ åè¡¨ç¯ä¾

æªå | ç¨é            
---:| ---                
`cover.png` | å°é¢å
`README.md` | readmeæª
`å¶ä»` | ä¸è¦é¤¨
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## ðï¸ æªæ¡çµæ§

```bash
âââ mock                       # è³æå¤¾
âââ public                     # è³æå¤¾
â   âââ favicon.ico            # æªæ¡
â   âââ manifest.json          # æªæ¡
âÂ Â  âââ index.html             # æªæ¡
âââ src                        # è³æå¤¾
âÂ Â  âââ api                    # æªæ¡
âÂ Â  âââ assets                 # æªæ¡
âââ tests                      # è³æå¤¾
âââ .circleci/                 # è³æå¤¾
âââ .browserslistrc            # æªæ¡
```

## ð å¶ä»èªªæ

Your Name â [@YourTwitter](https://twitter.com/dbader_org) â YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.
> è£å [https://github.com/yourname/github-link](https://github.com/dbader/)



## ð æ¸å­åè¡¨ç¯ä¾

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[last-commit]: https://img.shields.io/github/last-commit/howard-richwhole/readme-template
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[node-version]: https://img.shields.io/badge/node-10.x-red?style=flat-square
[node-url]: https://nodejs.org/
[wiki]: https://github.com/yourname/yourproject/wiki
