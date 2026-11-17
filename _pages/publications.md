---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}
{% assign author = site.author %}

{%- assign pubs = site.publications | where_exp: "p", "p.title" -%}
{%- assign years = "" | split: "" -%}
{%- assign n_awards = 0 -%}
{%- for p in pubs reversed -%}
  {%- assign y = p.date | date: "%Y" -%}
  {%- unless years contains y -%}{%- assign years = years | push: y -%}{%- endunless -%}
  {%- if p.status contains "Place" -%}{%- assign n_awards = n_awards | plus: 1 -%}{%- endif -%}
{%- endfor -%}

<div class="pub-toolbar">
  <p class="pub-toolbar__summary"><strong>{{ pubs | size }}</strong> publications{% if author.googlescholar %} · <a href="{{ author.googlescholar }}" target="_blank" rel="noopener">Google Scholar <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>{% endif %}</p>
  <div class="pub-filters" role="group" aria-label="Filter publications">
    <button type="button" class="pub-filter" data-filter="all" aria-pressed="true">All</button>
    {%- if n_awards > 0 %}<button type="button" class="pub-filter pub-filter--award" data-filter="award" aria-pressed="false">🏆 Awards</button>{% endif %}
    {%- for y in years %}
    <button type="button" class="pub-filter" data-filter="{{ y }}" aria-pressed="false">{{ y }}</button>
    {%- endfor %}
  </div>
</div>

<style>
.pub-toolbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px 20px; margin: 0 0 6px; }
.pub-toolbar__summary { margin: 0; font-size: 0.9rem; color: #5b6472; }
.pub-toolbar__summary a { color: #2b4c7e; font-weight: 600; text-decoration: none; }
.pub-toolbar__summary a i { font-size: 0.7em; }
.pub-filters { display: flex; flex-wrap: wrap; gap: 6px; }
.pub-filter {
  border: 1px solid #d5dbe5; background: #fff; color: #4b5563; border-radius: 999px;
  padding: 4px 13px; font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all .15s;
}
.pub-filter:hover { border-color: #2b4c7e; color: #2b4c7e; }
.pub-filter[aria-pressed="true"] { background: #2b4c7e; border-color: #2b4c7e; color: #fff; }
.pub-filter--award[aria-pressed="true"] { background: #b7791f; border-color: #b7791f; }
.pub-card[hidden] { display: none !important; }
.pub-empty { display: none; color: #6b7280; font-size: 0.9rem; }
html[data-theme="dark"] .pub-toolbar__summary { color: #9aa3b2; }
html[data-theme="dark"] .pub-toolbar__summary a { color: #9cc4ee; }
html[data-theme="dark"] .pub-filter { background: #1c1f27; border-color: #343a46; color: #b6bdca; }
html[data-theme="dark"] .pub-filter[aria-pressed="true"] { background: #9cc4ee; border-color: #9cc4ee; color: #14161c; }
html[data-theme="dark"] .pub-filter--award[aria-pressed="true"] { background: #f2c46d; border-color: #f2c46d; }

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

.pub-card-status.is-award {
  background: #fff4d6;
  color: #9a6b00;
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

.pub-card-cert {
  float: right;
  color: #b8860b;
}
</style>

<div class="pub-grid reveal">
  {% for post in site.publications reversed %}
    {% if post.title %}
      <a class="pub-card lift-hover" href="{{ base_path }}{{ post.url }}" data-year="{{ post.date | date: '%Y' }}"{% if post.status contains 'Place' %} data-award="1"{% endif %}>
        <div class="pub-card-meta">
          {% if post.date %}<span class="pub-card-year">{{ post.date | date: "%Y" }}</span>{% endif %}
          {% if post.venue %}<span class="pub-card-venue">{{ post.venue }}</span>{% endif %}
          <span class="pub-card-status{% if post.status == 'Withdrawn' %} is-withdrawn{% elsif post.status contains 'Place' %} is-award{% endif %}">{{ post.status | default: "Published" }}</span>
        </div>
        <h2 class="pub-card-title">{{ post.title }}</h2>
        {% if post.citation %}<p class="pub-card-citation">{{ post.citation }}</p>{% endif %}
        {% if post.excerpt %}<p class="pub-card-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif %}
        <span class="pub-card-footer">{% if post.paperurl %}<i class="fa fa-file-pdf-o"></i> View paper{% else %}Read more{% endif %} &rarr;{% if post.certificate %} <span class="pub-card-cert"><i class="fa fa-certificate"></i> Certificate</span>{% endif %}</span>
      </a>
    {% endif %}
  {% endfor %}
</div>

<script>
(function () {
  var buttons = document.querySelectorAll(".pub-filter");
  var cards = document.querySelectorAll(".pub-card");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.dataset.filter;
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      cards.forEach(function (c) {
        c.hidden = !(f === "all" || (f === "award" ? c.dataset.award === "1" : c.dataset.year === f));
      });
    });
  });
})();
</script>
