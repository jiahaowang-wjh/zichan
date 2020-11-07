import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
        children:[
            {
              path: '/MyDebt',
              name: 'MyDebt',
              component: () => import('@/views/MyDebt'),
              meta: {
                leftMenu: '/MyDebt'
              }
            },
             {
               path: '/PayDetail',
               name: 'PayDetail',
               component: () => import('@/views/PayDetail'),
               meta: {
                 leftMenu: '/PayDetail'
               }
             },
              {
              path: '/Password',
              name: 'Password',
              component: () => import('@/views/Password'),
              meta: {
                leftMenu: '/Password'
              }
            },
            {
            path: '/Assess',
            name: 'Assess',
            component: () => import('@/views/MyDebt/Assess'),
            meta: {
            leftMenu: '/Assess'
            }
            },
            {
                path: '/Assignment',
                name: 'Assignment',
                component: () => import('@/views/MyDebt/Assignment'),
                meta: {
                leftMenu: '/Assignment'
            }
            },
                {
              path: '/ConfirmAssignment',
              name: 'ConfirmAssignment',
              component: () => import('@/views/MyDebt/ConfirmAssignment'),
              meta: {
                leftMenu: '/ConfirmAssignment'
              }
            },
             {
               path: '/Notification',
               name: 'Notification',
               component: () => import('@/views/MyDebt/Notification'),
               meta: {
                 leftMenu: '/Notification'
               }
             }, {
              path: '/CollectionLetters',
              name: 'CollectionLetters',
              component: () => import('@/views/MyDebt/CollectionLetters'),
              meta: {
                leftMenu: '/CollectionLetters'
              }
            },

             {
               path: '/Compromise',
               name: 'Compromise',
               component: () => import('@/views/MyDebt/Compromise'),
               meta: {
                 leftMenu: '/Compromise'
               }
             },
              {
                path: '/Guarantee',
                name: 'Guarantee',
                component: () => import('@/views/MyDebt/Guarantee'),
                meta: {
                  leftMenu: '/Guarantee'
                }
              },
                 {
                 path: '/DebtConfirm',
                 name: 'DebtConfirm',
                 component: () => import('@/views/MyDebt/DebtConfirm'),
                 meta: {
                   leftMenu: '/DebtConfirm'
                 }
               },
               {
                path: '/SalesAgreement',
                name: 'SalesAgreement',
                component: () => import('@/views/MyDebt/SalesAgreement'),
                meta: {
                  leftMenu: '/SalesAgreement'
                }
                },
               {
                 path: '/CivilMedia',
                 name: 'CivilMedia',
                 component: () => import('@/views/myapproval/CivilMedia'),
                 meta: {
                   leftMenu: '/CivilMedia'
                 }
               },
               {
                 path: '/UnlockApply',
                 name: 'UnlockApply',
                 component: () => import('@/views/myapproval/UnlockApply'),
                 meta: {
                   leftMenu: '/UnlockApply'
                 }
               }, {
                 path: '/PaymentVoucher',
                 name: 'PaymentVoucher',
                 component: () => import('@/views/myapproval/PaymentVoucher'),
                 meta: {
                   leftMenu: '/PaymentVoucher'
                 }
               }, {
                 path: '/AssetInformation',
                 name: 'AssetInformation',
                 component: () => import('@/views/myapproval/AssetInformation'),
                 meta: {
                   leftMenu: '/AssetInformation'
                 }
               }, {
                 path: '/PropertyAssessment',
                 name: 'PropertyAssessment',
                 component: () => import('@/views/myapproval/PropertyAssessment'),
                 meta: {
                   leftMenu: '/PropertyAssessment'
                 }
               }, {
                 path: '/AssessApprove',
                 name: 'AssessApprove',
                 component: () => import('@/views/myapproval/AssessApprove'),
                 meta: {
                   leftMenu: '/AssessApprove'
                 }
               }, {
                 path: '/AssetInformationApprove',
                 name: 'AssetInformationApprove',
                 component: () => import('@/views/myapproval/AssetInformationApprove'),
                 meta: {
                   leftMenu: '/AssetInformationApprove'
                 }
               }, {
                 path: '/Payment',
                 name: 'Payment',
                 component: () => import('@/views/myapproval/Payment'),
                 meta: {
                   leftMenu: '/Payment'
                 }
               }, {
                 path: '/PaymentApprove',
                 name: 'PaymentApprove',
                 component: () => import('@/views/myapproval/PaymentApprove'),
                 meta: {
                   leftMenu: '/PaymentApprove'
                 }
               },
               , {
                path: '/EditAssessment',
                name: 'EditAssessment',
                component: () => import('@/views/myapproval/AssetInformationApprove'),
                meta: {
                  leftMenu: '/AssetInformation'
                }
              }, {
                path: '/EditPayment',
                name: 'EditPayment',
                component: () => import('@/views/myapproval/Payment'),
                meta: {
                  leftMenu: '/AssetInformation'
                }
              }
        ]
    }
]

const router = new VueRouter({
    routes
})



export default router
