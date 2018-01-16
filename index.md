---
layout: default
intro: true
---
# jekyll-theme-windows95
---
This is a [Jekyll](https://jekyllrb.com/) theme inpired on the oldschool Windows 95 UI.

## Usage
* Create an index.(html|md) file with this front matter:
   ```
   ---
   layout: default
   intro: true
   ---
   ```
* For every tag you want to use, create a HTML file in /tags, following this template:
   ```
   ---
   layout: tag
   tag: [tag name]
   permalink: /tag/[name in url slug form]/
   ---
   ```
   You can then use it on your YAML front matter in your posts.