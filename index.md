---
layout: default
intro: true
---
# jekyll-theme-windows95
---
This is a [Jekyll](https://jekyllrb.com/) theme inpired on the oldschool Windows 95 UI.

## Usage
(assume every snippet is inside a Jekyll front matter block)
* Create an index.(html|md) file with this front matter:
   ```yaml
   
   layout: default
   intro: true
   
   ```
   Place your bio/intro/summary here.
* For every tag you want to use, create a HTML file in /tags, following this template:
   ```yaml
   
   layout: tag
   tag: tag name
   permalink: /tag/name in url slug form/
   
   ```
   You can then put the tag on the YAML front matter in your posts.
* Create another HTML tag file, but this time with this content:
   ```yaml
   
   layout: all
   tag: 
   permalink: /all/
   
   ```
   This creates a link to show all posts, ungrouped.
   
**All done! Now you can use Jekyll just like you would with any other theme.**
