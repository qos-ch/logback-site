//var xml2CanonURL='https://logback.qos.ch/translator/dsl/xml2Canon/asText';
//var xml2CanonURL='/translator/dsl/xml2Canon/asText';

var xml2CanonURL = 'http://localhost:8080/translator/dsl/xml2Canon/asText2';


function canonical(legacyId, canonicalId) {

    var form = document.getElementById('aForm');
    if (form == null) {
        form = document.createElement("form");
        document.body.appendChild(form);
    }

    $(form).empty();
    form.id = 'aForm';

    var legacyElement = document.getElementById(legacyId);

    var textContent = legacyElement.textContent;
    //alert("=input=="+inner);
    // textContent = textContent.replace(/<pre class="prettyprint source">/gi, '');
    // textContent = textContent.replace(/<pre class="source prettyprint">/gi, '');
    // textContent = textContent.replace(/<pre><code class="[^"]+">/gi, '');
    //
    // textContent = textContent.replace(/<pre><code>/gi, '');
    // textContent = textContent.replace(/<\/code><\/pre>/gi, '');
    // textContent = textContent.replace(/<\/pre>/gi, '');
    textContent = textContent.replace(/&lt;/gi, '<');
    textContent = textContent.replace(/&gt;/gi, '>');

    textContent = textContent.replace(/&#8203;/gi, '');

    textContent = textContent.replace(/<span\s+class="[^"]*">/gi, '');
    textContent = textContent.replace(/<\/span>/gi, '');
    textContent = textContent.replace(/<br>/gi, '');
    textContent = textContent.replace(/&nbsp;/gi, '');
    textContent = textContent.replace(/<b>/gi, '');
    textContent = textContent.replace(/<\/b>/gi, '');

    // var bitArray = sjcl.hash.sha1.hash('abc');
    //
    // alert("sha1('abc')="+sjcl.codec.hex.fromBits(bitArray));

    var bitArrayForInner = sjcl.hash.sha1.hash((textContent));
    var sha1Str = sjcl.codec.hex.fromBits(bitArrayForInner);

    form.setAttribute("method", "post");
    form.setAttribute("action", xml2CanonURL);

    var jsonText = JSON.stringify({"payload": textContent, "id": legacyId, "sha1": sha1Str});

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "configurationText");
    hiddenField.setAttribute("value", jsonText);
    form.appendChild(hiddenField);



    var hiddenSHA1Field = document.createElement("input");
    hiddenSHA1Field.setAttribute("type", "hidden");
    hiddenSHA1Field.setAttribute("name", "sha1");
    hiddenSHA1Field.setAttribute("value", sha1Str);
    //form.appendChild(hiddenSHA1Field);


    var postData = $("#aForm").serialize();



    //alert(md5Str);

    var canonicalElement = document.getElementById(canonicalId);

    //$.post({url: xml2CanonURL, data: postData,


    $.ajax({
        type: "POST",
        url: xml2CanonURL,
        "data": jsonText,
        "context": canonicalElement,
        "contentType": 'application/json',
        "dataType": 'json',
        success: cback});

    form.removeChild(hiddenField);
    //form.removeChild(hiddenSHA1Field);
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
    canonicalElement.innerHTML = '<pre><code>' + decorated + '</code></pre>'
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
