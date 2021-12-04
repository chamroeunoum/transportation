import axios from "axios"

export default {
  async list(url,params){
    return await axios({
      method: 'get' ,
      url: url ,
      data: params
    })
  },
  async compact(url){
    return await axios({
      method: 'get' ,
      url: url ,
      data: params
    })
  },
  async read(url){
    return await axios({
      method: 'get' ,
      url: url ,
      data: params
    })
  },
  
  async create(url,params){
    return await axios({
      method: 'post' ,
      url: url ,
      data: params
    })
  },
  async update(url,params){
    return await axios({
      method: 'post' ,
      url: url ,
      data: params
    })
  },
  async delete(url,params){
    return await axios({
      method: 'delete' ,
      url: url ,
      data: params
    })
  },
  async activate(api){
    return await axios({
      method: 'put' ,
      url: url ,
      data: params
    })
  },
}