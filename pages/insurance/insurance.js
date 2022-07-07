// pages/insurance/insurance.js
Page({
	data: {
		checked: true,
		checkeds:true
	},
	onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
	},
	onChanges({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checkeds: detail });
  },
})