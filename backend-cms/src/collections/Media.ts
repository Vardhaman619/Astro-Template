import type { CollectionConfig } from 'payload'
import { customAlphabet } from 'nanoid'
import path from "node:path"
import mime from 'mime-types'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', 10) // Short 10-character ID

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    mimeTypes: ['image/*']
  },
  hooks: {
    beforeOperation: [
      ({ req, operation }) => {
        if ((operation === 'create' || operation === 'update') && req.file) {
          const { name, mimetype } = req.file
          let ext = path.extname(name) // Extract file extension
          const baseName = path.basename(name, ext) // Remove extension

          // If no extension, assign based on MIME type
          if (!ext) {
            const detectedExt = mime.extension(mimetype) // Get correct extension
            if (detectedExt) {
              ext = `.${detectedExt}`
            }
          }


          // Generate short unique ID
          const shortId = nanoid()

          // Construct unique filename (handle case when extension is missing)
          const uniqueName = ext ? `${baseName}-${shortId}${ext}` : `${baseName}-${shortId}`
          req.file.name = uniqueName
        }
      },
    ],
  }
}
