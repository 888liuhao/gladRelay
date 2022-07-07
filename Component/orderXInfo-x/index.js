// Component/orderXInfo-x/index.js
Component({

	properties: {

	},

	data: {
		orNumber:'20220509140712345678'
	},

	methods: {
	//复制订单号
	onfu(){
		wx.setClipboardData({
			data: this.data.orNumber,
			success:res =>{
				console.log(res);
			}
		})
	}
	}
})
