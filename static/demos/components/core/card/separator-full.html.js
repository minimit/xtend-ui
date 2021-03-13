const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-row xt-row-6">
      <div class="w-full">
        <div class="xt-card rounded-md ${classes.cardDefaultFull()}">
          <div class="md:xt-card-group">
            <div class="md:w-7/12 pb-6 md:pb-0 md:pr-6">
              <div class="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div class="border-t md:w-5/12 md:border-t-0 md:border-l border-solid border-gray-500">
              <div class="text-sm py-6 md:p-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                  turpis.
                </p>
              </div>
              <div class="pt-6 md:p-8 border-t border-solid border-gray-500">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                  turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
