---
title: Form
menu:
  docs:
    parent: "elements"
    weight: 40
---

{{< capture >}}
<form>
  <!-- email -->
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" />
  </div>

  <!-- username -->
  <div class="form-group">
    <label for="username">Username</label>
    <div class="form-field form-icons-left form-icons-right">
      <input type="username" class="form-control form-control-success" id="username" placeholder="Enter username" />
      <i class="icon icon-github form-icon form-icon-left"></i>
      <i class="icon icon-check form-icon form-icon-right"></i>
    </div>
    <small class="form-text text-success">This username is available</small>
  </div>

  <!-- password -->
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control form-control-danger" id="password" placeholder="Password" />
    <small class="form-text text-danger">This password is invalid</small>
  </div>

  <!-- select -->
  <div class="form-group">
    <label for="select">Subject</label>
    <select class="form-control">
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>

  <!-- textarea -->
  <div class="form-group">
    <label for="textarea">Message</label>
    <textarea class="form-control" placeholder="Textarea" rows="3"></textarea>
  </div>

  <!-- checkbox -->
  <div class="form-group">
    <div class="form-check">
      <input type="checkbox" id="checkout" />
      <label for="checkout">Check me out</label>
    </div>
  </div>

  <!-- radio -->
  <div class="form-group">
    <label class="form-radio">
      <input type="radio" name="question" /> Yes
    </label>
    <label class="form-radio">
      <input type="radio" name="question" /> No
    </label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{{< /capture >}}

<hr>

{{< capture >}}
<div class="form-group form-addons">
  <input type="text" placeholder="Find a book" class="form-control" />
  <a href="#" class="btn btn-info">Search</a>
</div>
{{< /capture >}}

<hr>

{{< capture >}}
<div class="form-group form-addons">
  <input type="text" placeholder="Your email" class="form-control" />
  <a href="#" class="btn btn-static">@gmail.com</a>
</div>
{{< /capture >}}

<hr>

{{< capture >}}
<div class="form-group form-addons">
  <select class="form-control">
    <option>œ</option>
    <option>ç</option>
  </select>
  <input type="text" placeholder="Your email" class="form-control" />
  <a href="#" class="btn btn-static">@gmail.com</a>
</div>
{{< /capture >}}

<hr>

<h4 class="cd-title">File</h4>
{{< capture >}}
<div class="form-group">
  <div class="form-file-wrap">
    <input type="file" class="form-control-file" name="file" />
    <a class="btn btn-primary">
      <i class="icon icon-github"></i> Choose a file...
    </a>
  </div>
</div>
{{< /capture >}}

