<template>
<v-content>
  <p>로그아웃 중입니다.</p>
</v-content>
</template>

<script>
export default {
  
  name: 'Logout', 

  created() {
      this.$store.dispatch('cognito/signout')
      this.$router.push({ name: 'index' })
  },
}
</script>