import { partnerCol } from '@/services/firebase'

export const state = () => ({
  allPosts: [],
  post: null,
  content: null,
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
  clearPost(state) {
    state.post = null
  },
  clearPosts(state) {
    state.allPosts = null
  },
}

export const actions = {
  setPost({ commit }, id) {
    partnerCol
      .doc(id)
      .get()
      .then((doc) => {
        const post = doc.data()
        commit('setPost', post)
      })
  },
  moveDown({ commit }, id) {
    partnerCol
      .doc(id)
      .get()
      .then((doc) => {
        const order = doc.data().order

        const increment = parseInt(order) + 1

        partnerCol.doc(doc.id).update({
          order: increment.toString(),
        })
      })
  },
  moveUp({ commit }, id) {
    partnerCol
      .doc(id)
      .get()
      .then((doc) => {
        const order = doc.data().order

        const decrement = parseInt(order) - 1

        partnerCol.doc(doc.id).update({
          order: decrement.toString(),
        })
      })
  },
  setPosts({ commit }) {
    partnerCol.orderBy('order').onSnapshot((querySnapshot) => {
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
  getContent(state) {
    return state.content
  },
}
