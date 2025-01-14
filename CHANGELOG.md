PlayScriptJS Changelog
---

### v0.3

#### New
- added a basic [splash screen](/core/splash-screen.md) with a progress bar, title text and subtext.
- added default `charset` and `viewport` meta data at [enhancements](/core/enhancements.md).
- added app title to [enhancements](/core/enhancements.md).
- added a [theme builder](/core/theme.md) with default themes `light`, `dark` and `oled`.

#### Fix
- `PSElement.style` and `PSElement.attr` now supports setting multiple properties at once using objects ( broken in the previous version ).

---

### v0.2

#### New
- added [icon](/subcore/icon.md).
- added [1k+ svg icons](/svg/).

#### Fix
- updated [PSElement.html](/ui/html.md) to override html when no position is passed like its `text` counterpart.


#### Technical
- Code served outside `localhost` now serves minimized.

---

### v0.1

#### New
- added [script](/core/script.md).
- added [scripts](/core/script.md).
- added [PSElement](/core/element.md).
- added [ui](/core/ui.md).
- added [PSElement.add](/ui/add.md).
- added [PSElement.html](/ui/html.md).
- added [PSElement.text](/ui/text.md).
- added [PSElement.attr](/ui/attr.md).
- added [PSElement.style](/ui/style.md).
- added [PSElement.on](/ui/on.md).

---