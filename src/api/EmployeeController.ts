import EmployeeDetailModal from '../modals/EmployeeDetailModal'
import axiosPlugin from './AxiosPlugin'

// get employee list detail
export const GetEmployeeDetailListApi = () => {
  return axiosPlugin.get('list')
}

// add new employee detail
export const AddNewEmployeeDetailApi = (
  employeeDetail: EmployeeDetailModal
) => {
  return axiosPlugin.post('add', employeeDetail)
}

// update employee detail
export const UpdateEmployeeDetailApi = (
  id: string,
  employeeDetail: EmployeeDetailModal
) => {
  return axiosPlugin.patch(
    'edit/' + id,
    employeeDetail
  )
}

// delete employee detail
export const DeleteEmployeeDetailApi = (
  id: string
) => {
  return axiosPlugin.delete('/delete/' + id)
}
