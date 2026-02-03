import axios from "axios";
const api =axios.create({
baseURL:'https://dummyjson.com',
timeout:10000,
headers:{'Accept':'application/json'}

})
// api.interceptors.request.use ini di gunakan untuk memasang sebuah
// fungsi yang akan mencegat request sebelum di kirim jadi tidak perlu menulis nya lagi di file lain
api.interceptors.request.use(config => {
  config.headers['User-Agent'] = 'MyApp/1.0';
  return config;
});

api.interceptors.response.use(
    res=>{
        return res
    }
)

export default api