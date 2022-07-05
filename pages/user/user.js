// pages/user/user.js
Page({
	data: {
		userData:[
			{title:'待付款',img:'/assets/userimg/qianbao.png'},
			{title:'代发货',img:'/assets/userimg/peisong.png'},
			{title:'待收货',img:'/assets/userimg/shouhuo.png'},
			{title:'待评价',img:'/assets/userimg/haopiing.png'},
		],
		moreData:[
			{title:'我的地址',img:'/assets/images/dingwei.png',url:'/pages/MyAddress/MyAddress'},
			{title:'优惠卷',img:'/assets/images/sssyouhui.png',url:'/pages/MyDiscount/MyDiscount'},
			{title:'活动中心',img:'/assets/userimg/huodong.png'},
			{title:'转运流程',img:'/assets/userimg/buzhou.png'},
			{title:'转运须知',img:'/assets/userimg/xuzhi.png'},
			{title:'关于我们',img:'/assets/images/sssniu.png'}
		]
	},
	//全部订单
	allfrom(){
		wx.switchTab({
			url: '/pages/fromInfo/fromInfo',
		})
	},
	//待付款四儿子
	dFkuan(e){
		console.log(e.currentTarget.dataset.info);
	},
	//其他选项
	qitaxuan(e){
		wx.navigateTo({
			url: e.currentTarget.dataset.otherinfo.url
		})
	}
})