// pages/gatPreferential/gatPreferential.js
Page({
	data: {
		yhData:{},

	},
	onLoad(options) {
		console.log(options.data);
		let data = JSON.parse(options.data)
		this.setData({
			yhData:data
		})
	},

	
})