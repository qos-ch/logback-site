
function insertLogoAndMenu() {
    document.write('    <div class="dropdown">');
    document.write('        <button id="mainMenuButton" class="link">');
    document.write('            <img class="logo" src="'+ prefix +'images/logos/Logback_72dpi.png"/>');
    document.write('        </button>');
    document.write('        <div class="dropdown-menu information-grid">');
    document.write('            <div>');
    document.write('                <div class="dropdown-heading">Logback project</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="'+ prefix +'index.html">Home page</a>');
    document.write('                    <a href="'+ prefix +'download.html">Download</a>');
    document.write('                    <a href="https://search.maven.org/search?q=g:ch.qos.logback%20AND%20v:1.3.%3F">');
    document.write('                       Search for logback 1.3.x');
    document.write('                    <a href="https://search.maven.org/search?q=g:ch.qos.logback%20AND%20v:1.4.%3F">');
    document.write('                       Search for logback 1.4.x');
    document.write('                     </a>');
    document.write('                     </a>');
    document.write('                    <a href="'+ prefix +'license.html">License</a>');
    document.write('                    <a href="'+ prefix +'news.html">News</a>');
    document.write('                </div>');
    document.write('            </div>');
    document.write('            <div>');
    document.write('                <div class="dropdown-heading">Support</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="'+ prefix +'mailinglist.html">Mailing Lists</a>');
    document.write('                    <a href="'+ prefix +'bugreport.html">Bug Report</a>');
    document.write('                    <a href="https://github.com/qos-ch/logback">Source Repository</a>');
    document.write('                </div>');
    document.write('            </div>');
    document.write('            <div>');
    document.write('                <div class="dropdown-heading">Online Tools</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="https://logback.qos.ch/translator/">log4j.properties Translator</a>');
    document.write('                    <a href="https://logback.qos.ch/translator/xml2Canon.html">');
    document.write('                             logback.xml to canonical form (1.3)');
    document.write('                    </a>');
    document.write('                </div>');
    document.write('            </div>');
    document.write('        </div>');
    document.write('    </div>');
}


document.write('<div id="header">');


document.write('<div id="header-grid">');

document.write('<div id="header-grid-logo-item">');
insertLogoAndMenu();
document.write('</div>');

document.write('<div id="header-grid-icons-item">');

document.write('      <a href="' + prefix +'count/sponsor.html"">');
document.write('        <img  class="sponsorIcon" src="' + prefix + 'images/sponsor.png" alt="Sponsor qos-ch"/>');
document.write('      </a>');

document.write('      <a href="' + prefix +'count/github.html">');
document.write('           <img class="github-logo" src="' + prefix + 'images/GitHub-Mark-32px.png" alt="Source code" />');
document.write('      </a>');

document.write('      <a  href="' + prefix +'count/twitter.html">');
document.write('        <img  class="twitter-logo" src="' + prefix + 'images/TwitterLogo_blue.svg" alt="Follow @qos_ch on Twitter"/>');
document.write('       </a>');

// close #header-grid-icons-item
document.write('</div>');

// div close #header-grid-icons-item
document.write('  <div id="header-grid-line-item" class="headerline"></div>');


// close #header-grid
document.write('</div>');

// close #header
document.write('</div>');

