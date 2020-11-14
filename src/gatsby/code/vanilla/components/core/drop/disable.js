import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const btnDefaultDrop = require('components/snippets/classes/btn-default-drop').default
const btnPrimaryDrop = require('components/snippets/classes/btn-primary-drop').default
const cardWhite = require('components/snippets/classes/card-white').default
const cardPrimary = require('components/snippets/classes/card-primary').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div class="demo--drop-disable" data-xt-drop>

    <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
      disable sm
    </button>

    <div class="drop">
      <div class="w-64 py-3 rounded-md shadow-drop ${cardWhite()}">
        <nav class="list flex-col">
          <a href="#" class="btn btn-sm ${btnDefaultDrop()}">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </a>
          <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
            Dolor sit
          </button>
          <div data-xt-drop>

            <button type="button" class="btn btn-sm ${btnDefaultDrop()}">
              Drop inner
            </button>

            <div class="drop drop-center drop-middle">
              <div class="w-64 py-3 rounded-md shadow-drop ${cardPrimary()}">
                <nav class="list flex-col">
                  <a href="#" class="btn btn-sm ${btnPrimaryDrop()}">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                  <button type="button" class="btn btn-sm ${btnPrimaryDrop()}">
                    Dolor sit
                  </button>
                  <button type="button" class="btn btn-sm ${btnPrimaryDrop()}">
                    Amet
                  </button>
                </nav>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </div>

  </div>

</div>
`
