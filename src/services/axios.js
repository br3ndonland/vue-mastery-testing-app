import axios from "axios"

export async function getMessage() {
  const r = await axios(`http://localhost:3000/message`)
  return r.data
}
