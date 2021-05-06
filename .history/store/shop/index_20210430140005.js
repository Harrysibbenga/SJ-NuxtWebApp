import { shopCol } from '@/services/firebase'

export const state = () => ({
  shop: {},
})

export const mutations = {
  setContent(state, val) {
    state.shop = val
  },
}

export const actions = {
  setContent({ commit }) {
    shopCol.onSnapshot((querySnapshot) => {
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
    return state.shop
  },
}
