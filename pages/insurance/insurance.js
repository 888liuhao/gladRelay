// pages/insurance/insurance.js
Page({
	data: {
		checked: false,
		checkeds:false,
		value:'',
		wrotectCost:0,
		protectCost:0,
		show:false
	},
	onShow(){
		this.getChecked()
		this.getCheckeds()
	},
	getChecked(){
		if(!this.data.checked){
			this.setData({protectCost:0})
			return
		}
		let protectCost = this.data.value * 0.03
		this.setData({
			protectCost
		})
	},
	getCheckeds(){
		if(!this.data.checkeds){
			this.setData({wrotectCost:0})
			return
		}
		let wrotectCost = this.data.value * 0.02
		this.setData({
			wrotectCost
		})
	},
	//丢失险
	onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
		this.setData({ checked: detail });
		this.getChecked()
	},
	//关税险
	onChanges({ detail }) {
    // 需要手动对 checked 状态进行更新
		this.setData({ checkeds: detail });
		this.getCheckeds()
	},
	bindinput(e){
		console.log(e.detail.value);
		if(!Number(e.detail.value)){
			wx.showToast({
				title: '请正确输入价格',
				icon: 'error',
				duration: 2000
			})
			this.setData({value:''})
			return
		}
		this.setData({value:e.detail.value})
		this.getChecked()
		this.getCheckeds()
	},
	//下一步
	onNext(){
		if(!this.data.checked){
			this.setData({show:true})
		}else{
			//跳转
			console.log('跳');
		}
	},
	//承担风险就让他跳吧
	nonono(){
		console.log('跳');
	},
	//购买保险
	excellent(){
		this.setData({show:false})
	}
})