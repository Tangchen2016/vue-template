import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    }
  ]
}]
