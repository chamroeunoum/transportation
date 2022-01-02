<template>
  <div class="flex flex-wrap justify-around" >
    <div class="flex flex-wrap w-full h-12 border-b  font-pvh ">
      <div class="sct-transaction-date w-1/2 flex leading-10 font-dangrek text-xl">{{ sctTransactionDate }}</div>
      <div class="sct-transaction-new-package flex flex-row-reverse w-1/2">
        <div @click="toggleCreatePopup(true)" class="mx-2 w-8 h-8 mt-1 text-center hover:border-blue-300 duration-300 cursor-pointer" >
          <van-icon name="add-o" :size="32" class="hover:text-blue-600 " />
        </div>
        <div @click="$router.push('/package')" class="mx-2 ml-4 my-1 w-8 h-8 text-center hover:border-blue-300 duration-300 cursor-pointer" >
          <Icon :size="30">
            <Table />
          </Icon>
        </div>
        <div class="w-1/2" >
          <input type="text" @keyup="filterProducts" v-model="search.value" class="bg-gray-100 px-2 h-8 my-1 w-full rounded border border-gray-200 focus:border-blue-600 hover:border-blue-600 " placeholder="ស្វែងរកឥវ៉ាន់តាមលេខកូដ" />
        </div>
        <div class="w-1/4 leading-10 text-blue-500" >
          <strong class="font-dangrek  mx-2 text-xl ">{{ this.products.all.length + ' ដុំ' }}</strong>
        </div>
        <div class="w-1/3 leading-10 text-blue-600" >
          <van-icon name="paid" />
          <strong class="font-dangrek mx-2 text-xl">{{ totalPrice + ' ฿' }}</strong>
        </div>
        <div class="w-1/3 leading-10 text-red-600" >
          <van-icon name="paid" />
          <strong class="font-dangrek mx-2 text-xl">{{ totalPriceUnpaid + ' ฿' }}</strong>
        </div>
        <div class="w-1/3 leading-10 text-green-600" >
          <van-icon name="paid" />
          <strong class="font-dangrek  mx-2 text-xl">{{ totalPricePaid + ' ฿' }}</strong>
        </div>
      </div>
    </div>
    <van-divider class="w-full text-2xl font-pvh" >កញ្ចប់ឥវ៉ាន់</van-divider>
    <div v-for="(record, index) in this.products.matched" :key="index" class="font-ktr w-1/6 relative flex flex-wrap text-left border border-gray-300 bg-gray-50 m-4 p-4 shadow hover:shadow-xl" >
      <div class="w-full text-xl mt-4 mb-2 font-dangrek text-blue-500" >{{ record.code }}</div>
      <div class="w-1/2 font-extrabold my-1" >
        <van-icon name="location-o" color="#1989fa"/>
        {{ record.from }}
      </div>
      <div class="w-1/2 font-extrabold my-1" >
        <van-icon name="location" color="#1989fa"/>
        {{ record.to }}
      </div>
      <div class="w-1/2 font-extrabold my-1" >
        <van-icon name="phone-o" color="#1989fa"/>
        {{ record.sender_phone }}
      </div>
      <div class="w-1/2 font-extrabold my-1" >
        <van-icon name="phone" color="#1989fa"/>
        {{ record.receiver_phone }}
      </div>
      <div class="w-1/2 font-extrabold my-1" >
        <van-icon name="bag-o" color="#1989fa"/>
        {{ record.weight }} គីឡូ
      </div>
      <div class="w-1/2 font-extrabold my-1" >
        <van-icon name="send-gift-o" color="#1989fa"/>
        {{ record.dimension }}
      </div>
      <div :class="'w-full font-extrabold my-1 ' + ( record.payment_status == 1 ? 'text-green-600 ' : 'text-red-600 ' ) " >
        <van-icon name="paid" />
        {{ record.price }} ฿ - {{ record.payment_status == 1 ? "បង់រួច" : "មិនទាន់បង់" }}
      </div>
      <div class="w-full font-extrabold mt-1 mb-1 border-t py-4 " >
        <!-- <van-icon name="records" color="#1989fa"/> -->
        {{ record.note }}
      </div>
      <!-- <div v-if="record.client!==undefined" title="ឈ្មោះភ្ញៀវ" class="w-1/2 font-extrabold my-1 mx-auto" >
        <van-icon name="records" color="#1989fa"/>
        {{ record.client.lastname + ' ' + record.client.firstname }}
      </div> -->
      <div class="w-1/2 font-extrabold my-1 mx-auto" >
        <qrcode-vue :value="record.code" :size="60" level="H" class="mx-auto" />
      </div>
      
      <div class="mx-2 w-4 h-4 mt-1 text-center text-red-500 cursor-pointer absolute top-1 right-1" >
        <van-icon name="close" :size="20" class="" @click="remove(record)" />
      </div>
      <div class="mx-2 w-4 h-4 mt-1 text-center text-blue-500 cursor-pointer absolute top-1 right-7" >
        <van-icon name="edit" :size="20" class="" @click="edit(record)" />
      </div>
      <!-- <div class="mx-2 w-4 h-4 mt-1 text-center text-blue-500 cursor-pointer absolute top-1 right-12" >
        <van-icon name="orders-o" @click="print(record)" />
      </div> -->
      <!-- <div class="mx-2 w-4 h-4 mt-1 text-center text-blue-500 absolute left-2 top-4 " >
        <van-icon name="logistics" :size="20" class="" />
      </div>
      <div class="mx-2 w-4 h-4 mt-1 text-center text-green-500 absolute left-8 top-4 " >
        <van-icon name="passed" :size="20" class="" />
      </div> -->
    </div>
    <!-- Form create -->
    <div class="vcb-pop-create font-ktr">
      <n-modal v-model:show="createPopToggle" transform-origin="center">
        <n-card class="w-1/2 font-pvh text-xl" title="បន្ថែមបញ្ញើ" :bordered="false" size="small">
          <template #header-extra>
            <n-button type="success" @click="saveRecord()" >
              <template #icon>
                <n-icon>
                  <save />
                </n-icon>
              </template>
              រក្សារទុក
            </n-button>
          </template>
          <!-- Form create -->
          <div class="crud-create-form w-full border-t">
            <div class=" mx-auto p-4 flex-wrap">
              <div class="crud-form-panel w-full flex flex-wrap ">
                <n-form 
                  class="w-full text-left font-btb text-lg flex flex-wrap" 
                  :label-width="80"
                  :model="product.create"
                  :rules="rules"
                  size="large"
                  ref="formRef"
                >
                  <n-form-item label="ឈ្មោះសាខា" path="from" class="w-2/5 mr-8" >
                    <n-input :disabled="true" v-model:value="product.create.from" placeholder="ឈ្មោះសាខា" />
                  </n-form-item>
                  <n-form-item label="អតិថិជន" class="w-2/5 mr-8" >
                    <n-select
                      v-model:value="product.create.client_id"
                      filterable
                      clearable
                      placeholder="សូមជ្រើសរើសអតិថិជន" 
                      :options="clientfilters"
                    />
                  </n-form-item>
                  <n-form-item label="គោលដៅរបស់ឥវ៉ាន់" path="to" class="w-2/5 mr-8" >
                    <n-input v-model:value="product.create.to" placeholder="គោលដៅរបស់ឥវ៉ាន់" />
                  </n-form-item>
                  <n-form-item label="លេខអ្នកផ្ញើ" path="sender_phone" class="w-2/5 mr-8" >
                    <n-input v-model:value="product.create.sender_phone" placeholder="លេខអ្នកផ្ញើ" />
                  </n-form-item>
                  <n-form-item label="លេខអ្នកទទួល" path="receiver_phone" class="w-2/5 mr-8" >
                    <n-input v-model:value="product.create.receiver_phone" placeholder="លេខអ្នកទទួល" />
                  </n-form-item>
                  <n-form-item label="តម្លៃផ្ញើ (បាត)" path="price" class="w-2/5 mr-8" >
                    <n-input v-model:value="product.create.price" placeholder="តម្លៃផ្ញើ" />
                  </n-form-item>
                  <n-form-item label="ទំងន់ (គីឡូ)"  class="w-2/5 mr-8" >
                    <n-input v-model:value="product.create.weight" placeholder="ទំងន់" />
                  </n-form-item>
                  <n-form-item label="ការបង់ប្រាក់" class="w-2/5 mr-8" >
                    <n-radio-group
                      v-model:value="product.create.payment_status"
                      name="left-size"
                      style="margin-bottom: 12px;"
                    >
                      <n-radio-button :value="1" >បង់ទីនេះ</n-radio-button>
                      <n-radio-button :value="0">បង់ពេលដល់គោលដៅ</n-radio-button>
                    </n-radio-group>
                  </n-form-item>
                  <!-- <n-form-item label="ប្រភេទប្រអប់" class="w-full " >
                    <n-radio-group
                      v-model:value="product.create.dimension"
                      name="left-size"
                      style="margin-bottom: 12px;"
                    >
                      <n-radio-button value="20x40x60" ><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>20x40x60</n-radio-button>
                      <n-radio-button value="20x60x60"><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>20x60x60</n-radio-button>
                      <n-radio-button value="40x40x60"><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>40x40x60</n-radio-button>
                      <n-radio-button value="20x40x60" ><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>20x40x60</n-radio-button>
                      <n-radio-button value="20x60x60"><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>20x60x60</n-radio-button>
                      <n-radio-button value="40x40x60"><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>40x40x60</n-radio-button>
                    </n-radio-group>
                  </n-form-item> -->
                  <n-form-item label="សម្គាល់" class="w-full" >
                    <n-input 
                      type="textarea"
                      :autosize="{
                        minRows: 3,
                        maxRows: 5
                      }"
                      v-model:value="product.create.note" 
                      placeholder="សម្គាល់" />
                  </n-form-item>
                </n-form>
                <div class="w-1/2 h-8"></div>  
              </div>
            </div>
          </div>
          <!-- End form create -->
          <template #footer>
            
          </template>
        </n-card>
      </n-modal>
        
    </div>
    <!-- Form edit -->
    <div class="vcb-pop-edit font-ktr">
      <n-modal v-model:show="editPopToggle" transform-origin="center">
        <n-card class="w-1/2 font-pvh text-xl" title="កែប្រែបញ្ញើ" :bordered="false" size="small">
          <template #header-extra>
            <n-button type="success" @click="updateRecord()" >
              <template #icon>
                <n-icon>
                  <save />
                </n-icon>
              </template>
              រក្សារទុក
            </n-button>
          </template>
          <!-- Form create -->
          <div class="crud-create-form w-full border-t">
            <div class=" mx-auto p-4 flex-wrap">
              <div class="crud-form-panel w-full flex flex-wrap ">
                <n-form 
                  class="w-full text-left font-btb text-lg flex flex-wrap" 
                  :label-width="80"
                  :model="product.create"
                  :rules="rules"
                  size="large"
                  ref="formRef"
                >
                  <n-form-item label="ឈ្មោះសាខា" path="from" class="w-2/5 mr-8" >
                    <n-input :disabled="true" v-model:value="product.edit.from" placeholder="ឈ្មោះសាខា" />
                  </n-form-item>
                  <n-form-item label="អតិថិជន" class="w-2/5 mr-8" >
                    <n-select
                      v-model:value="product.edit.client_id"
                      filterable
                      clearable
                      placeholder="សូមជ្រើសរើសអតិថិជន" 
                      :options="clientfilters"
                    />
                  </n-form-item>
                  <n-form-item label="គោលដៅរបស់ឥវ៉ាន់" path="to" class="w-2/5 mr-8" >
                    <n-input v-model:value="product.edit.to" placeholder="គោលដៅរបស់ឥវ៉ាន់" />
                  </n-form-item>
                  <n-form-item label="លេខអ្នកផ្ញើ" path="sender_phone" class="w-2/5 mr-8" >
                    <n-input v-model:value="product.edit.sender_phone" placeholder="លេខអ្នកផ្ញើ" />
                  </n-form-item>
                  <n-form-item label="លេខអ្នកទទួល" path="receiver_phone" class="w-2/5 mr-8" >
                    <n-input v-model:value="product.edit.receiver_phone" placeholder="លេខអ្នកទទួល" />
                  </n-form-item>
                  <n-form-item label="តម្លៃផ្ញើ (បាត)" path="price" class="w-2/5 mr-8" >
                    <n-input v-model:value="product.edit.price" placeholder="តម្លៃផ្ញើ" />
                  </n-form-item>
                  <n-form-item label="ទំងន់ (គីឡូ)"  class="w-2/5 mr-8" >
                    <n-input v-model:value="product.edit.weight" placeholder="ទំងន់" />
                  </n-form-item>
                  <n-form-item label="ការបង់ប្រាក់" class="w-2/5 mr-8" >
                    <n-radio-group
                      v-model:value="product.edit.payment_status"
                      name="left-size"
                      style="margin-bottom: 12px;"
                    >
                      <n-radio-button :value="1" >បង់ទីនេះ</n-radio-button>
                      <n-radio-button :value="0">បង់ពេលដល់គោលដៅ</n-radio-button>
                    </n-radio-group>
                  </n-form-item>
                  <!-- <n-form-item label="ប្រភេទប្រអប់" class="w-full " >
                    <n-radio-group
                      v-model:value="product.edit.dimension"
                      name="left-size"
                      style="margin-bottom: 12px;"
                    >
                      <n-radio-button value="20x40x60" ><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>20x40x60</n-radio-button>
                      <n-radio-button value="20x60x60"><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>20x60x60</n-radio-button>
                      <n-radio-button value="40x40x60"><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>40x40x60</n-radio-button>
                      <n-radio-button value="20x40x60" ><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>20x40x60</n-radio-button>
                      <n-radio-button value="20x60x60"><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>20x60x60</n-radio-button>
                      <n-radio-button value="40x40x60"><Icon size="15" class="mr-2 mt-1" ><Box16Regular /></Icon>40x40x60</n-radio-button>
                    </n-radio-group>
                  </n-form-item> -->
                  <n-form-item label="សម្គាល់" class="w-full" >
                    <n-input 
                      type="textarea"
                      :autosize="{
                        minRows: 3,
                        maxRows: 5
                      }"
                      v-model:value="product.edit.note" 
                      placeholder="សម្គាល់" />
                  </n-form-item>
                </n-form>
                <div class="w-1/2 h-8"></div>  
              </div>
            </div>
          </div>
          <!-- End form create -->
          <template #footer>
            
          </template>
        </n-card>
      </n-modal>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import { Notify, Dialog } from 'vant'
