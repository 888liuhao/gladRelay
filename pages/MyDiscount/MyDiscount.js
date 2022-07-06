// pages/MyDiscount/MyDiscount.js
Page({
	data: {
		yhData:[
			{z:'/yhuihuang.png',price:'15',type:'元',title:'新品优惠券',ntype:'抵扣劵',y:'',c:'/yhcebian.png'},
			{z:'/yhuihuang.png',price:'8.8',type:'折',title:'新人优惠券',ntype:'折扣卷',y:'',c:'/yhcebian.png'},
			{z:'/yongguo.png',price:'99',type:'元',title:'新人注册优惠券',ntype:'抵扣劵',y:'/yongguoyuan.png',c:'/yongguoce.png'},
			{z:'/yongguo.png',price:'7.9',type:'折',title:'实名通过优惠券',ntype:'折扣卷',y:'/yongguoyuan.png',c:'/yongguoce.png'},
			{z:'/shiixiao.png',price:'66',type:'元',title:'新品优惠券',ntype:'抵扣劵',y:'/shixiiaoyuan.png',c:'/shixiaobian.png'},
			{z:'/shiixiao.png',price:'9',type:'折',title:'新品优惠券',ntype:'折扣卷',y:'/shixiiaoyuan.png',c:'/shixiaobian.png'},
		],
		show: false,
		value:''
	},
	onShoww(){
		this.setData({ show: true });
	},
	//关闭弹出层
	onClose() {
    this.setData({ show: false });
	},
	//
	bindfocus: function (e) {
		console.log(e.detail.value);
	},
	//
	onbut(){
		wx.showToast({
			title: '兑换成功',
			icon: 'success',
			duration: 1500
		})
		this.setData({
			show: false
    })
	}
	
})