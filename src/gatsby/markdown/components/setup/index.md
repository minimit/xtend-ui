---
type: "Components"
category: "Introduction"
parent: "Setup"
title: "Setup"
description: "Installation instructions to get Xtend UI up and running."
date: "2050-09-10"
---

If you want we have some boilerplate projects to start a project all ready to go! Check out [xtendui-boilerplate](https://github.com/minimit/xtendui-boilerplate).

## Installation

Install **xtendui**.

```sh
npm install xtendui@beta --save
```

## Css

Install **tailwind**, **xtendui**, **postcss import**, **postcss nested**.

```sh
npm install tailwindcss@2 xtendui --save
npm install postcss postcss-import autoprefixer cssnano --save-dev
```

Then in `postcss.config.js` set up compilation.

```jsx
module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss/nesting'), require('tailwindcss'), require('autoprefixer'), require('cssnano')],
};
```

Create a `tailwind.config.js` and add **xtendui preset**, with this purge configuration.

```jsx
module.exports = {
  mode: 'jit',
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'),
  ],
  purge: {
    // put other purge content e.g.: './src/**/*.css', './src/**/*.js'
    content: ['./node_modules/xtendui/src/*[!.css].js'],
    options: {
      safelist: {
        greedy: [
          // popperjs
          /^data-popper-/,
       ],
      },
    },
  },
}
```

Then you can use css with tailwind.

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "./custom.css"; /* custom css here */

@import "tailwindcss/utilities";
```

More info in Tailwind docs [tailwind postcss](https://tailwindcss.com/docs/using-with-preprocessors), [tailwind theme](https://tailwindcss.com/docs/theme).

#### Customization

You can [customize preset or theme](/components/preset#customization).

## Javascript

You can import the **components you need** as described in the demos.

```jsx
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
```

#### Gsap

This library uses [gsap](https://github.com/greensock/GSAP) for javascript animations.

```sh
npm install gsap@3 --save
```

#### Polyfill

You need to install [@babel/core](https://www.npmjs.com/package/@babel/core), [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env).

```sh
npm install @babel/core @babel/preset-env --save-dev
```

Then in the root of your project set up polyfills with [babel.config.js](https://github.com/minimit/xtendui/blob/beta/babel.config.js) and [.browserslistrc](https://github.com/minimit/xtendui/blob/beta/.browserslistrc).

## Boilerplate

Add to the `body` the class `xt-body` to setup [animations global styles](/components/animation#global-styles) and [layout global styles](/components/layout#global-styles).

Add to the `body` the class `xt-links-default` or `xt-links-inverse` to have [link global styles](/components/link#global-styles).

Add this javascript to setup [animations javascript](/components/animation#javascript).

```js
import { Xt } from 'xtendui'
import gsap from 'gsap'

/* animation */

gsap.config({ force3D: false }) // smoother pixels animations

// accessibility

if (matchMedia('(prefers-reduced-motion: reduce), (update: slow)').matches) {
  // instant animations
  gsap.globalTimeline.timeScale(1000)
  // instant interactions
  Xt.durationTimescale = 1000
  // double auto time
  Xt.autoTimescale = 0.5
}
```

Add this javascript to setup [scroll fixes](/components/scroll#fixes).

```js
import { Xt } from 'xtendui'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/* ScrollToPlugin fix stop scroll animation on user interaction */

const stopScrolling = () => {
  gsap.killTweensOf(document.scrollingElement)
}

addEventListener('touchstart', stopScrolling)
addEventListener('wheel', stopScrolling)

/* ScrollTrigger fix Xt.mount inside pin items and no refresh on vertical resize */

ScrollTrigger.config({
  // removed resize we trigger it manually
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
})

addEventListener('resize', e => {
  Xt.eventDelay({
    event: e,
    prefix: 'xtScrollTriggerRefresh',
    func: () => {
      ScrollTrigger.refresh()
    },
  })
})

/* ScrollTrigger fix pin items with Xt.mount */

ScrollTrigger.addEventListener('refresh', () => {
  const stickys = document.querySelectorAll('.xt-sticky')
  for (const sticky of stickys) {
    sticky.classList.add('xt-ignore')
  }
  requestAnimationFrame(() => {
    for (const sticky of stickys) {
      sticky.classList.remove('xt-ignore')
    }
  })
})
```

## Unsupported browsers

If you want to show a warning on unsupported browser you can use [browser update](https://browser-update.org/) and target exactly [supported browsers](https://github.com/minimit/xtendui/blob/beta/.browserslistrc).

```html
  <script>
    // put at the end of body tag https://browser-update.org/
    var $buoop = {required:{e:79,f:53,o:44,s:11,c:57},api:2021.03 };
    function $buo_f(){
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
    };
    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
```

## CDN

If you need to do a **fast installation** of css and js use [xtendui CDN](https://unpkg.com/xtendui@beta/), the css and js are inside the `dist/` folder.

The CDN `dist/` files are large because they include tailwindcss and all components and polyfills, **it's not representative of the sizes** you see when including Xtend UI as part of your build process.

Please note that many of the features that make Xtend UI great **are not available without incorporating Xtend UI into your build process**.