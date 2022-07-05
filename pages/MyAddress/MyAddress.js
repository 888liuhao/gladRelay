// pages/MyAddress/MyAddress.js
Page({
	data: {
		arry: wx.getStorageSync('arry') ? wx.getStorageSync('arry') : [],
	},
	//无地址时候跳转
	onAddress() {
		wx.navigateTo({
			url: '/pages/addHouse/addHouse',
		})
	},
	
})