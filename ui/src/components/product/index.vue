<template>
  <div class="w-full" >
    <!-- Top action panel of crud -->
    <div class="flex title-bar border-b border-gray-200">
      <!-- Title of crud -->
      <div class="flex w-64 h-10 py-1 title " >
        <svg xmlns="http://www.w3.org/2000/svg" class="mt-2 w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <div class="leading-8 font-bold" v-html="model.title" ></div>
      </div>
      <!-- Actions button of the crud -->
      <div class="flex-grow action-buttons flex-row-reverse flex">
        <!-- New Button -->
        <div @click="toggleCreatePopup(true)" class="mx-2 w-8 h-8 text-center hover:border-blue-300 duration-300 cursor-pointer" >
          <van-icon name="add-o" size="30" />
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-4 h-4 mt-2 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg> -->
        </div>
      </div>
      <!-- Filter panel of crud -->
      <div class="filters-bar"></div>
    </div>
    <!-- Table of crud -->
    <div class="vcb-table-panel ">
      <table class="vcb-table" >
        <tr class="vcb-table-headers" >
          <th class="vcb-table-header" >No</th>
          <th class="vcb-table-header" >Code</th>
          <th class="vcb-table-header">From</th>
          <th class="vcb-table-header">To</th>
          <th class="vcb-table-header">Sender</th>
          <th class="vcb-table-header">Receiver</th>
          <th class="vcb-table-header">Weight (KG)</th>
          <th class="vcb-table-header">Dimension (WxHxL)</th>
          <th class="vcb-table-header">Price (THB)</th>
          <th class="vcb-table-header">Note</th>
          <th class="vcb-table-header w-60" >Actions</th>
        </tr>
        <tr v-for="(record, index) in $store.getters['product/getRecords'].records" :key='index' class="vcb-table-row" >
          <td class="vcb-table-cell font-bold" >{{ index + 1 }}</td>
          <td class="vcb-table-cell" >{{ record.code }}</td>
          <td  class="vcb-table-cell" >{{ record.from }}</td>
          <td  class="vcb-table-cell" >{{ record.to }}</td>
          <td  class="vcb-table-cell" >{{ record.sender_nubmer }}</td>
          <td class="vcb-table-cell" >{{ record.receiver_id }}</td>
          <td  class="vcb-table-cell" >{{ record.weight }}</td>
          <td  class="vcb-table-cell" >{{ record.dimension }}</td>
          <td  class="vcb-table-cell" >{{ record.price }}</td>
          <td class="vcb-table-cell" >{{ record.note }}</td>
          <td class="vcb-table-actions-panel" >
            <!-- New Button -->
            <div to="/product/new" class="vcb-action-button" >
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-4 h-4 mt-2 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <!-- New Button -->
            <div to="/product/new" class="vcb-action-button  " >
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-4 h-4 mt-2 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <!-- New Button -->
            <div to="/product/new" class="vcb-action-button  " >
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto w-4 h-4 mt-2 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <!-- Pagination of crud -->
    <div class="vcb-table-pagination">
      <!-- First -->
      <!-- Previous -->
      <div class="vcb-pagination-page" v-html='"<"' ></div>
      <!-- Pages (7) -->
      <div v-for='item in 7' :key='item' class="vcb-pagination-page" >{{ item }}</div>
      <!-- Next -->
      <div class="vcb-pagination-page" v-html='">"' ></div>
      <!-- Last -->
      <!-- Go to -->
      <!-- Total per page -->
    </div>
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
          <!-- <van-field v-model="product.code" label="លេខកូដ" placeholder="លេខកូតសម្គាល់ប្រអប់ឥវ៉ាន់" />      
          <van-field
            v-model="product.from"
            label="អសយដ្ឋាន"
            type="textarea"
            placeholder="អសយដ្ឋានក្រុមហ៊ុន (សាខា)"
            rows="1"
            autosize
          /> -->
          <van-field
            v-model="product.to"
            label="គោលដៅ"
            type="textarea"
            placeholder="គោលដៅដែលដែលត្រូវទៅ"
            rows="1"
            autosize
          />
          <van-field v-model="product.sender" type="phone" label="លេខអ្នកផ្ញើរ" placeholder="លេខអ្នកផ្ញើរ" />
          <van-field v-model="product.receiver" type="phone" label="លេខអ្នកទទួល" placeholder="លេខអ្នកទទួល" />
          <van-field v-model="product.weight" type="number" label="ទំងន់" placeholder="ទំងន់" />
          <van-divider>ទំហំប្រអប់</van-divider>
          <van-radio-group v-model="product.dimension" direction="horizontal" class="mx-4 my-6" label="ទំហំប្រអប់" placeholder="ទំហំប្រអប់" >
            <van-radio name="60x40x20">60x40x20</van-radio>
            <van-radio name="60x60x40">60x60x40</van-radio>
            <van-radio name="20x10,10">20x10x10</van-radio>
            <van-radio name="20x5x10">20x5x10</van-radio>
          </van-radio-group>
          <van-divider />
          <van-field v-model="product.price" type="number" label="តម្លៃ" placeholder="តម្លៃ" />
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
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import Vue3Barcode from 'vue3-barcode'
export default {
  components: {
    QrcodeVue ,
    Vue3Barcode
  },
  setup(){
    return {
    }
  },
  name: "Product" ,
  data(){
    return {
      model: {
        name: "product" ,
        title: "Product"
      },
      table: {
        data: [] ,
        columns: [] ,
        pagination: {

        }
      },
      createPopToggle : false ,
      product: {
        code: '' ,
        from: '' ,
        to: '' ,
        sender: '' ,
        receiver: '' ,
        weight: '' ,
        dimension: '' ,
        price: '' ,
        note: ''
      },
      savingLoading: false
    }
  },
  beforeMount(){
    this.$store.dispatch('product/list').then(res => {
      this.$store.commit('product/setRecords',res.data.records)
    }).catch( err => {
      console.log( err )
    })
  },
  mounted(){
    // console.log( this.axios )
    // console.log( this.$store.dispatch('product/getAllProducts') )
    // console.log( this.$store.state.product.all )
  },
  methods:{
    onDecode(qrcodeString){
      console.log( qrcodeString )
    },
    toggleCreatePopup(helper) {
      this.createPopToggle = helper === true ? helper : false 
    },
    saveProduct(){
      this.savingLoading = true 
      // console.log( this.$store.dispatch('product/create', this.product ) )
      
      // .then( res => {
      //   console.log( res )
      // }).catch( err => {
      //   console.log( err )
      // })
    }
  }

}

</script>

<style scoped>
  .vcb-table-panel {
    @apply absolute right-4 left-4 mt-4 mb-16 top-12 bottom-0 overflow-auto;
  }
  .vcb-table {
    @apply w-full ;
  }
  .vcb-table tr.vcb-table-row {
    @apply border-b border-gray-100 text-left ;
  }
  .vcb-table tr.vcb-table-row td {
    @apply p-2;
  }
  .vcb-table-actions-panel {
    @apply flex flex-row-reverse ;
  }
  .vcb-table-actions-panel .vcb-action-button {
    @apply  rounded-full border border-gray-200 w-8 h-8 mx-2 text-center cursor-pointer hover:border-blue-500 hover:text-blue-500  duration-300;
  }
  .vcb-table-headers {
    @apply border-b border-gray-200;
  }
  .vcb-table-headers .vcb-table-header {
    @apply px-2 py-4 text-left ;
  }
  .vcb-table-pagination {
    @apply flex flex-row absolute bg-white right-0 bottom-0 border border-l p-3 ;
  }
  .vcb-pagination-page {
    @apply  rounded-full border border-gray-200 mx-1 leading-7 w-8 h-8 font-bold cursor-pointer hover:text-blue-500 hover:border-blue-500 duration-300;
  }
</style>