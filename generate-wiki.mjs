import fs from 'fs';
import path from 'path';

const wikiDir = path.join(process.cwd(), 'src/content/wiki');

const articles = [
  { slug: 'concept-network', title: 'Network Theory', content: 'Understanding how [[nodes-and-edges]] connect is key to graph theory.' },
  { slug: 'nodes-and-edges', title: 'Nodes and Edges', content: 'The fundamental building blocks. See also [[graph-visualization]].' },
  { slug: 'graph-visualization', title: 'Graph Visualization', content: 'Visualizing data using tools like [[d3-js]] or [[webgl-rendering]].' },
  { slug: 'd3-js', title: 'D3.js Library', content: 'A powerful library for manipulating documents based on data. Used in [[graph-visualization]].' },
  { slug: 'webgl-rendering', title: 'WebGL Rendering', content: 'High-performance rendering for complex [[3d-graphics]].' },
  { slug: '3d-graphics', title: '3D Graphics', content: 'Creating three-dimensional visual representations. Essential for [[virtual-reality]].' },
  { slug: 'virtual-reality', title: 'Virtual Reality', content: 'Immersive experiences. The future of [[human-computer-interaction]].' },
  { slug: 'human-computer-interaction', title: 'HCI', content: 'Study of how people interact with computers. Relates to [[user-experience]].' },
  { slug: 'user-experience', title: 'User Experience', content: 'Ensuring users find value in what you build. Requires good [[design-thinking]].' },
  { slug: 'design-thinking', title: 'Design Thinking', content: 'A non-linear, iterative process. Start with [[concept-network]] to map ideas.' },
];

if (!fs.existsSync(wikiDir)) {
  fs.mkdirSync(wikiDir, { recursive: true });
}

articles.forEach(article => {
  const fileContent = `---
title: ${article.title}
description: Generated wiki article about ${article.title}
tags: [generated, wiki]
---

# ${article.title}

${article.content}

> [!NOTE]
> This is an auto-generated article to demonstrate **WikiLinks**.

> [!TIP]
> Try clicking the links below to explore!

## Connected Topics
${article.content.match(/\[\[(.*?)\]\]/g)?.map(link => `- ${link}`).join('\n') || '- No direct links'}
`;

  fs.writeFileSync(path.join(wikiDir, `${article.slug}.md`), fileContent);
});

console.log('Generated 10 interconnected wiki articles.');
