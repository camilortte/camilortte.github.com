<header class="sidebar pure-u-1 pure-u-md-1-4">
    <div class="header">

        <a href="{% if  is_home() %}#{% else %} / {% endif %}"><img class="pure-img logome" src="{{gravatar('camilortte@hotmail.com', 100)}}"></a>

        <h1 class="brand-title"><a href="{% if  is_home() %}#{% else %} / {% endif %}">{{config.title}}</a></h1>
        <h2 class="brand-tagline">{{config.subtitle}}</h2>
        <p>
            <a class="menu-icon" href="https://github.com/camilortte"><i class="fa fa-github-alt  fa-2x"></i></a>
            <a class="menu-icon" href="https://twitter.com/camilortte"><i class="fa fa-twitter  fa-2x"></i></a>
            <a class="menu-icon" href="https://co.linkedin.com/pub/camilo-antonio-ramírez-morales/83/13b/984"><i class="fa fa-linkedin-square  fa-2x"></i></a>
            <a class="menu-icon" href="https://www.facebook.com/camilortte"><i class="fa fa-facebook-square  fa-2x"></i></a>
            <a class="menu-icon" href="https://www.youtube.com/channel/UC21XtxeLHw5QTkhVX8Stmag"><i class="fa fa-youtube-play  fa-2x"></i></a>
            <a class="menu-icon" href="https://plus.google.com/u/0/+CamiloAntonioRamirezMorales"><i class="fa fa-google-plus  fa-2x"></i></a>
        </p>
       <!--  <nav class="pure-g ">            
            <div class="pure-u-1-2 pure-u-md-1-1"><a href="#" class="">About</a></div>
            <div class="pure-u-1-2 pure-u-md-1-1"><a href="#" class="">Blog</a></div>                     
        </nav> -->
        <nav class="pure-g">            
            <ul  class="nav-list pure-u-1-1 pure-u-md-1-1">
                {% for page in site.pages %}
                    <li class="nav-item  pure-u-1-2" ><a href="{% if  is_current(page.path) %}#{% else %} {{url_for(page.path)}}{% endif %}" class="">{{page.title}}</a></li>
                {% endfor %}
                 <li class="nav-item  pure-u-1-2" ><a href="/" class="">Blog</a></li> 
                {# <li class="nav-item  pure-u-1-2" ><a href="#" class="">About</a></li>
                <li class="nav-item  pure-u-1-2" ><a href="#" class="">Blog</a></li> #}
            </ul>
        </nav>
    </div>
</header>