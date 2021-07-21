import EmployeeDetailModal from '../modals/EmployeeDetailModal'

export const employeeData: EmployeeDetailModal[] =
  [
    {
      id: '60e4741c-2809-4b12-9c5a-d318e1c7b434',
      personalDetail: {
        firstName: 'Jerry ',
        middleName: 'A',
        lastName: 'Beggar',
        mobileNumber: '123',
        contactNumber: '123',
        email: 'jerryBeggar@gmail.com',
        birthday: new Date(),
        presentAddress: 'Address',
        permanentAddress: 'Address',
        image: {
          fileName: '',
          fileSrc: '',
        },
        isCopyToPresentAddress: true,
      },
      bankDetail: {
        bankName: 'SBI',
        accountName: 'Jerry Beggar',
        bankAccountNo: 1231,
        ifscCode: '123',
        aadhaarCardNumber: 123,
        panCardNumber: '12312',
      },
      professionalDetail: {
        designation: 'SE',
        department: 'I.T',
        experience: 6.3,
        currentLocation: 'AHM',
        skills: ['Python'],
        resumeFile: {
          fileName: '',
          fileSrc: '',
        },
      },
      educationDetail: [
        {
          educationName: 'ASD',
          universityName: 'ASD',
          result: 'ASD',
          yearOfPassing: 2020,
        },
      ],
      experienceDetail: [
        {
          companyName: 'ASD',
          position: 'ASD',
          totalYear: 2,
          lastCtc: 1.2,
        },
      ],
      currentOrganizationDetail: {
        joiningDate: new Date(),
        nextAppraisalDate: new Date(),
        currentCtc: 2.2,
      },
    },
    {
      id: '7cf00b5a-6fde-4a08-9f05-e8cba31edb80',
      personalDetail: {
        firstName: 'Chetan ',
        middleName: 'A',
        lastName: 'Chudasama',
        mobileNumber: '123123',
        contactNumber: '123',
        email: 'chetan2013@gmail.com',
        birthday: new Date(),
        presentAddress: 'address',
        permanentAddress: 'address',
        image: {
          fileName: '',
          fileSrc: '',
        },
        isCopyToPresentAddress: true,
      },
      bankDetail: {
        bankName: 'SBI',
        accountName: 'Chetan Chudasama',
        bankAccountNo: 123123,
        ifscCode: '123',
        aadhaarCardNumber: 12312312,
        panCardNumber: '12312',
      },
      professionalDetail: {
        designation: 'SE',
        department: 'I.T',
        experience: 2.1,
        currentLocation: 'ahm',
        skills: ['Java'],
        resumeFile: {
          fileName: '',
          fileSrc: '',
        },
      },
      educationDetail: [
        {
          educationName: 'BE (I.T)',
          universityName: 'GTU',
          result: '8.23',
          yearOfPassing: 2019,
        },
        {
          educationName: 'DE (I.T)',
          universityName: 'GTU',
          result: '8.2',
          yearOfPassing: 2016,
        },
      ],
      experienceDetail: [
        {
          companyName: 'Some Company',
          position: 'SE',
          totalYear: 2,
          lastCtc: 3.4,
        },
      ],
      currentOrganizationDetail: {
        joiningDate: new Date(),
        nextAppraisalDate: new Date(),
        currentCtc: 4,
      },
    },
  ]
