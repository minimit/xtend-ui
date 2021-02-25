---
type: "Hidden"
category: "Hidden"
parent: "Tests"
title: "Tests"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Disabled

Test initial position.

Test no interactions.

<demo>
  <demovanilla src="vanilla/components/core/slider/disable">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/disable">
  </demovanilla>
  <demovanilla src="vanilla/components/core/overlay/disable">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/disable">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/disable">
  </demovanilla>
  <demovanilla src="vanilla/components/core/card/disable">
  </demovanilla>
</demo>

## Matches

Test matches functionality on mobile/desktop.

Test overlay open on mobile > resize desktop is disabled.

Test overlay open nested should close one by one clicking on close.

<demo>
  <demovanilla src="vanilla/components/core/slider/matches">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/matches">
  </demovanilla>
  <demovanilla src="vanilla/components/core/overlay/matches">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/matches">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/matches">
  </demovanilla>
</demo>

## Animation

Test direction and queue timing.

<demo>
  <demovanilla src="vanilla/components/core/toggle/animation-css-multiple">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/animation-css-multiple">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/animation-css-multiple">
  </demovanilla>
</demo>

<demo>
  <demovanilla src="vanilla/components/core/toggle/animation-js-multiple">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/animation-js-multiple">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/animation-js-multiple">
  </demovanilla>
</demo>

@TODO put queue false demos

## Toggle

Test auto.

<demo>
  <demovanilla src="vanilla/components/core/toggle/auto">
  </demovanilla>
</demo>

Test toggle mouse should not close when clicking opened elements.

Test drop mouse should not close when going over targets.

Test tooltip click should close when clicking opened elements.

<demo>
  <demovanilla src="vanilla/components/core/toggle/event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/drop/event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/event">
  </demovanilla>
</demo>

Test prevent event.

<demo>
  <demovanilla src="vanilla/components/core/toggle/prevent-event">
  </demovanilla>
  <demovanilla src="vanilla/components/core/toggle/prevent-event-hover">
  </demovanilla>
</demo>

Test backdrop z-index and arrow z-index.

<demo>
  <demovanilla src="vanilla/components/core/drop/backdrop">
  </demovanilla>
  <demovanilla src="vanilla/components/core/tooltip/backdrop">
  </demovanilla>
</demo>

## Slider

Test contain grouping and position.

<demo>
  <demovanilla src="vanilla/components/core/slider/wrap-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/wrap-left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/wrap-right">
  </demovanilla>
</demo>

Test wrap activation on drag.

Test when not wrapping if active is not first or last.

<demo>
  <demovanilla src="vanilla/components/core/slider/wrap-center">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/wrap-left">
  </demovanilla>
  <demovanilla src="vanilla/components/core/slider/wrap-right">
  </demovanilla>
</demo>

## Event Methods

Test add and remove.

Test change > reinit > change > restart.

Test destroy no interactions.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/slider/events-methods">
  </div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/toggle/events-methods">
  </div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/overlay/events-methods">
  </div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/drop/events-methods">
  </div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/core/tooltip/events-methods">
  </div>
</demo>

## Addons

Test scroll position.

Test activation classes on scroll.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/components/addons/navigation/scrolltoanchor">
  </div>
</demo>

Test scroll position.

Test wrap.

<demo>
  <demovanilla src="vanilla/components/addons/slider/automaticscroll">
  </demovanilla>
</demo>

## Themes

Test move over other and then target should not change.

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/themes/navigation/menu-navigation-v1">
  </div>
</demo>

<demo>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/themes/hero/slider-hero-v2">
  </div>
  <div class="gatsby_demo_item xt-toggle" data-iframe="iframe/themes/listing/products-listing-v1">
  </div>
</demo>