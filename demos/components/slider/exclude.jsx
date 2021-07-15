import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/slider'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--slider-exclude-react" ref={ref}>
      <div className="*** xt-list *** xt-list-3 items-center p-4 pb-0 md:p-6 md:pb-0 lg:p-8 lg:pb-0">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
          data-xt-toggle-element
          data-xt-group="group0">
          Group0
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200 *** on ***"
          data-xt-toggle-element
          data-xt-group="group1">
          Group1
        </button>
      </div>

      <div className="xt-slider">
        <div className="p-4 md:p-6 lg:p-8">
          <div className="xt-slides xt-row xt-row-4" data-xt-slider-dragger>
            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group1">
                <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                  <div className="xt-h4">1</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group0,group1">
                <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                  <div className="xt-h4">2</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group0">
                <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                  <div className="xt-h4">3</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-full group" data-xt-slider-target>
              <div className="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group1">
                <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                  <div className="xt-h4">4</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-8/12 sm:w-6/12 md:w-5/12 group" data-xt-slider-target>
              <div className="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group0">
                <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                  <div className="xt-h4">5</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group0,group1">
                <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                  <div className="xt-h4">6</div>
                </div>
              </div>
            </div>

            <div className="xt-slide w-6/12 sm:w-4/12 md:w-3/12 group" data-xt-slider-target>
              <div className="off:hidden out:pointer-events-none" data-xt-toggle-target data-xt-group="group1">
                <div className="xt-card rounded-md p-8 text-base text-center text-black xt-links-default bg-gray-100 border-2 border-transparent group-in:border-gray-200 transition">
                  <div className="xt-h4">7</div>
                </div>
              </div>
            </div>
          </div>

          <nav className="w-full xt-list xt-list-2 pt-4 items-center justify-center" data-xt-slider-pagination>
            <button
              type="button"
              className="xt-button p-2 min-w-[1.25rem] h-5 rounded-full text-3xs text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 hover:bg-gray-200 on:px-4 active:bg-gray-300 on:bg-gray-200 transition-all hidden"
              data-xt-slider-element
              title="Slide xt-num"></button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountToggle = mountToggle({ ref })
  const unmountSlider = mountSlider({ ref })

  // unmount

  return () => {
    unmountToggle()
    unmountSlider()
  }
}

/* mountToggle */

const mountToggle = ({ ref }) => {
  // vars

  const toggle = ref
  const slider = ref.querySelector('.xt-slider')

  // init

  /***/
  let self = new Xt.Toggle(toggle, {
    min: 1,
  })
  /***/

  // change

  const change = () => {
    // deactivate slides
    for (const tr of self.targets.filter(x => !self.hasCurrent({ el: x }))) {
      const slide = tr.closest('.xt-slide')
      if (slide) {
        slide.classList.add('hidden')
      }
    }
    // activate slides
    for (const tr of self.targets.filter(x => self.hasCurrent({ el: x }))) {
      const slide = tr.closest('.xt-slide')
      if (slide) {
        slide.classList.remove('hidden')
      }
    }
    // reinit slides
    const selfSlider = Xt.get({ name: 'xt-slider', el: slider })
    if (selfSlider) {
      selfSlider.reinit({ save: false })
    }
  }

  for (const el of self.elements) {
    el.addEventListener('on.xt.toggle', change)
  }

  // unmount

  return () => {
    self.destroy()
    self = null
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
  let self = new Xt.Slider(slider, {
    exclude: '.hidden',
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

  return () => {
    self.destroy()
    self = null
  }
}