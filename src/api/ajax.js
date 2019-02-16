import axios from 'axios'
//向外暴露ajax函数，接收url，data(对象)，请求方式作为参数
export default function ajax(url,data={},type='GET') {
	return new Promise(function(resolve,reject) {
		let promise
		
		if(type==='GET') {
			let dataStr = ''
			Object.keys(data).forEach(function(key) {
				dataStr = dataStr + key + '=' + data[key] + '&'
			})
			if(dataStr !== '') {
				dataStr = dataStr.substring(0,dataStr.lastIndexof('&'))
				url = url + '?' + dataStr
			}
			promise = axios.get(url)
		} else {
			promise = axios.post(url,data)
		}
		//axios请求返回的Promise对象会向外传递response和error对象，response原本需要用.data获取数据
		promise.then(function(response) {
			resolve(response.data)   //这样向外传递的就直接是data对象了，不需要再调用.data
		}).catch(function(error) {
			reject(error)
		})
	})
}