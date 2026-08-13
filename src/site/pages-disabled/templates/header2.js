document.write('<div id="header">');
document.write('  <table width="100%" border="0">');
// header line 1
document.write('  <tr>');
document.write('  <td>');
document.write('     <a href="https://logback.qos.ch/">');
document.write('       <img class="logo" src="' + prefix + 'images/logos/Logback_72dpi.png" alt="" border="0""/>');
document.write('      </a>')
document.write('  </td>')

//document.write('   <td style="vertical-align:bottom;"> ');
//document.write('    <div style="height: 40px; line-height: 40px; text-align: center; vertical-align: middle;background-color: cornsilk; border-style: dotted; border-color: #F00;">&nbsp;Discussion: <a href="https://github.com/qos-ch/logback/discussions/585">supporting both Java EE and Jakarta EE in logback</a></div> ');
//document.write('   </td> ');

//document.write('   <td style="vertical-align:bottom;">')
//document.write('     <p style="background-color: #fffbd9; border-color: #db4545; border-width: thin;')
//document.write('        border-style: dotted; padding: 5px; margin-left: 6ex;">');
//document.write('     Sponsor us for the purchase of dedicated hardware. This will enable the production of automated and <b>isolated</b> releases.</p>');
//document.write('   </td>');


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


