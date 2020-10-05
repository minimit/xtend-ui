import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center">

  <button type="button" class="btn btn-sm ${btnDefault()}">
    small
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    medium
  </button>

  <button type="button" class="btn btn-lg ${btnDefault()}">
    large
  </button>

</div>
`