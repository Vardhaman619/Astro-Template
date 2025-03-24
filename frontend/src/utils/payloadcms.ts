import axios from "axios";

export const payloadcmsClient = axios.create({
  baseURL: process.env.PAYLOADCMS_API_URL
})
