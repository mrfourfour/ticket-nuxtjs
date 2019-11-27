<template>
  <v-layout
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Vuetify 와 Nuxt.js 를 활용한 판매자 페이지
        </v-card-title>
      </v-card>
    <v-carousel
      cycle>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }, 
  data () {
    return {
      items: [
        {
          src: 'https://ticket-mrfourfour-bucket.s3.ap-northeast-2.amazonaws.com/%EB%91%90%EB%91%A5%ED%83%81.jpg',
        },
        {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/18118856_1241566269231557_878738316478612961_n.jpg?_nc_cat=108&_nc_oc=AQlFyZ1Sa8LbswsnnYJTyOZxEDXk6GhRMVNkFlViUFTi_gO55XrXCT0QZWz6g5lEdSA&_nc_ht=scontent-icn1-1.xx&oh=11c6653cb72d0d9b5f6da4cd3c21e6f5&oe=5E520B71',
        },
        {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/18813824_1005436419591657_8459445007738425461_n.jpg?_nc_cat=101&_nc_oc=AQmUCHHFCxngPW7-4iyWdcDnLMV1Ii0Gn4gtJJQ2CUFgRSC9nK82mHUzfhyGUuJ1XCM&_nc_ht=scontent-icn1-1.xx&oh=b20a6826ad2805faa467e925ce00481e&oe=5E5508DC',
        },
        {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/34444454_1410510025760907_7133966573013827584_n.jpg?_nc_cat=103&_nc_oc=AQnWF0vVq2Zw6LsM5BXYYZkKCEGwJEaMX3xPDdOqADZPDAgFQuqC8qpTJjcYaAeOw3A&_nc_ht=scontent-icn1-1.xx&oh=f358c6fd468d20c3676cf24764313f2a&oe=5E5EA06F',
        },
                {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/67311995_2038155426290406_1796645134142537728_n.jpg?_nc_cat=108&_nc_oc=AQlONnTOCibsGeY57lRrKsV4L8J_4vDu5yU5szPyreWFpHXGSdJvwEOAG50fOi77znY&_nc_ht=scontent-icn1-1.xx&oh=38fbc68d6309f7309f12382a375cbd32&oe=5E5C5536',
        },
                {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/14963331_947393428699950_4457056020056287988_n.jpg?_nc_cat=101&_nc_oc=AQnHYh1i_Z49MKkn_VE8DGb_yqB0SVr7kUix_uri5cQQKJZHDf2PilNDYnLwVfK9Nno&_nc_ht=scontent-icn1-1.xx&oh=80b1bd7a9d7567e5fccfe1c82dee6f65&oe=5E5D2CDB',
        },
                {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/18528038_727245487460073_4678987096585520440_n.jpg?_nc_cat=110&_nc_oc=AQnlMJ4GrOBCREH-08h3krr59OU3ugxTWP5hd5uJNQs8yu2vx8Qaw9ILu88hSlm7KhA&_nc_ht=scontent-icn1-1.xx&oh=2504c51a16172709532d7c3c83ef2c15&oe=5E1CF25A',
        },
                {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/22552371_1251683614976883_37188191730665322_n.jpg?_nc_cat=103&_nc_oc=AQkEMJQlWYK-AbmvadgqMWsBL-Sr3Kn_yKWXA810do5EDq2O5GSqklHG2Zbk_ei_QY4&_nc_ht=scontent-icn1-1.xx&oh=498e43a2ede57bcf0f4f165e21bd88d0&oe=5E1BE042',
        },
                {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/34444454_1410510025760907_7133966573013827584_n.jpg?_nc_cat=103&_nc_oc=AQnWF0vVq2Zw6LsM5BXYYZkKCEGwJEaMX3xPDdOqADZPDAgFQuqC8qpTJjcYaAeOw3A&_nc_ht=scontent-icn1-1.xx&oh=f358c6fd468d20c3676cf24764313f2a&oe=5E5EA06F',
        },
                {
          src: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/34444454_1410510025760907_7133966573013827584_n.jpg?_nc_cat=103&_nc_oc=AQnWF0vVq2Zw6LsM5BXYYZkKCEGwJEaMX3xPDdOqADZPDAgFQuqC8qpTJjcYaAeOw3A&_nc_ht=scontent-icn1-1.xx&oh=f358c6fd468d20c3676cf24764313f2a&oe=5E5EA06F',
        },

      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>
