import fs from "fs";
import axios from "axios";
import path from "path";


const PAYLOAD_CMS_URL = process.env.PAYLOAD_CMS_URL;
const IMAGE_DIR = "./src/assets/images";

async function fetchImages(page = 1) {
	if (!PAYLOAD_CMS_URL) {
		console.error("❌ PAYLOAD_CMS_URL is not defined in environment variables.");
		return;
	}

	console.log(`🔄 Fetching images (Page ${page})...`);

	try {
		const response = await axios.get(`${PAYLOAD_CMS_URL}/api/media?limit=100&page=${page}`);
		return response.data;
	} catch (error) {
		console.error("❌ Error fetching images:", error.message);
		return null;
	}
}

async function downloadImage(image) {
	const imagePath = path.join(IMAGE_DIR, image.filename);

	// Skip downloading if file already exists
	if (fs.existsSync(imagePath)) {
		console.log(`✅ Already exists: ${image.filename}`);
		return;
	}

	try {
		const response = await axios.get(`${PAYLOAD_CMS_URL}${image.url}`, {
			responseType: "arraybuffer",
		});
		fs.writeFileSync(imagePath, response.data);
		console.log(`⬇️ Downloaded: ${image.filename}`);
	} catch (error) {
		console.error(`❌ Failed to download ${image.filename}:`, error.message);
	}
}

async function remoteToLocalImage() {
	// Ensure the directory exists
	if (!fs.existsSync(IMAGE_DIR)) {
		fs.mkdirSync(IMAGE_DIR, { recursive: true });
	}

	let page = 1;
	let images;

	do {
		images = await fetchImages(page);
		if (!images || !images.docs?.length) break;

		// Download all images in parallel
		await Promise.all(images.docs.map(downloadImage));

		page = images.nextPage;
	} while (images.hasNextPage);

	console.log("🎉 All images downloaded successfully!");
}

remoteToLocalImage();
