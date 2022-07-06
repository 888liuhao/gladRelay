// pages/writeaddress/writeaddress.js
Page({
  data: {
		ipone: '18000000000',
		placeholder: {
			pName: 'Please enter the name',
			pPhone: 'Please enter the phone',
			pAdd: 'Please enter the address',
			pCity: 'Please enter the city',
			pPostCode: 'Please enter the postCode',
			pCountry: 'Please enter the country'
		},
		name: 'qeq',
		phone: '15218097467',
		address: 'weqe',
		city: 'ewqeeq',
		postcode: '123456',
		country: 'eeqwe',
		//输入错误提示
		nameError: '',
		phoneError: '',
		addressError: '',
		cityError: '',
		postcodeError: '',
		countryError: '',
  },
  //复制
  onpon() {
    wx.setClipboardData({
      data: this.data.ipone,
      success: res => {
        console.log(res);
      }
    })
  },
	//表单数据
	blurname(e) {
		let reg = /^[A-Za-z0-9]+$/
		let newname = reg.test(e.detail.value) ? e.detail.value : false
		if (newname == false) {
			this.setData({
				nameError: 'The name consists of a-z or A-Z',
				name: ''
			})
		} else {
			this.setData({
				name: newname,
				nameError: ''
			})
		}
	},
	blurphone(e) {
		let reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
		let a = reg.test(e.detail.value) ? e.detail.value : false
		if (a == false) {
			this.setData({
				phoneError: 'Please enter the correct cell phone number',
				phone: ''
			})
		} else {
			this.setData({
				phone: a,
				phoneError: ''
			})
		}
	},
	bluraddress(e) {
		let reg = /^[A-Za-z0-9]+$/
		let a = reg.test(e.detail.value) ? e.detail.value : false
		if (a == false) {
			this.setData({
				addressError: 'Please enter the correct address',
				address: ''
			})
		} else {
			this.setData({
				address: a,
				addressError: ''
			})
		}
	},
	blurcity(e) {
		let reg = /^[A-Za-z0-9]+$/
		let a = reg.test(e.detail.value) ? e.detail.value : false
		if (a == false) {
			this.setData({
				cityError: 'Please enter the correct city',
				city: ''
			})
		} else {
			this.setData({
				city: a,
				cityError: ''
			})
		}
	},
	blurpostcode(e) {
		let reg = /^[1-9]\d{5}$/g
		let a = reg.test(e.detail.value) ? e.detail.value : false
		if (a == false) {
			this.setData({
				postcodeError: 'Please enter the correct postcode',
				postcode: ''
			})
		} else {
			this.setData({
				postcode: a,
				postcodeError: ''
			})
		}
	},
	blurcountry(e) {
		this.setData({
			country: e.detail.value
		})
	},
	//合并数据
	onShoww() {
		let addresData = {
			name: this.data.name,
			phone: this.data.phone,
			address: this.data.address,
			city: this.data.city,
			postcode: this.data.postcode,
			country: this.data.country
		}
		for (const key in addresData) {
			if (!addresData[key]) {
				wx.showToast({
					title: '地址格式不符合',
					icon: 'error'
				})
				return
			}
		}
		let strData = wx.getStorageSync('arry')
		let add = []
		if(!strData){
			add.push(addresData)
			wx.setStorageSync('arry', JSON.stringify(add))
		}else{
			strData =  JSON.parse(strData)
			strData.forEach(v => {
				add.push(v)
			});
			add.push(addresData)
			wx.setStorageSync('arry', JSON.stringify(add))
		}
		wx.redirectTo({
			url:'/pages/approve/approve'
		})
	}
})