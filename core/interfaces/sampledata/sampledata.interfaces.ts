export interface User {
  id: number
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  email: string
  name: string
  phone: string
  username: string
  website: string
}

export interface SampleData {
  users: User[] | null
}
