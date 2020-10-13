    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBTQfrDf67kxEipvG1CCKel8pEWaGiQscU",
        authDomain: "library-2303b.firebaseapp.com",
        databaseURL: "https://library-2303b.firebaseio.com",
        projectId: "library-2303b",
        storageBucket: "library-2303b.appspot.com",
        messagingSenderId: "992324755792",
        appId: "1:992324755792:web:daee84b9368d510c900c55",
        measurementId: "G-6CGPT9LKBR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // create database reference

    let dbLibrary = firebase.database().ref().child("myLibrary");


