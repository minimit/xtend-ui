import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ classSkip: false }">
          <div data-xt-tooltip-element>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600 on:z-tooltip">
              backdrop
            </button>

            <div className="xt-tooltip p-2" data-xt-tooltip-target>
              <div className="*** xt-backdrop bg-black opacity-25 ***"></div>
              <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ on: 'click', off: 'click', classSkip: false }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600 on:z-tooltip"
            data-xt-tooltip-element>
            backdrop click
          </button>

          <div className="xt-tooltip p-2" data-xt-tooltip-target>
            <div className="*** xt-backdrop bg-black opacity-25 ***"></div>
            <div className="relative py-2 px-3.5 text-xs rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
              Lorem ipsum dolor sit amet
            </div>
            <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below"></div>
          </div>
        </div>
      </div>
    </div>
  )
}