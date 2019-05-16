import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import Navigation from '../components/Navigation/navigation'
import Intergral from '../components/Intergral/intergral'
import Mine from '../components/Mine/mine'
import OrderCenter from '../components/OrderCenter/ordercenter'
import IntegralQuery from '../components/IntegralQuery/integralquery'
import MoneyQuery from '../components/MoneyQuery/moneyquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/intergral',
      name: 'Intergral',
      component: Intergral
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/ordercenter',
      name: 'OrderCenter',
      component: OrderCenter
    },
    {
      path: '/ordercenter',
      name: 'OrderCenter',
      component: OrderCenter
    },
    {
      path: '/integralquery',
      name: 'IntegralQuery',
      component: IntegralQuery
    },
    {
      path: '/moneyquery',
      name: 'MoneyQuery',
      component: MoneyQuery
    },
    {
      path:'*',
      redirect:'/home',
    }
  ]
})
