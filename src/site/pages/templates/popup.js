
const CONSENT = "CONSENT";
const SHOW_CLASS = "show";

function allowPopup() {
    setCookie(CONSENT, "true", 180);
    makeInvisible();
}


function refusePopup() {
    setCookie(CONSENT, "false", 180);
}

function loadPopup() {

    var value = getCookie(CONSENT);
    console.log("loadPopup() cookie value="+value);
    if(value == "true") {
        makeInvisible();
    } else {
        makeVisible();
    }
}
function makeVisible() {
    console.log("makeVisible")
    var texts = $("div#popup_rgpd"); // $("div#popup_rgpd div.popuptext")
    texts.addClass(SHOW_CLASS);
}

function makeInvisible() {
    console.log("makeInvisible");
    var texts = $("div#popup_rgpd"); // $("div#popup_rgpd div.popuptext")
    texts.removeClass(SHOW_CLASS);
}

// Accept cookies from WhatsApp on this browser?
//  We use cookies to understand, secure, operate, and provide our services.
// Learn more about uses and controls in our Cookie Policy.

document.write('<div id="popup_rgpd">');
document.write('  <div class="popuptext">');
document.write('    <h3>Accept cookies from QOS.CH Sarl (Switzerland) on this browser?</h3> ');
document.write('    <p>This site uses cookies to track authenticated, aka logged in, users.</p>  ');
document.write('    <p>Moreover, this site includes adds from Google, which may also use cookies.</p>');
//document.write('    <p>&nbsp;</p>');

document.write('    <p class="popup_rgpd_link" >');
document.write('       <a class="popup_rgpd_link" onclick="allowPopup();"  href="">Accept</a> ');
//document.write('    <p style="text-align: right;">');
//document.write('
document.write('     </p>');
//document.write('    <p>&nbsp;</p>');
document.write('  </div>');
document.write('</div>');
