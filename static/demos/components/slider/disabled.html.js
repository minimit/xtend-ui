const markupSlider = require('src/gatsby/templates/snippets/markup-slider').default
const indentString = require('indent-string')

const html = /* HTML */ `
  <div class="demo--slider-disable">
    <div
      class="xt-slider"
      data-xt-slider="{ drag: { wrap: true }, matches: { '(min-width: 768px)': { disabled: true } } }"
    >
      ${indentString(markupSlider(), 2)}
    </div>
  </div>
`

export const object = {
  html: html,
}