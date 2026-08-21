---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}
{% assign author = site.author %}

{% if author.googlescholar %}
  <p>You can also find my articles on <a href="{{ author.googlescholar }}" target="_blank"><u>my Google Scholar profile</u></a>.</p>
{% endif %}

<style>
.pub-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  margin-top: 1em;
}

@media (max-width: 900px) {
  .pub-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 600px) {
  .pub-grid { grid-template-columns: minmax(0, 1fr); }
}

.pub-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 340px;
  background: #fff;
  border: 1px solid #e8eaed;
  border-top: 3px solid #2b4c7e;
  border-radius: 8px;
  padding: 16px 18px 18px;
  text-decoration: none !important;
  color: inherit;
}

.pub-card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.pub-card-year {
  display: inline-block;
  background: #eef3fb;
  color: #2b4c7e;
  border-radius: 3px;
  padding: 1px 7px;
  font-size: 0.72rem;
  font-weight: 700;
}

.pub-card-venue {
  display: inline-block;
  background: #f2f2f5;
  color: #666;
  border-radius: 3px;
  padding: 1px 7px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pub-card-status {
  display: inline-block;
  background: #e6f4ea;
  color: #1e7e34;
  border-radius: 3px;
  padding: 1px 7px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
  margin-left: auto;
}

.pub-card-status.is-withdrawn {
  background: #fdecea;
  color: #b3261e;
}

.pub-card-title {
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1.35;
  margin-bottom: 6px;
}

.pub-card-citation {
  font-size: 0.78rem;
  color: #666;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pub-card-excerpt {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.5;
  margin: 0 0 10px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pub-card-footer {
  font-size: 0.78rem;
  font-weight: 600;
  color: #4a9eda;
}
</style>

<div class="pub-grid reveal">
  {% for post in site.publications reversed %}
    {% if post.title %}
      <a class="pub-card lift-hover" href="{{ base_path }}{{ post.url }}">
        <div class="pub-card-meta">
          {% if post.date %}<span class="pub-card-year">{{ post.date | date: "%Y" }}</span>{% endif %}
          {% if post.venue %}<span class="pub-card-venue">{{ post.venue }}</span>{% endif %}
          <span class="pub-card-status{% if post.status == 'Withdrawn' %} is-withdrawn{% endif %}">{{ post.status | default: "Published" }}</span>
        </div>
        <h2 class="pub-card-title">{{ post.title }}</h2>
        {% if post.citation %}<p class="pub-card-citation">{{ post.citation }}</p>{% endif %}
        {% if post.excerpt %}<p class="pub-card-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif %}
        <span class="pub-card-footer">{% if post.paperurl %}<i class="fa fa-file-pdf-o"></i> View paper{% else %}Read more{% endif %} &rarr;</span>
      </a>
    {% endif %}
  {% endfor %}
</div>
