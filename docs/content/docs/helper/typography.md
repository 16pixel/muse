---
title: Typography
description: Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.
menu:
  docs:
    parent: "helper"
    weight: 40
---

<h4 class="cd-title">Size</h4>
<table class="table table-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Font-size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>font-1</code></td>
      <td>3rem</td>
    </tr>
    <tr>
      <td><code>font-2</code></td>
      <td>2.5rem</td>
    </tr>
    <tr>
      <td><code>font-3</code></td>
      <td>2rem</td>
    </tr>
    <tr>
      <td><code>font-4</code></td>
      <td>1.5rem</td>
    </tr>
    <tr>
      <td><code>font-5</code></td>
      <td>1.25em</td>
    </tr>
    <tr>
      <td><code>font-6</code></td>
      <td>1rem</td>
    </tr>
  </tbody>
</table>

<hr />

<h4 class="cd-title">Transform</h4>

{{< capture >}}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{{< /capture >}}

<hr />

<h4 class="cd-title">Weight and Italics</h4>

{{< capture >}}
<p class="font-bold">Bold text.</p>
<p class="font-normal">Normal weight text.</p>
<p class="font-light">Light weight text.</p>
<p class="font-italic">Italic text.</p>
{{< /capture >}}

<hr />

<h4 class="cd-title">Truncate</h4>

{{< capture >}}
<div class="row no-gutters">
  <div class="col-6 text-truncate">
    Praeterea iter est quasdam res quas ex communi.
  </div>
</div>
{{< /capture >}}
