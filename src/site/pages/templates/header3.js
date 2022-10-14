
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
    document.write('                    <a href="https://logback.qos.ch/translator/xml2Canon.html"></a>');
    document.write('                             logback.xml to canonical form (1.3)');
    document.write('                    </a>');
    document.write('                </div>');
    document.write('            </div>');
    document.write('        </div>');
    document.write('    </div>');
}


document.write('<div id="header">');
document.write('  <table width="100%" border="0">');

document.write('  <td>');
insertLogoAndMenu();
document.write('  </td>');

document.write('  <td>&nbsp;</td>');

document.write(' <td style="vertical-align:bottom;">');

document.write('   <div id="header-right-grid">');

document.write('      <div class="sponsor-github-twitter-grid-item">');

document.write('      <a href="' + prefix +'count/sponsor.html"">');
document.write('        <img  class="sponsorIcon" src="' + prefix + 'images/sponsor.png" alt="Sponsor qos-ch"/>');
document.write('      </a>');

document.write('      <a href="' + prefix +'count/github.html" style="xdisplay: block;">');
document.write('           <img style="margin-left: 1em;" src="' + prefix + 'images/GitHub-Mark-32px.png" alt="Source code" border="0"/>');
document.write('      </a>');

document.write('      <a  href="' + prefix +'count/twitter.html">');
document.write('        <img  style="margin-left: 1em;" height="32" src="' + prefix + 'images/TwitterLogo_blue.svg" alt="Follow @qos_ch on Twitter" border="0"/>');
document.write('       </a>');

document.write('      </div>'); // sponsor-github-twitter-item"

document.write('      <div class="maven-search13-grid-item">');
document.write('      <a href="https://search.maven.org/search?q=g:ch.qos.logback%20AND%20v:1.3.%3F">');
document.write('          <img src="https://img.shields.io/badge/Search%20for%20logback-1.3.x-green)"/>')
document.write('      </a>');
document.write('      </div>');

document.write('      <div class="maven-search14-grid-item">'); // 
document.write('      <a href="https://search.maven.org/search?q=g:ch.qos.logback%20AND%20v:1.4.%3F">');
document.write('          <img   src="https://img.shields.io/badge/Search%20for%20logback-1.4.x-green)"/>')
document.write('      </a>');
document.write('      </div>');



// close div#header-right-grid
document.write('    </div>');
// close column
document.write('   </td>');


// close line 1, table 1
document.write(' </tr></table>')


document.write('  <div id="headerLine"></div>');
// close div id=header line
document.write('</div>');

