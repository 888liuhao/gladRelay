// Component/orderInfo-i/index.js
Component({
	properties: {

	},
	data: {
		// inputValue:'',
		number:'',
		disabled:false,
		orderList:[],
		disableditem:false,
	},
	methods: {
		//输入框获得焦点
		bindinput: function (e) {
			let number = e.detail.value
			if(!Number(number)){
				this.setData({number: ''})
				return
			}
			this.setData({number})
		},
		//输入框失去焦点
		bindblur(e){
			if(e.detail.value > 0){
				this.setData({disabled:true})
			}
			this.setFound(this.data.number)
		},
		//根据失去焦点得到的数据创建对应的input
		setFound(number){
			let aa = false
			for(let i = 0; i < number; i++){
				//拿到个数通过for循环push到空数组
				//status 0-删除 1-待入仓 2-已入库
				this.data.orderList.push({status:'0',mail:'',id:i+1,disabled:aa})
			}
			this.setData({orderList:this.data.orderList})
		},
		//输入框列表失去焦点的时候赋值并提示禁用
		itemBindchange(e){
			let item = e.target.dataset.items
			let val = e.detail.value
			let id = item.id
			let _this = this
			if(val == ''){
				return
			}
			//过滤数组 当点击的id匹配上时,就把当前的值赋值到该对象
			this.data.orderList.filter( v => v.id == id )[0].mail = val
			wx.showModal({
				title:val,
				content:'确认快递单号,确认后不可修改',
				success:({confirm}) =>{
					if(confirm === true){
						_this.data.orderList.filter( v => v.id == id )[0].disabled = true
						_this.setData({
							orderList :_this.data.orderList
						})
					}
				}
			})
			console.log(this.data.orderList);
		},
		//删除
		deleteClick(e){
			let index = e.target.dataset.inf
			let _this = this
			wx.showModal({
				title:'是否确认删除该快递单号',
				success:res =>{
					if(res.confirm === true){
						_this.data.orderList.splice(index,1)
						_this.setData({
							orderList :_this.data.orderList,
							number:Number(this.data.number) - 1
						})
					}
				}
			})
			console.log(this.data.orderList);
		},
		//增加快递单号
		onadd(){
			let _this = this
			//用时间戳作为新增的id
			let time = new Date().getTime()
			let aa = false
			let obj = {status:'0',mail:'',id:time,disabled:aa}
			wx.showModal({
				title:'增加快递单号后，发往转运中心的快递个数+1，是否要继续',
				success:({confirm}) =>{
					if(confirm === true){
						_this.data.orderList.push(obj)
						_this.setData({
							orderList:this.data.orderList,
							number:Number(this.data.number) + 1
						})
					}
				}
			})
			console.log(this.data.orderList);
		}
	}
	
})
