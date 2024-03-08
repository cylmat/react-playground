import axios from 'axios' // DONT use "{ axios }" !!

// Generic
interface CallbackOneParam<T1, T2 = void> {
  (param1: T1): T2;
}

interface CallbackString<T1, T2 = void> {
  (param1: T1): T2;
}

class AxiosService {
  post(call: CallbackString<string>) {
   
    return axios.get(
      `https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/tco-bus-circulation-passages-tr@keolis-rennes/records?where=destination%3D%22Chantepie%22&limit=20`
    )
      
    .then( call ) //() => {return 'blop'}
  }
  
}

export default new AxiosService()