
document.write('<div id="manualIndex">');
document.write('<p class="menu_header">Manual</p>');

document.write('<div class="manual-accordion">');

/* ---- Start ---- */
document.write('<div class="manual-acc-item" data-section="start">');
document.write('  <button type="button" class="manual-acc-toggle" aria-expanded="false">');
document.write('    <span class="manual-acc-label">Start</span>');
document.write('    <i class="fa-solid fa-chevron-down manual-acc-arrow" aria-hidden="true"></i>');
document.write('  </button>');
document.write('  <div class="manual-acc-panel" hidden>');
document.write('    <p class="menu"><a href="introduction.html"><b>&bull; Introduction</b></a></p>');
document.write('    <p class="menu"><a href="architecture.html"><b>&bull; Architecture</b></a></p>');
document.write('  </div>');
document.write('</div>'); 

/* ---- Configuration ---- */
document.write('<div class="manual-acc-item" data-section="configuration">');
document.write('  <button type="button" class="manual-acc-toggle" aria-expanded="false">');
document.write('    <span class="manual-acc-label">Configuration</span>');
document.write('    <i class="fa-solid fa-chevron-down manual-acc-arrow" aria-hidden="true"></i>');
document.write('  </button>');
document.write('  <div class="manual-acc-panel" hidden>');
document.write('    <p class="menu"><a href="configuration.html"><b>&bull; Overview</b></a></p>');
document.write('    <p class="menu"><a href="configuration-xml.html"><b>&bull; XML syntax</b></a></p>');
document.write('    <p class="menu"><a href="configuration-variables.html"><b>&bull; Variables</b></a></p>');
document.write('    <p class="menu"><a href="configuration-conditional.html"><b>&bull; Conditionals</b></a></p>');
document.write('  </div>');
document.write('</div>');

/* ---- Output ---- */
document.write('<div class="manual-acc-item" data-section="output">');
document.write('  <button type="button" class="manual-acc-toggle" aria-expanded="false">');
document.write('    <span class="manual-acc-label">Output</span>');
document.write('    <i class="fa-solid fa-chevron-down manual-acc-arrow" aria-hidden="true"></i>');
document.write('  </button>');
document.write('  <div class="manual-acc-panel" hidden>');
document.write('    <p class="menu"><a href="appenders.html"><b>&bull; Appenders</b></a></p>');
document.write('    <p class="menu menu-indent"><a href="appenders-console-file.html">&bull; Console &amp; file</a></p>');
document.write('    <p class="menu menu-indent"><a href="appenders-rolling.html">&bull; Rolling file</a></p>');
document.write('    <p class="menu menu-indent"><a href="appenders-network.html">&bull; Network &amp; mail</a></p>');
document.write('    <p class="menu menu-indent"><a href="appenders-async-sift.html">&bull; Async &amp; sift</a></p>');
document.write('    <p class="menu menu-indent"><a href="appenders-extending.html">&bull; Writing appenders</a></p>');
document.write('    <p class="menu menu-indent"><a href="appenders-access.html">&bull; Access appenders</a></p>');
document.write('    <p class="menu"><a href="encoders.html"><b>&bull; Encoders</b></a></p>');
document.write('    <p class="menu"><a href="layouts.html"><b>&bull; Layouts</b></a></p>');
document.write('    <p class="menu"><a href="usingSSL.html"><b>&bull; Using SSL</b></a></p>');
document.write('  </div>');
document.write('</div>');

/* ---- Selection & context ---- */
document.write('<div class="manual-acc-item" data-section="selection">');
document.write('  <button type="button" class="manual-acc-toggle" aria-expanded="false">');
document.write('    <span class="manual-acc-label">Selection &amp; context</span>');
document.write('    <i class="fa-solid fa-chevron-down manual-acc-arrow" aria-hidden="true"></i>');
document.write('  </button>');
document.write('  <div class="manual-acc-panel" hidden>');
document.write('    <p class="menu"><a href="filters.html"><b>&bull; Filters</b></a></p>');
document.write('    <p class="menu"><a href="mdc.html"><b>&bull; MDC</b></a></p>');
document.write('  </div>');
document.write('</div>');

