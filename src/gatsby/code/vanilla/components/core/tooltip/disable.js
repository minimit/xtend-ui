import path from 'path'
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="inline-block demo--tooltip-disable" data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

  Lorem ipsum <a href="#">dolor</a> sit amet

  <div class="tooltip">
    <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">

      <div data-xt-tooltip="{ elements: false, elementsInner: ':scope > a, :scope > button' }">

        Lorem ipsum <a href="#">dolor</a> sit amet

        <div class="tooltip">
          <div class="tooltip-md rounded shadow-tooltip ${cardBlack()}">
            Consectetur adipiscing elit
          </div>
        </div>

      </div>

    </div>
  </div>

</div>
`
