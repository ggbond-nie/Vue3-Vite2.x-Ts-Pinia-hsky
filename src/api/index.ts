import fetch from '@/utils/fech.js'

// 模块指标
export const inxGeneral = (data: object) =>
    fetch('post', '/index/list', { area_id: 'AH', ...data, size: 9999 })
// 指标明细
export const inxGeneralDetail = (data: object) =>
    fetch('post', '/index/detail', { area_id: 'AH', ...data })
