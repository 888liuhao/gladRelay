// pages/payment/payment.js
Page({
	data: {
		show:false,
		reduction:0,
		treatyShow:false,
		checked:false,
		checkednnn:false,
		yhData:[
			{status:true,id:1,price:2000,text:'牛马资本优惠券',desc:'14天后到期 · 所有国家可用'},
      {status:false,id:2,price:80,text:'牛马10元劵',desc:'14天后到期 · 亚洲国家可用'},
      {status:false,id:3,price:100,text:'双11优惠券',desc:'14天后到期 ·亚洲国家可用'},
      {status:false,id:4,price:99,text:'牛马50元劵',desc:'14天后到期 · 所有国家可用'},
		]
	},
	//确认使用优惠劵
	onqueren(){
		this.setData({show:false})
	},
	//不使用优惠券
	onChange(){
		this.data.yhData.forEach(i => {
			i.status = false
		})
		this.setData({
			checkednnn:true,
			yhData:this.data.yhData
    });
	},
	//选择优惠券
	onyhq(e){
		let {id,status,price} = e.currentTarget.dataset.yhin
		this.data.yhData.filter( i =>  i.id != id ).forEach( i => i.status = false )
		this.data.yhData.filter(v => v.id == id )[0].status = !status
		this.setData({
			yhData:	this.data.yhData,
			checkednnn:false,
			reduction:price
		})
	},
	//进来的时候触发
	onLoad(){
		this.getyhhh()
	},
	//条款弹出
	onTon(){
		this.setData({treatyShow:true})
	},
	//条款同意
	onShoww(){
		this.setData({
			treatyShow:false,
			checked:true
		})
	},
	//优惠卷弹出
	onYhui(){
		this.setData({show:true})
	},
	//优惠券默认
	getyhhh(){
		let a = this.data.yhData.filter(item => item.status == true)[0].price
		this.setData({reduction:a})
	},
	//支付
	onzhifu(){
		if(!this.data.checked){
			return
		}
		console.log('t');
		//可以跳转支付了
	}
})