---
title: Menu
description: A simple menu, for any type of vertical navigation.
menu:
  docs:
    parent: "components"
    weight: 40
---

{{< capture >}}
<aside class="menu">
  <div class="menu-group">
    <div class="menu-header">General</div>
    <ul class="menu-list">
      <li><a class="menu-item" href="#">Dashboard</a></li>
      <li><a class="menu-item" href="#">Customers</a></li>
    </ul>
  </div>
  <div class="menu-group">
    <div class="menu-header">Appearance</div>
    <ul class="menu-list">
      <li><a class="menu-item" href="#">Themes</a></li>
      <li><a class="menu-item" href="#">Widgets</a></li>
    </ul>
  </div>
  <div class="menu-group">
    <div class="menu-header">Plugins</div>
    <ul class="menu-list">
      <li><a class="menu-item" href="#">Installed plugins</a></li>
      <li><a class="menu-item" href="#">Add New</a></li>
    </ul>
  </div>
</aside>
{{< /capture >}}

<hr>
<h3 class="cd-title">Reverse</h3>
{{< capture >}}
<div style="background: #000; padding: 30px;">
  <aside class="menu menu-reverse">
    <div class="menu-group">
      <div class="menu-header">General</div>
      <ul class="menu-list">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Customers</a></li>
      </ul>
    </div>
    <div class="menu-group">
      <div class="menu-header">Appearance</div>
      <ul class="menu-list">
        <li><a href="#">Themes</a></li>
        <li><a href="#">Widgets</a></li>
      </ul>
    </div>
    <div class="menu-group">
      <div class="menu-header">Plugins</div>
      <ul class="menu-list">
        <li><a href="#">Installed plugins</a></li>
        <li><a href="#">Add New</a></li>
      </ul>
    </div>
  </aside>
</div>
{{< /capture >}}

<hr>
<h3 class="cd-title">Collapse</h3>
{{< capture >}}
<aside class="menu menu-collapse" style="width: 200px;">
  <div class="menu-group">
    <div class="menu-header">
      General
      <i class="menu-collapse-icon icon icon-angle-right"></i>
    </div>
    <ul class="menu-list">
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Customers</a></li>
    </ul>
  </div>
  <div class="menu-group">
    <div class="menu-header">
      Appearance
      <i class="menu-collapse-icon icon icon-angle-right"></i>
    </div>
    <ul class="menu-list">
      <li><a href="#">Themes</a></li>
      <li><a href="#">Widgets</a></li>
    </ul>
  </div>
  <div class="menu-group">
    <div class="menu-header">
      Plugins
      <i class="menu-collapse-icon icon icon-angle-right"></i>
    </div>
    <ul class="menu-list">
      <li><a href="#">Installed plugins</a></li>
      <li><a href="#">Add New</a></li>
    </ul>
  </div>
</aside>
