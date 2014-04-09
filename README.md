Simple Parallax
===============
Simple and easy parallax for HTML5 based on [jQuery].

Usage
-----
To use Simple Parallax in your website add some animation class in CSS3 in ```<head>``` section, for  example  [Animate.css]:
```
<head>
  <link rel="stylesheet" href="animate.min.css">
</head>
```
In next step you have to add to elemet which you want paralalx ```class="simleprx"``` and two data ```data-effect``` and ```data-delay```.
```data-effect``` is a animated class which will be add to element when it will be display
```data-delay``` is data which setup delay in ms
Example:  
```
<div class="simpleprx" data-effect="animated fadeInLeft" data-delay="1500">
	<p>Put crazy things here.</p>
</div>	
```
[jQuery]:http://jquery.com
[Animate.css]:https://github.com/daneden/animate.css