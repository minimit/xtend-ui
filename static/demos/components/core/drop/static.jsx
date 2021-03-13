import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  render() {
    return (
      <div ref={this.ref}>
        <div className="relative py-4 px-6 bg-primary-500">
          <div data-xt-drop>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              static
            </button>

            <div className="xt-drop xt-drop-static">
              <div className="xt-card w-full rounded-md shadow-drop text-black xt-links-default bg-white">
                <div className="md:xt-card-group">
                  <div className="text-base py-8 px-9 md:w-7/12 bg-gray-300">
                    <div className="xt-h4">Lorem ipsum</div>
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                  </div>
                  <div className="md:w-5/12">
                    <div className="text-base py-8 px-9 bg-gray-300">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                        turpis.
                      </p>
                    </div>
                    <div className="text-base py-8 px-9">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                        turpis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="xt-media-container bg-gray-200 rounded-b-md xt-ratio-25">
                  <div className="xt-media-inner">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
