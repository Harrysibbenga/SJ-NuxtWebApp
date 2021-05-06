export const state = () => ({
  loading: false,
})

export const mutations = {
  SET_LOADING: (state, status) => {
    state.loading = status
  },
}

export const getters = {
  loading: (state) => state.loading,
}

export const actions = {
  setLoading({ commit }, status) {
    commit('SET_LOADING', status)
  },
}
