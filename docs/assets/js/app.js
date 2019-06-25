const $burger = document.getElementById('navbar-burger')
const $menu = document.getElementById('navbar-menu')

$burger.addEventListener('click', function () {
  if ($menu.classList.contains('active')) {
    $menu.classList.remove('active')
    $burger.classList.remove('active')
  } else {
    $menu.classList.add("active")
    $burger.classList.add('active')
  }
})

$(document).ready(function () {
  $("pre").each(function (i, block) {
    // hljs.highlightBlock(block);
  });
});

new ClipboardJS(".btn-copy", {
  target: function (trigger) {
    return trigger.nextElementSibling;
  }
});

$(document).on('click', '.btn-modal', function (e) {
  e.preventDefault()
  let $id = $(this).data('target')
  $($id).addClass('modal-active')
})

$(document).on('click', '.modal-close, .btn-modal-close', function (e) {
  e.preventDefault()
  $(this).parents('.modal').removeClass('modal-active')
})

function setSideMenuWidth() {
  let $sideMenu = $('#menu-wrap')
  let menuW = $sideMenu.parent().width();
  $sideMenu.width(menuW);
}

setSideMenuWidth()
$(window).resize(function () {
  setSideMenuWidth()
})

function getAll(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

var $dropdowns = getAll('.dropdown:not(.is-hoverable)')

// if ($dropdowns.length > 0) {
//   $dropdowns.forEach(function ($el) {
//     $el.addEventListener('click', function (event) {
//       console.log(1)
// event.stopPropagation();
//       $el.classList.toggle('active');
//     });
//   });

  // document.addEventListener('click', function (event) {
  //   console.log(2)
  //   closeDropdowns();
  // });
// }
//
function closeDropdowns() {
  $dropdowns.forEach(function ($el) {
    $el.classList.remove('active');
  });
}

//
$(document).on('click', '.dropdown-toggle', function (e) {
  e.stopPropagation()
  $(this).parent().toggleClass('active')
})

$(document).on('click', function (e) {
  $('.dropdown').removeClass('active')
  $('.navbar-dropdown').removeClass('active')
})

$(document).on('click', '.menu-collapse .menu-header', function (e) {
  $(this).parent().parent().find('.menu-list').removeClass('active')
  $(this).parent().parent().find('.menu-header').removeClass('active')
  $(this).addClass('active')
  $(this).parent().find('.menu-list').addClass('active')
})

// let scrollTop = -1;
// const $highlight = document.querySelectorAll('#menu-wrap')
//
// $highlight.forEach(function (e) {
//  e.addEventListener('mouseenter', function () {
//    console.log(2)
//    scrollTop = window.scrollY
//  })
//
//  e.addEventListener('mouseleave', function () {
//    scrollTop = -1;
//  })
// })
//
// window.addEventListener('scroll', function () {
//  scrollTop !== -1 && window.scrollTo(0, scrollTop);
// })
//

$.each($('.iframe-resizer'), function (k, v) {
  const doc = v.contentWindow.document;
  const content = $(v).html()
  const head = $('head').html()
  const scripts = $('.script-wrap').html()
  doc.open();
  doc.write(`<html>${head}<body>${content}</body>${scripts}</html>`);
  doc.close();
})
