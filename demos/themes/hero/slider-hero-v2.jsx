import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import 'xtendui/src/mousefollow'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--slider-hero-v2-react" ref={ref}>
      <div className="xt-slider xt-slider-absolute bg-primary-500">
        <div className="xt-slides">
          <div className="xt-slide w-full">
            <div className="hero relative overflow-hidden">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-600 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="hero-content flex relative min-h-screen">
                  <a
                    href="/"
                    className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1. Lorem ipsum</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-cover absolute inset-0 pointer-events-none bg-gray-600 transform translate-x-full"></div>
          </div>

          <div className="xt-slide w-full">
            <div className="hero relative overflow-hidden">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-600 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="hero-content flex relative min-h-screen">
                  <a
                    href="/"
                    className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                    <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2. Dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
          </div>

          <div className="xt-slide w-full">
            <div className="hero relative overflow-hidden">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-600 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="hero-content flex relative min-h-screen">
                  <a
                    href="/"
                    className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                    <h2 className="xt-h1">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-cover absolute inset-0 pointer-events-none bg-gray-600 transform translate-x-full"></div>
          </div>

          <div className="xt-slide w-full">
            <div className="hero relative overflow-hidden">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-600 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="hero-content flex relative min-h-screen">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                    <h2 className="xt-h1">4. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a
                      href="/"
                      className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
          </div>

          <div className="xt-slide w-full">
            <div className="hero relative overflow-hidden">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-600 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                </div>
                <div className="hero-content flex relative min-h-screen">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                    <h2 className="xt-h1">5. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a
                      href="/"
                      className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-cover absolute inset-0 pointer-events-none bg-gray-600 transform translate-x-full"></div>
          </div>

          <div className="xt-slide w-full">
            <div className="hero relative overflow-hidden">
              <div className="hero-inner">
                <div className="xt-media-container bg-gray-600 w-full h-full absolute">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div className="hero-content flex relative min-h-screen">
                  <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:mr-0 max-w-2xl text-white xt-links-inverse text-center md:text-right">
                    <h2 className="xt-h1">6. Lorem ipsum dolor sit amet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                    <a
                      href="/"
                      className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                      Lorem ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
          </div>
        </div>

        <button
          type="button"
          className="hidden md:block cursor-none absolute z-above top-0 left-0 w-24 h-full group"
          data-xt-nav="-1"
          aria-label="Previous slide"
          data-xt-mousefollow>
          <div className="*** xt-mousefollow fixed *** text-white text-4xl transition-opacity opacity-0 in:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon transform transition-all duration-300 group-in:opacity-75 group-in:scale-75"
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
          </div>
        </button>

        <button
          type="button"
          className="hidden md:block cursor-none absolute z-above top-0 right-0 w-24 h-full group"
          data-xt-nav="1"
          aria-label="Next slide"
          data-xt-mousefollow>
          <div className="*** xt-mousefollow fixed *** text-white text-4xl transition-opacity opacity-0 in:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon transform transition-all duration-300 group-in:opacity-75 group-in:scale-75"
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
          </div>
        </button>

        <nav className="xt-slider-pagination hidden">
          <button type="button" className="xt-button hidden" data-xt-pag></button>
        </nav>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountSlider = mountSlider({ ref })
  const unmountSlide = mountSlide({ ref })

  // unmount

  return () => {
    unmountSlider()
    unmountSlide()
  }
}

/* mountSlider */

