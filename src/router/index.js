import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const thumb = r => require.ensure([], () => r(require('../pages/thumb')), 'thumb')
const marquee = r => require.ensure([], () => r(require('../pages/marquee')), 'marquee')


export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: home
  }, {
    path: '/thumb',
    component: thumb
  }, {
    path: '/marquee',
    component: marquee
  }]
}]
