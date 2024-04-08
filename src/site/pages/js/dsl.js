
var xml2CanonURL='https://logback.qos.ch/translator/rest/dsl/xml2Canon/asJSON';
var xml2JavaURL ='https://logback.qos.ch/translator/rest/dsl/xml2Java/asJSON';

//var xml2CanonURL = 'http://localhost:8080/translator/rest/dsl/xml2Canon/asJSON';
//var xml2JavaURL = 'http://localhost:8080/translator/rest/dsl/xml2Java/asJSON';

const successClass = "success";

function loopOn() {
    //if(1==2)
    //    return;
    var contents = $("div.tabcontent");

    if(contents === null)
        return;

    contents.each( function(i, e) {
        if(this.id.endsWith('_legacy')) {
            var textContent = this.textContent;
            var sanitizedText = sanitize(textContent);
            var bitArrayForInner = sjcl.hash.sha1.hash((sanitizedText));
            var sha1Str = sjcl.codec.hex.fromBits(bitArrayForInner);

            console.log('ID_SHA1_MAP.put("' +this.id +'", "'+ sha1Str+ '");');
        }
    });

}



function canonical(legacyId, canonicalId) {
    var legacyElement = document.getElementById(legacyId);
    var canonicalElement = document.getElementById(canonicalId);

    if($(canonicalElement).hasClass(successClass))
        return;

    var textContent = legacyElement.textContent;
    var sanitizedText = sanitize(textContent);
    var bitArrayForInner = sjcl.hash.sha1.hash((sanitizedText));
    var sha1Str = sjcl.codec.hex.fromBits(bitArrayForInner);

    var jsonText = JSON.stringify({"payload": sanitizedText, "id": legacyId, "sha1": sha1Str});

    $.ajax({
        type: "POST",
        url: xml2CanonURL,
        "data": jsonText,
        "context": canonicalElement,
        "contentType": 'application/json',
        "dataType": 'json',
        "success": function(data, status) {
            successCallback(data, status, canonicalElement, 'xml');
        },
        "error": errorCallback
        }
    );
}

function tyler(legacyId, tylerId) {

    var legacyElement = document.getElementById(legacyId);
    var tylerElement = document.getElementById(tylerId);

    if($(tylerElement).hasClass(successClass))
        return;

    var textContent = legacyElement.textContent;
    var sanitizedText = sanitize(textContent);
    var bitArrayForInner = sjcl.hash.sha1.hash((sanitizedText));
    var sha1Str = sjcl.codec.hex.fromBits(bitArrayForInner);

    var jsonText = JSON.stringify({"payload": sanitizedText, "id": legacyId, "sha1": sha1Str});

    $.ajax({
        type: "POST",
        url: xml2JavaURL,
        "data": jsonText,
        "context": tylerElement,
        "contentType": 'application/json',
        "dataType": 'json',
        "success": function(data, status) {
            successCallback(data, status, tylerElement, 'java');
        },
        "error": errorCallback}
    );
}


function sanitize(text) {
    var inputText = text;

    inputText = inputText.replace(/&lt;/gi, '<');
    inputText = inputText.replace(/&gt;/gi, '>');

    // replace &amp;amp; as &amp;
    // sp that &amp;amp;&amp;amp; becomes &amp;&amp;    
    inputText = inputText.replace(/;amp;/gi, ';');

    var l1 = inputText.length;
    inputText = inputText.replace(/\u200B/g,'');
    //inputText = inputText.replace(/8203;/gi, '');
    var l2 = inputText.length;

    inputText = inputText.replace(/<span\s+class="[^"]*">/gi, '');
    inputText = inputText.replace(/<\/span>/gi, '');
    inputText = inputText.replace(/<br>/gi, '');
    inputText = inputText.replace(/&nbsp;/gi, '');
    inputText = inputText.replace(/<b>/gi, '');
    inputText = inputText.replace(/<\/b>/gi, '');
    return inputText;

}

