import { wrapFunctional } from './utils'

export { default as HeadNav } from '../../components/Head/Nav.vue'
export { default as HomeCalendar } from '../../components/Home/Calendar.vue'
export { default as HomeHero } from '../../components/Home/Hero.vue'
export { default as HomePageNav } from '../../components/Home/PageNav.vue'
export { default as HomePartners } from '../../components/Home/Partners.vue'
export { default as HomeSocial } from '../../components/Home/Social.vue'
export { default as HomeSubscribe } from '../../components/Home/Subscribe.vue'
export { default as Foot } from '../../components/Foot/index.vue'
export { default as ModalDeleteModal } from '../../components/Modals/DeleteModal.vue'
export { default as ModalEditModal } from '../../components/Modals/EditModal.vue'
export { default as ModalExistsModal } from '../../components/Modals/ExistsModal.vue'
export { default as ModalMultiUpload } from '../../components/Modals/MultiUpload.vue'
export { default as ModalSelectImageModal } from '../../components/Modals/SelectImageModal.vue'
export { default as ModalSelectImagesModal } from '../../components/Modals/SelectImagesModal.vue'
export { default as ModalSelectModal } from '../../components/Modals/SelectModal.vue'
export { default as ModalUploadModal } from '../../components/Modals/UploadModal.vue'
export { default as UiCalendarCard } from '../../components/UI/CalendarCard.vue'
export { default as UiEditor } from '../../components/UI/Editor.vue'
export { default as UiMessage } from '../../components/UI/Message.vue'
export { default as UiNavCard } from '../../components/UI/NavCard.vue'
export { default as UiNewsCard } from '../../components/UI/NewsCard.vue'
export { default as PostEditPosts } from '../../components/Post/EditPosts.vue'
export { default as PostGallery } from '../../components/Post/Gallery.vue'
export { default as PostImageUpload } from '../../components/Post/ImageUpload.vue'
export { default as PostQuotes } from '../../components/Post/Quotes.vue'
export { default as PostStandardForm } from '../../components/Post/StandardForm.vue'
export { default as CalendarCircuits } from '../../components/Calendar/Circuits.vue'
export { default as CalendarFixtures } from '../../components/Calendar/Fixtures.vue'
export { default as Icon } from '../../components/Icon.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as YIcon } from '../../components/YIcon.vue'
export { default as Error } from '../../components/error.vue'
export { default as AdminNews } from '../../components/Admin/News.vue'
export { default as AdminPartner } from '../../components/Admin/Partner.vue'
export { default as CarBody } from '../../components/Car/Body.vue'
export { default as CarHead } from '../../components/Car/Head.vue'

export const LazyHeadNav = import('../../components/Head/Nav.vue' /* webpackChunkName: "components/head-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeCalendar = import('../../components/Home/Calendar.vue' /* webpackChunkName: "components/home-calendar" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeHero = import('../../components/Home/Hero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyHomePageNav = import('../../components/Home/PageNav.vue' /* webpackChunkName: "components/home-page-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyHomePartners = import('../../components/Home/Partners.vue' /* webpackChunkName: "components/home-partners" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeSocial = import('../../components/Home/Social.vue' /* webpackChunkName: "components/home-social" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeSubscribe = import('../../components/Home/Subscribe.vue' /* webpackChunkName: "components/home-subscribe" */).then(c => wrapFunctional(c.default || c))
export const LazyFoot = import('../../components/Foot/index.vue' /* webpackChunkName: "components/foot" */).then(c => wrapFunctional(c.default || c))
export const LazyModalDeleteModal = import('../../components/Modals/DeleteModal.vue' /* webpackChunkName: "components/modal-delete-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalEditModal = import('../../components/Modals/EditModal.vue' /* webpackChunkName: "components/modal-edit-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalExistsModal = import('../../components/Modals/ExistsModal.vue' /* webpackChunkName: "components/modal-exists-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalMultiUpload = import('../../components/Modals/MultiUpload.vue' /* webpackChunkName: "components/modal-multi-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyModalSelectImageModal = import('../../components/Modals/SelectImageModal.vue' /* webpackChunkName: "components/modal-select-image-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalSelectImagesModal = import('../../components/Modals/SelectImagesModal.vue' /* webpackChunkName: "components/modal-select-images-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalSelectModal = import('../../components/Modals/SelectModal.vue' /* webpackChunkName: "components/modal-select-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyModalUploadModal = import('../../components/Modals/UploadModal.vue' /* webpackChunkName: "components/modal-upload-modal" */).then(c => wrapFunctional(c.default || c))
export const LazyUiCalendarCard = import('../../components/UI/CalendarCard.vue' /* webpackChunkName: "components/ui-calendar-card" */).then(c => wrapFunctional(c.default || c))
export const LazyUiEditor = import('../../components/UI/Editor.vue' /* webpackChunkName: "components/ui-editor" */).then(c => wrapFunctional(c.default || c))
export const LazyUiMessage = import('../../components/UI/Message.vue' /* webpackChunkName: "components/ui-message" */).then(c => wrapFunctional(c.default || c))
export const LazyUiNavCard = import('../../components/UI/NavCard.vue' /* webpackChunkName: "components/ui-nav-card" */).then(c => wrapFunctional(c.default || c))
export const LazyUiNewsCard = import('../../components/UI/NewsCard.vue' /* webpackChunkName: "components/ui-news-card" */).then(c => wrapFunctional(c.default || c))
export const LazyPostEditPosts = import('../../components/Post/EditPosts.vue' /* webpackChunkName: "components/post-edit-posts" */).then(c => wrapFunctional(c.default || c))
export const LazyPostGallery = import('../../components/Post/Gallery.vue' /* webpackChunkName: "components/post-gallery" */).then(c => wrapFunctional(c.default || c))
export const LazyPostImageUpload = import('../../components/Post/ImageUpload.vue' /* webpackChunkName: "components/post-image-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyPostQuotes = import('../../components/Post/Quotes.vue' /* webpackChunkName: "components/post-quotes" */).then(c => wrapFunctional(c.default || c))
export const LazyPostStandardForm = import('../../components/Post/StandardForm.vue' /* webpackChunkName: "components/post-standard-form" */).then(c => wrapFunctional(c.default || c))
export const LazyCalendarCircuits = import('../../components/Calendar/Circuits.vue' /* webpackChunkName: "components/calendar-circuits" */).then(c => wrapFunctional(c.default || c))
export const LazyCalendarFixtures = import('../../components/Calendar/Fixtures.vue' /* webpackChunkName: "components/calendar-fixtures" */).then(c => wrapFunctional(c.default || c))
export const LazyIcon = import('../../components/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyYIcon = import('../../components/YIcon.vue' /* webpackChunkName: "components/y-icon" */).then(c => wrapFunctional(c.default || c))
export const LazyError = import('../../components/error.vue' /* webpackChunkName: "components/error" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminNews = import('../../components/Admin/News.vue' /* webpackChunkName: "components/admin-news" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminPartner = import('../../components/Admin/Partner.vue' /* webpackChunkName: "components/admin-partner" */).then(c => wrapFunctional(c.default || c))
export const LazyCarBody = import('../../components/Car/Body.vue' /* webpackChunkName: "components/car-body" */).then(c => wrapFunctional(c.default || c))
export const LazyCarHead = import('../../components/Car/Head.vue' /* webpackChunkName: "components/car-head" */).then(c => wrapFunctional(c.default || c))
