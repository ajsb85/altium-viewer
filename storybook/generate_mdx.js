
const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');

function generateMdxContent(componentName) {
  return `import { Meta, Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import * as ${componentName}Stories from './${componentName}.stories';

<Meta of={${componentName}Stories} />

<Title />
<Subtitle />
<Description />

<Primary />
<Controls />

<Stories />
`;
}

fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const storiesFiles = files.filter(file => file.endsWith('.stories.ts'));

  storiesFiles.forEach(storyFile => {
    const componentName = storyFile.replace('.stories.ts', '');
    const mdxFile = path.join(componentsDir, `${componentName}.mdx`);

    if (!fs.existsSync(mdxFile)) {
      const content = generateMdxContent(componentName);
      fs.writeFileSync(mdxFile, content);
      console.log(`Created ${componentName}.mdx`);
    } else {
      console.log(`Skipped ${componentName}.mdx (already exists)`);
    }
  });
});
