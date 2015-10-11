{% extends "./index.swig" %}

{% block content %}
    <article>
        <header>
            <h2 class="page-title"> {{page.title}} </h2>
        </header>

        <div class="post-content">
            {{page.content}}
        </div>
    </article>
{% endblock %}