import { Table } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import { ref, reactive, computed } from 'vue'
import { Save } from "@vicons/carbon"
import { ArrowBackIosNewRound } from '@vicons/material'
import { Box16Regular } from '@vicons/fluent'

export default {
  setup () {
    return {
      rules: {
        to: {
          required: true,
          message: 'សូមបញ្ចូលកន្លែងបញ្ជូនឥវ៉ាន់ទៅ',
          trigger: 'blur'
        },
        sender_phone: {
          required: true,
          message: 'សូមបញ្ចូលលេខទូរស័ព្ទអ្នកផ្ញើ',
          trigger: [ 'blur']
        },
        receiver_phone: {
          required: true,
          message: 'សូមបញ្ចូលលេខទូរស័ព្ទអ្នកទទួល',
          trigger: [ 'blur']
        },
        price: {
          required: true,
          message: 'សូមបញ្ចូលតម្លៃផ្ញើ',
          trigger: [ 'blur']
        }
      },
      handleValidateClick (e) {
        e.preventDefault()
        formRef.value.validate((errors) => {
          if (!errors) {
            message.success('Valid')
          } else {
            console.log(errors)
            message.error('Invalid')
          }
        })
      }
    }
  },
  components: {
    QrcodeVue,
    Table,
    Icon,
    Save, 
    ArrowBackIosNewRound,
    Box16Regular
  },
  data(){
    return {
      model: {
        name: 'product' ,
        title: "បញ្ញើ"
      },
      createPopToggle : false ,
      editPopToggle: false ,
      products: {
        all : [] ,
        matched : []
      } ,
      product: {
        create: {
          id: 0 ,
          client_id: null ,
          code: '' ,
          from: 'បាងកក' ,
          to: '' ,
          sender_phone: '' ,
          receiver_phone: '' ,
          weight: '' ,
          dimension: '60x40x20' ,
          price: '' ,
          note: '',
          payment_status: 1
        },
        edit: {
          id: 0 ,
          client_id: null ,
          code: '' ,
          from: 'បាងកក' ,
          to: '' ,
          sender_phone: '' ,
          receiver_phone: '' ,
          weight: '' ,
          dimension: '60x40x20' ,
          price: '' ,
          note: '',
          payment_status: 1
        }
      },
      clearRecord: {
        id: 0 ,
        client_id: null ,
        code: '' ,
        from: 'បាងកក' ,
        to: '' ,
        sender_phone: '' ,
        receiver_phone: '' ,
        weight: '' ,
        dimension: '60x40x20' ,
        price: '' ,
        note: '',
        payment_status: 1
      },
      savingLoading: false ,
      editLoading: false ,
      search: {
        value: ''
      },
      client: {
        records: [] ,
        client_id: ''
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
    },
    totalPricePaid(){
      let total = 0 
      for(var i in this.products.all ){
        total += this.products.all[i].payment_status == 1 ? this.products.all[i].price : 0 
      }
      return total
    },
    totalPriceUnpaid(){
      let total = 0 
      for(var i in this.products.all ){
        total += this.products.all[i].payment_status != 1 ? this.products.all[i].price : 0 
      }
      return total
    },
    sctTransactionDate(){
      let now = new Date()
      return now.getFullYear() + "-" + ( now.getMonth() + 1 ) + "-" + now.getDate()
    },
    clientfilters(){
      // let filter = this.client.records.filter( c => 
      //   ( 
      //     ( c.firstname !== null && c.firstname.indexOf( this.client.client_id ) != -1 ) || 
      //     ( c.lastname !== null && c.lastname.indexOf( this.client.client_id ) != -1 ) ||
      //     ( c.phone !== null && c.phone.indexOf( this.client.client_id ) != -1 ) ||
      //     ( c.email !== null && c.email.indexOf( this.client.client_id ) != -1 )
      //   )
      // )
      // filter = filter.length <= 0 ? this.client.records : filter
      return this.client.records.map( ( c ) => { return {
        label: ( c.lastname !== null ? c.lastname + ' ' : '' ) +
          ( c.firstname !== null ? c.firstname + ' ' : '' ) +
          ( c.phone !== null ? c.phone + ' ' : '' ) +
          ( c.email !== null ? c.email + ' ' : '' ) ,
        value: c.id 
      } } )
    }
  },
  beforeMount(){
    this.getRecords()
    this.$store.dispatch('client/list').then( res => {
      switch( res.status ){
        case 200:
          this.client.records = res.data.records.records
        default: 
          break;
      }
      console.log( this.client.records )
    }).catch( err => console.log( err ) )
  },
  mounted(){
    
  },
  methods: {
    remove(record){
      Dialog.confirm({
        title: "លុបព័ត៌មានបញ្ញើ" ,
        message: "តើអ្នកចង់លុបបញ្ញើ នេះមែនទេ?" ,
        confirmButtonText: "លុប" ,
        cancelButtonText: "ទេ"
      }).then( () => {
        /**
         * onConfirm
         */
        this.$store.dispatch('product/delete',{
          id: record.id
        }).then( res => {
          switch( res.status ){
            case 200 : 
            Notify({
              type: "success" ,
              message: "បានលុបរួចរាល់។"
            })
            this.getRecords()
            break;
          }
        }).catch( err => {
          console.log( "No" )
          Notify({
            type: "danger" ,
            message: "បរាជ័យលុបបញ្ញើ។ "
          })
        })
      }).catch( () => {
        /**
         * onCancel
         */
      })
      /**
       * Confirm before delete the package and need a reason to delete the information
       */
    },
    edit(record){
      this.product.edit = {
        id: record.id ,
        client_id: record.client_id > 0 ? record.client_id : null ,
        code: record.code ,
        from: record.from ,
        to: record.to ,
        sender_phone: record.sender_phone ,
        receiver_phone: record.receiver_phone ,
        weight: record.weight + '' ,
        dimension: record.dimension ,
        price: record.price + '',
        note: record.note,
        payment_status: record.payment_status
      }
      this.toggleEditPopup(true)
    },
    print(record){

    },
    updateRecord(){
      if( !this.validateData(this.product.edit) ){
        return false
      }
      // console.log( this.product.edit.client_id )
      // return false
      this.product.edit.client_id = this.product.edit.client_id > 0 ? this.product.edit.client_id : 0
      this.editLoading = true 
      this.$store.dispatch('product/update', this.product.edit ).then( res => {
        switch( res.status ){
          case 200 : 
            this.getRecords()
            break;
          default:

            break;
        }
        this.product.edit = this.clearRecord
        this.toggleEditPopup(false)
        this.editLoading = false 
      }).catch( err => {
        console.log( err )
        this.editLoading = false
      })
    },
    filterProducts(){
      this.products.matched = []
      for(var i in this.products.all ){
        if( this.products.all[i].code.indexOf( this.search.value ) != -1 ) {
          this.products.matched.push( this.products.all[i] )
        }
      }
      
      if( this.products.matched.length <= 0 ) {
        this.products.matched = this.products.all
      }
    },
    validateData(record){
      if( record.from == "" ){
        Notify({
          type: 'warning' ,
          message: 'សូមបំពេញព័ត៌មានអំពីកន្លែងដាក់ផ្ញើ។'
        })
        return false
      }
      if( record.to == "" ){
        Notify({
          type: 'warning' ,
          message: 'សូមបំពេញព័ត៌មានអំពីគោលដៅរបស់ឥវ៉ាន់។'
        })
        return false
      }
      if( record.sender_phone == "" ){
        Notify({
          type: 'warning' ,
          message: 'សូមបញ្ចូលលេខអ្នកផ្ញើ។'
        })
        return false
      }
      if( record.receiver_phone == "" ){
        Notify({
          type: 'warning' ,
          message: 'សូមបញ្ចូលលេខអ្នកទទួល។'
        })
        return false
      }
      if( record.dimension == "" ){
        Notify({
          type: 'warning' ,
          message: 'សូមបញ្ជាក់អំពីទំហំនៃការវេចខ្ចប់។'
        })
        return false
      }
      if( record.price == "" ){
        Notify({
          type: 'warning' ,
          message: 'សូមបញ្ជាក់អំពីតម្លៃ។'
        })
        return false
      }
      return true
    },
    toggleCreatePopup(helper) {
      this.createPopToggle = helper === true ? helper : false 
    },
    toggleEditPopup(helper) {
      this.editPopToggle = helper === true ? helper : false 
    },
    saveRecord(){
      if( !this.validateData(this.product.create) ){
        return false
      }
      
      this.savingLoading = true 
      this.$store.dispatch('product/create', this.product.create ).then( res => {
        switch( res.status ){
          case 200 : 
            this.getRecords()
            break;
          default:

            break;
        }
        this.product.create = this.clearRecord
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