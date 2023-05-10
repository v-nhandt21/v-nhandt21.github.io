---
layout: archive
title: "My Story"
permalink: /story/
author_profile: true
---

{% include base_path %}

<h2>Posts</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