const mountSlider = ({ ref }) => {
  // vars

  const slider = ref.querySelector('.xt-slider')
  const dragEase = 'quart.out'
  let dragDistance
  let dragDuration

  const mediaZoom = 0.5
  const mediaTime = 1.5
  const mediaDelay = 0.25
  const mediaEase = 'expo.out'

  const contentX = 50

  // slider

  /***/
  let self = new Xt.Slider(slider, {
    duration: () => dragDuration * 1000,
    mode: 'absolute',
    loop: true,
  })
  /***/

  // dragposition (set internal dragPosition to resume animation mid dragging)

  const dragposition = () => {
    // dragDuration depending on distance
    dragDistance = Math.abs(self.detail.dragPosition - self.detail.dragFinal)
    dragDuration = self.initial || self.detail.instant ? 0 : Math.min(Math.log(1 + dragDistance / 125), 1.5)
    // dragPosition tween with main time and ease
    gsap.killTweensOf(self.detail)
    gsap.to(self.detail, {
      dragPosition: self.detail.dragFinal,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragposition.xt.slider', dragposition)

  // drag (set drag frame on drag and initial position on activation)

  const drag = () => {
    const tr = self.targets.filter(x => self.hasCurrent(x))[0]
    // cover
    const mediaCover = tr.querySelector('.hero-cover')
    const skew = self.detail.dragRatio < 0.5 ? 10 * self.detail.dragRatio : 10 * self.detail.dragRatioInverse
    gsap.killTweensOf(mediaCover)
    gsap.set(mediaCover, {
      x: `${100 * self.detail.dragRatioInverse * self.direction}%`,
      skewX: skew * self.direction,
    })
    // content
    const content = tr.querySelector('.hero-content')
    gsap.killTweensOf(content)
    gsap.set(content, {
      x: -contentX * self.detail.dragRatio * self.direction,
      opacity: 1 * self.detail.dragRatioInverse,
    })
  }

  self.dragger.addEventListener('drag.xt.slider', drag)

  // dragreset (set animation on drag reset, when dragging opposite position from initial dragging)

  const dragreset = () => {
    const tr = self.targets.filter(x => self.hasCurrent(x))[0]
    // cover
    const mediaCover = tr.querySelector('.hero-cover')
    gsap.killTweensOf(mediaCover)
    gsap.to(mediaCover, {
      x: `${-100 * self.direction}%`,
      skewX: 0,
      duration: dragDuration,
      ease: dragEase,
    })
    // content
    const content = tr.querySelector('.hero-content')
    gsap.killTweensOf(content)
    gsap.to(content, {
      x: 0,
      opacity: 1,
      duration: dragDuration,
      ease: dragEase,
    })
  }

  self.dragger.addEventListener('dragreset.xt.slider', dragreset)

  // on

  const on = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr) && !self.initial) {
      // mediaMask
      const mediaMask = tr.querySelector('.hero')
      gsap.killTweensOf(mediaMask)
      gsap.set(mediaMask, {
        x: `${100 * self.direction}%`,
      })
      gsap.to(mediaMask, {
        x: 0,
        duration: dragDuration,
        ease: dragEase,
      })
      const mediaMaskInner = mediaMask.querySelector('.hero-inner')
      gsap.killTweensOf(mediaMaskInner)
      gsap.set(mediaMaskInner, {
        x: `${-100 * self.direction}%`,
      })
      gsap.to(mediaMaskInner, {
        x: 0,
        duration: dragDuration,
        ease: dragEase,
      })
      // media
      const media = tr.querySelector('.xt-media')
      gsap.killTweensOf(media)
      gsap.set(media, {
        scale: 1 + mediaZoom,
      })
      gsap.to(media, {
        scale: 1,
        duration: mediaTime,
        ease: mediaEase,
        delay: mediaDelay,
      })
      // content
      const content = tr.querySelector('.hero-content')
      gsap.killTweensOf(content)
      gsap.set(content, {
        x: contentX * self.direction,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: dragDuration,
        ease: dragEase,
      })
      /***/
      // dragposition (set internal dragPosition to instant position after on)
      gsap.killTweensOf(self.detail)
      gsap.set(self.detail, {
        dragPosition: self.detail.dragFinal,
      })
      /***/
    }
  }

  self.object.addEventListener('on.xt.slider', on, true)

  // off

  const off = e => {
    const tr = e.target
    // check because of event propagation
    if (self.targets.includes(tr)) {
      // cover
      const mediaCover = tr.querySelector('.hero-cover')
      gsap.killTweensOf(mediaCover)
      if (!self.detail.instant) {
        gsap.set(mediaCover, {
          x: `${100 * self.direction}%`,
          skewX: 0,
        })
      }
      gsap.to(mediaCover, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      gsap
        .to(mediaCover, {
          skewX: 10 * self.direction,
          duration: dragDuration / 2,
          ease: dragEase,
        })
        .eventCallback('onComplete', () => {
          gsap.to(mediaCover, {
            skewX: 0,
            duration: dragDuration / 2,
            ease: dragEase,
          })
        })
      // mediaMask
      const mediaMask = tr.querySelector('.hero')
      gsap.killTweensOf(mediaMask)
      gsap.to(mediaMask, {
        x: `${-100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      const mediaMaskInner = mediaMask.querySelector('.hero-inner')
      gsap.killTweensOf(mediaMaskInner)
      gsap.to(mediaMaskInner, {
        x: `${100 * self.direction}%`,
        duration: dragDuration,
        ease: dragEase,
      })
      // content
      const content = tr.querySelector('.hero-content')
      gsap.killTweensOf(content)
      gsap.to(content, {
        x: -contentX * self.direction,
        opacity: 0,
        duration: dragDuration,
        ease: dragEase,
      })
    }
  }

  self.object.addEventListener('off.xt.slider', off, true)

  // unmount

  return () => {
    self.destroy()
    self = null
  }
}

/* mountSlide */

const mountSlide = ({ ref }) => {
  // vars

  const slides = ref.querySelectorAll('.xt-slide')

  for (const slide of slides) {
    // vars

    let links = slide.closest('a, button')
    links = links ? [links] : Array.from(slide.querySelectorAll('a, button')) // query inside
    if (!links.length) return
    links = links.filter(x => !x.parentElement.closest('a, button')) // filter nested
    const img = slide.querySelector('.xt-media')
    const imgOpacityIn = 0.75
    const imgOpacityOut = 1

    // enter

    const enter = () => {
      // img
      gsap.to(img, {
        opacity: imgOpacityIn,
        duration: 0.5,
        ease: 'quart.out',
      })
    }

    for (const link of links) {
      link.addEventListener('mouseenter', enter)
    }

    // enter

    const leave = () => {
      // img
      gsap.to(img, {
        opacity: imgOpacityOut,
        duration: 0.5,
        ease: 'quart.out',
        overwrite: true,
      })
    }

    for (const link of links) {
      link.addEventListener('mouseleave', leave)
    }
  }

  // unmount

  return () => {}
}