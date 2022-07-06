// pages/approve/approve.js
Page({
	data: {
		checked: true,
		status:'false',
		timer:'',
		num:10
	},
	onChange(event) {
    this.setData({
      checked: event.detail,
    });
	},
	onquedin(){

	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {
		
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		this.daojishi()
	},
	daojishi(){
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
	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})