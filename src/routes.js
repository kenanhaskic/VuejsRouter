import firstroute from './components/firstroute.vue'
import secondroute from './components/secondroute.vue'
import thirdroute from './components/thirdroute.vue'
import fourthroute from './components/fourthroute.vue'
import childroute from './components/childroute.vue'




export default [
    {path:'/firstroute' , component:firstroute},
    {path:'/secondroute', component:secondroute},
    {path:'/thirdroute', component:thirdroute},
    {path:'/fourthroute', component:fourthroute,
    children:[{
        path:'childroute',
        component:childroute
    }   
]},

]