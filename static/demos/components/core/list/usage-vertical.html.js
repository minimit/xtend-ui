const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <nav class="xt-list xt-list-3 flex-col">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Lorem Ipsum
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Dolor sit
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">Amet</button>
    </nav>
  </div>
`

export const object = {
  html: html,
}
