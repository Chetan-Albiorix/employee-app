import axiosPlugin from './AxiosPlugin'

export const GetEmployeeDetailListApi = () => {
  return axiosPlugin.get('list')
}
