---
title: "GitHub Contributions"
permalink: /contributions/
layout: single
author_profile: true
classes: wide
---

<div class="github-prs" data-github-user="ChristopherQu">
  <p class="github-prs__status" data-pr-status>Loading pull requests...</p>
  <div class="github-prs__list" data-pr-list></div>
</div>

<script>
(() => {
  const container = document.querySelector(".github-prs");
  const status = container.querySelector("[data-pr-status]");
  const list = container.querySelector("[data-pr-list]");
  
  const query = `is:pr author:chrisqu777`;
  const apiUrl = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=100`;

  const formatDate = (value) => new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));

  const getRepoName = (repositoryUrl) => repositoryUrl.split("/repos/")[1] || "Unknown repository";

  const renderPullRequest = (item) => {
    const repo = getRepoName(item.repository_url);
    const state = item.pull_request?.merged_at ? "Merged" : item.state === "closed" ? "Closed" : "Open";
    const stateClass = `github-prs__state github-prs__state--${state.toLowerCase()}`;

    return `
      <article class="github-prs__item">
        <div class="github-prs__meta">
          <span class="${stateClass}">${state}</span>
          <span>${repo}</span>
          <span>#${item.number}</span>
          <span>Updated ${formatDate(item.updated_at)}</span>
        </div>
        <h2 class="github-prs__title">
          <a href="${item.html_url}">${item.title}</a>
        </h2>
      </article>
    `;
  };

  fetch(apiUrl, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`GitHub API returned ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data.items?.length) {
        status.textContent = "No public pull requests found.";
        return;
      }

      status.textContent = `${data.total_count} public pull requests found. Showing the most recently updated ${data.items.length}.`;
      list.innerHTML = data.items.map(renderPullRequest).join("");
    })
    .catch((error) => {
      status.textContent = `Could not load pull requests: ${error.message}.`;
    });
})();
</script>
