<template>
<v-content>
  <login-form @submit="onSubmit"/>
</v-content>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'
import api from '@/api'
export default {
  
  name: 'Login', 
  
  components: {
    LoginForm, 
  },
  methods: {
    onSubmit (payload) {
      console.log(payload)
      //{ username: 'aerain', password: 'Comka5857ei_'}
      this.$store.dispatch('cognito/signInUser', payload)
      .then(res => {
        console.log(res)
        this.$router.push({ name: 'postlistpage' })
        // this.$store.dispatch('cognito/fetchSession')
        // api.default.headers.common.Authorization = `Bearer `
      })
      .catch(err => {
        console.log(err.message)
        alert(err.message)
      })
    }
  },  
}
</script>