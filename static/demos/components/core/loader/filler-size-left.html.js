const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center justify-center">
      <div class="xt-card rounded-md ${classes.cardDefault()}">
        <div class="${classes.cardSm()}">
          <div class="xt-h5">Small</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500 w-1 right-auto">
            <span class="absolute bg-current opacity-25 w-full h-full left-0"></span>
            <span class="absolute bg-current w-full left-0 animate-xt-filler-y"></span>
          </span>
        </span>
      </div>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Lorem ipsum
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500 w-1 right-auto">
            <span class="absolute bg-current opacity-25 w-full h-full left-0"></span>
            <span class="absolute bg-current w-full left-0 animate-xt-filler-y"></span>
          </span>
        </span>
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
