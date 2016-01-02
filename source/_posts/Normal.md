title: Distribución Normal interactiva (Angular, d3.js)
date: 2016-01-02 14:31:23
tags:
	- Angular.js
	- d3.js
	- simple_statistic
---

Esta es una aplicación resarrollada con la ayuda de d3.js, Angular.js y simple_statistic.js, para la representación de la distribución normal.

<img class="pure-img" src="http://i.imgur.com/0qRsBKJ.gif"/>

El área bajo la campana de Gauss representa la probabilidad de ocurrencia de un suceso. La curva esta dada por la siguiente expresión.

<img class="pure-img" src="http://i.imgur.com/rkmhIxz.png"/>

Gracias a esta representación puedes ver y manipular las variables para ver los cambios de probabilidad. ( Mueve los Sliders para ver los cambios)

<!-- more -->
<link rel="stylesheet" type="text/css" href="/css/styleAngular.css" />
<div class="container" ng-app="discretasApp" ng-controller="discretasController">    
<div id="viz"></div>

<div class="col-md-4 pure-g">
  <div class="form-group pure-u-1-3">
      <label for="">Recta1<span class=""> X1({[{rectas.recta1}]})</span>:</label>            
      <input type="range" ng-model="rectas.recta1" step="0.1" min="{[{xmin}]}" max="{[{xmax}]}"  id="fader" ng-change="changeRect()">
  </div>
  <div class="form-group pure-u-1-3">
      <label for="">Recta2<span class=""> X2({[{rectas.recta2}]})</span></label>            
      <input type="range" ng-model="rectas.recta2" step="0.1" min="{[{xmin}]}" max="{[{xmax}]}"  id="fader" ng-change="changeRect()">
  </div>
  <div class="form-group pure-u-1-3">
      <label for="">U<span class="">({[{para.mu1}]})</span></label>
      <input type="range" ng-model="para.mu1" step="0.1" min="{[{xmin}]}" max="{[{xmax}]}" id="fader" ng-mouseup="changeCurve()">
  </div>        
  <div class="form-group pure-u-1-3">
      <label for="">Sigma<span class="">({[{para.sigma1}]})</span></label>
      <input type="range" ng-model="para.sigma1" step="0.1" min="0.1" max="{[{xmax}]}" id="fader" ng-mouseup="changeCurve()">
  </div>  
  <div class="form-group pure-u-1-3">
      <label for="">Limite inferior <span class="">({[{cosa1}]})</span></label>
      <input type="range" ng-model="cosa1" step="0.1" min="-50" max="50" id="fader" ng-mouseup="init()">
  </div>
  <div class="form-group pure-u-1-3">
      <label for="">Limite superior<span class="">({[{cosa2}]})</span></label>
      <input type="range" ng-model="cosa2" step="0.1" min="-50" max="50" id="fader" ng-mouseup="init()">
  </div>        
</div>

     
Sí quieres conocer más sobre Distribución Normal en <a href="https://en.wikipedia.org/wiki/Normal_distribution">Wikipedia</a>  la encuentras.

Sí quieres ver el código fuente lo puedes hacer en mi perfil de <a href="https://github.com/camilortte/normalDistributionAngular">GitHub</a>. 

Sí tienes algúna duda o pregunta comenta ;).

Saludos.

<script type="text/javascript" src="/js/NormalDist/angular.min.js"></script>
<!-- <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script> -->
<script type="text/javascript" src="/js/NormalDist/d3.v3.min.js"></script>
<script type="text/javascript" src="/js/NormalDist/simple_statistics.min.js"></script>
<script type="text/javascript" src="/js/NormalDist/jstat.js"></script>
<script type="text/javascript" src="/js/NormalDist/textures.min.js"></script>
<!-- <script type="text/javascript" src="js/main.js"></script> -->
<script type="text/javascript" src="/js/NormalDist/distContinuas/discretas.app.js"></script>
<script type="text/javascript" src="/js/NormalDist/distContinuas/discretas.controller.js"></script>