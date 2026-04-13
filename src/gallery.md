---
layout: layouts/base.njk
title: Gallery | LEBallet
permalink: "gallery.html"
---

<div class="whole">

<div class="container">
<img src="/assets/all-blur.jpg" class="title"/>
<div class="centered">
    <h1>Erie Ballet Company</h1>
    <p>Gallery</p>
</div>
</div>

<div class="box">

<div class="responsive">
  <div class="gallery">
      <img src="/assets/jump1.webp" alt="Forest">
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src="/assets/jump2.webp" alt="Forest">
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src="/assets/jump3.webp" alt="Forest">
  </div>
</div>

<div class="responsive">
  <div class="gallery">
      <img src="/assets/diavolo.webp" alt="Forest">
  </div>
</div>

<div class="responsiveLong">
    <div class="gallery">
        <img src="/assets/headshot1.webp" alt="Forest"/>
    </div>
</div>

<div class="responsiveLong">
    <div class="gallery">
        <img src="/assets/prayer.webp" alt="Forest"/>
    </div>
</div>

</div>

<div id="myModal" class="modal">
  <span class="close">×</span>
  <img class="modal-content" id="img01">
</div>

<script>
var modal = document.getElementById('myModal');

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
};

var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  }
}
</script>

</div>

