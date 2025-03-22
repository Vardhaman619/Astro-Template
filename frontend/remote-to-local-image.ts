import fs from "fs"
import type { Media } from "./src/types/payload-types"
import axios from "axios"

async function remoteToLocalImage() {
  const images: { docs: Media[] } = await fetch(`${process.env.PAYLOAD_CMS_URL}/api/media`).then(res => res.json())
  if (images?.docs && images.docs.length) {
    images.docs.forEach((image) => {
      axios.get(`${process.env.PAYLOAD_CMS_URL}${image.url}`, { responseType: 'arraybuffer' }).then(rawImage => {
        fs.writeFileSync(`./src/assets/images/${image.filename}`, (rawImage.data))
      })
    })
  }
}
remoteToLocalImage()
