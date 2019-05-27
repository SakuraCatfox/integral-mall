import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import Navigation from '../components/Navigation/navigation'
import Intergral from '../components/Intergral/intergral'
import Mine from '../components/Mine/mine'
import OrderCenter from '../components/OrderCenter/ordercenter'
import IntegralQuery from '../components/IntegralQuery/integralquery'
import MoneyQuery from '../components/MoneyQuery/moneyquery'
import ProductDetails from '../components/ProductDetails/productdetails'
import Tap from '../common/Tap/Tap'
import ExChange from '../components/ExChange/exchange'
import Order from '../components/Order/Order'
import Set from '../components/Set/set'
import ChangeName from '../components/ChangName/changename'
import ChangeLoginPassword from '../components/ChangeLoginPassword/changeloginpassword'
import ChangeTradPassword from '../components/ChangeTradPassword/changetradpassword'
import Ress from '../components/Ress/ress'
import AddAddress from '../components/AddAddress/addaddress'

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
      path: '/test',
      name: 'test',
      component: Tap
    },
    {
      path:'/productdetails/:id',
      name:'productdetails',
      component:ProductDetails
    },
    {
      path:'/exchange/:id',
      name:'exchange',
      component:ExChange
    },
    {
      path:'/order/:id',
      name:'order',
      component:Order
    },
    {
      path:'/set',
      name:'set',
      component:Set
    },
    {
      path:'/changename',
      name:'changename',
      component:ChangeName
    },
    {
      path:'/changeloginpassword',
      name:'changeloginpassword',
      component:ChangeLoginPassword
    },
    {
      path:'/ress',
      name:'ress',
      component:Ress
    },
    {
      path:'/changetradpassword',
      name:'changetradpassword',
      component:ChangeTradPassword
    },
    {
      path:'/addaddress',
      name:'addaddress',
      component:AddAddress
    },
    {
      path:'*',
      redirect:'/home',
    }
  ]
})
