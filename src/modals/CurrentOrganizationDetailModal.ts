export default class CurrentOrganizationDetailModal {
  joiningDate: Date | null
  nextAppraisalDate: Date | null
  currentCtc: number

  constructor() {
    this.joiningDate = null
    this.nextAppraisalDate = null
    this.currentCtc = 0
  }
}
