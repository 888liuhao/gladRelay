// index.js
// 获取应用实例
// const app = getApp()

Page({
  data:{
		show:false
	},
	//立即转运
	onShoww(){
		this.setData({
			show:true
		})
	},
	//点击关闭遮盖层
	onClose(){
		this.setData({
			show:false
		})
	}
})
