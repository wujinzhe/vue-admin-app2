import axios from './index'

export default {
  /** 获取商户详情列表 */
  getMchtDetailList: data => axios.post('/huiShop/v1/getMchtDetailList', data),
  /** 获取弹窗提醒 */
  getPopupNotify: data => axios.post('/huiShop/v1/getPopupNotify', data),
  /** 展示商户数量 */
  getMchtNum: data => axios.post('/huiShop/v1/getMchtNum', data)
}
