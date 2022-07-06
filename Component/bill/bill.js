// Component/bill/bill.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		dataD:Object
	},
	methods: {
		//复制订单号
	onfu(){
		wx.setClipboardData({
			data: this.properties.dataD.orNumber,
			success:res =>{
				console.log(res);
			}
		})
	}
	}
})
