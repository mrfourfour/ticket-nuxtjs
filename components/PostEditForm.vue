<template>
<v-container fluid>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar 
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>상품 등록하기</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="15"
              :rules="nameRules"
              label="제목"
              required
            >{{ post.name }}</v-text-field>
            <v-text-field
              v-model="price"
              :rules="priceRules"
              label="가격"
              required
              append-icon="원"
            >{{ post.price }}</v-text-field>
            <v-select
              v-model="area"
              :items="areas"
              :rules="[v => !!v || 'Item is required']"
              label="지역"
              item-text="name"
              require
            ></v-select>
            <v-select
              v-model="category"
              :items="categorys"
              :rules="[v => !!v || 'Item is required']"
              label="주 카테고리"
              required
              item-text="name"
            ></v-select>
            <v-select
              v-model="subCategory"
              :items="search(category,subCategorys)"
              :rules="[v => !!v || 'Item is required']"
              label="부 카테고리"
              required
              item-text="name"
            ></v-select>
            <v-textarea
              v-model="info"
              label="내용"
              :rules="[v => !!v || 'Item is required']"
              required
              auto-grow
              rows=10
            ></v-textarea>
            <!-- <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox> -->
            <v-file-input
              label="image"
              show-size
              filled
              prepend-icon="mdi-camera"
              clear-icon="mdi-cancel"
              :rules="[v => !!v || 'Item is required']">
            </v-file-input>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              상품등록
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: 'PostCreateForm',
    props: {
      post: {
          type: Object, 
          require: true,
      }
    },
  computed: {
    
  },
  created() {
    console.log(this.post),
    this.id = this.post.id
    this.name = this.post.name
    this.price = this.post.price
    this.info = this.post.info
    this.area = this.post.area
    this.category = this.post.category
    this.subCategory = this.post.subCategory
    this.image = this.post.image
    this.sellerId = this.post.sellerId
    this.date = this.post.date
  },
  methods: {
    onSubmit() {
      // this.price = Number(this.price)
      const { id, name, info, price, image, category, subCategory, sellerId, area, date, options, reviews} = this
      const post = { id, name, info, price, image, category, subCategory, sellerId, area, date, options, reviews}
      console.log(post)
      this.$emit('submit', post)
    },
    validate () {
      if (this.$refs.form.validate()) {
        this.onSubmit()
      } else {

      }
    },
    //주카테고리 별 부카테고리 선택!
    search(category, subCategorys) {
      for (var i=0; i < subCategorys.length; i++) {
        if (subCategorys[i].name == category) {
          return subCategorys[i].value
        }
      }
    }
  }, 
  data() {
    return {
      id: '', 
      name: '',
      info: '', 
      price: '',
      date: '', 
      image: 'https://placeimg.com/800/600/fashion',
      categorys: [
        {'name': '레저','value': 'LEISURE'},
        {'name': '전시회','value': 'EXHIBITION'},
        {'name': '여행','value': 'TOUR'},
        {'name': '콘서트','value': 'CONCERT'},
        {'name': '연극','value': 'THEATER'},
        // 'LESIURE'
        // 'EXHIBITION',
        // 'TOUR',
        // 'CONCERT',
        // 'THEATER',
      ],
      category: '', 
      subCategorys: [
        //LESIURE
        {'name':'LEISURE', 'value': [
          {'name': '해양','value': 'SEA'},
          {'name': '육상','value': 'LAND'},
          {'name': '스파','value': 'SPA'},
        ]},
        // 'SEA','LAND','SPA',
        // //EXHIBITION
        {'name':'EXHIBITION', 'value': [
          {'name': '엑스포','value': 'EXPO'},
          {'name': '디스플레이','value': 'DISPLAY'},
          {'name': '박물관','value': 'MUSEUM'},
        ]},
        // 'EXPO','DISPLAY','MUSEUM',
        // //TOUR
        {'name':'TOUR', 'value': [
          {'name': '축제','value': 'FESTIVAL'},
          {'name': '관광명소','value': 'ATTRACTION'},
        ]},
        // 'FESTIVAL','ATTRACTION',
        // //CONCERT
        {'name':'CONCERT', 'value': [
          {'name': '트로트','value': 'TROT'},
          {'name': '락','value': 'ROCK'},
          {'name': '힙합/알앤비','value': 'HIPHOPNRAP'},
          {'name': '발라드','value': 'BALLAD'},
          {'name': '아이돌','value': 'IDOL'},
          {'name': '인디','value': 'INDE'},
        ]},
        // 'TROT','ROCK','HIPHOPNRAP', 'BALLAD','IDOL','INDE'
        {'name':'THEATER', 'value': [
          {'name': '연극','value': 'THEATER'},
        ]},
      ], 
      subCategory: '',
      sellerId: '강민규',
      area: '',
      //나머지 지역 채워 넣어야함...!
      areas: [
        {'name':'서울', 'value': 'SEOUL'},
        {'name':'인천', 'value': 'INCHEON'},
        {'name':'대구', 'value': 'DAEGU'},
        {'name':'대전', 'value': 'DAEJEON'},
        {'name':'부산', 'value': 'BUSAN'},
        {'name':'울산', 'value': 'ULSAN'},
        {'name':'광주', 'value': 'GWANGJU'},
        {'name':'경기', 'value': 'GYEONGGI'},
        {'name':'강원', 'value': 'GANGWON'},
        {'name':'충청', 'value': 'CHUNGCHEONG'},
        {'name':'전라', 'value': 'JEOLLA'},
        {'name':'경상', 'value': 'GYEONGSANG'},
        {'name':'제주', 'value': 'JEJU'},
      ],
      options: [],
      reviews: [], 

      nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 15) || 'Name must be less than 10 characters',], 
      priceRules: [
        v => !!v || 'Name is required', 
        v => /^[0-9+]*$/.test(v) || '숫자만'
      ], 
      valid: true,
    }
  },
}
</script>