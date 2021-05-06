import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  HeadNav: () => import('../../components/Head/Nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c)),
  HomeCalendar: () => import('../../components/Home/Calendar.vue' /* webpackChunkName: "components/home-calendar" */).then(c => wrapFunctional(c.default || c)),
  HomeHero: () => import('../../components/Home/Hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c)),
  HomePageNav: () => import('../../components/Home/PageNav.vue' /* webpackChunkName: "components/home-page-nav" */).then(c => wrapFunctional(c.default || c)),
  HomePartners: () => import('../../components/Home/Partners.vue' /* webpackChunkName: "components/home-partners" */).then(c => wrapFunctional(c.default || c)),
  HomeSocial: () => import('../../components/Home/Social.vue' /* webpackChunkName: "components/home-social" */).then(c => wrapFunctional(c.default || c)),
  HomeSubscribe: () => import('../../components/Home/Subscribe.vue' /* webpackChunkName: "components/home-subscribe" */).then(c => wrapFunctional(c.default || c)),
  Foot: () => import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c)),
  ModalDeleteModal: () => import('../../components/Modals/DeleteModal.vue' /* webpackChunkName: "components/modal-delete-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalEditModal: () => import('../../components/Modals/EditModal.vue' /* webpackChunkName: "components/modal-edit-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalExistsModal: () => import('../../components/Modals/ExistsModal.vue' /* webpackChunkName: "components/modal-exists-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalMultiUpload: () => import('../../components/Modals/MultiUpload.vue' /* webpackChunkName: "components/modal-multi-upload" */).then(c => wrapFunctional(c.default || c)),
  ModalSelectImageModal: () => import('../../components/Modals/SelectImageModal.vue' /* webpackChunkName: "components/modal-select-image-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalSelectImagesModal: () => import('../../components/Modals/SelectImagesModal.vue' /* webpackChunkName: "components/modal-select-images-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalSelectModal: () => import('../../components/Modals/SelectModal.vue' /* webpackChunkName: "components/modal-select-modal" */).then(c => wrapFunctional(c.default || c)),
  ModalUploadModal: () => import('../../components/Modals/UploadModal.vue' /* webpackChunkName: "components/modal-upload-modal" */).then(c => wrapFunctional(c.default || c)),
  UiCalendarCard: () => import('../../components/UI/CalendarCard.vue' /* webpackChunkName: "components/ui-calendar-card" */).then(c => wrapFunctional(c.default || c)),
  UiEditor: () => import('../../components/UI/Editor.vue' /* webpackChunkName: "components/ui-editor" */).then(c => wrapFunctional(c.default || c)),
  UiMessage: () => import('../../components/UI/Message.vue' /* webpackChunkName: "components/ui-message" */).then(c => wrapFunctional(c.default || c)),
  UiNavCard: () => import('../../components/UI/NavCard.vue' /* webpackChunkName: "components/ui-nav-card" */).then(c => wrapFunctional(c.default || c)),
  UiNewsCard: () => import('../../components/UI/NewsCard.vue' /* webpackChunkName: "components/ui-news-card" */).then(c => wrapFunctional(c.default || c)),
  PostEditPosts: () => import('../../components/Post/EditPosts.vue' /* webpackChunkName: "components/post-edit-posts" */).then(c => wrapFunctional(c.default || c)),
  PostGallery: () => import('../../components/Post/Gallery.vue' /* webpackChunkName: "components/post-gallery" */).then(c => wrapFunctional(c.default || c)),
  PostImageUpload: () => import('../../components/Post/ImageUpload.vue' /* webpackChunkName: "components/post-image-upload" */).then(c => wrapFunctional(c.default || c)),
  PostQuotes: () => import('../../components/Post/Quotes.vue' /* webpackChunkName: "components/post-quotes" */).then(c => wrapFunctional(c.default || c)),
  PostStandardForm: () => import('../../components/Post/StandardForm.vue' /* webpackChunkName: "components/post-standard-form" */).then(c => wrapFunctional(c.default || c)),
  CalendarCircuits: () => import('../../components/Calendar/Circuits.vue' /* webpackChunkName: "components/calendar-circuits" */).then(c => wrapFunctional(c.default || c)),
  CalendarFixtures: () => import('../../components/Calendar/Fixtures.vue' /* webpackChunkName: "components/calendar-fixtures" */).then(c => wrapFunctional(c.default || c)),
  Icon: () => import('../../components/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  YIcon: () => import('../../components/YIcon.vue' /* webpackChunkName: "components/y-icon" */).then(c => wrapFunctional(c.default || c)),
  Error: () => import('../../components/error.vue' /* webpackChunkName: "components/error" */).then(c => wrapFunctional(c.default || c)),
  AdminNews: () => import('../../components/Admin/News.vue' /* webpackChunkName: "components/admin-news" */).then(c => wrapFunctional(c.default || c)),
  AdminPartner: () => import('../../components/Admin/Partner.vue' /* webpackChunkName: "components/admin-partner" */).then(c => wrapFunctional(c.default || c)),
  CarBody: () => import('../../components/Car/Body.vue' /* webpackChunkName: "components/car-body" */).then(c => wrapFunctional(c.default || c)),
  CarHead: () => import('../../components/Car/Head.vue' /* webpackChunkName: "components/car-head" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
