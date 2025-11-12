export interface Project {
  title: string
  description: string
  image: string
  role: string
}

export interface Recommendation {
  name: string
  quote: string
  image: string
  date: string
}

export interface Student {
  name: string
  quote: string
  image: string
  date: string
}

export interface Social {
  icon: string
  path: string
}

export interface Route {
  title: string
  path: string
  exact?: boolean
}
