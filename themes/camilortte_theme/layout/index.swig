<!doctype html>
<html lang="{{config.language}}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{favicon_tag('img/favicon.ico')}} 

    <meta name="description" content="{{config.description}}">
    <title>.:{% block title %}{{config.title}}{% endblock %}:.</title>
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!--[if lte IE 8]>  
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-old-ie-min.css">  
    <![endif]-->
    <!--[if gt IE 8]><!-->  
        <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/grids-responsive-min.css">  
    <!--<![endif]-->

    <!--[if lte IE 8]>
        <link rel="stylesheet" href="css/layouts/blog-old-ie.css">
    <![endif]-->
    <!--[if gt IE 8]><!-->        
        {{css(path, 'css/blog.css')}}
    <!--<![endif]-->
</head>
<body>
    <div id="layout" class="pure-g">
        {% include "./partial/header.swig" %}

        <div class="content pure-u-1 pure-u-md-3-4">
            <div class="posts">                
                {% block content %}
                    <h1 class="content-subhead">Artilculos </h1>
                    {% for post in site.posts  %}                       
                        <article>
                            <header>
                                <h2 class="post-title"><a href="{{post.path}}">{{post.title}}</a></h2>
                                <p class="post-meta">
                                    Por <a href="#" class="post-author">{{config.author}}, </a> 
                                    Escrito el {{post.updated |date('Y-m-d')}}
                                    <br><br>                   
                                    {# Tags {{post.tags}}
                                    {% for tagi in post.tags %}  
                                        <a class="post-category post-category-design" href="#">{{tagi}}</a>  
                                    {% endfor %}                             #}
                                </p>
                            </header>

                            <div class="post-content">
                                {{post.excerpt}}
                                <a href="{{post.path}}"><small>Continuar leyendo </small></a>
                            </div>
                            <div  class="content-subhead"></div>
                        </article>
                    {% endfor %}
                {% endblock %}
            </div>
        </div>

        {% include "./partial/footer.swig" %}

        <script>
          var cb = function() {
            var l = document.createElement('link'); l.rel = 'stylesheet';
            l.href = 'css/blog.css';
            var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
          };
          var raf = requestAnimationFrame || mozRequestAnimationFrame ||
              webkitRequestAnimationFrame || msRequestAnimationFrame;
          if (raf) raf(cb);
          else window.addEventListener('load', cb);
        </script>

        <!-- Google Analytics -->
        <script type="text/javascript">
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-56089086-1', 'auto');
        ga('send', 'pageview');

        </script>

        {{js(path, 'js/velocity.min.js')}}
        <script type="text/javascript">     
            var logo = document.getElementsByClassName("logome")[0];
            Velocity(logo, "fadeIn", { 
                duration: 500,
                complete: function () { 
                    logo.addEventListener( 'mouseover', function() {            
                        Velocity(logo, "stop");
                        Velocity(logo, {boxShadowSpread: "5em"}, {easing: "easeInSine", duration: 300});
                    });

                    logo.addEventListener( 'mouseout', function() {            
                        Velocity(logo, "stop");            
                        Velocity(logo, {boxShadowSpread: "0em"}, {easing: "easeInSine", duration: 300});
                        // Velocity(logo, "reverse", { duration: 1500 })
                    });               
                }
            });
        </script>
    </div>
</body>
</html>
