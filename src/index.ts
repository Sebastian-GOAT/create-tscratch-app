#!/usr/bin/env node
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const projectName = args[0] || 'tscratch-project';

const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.join(__dirname, 'template');

async function main() {
    try {
        await fs.copy(templateDir, targetDir, { overwrite: false, errorOnExist: true });
        console.log(`✅ TScratch project '${projectName}' created successfully!\n`);
        console.log('📦 Now run:');
        console.log(`- cd ${projectName}`);
        console.log('- npm install');
        console.log('- npm run dev');
    } catch (err) {
        console.error('❌ Failed to create project:', err);
    }
}

main();