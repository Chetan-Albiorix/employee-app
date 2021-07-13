import { FileModal } from './FileModal'

export default class ProfessionalDetailModal {
  designation: string
  department: string
  experience: number
  currentLocation: string
  skills: string[]
  resumeFile: FileModal

  constructor() {
    this.designation = ''
    this.department = ''
    this.experience = 0.0
    this.currentLocation = ''
    this.skills = []
    this.resumeFile = new FileModal()
  }
}
