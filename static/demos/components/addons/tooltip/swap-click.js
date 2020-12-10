import { Xt } from 'xtendui'

Xt.mount.push({
  matches: '.demo--tooltip--swap-click',
  mount: object => {
    // vars

    const tooltip = object.parentNode.querySelector('.tooltip')

    // eventClick

    const eventClick = () => {
      // close tooltip
      tooltip.dispatchEvent(new CustomEvent('off.trigger.xt'))
      // swap tooltip
      let self = Xt.get('xt-tooltip', object)
      self.targets[0].style.display = 'none'
      self.targets[1].style.display = ''
      // open tooltip
      tooltip.dispatchEvent(new CustomEvent('on.trigger.xt'))
    }

    object.addEventListener('click', eventClick)

    // eventReset

    tooltip.addEventListener('off.xt', () => {
      // swap tooltip
      let self = Xt.get('xt-tooltip', object)
      if (self) {
        self.targets[0].style.display = ''
        self.targets[1].style.display = 'none'
      }
    })
  },
})