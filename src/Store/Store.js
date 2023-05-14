import Vue from 'vue';
import Vuex from 'vuex';
import Users from './Module/Users.js';
import plan from './Module/Plan';
import group from './Module/Group';
import major from './Module/Major';
import lesson from './Module/Lesson';
import person from './Module/Person';
import classroom from './Module/Classroom';
// import shopDetail from './Module/ShopDetail';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules: {
        Users,
        plan,
        group,
        major,
        lesson,
        person,
        classroom
        // shopDetail,
    }
});
