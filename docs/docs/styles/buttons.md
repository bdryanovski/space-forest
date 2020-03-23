---
id: buttons
title: Buttons
---

## Default styles

Native styles
<button>Login Button</button>
<br />
<a href="#">Link</a>

Button and link without additional classes inside `.sp`

<div className="sp">
  <button>Login Button</button>
</div>

<br />

<div className="sp">
  <a>Link</a>
</div>


## Styled buttons

Basic style for button is `.btn`

<div class="sp">
  <button class="btn">Login button</button>
</div>

There are few additiona classes to style them

<div class="sp">
  <div class="grid-auto-cols grid-gap-xs">
    <button class="btn primary">Primary</button>
    <button class="btn success">Success</button>
    <button class="btn warning">Warning</button>
    <button class="btn danger">Danger</button>
    <button class="btn link">Link</button>
  </div>
</div>

There is also `.outline` class to make the button transperent

<div class="sp">
  <div class="grid-auto-cols grid-gap-xs">
    <button class="btn outline primary">Primary</button>
    <button class="btn outline success">Success</button>
    <button class="btn outline warning">Warning</button>
    <button class="btn outline danger">Danger</button>
    <button class="btn outline link">Link</button>
  </div>
</div>