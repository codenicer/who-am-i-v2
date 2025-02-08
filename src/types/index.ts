export interface Project {
  title: string
  description: string
  image?: string
  techStack: string[]
  link?: string
  github?: string
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
  icon?: string
}

export interface PersonalContext {
  assistant: {
    name: string
    avatarUrl?: string
  }
  professional: {
    currentRole: string
    company: string
    skills: Array<{
      name: string
      experience: number
    }>
    experience: number
    currentRoutine: string
    jobSearchStatus: 'active' | 'passive' | 'not-looking'
  }
  information: {
    name: string
    lastName: string
    email: string
    phone?: string
    location: {
      city: string
      country: string
      openToRelocation?: boolean
    }
    resumeUrl: string
  }
  preferences: {
    minSalary: number
    maxSalary?: number
    location: string
    remoteWork: boolean
  }
}
