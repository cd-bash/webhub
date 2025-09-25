#!/usr/bin/env node

/**
 * CSS Migration Script for WebHub
 * 
 * This script helps migrate from scattered CSS files to the new centralized architecture.
 * Run this after setting up the new CSS structure.
 */

import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';
import { join } from 'path';

// List of files to migrate (remove CSS imports)
const filesToMigrate = [
  // Views
  'src/views/about/index.ts',
  'src/views/home/index.ts', 
  'src/views/utils/index.ts',
  'src/views/common/call-to-action/index.ts',
  
  // Components
  'src/components/top-nav/index.ts',
  'src/components/three-background/index.ts',
  'src/components/thumbnail-project/index.ts',
  'src/components/logo/index.ts',
  'src/components/pixel-grid/index.ts',
  'src/components/end-of-line/index.ts'
];

// Old CSS files to remove after migration
const cssFilesToRemove = [
  'src/views/styles.css',
  'src/views/utils/styles.css',
  'src/views/home/styles.css',
  'src/views/about/styles.css',
  'src/views/common/call-to-action/styles.css',
  'src/components/top-nav/styles.css',
  'src/components/three-background/styles.css',
  'src/components/thumbnail-project/styles.css',
  'src/components/logo/styles.css',
  'src/components/pixel-grid/styles.css',
  'src/components/end-of-line/styles.css'
];

function removeImportFromFile(filePath) {
  try {
    if (!existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    let content = readFileSync(filePath, 'utf8');
    
    // Remove CSS import lines
    const updatedContent = content
      .replace(/import\s+['"]\.\/(\.\.\/)*styles\.css['"];?\n?/g, '')
      .replace(/import\s+['"]\.(\/styles)?\.css['"];?\n?/g, '');
    
    if (content !== updatedContent) {
      writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`📝 No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function removeOldCSSFile(filePath) {
  try {
    if (existsSync(filePath)) {
      unlinkSync(filePath);
      console.log(`🗑️  Removed: ${filePath}`);
    } else {
      console.log(`📝 Already removed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error removing ${filePath}:`, error.message);
  }
}

function main() {
  console.log('🚀 Starting CSS Migration...\n');
  
  console.log('📝 Removing CSS imports from TypeScript files...');
  filesToMigrate.forEach(removeImportFromFile);
  
  console.log('\n🗑️  Removing old CSS files...');
  // Uncomment the line below when you're ready to remove the old files
  // cssFilesToRemove.forEach(removeOldCSSFile);
  console.log('⚠️  Old CSS file removal is commented out for safety.');
  console.log('   Uncomment the removeOldCSSFile calls when you\'re ready.');
  
  console.log('\n✅ Migration complete!');
  console.log('\nNext steps:');
  console.log('1. Test your application to ensure styles are working correctly');
  console.log('2. Update any hardcoded class names to use new conventions');
  console.log('3. Remove old CSS files manually if everything looks good');
  console.log('4. Consider using utility classes for common patterns');
}

if (typeof require !== 'undefined' && require.main === module) {
  main();
}

export { removeImportFromFile, removeOldCSSFile };