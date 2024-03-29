import app from '~/createApp'
import { createVuetify } from 'vuetify'

import {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VMain,
  VNavigationDrawer,
  VFooter,
  VLayout,
  VList,
  VHover,
  VOverlay,
  VFileInput,
  VListItem,
  VListItemTitle,
  VListItemSubtitle,
  VListItemAvatar,
  VMenu,
  VBtn,
  VIcon,
  VContainer, VRow, VCol, VSpacer,
  VExpandTransition,
  VCard,
  VCardActions,
  VCardTitle,
  VCardText,
  VSlideYTransition,
  VAvatar,
  VChip,
  VTextField,
  VProgressCircular,
  VCheckbox,
  VAlert,
  VBreadcrumbs,
  VParallax,
  VTextarea,
  VSwitch,
  VDialog,
  VDivider,
  VProgressLinear,
  VImg,
  VPagination,
  VTimeline,
  VTimelineItem,
  VSheet,
  VTooltip
} from "vuetify/lib/components"


app.use(createVuetify, {
  components: {
    VApp,
    VAppBar,
    VMain,
    VAppBarNavIcon,
    VNavigationDrawer,
    VFooter,
    VMenu,
    VList,
    VHover,
    VOverlay,
    VListItem,
    VListItemAvatar,
    VFileInput,
    VListItemTitle,
    VListItemSubtitle,
    VBtn,
    VIcon,
    VLayout,
    VContainer, VRow, VCol, VSpacer,
    VExpandTransition,
    VCard,
    VCardActions,
    VCardTitle,
    VCardText,
    VSlideYTransition,
    VAvatar,
    VChip,
    VTextField,
    VProgressCircular,
    VCheckbox,
    VAlert,
    VBreadcrumbs,
    VParallax,
    VTextarea,
    VSwitch,
    VDialog,
    VDivider,
    VProgressLinear,
    VImg,
    VPagination,
    VTimeline,
    VTimelineItem,
    VSheet,
    VTooltip
  },
})

import colors from 'vuetify/lib/util/colors'

export default createVuetify({
  theme: {
      dark: true,
      light: false,
      themes: {
          dark: {
            primary: "#39e10f",
            secondary: "#607d8b",
            accent: "#4db6ac",
            error: "#b71c1c",
            info: "#bbdefb",
            success: "#a5d6a7",
            warning: "#ffc107"
          },
          light: {
            primary: colors.blue,
            secondary: "#607d8b",
            accent: "#4db6ac",
            error: "#b71c1c",
            info: "#bbdefb",
            success: "#a5d6a7",
            warning: "#ffc107"
          },
      },
  },
  // icons: {
  //   iconfont: 'faSvg',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  // },
})
