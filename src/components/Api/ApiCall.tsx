import { useEffect, useState, Component } from 'react'
import AxiosService from '../../service/axiosService'

/*
 https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/tco-bus-circulation-passages-tr@keolis-rennes/records? where=destination%3D%22Chantepie%22&limit=20 
*/

export default function ApiCall() { //class ApiCall extends Component {

  const [res, setRes] = useState<string>('')

  useEffect(() => {
    let callback = () => { return 'api_t4' }
    let resa = AxiosService.post(callback)
    resa.then( (result) => { setRes(result+'') } ) //(result: string) => { setRes(result) }

  }, [])


  return (<div>{res}</div>)

  
  /*construct() {
    const [res, setRes] = useState<string>('4')

  }*/

  //public render() {
    /*const post_url = 'https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/tco-bus-circulation-passages-tr@keolis-rennes/records?where=destination="Chantepie"&limit=20'*/

    //const [postData, setPostData] = useState()

    /*axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          //const persons = res.data;
          

        }).catch((error)=> {
      console.log(error);

    }).then( function () {
      // always executed
    });  */

    

  //}
  
}

//export default new ApiCall()