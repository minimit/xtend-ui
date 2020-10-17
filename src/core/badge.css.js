const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = px => `${round(px / 16)}rem`

module.exports = {
  components: theme => ({
    '.badge': {
      // setup
      display: 'inline-block',
      verticalAlign: 'middle',
      // styles
      fontFamily: theme('fontFamily.sans').toString(),
      fontWeight: theme('fontWeight.semibold'),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.wider'),
      textTransform: 'uppercase',
      // animation
      'a&, button&, label&': {
        zIndex: theme('zIndex.base'),
        transitionProperty: 'all',
        transitionDuration: theme('transitionDuration.500'),
        transitionTimingFunction: theme('transitionTimingFunction.out'),
        '&:hover, &:active, &.active': {
          zIndex: theme('zIndex.active'),
          transitionTimingFunction: theme('transitionTimingFunction.in'),
        },
      },
    },
    '.badge-sm': {
      // styles
      padding: `${rem(6)} ${rem(10)}`,
      fontSize: rem(10),
    },
    '.badge-md': {
      // styles
      padding: `${rem(8)} ${rem(14)}`,
      fontSize: rem(12),
    },
    '.badge-lg': {
      // styles
      padding: `${rem(10)} ${rem(18)}`,
      fontSize: rem(14),
    },
  }),
}
