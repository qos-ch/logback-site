//var xml2CanonURL='https://logback.qos.ch/translator/dsl/xml2Canon/asText';
//var xml2CanonURL='/translator/dsl/xml2Canon/asText';

var xml2CanonURL = 'http://localhost:8080/translator/dsl/xml2Canon/asText2';

function loopOn() {

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
    var textContent = legacyElement.textContent;
    var sanitizedText = sanitize(textContent);
    var bitArrayForInner = sjcl.hash.sha1.hash((sanitizedText));
    var sha1Str = sjcl.codec.hex.fromBits(bitArrayForInner);

    var jsonText = JSON.stringify({"payload": sanitizedText, "id": legacyId, "sha1": sha1Str});

    var canonicalElement = document.getElementById(canonicalId);

    $.ajax({
        type: "POST",
        url: xml2CanonURL,
        "data": jsonText,
        "context": canonicalElement,
        "contentType": 'application/json',
        "dataType": 'json',
        success: cback});
}
function sanitize(text) {
    var inputText = text;

    inputText = inputText.replace(/&lt;/gi, '<');
    inputText = inputText.replace(/&gt;/gi, '>');


    var l1 = inputText.length;
    inputText = inputText.replace(/&#8203;/gi, '');
    var l2 = inputText.length;

    inputText = inputText.replace(/<span\s+class="[^"]*">/gi, '');
    inputText = inputText.replace(/<\/span>/gi, '');
    inputText = inputText.replace(/<br>/gi, '');
    inputText = inputText.replace(/&nbsp;/gi, '');
    inputText = inputText.replace(/<b>/gi, '');
    inputText = inputText.replace(/<\/b>/gi, '');
    return inputText;

}

function cback (data, status) {
    //payload = '<pre><core>'+payload+'</core></pre>'
    //canonicalElement.innerHTML = payload;
    //canonicalElement.innerHTML = prettyPrintOne(canonicalElement.innerHTML);

    var payloadStr = data.payload;
    payloadStr = payloadStr.replace(/&lt;/gi, '<');
    payloadStr = payloadStr.replace(/&gt;/gi, '>');

    var decorated = hljs.highlight(payloadStr, {language: 'xml'}).value

    var canonicalElement = this; //document.getElementById(canonicalId);
    canonicalElement.innerHTML = '<pre><code class="hljs language-xml">' + decorated + '</code></pre>'
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
