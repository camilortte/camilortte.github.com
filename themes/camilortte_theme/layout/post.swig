{% extends "./index.swig" %}

{% block content %}
    <h1 class="content-subhead">Blog :D </h1>
    
    <section class="post">
        <header class="post-header">
            <h2 class="post-title">{{page.title}}</h2>

            <p class="post-meta">
                Por <a href="#" class="post-author">{{config.author}},  </a> 
                Escrito el {{page.updated|date('Y-m-d')}}
                <br><br>                   
                {# Tags <a class="post-category post-category-design" href="#">CSS</a> <a class="post-category post-category-pure" href="#">Pure</a>                             #}
            </p>
        </header>

        <div class="post-description">
            {{page.content}}
           {#  <p>
                Yesterday at CSSConf, we launched Pure – a new CSS library. Phew! Here are the <a href="https://speakerdeck.com/tilomitra/pure-bliss">slides from the presentation</a>. Although it looks pretty minimalist, we’ve been working on Pure for several months. After many iterations, we have released Pure as a set of small, responsive, CSS modules that you can use in every web project.
            </p> #}
        </div>
    </section>      

    
    <!-- Disqus -->
    <div id="disqus_thread"></div>
    <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES * * */
        var disqus_shortname = 'camilorttes';
        
        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
    <!-- End disqus -->  
{% endblock %}
