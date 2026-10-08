const fs = require('fs');
const path = require('path');

const seeds = JSON.parse(fs.readFileSync(path.join(__dirname, 'seeds.json'), 'utf8'));
const intents = JSON.parse(fs.readFileSync(path.join(__dirname, 'intents.json'), 'utf8'));

const rows = [
  ['query', 'intent_cluster_id', 'intent_type', 'language_layer', 'target_url']
];

function addRow(q, clusterId, layer) {
  const cleanQ = q.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!cleanQ) return;
  const cluster = intents.clusters.find(c => c.id === clusterId) || intents.clusters[0];
  rows.push([
    `"${cleanQ}"`,
    cluster.id,
    cluster.intent,
    layer,
    `"${cluster.target_url}"`
  ]);
}

// 1. English Core Queries
seeds.entities.forEach(ent => {
  seeds.objects.forEach(obj => {
    addRow(`${ent} ${obj}`, 'c1_syllabus_programs', 'en');
    seeds.actions.forEach(act => {
      addRow(`${act} ${ent} ${obj}`, 'c1_syllabus_programs', 'en');
      addRow(`${ent} ${obj} ${act}`, 'c1_syllabus_programs', 'en');
    });
  });
});

// 2. Pattern Specific Queries
['pattern printing', 'star pattern', 'pyramid pattern', 'diamond pattern', 'number triangle', 'alphabet pattern', 'hash pattern'].forEach(pat => {
  ['c', 'cpp', 'c++', 'c programming', 'duet'].forEach(lang => {
    addRow(`${pat} in ${lang}`, 'c2_pattern_printing', 'en');
    addRow(`${lang} ${pat} programs`, 'c2_pattern_printing', 'en');
    addRow(`how to code ${pat} in ${lang}`, 'c2_pattern_printing', 'en');
  });
});

// 3. Series & Number Theory
['series sum', 'factorial series', 'fibonacci', 'prime number', 'palindrome', 'armstrong number', 'strong number', 'gcd lcm'].forEach(item => {
  ['c program', 'c++ program', 'duet admission'].forEach(ctx => {
    addRow(`${item} ${ctx}`, 'c3_series_and_loops', 'en');
    addRow(`${ctx} ${item} solution`, 'c3_series_and_loops', 'en');
  });
});

// 4. Download PDF & APK
['pdf download', 'pdf book', 'syllabus sheet pdf', '111 programs pdf'].forEach(p => {
  addRow(`duet c ${p}`, 'c4_pdf_ebook_download', 'en');
  addRow(`duet c++ ${p}`, 'c4_pdf_ebook_download', 'en');
  addRow(`duet admission c programming ${p}`, 'c4_pdf_ebook_download', 'en');
});

['apk download', 'offline app', 'android apk', 'offline c programming app'].forEach(a => {
  addRow(`duet code ${a}`, 'c5_offline_apk_download', 'en');
  addRow(`duet c program ${a}`, 'c5_offline_apk_download', 'en');
});

// 5. C vs C++ Comparisons
['c vs cpp', 'c vs c++ code', 'c and c++ side by side', 'difference between c and c++ program'].forEach(cmp => {
  addRow(`${cmp} for duet`, 'c6_comparison_side_by_side', 'en');
  addRow(`${cmp} basic programs`, 'c6_comparison_side_by_side', 'en');
});

// 6. Bangla Queries (বাংলা স্ক্রিপ্ট)
seeds.entities_bn.forEach(ent => {
  seeds.objects_bn.forEach(obj => {
    addRow(`${ent} ${obj}`, 'c1_syllabus_programs', 'bn');
    seeds.actions_bn.forEach(act => {
      addRow(`${ent} ${obj} ${act}`, 'c1_syllabus_programs', 'bn');
    });
  });
});

['প্যাটার্ন প্রিন্টিং', 'স্টার প্যাটার্ন', 'পিরামিড প্যাটার্ন', 'ডায়মন্ড প্যাটার্ন', 'ত্রিভুজ প্যাটার্ন'].forEach(pat => {
  addRow(`সি প্রোগ্রামিং ${pat}`, 'c2_pattern_printing', 'bn');
  addRow(`সি++ ${pat} কোড`, 'c2_pattern_printing', 'bn');
  addRow(`ডুয়েট ভর্তি ${pat}`, 'c2_pattern_printing', 'bn');
});

['পিডিএফ ডাউনলোড', 'পিডিএফ বই', 'সি প্রোগ্রামিং বই', '১১১ প্রোগ্রাম শীট'].forEach(pdf => {
  addRow(`ডুয়েট ${pdf}`, 'c4_pdf_ebook_download', 'bn');
  addRow(`ডিপ্লোমা সি প্রোগ্রাম ${pdf}`, 'c4_pdf_ebook_download', 'bn');
});

// 7. Banglish / Romanized Bengali Queries
const banglishCombinations = [
  'duet bhorti c program',
  'duet c programming boi pdf',
  'duet c program sheet download',
  'duet code apk download offline',
  'c program pattern printing bangla',
  'c vs cpp side by side bangla',
  'duet admission c plus plus shob program',
  'polytechnic c language program sheet',
  'duet admission c programming solution'
];
banglishCombinations.forEach(q => addRow(q, 'c1_syllabus_programs', 'banglish'));

// Deduplicate rows based on query
const uniqueRows = [];
const seenQueries = new Set();
rows.forEach((r, idx) => {
  if (idx === 0) {
    uniqueRows.push(r.join(','));
    return;
  }
  const qKey = r[0];
  if (!seenQueries.has(qKey)) {
    seenQueries.add(qKey);
    uniqueRows.push(r.join(','));
  }
});

fs.writeFileSync(path.join(__dirname, 'keywords.csv'), uniqueRows.join('\n'), 'utf8');
console.log(`Generated keywords.csv with ${uniqueRows.length - 1} unique, clustered queries across EN, BN, and Banglish!`);
