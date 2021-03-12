var firebaseConfig = {
    apiKey: "AIzaSyA295_5XpT7iR9-2H7wANz_3mKAlXvfjL8",
    authDomain: "oce-fb.firebaseapp.com",
    projectId: "oce-fb",
    storageBucket: "oce-fb.appspot.com",
    messagingSenderId: "51123601799",
    appId: "1:51123601799:web:d6ac5e633774e546695322"
};

firebase.initializeApp(firebaseConfig);

function get_code() {
    var url = prompt('Enter url');
    firebase.database().ref('html/code/' + url + '/text').on('value', (snapshot) => {
        var text = snapshot.val();
        if (text == null) {
            alert('No such url')
        } else {
            code = url;
            document.getElementById('code').innerHTML = 'Your code is : ' + code;
            editor.getModel().setValue(text);
        }
    })
}

function reload_code() {
    firebase.database().ref('html/code/' + code + '/text').on('value', (snapshot) => {
        var text = snapshot.val();
        editor.getModel().setValue(text);
    })
}

function upload_code() {
    firebase.database().ref('html/code/' + code).set({
        text : editor.getValue()
    })
}