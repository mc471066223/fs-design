
export const LoadingInstance = {
  _target: null, // 保存Loading实例
  _count: 0
}

/**
 * 关闭Loading层实例
 * @param {*} _options
 */
export function closeLoading(_options) {
  if (_options.loading && LoadingInstance._count > 0) LoadingInstance._count--
  if (LoadingInstance._count === 0) {
    LoadingInstance._target && LoadingInstance._target.close()
    LoadingInstance._target = null
  }
}
