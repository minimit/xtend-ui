const markupSlider = require('src/gatsby/templates/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div>
    <div class="xt-slider" data-xt-slider="{ group: 0.8, matches: { '(min-width: 768px)': { group: 1 } } }">
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}