<template>
<v-content>
  <register-form @submit="onSubmit"/>
</v-content>
</template>

<script>
import RegisterForm from '~/components/RegisterForm.vue'

export default {
  
  name: 'Register', 
  
  components: {
    RegisterForm, 
  },
  methods: {
    onSubmit (payload) {
      console.log(payload)
      const { username, password } = payload
      const { email } = payload
      const attributes = { email }
      const result = {username, password, attributes}
      console.log({ username, password })
      console.log({ email })
      console.log(username)
      console.log(attributes)
      console.log(result)
    //   //{ username: 'aerain', password: 'Comka5857ei_'}
      this.$store.dispatch('cognito/registerUser', { username, password, attributes})
      .then(res => {
        console.log(res)
        this.$router.push({ name: 'confirm', params: { username } })
      })
      .catch(err => {
        console.log(err.message)
        alert(err.message)
      })
    }
  },  
}
</script>