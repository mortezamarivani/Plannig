import Vue from 'vue';

const state = {
  MajorList: [],
  MajorOriantationList: [],
};


const getters = {
  GetAllMajorByGroupId(state) {
    return state.MajorList;
  },

  GetAllMajorOriantationByMajorId(state) {
    return state.MajorOriantationList;
  },


};//getters

const mutations = {
  SetMajor(state, inputObj) {
        state.MajorList = inputObj;
    },

  SetMajorOriantation(state, inputObj) {
      state.MajorOriantationList = inputObj;
  },


};//mutations

const actions = {

  GetAllMajorByGroupId(context,GroupId) {
      Vue.http.get("api/major/GetAllMajorByGroupId/" + GroupId.id)
        .then(response => {
          return response.json();
        }).then(data => {
          context.commit("SetMajor", data);
        });
    },

    GetAllMajorOriantationByMajorId(context,MajorId) {
      Vue.http.get("api/major/GetAllMajorOriantationByMajorId/" + MajorId.id)
        .then(response => {
          return response.json();
        }).then(data => {
          context.commit("SetMajorOriantation", data);
        });
    },



  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
