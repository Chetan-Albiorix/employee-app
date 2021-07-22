import axiosPlugin from './AxiosPlugin'

// get employee list detail
export const GetEmployeeDetailListApi = () => {
  return axiosPlugin.get('list')
}

// delete employee detail
export const DeleteEmployeeDetailApi = (
  id: string
) => {
  return axiosPlugin.delete('/delete/' + id)
}
