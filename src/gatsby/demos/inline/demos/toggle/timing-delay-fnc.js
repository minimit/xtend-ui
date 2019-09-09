import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo--toggle--timing-delay-fnc">
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn" data-xt-group="0">
    <span>Group 0</span>
  </button>
  <button type="button" class="btn" data-xt-group="1">
    <span>Group 1</span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0a
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1a
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0b
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1b
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0c
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1c
    </div>
  </div>
</div>

<br>

<div class="list list-space--small align-items--center demo--toggle--timing-delay-fnc--hover">
  <button type="button" class="btn">
    <span>Toggle 0</span>
  </button>
  <button type="button" class="btn" data-xt-group="0">
    <span>Group 0</span>
  </button>
  <button type="button" class="btn" data-xt-group="1">
    <span>Group 1</span>
  </button>
  <div class="alert toggle--block">
    <div class="alert_content">
      Target 0
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0a
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1a
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0b
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1b
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="0">
    <div class="alert_content">
      Group 0c
    </div>
  </div>
  <div class="alert toggle--block" data-xt-group="1">
    <div class="alert_content">
      Group 1c
    </div>
  </div>
</div>
`
