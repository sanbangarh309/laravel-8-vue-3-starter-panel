<template>
  <div class="flex page-wrapper chiller-theme toggled">
    <!-- <navbar /> -->
    <sidebar v-if="authenticated" />
        <main class="page-content w-100">
          <div class="container-fluid mt-4">
            <child />
          </div>
        </main>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'
import Child from '~/components/Child'
import { mapGetters } from 'vuex'

export default {
  name: 'MainLayout',

  components: {
    Navbar, Child, Sidebar
  },

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
<style scoped>
.force-to-full-width {
  max-width: 100% !important;
}
.page-wrapper {
  height: 100vh;
}
</style>
