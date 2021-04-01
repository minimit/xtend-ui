---
type: "Components"
category: "Layout"
parent: "Listing"
title: "Infinite Scroll"
description: "Automatic pagination activable on click or on scroll, with browser navigation support that loads only the current page."
date: "1900-10-10"
---

## Javascript

Import the **javascript** file with `import 'xtendui/src/infinitescroll'`.

Initialize automatically **within markup** with `[data-xt-infinitescroll="{ <options> }"]`.

Initialize with **javascript** with `new Xt.Infinitescroll(document.querySelector('#my-object'), {/* options */})`.

## Usage

Use this code to create a **infinite scroll**.

Remember to set a `options.get` variable for a **get request on current url** to load items. Also remember to set `options.max` number of pages.

[[noteDefault]]
| Check advanced feature [open this demo on a new page](/demos/components/listing/infinitescroll). You can see on page refresh and browser navigation that **the page is retained**.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="demos/components/listing/infinitescroll">
  </div>
</demo>

## Options

Here are the main **javascript options**.

Inside `elements.pagination:Query` you can use this strings that gets populated with variables:

- `xt-num` replaced with current page number
- `xt-tot` replaced with total pages number

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                    | `get:String`                          | `false`        | **url get** variable to use            |
| Option                    | `min:Number`                          | `1`        | Initial and minimum page number            |
| Option                    | `max:Number`                          | `'Infinity'`        | Maximum page number            |
| Option                    | `events.scrollUp:Boolean`                          | `true`        | Automatically activate on scroll up            |
| Option                    | `events.scrollDown:Boolean`                          | `true`        | Automatically activate on scroll down            |
| Option                    | `events.trigger:String`                          | `'click'`        | Event to trigger infinite scroll            |
| Option                    | `events.reset:String`                          | `'click'`        | Event to trigger infinite scroll reset            |
| Option                    | `elements.itemsContainer:Query`                          | `false`        | Object query for items container            |
| Option                    | `elements.item:Query`                          | `false`        | Items container query for items            |
| Option                    | `elements.scrollUp:Query`                          | `false`        | Object query for trigger elements when scrolling up            |
| Option                    | `elements.scrollDown:Query`                          | `false`        | Object query for trigger elements when scrolling down            |
| Option                    | `elements.spaceAdditional:Query`                          | `false`        | Object query for additional space when resuming pages            |
| Option                    | `elements.pagination:Query`                          | `false`        | Object query for pagination            |

</div>

## Listen

Listen to events.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                    | DOM Element                    | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Event                   | `populate.xt.infinitescroll`           | `object` | Replace event             |
| Event                   | `init.xt.infinitescroll`           | `object` | Init event             |
| Event                   | `destroy.xt.infinitescroll`           | `object` | Destroy event             |

</div>

## Properties

Access properties by getting component object.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">

|                         | Syntax                                   | Description                   |
| ----------------------- | ---------------------------------------- | ----------------------------- |
| Property                   | `options:Object`       | Final options             |
| Property                   | `object:Node`       | Object node             |
| Property                   | `current:Number`       | Current page             |
| Property                   | `elementsUp:Nodes`       | Trigger elements when scrolling up             |
| Property                   | `elementsDown:Nodes`       | Trigger elements when scrolling down             |
| Property                   | `itemsContainer:Node`       | Items container node             |
| Property                   | `spaceAdditionals:Node`       | Nodes for space additional             |
| Property                   | `paginations:Node`       | Paginations nodes             |

</div>