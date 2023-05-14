import Vue from 'vue';

const state = {
  LessonList: [],
  LessonOriantationList: [],
};


const getters = {
  GetAllLessonByMajorId(state) {
    return state.LessonList;
  },

  GetAllLessonOriantationByLessonId(state) {
    return state.LessonOriantationList;
  },


};//getters

const mutations = {
  SetLesson(state, inputObj) {
        state.LessonList = inputObj;
    },

  SetLessonOriantation(state, inputObj) {
      state.LessonOriantationList = inputObj;
  },


};//mutations

const actions = {

    GetAllLessonByMajorId(context,Major) {
      Vue.http.get("api/lesson/GetAllLessonByMajorId/" + Major.id)
        .then(response => {
          return response.json();
        }).then(data => {
          context.commit("SetLesson", data);
        });
    },

    GetAllLessonOriantationByLessonId(context,Lesson) {
      Vue.http.get("api/lesson/GetAllLessonOriantationByLessonId/" + Lesson.id)
        .then(response => {
          console.log('response-----------------------')
          console.log(Lesson.id)
          console.log(response)
          return response.json();
        }).then(data => {
          context.commit("SetLessonOriantation", data);
        });
    },



  };//actions

export default {
  state,
  getters,
  mutations,
  actions
};
