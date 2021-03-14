import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ navigation: '[data-xt-nav]' }">
          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 0
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 1
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 2
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 3
          </button>

          <button
            type="button"
            className="hidden md:block cursor-none z-above absolute top-0 left-0 w-24 h-full group"
            data-xt-nav="-1"
            aria-label="Previous slide"
            data-xt-mousefollow>
            <div className="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon transform transition-all group-active:opacity-75 group-active:scale-75" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </div>
          </button>

          <button
            type="button"
            className="hidden md:block cursor-none z-above absolute top-0 right-0 w-24 h-full group"
            data-xt-nav="1"
            aria-label="Next slide"
            data-xt-mousefollow>
            <div className="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon transform transition-all group-active:opacity-75 group-active:scale-75" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </button>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 0</div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 1</div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 2</div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">Target 3</div>
        </div>
      </div>
    )
  }
}

export default Demo
