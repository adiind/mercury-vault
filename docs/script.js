(function () {
  const commitUrl = 'https://api.github.com/repos/adiind/mercury-vault/commits?per_page=6';
  const cacheKey = 'mercury-vault-commits';
  const cacheTtl = 5 * 60 * 1000;

  const terminalLines = [
    '> Mercury received: "Build me a pipeline demo"',
    '> Decomposing task...',
    '> Delegating architecture to Claude Code...',
    '> Claude created BLUEPRINT.md ✓',
    '> Delegating build to Codex...',
    '> Codex iterating... (3 commits)',
    '> Verifying build...',
    '> ✅ Pipeline complete. Pushing to main.'
  ];

  document.addEventListener('DOMContentLoaded', function () {
    setCurrentYear();
    animateHeroTitle();
    setupFadeIns();
    setupPipelineActivation();
    setupTerminalTyping();
    fetchCommits();
  });

  function setCurrentYear() {
    const yearNode = document.getElementById('current-year');
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }
  }

  function animateHeroTitle() {
    const title = document.querySelector('[data-typed-title]');
    if (!title) {
      return;
    }

    const value = title.getAttribute('data-typed-title') || title.textContent;
    title.textContent = '';
    let index = 0;

    function typeNext() {
      title.textContent = value.slice(0, index);
      index += 1;

      if (index <= value.length) {
        window.setTimeout(typeNext, randomDelay(42, 62));
      }
    }

    typeNext();
  }

  function setupFadeIns() {
    const elements = document.querySelectorAll('.fade-in');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (element) {
        element.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function setupPipelineActivation() {
    const section = document.getElementById('pipeline');
    const nodes = Array.from(document.querySelectorAll('.pipeline-node'));
    const lines = Array.from(document.querySelectorAll('.pipeline-lines .line'));
    if (!section || nodes.length === 0) {
      return;
    }

    const activate = function () {
      nodes.forEach(function (node, index) {
        window.setTimeout(function () {
          node.classList.add('active');
          if (lines[index - 1]) {
            lines[index - 1].classList.add('active');
          }
        }, index * 400);
      });
    };

    if (!('IntersectionObserver' in window)) {
      activate();
      return;
    }

    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          activate();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(section);
  }

  function setupTerminalTyping() {
    const output = document.getElementById('terminal-output');
    if (!output) {
      return;
    }

    const text = terminalLines.join('\n');
    let index = 0;
    let started = false;

    const startTyping = function () {
      if (started) {
        return;
      }
      started = true;
      typeTerminalCharacter(output, text, index);
    };

    if (!('IntersectionObserver' in window)) {
      startTyping();
      return;
    }

    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startTyping();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    observer.observe(document.getElementById('terminal'));
  }

  function typeTerminalCharacter(output, text, index) {
    if (index >= text.length) {
      return;
    }

    output.textContent += text.charAt(index);
    const currentChar = text.charAt(index);
    const delay = currentChar === '\n' ? 200 : randomDelay(30, 50);

    window.setTimeout(function () {
      typeTerminalCharacter(output, text, index + 1);
    }, delay);
  }

  async function fetchCommits() {
    const status = document.getElementById('activity-status');
    const timeline = document.getElementById('commit-timeline');
    const count = document.getElementById('commit-count');

    if (!timeline) {
      return;
    }

    const cached = readCommitCache();
    if (cached && Array.isArray(cached.data)) {
      renderCommits(cached.data, false);
      if (status) {
        status.textContent = 'Showing cached recent commits.';
      }
    }

    try {
      const res = await fetch(commitUrl, { headers: { Accept: 'application/vnd.github+json' } });
      if (!res.ok) {
        throw new Error('GitHub API returned ' + res.status);
      }

      const data = await res.json();
      sessionStorage.setItem(cacheKey, JSON.stringify({ time: Date.now(), data: data }));
      renderCommits(data, true);
      if (status) {
        status.textContent = 'Latest commits loaded from GitHub.';
      }
      if (count) {
        count.textContent = String(data.length);
      }
    } catch (error) {
      if (cached && Array.isArray(cached.data)) {
        renderCommits(cached.data, false);
        if (status) {
          status.textContent = 'Unable to fetch — showing cached data';
        }
        if (count) {
          count.textContent = String(cached.data.length);
        }
      } else {
        timeline.innerHTML = '<article class="commit-item"><p class="commit-message">Unable to fetch — showing cached data</p><div class="commit-meta"><span>No cached data available.</span></div></article>';
        if (status) {
          status.textContent = 'Unable to fetch — showing cached data';
        }
        if (count) {
          count.textContent = '0';
        }
      }
      console.error(error);
    }
  }

  function readCommitCache() {
    try {
      const raw = sessionStorage.getItem(cacheKey);
      if (!raw) {
        return null;
      }

      const cached = JSON.parse(raw);
      if (!cached.time || Date.now() - cached.time > cacheTtl) {
        sessionStorage.removeItem(cacheKey);
        return null;
      }

      return cached;
    } catch (error) {
      sessionStorage.removeItem(cacheKey);
      return null;
    }
  }

  function renderCommits(commits) {
    const timeline = document.getElementById('commit-timeline');
    const count = document.getElementById('commit-count');
    if (!timeline) {
      return;
    }

    timeline.innerHTML = '';
    commits.slice(0, 6).forEach(function (commit, index) {
      const item = document.createElement('article');
      item.className = 'commit-item';
      item.style.animationDelay = String(index * 90) + 'ms';

      const message = document.createElement('p');
      message.className = 'commit-message';
      message.textContent = getCommitMessage(commit);

      const meta = document.createElement('div');
      meta.className = 'commit-meta';

      const author = document.createElement('span');
      author.textContent = getCommitAuthor(commit);

      const time = document.createElement('span');
      time.textContent = timeAgo(getCommitDate(commit));

      const sha = document.createElement('span');
      sha.className = 'commit-sha';
      sha.textContent = commit.sha ? commit.sha.slice(0, 7) : 'unknown';

      meta.append(author, time, sha);
      item.append(message, meta);
      timeline.appendChild(item);
    });

    if (count) {
      count.textContent = String(commits.length);
    }
  }

  function getCommitMessage(commit) {
    const message = commit && commit.commit && commit.commit.message;
    return message ? message.split('\n')[0] : 'Untitled commit';
  }

  function getCommitAuthor(commit) {
    if (commit && commit.author && commit.author.login) {
      return commit.author.login;
    }

    if (commit && commit.commit && commit.commit.author && commit.commit.author.name) {
      return commit.commit.author.name;
    }

    return 'unknown author';
  }

  function getCommitDate(commit) {
    return commit && commit.commit && commit.commit.author ? commit.commit.author.date : null;
  }

  function timeAgo(dateValue) {
    if (!dateValue) {
      return 'unknown time';
    }

    const date = new Date(dateValue);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const intervals = [
      ['year', 31536000],
      ['month', 2592000],
      ['day', 86400],
      ['hour', 3600],
      ['minute', 60]
    ];

    for (const interval of intervals) {
      const value = Math.floor(seconds / interval[1]);
      if (value >= 1) {
        return value + ' ' + interval[0] + (value === 1 ? '' : 's') + ' ago';
      }
    }

    return 'just now';
  }

  function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
})();
