// pages/writeaddress/writeaddress.js
Page({
  data: {
    ipone: '18000000000',
    value:''
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
  blur(e){
    console.log(e.detail.value);
    
  }
})