import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center justify-content--center overlay-class-html">
  <div data-xt-overlay="{ classHtml: 'overlay-class-html--top' }">
    <button type="button" class="btn btn--primary">
      default
    </button>
    <div class="overlay overlay--default">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>
          <div class="overlay-close xt-fixed--check">
            <div class="btn btn-close overlay-dismiss" aria-label="Close"></div>
          </div>
          <div class="overlay-content">
            <div class="h2">Lorem ipsum</div>
            <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div data-xt-overlay="{ classHtml: 'overlay-class-html--left' }">
    <button type="button" class="btn btn--primary">
      position left
    </button>
    <div class="overlay overlay--default overlay-position overlay-position--left">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>
          <div class="overlay-close xt-fixed--check">
            <div class="btn btn-close overlay-dismiss" aria-label="Close"></div>
          </div>
          <div class="overlay-content">
            <div class="h2">Lorem ipsum</div>
            <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    data-xt-overlay="{ classHtml: 'overlay-class-html--right' }">
    <button type="button" class="btn btn--primary">
      position right
    </button>
    <div class="overlay overlay--default overlay-position overlay-position--right">
      <div class="overlay-container">
        <div class="overlay-inner">
          <div class="overlay-design"></div>
          <div class="overlay-close xt-fixed--check">
            <div class="btn btn-close overlay-dismiss" aria-label="Close"></div>
          </div>
          <div class="overlay-content">
            <div class="h2">Lorem ipsum</div>
            <div class="h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
              ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.</p>
            <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
              justo.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
