import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

export const BRAND_COLOR = '#b58900'

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      color: BRAND_COLOR,
    },
    'a:hover,a:active': {
      color: '#d3a000',
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale