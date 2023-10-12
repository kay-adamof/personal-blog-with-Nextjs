import { Provider } from "@/types/Provider"

export default async () => {
  const res = await fetch('https://oembed.com/providers.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const json: Provider[] = await res.json()
  const providerUrls: string[] = json.map(({ provider_url }) => provider_url)
  return providerUrls
}
