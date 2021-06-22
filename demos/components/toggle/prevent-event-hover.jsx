import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div
        className="xt-list xt-list-3 items-center"
        data-xt-toggle="{ elements: ':scope > .xt-button', targets: ':scope > .xt-toggle', min: 1, on: 'mouseenter', off: 'mouseleave', preventEvent: true }">
        <a
          href="#toggle--prevent-event-1-hover"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 1 hover
        </a>

        <a
          href="#toggle--prevent-event-2-hover"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Toggle 2 hover
        </a>

        <div className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 1 hover
        </div>

        <div className="xt-card *** xt-toggle *** rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
          Target 2 hover
        </div>
      </div>
    </div>
  )
}