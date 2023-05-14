   
    var About = resolve => {
        require.ensure(['./Pages/Admin/About'], () => {
        resolve(require('./Pages/Admin/About'));
    });
    };


   var PlanEdit = resolve => {
       require.ensure(['./Pages/Plan/PlanEdit'], () => {
         resolve(require('./Pages/Plan/PlanEdit'));
      });
    };

    var PlanCreate = resolve => {
        require.ensure(['./Pages/Plan/PlanCreate'], () => {
            resolve(require('./Pages/Plan/PlanCreate'));
         });
    }
   
    var PlanList = resolve => {
       require.ensure(['./Pages/Plan/PlanList'] , ()=>{
           resolve(require('./Pages/Plan/PlanList'))
       })
    };

   var Login = resolve => {
       require.ensure(['./Pages/User/Login.vue'] , ()=>{
           resolve(require('./Pages/User/Login.vue'))
       })
   };
   
   var Register = resolve => {
       require.ensure(['./Pages/User/Register.vue'],()=>{
           resolve(require('./Pages/User/Register.vue'))
       })
   };
   
   export const Routes = [
       {
       path:"/",
       component:About
   },
   {
       path:"/PlanList",
       component:PlanList
   }, 
   {
        path:"/PlanCreate",
        component:PlanCreate
   },
   {
        path:"/PlanCreate/:id",
        component:PlanCreate,
        component: PlanCreate
    },
   {
       path:"/PlanEdit",
       component:PlanEdit,
   },
   {
       path:"/PlanEdit/:id",
       component:PlanEdit,
       name:'PlanEdit'
   },
   {
       path:"/Register",
       component:Register
   },
   {
       path:"/Login",
       component : Login
   }
   
   ]