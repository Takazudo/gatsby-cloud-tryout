import fetch from "node-fetch"
import { nanoid } from "nanoid"

export default async function dogApiHandler(req, res) {
  const url = "https://dog.ceo/api/breeds/image/random/10"
  const headers = {
    "Content-Type": "application/json",
  }
  try {
    const result = await fetch(url, {
      method: "GET",
      headers: headers,
    })
    const resp = await result.json()
    const dogs = resp.message.map(src => {
      return {
        id: nanoid(),
        src: src,
      }
    })
    res.send(dogs)
  } catch (error) {
    res.status(500).send(error)
  }
}
