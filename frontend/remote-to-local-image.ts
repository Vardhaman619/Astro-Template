import fs from "fs"
import type { Media } from "./src/types/payload-types"
import axios from "axios"
type FetcgResp = {
  docs: Media[],
  "hasNextPage": boolean,
  "nextPage": null | number,
}
async function remoteToLocalImage() {
  let images: FetcgResp = await fetch(`${process.env.PAYLOAD_CMS_URL}/api/media?limit=100`).then(res => res.json())

  if (images?.docs?.length) {
    // biome-ignore lint/complexity/noForEach:
    images.docs.forEach((image) => {
      axios.get(`${process.env.PAYLOAD_CMS_URL}${image.url}`, { responseType: 'arraybuffer' }).then(rawImage => {
        fs.writeFileSync(`./src/assets/images/${image.filename}`, (rawImage.data))
      })
    })
  }
  if (images.hasNextPage) {
    images = await fetch(`${process.env.PAYLOAD_CMS_URL}/api/media?limit=100&page=${images.nextPage}`).then(res => res.json())
    // biome-ignore lint/complexity/noForEach:
    images.docs.forEach((image) => {
      axios.get(`${process.env.PAYLOAD_CMS_URL}${image.url}`, { responseType: 'arraybuffer' }).then(rawImage => {
        fs.writeFileSync(`./src/assets/images/${image.filename}`, (rawImage.data))
      })
    })
  }
}
remoteToLocalImage()
