---
title: Graph View Feature
description: Explaining how the graph view works.
tags: [meta, feature]
---

# Graph View

You are looking at the **Graph View** feature right now on the main Wiki page!

## How it works
1. **Nodes**: Each markdown file in `src/content/wiki` becomes a node.
2. **Links**: We use Regex to find `[[WikiLinks]]` inside the content.
3. **Visualization**: We use `react-force-graph-2d` to render the interactive graph.

It's a great way to visualize your **Knowledge Graph**.

See also [[graph-visualization]].
