import moment from 'moment'
import { postsCol, postPg } from '@/services/firebase'

export const state = () => ({
  allPosts: [],
  post: null,
  postsByYear: [],
  news: {},
  publishedPosts: [],
})

export const mutations = {
  setPosts(state, val) {
    if (val) {
      state.allPosts = val
    } else {
      state.allPosts = []
    }
  },
  setPostsByYear(state, val) {
    if (val) {
      state.postsByYear = val
    } else {
      state.postsByYear = []
    }
  },
  setPublishedPosts(state, val) {
    if (val) {
      state.publishedPosts = val
    } else {
      state.publishedPosts = null
    }
  },
  setPost(state, val) {
    if (val) {
      state.post = val
    } else {
      state.post = null
    }
  },
  setContent(state, val) {
    state.news = val
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
    postsCol
      .doc(id)
      .get()
      .then((doc) => {
        const post = doc.data()
        commit('setPost', post)
      })
  },
  setPostSlug({ commit }, slug) {
    return new Promise((resolve) => {
      postsCol
        .where('slug', '==', slug)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            const post = doc.data()
            post.id = doc.id
            commit('setPost', post)
            resolve(post)
          })
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    })
  },
  setPosts({ commit }) {
    postsCol.orderBy('date', 'desc').onSnapshot((querySnapshot) => {
      const postsArray = []
      const now = moment().format()

      querySnapshot.forEach((doc) => {
        const post = doc.data()
        post.id = doc.id
        if (!post.published) {
          postsCol
            .doc(doc.id)
            .update({
              published: now,
            })
            .then(function () {
              console.log('Document successfully updated!')
            })
            .catch(function (error) {
              console.error('Error updating document: ', error)
            })
        }
        postsArray.push(post)
      })

      commit('setPosts', postsArray)
      commit(
        'setPublishedPosts',
        postsArray.filter((post) => now >= post.published)
      )
    })
  },
  setPostsByYear({ commit }, year) {
    postsCol
      .where('year', '==', year)
      .orderBy('date', 'desc')
      .onSnapshot((doc) => {
        const postsArray = []

        doc.forEach((doc) => {
          const post = doc.data()
          post.id = doc.id
          postsArray.push(post)
        })
        commit('setPostsByYear', postsArray)
      })
  },
  setContent({ commit }) {
    postPg.onSnapshot((querySnapshot) => {
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
  getPost(state) {
    return state.post
  },
  getPosts(state) {
    return state.allPosts
  },
  getPostsByYear(state) {
    return state.postsByYear
  },
  getContent(state) {
    return state.news
  },
  getPublishedPosts(state) {
    return state.publishedPosts
  },
}
