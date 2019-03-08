import Mock from 'mockjs'
import data from './data.json'

//暴露返回goods的接口
Mock.mock('/goods',{code: 0,data: data.goods})
//暴露返回ratings的接口
Mock.mock('/ratings',{code: 0,data: data.ratings})
//暴露返回info的接口
Mock.mock('/info',{code: 0,data: data.info})
//暴露返回categorys的接口
Mock.mock('/index_category',{code: 0,data: data.categorys})
