import { Sushi } from '@/types'

export const getSushi = async (id: string): Promise<Sushi> => {
  try {
    const res = await fetch(
      `https://655a0b826981238d054d103a.mockapi.io/sushi/${id}`,
      { next: { revalidate: 60 } }
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch sushi data (Status: ${res.status})`)
    }

    return res.json()
  } catch (error) {
    console.error('An error occurred while fetching sushi data:', error)
    throw error
  }
}
