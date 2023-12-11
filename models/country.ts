export interface Country {
  area: number
  independent: boolean
  population: number
  region: 'Americas' | 'Antarctic' | 'Africa' | 'Asia' | 'Europe' | 'Oceania'
  subregion: string
  unMember: boolean
  name: {
    official: string
    common: string
  }
  flags: {
    png: string
    svg: string
    alt: string
  }
  flag: string
  cca3: string
}

export type CountryProp = keyof Country
