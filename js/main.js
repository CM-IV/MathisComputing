var firebaseConfig = {
    apiKey: process.env.PUBLIC_API_KEY,
    authDomain: "contact-form-bc087.firebaseapp.com",
    databaseURL: "https://contact-form-bc087.firebaseio.com",
    projectId: "contact-form-bc087",
    storageBucket: "contact-form-bc087.appspot.com",
    messagingSenderId: "742345645549",
    appId: "1:742345645549:web:b07534ab4544f87c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





//reference message collections
var messagesReference = firebase.database().ref('comments');





document.getElementById('contact-form').addEventListener('submit', submitForm);


//Submit form
function submitForm(event)
{
    event.preventDefault();//prevent from submitting info to HTML page

    //get the input value and send them to Google Firebase
    //get values
    var name = getInputValues('name');
    var email = getInputValues('email');
    var comment = getInputValues('comment');

    //save message
    saveMessage(name, email, comment);

    //show message sent
    document.querySelector('.alert').style.display = 'block';
    //hide alert after 3000ms
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);


}

//function to get form values themselves, no ids

function getInputValues(id)
{
    return document.getElementById(id).value;
}

//create a function to save messages to firebase
function saveMessage(name, email, comment)
{
    var newMessageRef = messagesReference.push();
    newMessageRef.set({
        name: name,
        email: email,
        comment, comment
    })
}
