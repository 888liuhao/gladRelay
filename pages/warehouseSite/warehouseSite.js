// pages/warehouseSite/warehouseSite.js
Page({
	data: {
    addInfo:{consignee:'牛马仓库',address:'牛马仓库牛马仓库牛马仓库牛马仓库',phone:'1800000000',dawk:'000000'}
  },
  //复制地址
  onfu(){
    let adder = this.data.addInfo.consignee + '-'+this.data.addInfo.address+'-'+this.data.addInfo.phone+'-'+this.data.addInfo.dawk
    wx.setClipboardData({
      data: adder,
      success:res =>{
        console.log(res);
      }
    })
  }
	
})