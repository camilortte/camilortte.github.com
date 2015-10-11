{% extends "./index.swig" %}

{% block content %}
    <h1 class="content-subhead">Pinned Post </h1>
    {% for post in site.posts  %}
        <section class="post">
            <header class="post-header">
                <h2 class="post-title">{{post.title}}</h2>

                <p class="post-meta">
                    Por <a href="#" class="post-author">Tilo Mitra,  </a> 
                    Escrito el {{post.updated|date('Y-m-d')}}
                    <br><br>                   
                    {# Tags <a class="post-category post-category-design" href="#">CSS</a> <a class="post-category post-category-pure" href="#">Pure</a>                             #}
                </p>
            </header>

            <div class="post-description">
                {{post.content}}
               {#  <p>
                    Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a href="https://speakerdeck.com/tilomitra/pure-bliss">slides from the presentation</a>. Although it looks pretty minimalist, we’ve been working on Pure for several months. After many iterations, we have released Pure as a set of small, responsive, CSS modules that you can use in every web project.
                </p> #}
            </div>
        </section>    
    {% endfor %}
{% endblock %}
