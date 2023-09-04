const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

(async () => {
    const outputDir = path.join(__dirname, "./mfs");
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const manifests = fs.readdirSync(outputDir, { withFileTypes: false })
        .map(dir => fs.readFileSync(path.join(outputDir, dir, "microfrontend-manifest.json"), "utf8"))
        .map(manifest => JSON.parse(manifest))
        .map(manifest => ({
            ...manifest,
            entry: `${process.env.PUBLIC_URL || ""}/mfs/${manifest.scope}/remoteEntry.js`
        }));
    console.log({
        manifests
    })
    fs.writeFileSync(
        path.join(__dirname, "./microfrontend-manifests.json"), 
        JSON.stringify(manifests, null, 2)
    );
})();