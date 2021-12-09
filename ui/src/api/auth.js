import axios from "axios"

export default {
  async login(url,params){
    return await axios({
      method: 'post' ,
      url: url ,
      data: params
    })
  },
  async logout(url,params){
    return await axios({
      method: 'post' ,
      url: url ,
      headers: {
        'Authorization' : params.token
      }
    })
  },
  async readProfile(url){
    return await axios({
      method: 'get' ,
      url: url ,
      data: params ,
      headers: {
        'Authorization' : this.$store.getters['auth/getAuthorization']
      }
    })
  },
  async updateProfile(url){
    return await axios({
      method: 'post' ,
      url: url ,
      data: params ,
      headers: {
        'Authorization' : this.$store.getters['auth/getAuthorization']
      }
    })
  },
  
  async uploadProfilePicture(url,params){
    return await axios({
      method: 'post' ,
      url: url ,
      data: params ,
      headers: {
        'Authorization' : this.$store.getters['auth/getAuthorization']
      }
    })
  },
  async changePassword(url,params){
    return await axios({
      method: 'post' ,
      url: url ,
      data: params ,
      headers: {
        'Authorization' : this.$store.getters['auth/getAuthorization']
      }
    })
  }
}