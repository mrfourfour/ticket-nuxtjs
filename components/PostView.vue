<template>
<v-container fluid>
    <!-- <v-content> -->
    <v-flex xs12 sm6 offset-sm3>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
    >
      <v-img
        :src="post.image"
      ></v-img>
  
      <v-card-title>{{post.name}}</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ml-4">4.5 (413)</div>
        </v-row>
  
        <div class="my-4 subtitle-1 ">
          $ • {{post.price}}
        </div>
  
        <div>{{post.info}}</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Tonight's availability</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>
  
          <v-chip>7:30PM</v-chip>
  
          <v-chip>8:00PM</v-chip>
  
          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple accent-4"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-flex>
    <!-- </v-content> -->
</v-container>
</template>

<script>
export default {
    name: 'PostView',
    data() {
        return {
            loading: false,
            selection: 1,
        }
    },
    props: {
        post: {
            type: Object,
            required: true, 
        }
    }, 
    methods: {
        reserve () {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        }
    },
}
</script>