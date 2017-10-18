//logs.js
import util from '../../utils/util'
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return util.formatTime(new Date(log))
            })
        })
    },
    onShareAppMessage: function () {
        return {
            title: '果秘诚邀您加入',
            path: '/pages/join/join'
        }
    }
});
