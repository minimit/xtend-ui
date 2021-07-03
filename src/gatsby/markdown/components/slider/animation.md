---
type: "Components"
category: "Interaction"
parent: "Slider"
title: "Animation"
date: "2010-10-09"
---

Check out [slider's themes](/themes/slider) for **advanced animations**.

## Drag Position

Each slider demo listens to the event `dragposition.xt.slider` and:

- it calculates the `dragDistance` and `dragDuration` depending on the distance of the **final position value** `self.detail.dragFinal` in respect to the position of the **current position value** `self.detail.dragPosition`.

- it updates the value of `self.detail.dragPosition` animating it with **that duration and your custom easing**.

- on **relative mode** animates `self.dragger` to the final position value `self.detail.dragFinal` with yout custom easing.

This is done in order to keep the **internal slider values updated** with your **custom slider animations**.

## Animation

Use **tailwind classes** to assign animation (e.g. [translate](https://tailwindcss.com/docs/translate), [transition-property](https://tailwindcss.com/docs/transition-property), [transition-duration](https://tailwindcss.com/docs/transition-duration)).

Use **tailwind variants** `on:`, `group-on:`, `in:`, `group-in:`, `out:`, `group-out:` to assign animations.

<demo>
  <demoinline src="demos/components/slider/animation">
  </demoinline>
</demo>

## Duration and Delay

See [toggle duration and delay](/components/toggle/animation#duration-and-delay) for more info.

#### Duration

[[notePrimary]]
| When you use animations you need to **specity the duration of the animation** for proper interactions.

You can set activation duration with **a number of milliseconds** or a **function executed each time** with arguments `{ current, total, el, self }`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `duration:Function|Number`                          | `false`        | Activation and Deactivation duration            |
| Option                  | `durationIn:Function|Number`                          | `false`        | Activation duration            |
| Option                  | `durationOut:Function|Number`                          | `false`        | Deactivation duration            |

</div>

You can also **assign duration on single nodes** with `data-xt-duration="Milliseconds"` or `data-xt-duration-in="Milliseconds"` and `data-xt-duration-out="Milliseconds"`

#### Delay

You can set activation delay with **a number of milliseconds** or a **function executed each time** with arguments `{ current, total, el, self }`.

You can also **assign delay on single nodes** with `data-xt-delay="Milliseconds"` or `data-xt-delay-in="Milliseconds"` and `data-xt-delay-out="Milliseconds"`

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `delay:Function|Number`                          | `false`        | Activation and Deactivation delay            |
| Option                  | `delayIn:Function|Number`                          | `false`        | Activation delay            |
| Option                  | `delayOut:Function|Number`                          | `false`        | Deactivation delay            |

</div>

## Queue

The queue option **controls sequential activations putting them in a queue**, or with `false` it executes activations instantly.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `queue:Object|false`                 | `false`     | Queue activations e.g.: `{ elements: false, targets: true, elementsInner: false, targetsInner: true }`          |

</div>

<demo>
  <demoinline src="demos/components/slider/animation-queue">
  </demoinline>
</demo>


## Css Animation

You can use also **css animations**, just add them with **class names** `.on`, `.in`, `.out`, `.dir-before` and `.dir-after`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                      | Name                          | Description                   |
| ----------------------- | ---------------------------- | ----------------------------- |
| Class                  | `.dir-before`       |  Class name for **before** direction activation            |
| Class                  | `.dir-after`       |  Class name for **after** direction activation            |
</div>

<demo>
  <demoinline src="demos/components/slider/animation-css">
  </demoinline>
</demo>

## Js Animation

You can use also **javascript animations**, just use [drop api](/components/slider/api).

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- |
| Property                   | `direction:Number`       | Direction `1` or `-1`              |

</div>

<demo>
  <demoinline src="demos/components/slider/animation-js">
  </demoinline>
</demo>

## Absolute

With **absolute mode** all animation of the slides are given by yout **custom gsap animations**.

You only have to listen to slider events [slider's api](/components/slider/api) and animate using the `self.detail.dragRatio`, `self.detail.dragRatioInverse`, `self.detail.isDrag` and `self.direction` values.

[[notePrimary]]
| On `on.xt.slider` and `off.xt.slider` you can **set starting and end animation values** with `gsap.set` only if `self.detail.isDrag` is `false`.

#### Cover

Here's an example of absolute animation with **cover and mask**, also on `on.xt.slider` we instantly change slide by setting `self.detail.dragPosition` to `self.detail.dragFinal`.

<demo>
  <demoinline src="demos/components/slider/animation-absolute-cover">
  </demoinline>
</demo>

#### Mask

Here's an example of absolute animation with **mask and incoming slide**, on `drag.xt.slider` we get and animate **incoming slide** depending on drag direction, also on `off.xt.slider` it animates the **old incoming slide** .

<demo>
  <demoinline src="demos/components/slider/animation-absolute-mask">
  </demoinline>
</demo>