/* ---- Extending ---- */
document.write('<div class="manual-acc-item" data-section="extending">');
document.write('  <button type="button" class="manual-acc-toggle" aria-expanded="false">');
document.write('    <span class="manual-acc-label">Extending</span>');
document.write('    <i class="fa-solid fa-chevron-down manual-acc-arrow" aria-hidden="true"></i>');
document.write('  </button>');
document.write('  <div class="manual-acc-panel" hidden>');
document.write('    <p class="menu"><a href="onJoran.html"><b>&bull; Joran</b></a></p>');
document.write('    <p class="menu"><a href="migrationFromLog4j.html"><b>&bull; Migration from log4j 1.x</b></a></p>');
document.write('  </div>');
document.write('</div>');

/* ---- Reference ---- */
document.write('<div class="manual-acc-item" data-section="reference">');
document.write('  <button type="button" class="manual-acc-toggle" aria-expanded="false">');
document.write('    <span class="manual-acc-label">Reference</span>');
document.write('    <i class="fa-solid fa-chevron-down manual-acc-arrow" aria-hidden="true"></i>');
document.write('  </button>');
document.write('  <div class="manual-acc-panel" hidden>');
document.write('    <p class="menu"><a href="../codes.html"><b>&bull; Error codes</b></a></p>');
document.write('    <p class="menu"><a href="../recipes/index.html"><b>&bull; Recipes</b></a></p>');
document.write('    <p class="menu"><a href="../setup.html"><b>&bull; Setup</b></a></p>');
document.write('    <p class="menu"><a href="../access.html"><b>&bull; logback-access</b></a></p>');
document.write('  </div>');
document.write('</div>');

document.write('</div>'); /* .manual-accordion */
document.write('<p style="border: 1px solid #cccccc; margin: 0;"></p>');
document.write('</div>'); /* #manualIndex */

(function initManualAccordion() {
  function pageFile() {
    var path = window.location.pathname || '';
    var parts = path.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function sectionForFile(file) {
    if (/^(introduction|architecture)\.html$/i.test(file)) return 'start';
    if (/^configuration/i.test(file)) return 'configuration';
    if (/^(appenders|encoders|layouts|usingSSL)/i.test(file)) return 'output';
    if (/^(filters|mdc)\.html$/i.test(file)) return 'selection';
    if (/^(onJoran|migrationFromLog4j)\.html$/i.test(file)) return 'extending';
    if (/^(index|underTheHood)\.html$/i.test(file)) return null; /* keep all closed on hub, or open start */
    return null;
  }

  function setOpen(item, open) {
    var btn = item.querySelector('.manual-acc-toggle');
    var panel = item.querySelector('.manual-acc-panel');
    if (!btn || !panel) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    item.classList.toggle('is-open', open);
    if (open) {
      panel.hidden = false;
    } else {
      panel.hidden = true;
    }
  }

  function wire() {
    var root = document.getElementById('manualIndex');
    if (!root) return;
    var items = root.querySelectorAll('.manual-acc-item');
    var current = sectionForFile(pageFile());

    items.forEach(function (item) {
      var btn = item.querySelector('.manual-acc-toggle');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        setOpen(item, !open);
      });
      /* Open the section that contains the current page */
      if (current && item.getAttribute('data-section') === current) {
        setOpen(item, true);
        /* Mark current link */
        var file = pageFile();
        item.querySelectorAll('a[href]').forEach(function (a) {
          var href = a.getAttribute('href') || '';
          if (href === file || href.endsWith('/' + file)) {
            a.classList.add('manual-current');
          }
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    /* menu.js is written mid-body; DOM for #manualIndex already exists */
    wire();
  }
})();
