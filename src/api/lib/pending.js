import axios from 'axios'

const pendingMap = []

/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config) {
  let { url, method, params, data } = config
  if (typeof data === 'string') data = JSON.parse(data) // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}

/**
 * pendingMap是否存在pendingKey
 * @param {*} pendingKey
 * @returns boolean
 */
function hasPendingKey(pendingKey) {
  return pendingMap.some(item => item.pendingKey === pendingKey)
}

/**
 * pendingMap获取cancel
 * @param {*} pendingKey
 * @returns any
 */
function getPendingCancel(pendingKey) {
  const pending = pendingMap.find(item => item.pendingKey === pendingKey)
  if (!pending) {
    throw new Error(`getPendingCancel: pendingMap 不存在 pendingKey=${pendingKey}的项`)
  }
  return pending.cancel
}

/**
 * 删除pendingMap中pendingKey的项
 * @param {*} pendingKey
 * @returns void
 */
function deletePending(pendingKey) {
  const delIdx = pendingMap.findIndex(item => item.pendingKey === pendingKey)
  if (delIdx === -1) {
    throw new Error(`deletePending: pendingMap 不存在 pendingKey=${pendingKey}的项`)
  }
  pendingMap.splice(delIdx, 1)
}

/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
export function addPending(config) {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken(cancel => {
      if (!hasPendingKey(pendingKey)) {
        pendingMap.push({ pendingKey, cancel })
      }
    })
}

/**
 * 删除重复的请求
 * @param {*} config
 */
export function removePending(config) {
  const pendingKey = getPendingKey(config)
  if (hasPendingKey(pendingKey)) {
    const cancelToken = getPendingCancel(pendingKey)
    cancelToken(pendingKey)
    deletePending(pendingKey)
  }
}
