---
title: Navbar
menu:
  docs:
    parent: "components"
    weight: 40
---

<iframe src="about:blank" frameborder="0" class="iframe-resizer">
  <nav class="navbar navbar-top" id="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="http://localhost:3000/images/logo.png" width="42" height="42" alt="logo">&nbsp;&nbsp;&nbsp;
        </a>
        <div class="navbar-burger" id="navbar-burger">
          <span></span> <span></span> <span></span>
        </div>
      </div>
      <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-start">
          
          
          
          <a href="http://localhost:3000/docs/overview/installation/" class="navbar-item active">
            <i class="icon icon-book text-primary"></i>
            Docs
          </a>
          
          
          <a href="http://localhost:3000/blog" class="navbar-item ">
            <i class="icon icon-blog text-warning"></i>
            Blog
          </a>
          
          
          <a href="http://localhost:3000/love" class="navbar-item ">
            <i class="icon icon-love text-danger"></i>
            Love
          </a>
          
          <div class="navbar-item navbar-dropdown navbar-dropdown-hover">
            <span class="navbar-dropdown-toggle">More</span>
            <div class="navbar-dropdown-menu">
              <a class="navbar-item">
                <i class="icon icon-github"></i>
                <strong>One dropdown item</strong>
              </a>
              <a class="navbar-item"><i class="icon icon-github"></i> Another dropdown item</a>
              <a class="navbar-item"><i class="icon icon-github"></i> Other dropdown item</a>
              <a class="navbar-item"><i class="icon icon-github"></i> Just a dropdown divider</a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a target="blank" href="https://github.com/16pixel/cherry" class="btn btn-primary">
              <i class="icon icon-github"></i>Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</iframe>

