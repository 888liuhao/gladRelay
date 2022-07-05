// index.js
// 获取应用实例
// const app = getApp()

Page({
  data:{
		show:false,
		butInfo:1,
		buttData:[
			{id:1,title:"普通货物",status:true},{id:2,title:"电子产品",status:false},{id:3,title:"液体粉末",status:false},
			{id:4,title:"内地EMS",status:false},{id:5,title:"广东EMS",status:false},
		],
		destination:''
	},
	onShow(){
		this.setData({
			destination:wx.getStorageSync('destination') ? wx.getStorageSync('destination') : '美国'
		})
	},
  //跳转到填写地址
  onaddres(){
    wx.navigateTo({
      url: '/pages/writeaddress/writeaddress',
    })
  },
	//跳转仓库地址页面
	onfuzhidizhii(){
		wx.navigateTo({
      url: '/pages/warehouseSite/warehouseSite',
    })
	},
	//预选选中状态
	onxuan(e){
		this.setData({
			butInfo:e.target.dataset.info
		})
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
			show:false,
			butInfo:1
		})
	},
	//跳转到目的地搜索页
	ondestination(){
		wx.navigateTo({
			url: '/pages/destination/destination',
		})
	},
})
