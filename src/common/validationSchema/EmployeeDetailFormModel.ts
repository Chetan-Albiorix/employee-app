// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formId: 'PersonalDetailFormModel',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required',
    },
    middleName: {
      name: 'middleName',
      label: 'Middle name*',
      requiredErrorMsg: 'Middle name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required',
    },
    email: {
      name: 'email',
      label: 'Email*',
      requiredErrorMsg: 'Email is required',
    },
    mobileNumber: {
      name: 'mobileNo',
      label: 'Mobile Number*',
      requiredErrorMsg:
        'Mobile Number is required',
    },
    presentAddress: {
      name: 'presentAddress',
      label: 'Present Address*',
      requiredErrorMsg:
        'Present Address is required',
    },
    permanentAddress: {
      name: 'permanentAddress',
      label: 'Permanent Address*',
      requiredErrorMsg:
        'Permanent Address is required',
    },
  },
}
