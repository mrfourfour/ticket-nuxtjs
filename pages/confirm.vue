<template>
<v-content>
  <confirm-form @submit="onSubmit"/>
</v-content>
</template>

<script>
import ConfirmForm from '~/components/ConfirmForm.vue'

export default {
  
  name: 'Confirm', 
  
  components: {
    ConfirmForm, 
  },
  data() {
    return {
      username: ''
    }
  },
  asyncData({route, params}) {
    console.log({route, params})
    return { username: params.username }
  },
  methods: {
    onSubmit (payload) {
      console.log(payload)
      console.log(this.$route.params)
      const temp = {'username': this.$route.params.username, 'code': payload.code}
      console.log(temp)
      //{ username: 'aerain', password: 'Comka5857ei_'}
      this.$store.dispatch('cognito/confirmUser', temp)
      .then(res => {
        console.log(res)
        this.$router.push({ name: 'postlistpage' })
      })
      .catch(err => {
        console.log(err.message)
        alert(err.message)
      })
    }
  },  
}
</script>