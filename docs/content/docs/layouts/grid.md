---
title: Grid
description: Use mobile-first flexbox grid to build layouts of all shapes and sizes.
menu:
  docs:
    parent: "layout"
    weight: 40
---

{{< capture type="full" >}}
<div class="grid-demo text-center text-white">
  <div class="row">
    <div class="col"><div class="block bg-primary">col</div></div>
  </div>
  <div class="row">
    <div class="col"><div class="block bg-primary">col</div></div>
    <div class="col"><div class="block bg-primary">col</div></div>
    <div class="col"><div class="block bg-primary">col</div></div>
  </div>
  <div class="row">
    <div class="col-9"><div class="block bg-primary">col-9</div></div>
    <div class="col"><div class="bg-gray block">auto</div></div>
    <div class="col"><div class="bg-gray block">auto</div></div>
  </div>
  <div class="row">
    <div class="col-7"><div class="block bg-primary">col-7</div></div>
    <div class="col"><div class="bg-gray block">auto</div></div>
    <div class="col"><div class="bg-gray block">auto</div></div>
  </div>
  <div class="row">
    <div class="col-5"><div class="block bg-primary">col-5</div></div>
    <div class="col"><div class="bg-gray block">auto</div></div>
    <div class="col"><div class="bg-gray block">auto</div></div>
  </div>
</div>
{{< /capture >}}

<hr>

<h4 class="cd-title">Nesting</h4>

{{< capture type="full" >}}
<div class="grid-demo text-center text-white">
  <div class="row">
    <div class="col-8">
      <div class="block bg-primary" style="height: 145px; line-height: 104px;">Left</div>
    </div>
    <div class="col-4">
      <div class="block bg-primary" style="margin-bottom: 8px;">Right</div>
      <div class="row">
        <div class="col">
          <div class="block bg-primary">Right1</div>
        </div>
        <div class="col">
          <div class="block bg-primary">Right2</div>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /capture >}}

<hr>

<h4 class="cd-title">Responsive</h4>
You can define a column size for each viewport size: mobile(xs), tablet(sm), and desktop(md~xl).

<code>col-<1-12></code> apply to window width smaller than or equal to 480px.

<code>col-sm-<1-12></code> apply to window width greater than or equal to 600px.

<code>col-md-<1-12></code> apply to window width greater than or equal to 840px.

<code>col-lg-<1-12></code> apply to window width greater than or equal to 960px.

<code>col-xl-<1-12></code> apply to window width greater than or equal to 1280px.

{{< capture type="full" >}}
<div class="grid-demo text-center text-white">
  <div class="row">
    <div class="col-xl-9 col-lg-8 col-md-6 col-sm-4">
      <div class="block bg-primary">
        <code>col-xl-9</code>
        <br> 
        <code>col-lg-8</code>
        <br> 
        <code>col-md-6</code>
        <br> 
        <code>col-sm-4</code>
        <br>
      </div>
    </div>
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
      <div class="block bg-primary">
        <code>col-xl-3</code>
        <br>
        <code>col-lg-4</code>
        <br>
        <code>col-md-6</code>
        <br>
        <code>col-sm-8</code>
        <br>
      </div>
    </div>
  </div>
</div>
{{< /capture >}}
