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

    // get elements
    
    // const dbLibrary = myLibrary;
    const dbTest = document.querySelector("#test");

    // create reference
    // const dbRefTest = firebase.database().ref().child("myLibrary");

    // sync object changes

    let dbLibrary = firebase.database().ref().child("myLibrary");
    dbLibrary.set({
        book1: {
            author: "JK Rowling2",
            title: "Damn it to hell"    
        },

        book2 : {
            author: "Andrew Leach",
            title: "The Turd"
        }
    })

    dbLibrary.on("value", snap => console.log(snap.val()));

    function newBookTest() {
        dbLibrary.update({
           book3 : {
               author: "Andrew",
               title: "Nothing Burger"
           } 
        })
    }

