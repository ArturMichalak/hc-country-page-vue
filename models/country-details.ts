import type { Country } from './country'

export interface CountryDetails extends Country {
  capital: string[]
  languages: { [key: string]: string }
  currencies: { [key: string]: { name: string; symbol: string } }
  continents: string[]
  borders: string[]
}
