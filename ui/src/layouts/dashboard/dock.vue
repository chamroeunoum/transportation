<template>
  <div class="flex flex-wrap content-center" >
        <!-- Start transaction of the apps -->
        <transition  name="fade" mode="out-in">
            <!-- Apps -->
            <div v-if="toggleApps" class="fixed top-0 bottom-0 left-0 right-0 z-40 flex flex-wrap content-start w-full px-4 py-24 bg-gray-800 sm:px-4 md:px-4 lg:p-24 xl:p-24 bg-opacity-95">
                <!-- Search -->
                <div class='absolute top-0 left-0 right-0 flex flex-wrap content-center w-2/5 py-4 m-auto md:w-2/5 xl:w-1/5 lg:w-1/5' >
                    <n-input 
                      suffix="ios-search" 
                      placeholder="ស្វែងរក ..." 
                      clearable 
                      v-model:value="search" 
                      @keyup="filterApps()"  
                    >
                      <template #prefix>
                        <n-icon>
                          <IosSearch />
                        </n-icon>
                      </template>
                    </n-input>

                </div>
                <!-- End search -->
                <!-- Apps -->
                <div class="flex flex-wrap content-center apps">
                    <div v-for="(app, index) in matchedApps.value" :key="index" class="w-32 h-32 text-center p4 md-auto">
                        <div @click="toggleApps=false;$router.push(app.url)" class='w-full dashboard-widget-link cursor-pointer ' >
                            <n-icon size="64" class='text-gray-100 ' >
                              <component :is="app.icon" />
                            </n-icon>
                            <div class="font-pvh p-2 m-auto text-sm text-center text-gray-100" v-html="app.name" ></div>
                        </div>
                    </div>
                </div>
                <!-- End apps -->
            </div>
        </transition>
        <!-- End transaction of the apps -->
        <!-- Apps launcher -->
        <div class='fixed -bottom-14 h-12 left-0 right-0 z-50 flex flex-wrap justify-center w-full py-4' >
            <!-- Apps icon -->
            <div @click="toggleApps = !toggleApps" class="w-12 h-12 p-2 -mt-20 mx-2 text-center bg-white border border-black rounded-full shadow cursor-pointer " >
                <n-icon class='text-gray-700 ' size="30" >
                  <Apps />
                </n-icon>
            </div>
        </div>
        <!-- Profile launcher -->
        <div class='fixed top-0 right-0 flex flex-wrap content-center p-2' >

        </div>
        <!-- Logout -->
        <div v-if="toggleApps" class='fixed top-0 right-0 flex flex-wrap content-center p-2' >

        </div>
    </div>
</template>

<script>
import { reactive, ref , computed } from 'vue'
import { IosSearch } from '@vicons/ionicons4'
import { SupervisedUserCircleOutlined , SupervisedUserCircleSharp } from "@vicons/material"
import { Apps, SpeedometerOutline } from '@vicons/ionicons5'
import { Receipt2 } from '@vicons/tabler'
import { Receipt20Regular } from '@vicons/fluent'
import { UserMultiple } from '@vicons/carbon'
export default {  
  components: {
    IosSearch,
    SupervisedUserCircleOutlined ,
    SupervisedUserCircleSharp ,
    Apps ,
    UserMultiple ,
    Receipt20Regular ,
    Receipt2 ,
    SpeedometerOutline
  } ,
  name: 'dock' ,
  props: [
      'active'
  ],
  setup(){
    let search = ref(null)
    let matchedApps = computed( () => 
      search.value != '' || search.value != null ? apps :
        ( search.value.trim() != '' ?
          apps.value.filter( app => app.name.indexOf( search.value ) != -1 ) :
          apps
        )
    )
    let apps = ref([
      {
          url: '/dashboard' ,
          icon: 'SpeedometerOutline' ,
          name: 'ផ្ទាំងព័ត៌មាន',
          // roles: [
          //     1, // Admin
          //     2, // Super
          //     3, // Auditor
          //     4, // Member
          //     5 // Customer
          // ]
      },
      {
          url: '/user' ,
          icon: 'SupervisedUserCircleOutlined' ,
          name: 'គណនី',
          // roles: [
          //     1, // Admin
          //     2, // Super
          //     3, // Auditor
          //     4, // Member
          //     5 // Customer
          // ]
      },
      {
          url: '/client' ,
          icon: 'UserMultiple' ,
          name: 'អតិថិជន'
      },
      {
          url: '/receive' ,
          icon: 'Receipt20Regular' ,
          name: 'បញ្ញើ'
      },
      {
          url: '/staff' ,
          icon: 'SupervisedUserCircleSharp' ,
          name: 'បុគ្គលិក'
      },
      {
          url: '/incomeoutcome' ,
          icon: 'Receipt2' ,
          name: 'ចំណូលចំណាយ'
      }
    ])
    /** End app metadata */
    let toggleApps = ref(false)
    let user = reactive({})

    function filterApps(){
      if( search.value != '' && search.value != null ){
        matchedApps = search.value.trim() != '' ?
          // this.apps.filter( app => app.name.toLowerCase().indexOf( this.search.toLowerCase() ) != -1 ) :
          apps.value.filter( app => app.name.indexOf( search.value ) != -1 ) : apps
      }
    }
    function toggleAppFunc(){
        toggleApps = !toggleApps
    }
    function logoutConfirmation(){
        console.log( "confirm before logout" )
    }

    return {
      search ,
      matchedApps ,
      apps ,
      toggleApps ,
      user ,
      filterApps ,
      toggleAppFunc ,
      logoutConfirmation
    }
  },
  mounted() {
      // this.user = localStorage.getItem( 'user' ) ? JSON.parse( localStorage.getItem( 'user' ) ) : null
      // this.search= ""
      // if( this.user !== null && this.user.roles !== null && this.user.roles.length > 0 ){
      //     this.matchedApps = []
      //     for(var i in this.apps ){
      //         for(var j in this.apps[i].roles ){
      //             let app = this.user.roles.find( role => role == this.apps[i].roles[j] )
      //             app !== undefined ? this.matchedApps.push( this.apps[i] ) : false
      //         }
      //     }
      //     return true
      // }else{
      //     console.log( "ព័ត៌មានសម្រាប់ការចូលប្រើប្រាស់ មិនគ្រប់គ្រាន់។ សូមចូលប្រើម្ដងទៀត ។ សូមអរគុណ !" )
      // }
  }
}
</script>