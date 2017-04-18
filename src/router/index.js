import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const children = r => require.ensure([], () => r(require('../pages/children')), 'children')
const marquee = r => require.ensure([], () => r(require('../pages/marquee')), 'marquee')


export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: home
  }, {
    path: '/children',
    component: children
  }, {
    path: '/marquee',
    component: marquee
  }]
}]
