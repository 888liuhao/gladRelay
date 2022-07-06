// pages/yhSecurities/yhSecurities.js
Page({
	data: {
		image:[
      {img:'/assets/images/y1.png',title:'双十一无门槛10元劵',n:'10',m:'599',mk:'无门槛'},
      {img:'/assets/images/y2.png',title:'无门槛50元劵',n:'50',m:'0',mk:'无门槛'},
      {img:'/assets/images/y3.png',title:'110元搬家福利劵',n:'110',m:'1000',mk:'满减劵'}
    ]
	},
	onLngqu(e){
		//小程序需要把数据转正字符串再进行传递
		let data = JSON.stringify(e.currentTarget.dataset.yinfo)
		wx.navigateTo({
			url: '/pages/gatPreferential/gatPreferential?data='+ data,
		})
	}

})