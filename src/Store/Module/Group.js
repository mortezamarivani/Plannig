import Vue from 'vue';

const state = {
  GroupList: [],
};


const getters = {
  GetAllGroup(state) {
    return state.GroupList;
  },

};//getters

const mutations = {
  SetGroup(state, inputObj) {
        state.GroupList = inputObj;
    },


};//mutations

const actions = {

  GetAllGroup(context) {
      Vue.http.get("api/group/GetAllGroup")
        .then(response => {
          return response.json();
        }).then(data => {
          context.commit("SetGroup", data);
        });
    },


  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
