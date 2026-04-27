---
layout: layouts/base.njk
title: Gallery | LEBallet
permalink: "gallery.html"
---
<div class="column-gallery">
    <div class="container">
        <img src="{{ 'assets/all-blur.jpg' | url }}" class="title"/>
        <div class="centered">
            <h1 class="galHead">Lake Erie Ballet Company</h1>
            <p class="galPara">Gallery</p>
        </div>
    </div>
    <div class="box">
        <div class="responsive">
            <div class="gallery">
                <img src="{{ 'assets/jump1.webp' | url }}" class="target" alt="Forest">
            </div>
        </div>
        <div class="responsive">
            <div class="gallery">
                <img src="{{ 'assets/jump2.webp' | url }}" class="target" alt="Forest">
            </div>
        </div>
        <div class="responsive">
            <div class="gallery">
                <img src="{{ 'assets/jump3.webp' | url }}" class="target" alt="Forest">
            </div>
        </div>
        <div class="responsive">
            <div class="gallery">
                <img src="{{ 'assets/diavolo.webp' | url }}" class="target" alt="Forest">
            </div>
        </div>
        <div class="responsiveLong">
            <div class="gallery">
                <img src="{{ 'assets/headshot1.webp' | url }}" class="target" alt="Forest"/>
            </div>
        </div>
        <div class="responsiveLong">
            <div class="gallery">
                <img src="{{ 'assets/prayer.webp' | url }}" class="target" alt="Forest"/>
            </div>
        </div>
    </div>
</div>
<div id="myModal" class="modal">
  <span class="close">×</span>
  <span class="plus">+</span>
  <span class="minus">-</span>
  <img class="modal-content" id="img01">
</div>

<script>
var modal = document.getElementById('myModal');

var close = document.getElementsByClassName("close")[0];

var plus = document.getElementsByClassName("plus")[0];

var minus = document.getElementsByClassName("minus")[0];

close.onclick = function() { 
  modal.style.display = "none";
};
plus.onclick = function() {
if (modalImg.currentCSSZoom < 2){
    modalImg.style.zoom = modalImg.currentCSSZoom + 0.1;
}
};
minus.onclick = function() {
if (modalImg.currentCSSZoom > .5){
    modalImg.style.zoom = modalImg.currentCSSZoom - 0.1;
}
};

var images = document.getElementsByClassName('target');
var modalImg = document.getElementById("img01");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  }
}
</script>

