import Vue from 'vue';
//yarn add @vuejs-pt/vue-alert

const state = {
  planList: [],
  PlanById: [],
  filterParams:'',
  AllQuestionsWithOptions:[],
  AllPlanByRowNumber:[],
  AllPlanByYerTermDegreeGroupMajor:[],
};


const getters = {
  GetFilterParams(state) {
    return state.filterParams;
  },

  GetAllPlan(state) {
    return state.planList;
  },

  GetAllPlanByRowNumber(state) {
    return state.AllPlanByRowNumber;
  },

  GetAllPlanByYerTermDegreeGroupMajor(state) {
    return state.AllPlanByYerTermDegreeGroupMajor;
  },
  
  GetPlanById(state) {
    return state.PlanById;
  },
  
};//getters

const mutations = {
    SetFilterParams(state, params){
      state.filterParams = params;
    },
    SetPlanById(state, planById){
      state.PlanById = planById;
    },
    SetPlan(state, planList) {
        state.planList = planList;
    },

    SetAllPlanByRowNumber(state, planList) {
      state.AllPlanByRowNumber = planList;
    },
    
    SetAllPlanByYerTermDegreeGroupMajor(state, AllPlanByYerTermDegreeGroupMajor){
      state.AllPlanByYerTermDegreeGroupMajor = AllPlanByYerTermDegreeGroupMajor;
    }

};//mutations

const actions = {
  GetFilterParams(context,param) {
    context.commit("SetFilterParams", param);
  },
  GetAllPlan(context) {
      Vue.http.get("api/Plan/getallplan")
        .then(response => {
          return response.json();
        }).then(data => {
          context.commit("SetPlan", data);
        });
    },

    GetAllPlanByRowNumber(context) {
      Vue.http.get("api/Plan/GetAllPlanByRowNumber")
        .then(response => {
          return response.json();
        }).then(data => {
          context.commit("SetAllPlanByRowNumber", data);
        });
    },

    CreatePlan(context, formData , config ) {
      Vue.http.post('api/Plan/Create', formData,config )
      .then(response => {
        if (response.status == 200 ) {
          if (response.body.status == 'Error') {
            swal({icon: "warning", text: response.body.data.errMessage + " ( "+response.body.data.errCode+")"} );
          }
          else
            swal({icon: "success", text: `اطلاعات با شماره شناسه ${response.data.data.id} با موفقیت ثبت شد` , });
        }
       }, data => {
        console.log(data)
        if(data.ok == false)
          swal({icon: "warning", text: 'err'} );

        if (data.status == 200 ) {
          if (response.body.status == 'Error') {
            swal({icon: "warning", text: response.body.data.errMessage + " ( "+response.body.data.errCode+")"} );
          }
          else
            swal({icon: "success", text: `اطلاعات با شماره شناسه ${response.data.data.id} با موفقیت ثبت شد` , });
        }

      });
    },//

    DeletePlan(context, Filter  ) {
      Vue.http.delete('api/Plan/Delete/'+ Filter.id)
      .then(response => {
        if (response.status == 200 ) {
          swal({icon: "success", text: `حذف اطلاعات با موفقیت انجام شد` , });            
        }
      }, data => {
      });
    },//

    GetPlanByDayAndTime(context, param ) {
      Vue.http.post('api/Plan/GetPlanByDayAndTime/'+param )
      .then(response => {
        if (response.status == 200) {
        }
      }, data => {
      });
    },//

    GetPlanByYerTermDegreeGroupMajor(context, param ) {
      Vue.http.post('api/Plan/GetPlanByYerTermDegreeGroupMajor/'+param )
      .then(response => {
        if (response.status == 200) {
          context.commit("SetAllPlanByYerTermDegreeGroupMajor", response.data);
        }
      }, data => {
      });
    },//

    //https://localhost:44381/api/Plan/GetPlanById/626
    GetPlanById(context, id ) {
      Vue.http.get('api/Plan/GetPlanById/'+ id )
      .then(response => {
        if (response.status == 200) {
          context.commit("SetPlanById", response.data);
        }
      }, data => {
      });
    },//



    EditePlan(context, Filter) {
      Vue.http.put('api/Plan/Edit/'+ Filter.Id ,Filter )
      .then(response => {
        console.log(response)
        if (response.status == 200) {
          if (response.body.status == 'Error') {
            swal({icon: "warning", text: response.body.data.errMessage + " ( "+response.body.data.errCode+")"} );
          }
          else
            swal({icon: "success", text: "ویرایش اطلاعات با موفقیت انجام شد" , });
        }
       }, data => {
      });
    },//

  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
