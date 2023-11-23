import { AllSushi } from '@/types'

export const getAllSushi = async (
  sortby?: string,
  order?: string,
  category?: string
): Promise<AllSushi> => {
  const baseUrl = 'https://655a0b826981238d054d103a.mockapi.io/sushi/'
  const url = new URL(baseUrl)

  const params: Record<string, string | undefined> = {
    categoryEng: category,
    sortby,
    order,
  }

  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined) {
      url.searchParams.append(key, params[key] as string)
    }
  })

  const res = await fetch(url.toString(), {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`)
  }

  return await res.json()
}
