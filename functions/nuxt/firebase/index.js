import createApp from './app.js'

import analyticsService from './service.analytics.js'

const appConfig = {"apiKey":"AIzaSyAhZJcxwQ_3bwIvJC5jlhwcf-NdLsgh_aI","authDomain":"stephen-jelly.firebaseapp.com","databaseURL":"https:\u002F\u002Fstephen-jelly.firebaseio.com","projectId":"stephen-jelly","storageBucket":"stephen-jelly.appspot.com","messagingSenderId":"51119085046","appId":"1:51119085046:web:883659cc5cb660fedce3d7","measurementId":"G-7NV6HKP26M"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.client) {
    servicePromises = [
      analyticsService(session, firebase, ctx, inject),

    ]
  }

  const [
    analytics
  ] = await Promise.all(servicePromises)

  const fire = {
    analytics: analytics
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}