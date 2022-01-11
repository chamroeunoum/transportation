import axios from "axios"
import { getAuthorization } from "../plugins/authentication"
export default {
  async list(url,params){
    return await axios({
      method: 'put' ,
      url: url ,
      data: params ,
      headers: {
        'Authorization' : getAuthorization()
      }
    })
  },
  async compact(url){
    return await axios({
      method: 'get' ,
      url: url ,
      data: params ,
      headers: {
        'Authorization' : getAuthorization()
      }
    })
  },
  async read(url){
    return await axios({
      method: 'get' ,
      url: url ,
      data: params,
      headers: {
        'Authorization' : getAuthorization()
      }
    })
  },
  
  async create(url,params){
    return await axios({
      method: 'post' ,
      url: url ,
      data: params,
      headers: {
        'Authorization' : getAuthorization()
      }
    })
  },
  async update(url,params){
    return await axios({
      method: 'post' ,
      url: url ,
      data: params,
      headers: {
        'Authorization' : getAuthorization()
      }
    })
  },
  async delete(url,params){
    return await axios({
      method: 'delete' ,
      url: url ,
      data: params,
      headers: {
        'Authorization' : getAuthorization()
      }
    })
  },
  async activate(api){
    return await axios({
      method: 'put' ,
      url: url ,
      data: params,
      headers: {
        'Authorization' : getAuthorization()
      }
    })
  },
}