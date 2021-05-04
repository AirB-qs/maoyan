import axios from 'axios'
import { Promise } from 'core-js'
    class Http{
        constructor(){
            this.instance = axios.create({
                baseURL:'http://localhost:8080/',  //baseURL最后要有'/'，在get中传入ur时，url前的'/'不能省
                timeout:60000
            })
        }
        
        get({ url,params }){
            return new Promise((resolve,reject)=>{
                this.instance.get(url,
                    {
                        params
                    }
                )
                .then((result)=>{
                    resolve(result)
                    })
                .catch((err)=>{
                    reject(err)
                })
            })

        }
    }
    
    
    

    export default Http
    