import { FileModal } from './FileModal'

export default class ProfessionalDetailModal {
  designation: string
  department: string
  experience: string
  currentLocation: string
  technologies: string[]
  skills: string[]
  resumeFile: FileModal

  constructor() {
    this.designation = ''
    this.department = ''
    this.experience = ''
    this.currentLocation = ''
    this.technologies = []
    this.skills = []
    this.resumeFile = new FileModal()
  }
}
