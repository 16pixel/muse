---
title: Table
description: The inevitable HTML table, with special case cells
menu:
  docs:
    parent: "elements"
    weight: 40
---

<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mmo</td>
    </tr>
    <tr>
      <th>1</th>
      <td>John</td>
      <td>Wi</td>
      <td>@add</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Jenny</td>
      <td>Otto</td>
      <td>@uuy</td>
    </tr>
  </tbody>
</table>

<hr />

<h4 class="cd-title">Modifiers</h4>
<div class="row">
  <div class="col">Add borders to all the cells.</div>
  <div class="col"><code>table table-bordered</code></div>
  <div class="col">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="row">
  <div class="col">Add stripes to the table.</div>
  <div class="col"><code>table table-striped</code></div>
  <div class="col">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
        <tr>
          <td>Nine</td>
          <td>Ten</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="row">
  <div class="col">You can add a hover effect on each row</div>
  <div class="col"><code>table table-hover</code></div>
  <div class="col">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
        <tr>
          <td>Nine</td>
          <td>Ten</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="row">
  <div class="col">You can have a fullwidth table.</div>
  <div class="col"><code>table table-full</code></div>
  <div class="col">
    <table class="table table-full">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div class="row">
  <div class="col">You can combine all five modifiers.</div>
  <div class="col">
    <code>table table-bordered table-striped table-hover table-full</code>
  </div>
  <div class="col">
    <table class="table table-bordered table-striped table-hover table-full">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
        <tr>
          <td>Nine</td>
          <td>Ten</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<h4 class="cd-title">Responsive</h4>

{{< capture type="full" >}}
<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
{{< /capture >}}
