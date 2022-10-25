
function insertLogoAndMenu() {
    document.write('    <div class="dropdown">');
    document.write('        <button id="mainMenuButton" class="link">');
    document.write('            <img class="logo" src="'+ prefix +'images/logos/Logback_72dpi.png"/>');
    document.write('        </button>');
    document.write('        <div class="dropdown-menu information-grid">');
    document.write('            <div>');
    document.write('                <div class="dropdown-heading">Logback project</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="'+ prefix +'index.html"><i class="fa-regular fa-house"></i>  Home page</a>'); // &#127968;
    document.write('                    <a href="'+ prefix +'documentation.html"><i class="fa-regular fa-book"></i> Documentation</a>'); // &#128214; &#128195;
    document.write('                    <a href="'+ prefix +'download.html"><i class="fa-regular fa-download"></i> Download</a>'); // &#128229;
    document.write('                    <a href="https://search.maven.org/search?q=g:ch.qos.logback%20AND%20v:1.3.%3F">');
    document.write('                       <i class="fa-regular fa-magnifying-glass"></i> Search for logback 1.3.x'); // &#128270;
     document.write('                    <a href="https://search.maven.org/search?q=g:ch.qos.logback%20AND%20v:1.4.%3F">');
    document.write('                       <i class="fa-regular fa-magnifying-glass"></i> Search for logback 1.4.x');
    document.write('                     </a>');
    document.write('                     </a>');
    document.write('                    <a href="'+ prefix +'license.html"><i class="fa-regular fa-copyright"></i> License</a>');
    document.write('                    <a href="'+ prefix +'news.html"><i class="fa-regular fa-bullhorn"></i> News</a>'); // &#127908;
    document.write('                </div>');
    document.write('            </div>');
    document.write('            <div>');
    document.write('                <div class="dropdown-heading">Support</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="'+ prefix +'mailinglist.html"><i class="fa-regular fa-envelope"></i> Mailing Lists</a>');  //&#9993;
    document.write('                    <a href="'+ prefix +'bugreport.html"><i class="fa-regular fa-bug"></i> Bug Report</a>'); //&#129440; &#128027;

    document.write('                    <a  style=" xtext-align: center;" href="' + prefix + 'count/github.html">'); // &#11153;
    document.write('                           <i class="fa-regular fa-code-branch"></i> Source Repository');
    //document.write('                        <img style="vertical-align: middle;" class="github-logo" src="' + prefix + 'images/GitHub-Mark-32px.png" alt="Source code" /> Source Repository</a>');
    document.write('                     </a>');
    document.write('                </div>');
    document.write('            </div>');
    document.write('            <div>');
    document.write('                <div class="dropdown-heading">Online Tools</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="https://logback.qos.ch/translator/"><i class="fa-regular fa-cloud"></i> log4j.properties Translator</a>');
    document.write('                    <a href="https://logback.qos.ch/translator/xml2Canon.html">');
    document.write('                             <i class="fa-regular fa-cable-car"></i> logback.xml to canonical form (1.3)');
    document.write('                    </a>');
    document.write('                </div>');
    document.write('            </div>');
    document.write('        </div>');
    document.write('    </div>');
}

document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/site3.css" />');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/menu2.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/stackoverflow-light.min.css" />');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/fontawesome.min.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/brands.min.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/solid.min.css"/>');

document.write('<script type="text/javascript" src="'+prefix+'js/menuListener.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/jquery-min.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/decorator.js"></script>');

document.write('<script type="text/javascript" src="'+prefix+'js/sjcl/sjcl.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/sjcl/bitArray.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/sjcl/codecString.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/sjcl/codecHex.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/sjcl/sha1.js"></script>');

document.write('<script type="text/javascript" src="'+prefix+'js/dsl.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/tab.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/highlight.min.js"></script>');

document.write('<div id="header">');


document.write('<div id="header-grid">');

document.write('<div id="header-grid-logo-item">');
insertLogoAndMenu();
document.write('</div>');

document.write('<div id="header-grid-icons-item">');

document.write('      <a href="' + prefix +'count/sponsor.html"">');
document.write('        <img  class="sponsorIcon" src="' + prefix + 'images/sponsor.png" alt="Sponsor qos-ch"/>');
document.write('      </a>');

document.write('      <a  href="' + prefix +'count/twitter.html">');
document.write('        <img  class="twitter-logo" src="' + prefix + 'images/TwitterLogo_blue.svg" alt="Follow @qos_ch on Twitter"/>');
document.write('       </a>');

// close #header-grid-icons-item
document.write('</div>');

// div close #header-grid-icons-item
document.write('  <div id="header-grid-line-item" class="headerline"></div>');

document.write('<div id="ad">');
document.write('    <script type="text/javascript" src="'+prefix+'templates/ad.js" ></script>');
document.write('</div>');

// close #header-grid
document.write('</div>');

// close #header
document.write('</div>');

