<template>
<v-container 
  fluid 
  grid-list-md > 
  <v-layout row wrap>
    <v-flex
      v-for="post in posts"
      :key="post.id">
        <v-card
          :to="{ name: 'postviewpage-postId', params: { postId: post.id } }"
        >
          <v-img
            :src="post.image"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250px"
          >
            <v-card-title 
              class="fill-height align-end"
              v-text="post.name"
              >
            </v-card-title>
          </v-img>
          <v-card-actions>
            <!-- <v-btn
              text
              color="primary"
            >
              Read
            </v-btn> -->
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="16"
            ></v-rating>
            <div class="grey--text ml-3 mr-6">4.5 (413)</div>
              <v-spacer></v-spacer>  
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
          </v-card-actions>
        </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array
    }
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>