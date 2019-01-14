$(document).ready(function () {
  addPhotos();

  new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true
  });

  document.getElementById("giftLink").addEventListener("click", function () {
    swal(
      'Successful !',
      'Check your email for the surprise!',
      'success'
    )
  });

  
});

function select(selector) {
  var method = selector.substr(0, 1) == '.' ? 'getElementsByClassName' : 'getElementById';
  return document[method](selector.substr(1));
}

function range() {
  var range = { left: { x: [], y: [] }, right: { x: [], y: [] } };
  var wrap = {
    w: select("#wrap").clientWidth,
    h: select("#wrap").clientHeight
  }
  var photo = {
    w: select(".photo")[0].clientWidth,
    h: select(".photo")[0].clientHeight
  }
  range.wrap = wrap;
  range.photo = photo;

  range.left.x = [0, wrap.w / 2 - photo.w / 2];
  range.left.y = [0, wrap.h - photo.w / 2];
  range.right.x = [wrap.w / 2 + photo.w / 2, wrap.w];
  range.right.y = [0, wrap.h - photo.w / 2];

  return range;
}

function sort(n) {
  var _photo = select('.photo');
  var photos = [];
  for (i = 0; i < _photo.length; i++) {
    _photo[i].className = _photo[i].className.replace(/\s*photo_center\s*/, ' ');
    _photo[i].className = _photo[i].className.replace(/\s*photo_front\s*/, ' ');
    _photo[i].className = _photo[i].className.replace(/\s*photo_back\s*/, ' ');
    _photo[i].className += ' photo_front';
    _photo[i].style.left = '';
    _photo[i].style.top = '';
    _photo[i].style['transform'] = 'rotate(360deg) scale(1.3)';
    _photo[i].style['-webkit-transform'] = 'rotate(360deg) scale(1.3)';
    photos.push(_photo[i]);
  }
  var photo_center = select('#photo_' + n);
  photo_center.className += ' photo_center';

  photo_center = photos.splice(n, 1)[0];

  var photos_left = photos.splice(0, Math.ceil(photos.length / 2));
  var photos_right = photos;

  var ranges = range();
  for (var i = 0; i < photos_left.length; i++) {
    photos_left[i].style.left = random(ranges.left.x) + "px";
    photos_left[i].style.top = random(ranges.left.y) + "px";
    photos_left[i].style['transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
    photos_left[i].style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
  }
  for (var i = 0; i < photos_right.length; i++) {
    photos_right[i].style.left = random(ranges.right.x) + "px";
    photos_right[i].style.top = random(ranges.right.y) + "px";
    photos_right[i].style['transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
    photos_right[i].style['-webkit-transform'] = 'rotate(' + random([-150, 150]) + 'deg) scale(1)';
  }
  var navs = select('.i');
  for (var i = 0; i < navs.length; i++) {
    navs[i].className = navs[i].className.replace(/\s*i_current\s*/, ' ');
    navs[i].className = navs[i].className.replace(/\s*i_back\s*/, ' ');
  }
  select('#nav_' + n).className += ' i_current ';
}

function random(range) {
  var max = Math.max(range[0], range[1]);
  var min = Math.min(range[0], range[1]);
  var diff = max - min;
  var number = Math.floor(Math.random() * diff + min);
  return number;
}

var data = data;
function addPhotos() {
  var template = select('#wrap').innerHTML;
  var html = [];
  var nav = [];
  for (i = 0; i < data.length; i++) {
    var _html = template.replace('{{index}}', i)
      .replace('{{img}}', data[i].img)
      .replace('{{caption}}', data[i].caption)
      .replace('{{desc}}', data[i].desc);
    html.push(_html);
    nav.push('<span id="nav_' + i + '" class="i" onclick ="turn(select(\'#photo_' + i + '\'))">&nbsp;</span>');
  }
  html.push('<div class="nav">' + nav.join('') + '</div>');
  select('#wrap').innerHTML = html.join('');
  sort(random([0, data.length]));
}

function turn(elem) {
  var cls = elem.className;
  var n = elem.id.split("_")[1];

  if (! /photo_center/.test(cls)) {
    return sort(n);
  }

  if (/photo_front/.test(cls)) {
    cls = cls.replace(/photo_front/, 'photo_back');
    select('#nav_' + n).className += ' i_back ';
  } else {
    cls = cls.replace(/photo_back/, 'photo_front');
    select('#nav_' + n).className = select('#nav_' + n).className.replace(/\s*i_back\s*/, ' ');
  }
  return elem.className = cls;
}


