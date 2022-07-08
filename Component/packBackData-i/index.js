// Component/packBackData/index.js
Component({

	properties: {

	},

	data: {
		imaList:[
			'https://img1.baidu.com/it/u=3201002904,3866499150&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333',
			'https://img0.baidu.com/it/u=645201651,51267840&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
			'https://img1.baidu.com/it/u=1080151514,375276770&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500',
			'https://img0.baidu.com/it/u=1849026500,3006855006&fm=253&fmt=auto&app=138&f=JPEG?w=716&h=500',
			'https://img1.baidu.com/it/u=170476529,1580868589&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=350'
		]
	},
	methods: {
		preview(e){
			let index = 0
			let m = e.currentTarget.dataset.img
			console.log(m);
			wx.previewMedia({
				current:index,
				url:m,
				sources:this.data.imaList,
				success:res =>{
					console.log(res);				
				},
				fail:err =>{
					console.log('err',err);
				}
			})
		}
	}
})
