import Vue from 'vue';

const state = {
  ClassroomList: [],
};


const getters = {
  GetAllClassroomByGroupId(state) {
    return state.ClassroomList;
  },

};//getters

const mutations = {
  SetClassroom(state, inputObj) {
        state.ClassroomList = inputObj;
    },

};//mutations

const actions = {

  GetAllClassroomByGroupId(context,GroupId) {
      Vue.http.get("api/Classroom/GetAllClassroomByGroupId/" + GroupId.id)
        .then(response => {
          console.log(response)
          return response.json();
        }).then(data => {
          context.commit("SetClassroom", data);
        });
    },

  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
