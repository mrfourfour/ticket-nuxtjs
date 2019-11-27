<template>
<v-flex xs12 sm6 offset-sm3>
  <v-card>
    <v-toolbar 
      color="primary"
      dark
      flat
    >
    <v-toolbar-title>Confirm Form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Code"
          name="code"
          prepend-icon="mdi-account-circle"
          type="text"
          v-model="code"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="onSubmit"
        color="info">Confirm</v-btn>
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

        code: '',  
      }
    },
    props: {
      source: String,
    },
    methods: {
      onSubmit () {
        const { code } = this
        this.$emit('submit', { code })
      },
    },
    
  }
</script>