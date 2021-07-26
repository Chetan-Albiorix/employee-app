import PersonalDetailFormModel from './EmployeeDetailFormModel'
const {
  formField: {
    firstName,
    middleName,
    lastName,
    email,
    mobileNumber,
    presentAddress,
    permanentAddress,
  },
}: any = PersonalDetailFormModel

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [firstName.name]: '',
  [middleName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [mobileNumber.name]: '',
  [presentAddress.name]: '',
  [permanentAddress.name]: '',
}
