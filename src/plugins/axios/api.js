import { axios } from 'vue-admin-main/lib/axios'

export default {
  /** 获取标签列表 */
  getLabelType: data => axios.get('/ac/labelType/query.json', data)
}
