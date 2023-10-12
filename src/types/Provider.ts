export type Provider = {
  provider_name: string
  provider_url: string
  endpoints: Array<{
    schemes?: string[]
    discovery?: boolean
    url: string
  }>
}
