var editor;

require.config({
    paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.16.2/min/vs'
    }
});
require(['vs/editor/editor.main'], function () {
    editor = monaco.editor.create(document.getElementById('monaco'), {
        theme: 'vs-dark',
        fontFamily: 'Nanum Gothic Coding',
        fontSize: 20,
        automaticLayout: true,
        language: 'html',
        value: editor_text
    });
});

var editor_text = [
    '<!--This is an example code to guide you!-->',
    '<!DOCTYPE html>',
    '<html>',
    '   <head>',
    '       <title>Welcome!</title>',
    '       <script>//alert("You can use scripts!")</script>',
    '   </head>',
    '   <body>',
    '       <h1 style="font-size: 35px; //you can use styles too!">Hello! thank you for using this editor!</h1>',
    '		<ul>',
    '			<li>You can edit code in this text area!</li>',
    '			<li>Click the reload button to preview your code!</li>',
    '			<li>Download it by clicking the download button!</li>',
    '			<li>Share your code by clicking upload button!</li>',
    '			<li>Open Your code by clicking the button next to it!</li>',
    ' 		</ul>',
    '	</body>',
    '</html>'
].join('\n');