import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardDefaultOverlay = require('components/snippets/classes/card-default-overlay').default
const iconX = require('components/snippets/icons').iconX
const iconPackage = require('components/snippets/icons').iconPackage

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-overlay>

    <button type="button" class="btn btn-md ${btnPrimary()}">
      list
    </button>

    <div class="overlay">
      <div class="overlay-container max-w-5xl">
        <div class="overlay-inner">

          <div class="card ${cardDefaultOverlay()}">
            <div class="btn btn-close p-5 text-2xl" aria-label="Close">
              ${iconX()}
            </div>
            <div class="card-block py-8 px-9">
              <div class="list list-3 flex-no-wrap items-baseline">
                <div>
                  ${iconPackage({ classes: 'icon-lg text-2xl' })}
                </div>
                <div>
                  <div class="h4">Lorem ipsum</div>
                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

</div>
`
