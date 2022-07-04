Page({
  data: {
    tabs: [
			{title:'全部'},
			{title:'待支付'},
			{title:'已支付'},
			{title:'已完成'},
		],
		active: 0,
		dataInfo:[
			{orNumber:'20220509140788888888',setout:'中国',destination:'纽约',status:'待入仓',procedure:0},
			{orNumber:'20220509140712345678',setout:'中国',destination:'伦敦',status:'待填写',procedure:4},
			{orNumber:'20220509140712345678',setout:'中国',destination:'澳大利亚',status:'待支付',procedure:1},
			{orNumber:'20220509140712345678',setout:'中国',destination:'泰国',status:'已出仓',procedure:2},
		],
		pppppp:[
			{orNumber:'20220509140712345678',setout:'中国',destination:'伦敦',status:'待填写',procedure:4},
			{orNumber:'20220509140712345678',setout:'中国',destination:'西班牙',status:'待支付',procedure:1},
			{orNumber:'20220509140712345678',setout:'中国',destination:'多伦多',status:'已出仓',procedure:2},
		]
	},
	//tabs栏切换
	onChange(e){
    this.setData({
      active:e.detail.index
    })
	},

})