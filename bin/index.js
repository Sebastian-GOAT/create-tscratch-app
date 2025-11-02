#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

// Get target directory from CLI arguments, default to "tscratch-project"
const targetDir = process.argv[2] || 'tscratch-project';

// Resolve paths
const templateDir = path.join(__dirname, '..', 'template');
const resolvedTarget = path.resolve(process.cwd(), targetDir);

// Copy template folder
(async () => {
    try {
        // Copy
        await fs.copy(templateDir, resolvedTarget, { overwrite: false, errorOnExist: true });

        // Rename gitignore to .gitignore
        const gitignoreSrc = path.join(resolvedTarget, 'gitignore');
        const gitignoreDest = path.join(resolvedTarget, '.gitignore');
        if (await fs.pathExists(gitignoreSrc))
            await fs.rename(gitignoreSrc, gitignoreDest);

        // Log the result
        console.log(`\n✅ TScratch project '${targetDir}' created successfully!`);
        console.log('\n📦 Next steps:');
        console.log(`- cd ${targetDir}`);
        console.log('- npm install');
        console.log('- npm run dev\n');
    } catch (err) {
        console.error('❌ Failed to create project:', err);
    }
})();