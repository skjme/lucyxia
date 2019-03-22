//跨文件的两个组件是如何通信的？用例：@/lib/bus.js和@/views/email.vue、tel.vue以下流程:
// 1. 引入vue
// 2. 创建实例
// 3. 导出Bus
// 4. 进入main.js引入Bus
// 5. 在main.js里将Bus注册到根实例
// 6. 进入email.vue组件
// 7. 进入tel.vue组件

//1. 引入vue
import Vue from 'vue'
//2. 创建实例
const Bus = new Vue()
// 3. 导出Bus
export default Bus