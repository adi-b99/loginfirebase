

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAyzUkStGAVyApjjfMJ4Hxj6epZ66AhE5o",
    authDomain: "form-b6aa4.firebaseapp.com",
    databaseURL: "https://form-b6aa4.firebaseio.com",
    projectId: "form-b6aa4",
    storageBucket: "form-b6aa4.appspot.com",
    messagingSenderId: "491110400587",
    appId: "1:491110400587:web:c1f349955ed7c5488883ce",
    measurementId: "G-B8YJ2WPY51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth=firebase.auth()
function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	

