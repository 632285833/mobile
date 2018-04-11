import '../docs/scss/main.scss'
import modal from './components/modal'
import replyBar from './components/replyBar'
import toolbar from './components/toolbar'
import moreButton from './components/moreButton'
import uButton from './components/uButton'
import ripple from './components/ripple'
import footerBar from './components/footerBar'
import navBar from './components/navBar'
import uCheckbox from './components/uCheckbox'
import numSpinner from './components/numSpinner'
import uSVG from './components/uSVG'
import page from './components/page'


const Fui = {
  modal,
  replyBar,
  toolbar,
  moreButton,
  ripple,
  uButton,
  footerBar,
  navBar,
  uCheckbox,
  numSpinner,
  uSVG,
  page
}
Fui.install = (Vue) => {
  for (const componentName in Fui) {
    const component = Fui[componentName]
    if (component && componentName !== 'install') {
      Vue.component(component.name, component)
    }
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default Fui

