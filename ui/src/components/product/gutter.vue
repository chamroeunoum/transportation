<template>
  <div class="flex flex-wrap justify-around" >
    <div class="flex flex-wrap w-full h-12 border-b ">
      <div class="sct-transaction-date w-1/2 flex leading-10 ">{{ sctTransactionDate }}</div>
      <div class="sct-transaction-new-package flex flex-row-reverse w-1/2">
        <div @click="toggleCreatePopup(true)" class="mx-2 w-8 h-8 mt-1 text-center hover:border-blue-300 duration-300 cursor-pointer" >
          <van-icon name="add-o" :size="32" class="hover:text-blue-600 " />
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-4 h-4 mt-2 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg> -->
        </div>
        <div class="w-1/2" >
          <input type="text" @keyup="filterProducts" v-model="search.value" class="bg-gray-100 px-2 h-8 my-1 w-full rounded border border-gray-200 focus:border-blue-600 hover:border-blue-600 " placeholder="ស្វែងរកឥវ៉ាន់តាមលេខកូដ" />
        </div>
        <div class="w-1/4 leading-10" >
          ចំនូនឥវ៉ាន់សរុប ៖ {{ this.products.all.length }} ដុំ 
        </div>
        <div class="w-1/4 leading-10" >
          តម្លៃសរុប ៖ {{ totalPrice }} ฿ (THB)
        </div>
      </div>
    </div>
    <van-divider class="w-full text-2xl font-moul" >កញ្ចប់ឥវ៉ាន់</van-divider>
    <div v-for="(record, index) in this.products.matched" :key="index" class="relative text-left border border-gray-300 bg-gray-50 m-4 p-4" >
      <div class="w-full font-extrabold mt-8 mb-4" >Code : {{ record.code }}</div>
      <div class="w-full font-extrabold my-4" >From : {{ record.from }}</div>
      <div class="w-full font-extrabold my-4" >To : {{ record.to }}</div>
      <div class="w-full font-extrabold my-4" >Sender : {{ record.sender_phone }}</div>
      <div class="w-full font-extrabold my-4" >Receiver : {{ record.receiver_phone }}</div>
      <div class="w-full font-extrabold my-4" >Weight : {{ record.weight }}</div>
      <div class="w-full font-extrabold my-4" >Dimension : {{ record.dimension }}</div>
      <div class="w-full font-extrabold my-4" >Price : {{ record.price }} THB</div>
      <div class="w-full font-extrabold mt-4 mb-8" >Note : {{ record.note }}</div>
      <div class="mx-2 w-4 h-4 mt-1 text-center text-red-500 cursor-pointer absolute top-4 right-1" >
        <van-icon name="close" :size="20" class="" />
      </div>
      <div class="mx-2 w-4 h-4 mt-1 text-center text-blue-500 cursor-pointer absolute top-4 right-7" >
        <van-icon name="edit" :size="20" class="" />
      </div>
      <div class="mx-2 w-4 h-4 mt-1 text-center text-blue-500 absolute left-2 top-4 " >
        <van-icon name="logistics" :size="20" class="" />
      </div>
      <div class="mx-2 w-4 h-4 mt-1 text-center text-green-500 absolute left-8 top-4 " >
        <van-icon name="passed" :size="20" class="" />
      </div>
      <qrcode-vue :value="record.code" :size="140" level="H" class="mx-auto" />
    </div>
    <!-- Form create -->
    <div class="vcb-pop-create">
      <van-popup v-model:show="createPopToggle" class="p-8" >
        <div class="font-bold my-4 text-xl">ដាក់ផ្ញើរ</div>
        <!-- Support Khmer -->
        <!-- <qrcode-stream @decode="onDecode" ></qrcode-stream> -->
        <!-- Support Khmer -->
        <!-- <qrcode-vue value="អ៊ុំ ចំរើន" size="300" level="H" /> -->
        <!-- Not support khmer -->
        <!-- <vue3-barcode value="Chamroeun OUM" :height="50" /> -->
        <van-divider />
        <van-cell-group inset>
          <!-- <van-field v-model="product.code" label="លេខកូដ" placeholder="លេខកូតសម្គាល់ប្រអប់ឥវ៉ាន់" /> -->
          <van-field
            v-model="product.from"
            label="ផ្ញើចេញពី"
            type="textarea"
            placeholder="អសយដ្ឋានក្រុមហ៊ុន (សាខា)"
            rows="1"
            autosize
            disabled
          /> 
          <van-field
            v-model="product.to"
            label="គោលដៅ"
            type="textarea"
            placeholder="គោលដៅដែលដែលត្រូវទៅ"
            rows="1"
            autosize
          />
          <van-field v-model="product.sender_phone" type="phone" label="លេខអ្នកផ្ញើរ" placeholder="លេខអ្នកផ្ញើរ" />
          <van-field v-model="product.receiver_phone" type="phone" label="លេខអ្នកទទួល" placeholder="លេខអ្នកទទួល" />
          <van-field v-model="product.weight" type="number" label="ទំងន់" placeholder="ទំងន់" />
          <van-divider>ទំហំប្រអប់</van-divider>
          <van-radio-group v-model="product.dimension" direction="horizontal" class="mx-4 my-6" label="ទំហំប្រអប់" placeholder="ទំហំប្រអប់" >
            <van-radio name="60x40x20">60x40x20</van-radio>
            <van-radio name="60x60x40">60x60x40</van-radio>
            <van-radio name="20x10,10">20x10x10</van-radio>
            <van-radio name="20x5x10">20x5x10</van-radio>
          </van-radio-group>
          <van-divider />
          <van-field :step="1" v-model="product.price" type="number" label="តម្លៃ" placeholder="តម្លៃ" />
          <van-field
            v-model="product.note"
            label="សម្គាល់"
            type="textarea"
            placeholder="សម្គាល់ផ្សេងៗ"
            rows="3"
            autosize
          />
        </van-cell-group>
        <van-button :loading="savingLoading" loading-text="រក្សារទុក..." type="primary" class="my-4 w-1/2" @click="saveProduct()" >ផ្ញើ</van-button>
      </van-popup>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
  setup(){
    return {}
  },
  data(){
    return {
      sctTransactionDate: new Date() ,
      createPopToggle : false ,
      products: {
        all : [] ,
        matched : []
      } ,
      product: {
        code: '' ,
        from: 'បាងកក' ,
        to: '' ,
        sender_phone: '' ,
        receiver_phone: '' ,
        weight: '' ,
        dimension: '' ,
        price: '' ,
        note: ''
      },
      clearProduct: {
        code: '' ,
        from: 'បាងកក' ,
        to: '' ,
        sender_phone: '' ,
        receiver_phone: '' ,
        weight: '' ,
        dimension: '' ,
        price: '' ,
        note: ''
      },
      savingLoading: false ,
      search: {
        value: ''
      }
    }
  },
  computed:{
    totalPrice(){
      let total = 0 
      for(var i in this.products.all ){
        total += this.products.all[i].price
      }
      return total
    }
  },
  beforeMount(){
    this.getRecords()
  },
  mounted(){
    
  },
  methods: {
    filterProducts(){
      this.products.matched = []
      for(var i in this.products.all ){
        if( this.products.all[i].code.indexOf( this.search.value ) != -1 ) {
          this.products.matched.push( this.products.all[i] )
        }
      }
      console.log( this.products.matched )
      if( this.products.matched.length <= 0 ) {
        this.products.matched = this.products.all
      }
    },
    validateData(){
      if( this.product.from == "" ){
        return false
      }
      if( this.product.to == "" ){
        return false
      }
      if( this.product.sender_phone == "" ){
        return false
      }
      if( this.product.receiver_phone == "" ){
        return false
      }
      if( this.product.price == "" ){
        return false
      }
      return true
    },
    toggleCreatePopup(helper) {
      this.createPopToggle = helper === true ? helper : false 
    },
    saveProduct(){
      if( !this.validateData() ){
        return false
      }
      this.savingLoading = true 
      this.$store.dispatch('product/create', this.product ).then( res => {
        switch( res.status ){
          case 200 : 
            this.getRecords()
            break;
          default:

            break;
        }
        this.product = this.clearProduct
        this.toggleCreatePopup(false)
        this.savingLoading = false 
      }).catch( err => {
        console.log( err )
      })
      
      // .then( res => {
      //   console.log( res )
      // }).catch( err => {
      //   console.log( err )
      // })
    },
    /**
     * Get records
     */
    getRecords(){
      this.$store.dispatch('product/list').then(res => {
        this.$store.commit('product/setRecords',res.data.records)
        this.products.all = this.products.matched = this.$store.getters['product/getRecords'].records
      }).catch( err => {
        console.log( err )
      })
    }
  }
  
}
</script>