import { circuitCol } from '@/services/firebase'

export const state = () => ({
  allPosts: [],
  post: null,
})

export const mutations = {
  setPosts(state, val) {
    if (val) {
      state.allPosts = val
    } else {
      state.allPosts = []
    }
  },
  setPost(state, val) {
    if (val) {
      state.post = val
    } else {
      state.post = null
    }
  },
}

export const actions = {
  setPost({ commit }, id) {
    postsCol
      .doc(id)
      .get()
      .then((doc) => {
        const post = doc.data()
        commit('setPost', post)
      })
  },
  setPosts({ commit }) {
    postsCol.orderBy('date', 'desc').onSnapshot((querySnapshot) => {
      const postsArray = []

      querySnapshot.forEach((doc) => {
        const post = doc.data()
        post.id = doc.id
        postsArray.push(post)
      })
      commit('setPosts', postsArray)
    })
  },
}

export const getters = {
  getPost(state) {
    return state.post
  },
  getPosts(state) {
    return state.allPosts
  },
}
