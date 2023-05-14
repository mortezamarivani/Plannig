import Vue from 'vue';

const state = {
  PersonList: [],
  PersonOriantationList: [],
};


const getters = {
  GetAllPersonByPersonType(state) {
    return state.PersonList;
  },

};//getters

const mutations = {
  SetPerson(state, inputObj) {
        state.PersonList = inputObj;
    },

};//mutations

const actions = {

  GetAllPersonByPersonType(context,person) {
      Vue.http.get("api/person/getallperson/" + person.id)
        .then(response => {
          return response.json();
        }).then(data => {
          context.commit("SetPerson", data);
        });
    },

  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
