import React from 'react'
import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const cardMd = require('components/snippets/classes').cardMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const cardWhite = require('components/snippets/classes').cardWhite
const iconX = require('components/snippets/icons').iconX

import DemoVanillaIframe from 'components/demo/demo-vanilla-iframe'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  container: true,
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3 items-center" data-xt-overlay="{ closeDeep: false, closeInside: false }">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    Unclosable overlay
  </button>

  <div class="xt-overlay">
    <div class="xt-backdrop xt-overlay-ui bg-black opacity-25"></div>
    <div class="xt-overlay-container max-w-3xl">
      <div class="xt-overlay-inner">

        <div class="xt-card rounded-md shadow-overlay ${cardWhite()}">
          <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">
            ${iconX()}
          </button>
          <div class="${cardMd()}">
            <div class="xt-h4 ">Lorem ipsum</div>
            <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>
`

class Page extends React.Component {
  render() {
    return <DemoVanillaIframe demo={demo} />
  }
}

export default Page