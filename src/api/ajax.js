import axios from 'axios'
export default function ajax(url,data={},type='GET'){
    return new Promise(function(resolve,reject){
        let promise
        if(type === 'GET'){
            //拼请求参数串
            let paramStr = ''
            Object.keys(data).forEach(key =>{
                paramStr += key + '=' + data[key] + '&'
            })
            if(paramStr){
                paramStr = paramStr.substring(0,paramStr.length - 1)
            }
            //发送get请求
            promise =  axios.get(url + '?' + paramStr)
        }else{
            //发送post请求
            promise =  axios.post(url,data)
        }
        promise.then(function(response){
            resolve(response.data)
        }).catch(function(error){
            reject(error)
        })
    }
    )
    
}