this["JST"] = this["JST"] || {};

this["JST"]["app/templates/archive.us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="breadcrumbs margin-bottom-30">\n\t<div class="container">\n\t\t<h1 class="color-green pull-left">archives</h1>\n\t</div>\n\t<!--/container-->\n</div>\n\n<div class="container">\n<ul>\n';
 _(site.posts).chain().reverse().each(function(post){ ;
__p += '\n  <li>\n    <a href="/' +
((__t = ( post.htmlPath() )) == null ? '' : __t) +
'">' +
((__t = ( post.title() )) == null ? '' : __t) +
'</a>\n  </li>\n';
 }) ;
__p += '\n</ul>\n</div>';

}
return __p
};

this["JST"]["app/templates/index.us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p +=
((__t = ( site.htmlFor(_(site.posts).last()) )) == null ? '' : __t) +
'\n';

}
return __p
};

this["JST"]["app/templates/page.us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">\n\n' +
((__t = ( post.content() )) == null ? '' : __t) +
'\n\n</div>';

}
return __p
};

this["JST"]["app/templates/post.us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="breadcrumbs margin-bottom-30">\n\t<div class="container">\n\t\t<h1 class="color-green pull-left"><a href="/' +
((__t = ( post.htmlPath() )) == null ? '' : __t) +
'">' +
((__t = ( post.title() )) == null ? '' : __t) +
'</a></h1>\n\t</div>\n\t<!--/container-->\n</div>\n\n<div class="container">\n\n<article class="post">\n  <div class="title">\n    <p>\n      ' +
((__t = ( post.date() )) == null ? '' : __t) +
'\n      ';
 if(post.get('author')) { ;
__p += '\n        by ' +
((__t = ( post.get('author').name )) == null ? '' : __t) +
'\n      ';
 } ;
__p += '\n    </p>\n  </div>\n  <section>\n    ' +
((__t = ( post.content() )) == null ? '' : __t) +
'\n  </section>\n  \n  \n  <section class="navigation">\n      ';
 if(site.newerPost(post)) { ;
__p += '\n        <span class="newer"><a href="/' +
((__t = ( site.newerPost(post).htmlPath() )) == null ? '' : __t) +
'">&#8672;&nbsp;newer</a></span>\n      ';
 } ;
__p += '\n      ';
 if(site.olderPost(post)) { ;
__p += '\n        <span class="older"><a href="/' +
((__t = ( site.olderPost(post).htmlPath() )) == null ? '' : __t) +
'">older&nbsp;&#8674;</a></span>\n      ';
 } ;
__p += '\n  </section>\n    \n</article>\n</div>';

}
return __p
};

this["JST"]["app/templates/wrapper.us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!DOCTYPE html>\n<html>\n  <head>\n    <link rel="stylesheet" type="text/css" href="' +
((__t = ( css )) == null ? '' : __t) +
'" media="all" />\n    <link rel="alternate" type="application/rss+xml" title="' +
((__t = ( site.title )) == null ? '' : __t) +
' - feed" href="/index.xml" />\n    <title>' +
((__t = ( site.title )) == null ? '' : __t) +
'' +
((__t = ( post ? ' - '+post.title() : '' )) == null ? '' : __t) +
'</title>\n    <link rel="shortcut icon" href="/favicon.ico">\n    \n    <!-- CSS Implementing Plugins -->\n    <link rel="stylesheet" href="/plugins/font-awesome/css/font-awesome.css">\n    <link rel="stylesheet" href="/plugins/flexslider/flexslider.css" type="text/css" media="screen">\n    <link rel="stylesheet" href="/plugins/parallax-slider/css/parallax-slider.css" type="text/css">\n    <link rel="stylesheet" href="/plugins/bxslider/jquery.bxslider.css">\n  </head>\n  <body>\n  <div class="header">\n            <div class="container">\n                <!-- Logo -->\n                <div class="logo">\n                    <a href="/">\n                        <img id="logo-header" src="/img/logo.png" alt="Logo">\n                    </a>\n                </div>\n                <!-- /logo -->\n                <!-- Menu -->\n                <div class="navbar">\n                    <div class="navbar-inner">\n                        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\n                            <span class="icon-bar"></span>\n                            <span class="icon-bar"></span>\n                            <span class="icon-bar"></span>\n                        </a>\n                        <!-- /nav-collapse -->\n                        <div class="nav-collapse collapse">\n                            <ul class="nav top-2">\n                                <li>\n                                    <a href="/">home</a>\n                                </li>\n                                <li>\n                                    <a href="/archive.html">archives</a>\n                                </li>\n                                <li>\n                                    <a href="/pages/about.html">about</a>\n                                </li>   \n                            </ul>\n                        </div>\n                        <!-- /nav-collapse -->\n                    </div>\n                    <!-- /navbar-inner -->\n                </div>\n                <!-- /navbar -->\n            </div>\n            <!-- /container -->\n        </div>\n        <!--/header -->\n\n    ' +
((__t = ( yield )) == null ? '' : __t) +
'\n\n<div class="footer">\n            <div class="container">\n                <div class="row-fluid">\n                    <div class="span6">\n                        <!-- About -->\n                        <div class="headline">\n                            <h3>About</h3>\n                        </div>\n                        <p class="margin-bottom-25">There are real people behind artek software, so if you have a question or suggestion (no matter how small) please get in touch with us: contact <a href="mailto:robgibbens@arteksoftware.com">robgibbens@arteksoftware.com</a></p>\n                        \n                    </div>\n                    <!--/span4-->\n                    <!--/span4-->\n                    <div class="span6">\n                        <!-- Stay Connected -->\n                        <div class="headline">\n                            <h3>Stay Connected</h3>\n                        </div>\n                        <ul class="social-icons">\n                            <li><a href="http://twitter.com/arteksoftware" target="_new" data-original-title="Twitter" class="social_twitter"></a></li>\n                        </ul>\n                    </div>\n                    <!--/span4-->\n                </div>\n                <!--/row-fluid-->\n            </div>\n            <!--/container-->\n        </div>\n        <!--/footer-->\n        <!--=== End Footer ===-->\n        <!--=== Copyright ===-->\n        <div class="copyright">\n            <div class="container">\n                <div class="row-fluid">\n                    <div class="span8">\n                        <p>2014 &copy; artek software. All Rights Reserved. </p>\n                    </div>\n                </div>\n                <!--/row-fluid-->\n            </div>\n            <!--/container-->\n        </div>\n\n\n\n    <script type="text/javascript" src="' +
((__t = ( js )) == null ? '' : __t) +
'"></script>\n                \n  </body>\n</html>';

}
return __p
};