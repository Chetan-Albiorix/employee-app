export default class BankDetailModal {
  bankName: string
  accountName: string
  bankAccountNo: number
  ifscCode: string
  aadhaarCardNumber: number
  panCardNumber: string

  constructor() {
    this.bankName = ''
    this.accountName = ''
    this.bankAccountNo = 0
    this.ifscCode = ''
    this.aadhaarCardNumber = 0
    this.panCardNumber = ''
  }
}
