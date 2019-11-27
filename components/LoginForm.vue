<template>
<v-flex xs12 sm6 offset-sm3>
  <v-card>
    <v-toolbar 
      color="primary"
      dark
      flat
    >
    <v-toolbar-title>Login form</v-toolbar-title>
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
          id="password"
          :type="showPassword ? 'text' : 'password' "
          label="Password"
          name="password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          v-model="password"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn 
        color="success"
        :to="{ name: 'register' }"
        >Register</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        @click="onSubmit"
        color="info">Login</v-btn>
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
        password: ''

      }
    },
    props: {
      source: String,
    },
    methods: {
      onSubmit () {
        const { username, password } = this
        this.$emit('submit', { username, password })
      },
    },
    
  }
</script>