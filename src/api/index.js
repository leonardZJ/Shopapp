import ajax from './ajax'
//const BASE_URL = 'http://localhost:4000'

//根据经纬度获取位置详情
export const reqAddress = function(geohash) {
	ajax(`/position/${geohash}`)
}
//获取食品分类列表
export const reqFoodCategorys = function() {
	ajax('/index_category')
}
//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})