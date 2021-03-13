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
        <div className="xt-list xt-list-3 items-center">
          <a
            role="button"
            className="xt-badge text-xs py-2 px-3.5 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
          >
            {' '}
            Gray{' '}
          </a>

          <a
            role="button"
            className="xt-badge text-xs py-2 px-3.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-500 active:bg-primary-600 transition"
          >
            {' '}
            Primary{' '}
          </a>
        </div>
      </div>
    )
  }
}

export default Demo
