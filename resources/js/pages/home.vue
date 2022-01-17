<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="'home'">
        You are logged in LMS Dashboard
      </card>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  metaInfo () {
    return { title: 'home' }
  }
}
</script>
