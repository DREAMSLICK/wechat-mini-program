Page({});

// Page({
//     data: {
//       name: '顾生祥'
//     }
//   });

// const app = getApp();

// Page({
//     data: {
//         name: '顾生祥',
//         now: app.globalData.now
//     },
//     buttonHandler(event) {
//         this.setData({
//             name: '李四'
//         }, function () {
//             wx.showToast({
//                 title: '操作完成',
//                 duration: 700
//             });
//         })
//     }
// });

// Page({
//     data: {
//         name: '顾生祥',
//         now: app.globalData.now
//     },
//     buttonHandler(event) {
//         const that = this;
//         wx.showModal({
//             title: '操作确认',
//             content: '你确认要修改吗？',
//             success(res) {
//                 if (res.confirm) {
//                     that.setData({
//                         name: '李四'
//                     }, function () {
//                         wx.showToast({
//                             title: '操作完成',
//                             duration: 700
//                         });
//                     });
//                 } else if (res.cancel) {
//                     console.log('用户点击取消');
//                 }
//             }
//         });
//     }
// });

// Page({
//     data: {
//         items: ['事项 A', '事项 B', '事项 C']
//     }
// });

// Page({
//     data: {
//       items: [],
//       inputValue: ''
//     },
//     inputHandler(event) {
//       this.setData({
//         inputValue: event.detail.value || ''
//       });
//     },
//     buttonHandler(event) {
//       const newItem = this.data.inputValue.trim();
//       if (!newItem) return;
//       const itemArr = [...this.data.items, newItem];
//       wx.setStorageSync('items', itemArr);
//       this.setData({ items: itemArr });
//     },
//     onLoad() {
//       const itemArr = wx.getStorageSync('items') || []; 
//       this.setData({ items: itemArr });
//     }
//   });

// Page({
//     data: { name: '' },
//     buttonHandler(event) {
//         if (!event.detail.userInfo) return;
//         this.setData({
//             name: event.detail.userInfo.nickName
//         });
//     }
// });

// Page({
//     buttonHandler(event) {
//         wx.navigateTo({
//             url: '../second/second'
//         });
// });