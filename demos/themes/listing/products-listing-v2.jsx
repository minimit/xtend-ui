import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--products-listing-v2-react" ref={ref}>
      <div className="py-10">
        <div className="xt-slider pb-10">
          <div className="container">
            <div className="xt-h3 mb-8">Latest Products</div>

            <div className="xt-slides xt-row xt-row-4" data-xt-slider-dragger>
              <div className="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-lg font-semibold">-35%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-lg font-semibold">-40%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="xt-slide w-6/12 md:w-4/12" data-xt-slider-target>
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>

            <button
              type="button"
              className="xt-button absolute top-1/2 left-4 -mt-4 w-8 lg:w-12 h-8 lg:h-12 rounded-full text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-nav="-1"
              aria-label="Previous slide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon w-auto h-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <button
              type="button"
              className="xt-button absolute top-1/2 right-4 -mt-4 w-8 lg:w-12 h-8 lg:h-12 rounded-full text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
              data-xt-nav="1"
              aria-label="Next slide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon w-auto h-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <nav className="hidden" data-xt-slider-pagination>
              <button type="button" className="xt-button hidden" data-xt-slider-element></button>
            </nav>
          </div>
        </div>

        <div className="listing">
          <div className="container">
            <div className="xt-h2 mb-8">Category</div>

            <div className="xt-row xt-row-6">
              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-lg font-semibold">-35%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                    <div className="absolute top-0 left-0 m-4 py-2 px-4 bg-white bg-opacity-90">
                      <div className="xt-list xt-list-3 items-center flex-nowrap">
                        <div className="text-lg font-semibold">-40%</div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img className="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="#" className="*** listing-item *** block group">
                  <div className="*** xt-media-container *** bg-gray-500 xt-ratio-125 overflow-hidden">
                    <img
                      className="*** xt-media *** object-cover object-center"
                      src="/img-alt.svg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="*** xt-media-mask *** absolute top-0 lelft-0 w-full h-0 bg-white"></div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5 group-hover:text-primary-500">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountSlider = mountSlider({ ref })
  const unmountMedia = mountMedia({ ref })
  const unmountFade = mountFade({ ref })

  // unmount

  return () => {
    unmountSlider()
    unmountMedia()
    unmountFade()
  }
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const dragEase = 'quart.out'
  let distance
  let duration

  // init

  /***/
  const self = new Xt.Slider(slider, {
    align: 'left',
  })
  /***/

  // dragposition (set internal position to resume animation mid dragging)

  const dragposition = () => {
    // duration depending on distance
    distance = Math.abs(self.drag.position - self.drag.final)
    duration = self.initial || self.drag.instant ? 0 : Math.min(Math.log(1 + distance / 125), 1.5)
    // position animation to keep updated with animation
    gsap.killTweensOf(self.drag)
    gsap.to(self.drag, {
      position: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
    // dragger animation
    gsap.killTweensOf(self.dragger)
    gsap.to(self.dragger, {
      x: self.drag.final,
      duration: duration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // unmount

  return () => {}
}

/* mountMedia */

const mountMedia = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.listing-item')

  const mediaContainerScale = 0.015
  const mediaScale = 0.06
  const maskOpacityOn = 0.2
  const maskOpacityOff = 0.2
  const maskOpacityDone = 0.1

  // enter

  const enter = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, {
      scale: 1 + mediaContainerScale,
      duration: 0.5,
      ease: 'quart.out',
    })
    const mediaInner = tr.querySelector('.xt-media')
    gsap.to(mediaInner, {
      scale: 1 + mediaScale,
      duration: 1.5,
      ease: 'quart.out',
    })
    // mask
    const mask = tr.querySelector('.xt-media-mask')
    gsap.killTweensOf(mask)
    gsap.set(mask, {
      height: 0,
      y: media.offsetHeight,
      skewY: 0,
      opacity: maskOpacityOff,
    })
    gsap.to(mask, {
      /***/
      // fix to cover height: '150%'
      /***/
      height: '150%',
      y: 0,
      opacity: maskOpacityOn,
      duration: 0.5,
      ease: 'quart.out',
    })
    gsap
      .to(mask, {
        skewY: -10,
        duration: 0.5 / 2,
        ease: 'quart.out',
      })
      .eventCallback('onComplete', () => {
        gsap.to(mask, {
          skewY: 0,
          duration: 0.5 / 2,
          ease: 'quart.out',
        })
      })
    gsap.to(mask, {
      opacity: maskOpacityDone,
      duration: 0.75,
      ease: 'quart.out',
      delay: 0.5,
    })
  }

  for (const item of items) {
    item.addEventListener('mouseenter', enter)
  }

  // leave

  const leave = e => {
    const tr = e.target
    // media
    const media = tr.querySelector('.xt-media-container')
    gsap.to(media, {
      scale: 1,
      duration: 0.5,
      ease: 'quart.out',
    })
    const mediaInner = tr.querySelector('.xt-media')
    gsap.to(mediaInner, {
      scale: 1,
      duration: 1.5,
      ease: 'quart.out',
    })
    // mask
    const mask = tr.querySelector('.xt-media-mask')
    gsap.to(mask, {
      /***/
      // fix to cover height: '50%', y: '-100%'
      /***/
      height: '50%',
      y: '-100%',
      opacity: maskOpacityOff,
      duration: 0.5,
      ease: 'quart.out',
    })
    gsap
      .to(mask, {
        skewY: 10,
        duration: 0.5 / 2,
        ease: 'quart.out',
      })
      .eventCallback('onComplete', () => {
        gsap.to(mask, {
          skewY: 0,
          duration: 0.5 / 2,
          ease: 'quart.out',
        })
      })
  }

  for (const item of items) {
    item.addEventListener('mouseleave', leave)
  }

  // unmount

  return () => {}
}

/* mountFade */

const mountFade = ({ ref }) => {
  // init

  fade({ ref })

  // unmount

  return () => {}
}

/* fade */

const fade = ({ ref }) => {
  // vars

  const scrollY = 15
  const scrollScale = 1.04

  // check if already done for content added dinamically

  const items = ref.querySelectorAll('.listing-item:not(.faded)')
  for (const item of items) {
    item.classList.add('faded')
  }

  // fade

  /***/
  ScrollTrigger.batch(items, {
    once: true,
    start: 'top bottom-=10%',
    end: 'bottom top+=10%',
    onEnter: (batch, scrollTriggers) => {
      const direction = scrollTriggers[0].direction
      const y = direction > 0 ? -scrollY : scrollY
      gsap.killTweensOf(batch)
      gsap.set(batch, {
        y: y,
        scale: scrollScale,
      })
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'quart.out',
        stagger: index => {
          return Math.min(index * 0.15, 0.6)
        },
      })
    },
  })
  /***/
}