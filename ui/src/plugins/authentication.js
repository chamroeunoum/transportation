
export const getToken = () => {
  let token = ''
  try {
    token = localStorage.getItem('access_token');
  } catch (error) {
    console.log(error)
  }
  return token
}
export const setToken = (token) => {
    localStorage.setItem('access_token',token);
}

export const getCustomer = () => {
    let customer = null
    try {
        customer = JSON.parse(localStorage.getItem('customer'))
    } catch (error) {}
    return customer
}
export const setCustomer = (data) => {
    localStorage.setItem('customer',JSON.stringify(data));
}
