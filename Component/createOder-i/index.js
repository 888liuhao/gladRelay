// Component/createOder-i/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {

	},
	data: {
		orNumber:'18688880130'
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
