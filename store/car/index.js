import { carCol } from '@/services/firebase'

export const state = () => ({
  car: {},
})

export const mutations = {
  setContent(state, val) {
    state.car = val
  },
}

export const actions = {
  setContent({ commit }) {
    carCol.onSnapshot((querySnapshot) => {
      const contentArray = []

      querySnapshot.forEach((doc) => {
        const content = doc.data()
        content.id = doc.id
        contentArray.push(content)
      })
      commit('setContent', contentArray[0])
    })
  },
}

export const getters = {
  getContent(state) {
    return state.car
  },
}
