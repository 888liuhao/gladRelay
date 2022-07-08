// pages/reckon/reckon.js
Page({
	data: {
		mold:'普通货物',
		show:false,
		columns: ['普通货物', '电子产品', '液体粉末', '广东EMS', '内地EMS'],
	},
	//选择运输类型
	onMold(){
		this.setData({show:true})
	}
})