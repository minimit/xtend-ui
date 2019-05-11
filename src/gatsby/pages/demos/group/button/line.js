import React from "react"

import DemoIframe from "components/demo-iframe"

const demo = {
  name: 'line',
  js: false,
  css: false,
  full: false
}

class Page extends React.Component {
  componentDidMount() {
    if (demo.js) {
      require("./" + demo.name + ".source.js")
    }
    if (demo.css) {
      require("./" + demo.name + ".source.less")
    }
  }

  render() {
    let htmlSource = `
      <div class="group">
        <div class="group_inner">
          <button type="button" class="btn btn--primary">
            <span>btn 1</span>
          </button>
        </div>
        <div class="group_inner">
          <button type="button" class="btn btn--primary-empty">
            <span>btn 2</span>
          </button>
        </div>
        <div class="group_inner">
          <button type="button" class="btn btn--secondary">
            <span>btn 3</span>
          </button>
        </div>
        <div class="group_inner">
          <button type="button" class="btn btn--secondary-empty">
            <span>btn 4</span>
          </button>
        </div>
      </div>
    `
    let jsSource = demo.js ? require("!!raw-loader!./" + demo.name + ".source.js").default : null
    let cssSource = demo.css ? require("!!raw-loader!./" + demo.name + ".source.less").default : null
    return (
      <DemoIframe demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}/>
    )
  }
}

export default Page
