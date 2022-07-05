// pages/destination/destination.js
Page({
	data: {
		value:'',
		countryData:{
			A:[{nation:'阿富汗',egnation:'Afghanistan'},{nation:'阿尔巴尼亚',egnation:'Albania'},{nation:'安道尔',egnation:'Andorra'}],
			B:[{nation:'巴哈马',egnation:'Bahamas'},{nation:'孟加拉',egnation:'Bangladesh'},{nation:'白俄罗斯',egnation:'Belarus'}],
			C:[{nation:'柬埔寨',egnation:'Cambodia'},{nation:'加拿大',egnation:'Canada'},{nation:'中国',egnation:'China'}],
			D:[{nation:'丹麦',egnation:'Denmark'}],
			G:[{nation:'法国',egnation:'France'},{nation:'冈比亚',egnation:'Gambia'}],
			H:[{nation:'几内亚',egnation:'Guinea'},{nation:'圭亚那',egnation:'Guyana'}],
			K:[{nation:'日本',egnation:'Japan'},{nation:'牙买加',egnation:'Jamaica'}],
			S:[{nation:'新加坡',egnation:'Singapore'},{nation:'索马里',egnation:'Somalia'}],
		},
		countryInfo:{}
	},
	onLoad(){
		//伪造一个空，传给changeOn，防止进来页面没有渲染全部数据
		let e = {detail:''}
		this.changeOn(e)
	},
	//搜索取消
	onCancel(){
		wx.navigateBack({
			delta:1
		})
	},
	//搜索
	changeOn(e){
		let _search = e.detail.toUpperCase()
		let countryInfo ={}
		let s = /^[\u4E00-\u9FA5]/g
		let a = s.test(_search) ? 'nation' :'egnation'
		let reg = new RegExp(_search)
		for(const T in this.data.countryData){
			this.data.countryData[T].forEach(item =>{
				if(reg.test(item[a])){
					if(countryInfo[T]){
						countryInfo[T].push(item)
					}else{
						countryInfo[T] = [item]
					}
				}
			})
		}
		this.setData({
			countryInfo
		})
	},
	//存到本地
	onAlternate(e){
		let data =  e.target.dataset.info.nation
		wx.setStorageSync('destination',data)
		wx.switchTab({
			url: '/pages/index/index',
		})
	}
})