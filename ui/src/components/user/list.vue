<template>
  <div>
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
        <!-- <router-link to="/package/create" class="mx-2 w-8 h-8 text-center hover:border-blue-300 duration-300 cursor-pointer" >
          <van-icon name="add-o" size="30" />
        </router-link> -->
        <div @click="$router.push('/receive')" class="mx-2 w-8 h-8 text-center hover:border-blue-300 duration-300 cursor-pointer" >
          <Icon :size="30">
            <Switcher />
          </Icon>
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
          <th class="vcb-table-header" >ល.រ</th>
          <th class="vcb-table-header" >ត្រកូល</th>
          <th class="vcb-table-header">ឈ្មោះ</th>
          <th class="vcb-table-header">ឈ្មោះក្នុងប្រព័ន្ធ</th>
          <th class="vcb-table-header">លេខទូរស័ព្ទ</th>
          <th class="vcb-table-header">អ៊ីមែល</th>
          <th class="vcb-table-header text-right">ស្ថានភាពគណនី</th>
          <th class="vcb-table-header text-right w-40" >ប្រតិបត្តិការ</th>
        </tr>
        <tr v-for="(record, index) in table.records" :key='index' class="vcb-table-row" >
          <td class="vcb-table-cell font-bold" >{{ index + 1 }}</td>
          <td class="vcb-table-cell" >{{ record.lastname }}</td>
          <td  class="vcb-table-cell" >{{ record.firstname }}</td>
          <td  class="vcb-table-cell" >{{ record.username }}</td>
          <td  class="vcb-table-cell" >{{ record.phone }}</td>
          <td class="vcb-table-cell" >{{ record.email }}</td>
          <td  class="vcb-table-cell text-right w-24" >
            <n-icon size="30" :class="'cursor-pointer ' + (record.active == 1 ? ' text-green-500 ' : ' text-gray-500 ') " @click="activateAccount(record)" :title="record.active == 1 ? 'គណនីនេះកំពុងបើកតំណើរការ' : 'គណនីនេះកំពុងត្រូវបានបិទមិនអាចប្រើប្រាស់បាន' " >
              <IosCheckmarkCircleOutline />
            </n-icon>
          </td>
          <td class="vcb-table-actions-panel text-right w-40" >
            <n-icon size="30" class="cursor-pointer text-blue-500" @click="activateAccount(record)" title="កែប្រែព័ត៌មាន" >
              <Edit20Regular />
            </n-icon>
            <n-icon size="30" class="cursor-pointer text-yellow-500" @click="inputPassword(record)" title="ប្ដូរពាក្យសម្ងាត់សម្រាប់គណនីនេះ" >
              <Key16Regular />
            </n-icon>
            <n-icon size="30" class="cursor-pointer text-red-500" @click="deleteAccount(record)" title="លុបគណនីនេះចោល" >
              <TrashOutline />
            </n-icon>
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
    <!-- Form change password -->
    <div class="vcb-pop-edit font-ktr">
      <n-modal v-model:show="changePasswordModal.show" transform-origin="center">
        <n-card class="w-1/2 font-pvh text-xl" title="ប្ដូរពាក្យសម្ងាត់" :bordered="false" size="small">
          <template #header-extra>
            <n-button type="success" @click="changePassword()" >
              <template #icon>
                <n-icon>
                  <save />
                </n-icon>
              </template>
              រក្សារទុក
            </n-button>
          </template>
          <!-- Form change password -->
          <div class="crud-create-form w-full border-t">
            <div class=" mx-auto p-4 flex-wrap">
              <div class="crud-form-panel w-full flex flex-wrap ">
                <n-form 
                  class="w-full text-left font-btb text-lg flex flex-wrap" 
                  :label-width="80"
                  :model="changePasswordModal.form"
                  :rules="changePasswordModal.rules"
                  size="large"
                  ref="formRef"
                >
                  <n-form-item label="ពាក្យសម្ងាត់ថ្មី" path="from" class="w-2/5 mr-8" >
                    <n-input v-model:value="changePasswordModal.form.password" placeholder="ពាក្យសម្ងាត់ថ្មី" />
                  </n-form-item>
                </n-form>
                <div class="w-1/2 h-8"></div>  
              </div>
            </div>
          </div>
          <!-- End form change password -->
          <template #footer></template>
        </n-card>
      </n-modal>
    </div>
    <!-- End of change password -->
  </div>
