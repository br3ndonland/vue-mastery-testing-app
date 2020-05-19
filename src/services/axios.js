import axios from "axios"

export async function getMessage() {
  try {
    const r = await axios(`http://localhost:3000/message`)
    return r.data
  } catch (e) {
    const details = `getMessage could not connect to the database.`
    const errorPayload = `${e.message}: ${details}`
    throw Error(errorPayload)
  }
}
