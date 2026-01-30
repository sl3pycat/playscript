TODO
---

### Bugs
- @node/style global styles dont support styles with the `:` characters like `button:hover`.


---

### Roadmap
- @node/style add keyframe animations
- @core/meta set default meta charset and initial viewport tags
- @core/meta set favicon default to /fav.ico
- @api/theme add themes light, dark, system and oled with system being the default (system being the one the os prefers)
- @api/theme add accent color, default #e91e63 (used by buttons and other ui elements)
- @api/import update import to accept multiple urls
- @api/import make import support dynamic links
- @api/import add an origin tag to nodes that import json for future dynamic link scoping (will possibly be used by libs on external servers n stuff)


---

### Suggestions
- @api/import instead of using extensions on the import property, check the url extension and process it accordingly, like checking if a link ends with .json or such, ofcourse avoid parameters added to links.

---

### Pending revisions
- import*
