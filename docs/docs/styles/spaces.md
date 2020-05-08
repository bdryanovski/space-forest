---
title: Spaces
---

Controll the space between child elements.

```html live
<div className="sp">
  <div className="space-x-4">
    <div className="demo-element">box</div>
  </div>

  <div className="space-y-8">
    <div className="demo-element">box</div>
  </div>
</div>
```

The size could be one of this values:
```scss
// Size: Value

 0: 0rem,     1: 0.25rem,   2: 0.5rem,   3: 0.75rem,
 4: 1rem,     5: 1.25rem,   6: 1.5rem,   8: 2rem,
10: 2.5rem,  12: 3rem,     16: 4rem,    20: 5rem,
24: 6rem,    32: 8rem,     40: 10rem,   48: 12rem,
56: 14rem,   64: 16rem,  "px": 1px
```

As `px` will be exactly one pixel.

There this classes providing `padding`, `margin` and `spacing`

```scss
// For spacesing

.space-x-4 // margin left 1rem
.space-y-4 // margin top 1rem

// Padding
.p-4   // padding 1rem
.py-4  // padding top and bottom 1rem
.px-4  // padding left and right 1rem
.pt-4  // padding top 1rem
.pb-4  // padding bottom 1rem
.pl-4  // padding left 1rem
.pr-4  // padding right 1rem

// Margin
.m-4   // margin 1rem
.my-4  // margin top and bottom 1rem
.mx-4  // margin left and right 1rem
.mt-4  // margin top 1rem
.mb-4  // margin bottom 1rem
.ml-4  // margin left 1rem
.mr-4  // margin right 1rem
```