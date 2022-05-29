<template>
  <div id="app"  v-loading="app.loading">
  <router-view name="top"></router-view>
  <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex' 
export default {
  name: 'App',
  computed: {
			...mapState(['app'])
		}
}
</script>

<style>
body{
  margin: 0;
}

</style>