function successCallback (data, status, targetElement, lang) {
    var payloadStr = data.payload;
    payloadStr = payloadStr.replace(/&lt;/gi, '<');
    payloadStr = payloadStr.replace(/&gt;/gi, '>');

    var decorated = hljs.highlight(payloadStr, {language: lang}).value

    //var targetElement = this; //document.getElementById(canonicalId);
    targetElement.innerHTML = '<pre><code class="hljs">' + decorated + '</code></pre>'
    $(targetElement).addClass(successClass);

}



function errorCallback (jqXHR, textStatus, errorThrown) {

    const readyState = jqXHR.readyState;
    var canonicalElement = this;

    if(readyState == 0) {
        canonicalElement.innerHTML = '<pre><code>Server unreachable</code></pre>';
    } else if(readyState == 4) {
        const status = jqXHR.status;
        var responseDom = jqXHR.responseText;
        var parts = responseDom.split('####');
        if(parts != null || parts.length == 3) {
            var msg = parts[1];
            msg = msg.replace(/&lt;/gi, '<');
            msg = msg.replace(/&gt;/gi, '>');
            msg = msg.replace(/&#47;/gi, '/');


            canonicalElement.innerHTML = '<pre>' + msg +'</pre>';
        } else {
            canonicalElement.innerHTML = '<pre>server returned error code '+status+'</pre>';
        }
    } else {
        canonicalElement.innerHTML = '<pre><code>Unknown error</code></pre>';
    }

}

function ConfigurationText(aPayload) {
    this.payload = aPayload;
}

//   $.ajax({
//       url: xml2CanonURL, 
//       type: 'POST',
//       crossDomain: true,
//       headers: {'Referrer-Policy': 'origin-when-cross-origin',
//                 'Access-Control-Allow-Origin': '*',
//                 'Access-Control-Allow-Credentials': 'true',
//                 'Access-Control-Allow-Methods': 'POST, OPTIONS'},
//       //beforeSend: function(xhr){
//       //    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//       //    xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
//       //    xhr.setRequestHeader('Access-Control-Allow-CredentialsMethods', 'POST');            
//       //},
//       //xhrFields: { withCredentials: true },                     
//       data: inner,
//       success: function(res) {
//           alert(res);
//       }
//
//   } );
//  alert("zzzzz");
//  form.submit( function (event) {
//    $.ajax({
//            url: xml2CanonURL, 
//            type: 'POST',
//            contents: 'text/plain; charset=UTF-8',
//            processData: false,
//            dataType: "text",
//            data: $(this).serialize(), 
//            success: function(payload, status) {
//                alert(payload);
//            }
//    });
//      return false;  
//      //event.preventDefault();  
//    });
//   return false;
//}


// function xxCcanonical(id) {
//
//     var form = document.getElementById('aForm');
//     if (form == null) {
//         form = document.createElement("form");
//         document.body.appendChild(form);
//     }
//     var p = document.getElementById(id);
//
//     var inner = legacyElementinnerHTML;
//     //alert("==="+inner);
//     inner = inner.replace(/&lt;/gi, '<');
//     inner = inner.replace(/&gt;/gi, '>');
//
//     inner = inner.replace(/<span class="[^"]*"?>/gi, '');
//     inner = inner.replace(/<\/span>/gi, '');
//     inner = inner.replace(/<br>/gi, '');
//     inner = inner.replace(/&nbsp;/gi, '');
//     inner = inner.replace(/<b>/gi, '');
//     inner = inner.replace(/<\/b>/gi, '');
//
//     form.setAttribute("method", "post");
//     form.setAttribute("action", xml2CanonURL);
//
//     var hiddenField = document.createElement("input");
//     hiddenField.setAttribute("type", "hidden");
//     hiddenField.setAttribute("name", "val");
//     hiddenField.setAttribute("value", inner);
//     form.appendChild(hiddenField);
//
//     //alert("==="+inner);
//     form.submit();
//     return false;
// }
//
//
