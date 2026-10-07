const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'styles.css');
let content = fs.readFileSync(cssPath, 'utf8');

// Normalize line endings to \n
const isCrlf = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// 1. Base .pattern.bn-expl
const oldBase = `    /* Bangla prose explanation — for non-pattern programs */
    .pattern.bn-expl {
      font-family: 'Noto Sans Bengali', var(--font-ui);
      font-size: clamp(11px, 1.2vw, 12.5px);
      line-height: 2;
      letter-spacing: 0.01em;
      white-space: pre-wrap;
      word-break: break-word;
      overflow-x: hidden;
      padding: 13px 20px;
    }
    .pattern.bn-expl > span {
      display: inline-block;
      text-align: left;
      white-space: pre-wrap;
      max-width: 100%;
    }`;

const newBase = `    /* Bangla prose explanation — for non-pattern programs */
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
    }
    .pattern.bn-expl > span {
      display: block;
      width: 100%;
      max-width: 100%;
      text-align: left;
      white-space: pre-wrap;
      word-break: break-word;
    }`;

if (!content.includes(oldBase)) {
  console.error('Error: oldBase not found');
  process.exit(1);
}
content = content.replace(oldBase, newBase);

// 2. Media query 599px
const old599 = `      .pattern {
        padding: 8px 12px;
        white-space: pre;
        overflow-x: auto;
        overflow-y: visible;
        display: flex;
        justify-content: center;
        text-align: left;
      }`;
const new599 = `      .pattern:not(.bn-expl) {
        padding: 8px 12px;
        white-space: pre;
        overflow-x: auto;
        overflow-y: visible;
        display: flex;
        justify-content: center;
        text-align: left;
      }
      .pattern.bn-expl {
        display: block;
        padding: 10px 14px;
        font-size: clamp(12.5px, 3.4vw, 14.5px);
        line-height: 1.75;
      }`;
content = content.replace(old599, new599);

// 3. Media query 379px
const old379 = `      .pattern {
        font-size: 9px;
        padding: 6px 10px;
      }`;
const new379 = `      .pattern:not(.bn-expl) {
        font-size: 9px;
        padding: 6px 10px;
      }
      .pattern.bn-expl {
        display: block;
        font-size: 12px;
        padding: 8px 10px;
        line-height: 1.7;
      }`;
content = content.replace(old379, new379);

// 4. Landscape
const oldLand = `      .pattern {
        padding: 5px 10px;
        font-size: 9.5px;
      }`;
const newLand = `      .pattern:not(.bn-expl) {
        padding: 5px 10px;
        font-size: 9.5px;
      }
      .pattern.bn-expl {
        display: block;
        padding: 6px 12px;
        font-size: 12.5px;
        line-height: 1.6;
      }`;
content = content.replace(oldLand, newLand);

// 5. Min-width 900px
const old900 = `      .pattern {
        font-size: 18px;
        padding: 20px 32px;
      }`;
const new900 = `      .pattern:not(.bn-expl) {
        font-size: 18px;
        padding: 20px 32px;
      }
      .pattern.bn-expl {
        display: block;
        font-size: clamp(15px, 0.85vw + 7px, 18px);
        padding: 18px clamp(24px, 2.5vw, 40px);
        line-height: 1.85;
      }`;
content = content.replace(old900, new900);

if (isCrlf) content = content.replace(/\n/g, '\r\n');
fs.writeFileSync(cssPath, content, 'utf8');
console.log('✓ Successfully updated styles.css for fluid Bangla typography and layout');
