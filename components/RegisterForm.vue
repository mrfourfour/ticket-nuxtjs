<template>
<v-flex xs12 sm6 offset-sm3>
  <v-card>
    <v-toolbar 
      color="primary"
      dark
      flat
    >
    <v-toolbar-title>Register form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Username"
          name="username"
          prepend-icon="mdi-account-circle"
          type="text"
          v-model="username"
        >
        </v-text-field>
        <v-text-field
          label="E-mail"
          name="email"
          prepend-icon="mdi-account-circle"
          type="text"
          v-model="email"
        >
        </v-text-field>
        <v-text-field
          id="password"
          label="Password"
          type="password"
          name="password"
          prepend-icon="mdi-lock"
          v-model="password"
        >
        </v-text-field>
        <v-text-field
          id="password"
          label="Password Confirm"
          type="password"
          name="passwordConfirm"
          prepend-icon="mdi-lock"
          v-model="passwordConfirm"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="onSubmit"
        color="info">Register</v-btn>
    </v-card-actions>
  </v-card>
</v-flex>
</template>

<script>
  export default {
    data() {
      return {
        showPassword: false,
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        register: false, 

        username: '', 
        password: '', 
        email: '',
        password: '',
        passwordConfirm: '', 

      }
    },
    props: {
      source: String,
    },
    methods: {
      onSubmit () {
        const { username, email, password, passwordConfirm } = this
        if (password !== passwordConfirm) {
            return false
        }
        this.$emit('submit', { username, email, password })
      },
    },
    
  }
</script>