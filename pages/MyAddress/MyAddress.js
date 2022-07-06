// pages/MyAddress/MyAddress.js
Page({
	data: {
		arry:[],
		checked: 'true',
	},
	onShow(){
		this.setData({
			arry: wx.getStorageSync('arry') ? JSON.parse(wx.getStorageSync('arry')) : ''
		})
	},
	//无地址时候跳转
	onAddress() {
		wx.navigateTo({
			url: '/pages/addHouse/addHouse',
		})
	},
	//是否默认地址
	onChange(event) {
    this.setData({
      checked: event.detail,
    });
	},
})