import { headlineCol } from '@/services/firebase'

export const state = () => ({
  headline: {},
})

export const mutations = {
  setContent(state, val) {
    state.headline = val
  },
}

export const actions = {
  setContent({ commit }) {
    headlineCol.onSnapshot((querySnapshot) => {
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
  getHeadline(state) {
    return state.headline
  },
}
