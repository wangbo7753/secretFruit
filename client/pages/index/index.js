//index.js
//获取应用实例
const app = getApp();
Page({
    data: {
        loading: true,
        categories: []
    },
    onLoad: function (options) {

    },
    onReady: function () {
        /*const requestTask = wx.request({
            url: app.globalData.basePath + '/hotNews',
            header: {
                'content-type': 'application/json'
            },
            method: 'GET',
            dataType: 'json',
            success: res => {
                console.log(res.data);
                this.setData({
                    loading: false,
                    categories: res.data.data
                })
            },
            fail: function () {

            },
            complete: function () {

            }
        })*/
    },
    onShow: function () {
        console.log('page is onShow');
    },
    onPullDownRefresh: function (e) {
        console.log('page is onPullDownRefresh');
    },
    onReachBottom: function (e) {
        console.log('page is onReachBottom');
    }
});
