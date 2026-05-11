const fs   = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

// Ensure dist exists
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

// Files to copy into dist alongside the minified HTML
const assets = [
  'DUET Admission C.pdf',
  'DUET Admission Cpp.pdf',
  'DUET — C & C++ Programs Combined.pdf',
  'duet-admission-c-programs.pdf',
  'duet-admission-cpp-programs.pdf',
];

const srcDir = path.join(__dirname, '..');

assets.forEach(file => {
  const src  = path.join(srcDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    const kb = (fs.statSync(dest).size / 1024).toFixed(1);
    console.log(`✓ Copied: ${file} (${kb} KB)`);
  } else {
    console.warn(`⚠ Skipped (not found): ${file}`);
  }
});

// Report minified HTML size
const htmlDest = path.join(distDir, 'index.html');
if (fs.existsSync(htmlDest)) {
  const origKb = (424174 / 1024).toFixed(1);
  const newKb  = (fs.statSync(htmlDest).size / 1024).toFixed(1);
  const saved  = (((424174 - fs.statSync(htmlDest).size) / 424174) * 100).toFixed(1);
  console.log(`\n📦 index.html: ${origKb} KB → ${newKb} KB (${saved}% smaller)`);
}

console.log('\n✅ Build complete → dist/');
