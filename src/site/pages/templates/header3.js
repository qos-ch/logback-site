function hGetCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        c = hRemoveLeadingSpaces(c);
        if (c.indexOf(name) == 0) {
            console.log("found cookie "+c)
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function hRemoveLeadingSpaces(input) {
    while (input.charAt(0) == ' ') {
        input = input.substring(1);
    }
    return input;
}

function insertLogoAndMenu() {
    document.write('    <div class="dropdown">');
    document.write('        <button id="mainMenuButton" class="link">');
    document.write('            <span class="bar">&#x2630;&nbsp;</span> <img class="logo" src="'+ prefix +'images/logos/Logback_72dpi.png"/>');
    document.write('        </button>');
    document.write('        <div class="dropdown-menu information-grid">');
    document.write('            <div>');
    document.write('                <div class="dropdown-heading">Logback project</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="'+ prefix +'index.html"><i class="fa-regular fa-house"></i>  Home page</a>'); // &#127968;
    document.write('                    <a href="'+ prefix +'documentation.html"><i class="fa-regular fa-book"></i> Documentation</a>'); // &#128214; &#128195;
    document.write('                    <a href="'+ prefix +'sponsors.html"><i class="fa-regular fa-hand-holding-heart"></i> Sponsors</a>');  //&#9993 
    document.write('                    <a href="'+ prefix +'download.html"><i class="fa-regular fa-download"></i> Download</a>'); // &#128229;
    document.write('                    <a href="https://central.sonatype.com/search?namespace=ch.qos.logback">');
    document.write('                       <i class="fa-regular fa-magnifying-glass"></i> Search for logback'); // &#128270;
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

    document.write('                    <a href="' + prefix + 'count/github.html">');
    document.write('                           <i class="fa-regular fa-code-branch"></i> Source Repository');
    document.write('                     </a>');

    document.write('                    <a href="' + prefix + 'count/tidelift.html">');
    document.write('                           <i class="fa-regular fa-t"></i> Tidelift');
    document.write('                     </a>');


    document.write('                </div>');
    document.write('            </div>');
    document.write('            <div>');
    document.write('                <div class="dropdown-heading">Online Tools</div>');
    document.write('                <div class="dropdown-links">');
    document.write('                    <a href="https://logback.qos.ch/translator/"><i class="fa-regular fa-cloud"></i> Translation services</a>');
   // document.write('                    <a href="https://logback.qos.ch/translator/xml2Canon.html">');
    //document.write('                             <i class="fa-regular fa-cable-car"></i> logback.xml to canonical form (1.3)');
    //document.write('                    </a>');
    document.write('                </div>');
    document.write('            </div>');
    document.write('        </div>');
    document.write('    </div>');
}

// google add script
document.write('<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6731569547319298" crossorigin="anonymous"></script>');

document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'common/css/site3.css" />');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/menu2.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/popup.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/stackoverflow-light.min.css" />');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/fontawesome.min.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/brands.min.css"/>');
document.write('<link rel="stylesheet" type="text/css" href="'+prefix+'css/font/solid.min.css"/>');

document.write('<script type="text/javascript" src="'+prefix+'js/menuListener.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/jquery-min.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/decorator.js"></script>');
document.write('<script type="text/javascript" src="'+prefix+'js/cookies.js"></script>');

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

const avatarUrl = hGetCookie('AVATAR_URL');

document.write('<div id="header-grid-icons-item-flex-container">');

if(avatarUrl != null && avatarUrl.length != 0) {

    document.write('      <div class="avatar">');
    document.write('      <a href="/translator/userInfo.jsp">');
    document.write('        <img  class="avatar-icon" src="' + avatarUrl+'" alt="Sponsor qos-ch"/>');
    document.write('      </a>');
    document.write('      </div>');
}

document.write('      <div class="sponsor">');
document.write('      <a href="' + prefix +'count/sponsor.html"">');
document.write('        <img  class="sponsor-icon" src="' + prefix + 'images/sponsor.png" alt="Sponsor qos-ch"/>');
document.write('      </a>');
document.write('      </div>');

document.write('      <div class="twitter">');
document.write('      <a  href="' + prefix +'count/twitter.html">');
document.write('        <img  class="twitter-logo" src="' + prefix + 'images/TwitterLogo_blue.svg" alt="Follow @qos_ch on Twitter"/>');
document.write('       </a>');
document.write('      </div>');

// close header-grid-icons-item-flex-container
document.write('</div>');
// close #header-grid-icons-item
document.write('</div>');

// div close #header-grid-icons-item
document.write('  <div id="header-grid-line-item" class="headerline"></div>');

document.write('<div id="ad" class="top-message">');
document.write('    <p>Need an issue fixed as soon as possible? Consider <a href="'+prefix+'count/champion.html"><i class="fa-regular fa-trophy"></i> championing a release</a>.</p>');
document.write('</div>');


// close #header-grid
document.write('</div>');
// close #header
document.write('</div>');

// disable popup
//document.write('    <script type="text/javascript" src="'+prefix+'templates/popup.js" ></script>');
