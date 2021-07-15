import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center justify-center">
        <div className="xt-card rounded-md text-black xt-links-default bg-gray-100">
          <div className="py-6 px-7 text-sm">
            <div className="xt-h5">Small</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 *** w-1 right-auto ***">
              <span className="block absolute bg-current opacity-25 w-full h-full *** left-0 ***"></span>
              <span className="block absolute bg-current *** w-full left-0 animate-xt-filler-y ***"></span>
            </span>
          </span>
        </div>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Lorem ipsum
          <span className="xt-loader absolute inset-0 rounded-inherit overflow-hidden">
            <span className="xt-filler absolute inset-0 m-auto text-primary-500 *** w-1 right-auto ***">
              <span className="block absolute bg-current opacity-25 w-full h-full *** left-0 ***"></span>
              <span className="block absolute bg-current *** w-full left-0 animate-xt-filler-y ***"></span>
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}