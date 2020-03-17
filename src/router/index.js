import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import New_holistic_analysis from '@/view/analysis/new_holistic_analysis'
import Newyard_analysis from '@/view/analysis/newyard_analysis'
import Holistic_analysis from '@/view/analysis/holistic_analysis'
import Operation_analysis from '@/view/analysis/operation_analysis'
import Car_administration from '@/view/administration/car_administration'
import Car_administrations from '@/view/administration/car_administrations'
import One_administration from '@/view/administration/one_administration'
import One_administration_edit from '@/view/administration/one_administration_edit'
import Induce_administration from '@/view/administration/induce_administration'
import Induce_administration_add from '@/view/administration/induce_administration_add'
import Noauthority from '@/view/administration/noauthority'
import Car_administration_view from '@/view/administration/car_administration_view'
import Car_administration_edit from '@/view/administration/car_administration_edit'
import Car_administration_excel from '@/view/administration/car_administration_excel'
import Account_Jurisdiction from '@/view/Jurisdiction/account_Jurisdiction'
import Account_Jurisdiction_add from '@/view/Jurisdiction/account_Jurisdiction_add'
import Role_Jurisdiction from '@/view/Jurisdiction/role_Jurisdiction'
import Role_Jurisdiction_view from '@/view/Jurisdiction/role_Jurisdiction_view'
import Menu_Jurisdiction from '@/view/Jurisdiction/menu_Jurisdiction'
import Equipment_Journal from '@/view/Journal/equipment_Journal'
import System_Journal from '@/view/Journal/system_Journal'
import Operation_Journal from '@/view/Journal/operation_Journal'
import Operation_Journal_add from '@/view/Journal/operation_Journal_add'
import Operation_record from '@/view/Journal/operation_record'
import Operation_record_details from '@/view/Journal/operation_record_details'
import System_setup from '@/view/Setup/system_setup'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      redirect: '/',
      component: Login
    },
    {
      path: '*',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [{
          path: '/new_holistic_analysis',
          component: New_holistic_analysis
        }, {
          path: '/newyard_analysis',
          component: Newyard_analysis
        },
        {
          path: '/holistic_analysis',
          component: Holistic_analysis
        },
        {
          path: '/operation_analysis',
          component: Operation_analysis
        },
        {
          path: '/car_administration',
          component: Car_administration
        },
        {
          path: '/car_administrations',
          component: Car_administrations
        },
        {
          path: '/one_administration',
          component: One_administration
        },
        {
          path: '/one_administration_edit',
          component: One_administration_edit
        },
        {
          path: '/induce_administration',
          component: Induce_administration
        },
        {
          path: '/induce_administration_add',
          component: Induce_administration_add
        },
        {
          path: '/car_administration_view',
          component: Car_administration_view
        },
        {
          path: '/car_administration_edit',
          component: Car_administration_edit
        },
        {
          path: '/car_administration_excel',
          component: Car_administration_excel
        },
        {
          path: '/account_Jurisdiction',
          component: Account_Jurisdiction
        },
        {
          path: '/account_Jurisdiction_add',
          component: Account_Jurisdiction_add
        },
        {
          path: '/role_Jurisdiction',
          component: Role_Jurisdiction
        },
        {
          path: '/role_Jurisdiction_view',
          component: Role_Jurisdiction_view
        },
        {
          path: '/menu_Jurisdiction',
          component: Menu_Jurisdiction
        },
        {
          path: '/equipment_Journal',
          component: Equipment_Journal
        },
        {
          path: '/operation_Journal',
          component: Operation_Journal
        },
        {
          path: '/operation_Journal_add',
          component: Operation_Journal_add
        },
        {
          path: '/operation_record',
          component: Operation_record
        },
        {
          path: '/operation_record_details',
          component: Operation_record_details
        },
        {
          path: '/system_Journal',
          component: System_Journal
        },
        {
          path: '/system_setup',
          component: System_setup
        },
        {
          path: '/noauthority',
          component: Noauthority
        }
      ]
    },
  ]
})
