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
        <thead>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              #
            </th>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              Description
            </th>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="cursor-pointer group">
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              1
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              1200
            </td>
          </tr>
          <tr className="cursor-pointer group">
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              2
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              Dolor sit amet
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              200
            </td>
          </tr>
          <tr className="cursor-pointer group">
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              3
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              Consectetur adipiscing elit
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              2400
            </td>
          </tr>
          <tr className="cursor-pointer group">
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              4
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              Dolor sit amet
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border transition group-hover:bg-gray-300 group-active:bg-gray-400">
              200
            </td>
          </tr>
        </tbody>
      </div>
    )
  }
}

export default Demo
