const fs = require('fs');
const path = require('path');

// 1. Update app.js
const appPath = path.join(__dirname, '..', 'app.js');
let appContent = fs.readFileSync(appPath, 'utf8');
const isCrlfApp = appContent.includes('\r\n');
appContent = appContent.replace(/\r\n/g, '\n');

const oldAppPatternCheck = `            const isVisualPattern = title.toUpperCase().includes('PATTERN') ||
                                    title.toUpperCase().includes('PYRAMID') ||
                                    title.toUpperCase().includes('TRIANGLE');`;

const newAppPatternCheck = `            const isVisualPattern = title.toUpperCase().startsWith('PATTERN');`;

if (appContent.includes(oldAppPatternCheck)) {
  appContent = appContent.replace(oldAppPatternCheck, newAppPatternCheck);
  if (isCrlfApp) appContent = appContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(appPath, appContent, 'utf8');
  console.log('✓ Successfully updated app.js: isVisualPattern is now title.startsWith("PATTERN")');
} else {
  console.warn('⚠ oldAppPatternCheck not matched in app.js, searching alternative...');
  appContent = appContent.replace(/const isVisualPattern = title\.toUpperCase\(\)\.includes\('PATTERN'\)[\s\S]*?title\.toUpperCase\(\)\.includes\('TRIANGLE'\);/, 'const isVisualPattern = title.toUpperCase().startsWith(\'PATTERN\');');
  if (isCrlfApp) appContent = appContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(appPath, appContent, 'utf8');
  console.log('✓ Successfully updated app.js via regex');
}

// 2. Update styles.css
const cssPath = path.join(__dirname, '..', 'styles.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
const isCrlfCss = cssContent.includes('\r\n');
cssContent = cssContent.replace(/\r\n/g, '\n');

const oldBnExplCss = `    /* Bangla prose explanation — for non-pattern programs */
    .pattern.bn-expl {
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-family: 'Noto Sans Bengali', var(--font-ui), sans-serif;
      font-size: clamp(13.5px, 0.95vw + 7.5px, 17px);
      line-height: 1.85;
      letter-spacing: 0.015em;
      color: var(--text);
      background: var(--surface2, rgba(255, 255, 255, 0.03));
      border-bottom: 1px solid var(--border);
      padding: clamp(12px, 1.3vw, 18px) clamp(16px, 2.2vw, 32px);
      white-space: pre-wrap;
      word-break: break-word;
      overflow-x: hidden;
      text-align: left;
    }`;

const newBnExplCss = `    /* Bangla prose explanation — for non-pattern programs */
    .pattern.bn-expl {
      display: block;
      width: 100%;
      box-sizing: border-box;
      font-family: 'Noto Sans Bengali', var(--font-ui), sans-serif;
      font-size: clamp(13.5px, 0.95vw + 7.5px, 17px);
      line-height: 1.85;
      letter-spacing: 0.015em;
      color: var(--text);
      background-color: var(--code-bg);
      border-bottom: 1px solid var(--border);
      padding: clamp(12px, 1.3vw, 18px) clamp(16px, 2.2vw, 32px);
      white-space: pre-wrap;
      word-break: break-word;
      overflow-x: hidden;
      text-align: left;
    }
    [data-theme="light"] .pattern.bn-expl {
      background-color: var(--surface);
    }`;

if (cssContent.includes(oldBnExplCss)) {
  cssContent = cssContent.replace(oldBnExplCss, newBnExplCss);
  if (isCrlfCss) cssContent = cssContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('✓ Successfully updated styles.css for consistent background & crisp border');
} else {
  console.log('Updating styles.css with regex fallback...');
  cssContent = cssContent.replace(/\/\* Bangla prose explanation — for non-pattern programs \*\/[\s\S]*?\.pattern\.bn-expl \{[\s\S]*?\}/, newBnExplCss);
  if (isCrlfCss) cssContent = cssContent.replace(/\n/g, '\r\n');
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  console.log('✓ Successfully updated styles.css via regex fallback');
}
