
const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const storiesFiles = files.filter(file => file.endsWith('.stories.ts'));
  let modifiedCount = 0;

  storiesFiles.forEach(storyFile => {
    const filePath = path.join(componentsDir, storyFile);
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes("tags: ['autodocs']")) {
      // Remove lines containing tags: ['autodocs']
      // matching specifically the indentation and common variations
      const newContent = content.replace(/\s*tags:\s*\['autodocs'\],?\n/g, '\n');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Updated ${storyFile}`);
        modifiedCount++;
      }
    }
  });
  
  console.log(`\nFixed ${modifiedCount} files.`);
});
