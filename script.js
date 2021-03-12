$(document).ready(function() {
    code = nts(Math.floor(Math.random() * 9999999) + 1);
    document.getElementById('code').innerHTML = 'Your code is : ' + code;
});

$( function() {
    $( "#preview_wrap" )
            .resizable()
            .draggable();
} );

function nts(num) {
    var s = '', t;

    while (num > 0) {
        t = (num - 1) % 26;
        s = String.fromCharCode(65 + t) + s;
        num = (num - t) / 26 | 0;
    }
    return s || undefined;
}

function reload(){
    var editorHTML = editor.getValue();
    var iframe = document.getElementById('preview');
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(editorHTML);
    iframe.contentWindow.document.close();
}

function download_file(filename){
    var text = editor.getValue();
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/html"});
    var anchor = document.createElement("a");
    anchor.download = filename;
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

document.onkeydown = function(e){
    upload_code();
}