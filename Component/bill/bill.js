// Component/bill/bill.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		dataD:Object
	},

	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
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
