/**
 * Run this once with:  node scripts/download-blog-images.js
 * Downloads 7 unique, relevant blog images from Wikipedia Commons.
 */
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'blogs');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const images = [
  {
    // AC technician cleaning a split AC filter
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Air_conditioning_unit_India.jpg/1280px-Air_conditioning_unit_India.jpg',
    filename: 'ac-maintenance.jpg',
  },
  {
    // Modern inverter split AC wall unit
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Split_air_conditioner_indoor_unit.jpg/1280px-Split_air_conditioner_indoor_unit.jpg',
    filename: 'inverter-ac.jpg',
  },
  {
    // Commercial central AC / ceiling duct vents in an office
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Central_Air_Conditioning_Units.jpg/1280px-Central_Air_Conditioning_Units.jpg',
    filename: 'centralized-ac.jpg',
  },
  {
    // Copper pipes / HVAC copper pipe work
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Copper_tube_bending.jpg/1280px-Copper_tube_bending.jpg',
    filename: 'copper-piping.jpg',
  },
  {
    // HVAC refrigerant pressure gauge — used for gas leak checks
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Refrigerant_manifold_gauges.jpg/1280px-Refrigerant_manifold_gauges.jpg',
    filename: 'ac-gas-leak.jpg',
  },
  {
    // Technician mounting a split AC unit on a wall
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Air_conditioner_installation.jpg/1280px-Air_conditioner_installation.jpg',
    filename: 'ac-installation.jpg',
  },
  {
    // Outdoor AC condenser unit — servicing / maintenance context
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Air_conditioner_unit.jpg/1280px-Air_conditioner_unit.jpg',
    filename: 'ac-service.jpg',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);

    const request = proto.get(url, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlink(dest, () => {});
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });

    request.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  console.log(`\nDownloading ${images.length} blog images to ${OUT_DIR}\n`);
  for (const { url, filename } of images) {
    const dest = path.join(OUT_DIR, filename);
    try {
      await download(url, dest);
      const size = (fs.statSync(dest).size / 1024).toFixed(1);
      console.log(`  ✅  ${filename}  (${size} KB)`);
    } catch (err) {
      console.error(`  ❌  ${filename}  — ${err.message}`);
    }
  }
  console.log('\nDone! Refresh your browser to see the new images.\n');
})();
