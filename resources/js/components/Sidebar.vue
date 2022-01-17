<template>
  <div>
    <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <div class="user-pic">
          <img class="img-responsive img-rounded" src="/images/logo.png"
            alt="User picture">
        </div>
      </div>
      <!-- <div class="sidebar-header">
        <div class="user-pic">
          <img class="img-responsive img-rounded" src="/images/logo.png"
            alt="User picture">
        </div>
        <div class="user-info">
          <span class="user-name">Jhon
            <strong>Smith</strong>
          </span>
          <span class="user-role">Administrator</span>
          <span class="user-status">
            <i class="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div> -->

      <!-- sidebar-search  -->
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>
          <li v-for="(item, index) in menuItems" :key="index" :class="[ item.children?'sidebar-dropdown':'', item.activeClass ]" @click="toggleSubMenu(index)">
            <a href="#" class="justify-space-between">
              <font-awesome-icon class="w-10 white--text mr-2 mt-0" v-if="item.icon" right :icon="item.icon" />
              <span>{{item.title}}</span>
              <font-awesome-icon class="w-4 white--text mr-2 mt-0 float-right" v-if="item.icon" :icon="getIcon(index)" />
            </a>
            <div class="sidebar-submenu" :ref="'sub_menu_' + index" v-if="item.children">
              <ul>
                <li v-for="child in item.children" :key="child.title">
                  <a href="#">{{child.title}}</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-folder"></i>
              <span>Examples</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
    <!-- sidebar-content  -->
    <div class="sidebar-footer">
      <a href="#" @click.prevent="logout">
        <font-awesome-icon class="w-10 white--text mr-2 mt-0" right icon="power-off" />
      </a>
    </div>
  </nav>
</div>
</template>

<script>

export default {
  name: 'Sidebar',
  data: () => ({
    appName: window.config.appName,
    menuItems: [
      {
        title: 'Components',
        route: '',
        icon: 'tachometer-alt',
        showSubMenu: false,
        activeClass: '',
        children: [
          {
            title: 'General',
            route: '',
            activeClass: '',
            icon: null
          },
          {
            title: 'Tables',
            route: '',
            activeClass: '',
            icon: null
          }
        ]
      },
      {
        title: 'Maps',
        route: '',
        activeClass: '',
        showSubMenu: false,
        icon: 'tachometer-alt',
        children: null
      },
      {
        title: 'Charts',
        route: 'chart',
        activeClass: '',
        showSubMenu: false,
        icon: 'tachometer-alt',
        children: null
      }
    ]
  }),
  methods: {
    toggleSubMenu (index) {
      if (this.$refs['sub_menu_' + index] && this.$refs['sub_menu_' + index][0].style.display == 'block') {
        this.menuItems[index].showSubMenu = true
        this.$refs['sub_menu_' + index][0].style.display = 'none'
      } else {
        this.menuItems[index].showSubMenu = false
        // this.$refs['sub_menu_' + index][0].style.display = 'block'
        this.$router.push({ name: 'chart' })
      }
      this.menuItems[index].activeClass = this.menuItems[index].activeClass == 'active' ? '' : 'active'

      this.menuItems.forEach( async (item, index) => {
        this.menuItems[index].activeClass = ''
        console.log(item, index)
      })

      console.log('this.menuItems[index]', this.menuItems[index].activeClass);
    },

    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },

    getIcon (index) {
      if (this.menuItems[index].showSubMenu) {
        return 'chevron-right'
      }
      return 'chevron-down'
    }
  }
}

</script>
<style scoped src="~/assets/css/sidebar.css"></style>
