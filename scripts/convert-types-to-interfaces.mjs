import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '../definitions/opanapi-planning-types.d.ts');
const outputPath = join(__dirname, '../definitions/planning.d.ts');

let content = readFileSync(inputPath, 'utf8');

// Convert "type X = { ... };" to "interface X { ... }"
content = content.replace(/export type (\w+)\s*=\s*{([^}]+)}/g, (match, name, body) => {
  return `export interface ${name} {${body}}`;
});

// Write to output file
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, content);

console.log(`Converted interfaces written to ${outputPath}`);