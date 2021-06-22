import React from 'react'
import 'xtendui'
import 'xtendui/src/drop'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop' }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            asset
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-80 rounded-md shadow-drop text-black xt-links-default bg-white">
              <button
                type="button"
                className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="xt-media-container bg-gray-600 rounded-md xt-ratio-37.5">
                <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop' }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            asset and text
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-80 rounded-md shadow-drop text-black xt-links-default bg-white">
              <button
                type="button"
                className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="xt-media-container bg-gray-600 rounded-t-md xt-ratio-37.5">
                <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div className="*** text-base py-8 px-9 ***">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop' }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            text
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-80 rounded-md shadow-drop text-black xt-links-default bg-white">
              <div className="*** text-base py-8 px-9 rounded-t-md text-black xt-links-default bg-gray-200 ***">
                <div className="xt-h4">Lorem ipsum</div>
              </div>
              <div className="*** text-base py-8 px-9 bg-gray-300 ***">
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
              <div className="*** text-sm py-6 px-7 rounded-b-md text-white xt-links-inverse bg-primary-500 ***">
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}