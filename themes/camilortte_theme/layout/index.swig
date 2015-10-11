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
                                    Por <a href="#" class="post-author">Camilo, </a> 
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
