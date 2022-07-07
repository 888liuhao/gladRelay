// pages/approve/approve.js
Page({
	data: {
		checked: false,
		status:true,
		timer:'',
		num:5
	},
	//勾选
	onChange(event) {
    this.setData({
			checked: event.detail,
			status:!event.detail
    });
	},
	//确定按钮
	onquedin(){
		wx.reLaunch({
			url:'/pages/createOder/createOder'
		})
	},
//监听页面
	onShow() {
		this.daojishi()
	},
	//倒计时
	daojishi(e){
		let _this = this
		let num = this.data.num
		_this.setData({
			timer:setInterval(function (){
					num--
				_this.setData({
					num:num
				})
				if(num == 0){
					clearInterval(_this.data.timer)
				}
			},1000)
		})
		
	},
})