export const HeadNav = () => import('../../components/Head/Nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c))
export const HomeCalendar = () => import('../../components/Home/Calendar.vue' /* webpackChunkName: "components/home-calendar" */).then(c => wrapFunctional(c.default || c))
export const HomeHero = () => import('../../components/Home/Hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c))
export const HomePageNav = () => import('../../components/Home/PageNav.vue' /* webpackChunkName: "components/home-page-nav" */).then(c => wrapFunctional(c.default || c))
export const HomePartners = () => import('../../components/Home/Partners.vue' /* webpackChunkName: "components/home-partners" */).then(c => wrapFunctional(c.default || c))
export const HomeSocial = () => import('../../components/Home/Social.vue' /* webpackChunkName: "components/home-social" */).then(c => wrapFunctional(c.default || c))
export const HomeSubscribe = () => import('../../components/Home/Subscribe.vue' /* webpackChunkName: "components/home-subscribe" */).then(c => wrapFunctional(c.default || c))
export const Foot = () => import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c))
export const ModalDeleteModal = () => import('../../components/Modals/DeleteModal.vue' /* webpackChunkName: "components/modal-delete-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalEditModal = () => import('../../components/Modals/EditModal.vue' /* webpackChunkName: "components/modal-edit-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalExistsModal = () => import('../../components/Modals/ExistsModal.vue' /* webpackChunkName: "components/modal-exists-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalMultiUpload = () => import('../../components/Modals/MultiUpload.vue' /* webpackChunkName: "components/modal-multi-upload" */).then(c => wrapFunctional(c.default || c))
export const ModalSelectImageModal = () => import('../../components/Modals/SelectImageModal.vue' /* webpackChunkName: "components/modal-select-image-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalSelectImagesModal = () => import('../../components/Modals/SelectImagesModal.vue' /* webpackChunkName: "components/modal-select-images-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalSelectModal = () => import('../../components/Modals/SelectModal.vue' /* webpackChunkName: "components/modal-select-modal" */).then(c => wrapFunctional(c.default || c))
export const ModalUploadModal = () => import('../../components/Modals/UploadModal.vue' /* webpackChunkName: "components/modal-upload-modal" */).then(c => wrapFunctional(c.default || c))
export const UiCalendarCard = () => import('../../components/UI/CalendarCard.vue' /* webpackChunkName: "components/ui-calendar-card" */).then(c => wrapFunctional(c.default || c))
export const UiEditor = () => import('../../components/UI/Editor.vue' /* webpackChunkName: "components/ui-editor" */).then(c => wrapFunctional(c.default || c))
export const UiMessage = () => import('../../components/UI/Message.vue' /* webpackChunkName: "components/ui-message" */).then(c => wrapFunctional(c.default || c))
export const UiNavCard = () => import('../../components/UI/NavCard.vue' /* webpackChunkName: "components/ui-nav-card" */).then(c => wrapFunctional(c.default || c))
export const UiNewsCard = () => import('../../components/UI/NewsCard.vue' /* webpackChunkName: "components/ui-news-card" */).then(c => wrapFunctional(c.default || c))
export const PostEditPosts = () => import('../../components/Post/EditPosts.vue' /* webpackChunkName: "components/post-edit-posts" */).then(c => wrapFunctional(c.default || c))
export const PostGallery = () => import('../../components/Post/Gallery.vue' /* webpackChunkName: "components/post-gallery" */).then(c => wrapFunctional(c.default || c))
export const PostImageUpload = () => import('../../components/Post/ImageUpload.vue' /* webpackChunkName: "components/post-image-upload" */).then(c => wrapFunctional(c.default || c))
export const PostQuotes = () => import('../../components/Post/Quotes.vue' /* webpackChunkName: "components/post-quotes" */).then(c => wrapFunctional(c.default || c))
export const PostStandardForm = () => import('../../components/Post/StandardForm.vue' /* webpackChunkName: "components/post-standard-form" */).then(c => wrapFunctional(c.default || c))
export const CalendarCircuits = () => import('../../components/Calendar/Circuits.vue' /* webpackChunkName: "components/calendar-circuits" */).then(c => wrapFunctional(c.default || c))
export const CalendarFixtures = () => import('../../components/Calendar/Fixtures.vue' /* webpackChunkName: "components/calendar-fixtures" */).then(c => wrapFunctional(c.default || c))
export const Icon = () => import('../../components/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const YIcon = () => import('../../components/YIcon.vue' /* webpackChunkName: "components/y-icon" */).then(c => wrapFunctional(c.default || c))
export const Error = () => import('../../components/error.vue' /* webpackChunkName: "components/error" */).then(c => wrapFunctional(c.default || c))
export const CarBody = () => import('../../components/Car/Body.vue' /* webpackChunkName: "components/car-body" */).then(c => wrapFunctional(c.default || c))
export const CarHead = () => import('../../components/Car/Head.vue' /* webpackChunkName: "components/car-head" */).then(c => wrapFunctional(c.default || c))
export const AdminNews = () => import('../../components/Admin/News.vue' /* webpackChunkName: "components/admin-news" */).then(c => wrapFunctional(c.default || c))
export const AdminPartner = () => import('../../components/Admin/Partner.vue' /* webpackChunkName: "components/admin-partner" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
