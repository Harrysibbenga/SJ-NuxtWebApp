/* eslint-disable prefer-promise-reject-errors */
import {
  imgCol,
  circuitImgCol,
  partnerImgCol,
  storage,
} from '@/services/firebase'

export const state = () => ({
  image: {},
  images: [],
  partnerImages: [],
  circuitImages: [],
  imagesType: [],
  uploadMsg: {},
})

export const mutations = {
  SET_IMAGE: (state, image) => {
    state.image = image
  },
  SET_IMAGES: (state, images) => {
    state.images = images
  },
  SET_CIRCUIT_IMAGES: (state, images) => {
    state.circuitImages = images
  },
  SET_PARTNER_IMAGES: (state, images) => {
    state.partnerImages = images
  },
  SET_MSG: (state, msg) => {
    state.uploadMsg = msg
  },
}

export const getters = {
  message: (state) => state.uploadMsg,
  images: (state) => state.images,
  partnerImages: (state) => state.partnerImages,
  circuitImages: (state) => state.circuitImages,
  imagesType: (state) => state.imagesType,
}

export const actions = {
  setImages({ commit }) {
    imgCol.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const imagesArray = []

      querySnapshot.forEach((doc) => {
        const image = doc.data()
        image.id = doc.id
        imagesArray.push(image)
      })
      commit('SET_IMAGES', imagesArray)
    })

    circuitImgCol.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const imagesArray = []

      querySnapshot.forEach((doc) => {
        const image = doc.data()
        image.id = doc.id
        imagesArray.push(image)
      })
      commit('SET_CIRCUIT_IMAGES', imagesArray)
    })

    partnerImgCol.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const imagesArray = []

      querySnapshot.forEach((doc) => {
        const image = doc.data()
        image.id = doc.id
        imagesArray.push(image)
      })
      commit('SET_PARTNER_IMAGES', imagesArray)
    })
  },
  uploadImage({ commit }, payload) {
    return new Promise((resolve, reject) => {
      let type, collection

      if (payload.type === 'circuit') {
        type = payload.type
        collection = circuitImgCol
      } else if (payload.type === 'image') {
        type = payload.type
        collection = imgCol
      } else if (payload.type === 'partner') {
        type = payload.type
        collection = partnerImgCol
      }

      const storageRef = storage.ref(type + '/' + payload.file.name)
      const uploadTask = storageRef.put(payload.file)

      uploadTask.on(
        'state_changed',
        () => {
          // snapshot
        },
        () => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            collection
              .add({
                name: payload.file.name,
                createdOn: new Date(),
                url: downloadURL,
                alt: payload.alt,
                type: payload.type,
              })
              .then((doc) => {
                const id = doc.id
                collection
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    const uploadMsg = {
                      type: 'success',
                      message: 'Image sucssesfully uploaded to storage',
                    }
                    commit('SET_MSG', uploadMsg)
                    resolve(img)
                  })
              })
              .catch((err) => {
                const uploadMsg = {
                  type: 'warning',
                  message: err.message,
                }
                commit('SET_MSG', uploadMsg)
                reject()
              })
          })
        }
      )
    })
  },
  multiUpload({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const storageRef = storage.ref('images/' + payload.name)
      const uploadTask = storageRef.put(payload)

      uploadTask.on(
        'state_changed',
        () => {
          // snapshot
        },
        () => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            imgCol
              .add({
                name: payload.name,
                createdOn: new Date(),
                url: downloadURL,
                alt: payload.alt,
                type: 'image',
              })
              .then((doc) => {
                const id = doc.id
                imgCol
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    resolve(img)
                  })
              })
              .catch((err) => {
                const uploadMsg = {
                  type: 'warning',
                  message: err.message,
                }
                commit('SET_MSG', uploadMsg)
                reject()
              })
          })
        }
      )
    })
  },
}
