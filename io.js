const fs = require('fs');
const path = require('path');

// List all image files in the directories
let imageFiles = [];
fs.readdirSync('images').forEach(file => {
    imageFiles.push(path.join('images', file));
});

fs.readdirSync('img').forEach(file => {
    imageFiles.push(path.join('img', file));
});

// List all image file paths in the HTML files
const htmlFiles = ['doctors/anaesthesiology-dr-saurabhmishra.html', 'index.html', 'about-us.html', 'contact-us.html', 'gallery.html', 'team-member.html'];
let imagePathsInHtml = [];

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imagePaths = content.match(/src="(\.\.\/images\/.*?)"/g);
    if (imagePaths) {
        imagePathsInHtml = imagePathsInHtml.concat(imagePaths.map(path => path.slice(5, -1)));
    }
});

// Identify unused images
const unusedImages = imageFiles.filter(file => !imagePathsInHtml.includes(file));

console.log(unusedImages);

const DeletedImages = unusedImages.forEach(file => {
    fs.unlinkSync(file);
});

console.log(DeletedImages)