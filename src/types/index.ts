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