</template>
<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import QrcodeVue from 'qrcode.vue'
import Vue3Barcode from 'vue3-barcode'
import { Switcher } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import { IosCheckmarkCircleOutline } from '@vicons/ionicons4'
import { TrashOutline } from '@vicons/ionicons5'
import { useDialog, useMessage } from 'naive-ui'
import { Edit20Regular, Key16Regular } from '@vicons/fluent'
/**
 * CRUD component form
 */
import CreateForm from './create.vue'
import UpdateForm from './update.vue'
export default {
  name: "User" ,
  components: {
    QrcodeVue ,
    Vue3Barcode,
    Switcher,
    Icon,
    IosCheckmarkCircleOutline,
    CreateForm,
    UpdateForm,
    Edit20Regular,
    Key16Regular,
    TrashOutline
  },
  setup(){
    var store = useStore()
    var router = useRouter()
    const dialog = useDialog()
    const message = useMessage()
    /**
     * Variables
     */    
    var model = reactive( {
      name: "user" ,
      title: "គណនី"
    })
    var table = reactive( {
      records: [] ,
      columns: {
        username: '' ,
        firstname: '' ,
        lastname: '' ,
        email: '' ,
        phone: '' ,
        active: ''
      } ,
      pagination: {}
    })
    var recordFormat = reactive({
      username: '' ,
      firstname: '' ,
      lastname: '' ,
      email: '' ,
      phone: '' ,
      active: ''
    },)

    var changePasswordModal = reactive({
      show: false ,
      account: null ,
      form: {
        password: ''
      },
      rules: {
        password: {
          required: true,
          message: 'សូមបញ្ចូលពាក្យសម្ងាត់ថ្មី',
          trigger: [ 'blur']
        },
      }
    })

    /**
     * Functions
     */
    function getRecords(){
      store.dispatch(model.name+'/list').then(res => {
        console.log( res.data.records )
        table.records = res.data.records
        table.pagination = res.data.pagination
      }).catch( err => {
        console.log( err )
      })
    }

    function activateAccount(record){
      dialog.warning({
        title: "បិទ ឬ បើក គណនី" ,
        content: "តើអ្នកចង់ " + ( record.active == 1 ? "បិទ" : "បើក" )+ " គណនីនេះមែនទេ ?" ,
        positiveText: 'បាទ / ចាស',
        negativeText: 'ទេ',
        onPositiveClick: () => {
          store.dispatch( model.name+'/update',{
            id: record.id ,
            active: record.active == 1 ? 0 : 1
          }).then( res => {
            switch( res.status ){
              case 200 : 
              message.success( res.data.message )
              getRecords()
              break;
            }
          }).catch( err => {
            message.error( err )
          })
        },
        onNegativeClick: () => {
          
        }
      })
    }

    function inputPassword(record){
      changePasswordModal.account = record
      changePasswordModal.show = true
    }
    function changePassword(){
      message.info(changePasswordModal.account.username)
    }

    function deleteAccount(record){
      dialog.warning({
        title: "លុបគណនី" ,
        content: "តើអ្នកចង់ លុប គណនីនេះមែនទេ ?" ,
        positiveText: 'បាទ / ចាស',
        negativeText: 'ទេ',
        onPositiveClick: () => {
          store.dispatch(model.name+'/delete',{id:record.id}).then( res => {
          switch( res.status ){
            case 200 :
              message.success(res.data.message)
              getRecords()
              break;
          }
        }).catch( err => {
          message.error( err )
        })
        },
        onNegativeClick: () => {
        }
      })
    }

    /**
     * Initial the data
     */
    getRecords()


    return {
      /**
       * Variables
       */
      model ,
      table ,
      changePasswordModal ,
      /**
       * Functions
       */
      activateAccount ,
      inputPassword ,
      changePassword ,
      deleteAccount
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