import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, 
      {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      },
      ]
  },
})

