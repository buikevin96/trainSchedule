// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxRNdWx_M5kdUv7gM-OWCGMrH1wouR754",
    authDomain: "trainschedule-9d635.firebaseapp.com",
    databaseURL: "https://trainschedule-9d635.firebaseio.com",
    projectId: "trainschedule-9d635",
    storageBucket: "trainschedule-9d635.appspot.com",
    messagingSenderId: "984411575402"
  };
  firebase.initializeApp(config); 

var database = firebase.database();

  
  var trainName = "";
  var destination = "";
  var militaryTime = 0;
  var frequency = 0;


  $("#submit").on("click", function(event){
    event.preventDefault();

    trainName = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    militaryTime = $("#time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    console.log(trainName);
    console.log(destination);
    console.log(militaryTime);
    console.log(frequency);

    database.ref().push({
      trainName: trainName,
      destination: destination,
      militaryTime: militaryTime,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

    return false;
  })