var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		var element = document.getElementById('text');
		if (isMobile) {
		} else {
			document.getElementById("card1").style.width="30%";
      document.getElementById("card2").style.width="30%";
      document.getElementById("assessment_card").style.width="25%";
      document.getElementById("splashimg").style.width="30%";

		}


var state_values={
  "Andhra Pradesh":{
    donate:"https://apcmrf.ap.gov.in/#donate",
    epass:"https://www.spandana.ap.gov.in/"
  },
"Arunachal Pradesh":{
   donate:"http://www.arunachalpradesh.gov.in/donation-to-chief-ministers-relief-fund/",
epass:"https://eservice.arunachal.gov.in/"
},
"Assam":{
  donate:"https://cm.assam.gov.in/relieffund.php",
epass:"https://eservices.assam.gov.in/directApply.do?serviceId=1533"
},
"Bihar":{
  donate:"http://www.cmrf.bih.nic.in/users/home.aspx",
epass:"https://covid19.bihar.gov.in/"
},
"Goa":{
   donate:"https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=1963359",
epass:"https://goaonline.gov.in/"
},
"Chhattisgarh":{
  donate:"http://cmrf.cg.gov.in/donate.html",
epass:"https://raipur.gov.in/cg-covid-19-epass/"
},
"Gujarat":{
  donate:"https://iora.gujarat.gov.in/cmrf/",
epass:"https://www.digitalgujarat.gov.in/Citizen/CitizenService.aspx"
},
"Haryana":{
  donate:"https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=1952558" ,
epass:"https://edisha.gov.in/eForms/MigrantService"
},
"Himachal Pradesh":{
   donate:"https://cmhimachal.nic.in/index.php/donation/individual",
epass:"http://covid19epass.hp.gov.in/"
},
"Jharkhand":{
  donate:"https://www.pmcares.gov.in/en/web/contribution/donate_india",
epass:"https://ranchi.nic.in/e-pass/"
},
"Karnataka":{
  donate:"https://cmrf.karnataka.gov.in/English/index.html",
epass:"https://sevasindhu.karnataka.gov.in/Sevasindhu/English"
},
"Kerala":{
  donate:"https://donation.cmdrf.kerala.gov.in/",
epass:"https://covid19jagratha.kerala.nic.in/home/addDomestic"
},
"Madhya Pradesh":{
  donate:"https://mponline.gov.in/Portal/Services/CMRF/RelieffundE.aspx" ,
epass:"https://mapit.gov.in/covid-19/"
},
"Maharashtra":{
  donate:"https://cmrf.maharashtra.gov.in/CMRFCitizen/DonationOnlineForm.action",
epass:"https://covid19.mhpolice.in/"
},
"Manipur":{
  donate:"https://manipur.gov.in/?p=16980",
epass:"https://tengbang.in/"
},
"Mizoram":{
  donate:"https://www.pmcares.gov.in/en/web/contribution/donate_india",
epass:"https://mcovid19.mizoram.gov.in/"
},
"Meghalaya":{
   donate:"http://megcmrf.gov.in/index.htm",
epass:"https://megedistrict.gov.in/"
},
"Nagaland":{
  donate:"https://chiefminister.nagaland.gov.in/chief-ministers-relief-fund/",
epass:"https://www.iamstranded.nagaland.gov.in/"
},
"Odisha":{
  donate:"https://cmrfodisha.gov.in/",
epass:"https://covid19.odisha.gov.in/"
},
"Punjab":{
   donate:"https://cmrf.punjab.gov.in/" ,
epass:"http://covidhelp.punjab.gov.in/"
},
"Rajasthan":{
   donate:"https://cmrelief.rajasthan.gov.in/Covid-19.aspx" ,
epass:""
},
"Sikkim":{
  donate:"https://cmdrf.sikkim.gov.in/" ,
epass:"https://eservices.sikkim.gov.in/directApply.do?serviceId=1364"
},
"Rajasthan":{
   donate:"https://cmrelief.rajasthan.gov.in/Covid-19.aspx",
epass:"https://sso.rajasthan.gov.in/signin"
},
"Tamil Nadu":{
  donate:"https://ereceipt.tn.gov.in/cmprf/Cmprf",
epass:"https://tnepass.tnega.org/"
},
"Telangana":{
   donate:"https://telangana.gov.in/cm-relief-fund" ,
epass:"https://policeportal.tspolice.gov.in/"
},
"Tripura":{
  donate:"https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=918153" ,
epass:"https://covid19.tripura.gov.in/"
},
"Uttarakhand":{
   donate:"https://cmrf.uk.gov.in/default.aspx",
epass:"http://smartcitydehradun.uk.gov.in/e-pass"
},
"Uttar Pradesh":{
   donate:"https://rahat.up.nic.in/upcovidcarefund.aspx",
epass:"http://jansunwai.up.nic.in/"
},
"West Bengal":{
  donate:"https://wb.gov.in/COVID-19.aspx" ,
epass:"https://coronapass.kolkatapolice.org/"
},
"Chandigarh":{
  donate:"http://chdcovid19.in/uploads/1585467970-bank-covid19.pdf",
epass:"http://admser.chd.nic.in/dpc/"
},
"Andaman and Nicobar Islands":{
   donate:"https://www.pmcares.gov.in/en/web/contribution/donate_india",
epass:"https://southandaman.nic.in/whos-who/"
},
"Dadra and Nagar Haveli and":{
  donate:"https://www.pmcares.gov.in/en/web/contribution/donate_india",
epass:"http://dnh.nic.in/Departments/COVID19.aspx"
},
"Delhi":{
  donate:"https://lgcmrelieffund.delhi.gov.in/",
epass:"https://epass.jantasamvad.org/epass/relief/english/"
},
"Jammu & Kashmir":{
  donate:"https://www.pmcares.gov.in/en/web/contribution/donate_india" ,
epass:"http://jkmonitoring.nic.in/"
},
"Ladakh":{
   donate:"https://www.pmcares.gov.in/en/web/contribution/donate_india",
epass:"https://leh.nic.in/epass/"
},
"Puducherry":{
   donate:"https://www.pmcares.gov.in/en/web/contribution/donate_india",
epass:"https://epass.py.gov.in/"
},
"Lakshadweep":{
   donate:"https://www.pmcares.gov.in/en/web/contribution/donate_india",
epass:"https://lakshadweep.gov.in/service/epass-covid19-interstate-movement-pass/"
}
};

function splash()
{
  var header=document.getElementById("header");
  var location=document.getElementById("location_permission");
  var welcome=document.getElementById("welcome");
 var myelement = document.getElementById("splash");

 header.style.visibility= "hidden";
 location.style.visibility= "hidden";
 welcome.style.visibility= "hidden";

 setTimeout(function(){
  myelement.style.display="none";
  header.style.visibility= "visible";
  location.style.visibility= "visible";
  welcome.style.visibility= "visible";
},5000);

 myelement.style.display="block";
}



Notification.requestPermission().then(function(permission) { console.log('permiss', permission)});

navigator.geolocation.getCurrentPosition(function(position) {


console.log('Geolocation permissions granted');
console.log('Latitude:' + position.coords.latitude);
console.log('Longitude:' + position.coords.longitude);
});
navigator.permissions.query({name:'geolocation'})
  .then(function(permissionStatus) {
    console.log('geolocation permission state is ', permissionStatus.state);

    if(permissionStatus.state!="granted"){
      document.getElementById("location_permission").style.display = "block";
    }
    permissionStatus.onchange = function() {
      if(this.state!="granted"){
        document.getElementById("location_permission").style.display = "block";
      }
      else{
        document.getElementById("location_permission").style.display = "none";
      }
    };
  });

var firebaseConfig = {
apiKey: "AIzaSyB2UZQh44peqyPUuQuqOqI5Mqu88bktM8E",
authDomain: "covid19hackathon-website.firebaseapp.com",
databaseURL: "https://covid19hackathon-website.firebaseio.com",
projectId: "covid19hackathon-website",
storageBucket: "covid19hackathon-website.appspot.com",
messagingSenderId: "830987561613",
appId: "1:830987561613:web:9be88594bb8609b83710c4",
measurementId: "G-RMLHJ14Q2Z"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();


navigator.geolocation.getCurrentPosition(function(position) {

firebase.database().ref('/users/' + window.localStorage.getItem('email')).once('value').then(function(snapshot) {
  var user=snapshot.val();
  user['lat']=position.coords.latitude;
  user['lon']=position.coords.longitude;
  window.localStorage.setItem('lat',  position.coords.latitude);
  window.localStorage.setItem('lon',  position.coords.longitude);
  firebase.database().ref('/users/' + window.localStorage.getItem('email')).update(user);
  // ...
});

console.log('Geolocation permissions granted');
console.log('Latitude:' + position.coords.latitude);
console.log('Longitude:' + position.coords.longitude);
});


/*setTimeout(function(){
var x = document.getElementById("myAudio");
x.focus();
x.play();
},10000);
*/

// Confirm the link is a sign-in with email link.
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
// Additional state parameters can also be passed via URL.
// This can be used to continue the user's intended action before triggering
// the sign-in operation.
// Get the email if available. This should be available if the user completes
try{
// the flow on the same device where they started it.
var email = window.localStorage.getItem('email1').concat(window.localStorage.getItem('email2'));
if (!email) {
  // User opened the link on a different device. To prevent session fixation
  // attacks, ask the user to provide the associated email again. For example:
  email = window.prompt('Please provide your email for confirmation');
}

firebase.auth().createUserWithEmailAndPassword(email, window.localStorage.getItem('password')).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// ...
});

    firebase.database().ref('users/' + window.localStorage.getItem('email1')).set({
  name: window.localStorage.getItem('name'),
  email:  window.localStorage.getItem('email1').concat(window.localStorage.getItem('email2')),
  password : window.localStorage.getItem('password'),
  phone:window.localStorage.getItem('phone'),
  role:window.localStorage.getItem('role'),
  state:window.localStorage.getItem('state'),
  verify:true
}, function(error) {
  if (error) {
    alert("Email already exist try with different email");
  } else {

  alert("Registration Completed");
    window.localStorage.setItem('email',  window.localStorage.getItem('email1'));
   window.localStorage.removeItem('email1');
  window.localStorage.removeItem('email2');
  window.localStorage.removeItem('password');
  }
});
}
catch(err){

}
  }
  function enquiry(){
    var subject=document.getElementById("subject").value;
    var message=document.getElementById("message").value;
    if(subject=="" || message=="")
    alert("please fill all the fields");
    else{

      var mail="mailto:ncov2019@gov.in?subject=".concat(subject).concat("&body=").concat(message);
     window.open(mail);
    }
  }


  function login(){
    document.getElementById("login_err").innerHTML = "";
    var password=document.getElementById('passwordl').value;
    var email=document.getElementById('emaill').value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
    }
    else {
        document.getElementById("login_err").innerHTML = "Invalid Email";
      return;
    }


    firebase.database().ref('users/' + email.substr(0,email.indexOf('@'))).once('value').then(function(snapshot) {
      if(snapshot.val()!=null){
        var user=snapshot.val();
        if(user.password!=password){
          document.getElementById("login_err").innerHTML = "Incorrect password";
        }
        else{
          window.localStorage.setItem('phone', user.phone);
          window.localStorage.setItem('name', user.name);
          window.localStorage.setItem('role', user.role);
          window.localStorage.setItem('state', user.state);
            window.localStorage.setItem('email', email.substr(0,email.indexOf('@')));
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

  alert(error.message);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
        }
      }
      else{
          document.getElementById("login_err").innerHTML = "Email not exist";
      }

  });
  }

  function register() {
      document.getElementById("otp").innerHTML = "";
    var name=document.getElementById('name').value;
    var password=document.getElementById('password').value;
    var email=document.getElementById('email').value;
    var mobile=document.getElementById('mobile').value;
    var role=document.getElementById('role').value;
    var state=document.getElementById('state').value;

    if(name=="" || password=="" || email=="" || mobile=="" || role=="select" || state=="select"){
      document.getElementById("otp").innerHTML = "Please fill all the fields";
      document.getElementById("otp").style.display="block";
    return;
  }


    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
    }
    else {
      document.getElementById("otp").innerHTML = "Invalid email address";
      return;
    }

    if (password.match(/[a-z]/g) && password.match(
                       /[A-Z]/g) && password.match(
                       /[0-9]/g) && password.match(
                       /[^a-zA-Z\d]/g) && password.length >= 8)
          {}
               else{
                 document.getElementById("otp").innerHTML = "Password Must contain atleast One Uppercase ,<br>One Lowercase ,<br>One Number ,<br>One Special character and <br> Between 8 to 16 letter length";
                 return;
               }

    if(mobile.length<10)
    {
      document.getElementById("otp").innerHTML = "Invalid mobile number";
      return;
    }
    var actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'http://localhost/',
      // This must be true.
      handleCodeInApp: true,

    };

    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function() {

      window.localStorage.setItem('email1', email.substr(0,email.indexOf('@')));
      window.localStorage.setItem('email2', email.substr(email.indexOf('@')));
      window.localStorage.setItem('phone', mobile);
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('password', password);
      window.localStorage.setItem('role', role);
      window.localStorage.setItem('state', state);

      document.getElementById("otp").innerHTML = "confirmation email has been sent to your email";

    })
    .catch(function(error) {
      // Some error occurred, you can inspect the code: error.code
    });

  }

var x = document.getElementById("login-div");
document.getElementById("notifications").style.display="none";
x.style.display = "none";

firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  go1();
  go2();
  myMap();
  document.getElementById("notifications").style.display="block";
  document.getElementById("assessment_card").style.display="block";
  document.getElementById("signinsignup").style.display="none";
  document.getElementById("workheader").style.display="block";
  document.getElementById("testimonials1").style.display="block";

var y = document.getElementById("login-div");
var x = document.getElementById("register-div");
var z= document.getElementById("logout");
 x.style.display = "none";
 y.style.display = "none";
 z.style.display="block";
 try{
viewalarm();
}
catch(err){}

} else {
  document.getElementById("assessment_card").style.display="none";
  document.getElementById("notifications").style.display="none";
  document.getElementById("signinsignup").style.display="block";
document.getElementById("workheader").style.display="none";
document.getElementById("testimonials1").style.display="none";

    myMap();
  var y = document.getElementById("login-div");
  var x = document.getElementById("register-div");
  var z = document.getElementById("logout");
     x.style.display = "block";
     y.style.display = "none";
     z.style.display="none";
}
});

function map_filter(){
document.getElementById("role_map").style.display="block";
  document.getElementById("googleMap").style.display="block";

var x=document.getElementById("role_map").value;
var mapProp;
  firebase.database().ref('/users/' + window.localStorage.getItem('email')).once('value').then(function(snapshot) {
    var user=snapshot.val();
    mapProp= {
     center:new google.maps.LatLng(parseFloat(user.lat),parseFloat(user.lon)),
     zoom:7,
   };
   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

   var marker = new google.maps.Marker({
     position:new google.maps.LatLng(parseFloat(user.lat),parseFloat(user.lon)),
     animation:google.maps.Animation.BOUNCE
   });
   marker.setMap(map);

 firebase.database().ref('/users/').once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {

    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

    if(childKey!= window.localStorage.getItem('email') && childData.role==x ){
      var marker = new google.maps.Marker({
        position:new google.maps.LatLng(parseFloat(childData.lat),parseFloat(childData.lon)),
      });
      marker.setMap(map);
      var infowindow = new google.maps.InfoWindow({
  content:"name : "+childData.name +"\nRole : "+childData.role
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
});
    }
    // ...
  });
});

      });

}

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
  alert("Right click disabled");
}, false);

function toggle_login(){
var x = document.getElementById("login-div");
var y = document.getElementById("register-div");
   x.style.display = "block";
   y.style.display = "none";
}

function toggle_register(){
var x = document.getElementById("login-div");
var y = document.getElementById("register-div");
   x.style.display = "none";
   y.style.display = "block";
}

function logout_user(){
window.localStorage.removeItem('phone');
window.localStorage.removeItem('name');
  window.localStorage.removeItem('email');
  window.localStorage.removeItem('role');
  window.localStorage.removeItem('state');
firebase.auth().signOut();
alert("Logged Out Successfully !");
window.location.reload();
}
cases_report();
function cases_report() {
  var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);
      document.getElementById("cases_report").innerHTML="<img src='https://cdn.ps.emap.com/wp-content/uploads/sites/3/2020/04/Coronavirus-icon-orange-11-440x330.png' width='50px'>\xa0\xa0\xa0<b><font size=+2>  Total confirmed :</font>&nbsp;&nbsp;&nbsp;<font size=+2 color='blue'>"+res.statewise[0].confirmed+"</font></b><b><font size=+2>\xa0\xa0\xa0\xa0\xa0\xa0\xa0  Total death :</font><font size=+2 color='blue'>"+res.statewise[0].deaths+"\xa0\xa0\xa0\xa0\xa0\xa0\xa0( View more )</font></b>";
  }
};

  xhttp.open("GET", "https://api.covid19india.org/data.json", false);
  xhttp.send();

}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);
      var arr=res.results;

      var table =document.getElementById("course_table");

      var tableHeaderRowCount = 0;

var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
  table.deleteRow(tableHeaderRowCount);
}

      var i=0;
      for(i=0;i<arr.length;i++){
        var row = table.insertRow(0);

        var cell1 = row.insertCell(0);

        var cell2 = row.insertCell(1);


        cell2.onclick=function(){

          var win = window.open("https://www.udemy.com"+this.value, '_blank');
         win.focus();
        };
  var img = arr[i].image_125_H;
        cell1.innerHTML ="<br>"+ arr[i].title+"<br><font color=#555555>"+arr[i].visible_instructors[0].display_name+"<br>"+"Rs ."+arr[i].price_detail.amount+"<br><img src="+img+" /><br>";


        cell2.innerHTML="Register";
        cell2.value=arr[i].url;



        cell1.style.textAlign = "center";
        cell2.style.textAlign = "center";

        cell2.style.color="blue";
        cell1.style.padding="5px";
        cell2.style.padding="10px";




      }


    }
  };

  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses/?search="+document.getElementById("key").value+"&language=en", false);
  xhttp.setRequestHeader("Accept", "application/json, text/plain, */*");
  xhttp.setRequestHeader("Authorization", "Basic MklCTUxWNEdaSTFLbXNwU0FNTVh2eXplSmVQUjc4SVFDT0VXN1pSRjpvbjh0UTdxa1dEaXBaT1E1TFEwc0RBdzZkNEdvcmg5c1FiTFRQWk1HcnYwS1pwbDZSdzZtbEdiajY1RnlreWRhTVFPNFhreUZNeDF5SXppR25pOHBGMnBaSzl4ZDBseW5BY0RUOWhNbkhmUDEzWHlyYTlMbGxZdUFtdW9BUmtMMg==");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  xhttp.send();

}

function setalarm(){
  var name=document.getElementById("alarmname").value;
  var time=document.getElementById("time").value;

if(name=="" || time=="")
alert("please fill all the fields");
else {

  firebase.database().ref('/alarm/' + window.localStorage.getItem('email')+'/'+new Date().toString()).set({
"name": name,
"time": time
}, function(error) {
if (error) {
  alert("Try again later !");
} else {

alert("Alarm Created");
window.location.reload();
}
});
}

}

function viewalarm() {
var table =document.getElementById("myTable");


        var tableHeaderRowCount = 0;

var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
}

var times=[];
var names=[];
  firebase.database().ref('/alarm/'+window.localStorage.getItem('email')).once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {


     var childKey = childSnapshot.key;
     var childData = childSnapshot.val();
     names.push(childData.name);
     times.push(childData.time);

     var row = table.insertRow(0);

     var cell1 = row.insertCell(0);

     var cell2 = row.insertCell(1);
     cell2.id=childKey;

     cell2.onclick=function(){
       firebase.database().ref('/alarm/'+window.localStorage.getItem('email')+'/'+cell2.id).remove();
       alert("alarm removed");
       window.location.reload();
     };

     cell1.innerHTML = childData.name+'\n'+childData.time;
     cell2.innerHTML = "Remove";

     cell1.style.backgroundColor = "#F6FFF0";
     cell2.style.backgroundColor = "#FFD7D7";

     cell1.style.textAlign = "center";
     cell2.style.textAlign = "center";

   });


function go () {
  var time=1000;
    var i=0;
    for(i=0;i<times.length;i++){
      if(times[i]==new Date().getHours()+":"+new Date().getMinutes()){
        time=60000;

        var x = document.getElementById("myAudio");
        x.play();
        document.getElementById("alarm_goesof").style.display="block";
        document.getElementById("alarm_text").innerHTML="Alarm "+names[i]+" goes Off...";
        document.getElementById("alarm_text").style.color="white";
      }
    }
    setTimeout(go, time); // callback
}
if(window.localStorage.getItem('email')!=null)
go();




 });

}

function labsmap(){
document.getElementById("labsmapbutton").style.display="block";
var lab=[{"first":"Govt. General Hospital\\/ RIMS, Ongole","second":{"first":15.4878817,"second":80.04714369999999},"state":"Andhra Pradesh"},{"first":"Rajiv Gandhi Institute of Medical Sciences, Kadapa","second":{"first":14.433235999999999,"second":78.8644499},"state":"Andhra Pradesh"},{"first":"Damien TB Research Centre, Nellore","second":{"first":14.4130238,"second":79.967976},"state":"Andhra Pradesh"},{"first":"Area Hospital, Kavali","second":{"first":14.911954699999999,"second":79.9908944},"state":"Andhra Pradesh"},{"first":"SVRR Govt. General Hospital, Tirupati","second":{"first":13.6447357,"second":79.40576790000001},"state":"Andhra Pradesh"},{"first":"AIIMS, Mangalagiri","second":{"first":16.444563,"second":80.58483249999999},"state":"Andhra Pradesh"},{"first":"Area Hospital, Palamaner, Chittoor","second":{"first":13.198474599999999,"second":78.74802679999999},"state":"Andhra Pradesh"},{"first":"Sri Venkateswara Medical College, Tirupati","second":{"first":13.637937800000001,"second":79.4039118},"state":"Andhra Pradesh"},{"first":"Area Hospital, Macheria, Guntur","second":{"first":16.2991481,"second":80.4502931},"state":"Andhra Pradesh"},{"first":"ACSR Govt. Medical College, Nellore","second":{"first":14.427800200000002,"second":79.9617576},"state":"Andhra Pradesh"},{"first":"District Hospital, Vizianagram","second":{"first":18.110712799999998,"second":83.3866177},"state":"Andhra Pradesh"},{"first":"Area Hospital, Chirala","second":{"first":15.8254173,"second":80.36139},"state":"Andhra Pradesh"},{"first":"Guntur Medical College, Guntur","second":{"first":16.2982124,"second":80.43831229999999},"state":"Andhra Pradesh"},{"first":"District Hospital, Rajahmundry, East Godavari District","second":{"first":17.0197073,"second":81.7916304},"state":"Andhra Pradesh"},{"first":"Rangaraya Medical College, Kakinada","second":{"first":16.9791646,"second":82.237258},"state":"Andhra Pradesh"},{"first":"District Hospital, Noonepalli, Nandyal, Kurnool","second":{"first":15.468738000000002,"second":78.48389639999999},"state":"Andhra Pradesh"},{"first":"District Hospital, Eluru","second":{"first":16.7139128,"second":81.0941782},"state":"Andhra Pradesh"},{"first":"Area Hospital, Narasaraopet, Guntur","second":{"first":16.2359516,"second":80.04858879999999},"state":"Andhra Pradesh"},{"first":"District Hospital, Proddatur","second":{"first":14.741547899999999,"second":78.5508728},"state":"Andhra Pradesh"},{"first":"Area Hospital, Adoni, Kurnool","second":{"first":15.6231584,"second":77.26909309999999},"state":"Andhra Pradesh"},{"first":"District Hospital, Tekkali","second":{"first":18.6057678,"second":84.2301531},"state":"Andhra Pradesh"},{"first":"District Hospital, APVVP,Pulivendula, Kadapa District","second":{"first":14.425297700000002,"second":78.2315612},"state":"Andhra Pradesh"},{"first":"District Hospital, Madnapalle, Chittoor District","second":{"first":13.556866999999999,"second":78.5010286},"state":"Andhra Pradesh"},{"first":"Area Hospital, Kadiri","second":{"first":14.112986099999999,"second":78.1573391},"state":"Andhra Pradesh"},{"first":"Community Health Centre, Patapatnam","second":{"first":18.7455036,"second":84.0847218},"state":"Andhra Pradesh"},{"first":"Area Hospital, Amalapuram, East Godavari District","second":{"first":16.5870747,"second":82.0084256},"state":"Andhra Pradesh"},{"first":"District Hospital, Atmakur","second":{"first":15.8760306,"second":78.57560409999999},"state":"Andhra Pradesh"},{"first":"Area Hospital, Tadepalligudem","second":{"first":16.8217231,"second":81.5387356},"state":"Andhra Pradesh"},{"first":"Andhra Medical College, Visakhapatnam","second":{"first":17.7064928,"second":83.30486599999999},"state":"Andhra Pradesh"},{"first":"District Hospital, Anakapalli, Vishakhapatnam","second":{"first":17.6847037,"second":83.00600519999999},"state":"Andhra Pradesh"},{"first":"Area Hospital, Rampachodavaram, East Godavari District","second":{"first":17.430728400000003,"second":81.7771195},"state":"Andhra Pradesh"},{"first":"Community Health Center, Nandyal, Banaganapalli, Kurnool","second":{"first":15.485394099999997,"second":78.4796142},"state":"Andhra Pradesh"},{"first":"Area Hospital, Tenali","second":{"first":16.2430512,"second":80.6465528},"state":"Andhra Pradesh"},{"first":"Area Hospital, Narsipatnam","second":{"first":17.6727848,"second":82.6107761},"state":"Andhra Pradesh"},{"first":"District Hospital, Hindupur, Anantpur","second":{"first":13.832510399999999,"second":77.4923338},"state":"Andhra Pradesh"},{"first":"DST Lab Govt. Chest Hospital, Vishakhapatnam","second":{"first":17.7272693,"second":83.3331332},"state":"Andhra Pradesh"},{"first":"District Hospital, Chittoor","second":{"first":13.2178021,"second":79.0916895},"state":"Andhra Pradesh"},{"first":"GSL Medical College & General Hospital, Rajahnagram, East Godavari District","second":{"first":17.0665153,"second":81.88289859999999},"state":"Andhra Pradesh"},{"first":"Govt. General Hospital, Guntur","second":{"first":16.331806399999998,"second":80.4889773},"state":"Andhra Pradesh"},{"first":"Govt. Medical College, Srikakulam","second":{"first":18.3141788,"second":83.8889015},"state":"Andhra Pradesh"},{"first":"Area Hospital, Kandukuru","second":{"first":15.2132393,"second":79.9014643},"state":"Andhra Pradesh"},{"first":"Sidhartha Medical College, Vijaywada","second":{"first":16.5174383,"second":80.6713233},"state":"Andhra Pradesh"},{"first":"Rural Development Trust, Bathalpalli","second":{"first":14.6605996,"second":77.6144719},"state":"Andhra Pradesh"},{"first":"SHAR Hospital, Sriharikota, Nellore","second":{"first":13.7333834,"second":80.17238619999999},"state":"Andhra Pradesh"},{"first":"A&N Islands Institute of Medical Sciences, Port Blair","second":{"first":11.6498052,"second":92.7496615},"state":"Andaman & Nicobar Islands"},{"first":"ICMR-Regional Medical Research Centre, Port Blair","second":{"first":11.6346545,"second":92.71463709999999},"state":"Andaman & Nicobar Islands"},{"first":"GB Pant Hospital, Port Blair","second":{"first":11.675458899999999,"second":92.7474044},"state":"Andaman & Nicobar Islands"},{"first":"Shri Vinoba Bhave Civil Hospital, Silvassa","second":{"first":20.270715499999998,"second":73.0076634},"state":"Dadra & Nagar Haveli"},{"first":"Lal Path Labs, Block -E, Sector 18, Rohini, Delhi","second":{"first":28.738853399999996,"second":77.1364103},"state":"Delhi"},{"first":"Metropolis Healthcare Ltd. E21, Block-B1, Mohan Cooperative Industrial Estate, South East Delhi","second":{"first":28.5129359,"second":77.2956541},"state":"Delhi"},{"first":"Sterling Accuris Diagnostics, A divison of Sterling Accuris Wellness Pvt Ltd, C-65, Block C, Phase I, Okhla, New Delhi","second":{"first":28.5263603,"second":77.28157829999999},"state":"Delhi"},{"first":". Gen-X Diagnostics, 2\\/6, Sarvapriya Vihar, ","second":{"first":28.542878199999997,"second":77.20379360000001},"state":"Delhi"},{"first":"Vardhman Mahavir Medical College & Safdarjung Hospital","second":{"first":28.569074999999998,"second":77.2031046},"state":"Delhi"},{"first":"Army Hospital Research & Referral","second":{"first":28.5836503,"second":77.1578737},"state":"Delhi"},{"first":"Dr Dangs Lab, C-2\\/1, Safadarjung Development Area, New-Delhi","second":{"first":28.5501324,"second":77.2034503},"state":"Delhi"},{"first":"Aakash Path Lab, Aakash Healthcare & Super speciality Hospital, Road No 201, Sector 3,Dwarka","second":{"first":28.605238399999998,"second":77.0533797},"state":"Delhi"},{"first":"Prognosis Laboratories, 515-16, Sector 19, Dwarka","second":{"first":28.580235,"second":77.05098559999999},"state":"Delhi"},{"first":"Noble Diagnostic Centre, WZ-409C, Janak Park, Hari Nagar, Opposite DDU Hospital","second":{"first":28.627163,"second":77.110792},"state":"Delhi"},{"first":"Lady Hardinge Medical College","second":{"first":28.634207999999997,"second":77.2125679},"state":"Delhi"},{"first":"IGIB, CSIR, New Delhi","second":{"first":28.5537818,"second":77.27445709999999},"state":"Delhi"},{"first":"Star Imaging & Path Lab Pvt Ltd, 4B\\/4, Tilak Nagar, New Delhi","second":{"first":28.6386523,"second":77.0998269},"state":"Delhi"},{"first":"City X-Ray & Scan Clinic Pvt Ltd, 4B\\/18, Tilak Nagar, New-Delhi","second":{"first":28.639727699999998,"second":77.1010131},"state":"Delhi"},{"first":"Dept of Lab Sciences, Rajiv Gandhi Cancer Institute & Research Centre, Sector 5, Rohini","second":{"first":28.7166817,"second":77.11141719999999},"state":"Delhi"},{"first":"ESIC Hospital, Basaidarapur ","second":{"first":28.657697600000002,"second":77.1301208},"state":"Delhi"},{"first":"All India Institute Medical Sciences","second":{"first":28.5671773,"second":77.2100451},"state":"Delhi"},{"first":"Dr P Bhasin Path Labs (P) Ltd, S 13 Greater Kailash Part 1","second":{"first":28.549809,"second":77.23338},"state":"Delhi"},{"first":"Dept of Lab Medicine, HCMCT, Manipal Hospital, Main Road, Sector 6, Dwarka, New Delhi","second":{"first":28.5952041,"second":77.0695578},"state":"Delhi"},{"first":"Mahajan Imaging Pvt Ltd, E-19, Defence Colony, New-Delhi","second":{"first":28.5673213,"second":77.2280506},"state":"Delhi"},{"first":"Laboratory Services, Indraprastha Apollo Hospitals, Sarita Vihar, New Delhi","second":{"first":28.5413896,"second":77.2837904},"state":"Delhi"},{"first":"Vallabhbhai Patel Chest Institute (VPCI), Delhi","second":{"first":28.6906371,"second":77.20994},"state":"Delhi"},{"first":"Department of Microbiology, National Institute of TB and Respiratory Diseases (NITRD), New Delhi","second":{"first":28.5287056,"second":77.1891689},"state":"Delhi"},{"first":"Sir Ganga Ram Hospital Clinical Lab Services, Sir Ganga Ram Hospital, Delhi","second":{"first":28.6388009,"second":77.1901027},"state":"Delhi"},{"first":"Institute of Liver & Biliary Sciences","second":{"first":28.5066395,"second":77.16614},"state":"Delhi"},{"first":"CRL Diagnostics Pvt Ltd, Plot No 10, Avtar Enclave, Opposite Metro Pillar 227, Paschim Vihar, Rohtak Road, New Delhi","second":{"first":28.678002,"second":77.10695679999999},"state":"Delhi"},{"first":"Ram Manohar Lohia Hospital","second":{"first":28.6257235,"second":77.2027212},"state":"Delhi"},{"first":". Northern Railway Central Hospital, New Delhi","second":{"first":28.636518199999998,"second":77.2174596},"state":"Delhi"},{"first":"Maulana Azad Medical College","second":{"first":28.6357398,"second":77.24007089999999},"state":"Delhi"},{"first":"Dept of Lab Services, Dr. B.L. Kapur Memorial Hospital, 5, Pusa Road, New-Delhi","second":{"first":28.643303699999997,"second":77.1798616},"state":"Delhi"},{"first":"Defence Institute of Physiology & Allied Sciences (DIPAS), DRDO, Delhi","second":{"first":28.700859299999994,"second":77.2181824},"state":"Delhi"},{"first":"Max Lab, Max Super Spciality Hospital, Saket, New-Delhi","second":{"first":28.527638,"second":77.2120949},"state":"Delhi"},{"first":"University College of Medical Sciences","second":{"first":28.6833511,"second":77.30991190000002},"state":"Delhi"},{"first":"Lifeline Laboratory, H-11, Green Park Extension, New-Delhi","second":{"first":28.560078999999998,"second":77.2046567},"state":"Delhi"},{"first":"Gagan Pathology & Imaging Pvt Ltd F-26\\/21-22, Near Ayodhya Chowk,Sector 7, Rohini","second":{"first":28.706299700000002,"second":77.1109208},"state":"Delhi"},{"first":"State TB Training and Demonstration Centre, Jawaharlal Nehru Marg, Delhi Gate","second":{"first":28.639464,"second":77.23910500000001},"state":"Delhi"},{"first":"Genestrings Diagnostic Centre Pvt Ltd, 3, MMTC, Geetanjali Enclave, New Delhi","second":{"first":28.5329506,"second":77.20373909999999},"state":"Delhi"},{"first":"Oncquest Labs Ltd, 3-Factory Road, New-Delhi","second":{"first":28.568483999999998,"second":77.201805},"state":"Delhi"},{"first":"Venkateshwar Hospital, sector- 18A, Dwarka","second":{"first":28.5888913,"second":77.0375313},"state":"Delhi"},{"first":"Dept of Laboratory Services, Action Cancer Hospital, A-4, Paschim Vihar (East), New-Delhi","second":{"first":28.6738875,"second":77.1102466},"state":"Delhi"},{"first":"Rajiv Gandhi Super Speciality Hospital, Taharpur, Delhi","second":{"first":28.6892332,"second":77.3164681},"state":"Delhi"},{"first":"Sheri Kashmir Institute of Medical Science Medical College, Bemina, Srinagar","second":{"first":34.087496099999996,"second":74.7603244},"state":"Jammu & Kashmir"},{"first":"Govt. Medical College, Jammu","second":{"first":32.7361128,"second":74.8539737},"state":"Jammu & Kashmir"},{"first":"Govt. Medical College, Srinagar","second":{"first":34.0859652,"second":74.79883389999999},"state":"Jammu & Kashmir"},{"first":"Intermediate Reference Laboratory, Chest Disease Hospital, Dalgate, Srinagar","second":{"first":34.0778331,"second":74.8304481},"state":"Jammu & Kashmir"},{"first":"CSIR Indian Institute of Integrative Medicine (IIIM), Jammu","second":{"first":32.731497,"second":74.84843099999999},"state":"Jammu & Kashmir"},{"first":"Sher-i-Kashmir Institute of Medical Sciences, Srinagar","second":{"first":34.136145,"second":74.8000465},"state":"Jammu & Kashmir"},{"first":"Command Hospital (NC) Udhampur","second":{"first":32.930786499999996,"second":75.13534779999999},"state":"Jammu & Kashmir"},{"first":"Karnataka Institute of Medical Sciences, Hubli","second":{"first":15.361600200000002,"second":75.13072009999999},"state":"Karnataka"},{"first":"Public health Laboratory, Chikkaballapur District Hospital, Chikkaballapur","second":{"first":13.4351006,"second":77.7256518},"state":"Karnataka"},{"first":"Sakra World Hospital Lab Services, Devarabeesanahalli VArthur Hobli, Bengaluru","second":{"first":12.932267399999999,"second":77.68517489999999},"state":"Karnataka"},{"first":"Vijayapura District Hospital, Vijayapura","second":{"first":16.828098,"second":75.69171469999999},"state":"Karnataka"},{"first":"Kidwai Memorial Institute of Oncology, Bengaluru","second":{"first":12.9373933,"second":77.5980111},"state":"Karnataka"},{"first":"District Public Health Laboratory, Chamarajanagar District","second":{"first":11.9267915,"second":76.9415101},"state":"Karnataka"},{"first":"KLES Dr Prabhakar Kore Hospital & MRC Hi Tech Lab, NehruNagar, Belgaum, Belagavi","second":{"first":15.888134599999999,"second":74.5196845},"state":"Karnataka"},{"first":"Lab Services, Apollo Hospitals, 154\\/11, Bannerghatta Road, Bengaluru","second":{"first":12.896306899999999,"second":77.59820169999999},"state":"Karnataka"},{"first":"Chamarajanagar Institute of Medical Sciences (CIMS), Chamarajanagar District","second":{"first":11.895513399999999,"second":76.9029568},"state":"Karnataka"},{"first":"Yenepoya Medical College Hospital Lab, Nithyananda Nagar, Derlakatte, Mangaluru","second":{"first":12.8114545,"second":74.88143029999999},"state":"Karnataka"},{"first":"Hybrinomics Life Science and diagnostics LLP, Site No 50, Maruthi Township, B. Hanumanthanagar, Bileshivale, Doddagubbi Post, Bengaluru","second":{"first":13.06209,"second":77.67130379999999},"state":"Karnataka"},{"first":"Raichur Institute of Medical Sciences, Raichur","second":{"first":16.2300437,"second":77.3590412},"state":"Karnataka"},{"first":"Dept of Pathology & Lab Medicine, Aster CMI Hospital, #43\\/2, NH 7, International Airport Rd, Sahakar Nagar, Bengaluru","second":{"first":13.054605899999999,"second":77.5919318},"state":"Karnataka"},{"first":"Dharwad Institute of Mental Health & Neurosciences, Dharwad","second":{"first":15.4650343,"second":74.9982977},"state":"Karnataka"},{"first":"Trident Diagnostics & Healthcare Pvt.Ltd, #313, 2nd main Jagajyothi Nagara, 80 feet outer Ring Road, Kenchanapura Cross bus stop, Nagadevanahalli, Bengaluru","second":{"first":12.9420994,"second":77.4938985},"state":"Karnataka"},{"first":"Indian Institute of Science, Bengaluru (Department of Biochemistry, Centre for Infectious Disease Research)","second":{"first":13.0172469,"second":77.5721686},"state":"Karnataka"},{"first":"Wenlock District Hospital, Mangalore","second":{"first":12.867383,"second":74.843131},"state":"Karnataka"},{"first":"KS Hegde Medical Academy (KSHEMA), Mangalore","second":{"first":12.809625299999999,"second":74.88355279999999},"state":"Karnataka"},{"first":"National Institute of Virology, Bangalore Field Unit, Bengaluru","second":{"first":12.937328299999999,"second":77.5908367},"state":"Karnataka"},{"first":"Vijaynagar Institute of Medical Sciences, Bellary","second":{"first":15.152947900000001,"second":76.89669049999999},"state":"Karnataka"},{"first":"NMR Diagnostics Pvt. Ltd, Maratha Mandal Building, P.B.Road, Dharwad","second":{"first":15.461458099999998,"second":75.0060001},"state":"Karnataka"},{"first":"Mysore Medical College & Research Institute, Mysore","second":{"first":12.315022899999999,"second":76.6504047},"state":"Karnataka"},{"first":"Microbiological Lab, 22-D 3, KIADB Industrial Area, 1st Phase, Kumbalagidu, Bengaluru","second":{"first":12.873493400000001,"second":77.4424756},"state":"Karnataka"},{"first":"Gadag Institute of Medical Sciences, Gadag","second":{"first":15.3786337,"second":75.6020829},"state":"Karnataka"},{"first":"Chitradurga District Hospital, Chitradurga","second":{"first":14.2208276,"second":76.4057711},"state":"Karnataka"},{"first":"District Public Health Laboratory,Ramanagara District","second":{"first":12.7185043,"second":77.2809698},"state":"Karnataka"},{"first":"JJM Medical College (JJMMC), Davangere","second":{"first":14.454569599999997,"second":75.9154971},"state":"Karnataka"},{"first":"Karwar Institute of Medical Sciences, Karwar","second":{"first":14.817508,"second":74.1300167},"state":"Karnataka"},{"first":"Neuberg Anand Reference Laboratory, Anand Tower, #54, Bowring Hospital Road, Bengaluru","second":{"first":12.9814606,"second":77.6061478},"state":"Karnataka"},{"first":"Koppal Institute of Medical Sciences, Koppal","second":{"first":15.3520863,"second":76.1845211},"state":"Karnataka"},{"first":"Kasturba Medical College, Mangalore","second":{"first":12.8701206,"second":74.84439859999999},"state":"Karnataka"},{"first":"Public Health Laboratory, Chikmagalur District Hospital, Chikmagalur","second":{"first":13.3158116,"second":75.7759784},"state":"Karnataka"},{"first":"Mandya Institute of Medical Sciences (MIMS), Mandya","second":{"first":12.525631599999999,"second":76.9001986},"state":"Karnataka"},{"first":"Yadgiri District Hospital, Yadgiri","second":{"first":16.746953599999998,"second":77.1327594},"state":"Karnataka"},{"first":"National Institute of Traditional Medicine, Belagavi","second":{"first":15.887272500000002,"second":74.5234387},"state":"Karnataka"},{"first":"Department of Laboratory Medicine and Pathology, Columbia Asia Referral Hospital,Yeshwantpur, #26\\/4, Brigade Gateway, Malleshwaram West, Bengaluru","second":{"first":13.0141153,"second":77.55583279999999},"state":"Karnataka"},{"first":"Lab Services, Apollo Hospitals, 154\\/11, Bannerghatta Road, Bengaluru","second":{"first":12.896306899999999,"second":77.59820169999999},"state":"Karnataka"},{"first":"Kempegowda Institute of Medical Sciences,Bangalore","second":{"first":12.926644099999999,"second":77.5626824},"state":"Karnataka"},{"first":"Instem, Bengaluru","second":{"first":13.072100599999999,"second":77.5783316},"state":"Karnataka"},{"first":"National Institute of Mental Health and Neuro-Sciences, Bangalore","second":{"first":12.9392774,"second":77.5921619},"state":"Karnataka"},{"first":"SRL Limited at Fortis hospitals, 154\\/9,Bannerghatta Main Road, Bengaluru","second":{"first":12.894822699999999,"second":77.59861959999999},"state":"Karnataka"},{"first":"Udupi District Hospital, Udupi","second":{"first":13.3340464,"second":74.7421059},"state":"Karnataka"},{"first":"Tumkur District Hospital, Tumkur","second":{"first":13.3399985,"second":77.1000114},"state":"Karnataka"},{"first":"St. Johns Medical College and Hospital, Bangalore","second":{"first":12.9291938,"second":77.6201021},"state":"Karnataka"},{"first":"Command Hospital (Air Force), Bengaluru","second":{"first":12.964650299999999,"second":77.6281362},"state":"Karnataka"},{"first":"Central Diagnostic Lab, Vydehi Institute of Medical Sciences and Research Centre, #82, E.P.I.P. Area, Whitefield, Bengaluru","second":{"first":12.975852999999999,"second":77.7295633},"state":"Karnataka"},{"first":"Bagalkot District Hospital, Bagalkot","second":{"first":16.1659578,"second":75.6615946},"state":"Karnataka"},{"first":"Mediclu Diagnostics, Bangalore","second":{"first":12.9586632,"second":77.5183551},"state":"Karnataka"},{"first":"Kasturba Medical College Manipal","second":{"first":13.354228899999999,"second":74.7871011},"state":"Karnataka"},{"first":"Dept of Lab Medicine, Vikram Hospital Pvt Ltd, No 71\\/1, Millers Road, Bengaluru","second":{"first":12.9882355,"second":77.5921381},"state":"Karnataka"},{"first":"Father Muller's Medical College, Mangalore","second":{"first":12.8658029,"second":74.8598521},"state":"Karnataka"},{"first":"Hassan Inst. Of Med. Sciences, Hassan","second":{"first":13.004863799999999,"second":76.10268649999999},"state":"Karnataka"},{"first":"Belgaum Institute of Medical Sciences, Belgaum","second":{"first":15.873265899999998,"second":74.5111958},"state":"Karnataka"},{"first":"Bangalore Medical College & Research Institute, Bengaluru","second":{"first":12.9593958,"second":77.5747214},"state":"Karnataka"},{"first":"Syngene International Limited, Biocon Park, SEZ, Bommasandra Industrial Area, Phase IV, Bommasandra-Jigani Link Road, Bengaluru","second":{"first":12.8066319,"second":77.6628896},"state":"Karnataka"},{"first":"Kodagu Institute of Medical Sciences (KOIMS), Kodagu District","second":{"first":12.4416631,"second":75.74032079999999},"state":"Karnataka"},{"first":"Bidar Institute of Medical Sciences, Bidar","second":{"first":17.920267199999998,"second":77.51596529999999},"state":"Karnataka"},{"first":"Department of Lab Medicine, Narayana Hrudayalaya Ltd, 258\\/A, Bommasandra Industrial Area, Hosur Road, Bengaluru","second":{"first":12.8095815,"second":77.6954088},"state":"Karnataka"},{"first":"District Public Health Laboratory, Kolar District","second":{"first":13.129354600000001,"second":78.1343935},"state":"Karnataka"},{"first":"XCyton Diagnostics Pvt Ltd \u0013 Molecular Diagnostic Services, #449, 10th Cross, 4th phase, Peenya, Bengaluru","second":{"first":13.0221611,"second":77.50747199999999},"state":"Karnataka"},{"first":"Aster Clinical Lab LLP, No 24, Venkatappa Road, Tasker Town, Vasanthanagar, Bangalore","second":{"first":12.9868705,"second":77.5985106},"state":"Karnataka"},{"first":"Manipal Hospital, Bangalore","second":{"first":12.9583911,"second":77.6488364},"state":"Karnataka"},{"first":"Jayadeva Institute of Cardiac Sciences, Bangalor","second":{"first":12.9180748,"second":77.5992567},"state":"Karnataka"},{"first":"Cancyte Technologies Pvt Ltd, Sri Shankara Research Centre, Bengaluru","second":{"first":12.954387899999999,"second":77.5716575},"state":"Karnataka"},{"first":"Gulbarga Institute of Medical Sciences, Gulbarga","second":{"first":17.32723,"second":76.844089},"state":"Karnataka"},{"first":"Shivamogga Institute of Medical Sciences, Shivamogga","second":{"first":13.932652599999999,"second":75.5668522},"state":"Karnataka"},{"first":"Bangalore Bruhat Mahanagara Palike (BBMP) Health Centre (Fever Clinic),Adugodi, Bangalore","second":{"first":12.943892499999999,"second":77.6077983},"state":"Karnataka"},{"first":"United Hospitals, Kalburgi","second":{"first":17.3207487,"second":76.8264666},"state":"Karnataka"},{"first":"MIMS Lab Services, Govindapuram, Kozhikode","second":{"first":11.2457941,"second":75.79865900000001},"state":"Kerala"},{"first":" Micro Health LAbs, MPS Tower, Kozhikode","second":{"first":11.2583129,"second":75.7946825},"state":"Kerala"},{"first":"Government Medical College Hospital,Kollam","second":{"first":8.8107014,"second":76.74883849999999},"state":"Kerala"},{"first":"Dane Diagnostics Pvt Ltd, 18\\/757 (1), RC Road, Palakkad","second":{"first":10.7674478,"second":76.6509303},"state":"Kerala"},{"first":"District TB Centre, Palakkad","second":{"first":10.7692793,"second":76.65895739999999},"state":"Kerala"},{"first":"Govt. Medical College, Kannur","second":{"first":12.0715235,"second":75.2917689},"state":"Kerala"},{"first":"Indian Institute of Science Education and Research (IISER), Thiruvananthapuram","second":{"first":8.6822865,"second":77.1364649},"state":"Kerala"},{"first":"Govt. Medical College, Kozhikode","second":{"first":11.272210999999999,"second":75.83719789999999},"state":"Kerala"},{"first":"Govt. Medical College, Manjeri","second":{"first":11.1162875,"second":76.1206038},"state":"Kerala"},{"first":"Rajagiri Hospital Laboratory Services, Rajagiri Hospital, Chunangamvely, Aluva","second":{"first":10.087577399999999,"second":76.388091},"state":"Kerala"},{"first":"Rajiv Gandhi Center for Biotechnology, Thiruvanathapuram","second":{"first":8.4923544,"second":76.9668745},"state":"Kerala"},{"first":"Government TD Medical College, Alappuzha","second":{"first":9.4081174,"second":76.347421},"state":"Kerala"},{"first":"Sree Chitra Tirunal Institute of Medical Sciences, Thiruvanathapuram","second":{"first":8.521174499999999,"second":76.9264073},"state":"Kerala"},{"first":"Microbiology Section, Department Of Laboratory Medicine, Kerala Instittute Of Medical Sciences, Anamukham, Anayara P.O. Thiruvananthapuram","second":{"first":8.5137921,"second":76.90938249999999},"state":"Kerala"},{"first":"Dept of Pathology and Lab Medicine, Aster Medcity, Aster DM Healthcare Ltd, Kutty Sahib Road, Kothad, Cochin","second":{"first":10.0441078,"second":76.2778759},"state":"Kerala"},{"first":"Govt. Medical College, Kottayam","second":{"first":9.6324594,"second":76.5209663},"state":"Kerala"},{"first":"Lab Services of Amrita Institute of Medical Sciences & Research Centre, AIMS-Ponekkara, Kochi","second":{"first":10.0328676,"second":76.293069},"state":"Kerala"},{"first":"Govt. Medical College, Ernakulum","second":{"first":10.0523843,"second":76.3555755},"state":"Kerala"},{"first":"MVR Cancer Centre & Research\Institute, CP 13\\/516 B, C, Vellalaserri NIT (via), Poolacode, Kozhikode","second":{"first":11.2946726,"second":75.9472816},"state":"Kerala"},{"first":"212. Malabar Cancer Center, Thalassery","second":{"first":11.7493909,"second":75.52393889999999},"state":"Kerala"},{"first":"Regional Public Health Laboratory,Pathanamthitta","second":{"first":9.3365169,"second":76.7061911},"state":"Kerala"},{"first":"DDRC SRL Diagnostics Pvt Ltd, Panampilly Nagar, Ernakulam","second":{"first":9.9614712,"second":76.29280279999999},"state":"Kerala"},{"first":"Medivision Scan & Diagnostic Research Centre Pvt Ltd, Sreekandath Road, Kochi","second":{"first":9.9616058,"second":76.28962489999999},"state":"Kerala"},{"first":"Inter University, Kottayam","second":{"first":9.5752366,"second":76.5789463},"state":"Kerala"},{"first":"213. Central University of Kerala, Periye, Kasaragod","second":{"first":12.392907099999999,"second":75.0916816},"state":"Kerala"},{"first":"State Public Health Laboratory, Trivandrum","second":{"first":8.498272,"second":76.9394667},"state":"Kerala"},{"first":"Govt. Medical College, Thiruvanathapuram","second":{"first":8.523432,"second":76.9282855},"state":"Kerala"},{"first":"NIMS Medicity, Department of Laboratory Medicine, Aralumoodu, Neyyattinkara, Thiruvananthapuram","second":{"first":8.4123433,"second":77.0664386},"state":"Kerala"},{"first":"Regional Cancer Centre, Thiruvananthapuram","second":{"first":8.5208616,"second":76.9247594},"state":"Kerala"},{"first":"INHS Sanjivani, Koch","second":{"first":9.9468411,"second":76.28266239999999},"state":"Kerala"},{"first":"National Institute of Virology, Field Unit, Allapuzzha","second":{"first":9.4185125,"second":76.3431999},"state":"Kerala"},{"first":"Govt. Medical College, Thrissur","second":{"first":10.6144974,"second":76.1960673},"state":"Kerala"},{"first":"Believers Church Medical College Laboratory, St Thomas Nagar, Kuttapuzha P.O., Thiruvalla","second":{"first":9.4167481,"second":76.5750611},"state":"Kerala"},{"first":"District Public Health Laboratory, Wayanad","second":{"first":11.8006055,"second":76.0019428},"state":"Kerala"},{"first":"Indira Gandhi Hospital, Kavaratti Island","second":{"first":10.561276,"second":72.63747649999999},"state":"Lakshadweep"},{"first":"Lakshadweep Medical Store, Kochi","second":{"first":9.9673841,"second":76.26520889999999},"state":"Lakshadweep"},{"first":"Rajiv Gandhi Specialty Hospital, Agatti","second":{"first":10.865729199999999,"second":72.1935962},"state":"Lakshadweep"},{"first":"Sonam Nurboo Memorial Hospital, Leh","second":{"first":34.1534817,"second":77.5806212},"state":"Leh-Ladakh"},{"first":"Netaji Subhash Chandra Bose Medical College, Jabalpur","second":{"first":23.1499818,"second":79.8807326},"state":"Madhya Pradesh"},{"first":"District Hospital, Dhar","second":{"first":22.6012922,"second":75.3024655},"state":"Madhya Pradesh"},{"first":"Government Medical College, Khandwa","second":{"first":21.848006299999998,"second":76.35051729999999},"state":"Madhya Pradesh"},{"first":"District Hospital Morena","second":{"first":26.496191099999997,"second":77.99861840000001},"state":"Madhya Pradesh"},{"first":"Lab Medicine, Bansal Hospital, A unit of Ayushman Medical Diagnostics Pvt Ltd, C-sector Shahpura, Bhopal","second":{"first":23.1994795,"second":77.4199205},"state":"Madhya Pradesh"},{"first":"District Hospital, Alirazpur","second":{"first":22.311675599999997,"second":74.3554054},"state":"Madhya Pradesh"},{"first":"District Hospital, Mandsaur","second":{"first":24.070973499999997,"second":75.0711109},"state":"Madhya Pradesh"},{"first":"District Hospital, Khandwa","second":{"first":21.8242673,"second":76.3435271},"state":"Madhya Pradesh"},{"first":"District Hospital, Shahdol","second":{"first":23.299641599999998,"second":81.35211410000001},"state":"Madhya Pradesh"},{"first":"CHC, Pipariya","second":{"first":22.752214199999997,"second":78.3541971},"state":"Madhya Pradesh"},{"first":"District Hospital, Ashok Nagar","second":{"first":13.034833299999999,"second":80.2075201},"state":"Madhya Pradesh"},{"first":"Bundelkhand Medical College, Sagar","second":{"first":23.818953,"second":78.7548826},"state":"Madhya Pradesh"},{"first":"Sampurna Sodani Diagnostic Clinic, LG-1, Morya Centre, 16\\/1, Race Course Road, Indore","second":{"first":22.726309999999998,"second":75.87934899999999},"state":"Madhya Pradesh"},{"first":"District Hospital, Shajapur","second":{"first":23.4211483,"second":76.2747887},"state":"Madhya Pradesh"},{"first":"Government Medical College, Ratlam","second":{"first":23.3713105,"second":75.0232054},"state":"Madhya Pradesh"},{"first":"District Hospital, Dindori","second":{"first":22.9460379,"second":81.07528549999999},"state":"Madhya Pradesh"},{"first":"District Hospital Tikamgarh","second":{"first":24.757304899999998,"second":78.8340266},"state":"Madhya Pradesh"},{"first":"JSR Hospital, Itarsi","second":{"first":22.610722400000004,"second":77.7631798},"state":"Madhya Pradesh"},{"first":"District Hospital, Panna","second":{"first":24.7120671,"second":80.1812733},"state":"Madhya Pradesh"},{"first":"IISER, Bhopal","second":{"first":23.288350299999998,"second":77.2757147},"state":"Madhya Pradesh"},{"first":"Sri Aurobindo Institute of Medical Sciences, Indore","second":{"first":22.796953499999997,"second":75.8451565},"state":"Madhya Pradesh"},{"first":"Gandhi Medical College, Bhopal","second":{"first":23.2599254,"second":77.3909592},"state":"Madhya Pradesh"},{"first":"L. N. Medical College & J. K. Hospital, Bhopal","second":{"first":23.1713089,"second":77.4254843},"state":"Madhya Pradesh"},{"first":"District Hospital, Sidhi","second":{"first":24.4127244,"second":81.8807676},"state":"Madhya Pradesh"},{"first":"District Hospital, Ujjain","second":{"first":23.185364399999997,"second":75.7829783},"state":"Madhya Pradesh"},{"first":"Mahatma Gandhi Memorial Medical College, Indore","second":{"first":22.714332,"second":75.88287849999999},"state":"Madhya Pradesh"},{"first":"District Hospital, Khargone","second":{"first":21.831574399999997,"second":75.6298226},"state":"Madhya Pradesh"},{"first":"District Hospital, Rewa","second":{"first":24.5211202,"second":81.30367989999999},"state":"Madhya Pradesh"},{"first":"District Hospital, Jhabua","second":{"first":22.7730067,"second":74.59120639999999},"state":"Madhya Pradesh"},{"first":"Chirayu Medical College & Hospital, Bhopal Indore Highway, Bhaisakhedi, Bhopal","second":{"first":23.268915699999997,"second":77.30807460000001},"state":"Madhya Pradesh"},{"first":"Central Lab, MZ 117-118, Yeshwant Plaza, Indore","second":{"first":22.718383199999998,"second":75.86959879999999},"state":"Madhya Pradesh"},{"first":"Bhopal Memorial Hospital & research Centre, Bhopal","second":{"first":23.3045165,"second":77.4219374},"state":"Madhya Pradesh"},{"first":"District Hospital, Harda","second":{"first":22.3405846,"second":77.09342250000002},"state":"Madhya Pradesh"},{"first":"District Hospital, Agarmalwa","second":{"first":23.725176599999998,"second":75.99218859999999},"state":"Madhya Pradesh"},{"first":"District Hospital, Umaria","second":{"first":23.525986,"second":80.8345428},"state":"Madhya Pradesh"},{"first":"District Hospital, Neemuch","second":{"first":24.4608694,"second":74.87538359999999},"state":"Madhya Pradesh"},{"first":"District Hospital, Sehore","second":{"first":23.198387,"second":77.0812717},"state":"Madhya Pradesh"},{"first":"District Hospital Chhatarpur","second":{"first":24.906779,"second":79.5841536},"state":"Madhya Pradesh"},{"first":"District Hospital, Guna","second":{"first":24.6490927,"second":77.30497969999999},"state":"Madhya Pradesh"},{"first":"District Tuberculosis Centre, Indore","second":{"first":22.7194247,"second":75.84717289999999},"state":"Madhya Pradesh"},{"first":"District Hospital, Satna","second":{"first":24.568334099999998,"second":80.8320856},"state":"Madhya Pradesh"},{"first":"SS Medical College, Rewa","second":{"first":24.531702799999998,"second":81.29971239999999},"state":"Madhya Pradesh"},{"first":"District Hospital, Dewas","second":{"first":22.9668174,"second":76.0600515},"state":"Madhya Pradesh"},{"first":"District Hospital Sagar","second":{"first":23.8226576,"second":78.7550595},"state":"Madhya Pradesh"},{"first":"District Hospital Chhindwara","second":{"first":22.052252499999998,"second":78.93695629999999},"state":"Madhya Pradesh"},{"first":"District Hospital, Shivpuri","second":{"first":25.4248271,"second":77.6513028},"state":"Madhya Pradesh"},{"first":"District Tuberculosis Centre, Raisen","second":{"first":23.3327329,"second":77.7823973},"state":"Madhya Pradesh"},{"first":"District Hospital, Singrauli","second":{"first":24.067637599999998,"second":82.6282949},"state":"Madhya Pradesh"},{"first":"District Hospital, Burhanpur","second":{"first":21.308408999999997,"second":76.2094324},"state":"Madhya Pradesh"},{"first":"All India Institute of Medical Sciences, Bhopal","second":{"first":23.2067582,"second":77.4601622},"state":"Madhya Pradesh"},{"first":"District Hospital, Sheopur","second":{"first":25.6758815,"second":76.71175889999999},"state":"Madhya Pradesh"},{"first":"Central Pathology Laboratory, People's Hospital, Bhanpur, Bhopal-462037","second":{"first":23.301465999999998,"second":77.4197101},"state":"Madhya Pradesh"},{"first":"Atal Bihari Vajpayee Government Medical College (ABVGMC), Vidisha","second":{"first":23.515411,"second":77.8011002},"state":"Madhya Pradesh"},{"first":"District Hospital, Datia","second":{"first":25.687238299999997,"second":78.4422165},"state":"Madhya Pradesh"},{"first":"District Hospital, Bhind","second":{"first":26.566007900000002,"second":78.78268419999999},"state":"Madhya Pradesh"},{"first":"Central Research Lab, R D Gardi Medical College, Surasa, Ujjain","second":{"first":23.2327633,"second":75.8115614},"state":"Madhya Pradesh"},{"first":"District Hospital, Jabalpur","second":{"first":23.1719084,"second":79.9370435},"state":"Madhya Pradesh"},{"first":"District Tuberculosis Centre, Bhopal","second":{"first":23.2581266,"second":77.40780099999999},"state":"Madhya Pradesh"},{"first":"District Hospital Damoh","second":{"first":23.8334232,"second":79.4411934},"state":"Madhya Pradesh"},{"first":"District Tuberculosis Centre, Mandla","second":{"first":22.5979218,"second":80.3713855},"state":"Madhya Pradesh"},{"first":"District Hospital Gwalior","second":{"first":26.223713699999998,"second":78.2234016},"state":"Madhya Pradesh"},{"first":"District Hospital, Seoni","second":{"first":22.095639199999997,"second":79.551266},"state":"Madhya Pradesh"},{"first":"ICMR-National Institute for Research on Tribal Health, Jabalpur","second":{"first":23.1472217,"second":79.8785864},"state":"Madhya Pradesh"},{"first":"District Hospital, Barwani","second":{"first":22.034475699999998,"second":74.8998405},"state":"Madhya Pradesh"},{"first":"District Hospital, Vidisha","second":{"first":23.5202039,"second":77.8083755},"state":"Madhya Pradesh"},{"first":"District Hospital, Rajgarh","second":{"first":24.007019900000003,"second":76.7292392},"state":"Madhya Pradesh"},{"first":"ICAR-NIHSAD, Bhopal","second":{"first":23.2639931,"second":77.4968083},"state":"Madhya Pradesh"},{"first":"Defence Research & Development Organization, Gwalior","second":{"first":26.2226213,"second":78.18102619999999},"state":"Madhya Pradesh"},{"first":"Dept of Lab Medicine, Dr. Balabhai Nanavati Hospital, Swami Vivekananda Road, Mumbai","second":{"first":19.0959269,"second":72.8401201},"state":"Maharashtra"},{"first":"Clinicare Speciality Laboratory Pvt. Ltd.,Lata Mangeshkar Hospital, Nagpur","second":{"first":21.1449151,"second":79.0801755},"state":"Maharashtra"},{"first":"Su-Vishwas Diagnostic Lab, 1st floor Midas height, Ramdaspeth, Nagpur","second":{"first":21.132253499999997,"second":79.0686604},"state":"Maharashtra"},{"first":"Sahyadri Speciality Labs, Plot No 54, S.No. 89-90, Lokmanya Colony, Kothrud, Pune","second":{"first":18.5077536,"second":73.80441859999999},"state":"Maharashtra"},{"first":"ICMR-National AIDS Research Institute, Pune","second":{"first":18.6237002,"second":73.8362085},"state":"Maharashtra"},{"first":"Swami Ramanand Teerth Marathwada University, Nanded","second":{"first":19.102196,"second":77.2843176},"state":"Maharashtra"},{"first":"Intermediate Reference Laboratory, Nagpur","second":{"first":21.1284891,"second":79.09233820000001},"state":"Maharashtra"},{"first":"Government Medical College, Yavatmal","second":{"first":20.3952396,"second":78.11866940000002},"state":"Maharashtra"},{"first":"Govt. Medical College, Aurangabad","second":{"first":19.8899963,"second":75.3181535},"state":"Maharashtra"},{"first":"Sunflower Lab & Diagnostic Center, Keshav Kunj, Marve Road, Malad West, Mumbai","second":{"first":19.1928843,"second":72.84168629999999},"state":"Maharashtra"},{"first":"InfeXn Laboratories Private Limited, A\\/131, Therelek Compound, Road No 23, Wagle Industrial Estate, Thane (W)","second":{"first":19.1950362,"second":72.9485606},"state":"Maharashtra"},{"first":"Vaidya Lab Thane, Unit of Millenium Special Lab Pvt Ltd, Odyssey Park, 2nd Floor, 201, Raghunath Nagar, Wagle Estate, Thane","second":{"first":19.1912377,"second":72.9568125},"state":"Maharashtra"},{"first":"District General Hospital, Ahmednagar","second":{"first":19.1084298,"second":74.7353627},"state":"Maharashtra"},{"first":"Bharati Vidyapeeth (Deemed to beUniversity) Medical College, Pune","second":{"first":18.4569217,"second":73.85617309999999},"state":"Maharashtra"},{"first":"Dept of Molecular Biology & Genetics, Krishna Institute of Medical Sciences, Karad, Satara","second":{"first":17.2610979,"second":74.1763275},"state":"Maharashtra"},{"first":"Command Hospital (SC), Pune","second":{"first":18.501422299999998,"second":73.89048369999999},"state":"Maharashtra"},{"first":"Vilasrao Deshmukh Govt. Institute of Medical Sciences, Latur","second":{"first":18.3967283,"second":76.5775294},"state":"Maharashtra"},{"first":"Dr Ajay Shah's Pathology Lab & Microbiology Reference Center, 1st Floor,Amidrashti, Opposite Manav Kalyan Kendra, S V Road, Dahisar East. Mumbai","second":{"first":19.255478900000004,"second":72.8644288},"state":"Maharashtra"},{"first":"Navi Mumbai Municipal Corporation General Hospital, F.R.U. Vashi","second":{"first":19.0828568,"second":72.99621139999999},"state":"Maharashtra"},{"first":"RCSM Govt. Medical College, Kolhapur","second":{"first":16.671586599999998,"second":74.2346105},"state":"Maharashtra"},{"first":"Sub district Hospital, Shahapur, Thane","second":{"first":19.453926100000004,"second":73.32765429999999},"state":"Maharashtra"},{"first":"Darasha Maternity Home, Solapur Municipal Corporation, Solapur","second":{"first":17.669418999999998,"second":75.900457},"state":"Maharashtra"},{"first":"Kokilaben Dhirubhai Ambani Hospital Laboratory, Four Bungalows, Mumbai","second":{"first":19.1312542,"second":72.8250636},"state":"Maharashtra"},{"first":"Thyrocare Technologies Limited, D37\\/1, TTC MIDC, Turbhe, Navi Mumbai","second":{"first":19.0617955,"second":73.02560989999999},"state":"Maharashtra"},{"first":"District General Hospital, Ratnagiri","second":{"first":16.989092,"second":73.2992651},"state":"Maharashtra"},{"first":"Dr. Jariwala Lab & Diagnostics LLP, 1st Floor, Rasraj Heights, Rokadia Lane, Off Mandpeshwar Road, Borivli (W), Mumbai","second":{"first":19.2359918,"second":72.8565622},"state":"Maharashtra"},{"first":"D. Y. Patil Medical College, Kolhapur","second":{"first":16.729044899999998,"second":74.2437309},"state":"Maharashtra"},{"first":"Mahatma Gandhi Institute of Medical Sciences, Sevagram, Wardha","second":{"first":20.7390579,"second":78.6606506},"state":"Maharashtra"},{"first":"Government Medical College, Baramati","second":{"first":18.178815999999998,"second":74.59870289999999},"state":"Maharashtra"},{"first":"Qualilife Diagnostics, Balaji Arcade, 1st Floor, 544\\/A, Netaji Subhash Road, Mulund (W), Mumbai","second":{"first":19.176057099999998,"second":72.95376279999999},"state":"Maharashtra"},{"first":"Government Medical College, Gondia","second":{"first":21.4576356,"second":80.1955268},"state":"Maharashtra"},{"first":"Swami Ramanand Teerth Marathwada University, Nanded","second":{"first":19.102196,"second":77.2843176},"state":"Maharashtra"},{"first":"ICMR-National AIDS Research Institute, Pune","second":{"first":18.6237002,"second":73.8362085},"state":"Maharashtra"},{"first":"District Hospital, Satara","second":{"first":17.6913947,"second":74.0094581},"state":"Maharashtra"},{"first":"Sunflower Lab & Diagnostic Center, Keshav Kunj, Marve Road, Malad West, Mumbai","second":{"first":19.1928843,"second":72.84168629999999},"state":"Maharashtra"},{"first":"National Institute for Research on Reproductive Health, Mumbai","second":{"first":19.0024764,"second":72.84081090000001},"state":"Maharashtra"},{"first":"Metropolis Healthcare Ltd, Unit No. 409-416, 4th Floor, Commercial Building-1, Kohinoor Mall, Mumbai","second":{"first":19.0816601,"second":72.88632369999999},"state":"Maharashtra"},{"first":"*Tata Memorial Hospital, Mumbai","second":{"first":19.0049019,"second":72.84316860000001},"state":"Maharashtra"},{"first":"National Institute of Virology Field Unit, Mumbai","second":{"first":19.002077200000002,"second":72.8440002},"state":"Maharashtra"},{"first":"V. M. Government Medical College, Solapur","second":{"first":17.665311,"second":75.909637},"state":"Maharashtra"},{"first":"Shree Bhausaheb Hire Govt. Medical College, Dhule","second":{"first":20.8639536,"second":74.7623454},"state":"Maharashtra"},{"first":"District General Hospital, Gadchiroli","second":{"first":20.170204200000004,"second":79.9829117},"state":"Maharashtra"},{"first":"Suburban Diagnostics (India) Pvt. Ltd., 306, 307\\/T, 3rd Floor, Sunshine Bld., Andheri (W), Mumbai","second":{"first":19.1375933,"second":72.82547199999999},"state":"Maharashtra"},{"first":"Sant Gadge Baba Amravati University, Amravati","second":{"first":20.9369598,"second":77.804813},"state":"Maharashtra"},{"first":" Jupiter Hospital, Eastern Express Highway, Thane West","second":{"first":19.2097096,"second":72.97239309999999},"state":"Maharashtra"},{"first":"Govt. Medical College, Nagpur","second":{"first":21.126386999999998,"second":79.0964896},"state":"Maharashtra"},{"first":"Indira Gandhi Govt. Medical College, Nagpur","second":{"first":21.153418,"second":79.09397349999999},"state":"Maharashtra"},{"first":"Grant Medical College & Sir JJ Hospital, Mumbai","second":{"first":18.963068399999997,"second":72.8336083},"state":"Maharashtra"},{"first":"Swami Ramanand Teerth Rural Government Medical College, Ambajogai","second":{"first":18.7317373,"second":76.3717175},"state":"Maharashtra"},{"first":"INHS Ashvini, Mumba","second":{"first":18.9001523,"second":72.81523469999999},"state":"Maharashtra"},{"first":"SRL Diagnostics \u0013 Dr. Avinash Phadke (SRL Diagnostics Pvt Ltd), Mahalaxmi Engineering Estate, 2nd Floor, L.J. Cross Road No 1, KJ Khilnani High School, Mahim (West), Mumbai","second":{"first":18.9755046,"second":72.8067464},"state":"Maharashtra"},{"first":"Government Medical College, Baramati","second":{"first":18.178815999999998,"second":74.59870289999999},"state":"Maharashtra"},{"first":"A.G. Diagnostics Pvt Ltd, Nayantara Building, Pune","second":{"first":18.518819099999998,"second":73.8309266},"state":"Maharashtra"},{"first":"Model Rural Health Research Unit (MRHRU), Sub District Hospital, Agar, Dahanu, Palghar","second":{"first":19.998407,"second":72.7219765},"state":"Maharashtra"},{"first":"Dr. Jariwala Lab & Diagnostics LLP, 1st Floor, Rasraj Heights, Rokadia Lane, Off Mandpeshwar Road, Borivli (W), Mumbai","second":{"first":19.2359918,"second":72.8565622},"state":"Maharashtra"},{"first":"Government Medical College, Jalgaon","second":{"first":21.008802,"second":75.5675565},"state":"Maharashtra"},{"first":"Rural Medical College, Pravara Institute of Medical Sciences, Loni, Ahmednagar","second":{"first":19.5787469,"second":74.454341},"state":"Maharashtra"},{"first":"Rajiv Gandhi Medical College & CSM Hospital, Kalwa, Thane, Mumbai","second":{"first":19.1922165,"second":72.9867781},"state":"Maharashtra"},{"first":"Govt. Medical College, Akola","second":{"first":20.7025966,"second":77.001948},"state":"Maharashtra"},{"first":"MGM Medical College and Hospital, Navi Mumbai","second":{"first":19.016781299999998,"second":73.1049864},"state":"Maharashtra"},{"first":"Aditya Birla Memorial Hospital \u0013 Laboratory, Aditya Birla Marg, Chinchwad, Pune","second":{"first":18.625716,"second":73.774776},"state":"Maharashtra"},{"first":"National Centre for Cell Sciences, Pune","second":{"first":18.547192199999998,"second":73.83154789999999},"state":"Maharashtra"},{"first":"Kingsway Hospitals ((A Unit of SPANV Medisearch Lifesciences Pvt Ltd), 44,Kingsway Road, Nagpur","second":{"first":21.1545053,"second":79.0848889},"state":"Maharashtra"},{"first":"iGenetic Diagnostics Pvt Ltd, Krislon House, Andheri East, Mumbai","second":{"first":19.1102606,"second":72.8870881},"state":"Maharashtra"},{"first":"Kasturba Hospital for Infectious Diseases, Mumbai","second":{"first":18.9840364,"second":72.8298487},"state":"Maharashtra"},{"first":"Dr. Shankarrao Chavan Govt. Medical College, Nanded","second":{"first":19.1564144,"second":77.3131911},"state":"Maharashtra"},{"first":"Lab Services, Ayugen Biosciences Pvt Ltd, 562\\/1, Shivajinagar, Pune","second":{"first":18.522793399999998,"second":73.850045},"state":"Maharashtra"},{"first":"Sir H.N. Reliance Foundation Hospital and Research Centre, Molecular Medicine, Reliance Life Sciences Pvt. Ltd., R-282, TTC Industrial Area, Rabale, Navi Mumbai","second":{"first":19.139211,"second":73.00445719999999},"state":"Maharashtra"},{"first":"Government Medical College, Miraj","second":{"first":16.837025399999998,"second":74.64740069999999},"state":"Maharashtra"},{"first":"Daga Memorial Government Women Hospital, Nagpur","second":{"first":21.1531162,"second":79.1034421},"state":"Maharashtra"},{"first":"Nagpur Veterinary College, MAFSU, Nagpur","second":{"first":21.1652176,"second":79.04597369999999},"state":"Maharashtra"},{"first":"BJ Medical College, Pune","second":{"first":18.526328499999998,"second":73.8711843},"state":"Maharashtra"},{"first":"Ruby Hall Clinic, Dept of Laboratory, Grant Medical Foundation, 40, Sassoon Road, Pune","second":{"first":18.5333826,"second":73.87701729999999},"state":"Maharashtra"},{"first":"Indian Institute of Science Education and Research (IISER), Pune","second":{"first":18.5474556,"second":73.80759259999999},"state":"Maharashtra"},{"first":"Civil Surgeon, District Hospital, Parbhani","second":{"first":19.271434799999998,"second":76.7646433},"state":"Maharashtra"},{"first":"Rajiv Gandhi Medical College & CSM Hospital, Kalwa, Thane, Mumbai","second":{"first":19.1922165,"second":72.9867781},"state":"Maharashtra"},{"first":"Department of Laboratory Medicine \u0013 P.D. Hinduja National Hospital and Medical Research Centre, Veer Savarkar Marg, Mahim, Mumbai","second":{"first":19.033512899999998,"second":72.8383377},"state":"Maharashtra"},{"first":"District Hospital, Amravati","second":{"first":20.933263999999998,"second":77.7607687},"state":"Maharashtra"},{"first":"Government Medical College, Chandrapur","second":{"first":19.964218499999998,"second":79.2916094},"state":"Maharashtra"},{"first":"Aditya Birla Memorial Hospital \u0013 Laboratory, Aditya Birla Marg, Chinchwad, Pune","second":{"first":18.625716,"second":73.774776},"state":"Maharashtra"},{"first":"Jupiter Lifeline Hospitals Limited, Pune","second":{"first":18.5656195,"second":73.786047},"state":"Maharashtra"},{"first":"Genepath Diagnostics India Pvt Ltd, 4th Floor, Above Phadke Hospital, Pune","second":{"first":18.5182496,"second":73.8439868},"state":"Maharashtra"},{"first":"Armed Forces Medical College, Pune","second":{"first":18.5040375,"second":73.8900961},"state":"Maharashtra"},{"first":"Metropolis Healthcare Limited, Construction House, 796\\/189-B, Bhandarkar Institute Road, Pune","second":{"first":18.5180908,"second":73.83443249999999},"state":"Maharashtra"},{"first":"Tata Memorial Centre ACTREC, Mumbai","second":{"first":19.0652582,"second":73.0647597},"state":"Maharashtra"},{"first":"Agharkar Research Institute, Pune","second":{"first":18.5206977,"second":73.8316018},"state":"Maharashtra"},{"first":"Govt. Medical College, Chandrapur","second":{"first":19.964218499999998,"second":79.2916094},"state":"Maharashtra"},{"first":"Daignostic Molecular Laboratory, Dept of Microbiology, Dr. Vasantrao Pawar Medical College Hospital & Research Centre, Vasantdada Nagar, Adgaon, Nashik","second":{"first":20.0343938,"second":73.85446449999999},"state":"Maharashtra"},{"first":"Dhruv Pathology and Molecular Diagnostic Lab, Third Floor, Aditya Enclave, Central Bazaar Road, Ramdaspeth, Nagpur","second":{"first":21.1336119,"second":79.074564},"state":"Maharashtra"},{"first":"National Environmental Engineering Research Institute, Nagpur","second":{"first":21.1224193,"second":79.0714088},"state":"Maharashtra"},{"first":"SRL Limited, Prime Square Building, Plot No 1, Gaiwadi Industrial Estate, SV Road, Goregaon, Mumbai","second":{"first":19.1713976,"second":72.845615},"state":"Maharashtra"},{"first":"Metropolis Healthcare Limited, Shop No. 1, Ground Floor, Ahilya Building, Savarkar Marg, Thane West, Thane","second":{"first":19.194198500000002,"second":72.97141260000001},"state":"Maharashtra"},{"first":"Krsnaa Diagnostics Pvt Ltd, Lt. Jayabai Nanasaheb Sutar Maternity Home, Pune","second":{"first":18.6387336,"second":73.7947073},"state":"Maharashtra"},{"first":"All India Institute of Medical Sciences, Nagpur","second":{"first":21.101212399999998,"second":79.0019684},"state":"Maharashtra"},{"first":"Intermediate Reference Laboratory, Pune","second":{"first":18.5759009,"second":73.8069188},"state":"Maharashtra"},{"first":"Haffkine Institute, Mumbai","second":{"first":19.0054125,"second":72.8395771},"state":"Maharashtra"},{"first":"Govt. Medical College, Yavatmal","second":{"first":20.396062,"second":78.119311},"state":"Maharashtra"},{"first":"Molecular Diagnostic Laboratory, Department of Pathology, LMMF's Deenanath Mangeshkar Hospital and Research Center, Erandwane, Pune","second":{"first":18.5021815,"second":73.8321653},"state":"Maharashtra"},{"first":"Seth GS Medical College & KEM Hospital, Mumbai","second":{"first":19.0024531,"second":72.8422882},"state":"Maharashtra"},{"first":"Jawaharlal Nehru Institute of Med. Sciences, Imphal-East, Manipur","second":{"first":24.810074399999998,"second":93.9611346},"state":"Manipur"},{"first":"Regional Institute of Medical Sciences, Imphal","second":{"first":24.8158998,"second":93.92280509999999},"state":"Manipur"},{"first":"Civil Hospital, Tura","second":{"first":25.5146849,"second":90.20374059999999},"state":"Meghalaya"},{"first":"Pasteur Institute, Shillong","second":{"first":25.586908599999997,"second":91.8862685},"state":"Meghalaya"},{"first":"North Eastern Indira Gandhi Regional Institute of Health & Medical Sciences, Shillong, Meghalaya","second":{"first":25.5907284,"second":91.93983689999999},"state":"Meghalaya"},{"first":"Civil Hospital, Lunglei","second":{"first":22.8863676,"second":92.7441089},"state":"Mizoram"},{"first":"Zoram Medical College","second":{"first":23.622876299999998,"second":92.7279958},"state":"Mizoram"},{"first":"State Referral BSL-3 Laboratory, Naga Hospital, Kohima","second":{"first":25.669330799999997,"second":94.0959967},"state":"Nagaland"},{"first":"CHC, Jalunkie, Nagaland","second":{"first":25.656984599999998,"second":93.66656019999999},"state":"Nagaland"},{"first":"District Hospital, Longleng","second":{"first":26.4929337,"second":94.80424359999999},"state":"Nagaland"},{"first":"District Hospital, Phek","second":{"first":25.7101397,"second":94.4642466},"state":"Nagaland"},{"first":"District Hospital, Kiphire","second":{"first":25.8825011,"second":94.7816541},"state":"Nagaland"},{"first":"Imkongliba Memorial District Hospital, Mokokchung","second":{"first":26.3188912,"second":94.5207513},"state":"Nagaland"},{"first":"District Hospital, Zunheboto","second":{"first":26.002962,"second":94.5235864},"state":"Nagaland"},{"first":"District Hospital, Tuensang","second":{"first":26.2529564,"second":94.8178428},"state":"Nagaland"},{"first":"District Hospital, Dimapur, Nagaland","second":{"first":25.905077799999997,"second":93.7316085},"state":"Nagaland"},{"first":"District Hospital, Wokha","second":{"first":26.078955099999998,"second":94.2592142},"state":"Nagaland"},{"first":"Tribal Field Unit of RMRC, Bhawanipatna, Kalahandi","second":{"first":20.3166497,"second":85.81950499999999},"state":"Odisha"},{"first":"InDNA Life Sciences Pvt Ltd, 2nd Floor, KIIT TBI, Bhubaneswar","second":{"first":20.3435182,"second":85.8195841},"state":"Odisha"},{"first":"MKCG Medical College, Berhampur","second":{"first":19.3076088,"second":84.8109694},"state":"Odisha"},{"first":"Tribal Field Unit of RMRC, Rayagada","second":{"first":19.164367199999997,"second":83.40770309999999},"state":"Odisha"},{"first":"All India Institute of Medical Sciences, Bhubaneshwar","second":{"first":20.2310782,"second":85.7750856},"state":"Odisha"},{"first":"Bhima Bhoi Medical College and Hospital, Bolangir","second":{"first":20.7047293,"second":83.4524723},"state":"Odisha"},{"first":"ICMR-Regional Medical Research Centre, Bhubaneshwar (High-throughput Laboratory)","second":{"first":20.3166497,"second":85.81950499999999},"state":"Odisha"},{"first":"Fakir Mohan Medical College and Hospital, Balasore","second":{"first":21.5208701,"second":86.8854779},"state":"Odisha"},{"first":"Kalinga Institute of Medical Science (KIMS),Dept. of Microbiology, Bhubaneswar","second":{"first":20.3534543,"second":85.8154183},"state":"Odisha"},{"first":"Central Lab, AMRI Hospitals, Plot No 1, Khandagiri, Bhubaneswar","second":{"first":20.2601426,"second":85.77743269999999},"state":"Odisha"},{"first":"Indian Institute of Science Education and Research (IISER), Berhampur","second":{"first":19.310521599999998,"second":84.82750639999999},"state":"Odisha"},{"first":"Ispat General Hospital, Rourkela","second":{"first":22.263417699999998,"second":84.8665443},"state":"Odisha"},{"first":"Veer Surendra Sai institute of Medical Science & Research, Sambalpur","second":{"first":21.4996577,"second":83.88613219999999},"state":"Odisha"},{"first":"Dept of Lab Services, Apollo Hospitals, Bhubaneswar","second":{"first":20.3057356,"second":85.8316663},"state":"Odisha"},{"first":"SCB Medical College and Hospital, Cuttack","second":{"first":20.4721281,"second":85.89152729999999},"state":"Odisha"},{"first":"ICAR- International Centre for Foot and Mouth Disease, Khordha, Odisha","second":{"first":20.1324175,"second":85.6763438},"state":"Odisha"},{"first":"SLN Medical College and Hospital, Koraput","second":{"first":18.8073422,"second":82.70403879999999},"state":"Odisha"},{"first":"Institute of Life Sciences, Bhubaneshwar","second":{"first":20.3140528,"second":85.8174579},"state":"Odisha"},{"first":"IMS & SUM Hospital, Bhubaneswar","second":{"first":20.282893899999998,"second":85.7696196},"state":"Odisha"},{"first":"Pandit Raghunath Murmu Medical College, Baripada","second":{"first":21.9098571,"second":86.790036},"state":"Odisha"},{"first":"Indira Gandhi Medical College, Puducherry","second":{"first":11.9404142,"second":79.79627909999999},"state":"Puducherry"},{"first":"Jawaharlal Institute of Postgraduate Medical Education & Research, Puducherry","second":{"first":11.950302299999999,"second":79.7996963},"state":"Puducherry"},{"first":"Intermediate Reference Laboratory, Government Hospital for Chest Diseases, Gorimedu, Puducherry","second":{"first":11.955718599999999,"second":79.79553279999999},"state":"Puducherry"},{"first":"Pondicherry Institute of Medical Sciences, Ganapathichettikulam, Kalapet, Puducherry","second":{"first":12.0462822,"second":79.8551148},"state":"Puducherry"},{"first":"District Hospital, Pathankot, Punjab","second":{"first":32.282202999999996,"second":75.65290379999999},"state":"Punjab"},{"first":"District Hospital, Barnala, Punjab","second":{"first":30.375537299999998,"second":75.5448298},"state":"Punjab"},{"first":"Govt. Medical College, Amritsar","second":{"first":31.6538532,"second":74.8852258},"state":"Punjab"},{"first":"Dr Bhasin Path labs , A 96,97,98, Ranjit Avenue , Amritsar","second":{"first":31.646453899999997,"second":74.85720289999999},"state":"Punjab"},{"first":"Tuli Diagnostic Centre, Majitha Road, Amritsar","second":{"first":31.653323999999998,"second":74.88758},"state":"Punjab"},{"first":"Christian Medical College, Ludhiana","second":{"first":30.9109706,"second":75.8636308},"state":"Punjab"},{"first":"Guru Gobind Singh Medical University, Faridkot","second":{"first":30.682278800000002,"second":74.7472873},"state":"Punjab"},{"first":"Govt. Medical College, Patiala","second":{"first":30.328062700000004,"second":76.3851284},"state":"Punjab"},{"first":"District Hospital, Mansa, Punjab","second":{"first":29.985317100000003,"second":75.4031728},"state":"Punjab"},{"first":"District Hospital, Jalandhar, Punjab","second":{"first":31.32627,"second":75.5730449},"state":"Punjab"},{"first":"Department of Microbiology, Dayanand Medical College & Hospital, Tagore Nagar, Civil Lines, Ludhiana","second":{"first":30.9142697,"second":75.82288989999999},"state":"Punjab"},{"first":"District Hospital, Ludhiana, Punjab","second":{"first":30.920675000000003,"second":75.816667},"state":"Punjab"},{"first":"IRL, Patiala","second":{"first":30.339780899999997,"second":76.3868797},"state":"Punjab"},{"first":"Government BDK District Hospital, Jhunjhunu","second":{"first":28.116822199999998,"second":75.3949931},"state":"Rajasthan"},{"first":"Brig T.K. Narayanan Dept of Pathology, Santokaba Durlabhji Memorial Hospital Cum Medical Research Institute, Jaipur (TruNat and RTPCR)","second":{"first":26.8934581,"second":75.8125258},"state":"Rajasthan"},{"first":"National Institute for Implementation Research on Non-Communicable Diseases, Jodhpur","second":{"first":26.233308899999997,"second":73.0265256},"state":"Rajasthan"},{"first":"RNT Medical College, Udaipur","second":{"first":24.588215,"second":73.6949805},"state":"Rajasthan"},{"first":"Dr. Sampurnan and Medical College, Jodhpur","second":{"first":26.2694214,"second":73.007409},"state":"Rajasthan"},{"first":"Rajasthan University of Health Sciences Medical College, Jaipur","second":{"first":26.7975004,"second":75.8265747},"state":"Rajasthan"},{"first":"JLN Medical College, Ajmer","second":{"first":26.4672983,"second":74.63633999999999},"state":"Rajasthan"},{"first":"Dr. B Lal Clinical Lab Pvt Ltd, 6-E, Malviya Industrial Area, Malviya Nagar, Jaipur","second":{"first":26.856686699999997,"second":75.8272614},"state":"Rajasthan"},{"first":"Government Medical College, Pali","second":{"first":25.7042498,"second":73.3220321},"state":"Rajasthan"},{"first":"Sawai Man Singh Medical College, Jaipur","second":{"first":26.9053839,"second":75.8188203},"state":"Rajasthan"},{"first":"Government Medical College, Dungarpur","second":{"first":23.8589946,"second":73.7117208},"state":"Rajasthan"},{"first":"SP Medical College, Bikaner","second":{"first":28.006388899999997,"second":73.3305142},"state":"Rajasthan"},{"first":"Govt. Medical College, Kota","second":{"first":25.123575799999998,"second":75.8296463},"state":"Rajasthan"},{"first":"Jaipur National University Institute for Medical Sciences and Research Centre, Jaipur","second":{"first":26.856718599999997,"second":75.87686029999999},"state":"Rajasthan"},{"first":"Government Medical College, Sikar","second":{"first":27.566889999999997,"second":75.156604},"state":"Rajasthan"},{"first":"Central Lab, The Mahatma Gandhi University of Medical Sciences and Technology, RIICO Institution Area, Sitapura, Tonk Road, Jaipur","second":{"first":26.770252499999998,"second":75.8543438},"state":"Rajasthan"},{"first":"RVRS Govt. Medical College, Bhilwara","second":{"first":25.3854561,"second":74.6823533},"state":"Rajasthan"},{"first":"Government Medical College, Bharatpur","second":{"first":27.193580700000002,"second":77.4712713},"state":"Rajasthan"},{"first":"Government Medical College, Barmer","second":{"first":25.7506664,"second":71.39522869999999},"state":"Rajasthan"},{"first":"Jhalawar Medical College, Jhalawar","second":{"first":24.5855602,"second":76.16103799999999},"state":"Rajasthan"},{"first":"Military Hospital, Jaipur","second":{"first":26.929195800000002,"second":75.78310739999999},"state":"Rajasthan"},{"first":"Pandit Deendayal Upadhyaya Medical College, Churu","second":{"first":28.284760799999997,"second":74.954747},"state":"Rajasthan"},{"first":"All India Institute of Medical Sciences, Jodhpu","second":{"first":26.240205099999997,"second":73.0049621},"state":"Rajasthan"},{"first":"District Hospital, Sirohi","second":{"first":24.8864484,"second":72.8593202},"state":"Rajasthan"},{"first":"Virus Research and Diagnostic Laboratory, STNM Hospital, Gangtok","second":{"first":27.3463885,"second":88.6034001},"state":"Sikkim"},{"first":"Intermediate Reference Laboratory,STNM Hospital, Gangtok","second":{"first":27.346462199999998,"second":88.603355},"state":"Sikkim"},{"first":"Govt. Medical College & Hospital, Omandurar Govt. Estate, Chennai","second":{"first":13.0673164,"second":80.27512159999999},"state":"Tamil Nadu"},{"first":"Madras Medical Mission Clinical Lab Services, 4-A, Dr. J. Jayalalitha Nagar, Mogappair East, Chennai","second":{"first":13.0861641,"second":80.1870842},"state":"Tamil Nadu"},{"first":"Pasteur Institute of India, Coonoor","second":{"first":11.3548891,"second":76.80199569999999},"state":"Tamil Nadu"},{"first":"Central Leather Research Institute, Adyar, Chennai","second":{"first":13.008338600000002,"second":80.24362409999999},"state":"Tamil Nadu"},{"first":"Metropolis Healthcare Limited, No 3, Jaganathan Road, Nungambakkam, Chennai","second":{"first":13.061433200000002,"second":80.24552059999999},"state":"Tamil Nadu"},{"first":"Neuberg Ehrlich Lab Pvt Ltd, 46-48 Masilamani Road, Balaji Nagar, Chennai","second":{"first":13.0485951,"second":80.266065},"state":"Tamil Nadu"},{"first":"Molecular Testing, Institute of Lab Medicine, Kovai Medical Center & Hospital, 99, Avinashi Road, Coimbatore","second":{"first":11.0424276,"second":77.0404049},"state":"Tamil Nadu"},{"first":"BioLine Laboratory, 43B-1, Cowley Brown Road, RS Puram, Coimbatore","second":{"first":11.0150674,"second":76.95053879999999},"state":"Tamil Nadu"},{"first":"Stanley Medical College, Chennai","second":{"first":13.1062709,"second":80.2866738},"state":"Tamil Nadu"},{"first":"ICMR-National Institute of Epidemiology, Chennai","second":{"first":13.100603099999999,"second":80.1397812},"state":"Tamil Nadu"},{"first":"Chengalpattu Government Medical College, Kancheepuram","second":{"first":12.6710248,"second":79.9803605},"state":"Tamil Nadu"},{"first":"Tirunelveli Medical College, Tirunelveli","second":{"first":8.7117515,"second":77.7508167},"state":"Tamil Nadu"},{"first":"Krsnaa Diagnostics Pvt Ltd, Krsnaa Diagnostics Coimbatore Medical College & Hospital, No 1619 A, Trichy Road,Coimbatore","second":{"first":10.9954383,"second":76.97015449999999},"state":"Tamil Nadu"},{"first":"Government Hospital of Thoracic Medicine, Tambaram Sanatorium, Chennai","second":{"first":12.942846999999999,"second":80.1330657},"state":"Tamil Nadu"},{"first":"Kumar Mangalam Govt. Medical College, Salem","second":{"first":11.6546272,"second":78.1522171},"state":"Tamil Nadu"},{"first":"Clinical Lab Services, Dr. Rela Institute & Medical Centre, #7, CLC Works Rd, Shankar Nagar, Chennai","second":{"first":12.9545368,"second":80.1350393},"state":"Tamil Nadu"},{"first":"Govt. Medical College, Thiruvarur","second":{"first":10.7755154,"second":79.6051714},"state":"Tamil Nadu"},{"first":"Lab Services, Apollo Speciality Hospitals, P 3, KK Nagar East 1st Street, Madurai","second":{"first":9.9283813,"second":78.1491289},"state":"Tamil Nadu"},{"first":"Hitech Diagnostic Centre- A Unit of Dr. Ganesan\u0019s Hitech Diagnostic Centre PVt Ltd, Poonamallee High Road, Chennai","second":{"first":13.0855529,"second":80.2504488},"state":"Tamil Nadu"},{"first":"Govt. Tiruvannamalai Medical College & Hospital, Tiruvannamalai","second":{"first":12.274286300000002,"second":79.07909959999999},"state":"Tamil Nadu"},{"first":"Madurai Medical College, Madurai","second":{"first":9.9275539,"second":78.13904},"state":"Tamil Nadu"},{"first":"Chettinad Hospital and Research Institute, Chengalpattu","second":{"first":12.7955747,"second":80.2157776},"state":"Tamil Nadu"},{"first":"Government District Headquarters Hospital, Tiruppur","second":{"first":11.0674833,"second":77.3649042},"state":"Tamil Nadu"},{"first":"Govt. Theni Medical College, Theni","second":{"first":10.0061925,"second":77.5536939},"state":"Tamil Nadu"},{"first":"Premier Health Center, Crescent Court, Ground Floor No 963, Poonamallee High Road, Purasawalkam, Chennai","second":{"first":13.079582799999999,"second":80.2575785},"state":"Tamil Nadu"},{"first":"King Institute of Preventive Medicine & Research, Chennai","second":{"first":13.012441299999999,"second":80.2176106},"state":"Tamil Nadu"},{"first":"Central Laboratory, Sree Balaji Medical College and Hospital, Chennai","second":{"first":12.9544923,"second":80.1378229},"state":"Tamil Nadu"},{"first":"PSG Hospitals Diagnostic Centre, Avinashi Road, Peelamedu, Coimbatore","second":{"first":11.0294727,"second":77.0256004},"state":"Tamil Nadu"},{"first":"Government Headquarters Hospital, Dindigul","second":{"first":10.3638935,"second":77.9763633},"state":"Tamil Nadu"},{"first":"Orbito Asia diagnostics, Puliyakulam road, Coimbatore","second":{"first":11.0089498,"second":76.9900091},"state":"Tamil Nadu"},{"first":"Nu-Med Labs, 15A, Nellukara Street, Kanchipuram","second":{"first":12.8369321,"second":79.7045217},"state":"Tamil Nadu"},{"first":"Dr. MGR Medical University, Chennai","second":{"first":13.009931199999999,"second":80.2182114},"state":"Tamil Nadu"},{"first":"Dept. of Clinical Virology, CMC, Vellore","second":{"first":12.924582299999999,"second":79.13473069999999},"state":"Tamil Nadu"},{"first":"Department of Laboratory Services, Apollo Hospitals Enterprise Ltd, Chennai","second":{"first":13.057273900000002,"second":80.25527919999999},"state":"Tamil Nadu"},{"first":"Sri Ramachandra Medical College & Research Institute, Porur, Chennai","second":{"first":13.0390634,"second":80.141937},"state":"Tamil Nadu"},{"first":"C.D Hospital, Greater Chennai Corporation, Chennai","second":{"first":13.004828199999999,"second":80.256922},"state":"Tamil Nadu"},{"first":"MIOT Hospitals \u0013 Dept of Lab Medicine, 4\\/112, Mount Poonamallee Road, Manapakkam, Chennai","second":{"first":13.0213295,"second":80.1856227},"state":"Tamil Nadu"},{"first":"Dept of Lab Medicine, Royalcare Super Speciality Hospital Ltd, 1\\/520, L&T Road, Neelambur, Coimbatore","second":{"first":11.0592587,"second":77.08950089999999},"state":"Tamil Nadu"},{"first":"Doctors\u0019 Diagnostic Centre, 123\\/1, Puthur High Road, Thiruchirapalli","second":{"first":10.8200981,"second":78.6766402},"state":"Tamil Nadu"},{"first":"Karpaga Vinayaga Institute of Medical Sciences, Madhuranthgam Chengalpet","second":{"first":12.5931792,"second":79.9113261},"state":"Tamil Nadu"},{"first":"Madras Medical College, Chennai","second":{"first":13.0799717,"second":80.2722928},"state":"Tamil Nadu"},{"first":"YRG CARE, Taramani, Chennai","second":{"first":13.0025312,"second":80.2468391},"state":"Tamil Nadu"},{"first":"Aarthi Scans and Labs. No 60, 100 feet road, Vadapalani, Chennai","second":{"first":13.051662799999999,"second":80.212375},"state":"Tamil Nadu"},{"first":"Anderson Diagnostics and Labs, Kilpauk","second":{"first":13.044787,"second":80.116006},"state":"Tamil Nadu"},{"first":"Meenakshi Labs Madurai A unit of Sunmed Healthcare Pvt Ltd, 2nd Floor, Meenakshi Mission Hospital and Research Centre, Madurai","second":{"first":9.9479215,"second":78.1625445},"state":"Tamil Nadu"},{"first":"State Public Health Laboratory, Chennai","second":{"first":13.046315,"second":80.2491932},"state":"Tamil Nadu"},{"first":"Rajah Muthiah Medical College, Chidambaram","second":{"first":11.3952473,"second":79.7160895},"state":"Tamil Nadu"},{"first":"Government Medical College and Hospital, Pudukkottai","second":{"first":10.409147,"second":78.8472425},"state":"Tamil Nadu"},{"first":"Dr. ALM PG Institute of Basic Medical Sciences, Chennai","second":{"first":12.9801054,"second":80.2446824},"state":"Tamil Nadu"},{"first":"Institute of Vector Control & Zoonoses, Hosur","second":{"first":12.754591,"second":77.81727099999999},"state":"Tamil Nadu"},{"first":"Balaji Medical Centre, Old No 18,New No 4,Jagadeeswaran Street, T.Nagar, Chennai","second":{"first":13.038589,"second":80.2390418},"state":"Tamil Nadu"},{"first":"Microbiology Lab, Veerakeralam Road, Coimbatore","second":{"first":11.0233539,"second":76.9104371},"state":"Tamil Nadu"},{"first":"Government Shivagangai Medical College, Shivagangai","second":{"first":9.8400868,"second":78.4789943},"state":"Tamil Nadu"},{"first":"K A P Viswanatham Govt. Medical College, Trichy","second":{"first":10.7976359,"second":78.6793029},"state":"Tamil Nadu"},{"first":"Thanjavur Medical College, Thanjavur","second":{"first":10.7586,"second":79.1066},"state":"Tamil Nadu"},{"first":"Kanyakumari Govt. Medical College, Nagercoil","second":{"first":8.1739367,"second":77.3962033},"state":"Tamil Nadu"},{"first":"Govt. Medical College, Vellore","second":{"first":12.845182099999999,"second":79.1370598},"state":"Tamil Nadu"},{"first":"Vivek Laboratories, 1159, K.P. Road, Nagercoil, Kanniyakumari","second":{"first":8.184652,"second":77.4104515},"state":"Tamil Nadu"},{"first":"Govt. Dharmapuri Medical College, Dharmapuri","second":{"first":12.1233883,"second":78.15750299999999},"state":"Tamil Nadu"},{"first":"Government Kallakruichi Hospital, Kallakurichi","second":{"first":11.737262399999999,"second":78.95936789999999},"state":"Tamil Nadu"},{"first":"Lifecell International Pvt Ltd, No 26, Vandalur \u0013 Kelambakkam Main Road, Keelakottaiyur, Chennai","second":{"first":12.838699,"second":80.1540217},"state":"Tamil Nadu"},{"first":"Government District Headquarters Hospital, Ramanathapuram","second":{"first":9.363638199999999,"second":78.831878},"state":"Tamil Nadu"},{"first":"Perundurai Medical College, Perundurai","second":{"first":11.2824824,"second":77.5661432},"state":"Tamil Nadu"},{"first":"National Institute for Research in Tuberculosis, Chennai","second":{"first":13.073165999999999,"second":80.24963199999999},"state":"Tamil Nadu"},{"first":"Government District Headquarters Hospital, Virrudhu Nagar","second":{"first":9.5883452,"second":77.961942},"state":"Tamil Nadu"},{"first":"Govt District Headquarters Hospital, Namakkal","second":{"first":11.2168195,"second":78.1685255},"state":"Tamil Nadu"},{"first":"Govt. Kilpauk Medical College, Chennai","second":{"first":13.078342699999999,"second":80.2438901},"state":"Tamil Nadu"},{"first":"Medall Healthcare Pvt Ltd, 17, Race View Colony, 2nd street, Race Course Road, Guindy, Chennai","second":{"first":13.0052756,"second":80.2112655},"state":"Tamil Nadu"},{"first":"Govt. Medical College & ESIC Hospital, Coimbatore","second":{"first":11.005986199999999,"second":77.0263909},"state":"Tamil Nadu"},{"first":"Govt. Medical College, Villupuram","second":{"first":11.994305899999999,"second":79.5152109},"state":"Tamil Nadu"},{"first":"Government District Headquarters Hospital, Tiruvallur","second":{"first":13.127557999999999,"second":79.91040699999999},"state":"Tamil Nadu"},{"first":"Clinical Lab Services, Sundaram Medical Foundation, Dr. Rangarajan Memorial Hospital, 9C, 4th Avenue, Shanthi Colony, Anna Nagar, Chennai","second":{"first":13.081963199999999,"second":80.2171469},"state":"Tamil Nadu"},{"first":"VRR Diagnostics, #87, Burkit Road, T. Nagar, Chennai","second":{"first":13.034858499999999,"second":80.231085},"state":"Tamil Nadu"},{"first":"Govt. Thoothukudi Medical College, Thoothukudi","second":{"first":8.7876212,"second":78.1203416},"state":"Tamil Nadu"},{"first":"Coimbatore Medical College, Coimbatore","second":{"first":11.0286992,"second":77.02390319999999},"state":"Tamil Nadu"},{"first":"Government District Headquarters Hospital, Ariyalur","second":{"first":11.1426345,"second":79.0697193},"state":"Tamil Nadu"},{"first":"VHS Lab Services, VHS Hospital, Rajiv Gandhi Salai, Taramani, Chennai","second":{"first":12.9503354,"second":80.2547005},"state":"Tamil Nadu"},{"first":"Government Medical College, Karur","second":{"first":10.9510694,"second":78.1012353},"state":"Tamil Nadu"},{"first":"Government Medical College, Agartala","second":{"first":23.860433200000003,"second":91.2927536},"state":"Tripura"},{"first":"King George Medical University, Lucknow","second":{"first":26.869259099999997,"second":80.91624019999999},"state":"Uttar Pradesh"},{"first":"BRD Medical College, Gorakhpur","second":{"first":26.813584000000002,"second":83.3999654},"state":"Uttar Pradesh"},{"first":" Uma Shankar Dixit Joint District Hospital, Unnao","second":{"first":26.538045999999998,"second":80.4784366},"state":"Uttar Pradesh"},{"first":"Bangla District Hospital, Hathras","second":{"first":27.599880499999998,"second":78.04986900000002},"state":"Uttar Pradesh"},{"first":"District Hospital, Ambedkar Nagar","second":{"first":26.446038299999998,"second":82.56140959999999},"state":"Uttar Pradesh"},{"first":"District Hospital, Agra","second":{"first":27.1996213,"second":78.020113},"state":"Uttar Pradesh"},{"first":"District Hospital, Ballia","second":{"first":25.7508065,"second":84.14746819999999},"state":"Uttar Pradesh"},{"first":"M.M.G District Hospital, Ghaziabad","second":{"first":28.662533,"second":77.4236047},"state":"Uttar Pradesh"},{"first":"S.S.P.G District Hospital, Varanasi","second":{"first":25.3210095,"second":83.008676},"state":"Uttar Pradesh"},{"first":"Indian Institute of Toxicology Research, Lucknow","second":{"first":26.8594062,"second":80.93055319999999},"state":"Uttar Pradesh"},{"first":"District Male Hospital, Pratapgarh","second":{"first":25.921730699999998,"second":81.9985665},"state":"Uttar Pradesh"},{"first":"Babu Mohan Singh, Joint District Hospital, Deoria","second":{"first":26.4956979,"second":83.78145339999999},"state":"Uttar Pradesh"},{"first":"Dept of Microbiology, Apollomedics Super Speciality Hospitals, KBC-31, Sector B, LDA Colony, Kanpur Road, Lucknow","second":{"first":26.7981564,"second":80.9015873},"state":"Uttar Pradesh"},{"first":"Scientific Pathology Agra, Durga Commercial Complex, Hariparwat Delhi Gate, Agra","second":{"first":27.1964843,"second":78.0001934},"state":"Uttar Pradesh"},{"first":"Lala Lajpat Rai Memorial Medical College, Meerut","second":{"first":28.960005700000004,"second":77.7502234},"state":"Uttar Pradesh"},{"first":"Maharana Pratap Joint District Hospital,Bareily","second":{"first":28.3613109,"second":79.4163894},"state":"Uttar Pradesh"},{"first":"Dept of Lab Medicine, Jaypee Hospital, Sector 128, Noida","second":{"first":28.515487399999998,"second":77.37137360000001},"state":"Uttar Pradesh"},{"first":"District Hospital, Baghpat","second":{"first":28.9463944,"second":77.21702619999999},"state":"Uttar Pradesh"},{"first":"Mahatama Gandhi, District Combined Hospital, Siddharth Nagar","second":{"first":27.2739528,"second":83.069538},"state":"Uttar Pradesh"},{"first":"Regional Medical Research Centre, Gorakhpur","second":{"first":26.8141188,"second":83.39962059999999},"state":"Uttar Pradesh"},{"first":"Birbal Sahni Institute of Palaeosciences, Lucknow","second":{"first":26.8671665,"second":80.9392629},"state":"Uttar Pradesh"},{"first":"Govt. Institute of Medical Sciences, Noida","second":{"first":28.4183031,"second":77.5255059},"state":"Uttar Pradesh"},{"first":"District Hospital, Rampur","second":{"first":28.8065841,"second":79.0141774},"state":"Uttar Pradesh"},{"first":"SN Medical College, Agra","second":{"first":27.187973099999997,"second":78.0092051},"state":"Uttar Pradesh"},{"first":"Netaji Subhash Chandra Bose District Hospital, Gorakhpur","second":{"first":26.7477786,"second":83.3656984},"state":"Uttar Pradesh"},{"first":"National JALMA Institute for Leprosy & Other Mycobacterial Diseases, Agra","second":{"first":27.1680478,"second":78.051602},"state":"Uttar Pradesh"},{"first":"Command Hospital, Lucknow","second":{"first":26.817450299999997,"second":80.9408179},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Pilibhit","second":{"first":28.6307057,"second":79.8164409},"state":"Uttar Pradesh"},{"first":"Dr. Bheemrao Ambedkar District Hospital,Etawah","second":{"first":26.787903399999998,"second":79.0055218},"state":"Uttar Pradesh"},{"first":"Amar Shahid late Uma Nath Singh District Hospital, Jaunpur","second":{"first":25.7596745,"second":82.6967452},"state":"Uttar Pradesh"},{"first":"100 Beded District Hospital, Aauraiya","second":{"first":26.4625555,"second":79.50788829999999},"state":"Uttar Pradesh"},{"first":"Medical Testing Lab, Yashoda Superspeciality Hospital, H-1, 24, 26-27, Kaushambi, Ghaziabad","second":{"first":28.6424143,"second":77.3187435},"state":"Uttar Pradesh"},{"first":"MLB Medical College, Jhansi","second":{"first":25.4600127,"second":78.61464649999999},"state":"Uttar Pradesh"},{"first":"Rana Devi Madhav Singh, District Hospital, Raebareli","second":{"first":26.2227523,"second":81.23943919999999},"state":"Uttar Pradesh"},{"first":"District Male & Eye Hospital, Padrauna,Kushinagar","second":{"first":26.9039,"second":83.9695},"state":"Uttar Pradesh"},{"first":"National Institute of Biologicals, Noida (High-throughput Laboratory)","second":{"first":28.627621599999998,"second":77.3575286},"state":"Uttar Pradesh"},{"first":"District Femal Hospital, Muzaffarnagar","second":{"first":29.477994400000004,"second":77.69651429999999},"state":"Uttar Pradesh"},{"first":"Manywar Kanshiram Joint District Hospital,Lalitpur","second":{"first":24.691170699999997,"second":78.4138183},"state":"Uttar Pradesh"},{"first":"Divisional District Hospital, Jhansi","second":{"first":25.4578424,"second":78.57867929999999},"state":"Uttar Pradesh"},{"first":"District Hospital, Mahoba","second":{"first":25.292816499999997,"second":79.88487040000001},"state":"Uttar Pradesh"},{"first":"Heritage Speciality Lab, Lanka, Varanasi","second":{"first":25.2789428,"second":83.00304},"state":"Uttar Pradesh"},{"first":"Mahrishi Dayanad Saraswati District Hospital,Mathura","second":{"first":27.4708385,"second":77.696108},"state":"Uttar Pradesh"},{"first":"District Hospital, Banda","second":{"first":25.4893097,"second":80.3348883},"state":"Uttar Pradesh"},{"first":"Uttar Pradesh University of Medical Sciences (Formerly Uttar Pradesh RIMS), Saifai","second":{"first":26.960839399999998,"second":78.96058529999999},"state":"Uttar Pradesh"},{"first":"Gian Life Care Ltd, 7\\/216(6), Swaroop Nagar, Kanpur","second":{"first":26.487817,"second":80.320613},"state":"Uttar Pradesh"},{"first":"Babu Eswar Saran District Hospital,Gonda","second":{"first":27.139941099999998,"second":81.9671068},"state":"Uttar Pradesh"},{"first":"Maharaja Tez Singh District Hospital,Mainpur","second":{"first":27.2309708,"second":79.0406844},"state":"Uttar Pradesh"},{"first":"Pt. Kamlapati Tripathi Joint District Hospital,Chandauli","second":{"first":25.258688,"second":83.2737859},"state":"Uttar Pradesh"},{"first":"District Male Hospital, Budaun","second":{"first":28.0279016,"second":79.1273325},"state":"Uttar Pradesh"},{"first":"ICAR- Indian Veterinary Research Institute (IVRI), Izatnagar","second":{"first":28.390475499999997,"second":79.4357971},"state":"Uttar Pradesh"},{"first":"Dr. Mukhtar Ansari District Hospital, Ghazipur","second":{"first":25.627626499999998,"second":83.7545246},"state":"Uttar Pradesh"},{"first":"District Combined Hospital, Bijnor","second":{"first":29.3849744,"second":78.1365221},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Manjhanpur,Kaushambi","second":{"first":25.5303929,"second":81.3755896},"state":"Uttar Pradesh"},{"first":"Babu Banarasi Das govt. District Hospital, Bulandsahar","second":{"first":28.404988099999997,"second":77.853019},"state":"Uttar Pradesh"},{"first":"Deewan Satrughan District Hospital,Hamirpur","second":{"first":25.9548043,"second":80.15262709999999},"state":"Uttar Pradesh"},{"first":"Central Drug Research Institute, Lucknow","second":{"first":26.9467067,"second":80.93364179999999},"state":"Uttar Pradesh"},{"first":"Motilal Nehru Divisional Hospital,Prayagraj","second":{"first":25.4413778,"second":81.82721169999999},"state":"Uttar Pradesh"},{"first":"Malkhan Singh Joint District Hospital,Aligarh","second":{"first":27.889415399999997,"second":78.07095819999999},"state":"Uttar Pradesh"},{"first":"Rafi Ahmad Kidwai memorial District Hospital, Barabanki","second":{"first":26.9266699,"second":81.1947682},"state":"Uttar Pradesh"},{"first":"GSVM Medical College, Kanpur","second":{"first":26.480943099999998,"second":80.3075733},"state":"Uttar Pradesh"},{"first":"12 Air Force Hospital, Gorakhpur","second":{"first":26.7590661,"second":83.42083099999999},"state":"Uttar Pradesh"},{"first":"District Hospital, Sultanpur","second":{"first":26.2627076,"second":82.0699094},"state":"Uttar Pradesh"},{"first":"College of Veterinary Sciences and Animal Husbandry, UP Pt. Deen Dayal Upadhyaya Pashu Chikitsa Vishwavidyalaya evam Go Anusandhan Sansthan, Mathura","second":{"first":27.4605814,"second":77.7010461},"state":"Uttar Pradesh"},{"first":"Divisional Hospital, Azamgarh","second":{"first":26.082443299999998,"second":83.1902226},"state":"Uttar Pradesh"},{"first":"Jawaharlal Nehru Medical College, Aligarh","second":{"first":27.918604,"second":78.0857405},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Chitrakoot","second":{"first":25.196197299999998,"second":80.9135771},"state":"Uttar Pradesh"},{"first":"Sanjay Gandhi Post Graduate Institute, Lucknow","second":{"first":26.7435439,"second":80.94520639999999},"state":"Uttar Pradesh"},{"first":"Shadilal Memorial Community Health Centre, Shamli","second":{"first":29.4501986,"second":77.3172046},"state":"Uttar Pradesh"},{"first":"Bheemrao Ambedkar Multi Superspeciality District Hospital, G. B Nagar","second":{"first":28.576565,"second":77.3374525},"state":"Uttar Pradesh"},{"first":"Pt. Ramdayal Trivedi District Hospital, Hardoi","second":{"first":27.3961155,"second":80.1348111},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Manjhanpur, Sambhal","second":{"first":28.5831347,"second":78.57281859999999},"state":"Uttar Pradesh"},{"first":"P.L. Sharma District Hospital, Meerut","second":{"first":28.982074599999997,"second":77.6998905},"state":"Uttar Pradesh"},{"first":"MLN Medical College, Allahabad","second":{"first":25.4503137,"second":81.8518907},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Akbarpur, Kanpur Dehat","second":{"first":26.0203301,"second":79.689499},"state":"Uttar Pradesh"},{"first":"District Combined Hospital, Mahrajganj","second":{"first":27.1425196,"second":83.5389568},"state":"Uttar Pradesh"},{"first":"U.H.M District Male Hospital, Kanpur Nagar","second":{"first":26.4729269,"second":80.3488179},"state":"Uttar Pradesh"},{"first":"District Hospital, Ghazipur Tiraha, Mau","second":{"first":25.924527200000004,"second":83.56591399999999},"state":"Uttar Pradesh"},{"first":"District Hospital, Hapur","second":{"first":28.728496,"second":77.8021519},"state":"Uttar Pradesh"},{"first":"District Male Hospital, Jalaun","second":{"first":25.9912864,"second":79.455068},"state":"Uttar Pradesh"},{"first":"District Male Hospital, Ayodhya","second":{"first":26.7980023,"second":82.2125775},"state":"Uttar Pradesh"},{"first":"District Hospital, Bahraich","second":{"first":27.572385500000003,"second":81.6058919},"state":"Uttar Pradesh"},{"first":"Institute of Medical Sciences, Banaras Hindu University, Varanasi","second":{"first":25.2744547,"second":82.9995254},"state":"Uttar Pradesh"},{"first":"RML Mehrotra Pathology Pvt Ltd, Nirala Nagar, Lucknow","second":{"first":26.878439900000004,"second":80.9326584},"state":"Uttar Pradesh"},{"first":"Bairister Yusuf Emam, Divisional Hospital, Mirzapur","second":{"first":25.1540556,"second":82.5780281},"state":"Uttar Pradesh"},{"first":"Pt.Ramprasad Bismil, District Combined Hospital Shahjahanpur","second":{"first":27.807931999999997,"second":79.7918487},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Kanshiram Nagar","second":{"first":27.795154699999998,"second":78.792953},"state":"Uttar Pradesh"},{"first":"RML Hospital, Lucknow","second":{"first":26.8692675,"second":81.0030807},"state":"Uttar Pradesh"},{"first":"Dr. Ram Manohar Lohia District Hospital,Farrukabad","second":{"first":27.379516199999998,"second":79.6022055},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, J.P Nagar","second":{"first":12.906165099999999,"second":77.5806551},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Sant Kabir Nagar","second":{"first":26.7671755,"second":83.03613759999999},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Robertsganj,Sonbhadra","second":{"first":24.6461737,"second":83.05861469999999},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Bhinga, Shrawasti","second":{"first":27.704596499999997,"second":81.9029722},"state":"Uttar Pradesh"},{"first":"District Male Hospital, Sitapur","second":{"first":27.571087000000002,"second":80.6765177},"state":"Uttar Pradesh"},{"first":"Super specialty PediatricHospital and Postgraduate Teaching Institute (SSPHPGTI), Noida","second":{"first":28.5769716,"second":77.3376877},"state":"Uttar Pradesh"},{"first":"District Hospital, Fatehpur","second":{"first":25.9358802,"second":80.8134589},"state":"Uttar Pradesh"},{"first":"District Combined Hospital, District Balrampur","second":{"first":27.3175925,"second":82.41842729999999},"state":"Uttar Pradesh"},{"first":"Seth Baldev Das District Hospital, Saharanpur","second":{"first":29.9565061,"second":77.5612254},"state":"Uttar Pradesh"},{"first":"Balrampur Hospital, Lucknow","second":{"first":26.8569179,"second":80.92664769999999},"state":"Uttar Pradesh"},{"first":"Charakdhar Diagnostics Pvt.Ltd. Basement, 292\\/05 Tulsidas Marg, Chowk, Near King George Medical University, Lucknow","second":{"first":26.8650214,"second":80.9112268},"state":"Uttar Pradesh"},{"first":"District Male Hospital, Kheri","second":{"first":27.945873199999998,"second":80.7839151},"state":"Uttar Pradesh"},{"first":"District Combined Hospital, District Basti","second":{"first":26.800522299999997,"second":82.75965839999999},"state":"Uttar Pradesh"},{"first":"Joint District Hospital, Amethi","second":{"first":26.1622791,"second":81.8101906},"state":"Uttar Pradesh"},{"first":"Department of Lab Sciences, Regency Hospital, A-2, Sarvodaya Nagar, Kanpur","second":{"first":26.4794645,"second":80.30159239999999},"state":"Uttar Pradesh"},{"first":"District Hospital, Etah","second":{"first":27.556092,"second":78.6588441},"state":"Uttar Pradesh"},{"first":"Sarojani Naidu Samarak Hospital,District Firozabad","second":{"first":27.127467700000004,"second":78.48266389999999},"state":"Uttar Pradesh"},{"first":"100 Beded District Hospital, Kannauj","second":{"first":27.0514157,"second":79.913673},"state":"Uttar Pradesh"},{"first":"Central Lab, Sharda Hospital, Plot no 32,34, Knowledge Park-III, Greater Noida","second":{"first":28.4752722,"second":77.4823518},"state":"Uttar Pradesh"},{"first":"Pt. Din Dayal Upahadhy, District Combined Hospital, Moradabad","second":{"first":28.8479502,"second":78.7661321},"state":"Uttar Pradesh"},{"first":"Maharaja Balwant District Hospital,Santravidas Nagar","second":{"first":25.395435199999998,"second":82.5649706},"state":"Uttar Pradesh"},{"first":"Laboratory Services, Peerless Hospitex Hospital & Research Centre, 360, Panchasayar, Kolkata","second":{"first":22.480671899999997,"second":88.39421279999999},"state":"West Bengal"},{"first":"M R Bangur District Hospital, Kolkata","second":{"first":22.499335,"second":88.3465889},"state":"West Bengal"},{"first":"Balurghat District Hospital, Dakshin Dinajpur","second":{"first":25.2472563,"second":88.7807995},"state":"West Bengal"},{"first":"Tata Medical Center, Rajarhat, Kolkata","second":{"first":22.5770971,"second":88.4796319},"state":"West Bengal"},{"first":"Dept of Lab Services, Medica Superspeciality Hospital, 127, Mukundpur, E.M. Bypass, Kolkata","second":{"first":22.4944168,"second":88.4008736},"state":"West Bengal"},{"first":"Biswa Bangla Krirangan SARI\\/COVID Hospital, Jalpaiguri","second":{"first":26.521457899999998,"second":88.7195567},"state":"West Bengal"},{"first":"ICMR-National Institute of Cholera & Enteric Diseases, Kolkata","second":{"first":22.565824,"second":88.3998152},"state":"West Bengal"},{"first":"The Calcutta Medical Research Institute (Dept of Pathology), 7\\/2 Diamond Harbour Raod, Kolkata","second":{"first":22.532372199999998,"second":88.3277915},"state":"West Bengal"},{"first":"AMRI Hospitals, Dept of Lab Medicine, JC 16-17, Sector III, Salt Lake City, Kolkata","second":{"first":22.5682893,"second":88.4116514},"state":"West Bengal"},{"first":"Falakata SSH Hospital, District Alipurduar","second":{"first":26.517486,"second":89.2039195},"state":"West Bengal"},{"first":"Jangipur Sub-Divisional Hospital, Murshidabad","second":{"first":24.4610725,"second":88.0618291},"state":"West Bengal"},{"first":"Malda Medical College & Hospital, Malda","second":{"first":24.992594099999998,"second":88.1412634},"state":"West Bengal"},{"first":"School of Tropical Medicine, Kolkata","second":{"first":22.574963,"second":88.35977299999999},"state":"West Bengal"},{"first":"Anandaloke Sonoscan Centre Pvt.Ltd., 3\\/3 Hill Cart Road, Near Mahananda Bridge, Siliguri","second":{"first":26.718635499999998,"second":88.420715},"state":"West Bengal"},{"first":"Alipurduar District Hospital, Alipurduar","second":{"first":26.4842244,"second":89.5232608},"state":"West Bengal"},{"first":"Desun Reference Lab - A Unit of Desun Healthcare and Research Institute Limited(Department of Laboratory Services), S-16,Kasba Industrial Estate, Phase III, Kolkata","second":{"first":22.513205499999998,"second":88.40775889999999},"state":"West Bengal"},{"first":"Cooch Behar Government Medical College, Cooch Behar","second":{"first":26.3210817,"second":89.4639756},"state":"West Bengal"},{"first":"Institute of Post Graduate Medical Education & Research, Kolkata","second":{"first":22.5396623,"second":88.3421801},"state":"West Bengal"},{"first":"Bankura Medical College, Bankura","second":{"first":23.2341044,"second":87.0359592},"state":"West Bengal"},{"first":"Apollo Gleneagles Hospitals, 58 Canal Circular Road, Kolkata","second":{"first":22.574754,"second":88.401617},"state":"West Bengal"},{"first":"Dept of Lab Medicine, AMRI Hospital, 38\\/1A, Gariahat Road, Kolkata","second":{"first":22.5682893,"second":88.4116514},"state":"West Bengal"},{"first":"Burdwan Medical College, Burdwan","second":{"first":23.248912699999998,"second":87.8536249},"state":"West Bengal"},{"first":"College of Medicine and Sagore Dutta Hospital, Kolkata","second":{"first":22.675432,"second":88.3733271},"state":"West Bengal"},{"first":"Purulia Government Medical College and Hospital, Purulia ","second":{"first":23.3595695,"second":86.4002814},"state":"West Bengal"},{"first":"Diamond Harbour Government Medical College and Hospital, Diamond Harbour","second":{"first":22.200104,"second":88.1927805},"state":"West Bengal"},{"first":"Remedy Life Care, Plot 6, Nani Gopal Roy Chowdhury Avenue, Entally, Padmapukur On Main Road, Kolkata","second":{"first":22.5534902,"second":88.3716432},"state":"West Bengal"},{"first":"Medical College, Kolkata","second":{"first":22.5735705,"second":88.3618516},"state":"West Bengal"},{"first":"Command Hospital, Kolkata","second":{"first":22.5299582,"second":88.330457},"state":"West Bengal"},{"first":"Dr. Lal Pathlabs Ltd \u0013 Kolkata Reference lab, Plot No CB-31\\/1, Premises No 031-0199, Street No 199, Action Area 1C, Newtown, Kolkata","second":{"first":22.577461,"second":88.4668507},"state":"West Bengal"},{"first":"Midnapore Medical College, Midnapore","second":{"first":22.421703299999997,"second":87.323121},"state":"West Bengal"},{"first":"Chanchal Sub-divisional Hospital (SDH),Malda","second":{"first":25.395174599999997,"second":88.0146611},"state":"West Bengal"},{"first":"Laboratory Services, Peerless Hospitex Hospital & Research Centre, 360,Panchasayar, Kolkata","second":{"first":22.480671899999997,"second":88.39421279999999},"state":"West Bengal"},{"first":"Shri Ramkrishna Institute of Medical Sciences & Sanaka Hospitals, Malandighi, P.S. Kanksha, Durgapur","second":{"first":23.573882299999998,"second":87.4049679},"state":"West Bengal"},{"first":"Asansol District Hospital, Asansol","second":{"first":23.677248499999997,"second":86.97473339999999},"state":"West Bengal"},{"first":"Suraksha Diagnostic Pvt Ltd (Dept of Lab Services), 12\\/1, Premises No 02\\/0327, DG Block (Newtown), Action Area 1D, Newtown, Kolkata","second":{"first":22.5378367,"second":88.3484787},"state":"West Bengal"},{"first":"Calcutta National Medical College and Hospital, Kolkata","second":{"first":22.5461737,"second":88.3714371},"state":"West Bengal"},{"first":"Serampore Walsh Sub-divisional Hospital, Hugli","second":{"first":22.7552083,"second":88.34662519999999},"state":"West Bengal"},{"first":"Suri Sadar Hospital, Birbhum","second":{"first":23.9158947,"second":87.5169031},"state":"West Bengal"},{"first":"Rampurhat Govt. Medical College and Hospital, Rampurhat, Birbhum","second":{"first":24.1894183,"second":87.791674},"state":"West Bengal"},{"first":"Jhargram District Hospital, Jhargram District","second":{"first":22.4472967,"second":86.99837409999999},"state":"West Bengal"},{"first":"Uluberia Sub Divisional Hospital, Howrah","second":{"first":22.4701736,"second":88.09457309999999},"state":"West Bengal"},{"first":"Murshidabad Medical College, Behrampore, Murshidabad","second":{"first":24.0888414,"second":88.2592899},"state":"West Bengal"},{"first":"Raiganj Government Medical College and Hospital, Raiganj","second":{"first":25.6098963,"second":88.132494},"state":"West Bengal"},{"first":"R.G. Kar Medical College & Hospital, Kolkata","second":{"first":22.604074400000002,"second":88.3781099},"state":"West Bengal"},{"first":"North Bengal Medical College, Darjeeling","second":{"first":26.6902874,"second":88.3851605},"state":"West Bengal"},{"first":"College of Medicine and JNM Hospital,Kalyani, Nadia","second":{"first":22.974370999999998,"second":88.4557121},"state":"West Bengal"},{"first":"Nil Ratan Sircar Medical College, Kolkata","second":{"first":22.565082200000003,"second":88.3692411},"state":"West Bengal"},{"first":"Chittaranjan National Cancer Institute, Kolkata","second":{"first":22.5256847,"second":88.34657899999999},"state":"West Bengal"},{"first":"Intermediate Reference Laboratory, Directorate of Health Sciences, Naharlagun","second":{"first":27.1038762,"second":93.6910281},"state":"Arunachal Pradesh"},{"first":"Tomo Riba Institute of Health & Medical Sciences, Naharlagun","second":{"first":27.1038855,"second":93.6910961},"state":"Arunachal Pradesh"},{"first":"Silchar Medical College, Silchar","second":{"first":24.775797999999998,"second":92.7949158},"state":"Assam"},{"first":"Diphu Medical College, Karbi Anglong","second":{"first":25.8323845,"second":93.4300109},"state":"Assam"},{"first":"Regional Medical Research Center, Dibrugarh","second":{"first":27.4727051,"second":94.98279660000001},"state":"Assam"},{"first":"Gauhati Medical College, Guwahati","second":{"first":26.154210900000002,"second":91.77007139999999},"state":"Assam"},{"first":"Jorhat Medical College, Jorhat","second":{"first":26.7425738,"second":94.19510869999999},"state":"Assam"},{"first":"Tezpur Medical College, Tezpur","second":{"first":26.6814787,"second":92.6522739},"state":"Assam"},{"first":"Ultracare Diagnostic Centre, Dept of Lab Services, Ashok Path, Survey, Beltola, Guwahati","second":{"first":26.130618,"second":91.79455399999999},"state":"Assam"},{"first":"CSIR North East Institute of Science and Technology (NEIST), Jorhat","second":{"first":26.7377826,"second":94.15695269999999},"state":"Assam"},{"first":"Molecular Testing LAb, GNRC Lab services,GNRC Hospitals, Dispur","second":{"first":26.1392581,"second":91.7942941},"state":"Assam"},{"first":"Fakkhruddin Ali Ahmed Medical College, Barpeta","second":{"first":26.324422499999997,"second":90.98497719999999},"state":"Assam"},{"first":"Assam Medical College, Dibrugarh","second":{"first":27.4875825,"second":94.9400886},"state":"Assam"},{"first":"*Defence Research Laboratory, Tezpur","second":{"first":26.6901328,"second":92.7774398},"state":"Assam"},{"first":"District Hospital, Saran, Bihar","second":{"first":25.780015,"second":84.7287344},"state":"Bihar"},{"first":"District Hospital, Khagaria","second":{"first":25.508861099999997,"second":86.4755093},"state":"Bihar"},{"first":"Patna Medical College, Patna","second":{"first":25.620914199999998,"second":85.16031679999999},"state":"Bihar"},{"first":"District Hospital, Supaul, Bihar","second":{"first":26.1144405,"second":86.5965909},"state":"Bihar"},{"first":"District Hospital, Kishanganj, Bihar","second":{"first":26.1010216,"second":87.9483407},"state":"Bihar"},{"first":"Rajendra Memorial Research Institute of Medical Sciences, Patna","second":{"first":25.5997386,"second":85.197722},"state":"Bihar"},{"first":"Jawaharlal Nehru Medical College, Bhagalpur","second":{"first":25.2570575,"second":86.9937241},"state":"Bihar"},{"first":"District Hospital, Arwal","second":{"first":25.232206899999998,"second":84.6775036},"state":"Bihar"},{"first":"District Hospital, Sheikhpura","second":{"first":25.133016100000003,"second":85.84156519999999},"state":"Bihar"},{"first":"District Hospital, Lakhisarai, Bihar","second":{"first":25.145574,"second":86.092213},"state":"Bihar"},{"first":"Vardhman Institute of Medical Sciences, Pawapuri, Nalanda","second":{"first":25.090135099999998,"second":85.5416171},"state":"Bihar"},{"first":"District Hospital, Sitamarhi","second":{"first":26.5962298,"second":85.4947921},"state":"Bihar"},{"first":"District Hospital, Kaimur, Bihar","second":{"first":25.0395672,"second":83.60773770000002},"state":"Bihar"},{"first":"District Hospital, Jamui, Bihar","second":{"first":24.924392599999997,"second":86.2238923},"state":"Bihar"},{"first":"District Hospital, Gopalganj, Bihar","second":{"first":26.4603809,"second":84.4411285},"state":"Bihar"},{"first":"District Hospital, Buxar","second":{"first":25.554819499999997,"second":83.95272109999999},"state":"Bihar"},{"first":"District Hospital, Araria","second":{"first":26.129658499999998,"second":87.469134},"state":"Bihar"},{"first":"District Hospital, Banka, Bihar","second":{"first":24.8860633,"second":86.9162451},"state":"Bihar"},{"first":"District Hospital, Saharsa, Bihar","second":{"first":25.887235699999998,"second":86.5867382},"state":"Bihar"},{"first":"District Hospital, Bhojpur, Bihar","second":{"first":25.5208676,"second":84.6858285},"state":"Bihar"},{"first":"Narayan Medical College, Sasaram","second":{"first":24.94295,"second":84.102766},"state":"Bihar"},{"first":"All India Institute of Medical Sciences, Patna","second":{"first":25.562902,"second":85.04133379999999},"state":"Bihar"},{"first":"District Hospital, Jehanabad, Bihar","second":{"first":25.2111789,"second":84.985393},"state":"Bihar"},{"first":"District Hospital, East Champaran","second":{"first":26.647838699999998,"second":84.90905260000001},"state":"Bihar"},{"first":"District Hospital, Purnia","second":{"first":25.7858749,"second":87.4885645},"state":"Bihar"},{"first":"SKMCH, Muzaffarpur","second":{"first":26.1669211,"second":85.3934566},"state":"Bihar"},{"first":"Indira Gandhi Institute Medical Sciences, Patna","second":{"first":25.610557300000004,"second":85.0889323},"state":"Bihar"},{"first":"Saral Pathlab Pvt. Ltd, 55B, Sector O,Sachiwalaya Colony, Kankarbagh, Patna","second":{"first":25.5963216,"second":85.1585826},"state":"Bihar"},{"first":"JanNayak Karpoori Thakur Medical College and Hospital, Madhepura","second":{"first":25.959197099999997,"second":86.7973197},"state":"Bihar"},{"first":"District Hospital, Aurangabad, Bihar","second":{"first":24.752353,"second":84.3751995},"state":"Bihar"},{"first":"District Hospital, Munger","second":{"first":25.38251,"second":86.4703869},"state":"Bihar"},{"first":"District Hospital, Rohtas","second":{"first":24.9513556,"second":84.0122138},"state":"Bihar"},{"first":"District Hospital, Vaishali","second":{"first":25.691391499999998,"second":85.2090466},"state":"Bihar"},{"first":"District Hospital, Sheohar","second":{"first":26.513959,"second":85.29446589999999},"state":"Bihar"},{"first":"District Hospital, Samastipur","second":{"first":25.8560271,"second":85.7868233},"state":"Bihar"},{"first":"District Hospital, Begusarai","second":{"first":25.413947699999998,"second":86.1356459},"state":"Bihar"},{"first":"Government Medical College, Bettiah","second":{"first":26.7956792,"second":84.4996986},"state":"Bihar"},{"first":"Sen Diagnostics Pvt. Ltd., Budh Marg, Patna","second":{"first":25.606721999999998,"second":85.13381249999999},"state":"Bihar"},{"first":"Anugrah Narayan Magadh Medical College (ANMMC), Gaya","second":{"first":24.7709945,"second":84.96163059999999},"state":"Bihar"},{"first":"District Hospital, Madhubani","second":{"first":26.337723399999998,"second":86.0721634},"state":"Bihar"},{"first":"District Hospital, Katihar","second":{"first":25.5397321,"second":87.56766309999999},"state":"Bihar"},{"first":"Darbhanga Medical College, Darbhanga","second":{"first":26.1337743,"second":85.9015883},"state":"Bihar"},{"first":"District Hospital, Nawada, Bihar","second":{"first":24.887300999999997,"second":85.5457577},"state":"Bihar"},{"first":"District Hospital, Siwan","second":{"first":26.2258797,"second":84.36205799999999},"state":"Bihar"},{"first":"Institute of Microbial Technology","second":{"first":30.747768,"second":76.7337},"state":"Chandigarh"},{"first":"Post Graduate Institute of Medical Education & Research","second":{"first":30.7649646,"second":76.7750066},"state":"Chandigarh"},{"first":"Late Shri Lakhi Ram Agrawal Memorial Govt. Medical College, Raigarh","second":{"first":21.8763938,"second":83.424983},"state":"Chhattisgarh"},{"first":"Intermediate Reference Laboratory, Lalpur, Raipur","second":{"first":21.214576899999997,"second":81.66067},"state":"Chhattisgarh"},{"first":"All India Institute of Medical Sciences, Raipur","second":{"first":21.3008415,"second":81.57009599999999},"state":"Chhattisgarh"},{"first":"Late Baliram Kashyap M Govt. Medical College, Jagdalpur","second":{"first":19.050686900000002,"second":81.9481812},"state":"Chhattisgarh"},{"first":"JNM Medical College, Raipur","second":{"first":21.2521217,"second":81.6394284},"state":"Chhattisgarh"},{"first":"Goa Medical College, Goa","second":{"first":15.464326299999998,"second":73.8584025},"state":"Goa"},{"first":"Sub- District Hospital, Chicalim, Vasco Da Gama","second":{"first":15.4002927,"second":73.8324682},"state":"Goa"},{"first":"North District Hospital, Mapusa","second":{"first":15.596892400000002,"second":73.8201766},"state":"Goa"},{"first":"Subdistrict Hospital, Ponda","second":{"first":15.3930424,"second":74.00571939999999},"state":"Goa"},{"first":"South Goa District Hospital (Hospicio Hospital), Margao","second":{"first":15.2787552,"second":73.9606063},"state":"Goa"},{"first":"NHL Medical College, Ahmedabad","second":{"first":23.0186615,"second":72.5713277},"state":"Gujarat"},{"first":"SN GeneLab Pvt Ltd, President Plaza \u0013A, Near Mahavir Hospital, Nanpura, Surat","second":{"first":21.1833745,"second":72.8143657},"state":"Gujarat"},{"first":"GMERS Medical College and Hospital, Dharpur-Patan, Gujarat","second":{"first":23.8474561,"second":72.1921448},"state":"Gujarat"},{"first":"Dhiraj Hospital, Smt. B.K. Shah Medical Institute & Research Centre, Vadodara","second":{"first":22.2908393,"second":73.3229752},"state":"Gujarat"},{"first":"Maharaj Agrasen Medical College, Agroha, Hisar","second":{"first":29.336705099999996,"second":75.62262729999999},"state":"Gujarat"},{"first":"Sterling Accuris Diagnostics, Sterling Hospital, Phase 2, 1st Floor, Race Course Circle (West), Vadodra","second":{"first":22.3122249,"second":73.1646428},"state":"Gujarat"},{"first":"GMERS Medical College, Valsad","second":{"first":20.593556,"second":72.92058349999999},"state":"Gujarat"},{"first":"Apex Diagnostics - 12 Jacaranda Marg , Dlf City Phase - 2 , Gurgaon","second":{"first":28.4892184,"second":77.0872266},"state":"Gujarat"},{"first":"Speciality Microtech Laboratory, 121 Akshar Arcade, Navrangpura, Ahmedabad","second":{"first":23.0454003,"second":72.5519168},"state":"Gujarat"},{"first":"AMC MET Medical College and Hospital, Ahmedabad","second":{"first":22.9983859,"second":72.6040905},"state":"Gujarat"},{"first":"Microcare Lab & TRC ,105 ,Manthan Point, Unapani Road, Surat","second":{"first":21.204487399999998,"second":72.8372452},"state":"Gujarat"},{"first":"Dept of Lab Medicine, Apollo Hospitals International Ltd, 1, Bhat, GIDC Estate, Ahmedabad","second":{"first":23.109550199999997,"second":72.62638849999999},"state":"Gujarat"},{"first":"Gujarat Biotechnology Research Center, Gandhinagar","second":{"first":23.2223898,"second":72.647104},"state":"Gujarat"},{"first":"Gujarat Pathology Lab & Diagnostic Centre, 101\\/102, Span Trade Centre, Paldi, Ahmedabad","second":{"first":23.016212799999998,"second":72.5664135},"state":"Gujarat"},{"first":"Govt. Medical College, Bhavnagar","second":{"first":21.768738100000004,"second":72.1369852},"state":"Gujarat"},{"first":"GMERS Medical College, Ahmedabad","second":{"first":23.0827751,"second":72.5248866},"state":"Gujarat"},{"first":"Salvus Bioresearch Solutions, 2nd Floor, Earth Retail, Science City Circle, S.P. Ring Road,Ahmedabad","second":{"first":23.085677999999998,"second":72.492544},"state":"Gujarat"},{"first":"Dr. H.L. Trivedi Institute of Transplantation Services, Ahmedabad","second":{"first":23.051510399999998,"second":72.6051796},"state":"Gujarat"},{"first":"Sunflower Laboratory, Helmet Circle, Rudra Arcade, Drive In Road, Manav Mandir, MemNagar, Ahmedabad","second":{"first":23.045621999999998,"second":72.541731},"state":"Gujarat"},{"first":"National Institute of Occupational Health, Ahmedabad","second":{"first":23.0544039,"second":72.61076589999999},"state":"Gujarat"},{"first":"Pangenomics International Pvt Ltd, Ellis Bridge, Ahmedabad","second":{"first":23.0195647,"second":72.56061129999999},"state":"Gujarat"},{"first":"Dept of Lab Medicine, Bhailal Amin Gen Hospital, Alembic Road, Gorwa, Vadodra","second":{"first":22.3252429,"second":73.1631642},"state":"Gujarat"},{"first":"Govt. Medical College, Surat","second":{"first":21.178057300000003,"second":72.8202524},"state":"Gujarat"},{"first":"GCS Medical College and Hospital, Ahmedabad","second":{"first":23.0386514,"second":72.61097199999999},"state":"Gujarat"},{"first":"Toprani Advanced Lab Systems, Suflam, 10, Haribhakti Colony, Race Course, Vadodra","second":{"first":22.307575699999997,"second":73.1638794},"state":"Gujarat"},{"first":"Divine lab, B 201\\/202, Mangalkirti Apartment, Fatehgunj, Vadodra","second":{"first":22.3229982,"second":73.1880628},"state":"Gujarat"},{"first":"Surat Municipal Institute of Medical Education & Research (SMIMER), Surat","second":{"first":21.1975074,"second":72.84501230000001},"state":"Gujarat"},{"first":"MP Shah Govt Medical College, Jamnagar","second":{"first":22.477307399999997,"second":70.0652399},"state":"Gujarat"},{"first":"Unipath Specialty laboratory limited ,102,Sanoma Plaza, Opposite Parimal Garden, Besides JMC House, Ellisbridge, Ahmedabad","second":{"first":23.0191034,"second":72.5556622},"state":"Gujarat"},{"first":"GMERS Medical College, Junagadh","second":{"first":21.534960500000004,"second":70.4624338},"state":"Gujarat"},{"first":"Green Cross Genetics Lab Pvt Ltd,104,Sears Towers, Ahmedabad","second":{"first":23.0255087,"second":72.5542648},"state":"Gujarat"},{"first":"Govt. Medical College, Vadodara","second":{"first":22.3033863,"second":73.1618859},"state":"Gujarat"},{"first":"Gujarat Adani Institute of Medical Sciences, Bhuj","second":{"first":23.2413569,"second":69.6767162},"state":"Gujarat"},{"first":"Parul Institute of Medical Sciences & Research (PIMSR), Vadodara","second":{"first":22.292479099999998,"second":73.366899},"state":"Gujarat"},{"first":"Core Diagnostics Pvt Ltd, Udyog Vihar Phase-3, Gurgaon","second":{"first":28.5092887,"second":77.0916438},"state":"Haryana"},{"first":"Government Civil Hospital, Panchkula","second":{"first":30.704975800000003,"second":76.8545986},"state":"Haryana"},{"first":"Apex Diagnostics - 12 Jacaranda Marg , Dlf City Phase - 2 , Gurgaon","second":{"first":28.4892184,"second":77.0872266},"state":"Haryana"},{"first":"Pathkind Diagnostics Pvt Ltd, Plot 55-56, Phase 4, Udyog Vihar, Sec 18, Gurgaon","second":{"first":28.493009699999998,"second":77.08266309999999},"state":"Haryana"},{"first":"Command Hospital, Chandimandir","second":{"first":30.7123982,"second":76.85433929999999},"state":"Haryana"},{"first":"Translational Health Science & Technology Institute, Faridabad","second":{"first":28.404879599999997,"second":77.2544593},"state":"Haryana"},{"first":"BPS Govt. Medical College, Sonipat","second":{"first":29.152057299999996,"second":76.8083989},"state":"Haryana"},{"first":"Pt. B.D. Sharma Post Graduate Inst. Of Med. Sciences, Rohtak","second":{"first":28.8801261,"second":76.6055682},"state":"Haryana"},{"first":"Maharaj Agrasen Medical College,Agroha, Hisar","second":{"first":29.336705099999996,"second":75.62262729999999},"state":"Haryana"},{"first":"Maharaj Agrasen Medical College, Agroha, Hisar","second":{"first":29.336705099999996,"second":75.62262729999999},"state":"Haryana"},{"first":"Kalpana Chawla Govt. Medical College, Karnal","second":{"first":29.697012599999994,"second":76.9900411},"state":"Haryana"},{"first":"SRL Limited, GP26, Sector 18, Gurugram","second":{"first":28.489103999999998,"second":77.061689},"state":"Haryana"},{"first":"ICAR-National Research Centre on Equines, Hisar","second":{"first":29.1335651,"second":75.7528328},"state":"Haryana"},{"first":"Department of Pathology and Laboratory Medicine, Medanta-The  Medicity, Sector 38, Gurgaon","second":{"first":28.4395122,"second":77.04083399999999},"state":"Haryana"},{"first":"ESIC Hospital, Faridabad","second":{"first":28.3936781,"second":77.29546479999999},"state":"Haryana"},{"first":"District Civil Hospital, Ambala","second":{"first":30.3787852,"second":76.779832},"state":"Haryana"},{"first":"SHKM, Govt. Medical College, Mewat","second":{"first":28.090548199999997,"second":76.9732531},"state":"Haryana"},{"first":"Modern Diagnostic & Research Centre-Lab, 363-364\\/4, JAwahar Nagar. Gurgaon","second":{"first":28.466008,"second":77.0269741},"state":"Haryana"},{"first":"Strand Life Sciences, A-17, Sector 34, Gurugram","second":{"first":28.4294379,"second":77.01553849999999},"state":"Haryana"},{"first":"IRL, Haryana Govt. Public Health Laboratory, Karnal","second":{"first":29.700045899999996,"second":76.9923039},"state":"Haryana"},{"first":"MolQ Laboratory, Plot 28,29; Sector 18(P), Electronic city, Udyog Vihar, Phase IV, Gurgaon","second":{"first":28.500401999999998,"second":77.07202389999999},"state":"Haryana"},{"first":"Dr. Yashwant Singh Parmar Government Medical College, Nahan","second":{"first":30.564189099999997,"second":77.29429309999999},"state":"Himachal Pradesh"},{"first":"Pt. JLN Government Medical College and Hospital, Chamba","second":{"first":32.556996,"second":76.1252868},"state":"Himachal Pradesh"},{"first":"Shri Lal Bahadur Shastri Govt. Medical College, Mandi","second":{"first":31.609281799999994,"second":76.91973229999999},"state":"Himachal Pradesh"},{"first":"Indira Gandhi Medical College, Shimla","second":{"first":31.1064901,"second":77.1822518},"state":"Himachal Pradesh"},{"first":"Regional Hospital, Una","second":{"first":31.478579099999997,"second":76.2741605},"state":"Himachal Pradesh"},{"first":"Dr. Rajendra Prasad Govt. Medical College, Tanda","second":{"first":32.099195099999996,"second":76.2986883},"state":"Himachal Pradesh"},{"first":"Central Research Institute, Kasauli","second":{"first":30.899649099999994,"second":76.9646224},"state":"Himachal Pradesh"},{"first":"Zonal Hospital, Mandi","second":{"first":31.711456399999996,"second":76.9270145},"state":"Himachal Pradesh"},{"first":" Dr. Radhakrishnan Government Medical College, Hamirpur","second":{"first":31.680554899999997,"second":76.5262955},"state":"Himachal Pradesh"},{"first":"CSIR Institute of Himalayan Bioresource Technology, Palampur","second":{"first":32.105162799999995,"second":76.5563999},"state":"Himachal Pradesh"},{"first":"District Hospital, Lohardaga","second":{"first":23.455524200000003,"second":84.69518839999999},"state":"Jharkhand"},{"first":"District Hospital, Giridih","second":{"first":24.187989299999998,"second":86.306454},"state":"Jharkhand"},{"first":"District Hospital, Bokaro","second":{"first":23.6409467,"second":86.15971909999999},"state":"Jharkhand"},{"first":"District Hospital, Hazaribag","second":{"first":23.9974822,"second":85.35631099999999},"state":"Jharkhand"},{"first":"District Hospital, Sahibganj","second":{"first":25.2355588,"second":87.6329824},"state":"Jharkhand"},{"first":"District Hospital, Jamtara","second":{"first":23.9819377,"second":86.8238313},"state":"Jharkhand"},{"first":"District Hospital, Lathehar","second":{"first":23.7432145,"second":84.5081355},"state":"Jharkhand"},{"first":"District Hospital, Ramgarh","second":{"first":23.6474169,"second":85.51023289999999},"state":"Jharkhand"},{"first":"Rajendra Institute of Medical Sciences, Ranchi","second":{"first":23.3915056,"second":85.3484537},"state":"Jharkhand"},{"first":"District Hospital, Garhwa","second":{"first":24.158383699999998,"second":83.8018465},"state":"Jharkhand"},{"first":"Patliputra Medical College & Hospital, Dhanbad","second":{"first":23.8086527,"second":86.4624047},"state":"Jharkhand"},{"first":"District Hospital, Purbi Singhbum","second":{"first":22.758687899999998,"second":86.20136819999999},"state":"Jharkhand"},{"first":"District Hospital, Saraikela Kharsawan","second":{"first":22.709234199999997,"second":85.9423113},"state":"Jharkhand"},{"first":"District Hospital, Dumka","second":{"first":24.2673702,"second":87.2532849},"state":"Jharkhand"},{"first":"District Hospital, Pakur","second":{"first":24.63741,"second":87.83691499999999},"state":"Jharkhand"},{"first":"District Hospital, Deoghar","second":{"first":24.490965499999998,"second":86.6939725},"state":"Jharkhand"},{"first":"Itki Aarogyashala, Ranchi","second":{"first":23.3483321,"second":85.1220893},"state":"Jharkhand"},{"first":"MGM Medical College & Hospital, Jamshedpur","second":{"first":22.843664,"second":86.232396},"state":"Jharkhand"},{"first":"District Hospital, Khunti","second":{"first":23.0585833,"second":85.283402},"state":"Jharkhand"},{"first":"District Hospital, Dhanbad","second":{"first":23.7983622,"second":86.4369857},"state":"Jharkhand"},{"first":"Military Hospital, Namkum, Ranchi","second":{"first":23.346355799999998,"second":85.3841235},"state":"Jharkhand"},{"first":"District Hospital, Ranchi","second":{"first":23.3689119,"second":85.3258173},"state":"Jharkhand"},{"first":"District Hospital, Pashchimi Singhbhum","second":{"first":22.5505168,"second":85.8054811},"state":"Jharkhand"},{"first":"District Hospital, Kodarma","second":{"first":24.475264499999998,"second":85.59603539999999},"state":"Jharkhand"},{"first":"District Hospital, Gumla","second":{"first":23.0346613,"second":84.5383164},"state":"Jharkhand"},{"first":"District Hospital, Godda","second":{"first":24.824163199999997,"second":87.21527359999999},"state":"Jharkhand"},{"first":"District Hospital, Chatra","second":{"first":24.214279599999998,"second":84.85565290000001},"state":"Jharkhand"},{"first":"District Hospital, Simdega","second":{"first":22.6156574,"second":84.5031539},"state":"Jharkhand"},{"first":"Tata Main Hospital (Dept of Pathology), Tata Steel, Bistupur, Jamshedpur","second":{"first":22.8015407,"second":86.18005989999999},"state":"Jharkhand"},{"first":"MAPMYGENOME India Ltd, Royal Demeure, Plot No 12\\/2, Sector-1, HUDA TEchno Enclave, Madhapur, Hyderabad","second":{"first":17.4457345,"second":78.3836546},"state":"Telangana"},{"first":"Biognosys Technologies (India) Pvt Ltd, #8-148\\/174\\/11, NRI Colony, Near Aleap Industrial Area, Medchal, Malkajgiri","second":{"first":17.533533,"second":78.3926213},"state":"Telangana"},{"first":"Pathcare Labs Pvt Ltd, Medchal, Hyderabad","second":{"first":17.4447388,"second":78.4691936},"state":"Telangana"},{"first":"Osmania Medical College, Hyderabad","second":{"first":17.3822473,"second":78.48285729999999},"state":"Telangana"},{"first":"ESIC Medical College, Hyderabad","second":{"first":17.4471897,"second":78.44022380000001},"state":"Telangana"},{"first":"Vimta Labs Ltd, Plot No 142, Phase 2, IDA Cherlapally, Hyderabad","second":{"first":17.470641099999998,"second":78.60230320000001},"state":"Telangana"},{"first":"Dept of Lab Medicine, Star Hospital, A Unit of UniMed Healthcare Pvt Ltd, 8-2-594\\/B, Road No 10, Banjara Hills, Hyderabad","second":{"first":17.4150505,"second":78.447729},"state":"Telangana"},{"first":"AIG Hospitals, Survey No 136, Plot No 2\\/3\\/4\\/5, 1, Mindspace Rd, Gachibowli, Hyderabad","second":{"first":17.4433649,"second":78.3659983},"state":"Telangana"},{"first":"Kakatiya Medical College, Warangal","second":{"first":18.0013286,"second":79.59112499999999},"state":"Telangana"},{"first":"Tenet Diagnostics, Plot No 51, Kineta Towers, Journalist Colony, Road No 3, Banjara Hills, Hyderabad","second":{"first":17.4286958,"second":78.44667439999999},"state":"Telangana"},{"first":"Rajiv Gandhi Institute of Medical Sciences, Adilabad","second":{"first":19.6631359,"second":78.5249497},"state":"Telangana"},{"first":"Institute of Preventive Medicine, Hyderabad","second":{"first":17.394054399999998,"second":78.49028919999999},"state":"Telangana"},{"first":"Nizam\u0019s Institute of Medical Sciences, Hyderabad","second":{"first":17.421937,"second":78.4520067},"state":"Telangana"},{"first":"Laboratory Services, Apollo Hospitals, 6th Floor, Health Street Building, Jubilee Hills, Hyderabad","second":{"first":17.4137876,"second":78.41192339999999},"state":"Telangana"},{"first":"Centre for DNA Fingerprinting & Diagnostics, Hyderabad","second":{"first":17.3934236,"second":78.5575552},"state":"Telangana"},{"first":"LEPRA Society-Blue Peter Public Health and Research Centre, Cherlapally, Near TEC Building, Hyderabad","second":{"first":17.4114689,"second":78.607039},"state":"Telangana"},{"first":"Medcis Pathlabs India Pvt Ltd, Plot No 16 & 17, Swathi Plaza, Anand Nagar, New Bowenpally, Secunderabad","second":{"first":17.4587656,"second":78.4783593},"state":"Telangana"},{"first":"Department of Lab Medicine, Yashoda Hospital, 9th Floor, 1-1-156 & 157, Alexander Road, Secunderabad","second":{"first":17.4420712,"second":78.4970526},"state":"Telangana"},{"first":"Vijaya Diagnostic Centre Pvt Ltd, Street No 19, Himayath Nagar, Hyderabad","second":{"first":17.4041605,"second":78.4798766},"state":"Telangana"},{"first":"Lucid Medical Diagnostics Pvt Ltd, Plot No 203,203A, Vasavi Nagar, Karkhana,Secunderabad","second":{"first":17.4595616,"second":78.50061660000001},"state":"Telangana"},{"first":"Cell Correct Diagnostics, Virinchi Hospitals, Road No 1, Banjara Hills, Hyderabad","second":{"first":17.4079966,"second":78.4515028},"state":"Telangana"},{"first":"American Institute of Pathology And Lab Sciences Pvt Ltd, Citizens Hospital, Serilingampally, Hyderabad","second":{"first":17.4703841,"second":78.3108456},"state":"Telangana"},{"first":"Apollo Health and Lifestyle Limited, Diagnostic Labortory, Bowenpally, Secunderabad","second":{"first":17.4691185,"second":78.4843302},"state":"Telangana"},{"first":"Centre for Cellular & Molecular Biology, Hyderabad","second":{"first":17.421021,"second":78.54103549999999},"state":"Telangana"},{"first":"Krishna Institute of Medical Sciences Ltd, Dept of Lab Services, 1-8-31\\/1, Minister Road, Secunderabad","second":{"first":17.4375708,"second":78.48230850000002},"state":"Telangana"},{"first":"Gandhi Medical College, Secunderabad","second":{"first":17.4246598,"second":78.5043917},"state":"Telangana"},{"first":"Sir Ronald Ross of Tropical & Communicable Diseases, Hyderabad","second":{"first":17.4455247,"second":78.47224279999999},"state":"Telangana"},{"first":"Dr. Remedies Labs Private Ltd, A3, Titus Plaza, Sharma Commercial Complex, Punjagutta, Hyderabad","second":{"first":17.4244891,"second":78.45304500000002},"state":"Telangana"},{"first":"CSIR- Indian Institute of Petroleum, Dehradun","second":{"first":30.2684978,"second":78.0785026},"state":"Uttarakhand"},{"first":"JLN Hospital, Rudrapur, USNagar","second":{"first":28.970385999999998,"second":79.39983219999999},"state":"Uttarakhand"},{"first":"District Hospital, Uttarkashi","second":{"first":30.729788,"second":78.4426884},"state":"Uttarakhand"},{"first":"Doon Medical College, Dehradun","second":{"first":30.3080671,"second":78.0240864},"state":"Uttarakhand"},{"first":"Govt. Medical College, Haldwani","second":{"first":29.2063975,"second":79.52138120000001},"state":"Uttarakhand"},{"first":"All India Institute of Medical Sciences, Rishikesh","second":{"first":30.0818351,"second":78.2887633},"state":"Uttarakhand"},{"first":"Dr. Ahuja\u0019s Pathology and Imaging Centre, 7-B, Astley Hall, Dehradun","second":{"first":30.3268199,"second":78.0470366},"state":"Uttarakhand"},{"first":"ICAR- Indian Veterinary Research Institute (IVRI), Mukteswar","second":{"first":29.471890100000003,"second":79.6558242},"state":"Uttarakhand"},{"first":"Mela Hospital, Haridwar","second":{"first":29.951512200000003,"second":78.1579603},"state":"Uttarakhand"},{"first":"Veer Chandra Singh Garhwali Govt. Institute of Medical Science & Research, Srinagar, Pauri, Garhwal","second":{"first":30.2278594,"second":78.8230734},"state":"Uttarakhand"},{"first":"District Hospital, Pithoragarh","second":{"first":29.5871513,"second":80.211648},"state":"Uttarakhand"}];

document.getElementById("labsmap").style.display="block";
document.getElementById("labsmapbutton").focus();
  var mapProp;
    var state=window.localStorage.getItem('state');

      mapProp= {
       center:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
       zoom:9,
     };
     var map = new google.maps.Map(document.getElementById("labsmap"),mapProp);

     var marker1 = new google.maps.Marker({
       position:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
       animation:google.maps.Animation.BOUNCE
     });
     marker1.setMap(map);
var markers=[];
var i=0;
var yes=true;
     for(i=0;i<lab.length;i++){
       if(lab[i].state==state){
         yes=false;
         var marker2 = new google.maps.Marker({
           position:new google.maps.LatLng(parseFloat(lab[i].second.first),parseFloat(lab[i].second.second)),
           title:lab[i].first
         });
         marker2.setMap(map);
         markers.push(marker2);


       }
}

if(yes==true){
  for(i=0;i<lab.length;i=i+5){
      yes=false;
      var marker2 = new google.maps.Marker({
        position:new google.maps.LatLng(parseFloat(lab[i].second.first),parseFloat(lab[i].second.second)),
        title:lab[i].first
      });
      marker2.setMap(map);
      markers.push(marker2);
}
}
for(i=0;i<markers.length;i++){
  google.maps.event.addListener(markers[i], 'click', function() {
      var con="<b><font color=#333333 size=+1>"+this.title+"</b></font>";
      con=con.link("http://maps.google.com/maps?daddr="+this.title);
    var infowindow = new google.maps.InfoWindow({
content:con
});
infowindow.open(map,this);
  });

}

}

function healthcaremap(){
  document.getElementById("healthcarebutton").style.display="block";
document.getElementById("healthcarebutton").focus();
var hmap=[{'first':11.6651327,'second':92.7539662},{'first':11.6748213,'second':92.72511949999999},{'first':11.6532696,'second':92.7306157},{'first':11.675458899999999,'second':92.7474044},{'first':11.6491442,'second':92.717406},{'first':13.2449391,'second':92.975524},{'first':12.9246865,'second':92.89991739999999},{'first':13.2449391,'second':92.975524},{'first':12.9120112,'second':92.9056816},{'first':11.675458899999999,'second':92.7474044},{'first':11.6491442,'second':92.717406},{'first':7.9768403999999995,'second':93.5509074},{'first':13.2449391,'second':92.975524},{'first':7.9675489,'second':93.35904459999999},{'first':9.175947299999999,'second':92.8148496},{'first':11.675458899999999,'second':92.7474044},{'first':11.6491442,'second':92.717406},{'first':14.655488100000001,'second':77.584036},{'first':13.2827098,'second':78.95565669999999},{'first':13.6395705,'second':79.4005262},{'first':17.0665153,'second':81.88289859999999},{'first':16.413570099999998,'second':80.55567649999999},{'first':16.5174383,'second':80.6713233},{'first':15.4922086,'second':78.4189913},{'first':15.5341227,'second':80.05475},{'first':14.4259731,'second':80.0136424},{'first':14.425279499999998,'second':79.9630414},{'first':18.3517809,'second':83.90278099999999},{'first':17.7593001,'second':83.3297549},{'first':17.7854788,'second':83.37517},{'first':17.687127099999998,'second':83.2505089},{'first':18.146836,'second':83.445393},{'first':16.7364625,'second':81.14365860000001},{'first':16.712648899999998,'second':81.12113409999999},{'first':14.483009599999999,'second':78.7893185},{'first':14.687828399999999,'second':77.60057859999999},{'first':14.670900500000002,'second':77.5943719},{'first':14.675556499999999,'second':77.6030968},{'first':13.832510399999999,'second':77.4923338},{'first':14.6605996,'second':77.6144719},{'first':15.912899800000002,'second':79.7399875},{'first':16.5194006,'second':80.66805769999999},{'first':13.6447357,'second':79.40576790000001},{'first':13.6646284,'second':79.51482589999999},{'first':12.790709,'second':78.36427599999999},{'first':13.6391561,'second':79.4038431},{'first':16.5909859,'second':82.0225998},{'first':17.0242535,'second':82.2585003},{'first':17.0197073,'second':81.7916304},{'first':17.02431,'second':82.232311},{'first':14.434441200000002,'second':79.96817279999999},{'first':17.0058351,'second':81.7872869},{'first':16.225619899999998,'second':80.3080419},{'first':17.710926,'second':83.302371},{'first':16.2443729,'second':80.6317413},{'first':16.331806399999998,'second':80.4889773},{'first':16.2941921,'second':80.44884379999999},{'first':16.2384214,'second':80.5574428},{'first':16.489906899999998,'second':80.6715775},{'first':16.495656,'second':80.70357},{'first':16.517483,'second':80.6750971},{'first':16.506174299999998,'second':80.6480153},{'first':16.536301,'second':80.584723},{'first':16.506174299999998,'second':80.6480153},{'first':16.7139128,'second':81.0941782},{'first':16.6061552,'second':80.50373019999999},{'first':16.6209149,'second':80.5413043},{'first':15.8132734,'second':78.0380988},{'first':15.825083,'second':78.030954},{'first':15.8281257,'second':78.0372792},{'first':15.795617799999999,'second':78.06336650000001},{'first':17.7112739,'second':83.3154179},{'first':15.824326,'second':78.0146285},{'first':13.5246827,'second':79.9882149},{'first':15.8188146,'second':78.0397689},{'first':15.7412546,'second':79.2551079},{'first':15.4878817,'second':80.04714369999999},{'first':13.635311999999999,'second':79.4199407},{'first':15.479061,'second':80.04829699999999},{'first':15.5048795,'second':80.0513069},{'first':14.4366521,'second':79.9992737},{'first':14.438347900000002,'second':79.9925387},{'first':17.7213739,'second':83.3148756},{'first':14.438347900000002,'second':79.9925387},{'first':14.443909399999999,'second':79.9850194},{'first':18.6057678,'second':84.2301531},{'first':18.461491799999997,'second':83.6583284},{'first':18.313284499999998,'second':83.8955833},{'first':18.298868199999998,'second':83.9037476},{'first':18.2996351,'second':83.9049789},{'first':18.304591,'second':83.8818383},{'first':17.763501599999998,'second':83.3106275},{'first':17.7172512,'second':83.3091802},{'first':17.9216597,'second':83.42640019999999},{'first':17.7109642,'second':83.3026854},{'first':17.6868159,'second':83.2184815},{'first':17.8306246,'second':83.360421},{'first':17.8306246,'second':83.360421},{'first':18.108684,'second':83.410309},{'first':18.1105064,'second':83.4186636},{'first':18.1066576,'second':83.39555059999999},{'first':17.7404065,'second':83.3081929},{'first':18.110712799999998,'second':83.3866177},{'first':18.107774,'second':83.4013621},{'first':16.8072523,'second':81.5316033},{'first':16.7139128,'second':81.0941782},{'first':16.754595899999998,'second':81.6745171},{'first':16.7565815,'second':81.6769714},{'first':16.5411268,'second':81.49602929999999},{'first':16.5139682,'second':81.72794859999999},{'first':14.4222318,'second':78.2263388},{'first':14.4706412,'second':78.8227217},{'first':14.474762799999999,'second':78.82394819999999},{'first':14.752623999999999,'second':78.5541053},{'first':14.473452600000002,'second':78.81167769999999},{'first':13.6473845,'second':79.4174523},{'first':13.273854,'second':79.120313},{'first':13.5560496,'second':78.50100069999999},{'first':13.5574012,'second':78.5094833},{'first':13.554655799999999,'second':78.5073268},{'first':12.7461129,'second':78.342291},{'first':13.3229303,'second':79.586805},{'first':13.650737399999999,'second':78.94777599999999},{'first':13.554655799999999,'second':78.5073268},{'first':17.0665153,'second':81.88289859999999},{'first':16.230722,'second':80.0527479},{'first':16.298772,'second':80.4531425},{'first':16.2985278,'second':80.45424609999999},{'first':16.30023,'second':80.449249},{'first':16.228016,'second':80.04650699999999},{'first':16.2359181,'second':80.04964989999999},{'first':16.23707,'second':80.0563035},{'first':16.3035784,'second':80.4405749},{'first':16.2978928,'second':80.45206519999999},{'first':16.30023,'second':80.449249},{'first':16.2356884,'second':80.0555528},{'first':16.2360428,'second':80.04848330000002},{'first':16.317479,'second':80.4375185},{'first':15.739656900000002,'second':79.27144559999999},{'first':14.463722699999998,'second':78.82268719999999},{'first':16.320456399999998,'second':80.4372211},{'first':16.2980306,'second':80.4450009},{'first':16.235736,'second':80.05550889999999},{'first':16.2960541,'second':80.4542039},{'first':16.543470900000003,'second':81.5163556},{'first':14.151888999999999,'second':77.77685},{'first':16.2982788,'second':80.449534},{'first':18.1196084,'second':83.4041419},{'first':16.296438,'second':80.4528004},{'first':16.3028109,'second':80.448122},{'first':15.840360599999999,'second':78.0369826},{'first':14.6812809,'second':77.5980331},{'first':16.2374103,'second':80.06591980000002},{'first':16.298594299999998,'second':80.4538008},{'first':16.2970395,'second':80.4451491},{'first':16.2968515,'second':80.4489598},{'first':16.2349651,'second':80.0473842},{'first':16.0924075,'second':80.1661342},{'first':16.2436045,'second':80.64624800000001},{'first':16.302443399999998,'second':80.433976},{'first':16.2373935,'second':80.0464883},{'first':16.307142,'second':80.46350799999999},{'first':16.298594299999998,'second':80.4538008},{'first':16.3079637,'second':80.4189868},{'first':16.237052,'second':80.04743549999999},{'first':16.2360428,'second':80.04848330000002},{'first':16.2984628,'second':80.4546367},{'first':16.3044565,'second':80.4615997},{'first':16.3066525,'second':80.4365402},{'first':16.296297,'second':80.4361036},{'first':16.237434399999998,'second':80.0470948},{'first':16.3103683,'second':80.43339820000001},{'first':16.2985828,'second':80.45361539999999},{'first':16.2990761,'second':80.4512146},{'first':16.2966619,'second':80.4408529},{'first':16.237126,'second':80.0567427},{'first':14.674170499999999,'second':77.6073062},{'first':16.2971562,'second':80.44975579999999},{'first':16.298856999999998,'second':80.45656699999999},{'first':16.5025032,'second':80.65457959999999},{'first':16.509833999999998,'second':80.66494190000002},{'first':16.5122729,'second':80.63150449999999},{'first':16.506174299999998,'second':80.6480153},{'first':16.5219541,'second':80.6774679},{'first':16.510933500000004,'second':80.6322591},{'first':16.5010874,'second':80.6424894},{'first':16.4976143,'second':80.6555727},{'first':16.511734600000004,'second':80.63468999999999},{'first':16.4344461,'second':80.9931388},{'first':16.5136902,'second':80.63727659999999},{'first':16.5114493,'second':80.638263},{'first':16.5401907,'second':80.6398918},{'first':16.5078003,'second':80.64275909999999},{'first':16.4876592,'second':80.6774803},{'first':16.5111055,'second':80.62946889999999},{'first':16.506174299999998,'second':80.6480153},{'first':16.492569,'second':80.66560199999999},{'first':16.495035,'second':80.6618234},{'first':16.502443799999998,'second':80.6426619},{'first':16.5022621,'second':80.6407076},{'first':16.5117098,'second':80.63746189999999},{'first':16.48726,'second':80.684152},{'first':16.5109737,'second':80.63505049999999},{'first':16.5008962,'second':80.6540279},{'first':16.4777588,'second':80.70161619999999},{'first':16.5101327,'second':80.637323},{'first':16.506174299999998,'second':80.6480153},{'first':16.5119229,'second':80.6319089},{'first':16.5196282,'second':80.69455119999999},{'first':16.5117098,'second':80.63746189999999},{'first':16.5135459,'second':80.6692855},{'first':16.5122836,'second':80.63691519999999},{'first':16.176209999999998,'second':81.125215},{'first':16.1811687,'second':81.13712970000002},{'first':16.5001317,'second':80.6559297},{'first':16.516133200000002,'second':80.6232102},{'first':16.4395781,'second':80.99250909999999},{'first':16.299291,'second':80.4448709},{'first':16.5088752,'second':80.61548859999999},{'first':16.5122836,'second':80.63691519999999},{'first':16.506174299999998,'second':80.6480153},{'first':16.507707,'second':80.6405503},{'first':16.5098473,'second':80.6372502},{'first':16.506174299999998,'second':80.6480153},{'first':16.5238674,'second':80.6550634},{'first':16.5222229,'second':80.675822},{'first':16.1783464,'second':81.1365866},{'first':16.5463744,'second':80.6473316},{'first':16.5004291,'second':80.6440385},{'first':16.505686,'second':80.6601415},{'first':16.4696416,'second':80.70087819999999},{'first':16.5088684,'second':80.6273915},{'first':16.509166699999998,'second':80.61222219999999},{'first':16.504247,'second':80.64768409999999},{'first':16.5112549,'second':80.6357297},{'first':15.486082300000001,'second':78.476365},{'first':15.8322017,'second':78.0385812},{'first':15.8234967,'second':78.04131439999999},{'first':16.511449,'second':80.635825},{'first':17.0083099,'second':81.787939},{'first':15.812326500000001,'second':78.039666},{'first':17.7123472,'second':83.31393039999999},{'first':15.804961899999999,'second':78.0383389},{'first':15.4864254,'second':78.48875249999999},{'first':15.838087,'second':78.0410412},{'first':15.8134071,'second':78.05705429999999},{'first':14.448890800000001,'second':79.9852528},{'first':15.835707900000001,'second':78.04224119999999},{'first':15.814472799999999,'second':78.0442652},{'first':15.487966000000002,'second':78.4792993},{'first':16.5214382,'second':80.6140997},{'first':17.710798099999998,'second':83.3123715},{'first':15.4835668,'second':78.4732},{'first':15.742862,'second':77.880279},{'first':15.836125599999999,'second':78.0368794},{'first':15.469336,'second':78.482935},{'first':15.814740599999999,'second':78.0419689},{'first':15.824551099999999,'second':78.0410539},{'first':15.802883399999999,'second':78.047384},{'first':15.827947399999998,'second':78.0459003},{'first':15.485394099999997,'second':78.4796142},{'first':15.8127538,'second':78.0376495},{'first':15.7979958,'second':78.0526806},{'first':16.483596900000002,'second':80.7003053},{'first':13.6351683,'second':79.4268745},{'first':15.631882399999999,'second':77.27588329999999},{'first':16.510797,'second':80.6319443},{'first':15.8140412,'second':78.0446628},{'first':15.4839236,'second':78.4848777},{'first':16.3041333,'second':80.4340436},{'first':15.849163999999998,'second':78.0212634},{'first':13.638342399999999,'second':79.4141424},{'first':13.636780499999999,'second':79.42744549999999},{'first':15.527128200000002,'second':80.0493611},{'first':16.299070999999998,'second':80.45271},{'first':15.497204499999999,'second':80.04856459999999},{'first':15.211879999999999,'second':79.9015043},{'first':13.834706,'second':77.49403579999999},{'first':15.5117326,'second':80.0393976},{'first':15.511877099999998,'second':80.0405705},{'first':16.960026,'second':82.2369223},{'first':15.482276899999999,'second':80.0465612},{'first':15.511615599999997,'second':80.0405398},{'first':14.151888999999999,'second':77.77685},{'first':15.816661599999998,'second':80.35869},{'first':15.5144211,'second':80.04399889999999},{'first':16.509418,'second':80.64169},{'first':15.5106985,'second':80.0393684},{'first':15.5114761,'second':80.0388612},{'first':15.814279399999998,'second':78.0457024},{'first':16.513101,'second':80.6613737},{'first':15.912899800000002,'second':79.7399875},{'first':15.514543900000001,'second':80.0434952},{'first':16.5137619,'second':80.6217283},{'first':15.912899800000002,'second':79.7399875},{'first':13.6378641,'second':79.42497929999999},{'first':15.738302399999998,'second':79.2703271},{'first':15.2153186,'second':79.9010784},{'first':15.5114591,'second':80.04208659999999},{'first':14.406826599999997,'second':79.9526448},{'first':15.493174400000001,'second':80.0495718},{'first':15.515172999999999,'second':80.0443676},{'first':15.5033076,'second':80.0426561},{'first':14.7100835,'second':77.6095349},{'first':15.8272736,'second':80.3573258},{'first':15.511226299999999,'second':80.0361815},{'first':16.2975205,'second':80.44116129999999},{'first':14.1463424,'second':79.85038089999999},{'first':14.452049599999999,'second':79.98588939999999},{'first':14.1452803,'second':79.8499575},{'first':14.916762299999998,'second':79.9951669},{'first':14.444994499999998,'second':79.983335},{'first':14.621351299999999,'second':79.623336},{'first':15.8760306,'second':78.57560409999999},{'first':14.4428014,'second':79.98035899999999},{'first':14.9117681,'second':79.9905572},{'first':14.1467798,'second':79.8496357},{'first':14.426776899999998,'second':79.9590078},{'first':14.625599500000002,'second':79.6227553},{'first':14.443859,'second':79.9789777},{'first':16.5045847,'second':80.65021999999999},{'first':14.4425987,'second':79.98645599999999},{'first':16.755868200000002,'second':81.6852},{'first':14.452152499999999,'second':79.9878226},{'first':14.9160243,'second':79.99062459999999},{'first':18.3066897,'second':83.89303},{'first':18.304591,'second':83.8818383},{'first':18.309003999999998,'second':83.89642889999999},{'first':18.3542798,'second':83.7585405},{'first':18.448304999999998,'second':83.66550409999999},{'first':18.455583900000004,'second':83.6493806},{'first':18.600673699999998,'second':83.7575774},{'first':17.744435199999998,'second':83.30834879999999},{'first':17.7081494,'second':83.3098237},{'first':17.6867318,'second':83.2035848},{'first':17.727373399999998,'second':83.30481639999999},{'first':17.72758,'second':83.30433719999999},{'first':17.717261699999998,'second':83.30934769999999},{'first':17.718663799999998,'second':83.3115696},{'first':17.7015606,'second':83.1764599},{'first':15.912899800000002,'second':79.7399875},{'first':17.766338299999997,'second':83.221285},{'first':18.1066181,'second':83.3977354},{'first':17.7410992,'second':83.24328249999999},{'first':17.7123472,'second':83.31393039999999},{'first':17.726011,'second':83.317335},{'first':18.0805802,'second':82.66454689999999},{'first':17.709981199999998,'second':83.3046358},{'first':17.6847037,'second':83.00600519999999},{'first':17.7632559,'second':83.30787140000001},{'first':17.743445899999998,'second':83.3355756},{'first':17.7393544,'second':83.2644868},{'first':18.323924599999998,'second':82.87625109999999},{'first':17.689742400000004,'second':83.1144506},{'first':17.706194,'second':83.309213},{'first':17.7272738,'second':83.3330929},{'first':17.684120999999998,'second':83.243252},{'first':17.744435199999998,'second':83.30834879999999},{'first':17.8016102,'second':83.36652459999999},{'first':17.666432999999998,'second':82.6105228},{'first':17.7435705,'second':83.3145282},{'first':17.7085318,'second':83.30861469999999},{'first':17.7100634,'second':83.3045618},{'first':17.684120999999998,'second':83.243252},{'first':17.735985,'second':83.2714912},{'first':17.714416099999998,'second':83.19570379999999},{'first':17.714416099999998,'second':83.19570379999999},{'first':17.7109234,'second':83.3026694},{'first':17.6868159,'second':83.2184815},{'first':17.7410992,'second':83.24328249999999},{'first':17.710154,'second':83.31443290000001},{'first':17.7638794,'second':83.3078273},{'first':17.7202776,'second':83.31262389999999},{'first':17.6868159,'second':83.2184815},{'first':17.753047199999997,'second':83.2172801},{'first':17.7396839,'second':83.304114},{'first':17.682534099999998,'second':83.1969804},{'first':17.7106069,'second':83.3030175},{'first':17.6876156,'second':83.00176599999999},{'first':15.912899800000002,'second':79.7399875},{'first':17.7404065,'second':83.3081929},{'first':17.7402783,'second':83.2507},{'first':17.7289817,'second':83.30571359999999},{'first':17.727952,'second':83.303028},{'first':17.7068594,'second':83.20406620000001},{'first':17.745376,'second':83.3317124},{'first':17.7428299,'second':83.33071},{'first':17.7202776,'second':83.31262389999999},{'first':18.1115353,'second':83.4137264},{'first':18.1671111,'second':83.4490002},{'first':18.1066181,'second':83.3977354},{'first':18.108390099999998,'second':83.4116597},{'first':18.1057784,'second':83.1392172},{'first':18.1075762,'second':83.40118059999999},{'first':18.781716199999998,'second':83.42675179999999},{'first':18.105193,'second':83.13785399999999},{'first':18.114603499999998,'second':83.41333829999999},{'first':16.5209001,'second':81.72856259999999},{'first':16.432949699999998,'second':81.695852},{'first':14.4772537,'second':78.82589689999999},{'first':13.5592733,'second':78.495333},{'first':14.0512699,'second':78.7517934},{'first':14.734445499999998,'second':79.0604761},{'first':14.7551368,'second':78.54846049999999},{'first':14.748329999999997,'second':78.54772559999999},{'first':14.466304300000001,'second':78.8305863},{'first':17.710862199999998,'second':83.3085607},{'first':14.4630497,'second':78.8232163},{'first':14.4131274,'second':78.2339081},{'first':15.527669000000001,'second':80.0168341},{'first':14.7499813,'second':78.5479308},{'first':14.460509,'second':78.82375069999999},{'first':14.4654533,'second':78.832804},{'first':14.474762799999999,'second':78.82394819999999},{'first':14.753924500000002,'second':78.5469239},{'first':14.462244499999999,'second':78.8243833},{'first':14.4771569,'second':78.8252631},{'first':14.409172199999999,'second':78.22825399999999},{'first':14.475660999999999,'second':78.8232756},{'first':14.1922532,'second':79.1585916},{'first':14.472648500000002,'second':78.8230926},{'first':27.903965099999997,'second':96.17391160000001},{'first':27.903965099999997,'second':96.17391160000001},{'first':27.903965099999997,'second':96.17391160000001},{'first':27.903965099999997,'second':96.17391160000001},{'first':27.903965099999997,'second':96.17391160000001},{'first':27.903965099999997,'second':96.17391160000001},{'first':27.1038855,'second':93.6910961},{'first':27.1392588,'second':95.7387578},{'first':27.4899126,'second':96.21010509999999},{'first':27.4899126,'second':96.21010509999999},{'first':27.4899126,'second':96.21010509999999},{'first':27.4899126,'second':96.21010509999999},{'first':27.421747600000003,'second':96.021806},{'first':27.421747600000003,'second':96.021806},{'first':27.5402895,'second':96.1015913},{'first':27.5402895,'second':96.1015913},{'first':27.5402895,'second':96.1015913},{'first':27.513473299999998,'second':95.88287509999999},{'first':27.513473299999998,'second':95.88287509999999},{'first':27.513473299999998,'second':95.88287509999999},{'first':27.2472671,'second':95.9188544},{'first':27.2472671,'second':95.9188544},{'first':27.2472671,'second':95.9188544},{'first':27.2472671,'second':95.9188544},{'first':27.2472671,'second':95.9188544},{'first':27.2472671,'second':95.9188544},{'first':27.421747600000003,'second':96.021806},{'first':27.421747600000003,'second':96.021806},{'first':27.421747600000003,'second':96.021806},{'first':27.421747600000003,'second':96.021806},{'first':27.421747600000003,'second':96.021806},{'first':28.796808600000002,'second':95.9104519},{'first':27.3530677,'second':93.0432826},{'first':28.0709567,'second':95.32069399999999},{'first':28.0618646,'second':95.3259629},{'first':28.0618646,'second':95.3259629},{'first':28.0618646,'second':95.3259629},{'first':28.1668906,'second':95.40903899999999},{'first':28.1668906,'second':95.40903899999999},{'first':28.1668906,'second':95.40903899999999},{'first':28.2179994,'second':94.7277528},{'first':28.2179994,'second':94.7277528},{'first':28.2179994,'second':94.7277528},{'first':28.2179994,'second':94.7277528},{'first':27.6169349,'second':93.83915569999999},{'first':27.6169349,'second':93.83915569999999},{'first':27.898967799999998,'second':93.35148629999999},{'first':27.693630000000002,'second':93.635819},{'first':27.693630000000002,'second':93.635819},{'first':27.801364999999997,'second':93.3334239},{'first':27.801364999999997,'second':93.3334239},{'first':27.9815413,'second':94.6859499},{'first':27.9424934,'second':95.18901029999999},{'first':28.2179994,'second':94.7277528},{'first':27.928088499999998,'second':96.1578466},{'first':28.2179994,'second':94.7277528},{'first':27.025903999999997,'second':95.1833733},{'first':28.1414026,'second':95.8406634},{'first':27.595602799999998,'second':94.76786419999999},{'first':27.595602799999998,'second':94.76786419999999},{'first':27.0304812,'second':95.4756585},{'first':28.2179994,'second':94.7277528},{'first':27.5390107,'second':93.8219742},{'first':27.6644446,'second':95.86824519999999},{'first':27.6692115,'second':95.8644018},{'first':27.1038855,'second':93.6910961},{'first':27.1038855,'second':93.6910961},{'first':28.147254000000004,'second':94.7484518},{'first':28.3359502,'second':94.96165099999999},{'first':27.265523599999998,'second':92.4201492},{'first':27.5821427,'second':91.98070659999999},{'first':28.2179994,'second':94.7277528},{'first':26.9928749,'second':95.501379},{'first':27.193505199999997,'second':95.4699173},{'first':28.6422351,'second':95.02481689999999},{'first':27.981327999999998,'second':94.2174304},{'first':27.981327999999998,'second':94.2174304},{'first':27.265523599999998,'second':92.4201492},{'first':27.2030919,'second':92.3986432},{'first':27.3518321,'second':92.2500012},{'first':27.104343999999998,'second':92.1137789},{'first':27.3723244,'second':92.54579539999999},{'first':27.0137499,'second':92.6344812},{'first':27.2111558,'second':92.5065661},{'first':26.833460799999997,'second':91.9242737},{'first':26.8007566,'second':92.3166162},{'first':26.792381199999998,'second':92.9617488},{'first':28.162783599999997,'second':94.8054142},{'first':28.2179994,'second':94.7277528},{'first':26.324422499999997,'second':90.98497719999999},{'first':24.775797999999998,'second':92.7949158},{'first':26.525264999999997,'second':90.490662},{'first':26.4375327,'second':92.03645379999999},{'first':27.4580238,'second':94.57453319999999},{'first':27.4875825,'second':94.9400886},{'first':26.1416747,'second':90.6100549},{'first':26.035359099999997,'second':89.9646381},{'first':26.7179081,'second':94.176819},{'first':26.7425738,'second':94.19510869999999},{'first':26.214954199999998,'second':91.6276488},{'first':26.121197499999997,'second':91.9762087},{'first':26.1855023,'second':91.7405819},{'first':26.154210900000002,'second':91.77007139999999},{'first':25.8369413,'second':93.4304394},{'first':26.448051399999997,'second':89.98423},{'first':26.1904623,'second':92.3640875},{'first':26.3449152,'second':92.6894557},{'first':26.448461599999998,'second':91.4337968},{'first':26.955303299999997,'second':94.6105527},{'first':26.6814787,'second':92.6522739},{'first':27.503888099999998,'second':95.35862739999999},{'first':26.719862199999998,'second':92.0787849},{'first':26.632766999999998,'second':91.570551},{'first':26.5196237,'second':91.6370323},{'first':26.524516,'second':91.34629699999999},{'first':26.7352572,'second':91.2578169},{'first':26.2006043,'second':92.9375739},{'first':26.643691,'second':91.57657549999999},{'first':26.545492099999997,'second':91.725279},{'first':26.1855023,'second':91.7405819},{'first':26.635797999999998,'second':91.226306},{'first':26.73108,'second':91.5555368},{'first':26.633795,'second':91.0965863},{'first':26.6640518,'second':91.3405504},{'first':26.5363771,'second':91.35774529999999},{'first':26.491335,'second':90.89894799999999},{'first':26.414157000000003,'second':90.9830327},{'first':26.5054542,'second':91.17258059999999},{'first':26.414157000000003,'second':90.9830327},{'first':26.390805000000004,'second':91.12894879999999},{'first':26.277129199999997,'second':91.1571137},{'first':26.6162802,'second':91.1768657},{'first':26.266468399999997,'second':90.9608799},{'first':26.2723306,'second':90.8365437},{'first':26.4907458,'second':90.968598},{'first':26.2006043,'second':92.9375739},{'first':26.4799771,'second':91.0096968},{'first':26.3556524,'second':90.86796079999999},{'first':26.360626999999997,'second':91.223073},{'first':26.886713,'second':93.613869},{'first':26.836088699999998,'second':93.2918778},{'first':26.726663199999997,'second':93.1478514},{'first':26.7813625,'second':92.914548},{'first':25.8497421,'second':92.87799890000001},{'first':26.399026499999998,'second':90.4470608},{'first':26.470979099999997,'second':90.802874},{'first':26.3437532,'second':90.5155535},{'first':26.4311408,'second':90.576916},{'first':26.339140099999998,'second':90.6543323},{'first':24.7925473,'second':92.9988049},{'first':24.6807877,'second':92.9366179},{'first':24.920488499999998,'second':93.1290393},{'first':24.876687699999998,'second':92.5731306},{'first':24.9162584,'second':92.72954600000001},{'first':24.968324,'second':92.572592},{'first':26.624271399999998,'second':90.4921232},{'first':24.6451004,'second':92.88811749999999},{'first':26.2006043,'second':92.9375739},{'first':24.818416100000004,'second':92.7979228},{'first':24.920221299999998,'second':92.9598999},{'first':24.884006199999998,'second':92.8789111},{'first':24.732600599999998,'second':92.88889119999999},{'first':26.118034800000004,'second':92.1938686},{'first':24.8485507,'second':92.7649612},{'first':27.032427499999997,'second':95.0586462},{'first':27.1113304,'second':95.1614534},{'first':27.076361799999997,'second':95.1779445},{'first':26.1268712,'second':91.7968011},{'first':27.0004717,'second':94.83764339999999},{'first':26.469544499999998,'second':89.9696802},{'first':26.545961199999997,'second':90.43770769999999},{'first':26.5835406,'second':90.5446912},{'first':26.591851700000003,'second':90.48858179999999},{'first':26.512746,'second':90.697063},{'first':26.460554899999998,'second':91.8283427},{'first':26.497968200000003,'second':91.92213799999999},{'first':26.4583369,'second':91.9087026},{'first':26.2006043,'second':92.9375739},{'first':26.5832809,'second':92.1425692},{'first':26.4426924,'second':91.9594767},{'first':26.4008,'second':91.90285},{'first':26.5096965,'second':92.13520390000001},{'first':27.6006794,'second':94.7247968},{'first':27.3177438,'second':94.420817},{'first':27.4292327,'second':94.3176002},{'first':27.574676099999998,'second':94.6887726},{'first':27.832276099999998,'second':95.2214477},{'first':26.2006043,'second':92.9375739},{'first':26.198197399999998,'second':90.1413333},{'first':26.3982636,'second':90.44765199999999},{'first':26.035359099999997,'second':89.9646381},{'first':26.2006043,'second':92.9375739},{'first':26.1992352,'second':89.7851752},{'first':26.2534979,'second':89.7750837},{'first':26.130145100000004,'second':89.8721022},{'first':26.074887099999998,'second':89.9631893},{'first':27.286985599999998,'second':95.2475518},{'first':27.4019989,'second':94.8799299},{'first':27.2207123,'second':94.8909681},{'first':27.4917167,'second':95.17692319999999},{'first':26.4311408,'second':90.576916},{'first':27.38019,'second':95.168019},{'first':27.2773044,'second':95.02831239999999},{'first':27.1844796,'second':95.1195621},{'first':27.4036966,'second':94.8802044},{'first':27.2768741,'second':95.330413},{'first':27.3011788,'second':94.8306061},{'first':27.2954862,'second':95.13669159999999},{'first':27.135219799999998,'second':94.8183684},{'first':25.9175081,'second':92.95513989999999},{'first':25.319350399999998,'second':93.0118708},{'first':25.740022,'second':92.91450739999999},{'first':25.5118485,'second':93.1195556},{'first':25.1172479,'second':92.85728890000001},{'first':25.297975899999997,'second':93.1364545},{'first':25.5052335,'second':92.7329802},{'first':25.1834405,'second':93.0111276},{'first':25.982536399999997,'second':90.7890927},{'first':26.0489662,'second':90.1937655},{'first':26.1021322,'second':90.39454219999999},{'first':25.9631282,'second':91.0542758},{'first':26.0707378,'second':90.79047519999999},{'first':25.9691008,'second':90.9412519},{'first':26.0846482,'second':90.55651379999999},{'first':26.094752399999997,'second':90.7398099},{'first':24.7925473,'second':92.9988049},{'first':26.143878400000002,'second':93.93580949999999},{'first':26.2117043,'second':93.86414119999999},{'first':26.600526499999997,'second':93.8431061},{'first':26.489638199999998,'second':91.67878119999999},{'first':26.60051,'second':93.94885},{'first':26.696875199999997,'second':93.9852916},{'first':26.602973499999997,'second':93.4117917},{'first':26.5238515,'second':93.96233699999999},{'first':26.377801899999998,'second':94.01651609999999},{'first':26.238049999999998,'second':93.9836119},{'first':26.886713,'second':93.613869},{'first':26.2006043,'second':92.9375739},{'first':26.323421999999997,'second':94.088534},{'first':24.4147827,'second':92.57341939999999},{'first':24.876687699999998,'second':92.5731306},{'first':24.742407999999998,'second':92.626398},{'first':24.762653099999998,'second':92.795766},{'first':24.555246999999998,'second':92.604017},{'first':26.106974299999997,'second':92.74562979999999},{'first':25.751626599999998,'second':93.172876},{'first':26.114358,'second':92.857025},{'first':26.0674784,'second':92.9048863},{'first':26.001679,'second':92.84821389999999},{'first':26.0432414,'second':92.80037809999999},{'first':25.9175081,'second':92.95513989999999},{'first':26.630238,'second':94.34178299999999},{'first':26.912195399999998,'second':94.47588359999999},{'first':26.2006043,'second':92.9375739},{'first':26.712441799999997,'second':94.439752},{'first':26.449859999999997,'second':94.132667},{'first':26.8351421,'second':94.40877569999999},{'first':26.5946937,'second':94.1920885},{'first':26.343364599999997,'second':91.78796849999999},{'first':26.278299,'second':91.5159041},{'first':26.344253300000002,'second':91.6774619},{'first':26.081702999999997,'second':91.25515},{'first':26.271414999999998,'second':91.349301},{'first':26.0112955,'second':91.29971499999999},{'first':24.8485507,'second':92.7649612},{'first':25.977767,'second':91.2355695},{'first':26.121890300000004,'second':91.8082201},{'first':25.790527,'second':91.2626287},{'first':26.096301,'second':91.52948719999999},{'first':26.434556999999998,'second':91.62485},{'first':26.4470335,'second':91.61789180000001},{'first':26.1391639,'second':91.79935150000001},{'first':24.8485507,'second':92.7649612},{'first':26.1403335,'second':91.79524359999999},{'first':26.1539748,'second':91.7811692},{'first':26.109035,'second':91.719325},{'first':26.1633788,'second':91.7683799},{'first':26.1311288,'second':91.80779810000001},{'first':26.1621708,'second':91.7508146},{'first':26.158495499999997,'second':91.8118724},{'first':26.1238794,'second':91.719495},{'first':26.139084099999998,'second':91.7462529},{'first':26.1606863,'second':91.6887778},{'first':26.117117,'second':91.815292},{'first':26.2006043,'second':92.9375739},{'first':26.105674999999998,'second':92.090318},{'first':25.9374732,'second':92.2995153},{'first':26.5419657,'second':93.248774},{'first':26.114583999999997,'second':93.035249},{'first':26.2766083,'second':93.13992089999999},{'first':26.0529005,'second':93.81745529999999},{'first':26.114583999999997,'second':93.035249},{'first':26.020005299999998,'second':92.6997366},{'first':26.8305707,'second':93.07379979999999},{'first':26.0564255,'second':93.1955414},{'first':25.8497421,'second':92.87799890000001},{'first':26.531247999999998,'second':93.731909},{'first':26.4230222,'second':93.7448714},{'first':26.019074,'second':93.76229699999999},{'first':25.9330993,'second':92.70961520000002},{'first':24.5841165,'second':92.34103610000001},{'first':24.8675958,'second':92.3618061},{'first':24.857565599999997,'second':92.5231156},{'first':24.5841165,'second':92.34103610000001},{'first':24.5841165,'second':92.34103610000001},{'first':24.4858154,'second':92.4341515},{'first':24.5687414,'second':92.4221065},{'first':26.448051399999997,'second':89.98423},{'first':26.5659966,'second':90.0616529},{'first':26.4662601,'second':90.1511126},{'first':26.4370914,'second':89.97667919999999},{'first':27.2615809,'second':94.1002785},{'first':27.3114122,'second':94.456805},{'first':27.1241281,'second':93.9295683},{'first':26.9196697,'second':93.7968574},{'first':27.0191315,'second':93.9215541},{'first':26.2006043,'second':92.9375739},{'first':27.005485999999998,'second':93.92087400000001},{'first':27.758975999999997,'second':95.2468991},{'first':27.3177438,'second':94.420817},{'first':26.966571199999997,'second':93.8663342},{'first':26.954596799999997,'second':94.16963539999999},{'first':27.0850869,'second':94.2908267},{'first':26.975436,'second':94.14381999999999},{'first':26.3069815,'second':92.3634697},{'first':26.126036199999998,'second':92.2364205},{'first':26.3314096,'second':92.54290689999999},{'first':15.912899800000002,'second':79.7399875},{'first':26.41874,'second':92.34250349999999},{'first':26.116667,'second':92.18333299999999},{'first':26.2520898,'second':92.35450639999999},{'first':26.325801799999997,'second':92.49264389999999},{'first':26.246815200000004,'second':92.522269},{'first':26.226099599999998,'second':92.7729347},{'first':26.523457999999998,'second':92.91579999999999},{'first':26.2006043,'second':92.9375739},{'first':26.348008999999998,'second':92.6838111},{'first':26.4656734,'second':92.853737},{'first':26.348008999999998,'second':92.6838111},{'first':26.311978,'second':92.638232},{'first':26.087455,'second':92.65608929999999},{'first':26.445359999999997,'second':91.259383},{'first':26.1855023,'second':91.7405819},{'first':26.475752999999997,'second':91.2674411},{'first':26.3839908,'second':91.34950889999999},{'first':26.371323,'second':91.477449},{'first':26.365207599999998,'second':91.34415419999999},{'first':26.2743068,'second':91.3541579},{'first':26.405922,'second':91.34511700000002},{'first':26.2006043,'second':92.9375739},{'first':26.2931255,'second':91.4334107},{'first':26.193585499999998,'second':91.32803009999999},{'first':26.9857363,'second':94.6506953},{'first':26.9774009,'second':94.63073969999999},{'first':26.4426408,'second':91.437998},{'first':27.127571999999997,'second':94.739678},{'first':26.9807025,'second':94.6519154},{'first':26.1603384,'second':91.70744069999999},{'first':26.883091,'second':94.71883199999999},{'first':26.9807025,'second':94.6519154},{'first':26.810168299999997,'second':94.5237707},{'first':26.821222199999998,'second':93.19679699999999},{'first':26.880890899999997,'second':93.75410219999999},{'first':24.8485507,'second':92.7649612},{'first':26.7606249,'second':92.81325240000001},{'first':26.6288534,'second':92.7969292},{'first':26.117117,'second':91.815292},{'first':26.6985314,'second':92.4851463},{'first':26.699617399999998,'second':92.4002881},{'first':26.736616299999998,'second':92.96507319999999},{'first':26.598859899999997,'second':92.529449},{'first':26.2006043,'second':92.9375739},{'first':26.8305707,'second':93.07379979999999},{'first':27.697371999999998,'second':95.57262999999999},{'first':26.8256582,'second':92.775492},{'first':27.5508515,'second':95.69276839999999},{'first':26.668094699999997,'second':92.8527235},{'first':25.7131035,'second':89.8996196},{'first':27.925379,'second':95.763112},{'first':26.493230399999998,'second':92.6772672},{'first':27.2910662,'second':95.6694606},{'first':27.3952085,'second':95.6226085},{'first':27.697371999999998,'second':95.57262999999999},{'first':27.5508515,'second':95.69276839999999},{'first':27.5664171,'second':95.55516519999999},{'first':27.4387726,'second':95.354411},{'first':26.7163585,'second':92.1934455},{'first':26.843334499999997,'second':92.27781279999999},{'first':26.6623034,'second':92.21602969999999},{'first':26.661369099999998,'second':92.3307908},{'first':26.361094299999998,'second':91.66270910000001},{'first':25.987994999999998,'second':92.72589099999999},{'first':25.847215600000002,'second':92.57429069999999},{'first':25.9330993,'second':92.70961520000002},{'first':25.8497421,'second':92.87799890000001},{'first':25.847215600000002,'second':92.57429069999999},{'first':25.9374732,'second':92.2995153},{'first':26.6586932,'second':91.36819109999999},{'first':26.5630237,'second':91.34354979999999},{'first':26.616982099999998,'second':91.5725667},{'first':26.4618438,'second':90.56006450000001},{'first':26.5038037,'second':91.17790079999999},{'first':26.3415279,'second':91.0001528},{'first':26.335415100000002,'second':91.0019576},{'first':26.751327300000003,'second':93.15329299999999},{'first':26.879971299999998,'second':93.60573649999999},{'first':26.1106934,'second':91.62131219999999},{'first':26.7233438,'second':93.13639479999999},{'first':26.3890183,'second':90.6344963},{'first':26.6197664,'second':92.8145516},{'first':26.7460119,'second':93.1996075},{'first':26.8112557,'second':93.38512879999999},{'first':26.818067199999998,'second':93.1403256},{'first':26.7460937,'second':93.2005641},{'first':26.492861899999998,'second':90.5514783},{'first':26.481531099999998,'second':90.5148547},{'first':26.46746,'second':90.558954},{'first':26.1603384,'second':91.70744069999999},{'first':26.4477344,'second':91.4301703},{'first':24.7856372,'second':92.79556219999999},{'first':24.8289625,'second':92.7927026},{'first':26.1504653,'second':91.7821106},{'first':24.78885,'second':92.7975098},{'first':24.947180799999998,'second':92.7040279},{'first':24.7873742,'second':92.79557040000002},{'first':24.7842994,'second':92.7957577},{'first':26.1582334,'second':91.7558715},{'first':27.093943099999997,'second':94.7128961},{'first':26.1633788,'second':91.7683799},{'first':27.137862799999997,'second':95.2866169},{'first':26.413652499999998,'second':93.981523},{'first':26.1633788,'second':91.7683799},{'first':27.022358399999998,'second':95.1875301},{'first':27.036649999999998,'second':95.0206829},{'first':26.1633788,'second':91.7683799},{'first':26.440466699999998,'second':93.8310588},{'first':26.1603384,'second':91.70744069999999},{'first':27.023338400000004,'second':94.87245329999999},{'first':27.4930657,'second':94.9279237},{'first':26.8130094,'second':92.76053759999999},{'first':26.2006043,'second':92.9375739},{'first':26.2006043,'second':92.9375739},{'first':26.2006043,'second':92.9375739},{'first':27.1762598,'second':94.9449108},{'first':26.2006043,'second':92.9375739},{'first':26.515778899999997,'second':90.5050673},{'first':26.5394702,'second':90.4997973},{'first':26.506999999999998,'second':90.5455556},{'first':26.5102253,'second':90.52818599999999},{'first':26.5166057,'second':90.50364379999999},{'first':26.5231875,'second':90.4880853},{'first':26.395699000000004,'second':91.8965734},{'first':26.518589700000003,'second':92.14937570000001},{'first':26.436346,'second':92.0310713},{'first':26.4368578,'second':92.0333934},{'first':26.5138705,'second':92.1302267},{'first':27.5180581,'second':94.4849864},{'first':27.481110599999997,'second':94.55728470000001},{'first':26.15877,'second':91.68093499999999},{'first':26.1330118,'second':90.0265086},{'first':26.335422299999998,'second':90.1084042},{'first':26.023831599999998,'second':89.98358739999999},{'first':26.303251,'second':90.18088379999999},{'first':26.2006043,'second':92.9375739},{'first':26.1992448,'second':89.78341429999999},{'first':26.0207756,'second':89.98230989999999},{'first':26.1071092,'second':89.8413001},{'first':26.303190599999997,'second':90.17725610000001},{'first':26.2250052,'second':90.22970169999999},{'first':26.206336999999998,'second':89.78475809999999},{'first':26.2961885,'second':90.45069040000001},{'first':26.020749199999997,'second':89.9931228},{'first':25.8519142,'second':93.42817219999999},{'first':26.2880476,'second':90.22851349999999},{'first':24.832610199999998,'second':92.7807534},{'first':26.7819899,'second':92.744726},{'first':26.2703949,'second':90.44436689999999},{'first':26.0170686,'second':89.9840811},{'first':26.106239499999997,'second':89.8267092},{'first':26.1903026,'second':90.1968715},{'first':26.2264308,'second':90.2297875},{'first':26.251806199999997,'second':89.7711861},{'first':26.2783341,'second':90.4477304},{'first':26.020104999999997,'second':89.98623959999999},{'first':26.245873999999997,'second':90.8595011},{'first':26.021453899999997,'second':89.98456689999999},{'first':26.2502709,'second':90.1594563},{'first':26.229759899999998,'second':90.2304034},{'first':26.258253,'second':89.77606770000001},{'first':26.2006043,'second':92.9375739},{'first':26.0206561,'second':89.99396229999999},{'first':26.188298,'second':89.8581598},{'first':26.1055618,'second':89.8311875},{'first':26.2251664,'second':90.23295519999999},{'first':26.074887099999998,'second':89.9631893},{'first':26.083752,'second':89.96115759999999},{'first':26.0185759,'second':89.99307809999999},{'first':26.212584999999997,'second':89.863006},{'first':32.219042,'second':76.3234037},{'first':27.471220499999998,'second':94.5522384},{'first':26.084602399999998,'second':89.9618047},{'first':26.0202082,'second':89.9953215},{'first':32.219042,'second':76.3234037},{'first':26.209964799999998,'second':89.8640502},{'first':26.2006043,'second':92.9375739},{'first':26.090419999999998,'second':89.9626069},{'first':26.0539679,'second':89.8893401},{'first':26.3220632,'second':89.85262999999999},{'first':26.2006043,'second':92.9375739},{'first':26.1636694,'second':89.7358775},{'first':26.2006043,'second':92.9375739},{'first':26.3175174,'second':90.11557700000002},{'first':26.198998099999997,'second':90.1413434},{'first':26.0266742,'second':89.96984020000001},{'first':26.3094631,'second':89.8533535},{'first':26.3266261,'second':90.1222635},{'first':26.2017742,'second':89.7698879},{'first':26.224396400000003,'second':90.2317482},{'first':26.1236061,'second':90.0243625},{'first':26.7819899,'second':92.744726},{'first':26.335422299999998,'second':90.1084042},{'first':26.0240814,'second':89.97008629999999},{'first':26.1850089,'second':89.8349654},{'first':26.2006043,'second':92.9375739},{'first':26.2006043,'second':92.9375739},{'first':26.2754066,'second':89.8137984},{'first':27.284865500000002,'second':95.3280602},{'first':27.4503883,'second':95.00120400000002},{'first':27.4971182,'second':95.1450455},{'first':27.3135136,'second':94.82634209999999},{'first':27.396762,'second':95.168408},{'first':27.179828699999998,'second':94.7874212},{'first':27.479930099999997,'second':94.925096},{'first':27.3057382,'second':95.2311763},{'first':27.460786499999998,'second':95.0717622},{'first':27.206846,'second':94.76735269999999},{'first':27.395778,'second':95.16748960000001},{'first':27.209793299999998,'second':94.8050165},{'first':27.191540099999997,'second':95.33999089999999},{'first':27.460786499999998,'second':95.0717622},{'first':27.320530899999998,'second':94.8771988},{'first':27.3348251,'second':95.3288496},{'first':27.174820000000004,'second':94.8298172},{'first':27.2706628,'second':95.3607553},{'first':26.1170802,'second':91.8335487},{'first':27.302996500000003,'second':94.8677101},{'first':26.2006043,'second':92.9375739},{'first':27.273491099999998,'second':94.8909681},{'first':27.284865500000002,'second':95.3280602},{'first':27.4015706,'second':94.8788534},{'first':27.342763299999998,'second':94.94409499999999},{'first':26.493230399999998,'second':92.6772672},{'first':27.2773044,'second':95.02831239999999},{'first':27.2767396,'second':95.3501227},{'first':26.2763135,'second':93.8973829},{'first':27.2427335,'second':94.71869939999999},{'first':27.3584206,'second':95.33490169999999},{'first':27.482508400000004,'second':95.1762016},{'first':26.7819899,'second':92.744726},{'first':27.1900107,'second':95.3609165},{'first':26.194178100000002,'second':93.86973590000001},{'first':27.3835193,'second':94.9454617},{'first':27.404997299999998,'second':95.1200264},{'first':27.286985599999998,'second':95.2475518},{'first':27.5231642,'second':95.2164897},{'first':27.680024099999997,'second':95.69854889999999},{'first':27.38019,'second':95.168019},{'first':26.2006043,'second':92.9375739},{'first':27.454888,'second':94.96576999999999},{'first':26.2006043,'second':92.9375739},{'first':26.261168899999998,'second':91.1654641},{'first':27.376971599999997,'second':95.16177929999999},{'first':27.2477157,'second':93.9698179},{'first':26.352819,'second':92.67822629999999},{'first':26.2006043,'second':92.9375739},{'first':27.395024199999998,'second':94.87753269999999},{'first':27.376922,'second':95.163097},{'first':26.178567599999997,'second':91.829256},{'first':27.468771399999998,'second':94.98836190000002},{'first':27.4877152,'second':95.1666158},{'first':26.3326194,'second':92.6830888},{'first':27.4578638,'second':95.581516},{'first':26.6668266,'second':94.0063141},{'first':25.1823731,'second':93.1168368},{'first':25.979066,'second':90.7817151},{'first':26.033787999999998,'second':90.31035299999999},{'first':26.1766607,'second':90.6292871},{'first':26.2022806,'second':91.7392812},{'first':25.4115105,'second':92.7899688},{'first':26.0331078,'second':90.3092188},{'first':25.9696632,'second':90.8563274},{'first':25.982976599999997,'second':90.7838615},{'first':25.9663988,'second':91.0517066},{'first':24.7930818,'second':93.0045552},{'first':26.102280099999998,'second':90.4233709},{'first':26.102280099999998,'second':90.4233709},{'first':26.1183551,'second':90.542163},{'first':25.9806267,'second':90.785218},{'first':26.0315756,'second':90.3030021},{'first':25.9860601,'second':90.7865655},{'first':26.106761499999998,'second':90.7877031},{'first':26.1448334,'second':91.77644409999999},{'first':26.1777785,'second':90.62900379999999},{'first':26.194163699999997,'second':91.7847063},{'first':26.087068199999997,'second':90.7683756},{'first':26.0367411,'second':90.6644826},{'first':26.1276072,'second':91.796095},{'first':26.1507681,'second':90.6330335},{'first':26.1012602,'second':90.4230863},{'first':26.147942399999998,'second':90.61741},{'first':26.1641342,'second':90.62515409999999},{'first':25.9682471,'second':91.04091269999999},{'first':26.0846482,'second':90.55651379999999},{'first':26.5317349,'second':91.7279981},{'first':27.4921619,'second':95.3614973},{'first':26.5913711,'second':93.7495168},{'first':26.516648999999997,'second':93.97481189999999},{'first':26.7118659,'second':93.9807361},{'first':26.5107821,'second':93.96584419999999},{'first':26.5140232,'second':93.970592},{'first':24.786568,'second':92.79515479999999},{'first':24.4830388,'second':92.55978929999999},{'first':24.866810400000002,'second':92.6872046},{'first':24.563017199999997,'second':92.61148700000001},{'first':24.3902887,'second':92.5581739},{'first':26.2006043,'second':92.9375739},{'first':26.4930119,'second':90.5533551},{'first':26.0674784,'second':92.9048863},{'first':25.752554999999997,'second':93.1801682},{'first':26.015741,'second':92.8682212},{'first':26.003194999999998,'second':92.8568359},{'first':26.1591919,'second':91.7768304},{'first':26.015741,'second':92.8682212},{'first':25.9175081,'second':92.95513989999999},{'first':26.114358,'second':92.857025},{'first':26.4864814,'second':93.9291984},{'first':26.74652,'second':94.202586},{'first':26.829975299999997,'second':94.4320061},{'first':26.940399,'second':94.44779679999999},{'first':26.5832809,'second':92.1425692},{'first':26.5816824,'second':93.8097889},{'first':26.2006043,'second':92.9375739},{'first':26.7928456,'second':94.481292},{'first':26.7286362,'second':94.2137145},{'first':26.6328392,'second':93.6708803},{'first':26.0977355,'second':91.28669610000001},{'first':26.7421911,'second':94.1321368},{'first':26.4735339,'second':92.7058431},{'first':26.8741342,'second':94.4433303},{'first':22.785189400000004,'second':83.6738264},{'first':26.9179067,'second':94.0721007},{'first':26.7990065,'second':94.0562018},{'first':26.2006043,'second':92.9375739},{'first':26.832113,'second':94.414739},{'first':26.5256307,'second':94.19677229999999},{'first':26.7928705,'second':94.18810739999999},{'first':26.549521,'second':94.2724389},{'first':26.729585,'second':94.1937572},{'first':26.4506953,'second':94.15393569999999},{'first':26.5453628,'second':91.2325639},{'first':26.714755099999998,'second':94.1267134},{'first':26.2006043,'second':92.9375739},{'first':26.5915414,'second':93.80067009999999},{'first':26.2006043,'second':92.9375739},{'first':26.2006043,'second':92.9375739},{'first':26.797386499999998,'second':94.216517},{'first':26.2006043,'second':92.9375739},{'first':26.7358287,'second':94.38850599999999},{'first':26.7076401,'second':94.0210189},{'first':26.1952139,'second':91.6951058},{'first':26.092315499999998,'second':91.53802830000001},{'first':26.2738768,'second':91.7052082},{'first':26.250802000000004,'second':91.6916456},{'first':26.1048343,'second':91.5908889},{'first':26.177050899999998,'second':91.7406688},{'first':26.101680200000004,'second':91.61261549999999},{'first':26.1019792,'second':91.5945326},{'first':24.8240798,'second':92.7990624},{'first':26.126246000000002,'second':91.909337},{'first':29.807178600000004,'second':76.4060755},{'first':26.112389,'second':91.61357699999999},{'first':26.101682699999998,'second':91.59536220000001},{'first':26.179433399999997,'second':91.740179},{'first':26.1158143,'second':91.7263499},{'first':26.1790818,'second':91.75645229999999},{'first':26.1012048,'second':91.59682029999999},{'first':26.172277599999997,'second':91.74119420000001},{'first':26.160695099999998,'second':91.82088689999999},{'first':26.177297,'second':91.737625},{'first':26.122917899999997,'second':91.8072301},{'first':26.1014195,'second':91.59639729999999},{'first':26.179429499999998,'second':91.7510671},{'first':26.180139600000004,'second':91.7470414},{'first':26.155279099999998,'second':91.69947979999999},{'first':26.114850999999998,'second':91.59998929999999},{'first':26.1014405,'second':91.596434},{'first':26.179870599999997,'second':91.741396},{'first':26.168022699999998,'second':91.73362259999999},{'first':26.1730298,'second':91.7418165},{'first':26.566720999999998,'second':92.87001599999999},{'first':26.178060499999997,'second':91.74575829999999},{'first':26.101244599999998,'second':91.59666039999999},{'first':26.4532481,'second':91.63861519999999},{'first':26.180133899999998,'second':91.7367434},{'first':26.097728699999998,'second':91.60700969999999},{'first':26.0974291,'second':91.60600529999999},{'first':26.108336899999998,'second':91.5945203},{'first':26.1755028,'second':91.7376838},{'first':26.097728699999998,'second':91.60700969999999},{'first':25.966131999999998,'second':93.437212},{'first':24.869393499999997,'second':92.3584013},{'first':24.8621275,'second':92.3697962},{'first':24.4181657,'second':92.42318639999999},{'first':24.432019699999998,'second':92.3306894},{'first':26.2006043,'second':92.9375739},{'first':24.857277999999997,'second':92.3690182},{'first':26.461639400000003,'second':90.41959969999999},{'first':27.236611099999998,'second':94.10558789999999},{'first':27.022124899999998,'second':93.91382039999999},{'first':27.2379149,'second':94.10265389999999},{'first':26.306399499999998,'second':90.9372813},{'first':26.2006043,'second':92.9375739},{'first':27.225318899999998,'second':94.10533070000001},{'first':26.968489299999998,'second':93.8705634},{'first':26.7698231,'second':94.24359940000001},{'first':27.023507499999997,'second':93.914727},{'first':26.1658375,'second':91.69178219999999},{'first':26.976007000000003,'second':93.877675},{'first':27.148936300000003,'second':94.1093978},{'first':27.2964124,'second':94.3085966},{'first':27.3214117,'second':94.4215679},{'first':26.159263799999998,'second':91.69747720000001},{'first':27.2477461,'second':94.46840259999999},{'first':27.196671499999997,'second':94.42301499999999},{'first':26.98422,'second':94.154006},{'first':26.987841,'second':94.640733},{'first':26.159986099999998,'second':91.7744797},{'first':26.752706099999997,'second':94.2248738},{'first':27.0380488,'second':94.3396787},{'first':26.1958201,'second':91.7616004},{'first':26.957441799999998,'second':94.166465},{'first':26.8145074,'second':94.32581739999999},{'first':26.992148,'second':94.14967999999999},{'first':26.9559231,'second':94.17253050000001},{'first':27.026783000000002,'second':94.31703499999999},{'first':26.048065800000003,'second':91.3867226},{'first':26.5101829,'second':91.6517812},{'first':26.949804999999998,'second':94.169283},{'first':26.992148,'second':94.14967999999999},{'first':26.943558799999998,'second':94.2000242},{'first':26.0044133,'second':90.349795},{'first':26.157951399999998,'second':91.68250610000001},{'first':26.466369099999998,'second':92.4986587},{'first':26.983618,'second':94.1535143},{'first':26.2006043,'second':92.9375739},{'first':26.6841877,'second':93.9601519},{'first':26.976007000000003,'second':93.877675},{'first':26.2006043,'second':92.9375739},{'first':26.977997,'second':94.148395},{'first':26.2006043,'second':92.9375739},{'first':26.1850125,'second':91.7500311},{'first':26.949041599999997,'second':94.1575077},{'first':26.7499726,'second':93.9801897},{'first':26.2006043,'second':92.9375739},{'first':26.1408575,'second':91.7860084},{'first':26.441468399999998,'second':90.9659392},{'first':26.965715099999997,'second':94.15882309999999},{'first':27.0824063,'second':94.2888931},{'first':27.6841996,'second':94.8090581},{'first':26.2006043,'second':92.9375739},{'first':26.1840568,'second':91.7698801},{'first':26.9559231,'second':94.17253050000001},{'first':26.945093099999998,'second':94.1637164},{'first':26.158977200000002,'second':91.7794443},{'first':26.797302199999997,'second':94.25860259999999},{'first':26.950011399999998,'second':94.15705109999999},{'first':26.9483993,'second':94.17319789999999},{'first':26.156993,'second':91.7802688},{'first':26.9779928,'second':94.148735},{'first':26.7498345,'second':94.23528089999999},{'first':26.985450699999998,'second':94.1704108},{'first':26.945563,'second':94.200054},{'first':26.3187373,'second':92.7035001},{'first':26.9809166,'second':94.1536643},{'first':26.7498345,'second':94.23528089999999},{'first':26.9533649,'second':94.16918849999999},{'first':26.9384357,'second':94.1580731},{'first':26.7413468,'second':94.22423239999999},{'first':26.159986099999998,'second':91.7744797},{'first':26.950336500000002,'second':94.16579449999999},{'first':26.4194,'second':92.8474},{'first':26.2006043,'second':92.9375739},{'first':26.991732400000004,'second':94.1487021},{'first':26.4365471,'second':92.0333242},{'first':26.7426802,'second':93.88047329999999},{'first':26.9799747,'second':94.15766670000001},{'first':26.960666699999997,'second':94.16448129999999},{'first':26.1014767,'second':92.3164288},{'first':27.000524799999997,'second':94.2389398},{'first':26.991066999999997,'second':94.158352},{'first':26.7498345,'second':94.23528089999999},{'first':27.057003299999998,'second':94.13858189999999},{'first':26.965715099999997,'second':94.15882309999999},{'first':26.990945,'second':94.15093499999999},{'first':26.1782,'second':91.7436},{'first':26.3615253,'second':92.35200329999999},{'first':26.2765637,'second':92.35670549999999},{'first':26.453478,'second':92.4162532},{'first':26.1268261,'second':92.2425018},{'first':26.2545221,'second':92.3570609},{'first':26.4302037,'second':92.01643949999999},{'first':26.4535013,'second':92.424577},{'first':25.9636575,'second':91.0593156},{'first':26.2539075,'second':92.3579014},{'first':26.119115599999997,'second':92.20267299999999},{'first':26.2707879,'second':92.4167102},{'first':26.248135599999998,'second':92.3260633},{'first':26.41874,'second':92.34250349999999},{'first':26.2499818,'second':92.3462114},{'first':26.260946999999998,'second':92.3406512},{'first':26.119115599999997,'second':92.20267299999999},{'first':26.419719399999998,'second':92.3237003},{'first':26.268828499999998,'second':92.3717624},{'first':26.162499999999998,'second':91.74459999999999},{'first':26.2550152,'second':92.3576842},{'first':26.4518504,'second':92.9101057},{'first':26.350135599999998,'second':92.6920189},{'first':26.353256,'second':92.702261},{'first':26.294980199999998,'second':92.7225692},{'first':26.550103099999998,'second':92.9296267},{'first':26.2730544,'second':92.7298564},{'first':26.1170802,'second':91.8335487},{'first':26.2726495,'second':92.73032649999999},{'first':26.3517624,'second':92.69269109999999},{'first':26.546362,'second':92.9001212},{'first':26.3368814,'second':92.6845694},{'first':26.262615999999998,'second':92.58328800000001},{'first':26.415865699999998,'second':92.8408345},{'first':26.4932305,'second':92.6772672},{'first':26.415865699999998,'second':92.8408345},{'first':26.426226699999997,'second':92.74151429999999},{'first':26.2006043,'second':92.9375739},{'first':26.528494199999997,'second':91.30595989999999},{'first':26.3278158,'second':90.1518394},{'first':26.1323498,'second':91.76180079999999},{'first':26.492051999999997,'second':91.4168974},{'first':26.4341832,'second':91.24511629999999},{'first':26.2006043,'second':92.9375739},{'first':26.3964659,'second':91.5329678},{'first':26.4579262,'second':91.38696159999999},{'first':26.440183899999997,'second':91.28669610000001},{'first':26.379624699999997,'second':91.2951229},{'first':26.2006043,'second':92.9375739},{'first':26.5503948,'second':91.4797297},{'first':26.2006043,'second':92.9375739},{'first':26.2006043,'second':92.9375739},{'first':26.4577533,'second':91.30114309999999},{'first':26.2006043,'second':92.9375739},{'first':26.3744271,'second':91.5244937},{'first':26.3159006,'second':91.3252325},{'first':26.2777152,'second':91.35459},{'first':26.759324499999998,'second':94.2016616},{'first':26.591005300000003,'second':91.54265459999999},{'first':26.3510021,'second':91.35898069999999},{'first':26.5101181,'second':91.5244937},{'first':26.2006043,'second':92.9375739},{'first':26.1773705,'second':91.75728649999999},{'first':26.3857105,'second':91.431389},{'first':26.4539079,'second':91.52459710000001},{'first':26.346978999999997,'second':91.307244},{'first':26.270087,'second':91.221599},{'first':26.5562917,'second':91.4797297},{'first':26.2006043,'second':92.9375739},{'first':26.2006043,'second':92.9375739},{'first':26.362489,'second':91.44585},{'first':26.6498916,'second':91.406032},{'first':26.4977093,'second':91.44736739999999},{'first':26.3235952,'second':91.4650735},{'first':26.129120699999998,'second':91.7683874},{'first':26.3511828,'second':91.3396927},{'first':26.418719199999998,'second':91.5219994},{'first':26.1209587,'second':91.9139099},{'first':26.470994299999997,'second':91.3047556},{'first':26.2006043,'second':92.9375739},{'first':26.2006043,'second':92.9375739},{'first':26.3586527,'second':91.3751216},{'first':26.2006043,'second':92.9375739},{'first':26.1855023,'second':91.7405819},{'first':26.1603384,'second':91.70744069999999},{'first':26.9469031,'second':94.16210439999999},{'first':26.879098,'second':94.70835459999999},{'first':26.7903719,'second':94.6870993},{'first':26.1633788,'second':91.7683799},{'first':27.1170787,'second':94.7990147},{'first':26.7885115,'second':94.64712999999999},{'first':27.093943099999997,'second':94.7128961},{'first':26.1855023,'second':91.7405819},{'first':27.093943099999997,'second':94.7128961},{'first':27.0891031,'second':94.676823},{'first':27.025870599999998,'second':94.8285265},{'first':26.1603384,'second':91.70744069999999},{'first':26.7837411,'second':94.6147996},{'first':26.366526399999998,'second':92.7139754},{'first':26.8266322,'second':94.78481339999999},{'first':28.8424212,'second':77.5820786},{'first':26.2006043,'second':92.9375739},{'first':26.1633788,'second':91.7683799},{'first':26.6985314,'second':92.4851463},{'first':26.3611206,'second':92.393705},{'first':26.7002961,'second':92.83076009999999},{'first':26.7866169,'second':92.69621389999999},{'first':26.814366,'second':92.5941239},{'first':26.344739,'second':92.73708669999999},{'first':26.812520199999998,'second':92.69341659999999},{'first':26.0295411,'second':90.4198837},{'first':26.3611206,'second':92.393705},{'first':26.4302037,'second':92.01643949999999},{'first':25.695314,'second':89.8575219},{'first':25.5788737,'second':89.8823003},{'first':25.535476100000004,'second':89.8622017},{'first':25.6542687,'second':89.8852902},{'first':27.4964473,'second':95.3637528},{'first':27.4876025,'second':95.36615119999999},{'first':26.4432168,'second':91.44211949999999},{'first':27.8479328,'second':95.7455777},{'first':27.2901346,'second':95.67565049999999},{'first':26.1368345,'second':91.8205028},{'first':27.488553900000003,'second':95.355758},{'first':27.488553900000003,'second':95.355758},{'first':27.3934742,'second':95.614538},{'first':27.4828647,'second':95.36835789999999},{'first':26.1684554,'second':91.7283341},{'first':26.5679934,'second':91.97592039999999},{'first':26.2006043,'second':92.9375739},{'first':26.656678,'second':91.9122721},{'first':26.5848189,'second':91.9518928},{'first':24.8278549,'second':92.79214669999999},{'first':26.497684,'second':91.922197},{'first':26.793056399999998,'second':92.2854748},{'first':26.6355117,'second':92.3027137},{'first':26.6389602,'second':91.8241875},{'first':26.6284992,'second':93.7291288},{'first':26.834902999999997,'second':91.84402589999999},{'first':26.7940948,'second':92.2914667},{'first':26.834902999999997,'second':91.84402589999999},{'first':26.780863,'second':92.25247499999999},{'first':25.9175081,'second':92.95513989999999},{'first':20.408207200000003,'second':72.8325758},{'first':20.433771,'second':72.8316701},{'first':20.374996,'second':72.8759},{'first':20.7154188,'second':70.9782376},{'first':20.714164999999998,'second':70.9584393},{'first':20.270715499999998,'second':73.0076634},{'first':22.266208700000004,'second':73.22812859999999},{'first':30.352933900000004,'second':76.8338952},{'first':30.401833999999997,'second':76.786577},{'first':30.483416300000002,'second':77.1257421},{'first':30.332261400000004,'second':76.832358},{'first':30.342020599999998,'second':76.8468316},{'first':30.3787852,'second':76.779832},{'first':28.7976795,'second':76.1438632},{'first':28.7954565,'second':76.1632872},{'first':28.4491437,'second':77.0241387},{'first':28.7971953,'second':76.1309222},{'first':29.133537399999994,'second':75.7462145},{'first':28.7985174,'second':76.1334902},{'first':28.8082119,'second':76.13190469999999},{'first':28.6964506,'second':76.9237593},{'first':28.187502199999997,'second':76.6141663},{'first':28.595678399999997,'second':76.2659419},{'first':28.3926292,'second':77.2986762},{'first':28.3646979,'second':77.329593},{'first':28.4327639,'second':77.3758876},{'first':28.3942905,'second':77.3295601},{'first':28.415444299999997,'second':77.319074},{'first':28.4387483,'second':77.2995528},{'first':28.3219738,'second':77.2836172},{'first':28.4260095,'second':77.29998359999999},{'first':28.336379299999997,'second':77.31654170000002},{'first':29.691910699999998,'second':77.0002617},{'first':28.3219738,'second':77.2836172},{'first':28.560702,'second':77.27259400000001},{'first':28.518251499999998,'second':77.0387131},{'first':28.4909688,'second':77.2911821},{'first':28.3955558,'second':77.28992160000001},{'first':28.4222361,'second':77.3167904},{'first':28.391271,'second':77.2927558},{'first':28.3935176,'second':77.3100765},{'first':28.3847439,'second':77.367419},{'first':28.397334599999997,'second':77.2948602},{'first':28.5471743,'second':77.2507081},{'first':28.381017699999997,'second':77.30197729999999},{'first':29.711278800000002,'second':75.9080699},{'first':29.7049783,'second':75.9068973},{'first':29.720188099999998,'second':75.9056103},{'first':29.5167912,'second':75.4484867},{'first':29.5168326,'second':75.44466899999999},{'first':29.7186512,'second':75.9058349},{'first':29.5033472,'second':75.4405724},{'first':29.5025804,'second':75.46909289999999},{'first':28.4185372,'second':77.09718149999999},{'first':28.4834867,'second':77.1076949},{'first':28.4695932,'second':77.0195641},{'first':28.518251499999998,'second':77.0387131},{'first':28.4594965,'second':77.0266383},{'first':28.467654999999997,'second':77.04266},{'first':28.5091211,'second':77.0415506},{'first':28.4612171,'second':77.033839},{'first':28.458136699999997,'second':77.06357229999999},{'first':28.4572129,'second':77.0728492},{'first':28.461409099999997,'second':77.07463059999999},{'first':28.4542379,'second':76.9731154},{'first':28.4594965,'second':77.0266383},{'first':28.4395016,'second':77.04083370000001},{'first':28.453856,'second':77.04947899999999},{'first':28.450558299999997,'second':77.0875075},{'first':28.497853499999998,'second':77.1019482},{'first':29.137166599999997,'second':75.741061},{'first':28.6964506,'second':76.9237593},{'first':29.141155800000003,'second':75.7335602},{'first':29.136635199999997,'second':75.71491209999999},{'first':29.118828699999995,'second':75.74557349999999},{'first':29.129130900000003,'second':75.7416611},{'first':29.130391,'second':75.7465659},{'first':29.133147599999994,'second':75.7460787},{'first':29.1307033,'second':75.74222209999999},{'first':29.119329499999996,'second':75.8189273},{'first':29.1323103,'second':75.7432074},{'first':29.1503432,'second':75.7056901},{'first':28.689355599999995,'second':76.8907795},{'first':28.6077116,'second':76.6422997},{'first':28.690440099999996,'second':76.9342403},{'first':28.607022299999997,'second':76.6455495},{'first':28.602527199999997,'second':76.6575766},{'first':28.611929000000003,'second':76.642876},{'first':30.375201099999998,'second':76.782122},{'first':28.6616176,'second':76.6849926},{'first':28.6845881,'second':76.9210885},{'first':28.701332199999996,'second':76.5806097},{'first':28.6061265,'second':76.6452539},{'first':28.6913756,'second':76.9314064},{'first':28.712366700000004,'second':76.9367619},{'first':29.378290800000002,'second':76.3365232},{'first':29.406065299999998,'second':76.66148530000001},{'first':29.4751415,'second':76.1899636},{'first':29.5959853,'second':76.1149662},{'first':29.122979500000003,'second':76.4013471},{'first':29.3118895,'second':76.3300797},{'first':30.037673299999998,'second':76.3095288},{'first':29.814544200000004,'second':76.4205415},{'first':29.791892299999997,'second':76.41725939999999},{'first':29.8005907,'second':76.4028874},{'first':29.692095999999996,'second':76.9766375},{'first':29.697012599999994,'second':76.9900411},{'first':29.707130299999996,'second':77.0032523},{'first':29.694030100000003,'second':76.9892328},{'first':29.6856929,'second':76.9904825},{'first':28.5979021,'second':76.27479989999999},{'first':29.682416300000003,'second':76.9963221},{'first':29.696181700000004,'second':76.994175},{'first':29.695562399999996,'second':76.9897051},{'first':29.682478099999997,'second':76.99584569999999},{'first':29.606366899999998,'second':76.9796911},{'first':29.6827096,'second':76.988385},{'first':29.7109366,'second':77.013356},{'first':29.988329399999998,'second':76.5883534},{'first':29.9739549,'second':76.8425455},{'first':30.147516999999997,'second':76.8672826},{'first':29.9662476,'second':76.8413008},{'first':29.814544200000004,'second':76.4205415},{'first':29.965603399999996,'second':76.8200695},{'first':28.0474739,'second':76.10983159999999},{'first':28.054062799999997,'second':76.1019566},{'first':28.410620599999998,'second':76.2173124},{'first':27.8918984,'second':76.1148741},{'first':28.3300447,'second':76.30518049999999},{'first':28.1016294,'second':76.2603729},{'first':28.2734201,'second':76.14013489999999},{'first':28.057160399999997,'second':76.10528},{'first':28.052332800000002,'second':76.1117991},{'first':29.9611023,'second':76.8695898},{'first':27.9001526,'second':76.993775},{'first':28.0431791,'second':77.230716},{'first':28.2091261,'second':77.2733635},{'first':27.897551099999998,'second':77.3841197},{'first':28.1016294,'second':76.2603729},{'first':28.136640600000003,'second':77.32712649999999},{'first':28.1528389,'second':77.3332317},{'first':28.1359961,'second':77.3271092},{'first':28.146327099999997,'second':77.33543759999999},{'first':28.1363332,'second':77.3214703},{'first':30.7123982,'second':76.85433929999999},{'first':30.833311,'second':76.9356735},{'first':30.5837352,'second':77.02571139999999},{'first':30.661016,'second':76.88247710000002},{'first':30.6745927,'second':76.86474129999999},{'first':29.2405272,'second':77.0117647},{'first':29.398643999999997,'second':76.966315},{'first':29.399843999999998,'second':76.9699705},{'first':29.814544200000004,'second':76.4205415},{'first':28.1894422,'second':76.61415160000001},{'first':28.1904047,'second':76.6135635},{'first':28.187502199999997,'second':76.6141663},{'first':28.1982412,'second':76.62430169999999},{'first':28.192453699999998,'second':76.61936229999999},{'first':28.1907848,'second':76.61150099999999},{'first':28.3968505,'second':76.4852265},{'first':28.2022162,'second':76.6197902},{'first':29.814544200000004,'second':76.4205415},{'first':28.8855942,'second':76.614167},{'first':28.8807505,'second':76.626768},{'first':28.8849699,'second':76.61490309999999},{'first':28.898273200000002,'second':76.58957749999999},{'first':28.8961816,'second':76.5992787},{'first':28.913129299999994,'second':76.6238108},{'first':28.897689399999997,'second':76.5768173},{'first':28.880891199999997,'second':76.6277334},{'first':29.6875011,'second':77.0105781},{'first':28.8956822,'second':76.6089986},{'first':28.607022299999997,'second':76.6455495},{'first':29.533593099999994,'second':75.0177029},{'first':29.54,'second':75.0147466},{'first':29.5341254,'second':75.03934149999999},{'first':29.017712,'second':77.059362},{'first':29.135397299999998,'second':77.0208415},{'first':28.989899299999998,'second':77.0366009},{'first':28.9123769,'second':77.1172338},{'first':29.682790500000003,'second':77.01016899999999},{'first':28.8744896,'second':76.9124465},{'first':28.498773399999997,'second':76.8720675},{'first':29.138204599999998,'second':76.6927802},{'first':29.0587757,'second':76.085601},{'first':30.126803600000002,'second':77.289971},{'first':30.170590099999995,'second':77.2914737},{'first':30.3015942,'second':77.3037636},{'first':30.129304299999998,'second':77.2889696},{'first':30.140070099999996,'second':77.2999881},{'first':31.374312699999994,'second':76.7361562},{'first':31.302045,'second':76.5360776},{'first':32.568118999999996,'second':76.1206821},{'first':31.888342400000003,'second':77.14565549999999},{'first':31.683045399999997,'second':76.5387093},{'first':31.876877999999998,'second':76.31645019999999},{'first':32.0422341,'second':76.6431693},{'first':31.979631899999998,'second':75.9501386},{'first':31.537991199999993,'second':78.2659065},{'first':31.958994299999993,'second':77.1095479},{'first':31.964442,'second':77.11559199999999},{'first':31.559155500000003,'second':77.009466},{'first':31.736013900000003,'second':76.9427006},{'first':31.204552600000003,'second':77.75236079999999},{'first':31.118573700000002,'second':77.0754686},{'first':31.150609699999997,'second':77.21258859999999},{'first':31.146610900000002,'second':77.21791379999999},{'first':30.537873200000003,'second':77.2044629},{'first':31.0891961,'second':76.7956825},{'first':30.8635147,'second':77.1680291},{'first':31.078457500000003,'second':77.17619540000001},{'first':31.1048294,'second':77.17339009999999},{'first':31.5276601,'second':76.1580852},{'first':31.4491451,'second':76.70479040000001},{'first':31.4491451,'second':76.70479040000001},{'first':32.527473799999996,'second':75.98462099999999},{'first':32.527473799999996,'second':75.98462099999999},{'first':31.609443700000003,'second':76.5690985},{'first':32.2131639,'second':76.3193888},{'first':32.2131639,'second':76.3193888},{'first':32.2131639,'second':76.3193888},{'first':31.5581415,'second':77.94673709999999},{'first':31.1048294,'second':77.17339009999999},{'first':31.1048294,'second':77.17339009999999},{'first':31.609281799999994,'second':76.91973229999999},{'first':31.609281799999994,'second':76.91973229999999},{'first':31.1037055,'second':77.171295},{'first':31.1037055,'second':77.171295},{'first':31.1037055,'second':77.171295},{'first':31.1037055,'second':77.171295},{'first':31.516783499999995,'second':77.7938376},{'first':30.942956400000003,'second':76.8221676},{'first':30.942956400000003,'second':76.8221676},{'first':30.942956400000003,'second':76.8221676},{'first':31.426902199999997,'second':76.2298672},{'first':31.426902199999997,'second':76.2298672},{'first':31.609281799999994,'second':76.91973229999999},{'first':31.609281799999994,'second':76.91973229999999},{'first':32.2131639,'second':76.3193888},{'first':32.2131639,'second':76.3193888},{'first':31.609281799999994,'second':76.91973229999999},{'first':32.2131639,'second':76.3193888},{'first':32.2131639,'second':76.3193888},{'first':32.2131639,'second':76.3193888},{'first':31.1037055,'second':77.171295},{'first':31.609281799999994,'second':76.91973229999999},{'first':31.609281799999994,'second':76.91973229999999},{'first':31.609281799999994,'second':76.91973229999999},{'first':31.609281799999994,'second':76.91973229999999},{'first':31.1037055,'second':77.171295},{'first':31.1037055,'second':77.171295},{'first':31.1037055,'second':77.171295},{'first':31.1037055,'second':77.171295},{'first':30.873830599999998,'second':77.0851897},{'first':30.873830599999998,'second':77.0851897},{'first':30.873830599999998,'second':77.0851897},{'first':30.873830599999998,'second':77.0851897},{'first':32.2131639,'second':76.3193888},{'first':32.2131639,'second':76.3193888},{'first':16.1357079,'second':75.62080879999999},{'first':16.163820700000002,'second':75.6746565},{'first':15.144386899999999,'second':76.934778},{'first':15.152947900000001,'second':76.89669049999999},{'first':12.929452099999999,'second':77.6186616},{'first':12.9635669,'second':77.57380739999999},{'first':12.8961554,'second':77.4618516},{'first':12.982187999999999,'second':77.6040572},{'first':13.030523899999999,'second':77.5665628},{'first':12.9648708,'second':77.62805709999999},{'first':12.9754462,'second':77.7309473},{'first':15.873265899999998,'second':74.5111958},{'first':12.7340881,'second':77.27940819999999},{'first':15.874217499999999,'second':74.5144486},{'first':17.920267199999998,'second':77.51596529999999},{'first':11.895513399999999,'second':76.9029568},{'first':13.435358899999999,'second':77.725598},{'first':13.3142205,'second':75.774592},{'first':14.2208276,'second':76.4057711},{'first':14.4821834,'second':75.9226757},{'first':14.457453,'second':75.9154192},{'first':14.820760499999999,'second':76.08922609999999},{'first':15.361600200000002,'second':75.13072009999999},{'first':15.420849,'second':75.04464460000001},{'first':12.866150999999999,'second':74.8589579},{'first':12.809811,'second':74.88347700000001},{'first':12.873039799999999,'second':74.8412242},{'first':12.867383,'second':74.843131},{'first':12.858989399999999,'second':74.8481104},{'first':13.3399985,'second':77.1000114},{'first':13.004863799999999,'second':76.10268649999999},{'first':14.653887,'second':75.89028239999999},{'first':14.7863025,'second':75.4027662},{'first':17.328506,'second':76.8398625},{'first':17.3216051,'second':76.8717372},{'first':12.4416631,'second':75.74032079999999},{'first':13.129245099999999,'second':78.1343507},{'first':15.350829599999997,'second':76.15120770000001},{'first':12.5273158,'second':76.9009221},{'first':12.3491728,'second':76.628029},{'first':16.2300437,'second':77.3590412},{'first':16.1856225,'second':77.3672545},{'first':16.2054853,'second':77.3480211},{'first':12.971188600000001,'second':77.5840607},{'first':13.9353085,'second':75.5628577},{'first':13.3399985,'second':77.1000114},{'first':13.3536851,'second':74.78974},{'first':13.332519999999999,'second':74.747146},{'first':15.3172775,'second':75.7138884},{'first':14.817508,'second':74.1300167},{'first':16.8450853,'second':75.71049320000002},{'first':13.3399985,'second':77.1000114},{'first':11.9268137,'second':76.94248619999999},{'first':16.5043199,'second':75.2917512},{'first':16.3401525,'second':75.6295375},{'first':14.100942,'second':77.1574589},{'first':12.988285399999999,'second':77.5726232},{'first':12.902994,'second':77.4974865},{'first':12.9797307,'second':77.5653045},{'first':13.022416199999999,'second':77.6139504},{'first':12.9262377,'second':77.59280079999999},{'first':12.3488693,'second':76.6281403},{'first':12.9961428,'second':77.569358},{'first':13.028794999999999,'second':77.5394651},{'first':12.938365,'second':77.59070290000001},{'first':12.913837,'second':77.6324526},{'first':16.494134499999998,'second':74.7746684},{'first':16.159184900000003,'second':74.8156199},{'first':16.229157999999998,'second':74.5990492},{'first':16.7261322,'second':75.0610561},{'first':15.7521513,'second':75.1253492},{'first':15.813299700000002,'second':74.8565613},{'first':15.638657900000002,'second':74.50496129999999},{'first':15.9500493,'second':75.297485},{'first':16.425538799999998,'second':74.57580709999999},{'first':15.043031599999999,'second':76.2006129},{'first':15.268854200000002,'second':76.39092409999999},{'first':15.3172775,'second':75.7138884},{'first':11.8083459,'second':76.6927259},{'first':12.158231599999999,'second':77.1107988},{'first':13.316144099999999,'second':75.7720439},{'first':17.3263748,'second':76.853647},{'first':14.456119399999999,'second':75.917356},{'first':15.3535641,'second':75.1496403},{'first':12.553408,'second':75.38438},{'first':12.899478,'second':74.8459759},{'first':12.901248299999999,'second':75.0412305},{'first':12.8747492,'second':74.8606652},{'first':12.803421,'second':74.8980979},{'first':14.977963899999999,'second':75.33310999999999},{'first':17.3429963,'second':76.7567368},{'first':13.003789399999999,'second':78.2374959},{'first':12.9572609,'second':78.2748218},{'first':12.314024800000002,'second':76.6507101},{'first':12.295459899999999,'second':76.65567419999999},{'first':12.9485982,'second':77.574727},{'first':13.3760208,'second':77.0947079},{'first':13.1628501,'second':77.3232882},{'first':13.1605403,'second':76.6672602},{'first':13.7113529,'second':76.9898475},{'first':13.7113529,'second':76.9898475},{'first':13.6643166,'second':77.20889869999999},{'first':13.2573345,'second':76.47692210000001},{'first':13.7451493,'second':76.89796620000001},{'first':13.3340464,'second':74.7421059},{'first':13.039334,'second':77.60261},{'first':17.9615624,'second':76.938379},{'first':16.326242999999998,'second':75.2905485},{'first':16.1491746,'second':75.65945880000001},{'first':16.497299599999998,'second':75.12773729999999},{'first':16.5715635,'second':75.3455905},{'first':16.1552512,'second':75.6790001},{'first':15.842482299999999,'second':75.7589524},{'first':16.504823899999998,'second':75.29718199999999},{'first':16.057625899999998,'second':76.06094759999999},{'first':16.1566187,'second':75.6597784},{'first':12.917134299999999,'second':77.5905776},{'first':16.5067456,'second':75.2919711},{'first':16.1500089,'second':75.6523114},{'first':16.3670443,'second':75.2076075},{'first':12.960086400000002,'second':77.56419679999999},{'first':16.5093474,'second':75.2853471},{'first':16.053483399999998,'second':75.94320239999999},{'first':16.327384,'second':75.2904111},{'first':15.196938000000001,'second':76.66072199999999},{'first':12.416756699999999,'second':75.7344383},{'first':15.2809625,'second':76.387579},{'first':15.1482604,'second':76.92932119999999},{'first':15.148061199999999,'second':76.9294764},{'first':16.8899681,'second':75.5529081},{'first':13.341193899999999,'second':74.74784559999999},{'first':16.0057637,'second':75.1414472},{'first':16.260621999999998,'second':74.48234029999999},{'first':15.8615997,'second':74.5179291},{'first':16.3487507,'second':74.7263913},{'first':15.1426652,'second':76.9360927},{'first':16.336973999999998,'second':74.9661368},{'first':12.868364,'second':74.842945},{'first':16.1642188,'second':74.81548550000001},{'first':15.147164799999999,'second':76.8940016},{'first':15.765728800000002,'second':74.45601119999999},{'first':15.861531900000001,'second':74.517684},{'first':15.8621412,'second':74.5191136},{'first':15.5797473,'second':74.7679054},{'first':16.404098,'second':74.3760148},{'first':15.7567203,'second':75.12425449999999},{'first':14.2485971,'second':75.4703274},{'first':15.352701199999998,'second':76.1486106},{'first':15.3172775,'second':75.7138884},{'first':12.8729439,'second':74.8422162},{'first':15.578130900000001,'second':74.5990492},{'first':16.5143849,'second':74.9480525},{'first':16.330285099999998,'second':74.9686942},{'first':15.168571,'second':76.8413528},{'first':16.516386699999998,'second':74.9498026},{'first':15.4161426,'second':75.0337764},{'first':12.86845,'second':74.838652},{'first':12.4255,'second':75.7379},{'first':16.6990801,'second':74.7112017},{'first':16.6379201,'second':75.0781664},{'first':15.4522806,'second':75.0068117},{'first':12.296657399999999,'second':76.651782},{'first':16.2600491,'second':74.4836128},{'first':16.220335800000004,'second':74.7617034},{'first':15.3172775,'second':75.7138884},{'first':14.629168000000002,'second':74.8491504},{'first':15.718254,'second':74.9209666},{'first':16.5632756,'second':74.8726303},{'first':16.4953171,'second':74.7757582},{'first':16.4093582,'second':74.3757771},{'first':15.878559999999998,'second':74.5151255},{'first':13.0616419,'second':74.9777946},{'first':16.6990801,'second':74.7112017},{'first':15.969826600000001,'second':74.7578461},{'first':16.8077448,'second':75.7179625},{'first':15.6450854,'second':74.5035813},{'first':15.861626099999999,'second':74.5180867},{'first':18.3390463,'second':73.8397009},{'first':15.3172775,'second':75.7138884},{'first':13.435677799999999,'second':77.7297373},{'first':15.598840599999999,'second':74.7885443},{'first':16.0057637,'second':75.1414472},{'first':16.5643024,'second':74.8141909},{'first':16.5275651,'second':74.60141109999999},{'first':15.878705900000002,'second':74.51683249999999},{'first':15.8633909,'second':74.5193839},{'first':16.2918935,'second':74.5528018},{'first':15.853151699999998,'second':74.51193140000001},{'first':16.624827,'second':74.8510482},{'first':15.8671621,'second':74.5106627},{'first':12.998639599999999,'second':77.5419014},{'first':15.578130900000001,'second':74.5990492},{'first':16.259805800000002,'second':74.4851486},{'first':12.9798646,'second':77.5744139},{'first':16.6864489,'second':76.6022778},{'first':15.9564825,'second':75.3023834},{'first':15.9148191,'second':75.0640676},{'first':16.494134499999998,'second':74.7746684},{'first':16.2745545,'second':74.4607142},{'first':12.9780106,'second':77.55084029999999},{'first':15.861681899999999,'second':74.5183921},{'first':15.878494,'second':74.5162192},{'first':15.872100999999999,'second':74.5268217},{'first':15.776981399999999,'second':74.6446806},{'first':16.7438368,'second':74.9884003},{'first':16.5171522,'second':74.94957029999999},{'first':12.9597166,'second':77.56434469999999},{'first':13.1355179,'second':78.12372959999999},{'first':13.0773196,'second':77.8114538},{'first':13.233357199999999,'second':77.7079914},{'first':12.8741238,'second':77.6473283},{'first':12.926197799999999,'second':77.6169685},{'first':12.958968599999999,'second':77.57642709999999},{'first':12.7883008,'second':77.6297289},{'first':13.082403999999999,'second':74.99638100000001},{'first':12.6133863,'second':77.0583003},{'first':13.0023579,'second':77.5695202},{'first':15.283737100000002,'second':76.3866043},{'first':13.028087999999999,'second':77.55892},{'first':12.879771799999999,'second':77.64621489999999},{'first':13.082403999999999,'second':74.99638100000001},{'first':12.3314722,'second':76.64796450000001},{'first':12.913739,'second':77.4868594},{'first':13.0369791,'second':77.5657026},{'first':12.979811699999999,'second':77.57556679999999},{'first':15.3172775,'second':75.7138884},{'first':14.154111299999999,'second':75.0333083},{'first':13.0900843,'second':77.63649670000001},{'first':14.481084299999997,'second':74.4334141},{'first':17.7469121,'second':77.3571039},{'first':18.2496144,'second':77.41568889999999},{'first':18.0503666,'second':77.2183652},{'first':17.768275499999998,'second':77.1312586},{'first':17.9167628,'second':77.53078769999999},{'first':17.872103199999998,'second':76.94702199999999},{'first':17.9148799,'second':77.5046101},{'first':11.895513399999999,'second':76.9029568},{'first':13.4502107,'second':77.9469302},{'first':13.400748000000002,'second':77.68013119999999},{'first':13.039334,'second':77.60261},{'first':13.4019689,'second':78.05513839999999},{'first':13.3922613,'second':78.0475063},{'first':13.425942899999999,'second':77.7297249},{'first':15.3172775,'second':75.7138884},{'first':13.278113,'second':78.1193823},{'first':13.4019689,'second':78.05513839999999},{'first':13.4243283,'second':77.72918539999999},{'first':15.3172775,'second':75.7138884},{'first':13.780694899999999,'second':77.8035034},{'first':15.615539199999997,'second':76.0256065},{'first':13.3922613,'second':78.0475063},{'first':12.9715987,'second':77.5945627},{'first':13.320122300000001,'second':77.09353109999999},{'first':15.598840599999999,'second':74.7885443},{'first':12.993155,'second':77.503154},{'first':14.2506948,'second':75.3506917},{'first':12.6865879,'second':77.47559249999999},{'first':13.4019689,'second':78.05513839999999},{'first':13.4192833,'second':77.85747549999999},{'first':12.3163777,'second':76.6228158},{'first':13.321124699999999,'second':75.76948949999999},{'first':14.2145043,'second':76.4121253},{'first':14.029594399999999,'second':76.7271588},{'first':14.733895799999999,'second':76.70280939999999},{'first':12.9009351,'second':77.6065713},{'first':14.874776200000001,'second':76.7812388},{'first':14.313395000000002,'second':76.6528225},{'first':14.3151052,'second':76.64821719999999},{'first':13.956736,'second':75.5610986},{'first':14.2359244,'second':76.3850933},{'first':13.8016955,'second':76.2690184},{'first':13.0109883,'second':74.7943167},{'first':12.8123685,'second':74.882261},{'first':12.867713199999999,'second':74.86622679999999},{'first':13.0221614,'second':74.79311609999999},{'first':12.8705812,'second':74.8958675},{'first':13.256912000000002,'second':77.711961},{'first':14.4556939,'second':75.9175034},{'first':14.505066600000001,'second':76.3331594},{'first':14.5152216,'second':75.8071609},{'first':15.147333699999999,'second':76.9305617},{'first':14.520088299999998,'second':76.33767859999999},{'first':14.2342499,'second':75.6469934},{'first':14.4302923,'second':75.8947852},{'first':14.2342499,'second':75.6469934},{'first':14.4302923,'second':75.8947852},{'first':14.463007399999999,'second':75.9183218},{'first':14.434572200000002,'second':75.8866821},{'first':13.987955999999999,'second':75.684164},{'first':14.5152216,'second':75.8071609},{'first':15.361600200000002,'second':75.13072009999999},{'first':15.3535641,'second':75.1496403},{'first':15.3527643,'second':75.1016925},{'first':15.3472466,'second':75.1373729},{'first':15.3386584,'second':75.1252031},{'first':15.3533582,'second':75.0665566},{'first':15.450495,'second':75.0023435},{'first':15.168571,'second':76.8413528},{'first':14.553312400000001,'second':76.7747687},{'first':15.2005505,'second':75.87862849999999},{'first':15.431540599999998,'second':75.63551489999999},{'first':15.3766954,'second':75.6026473},{'first':15.279235799999999,'second':75.5247584},{'first':15.1274626,'second':75.4723411},{'first':12.5201681,'second':76.8837162},{'first':15.7213753,'second':75.3849382},{'first':14.238368600000001,'second':76.3985788},{'first':12.7566483,'second':76.0660311},{'first':15.168571,'second':76.8413528},{'first':13.0211595,'second':76.100027},{'first':13.328992399999999,'second':74.763477},{'first':12.426964,'second':77.2264362},{'first':13.027816999999999,'second':77.0383094},{'first':15.557777999999997,'second':75.3584272},{'first':14.969391499999999,'second':75.1825484},{'first':13.098010799999999,'second':77.5930446},{'first':14.5182539,'second':75.3116022},{'first':15.5797473,'second':74.7679054},{'first':14.5585288,'second':75.1488719},{'first':14.6694699,'second':75.48894609999999},{'first':14.615399,'second':75.6288239},{'first':17.1805883,'second':77.2698867},{'first':17.321422,'second':76.8728533},{'first':17.125277999999998,'second':77.0838225},{'first':12.460241499999999,'second':75.696097},{'first':13.3406185,'second':78.2135267},{'first':12.9471566,'second':78.2711207},{'first':15.598840599999999,'second':74.7885443},{'first':12.9470654,'second':78.2761908},{'first':13.1666533,'second':78.39407369999999},{'first':13.027816999999999,'second':77.0383094},{'first':13.027816999999999,'second':77.0383094},{'first':12.9538811,'second':78.27357529999999},{'first':12.989777799999999,'second':78.17774899999999},{'first':12.9715987,'second':77.5945627},{'first':13.1108028,'second':78.1372646},{'first':13.1692235,'second':78.39332689999999},{'first':13.003504999999999,'second':77.9370086},{'first':12.9585136,'second':78.2710336},{'first':13.3950094,'second':78.2488192},{'first':15.168571,'second':76.8413528},{'first':12.9923861,'second':78.17675030000001},{'first':13.1412239,'second':78.1391393},{'first':13.0024046,'second':77.9366945},{'first':13.027816999999999,'second':77.0383094},{'first':13.1666533,'second':78.39407369999999},{'first':13.164219,'second':78.40249200000001},{'first':15.5797473,'second':74.7679054},{'first':13.3440207,'second':78.2106386},{'first':12.9470654,'second':78.2761908},{'first':13.107751299999999,'second':78.0914973},{'first':12.994070899999999,'second':78.173204},{'first':13.027816999999999,'second':77.0383094},{'first':13.1666533,'second':78.39407369999999},{'first':15.3172775,'second':75.7138884},{'first':13.3440207,'second':78.2106386},{'first':12.9585136,'second':78.2710336},{'first':12.973728099999999,'second':78.262641},{'first':13.027816999999999,'second':77.0383094},{'first':12.9923861,'second':78.17675030000001},{'first':14.281859599999999,'second':74.8928292},{'first':13.212329299999999,'second':78.36786769999999},{'first':12.9144018,'second':78.02086899999999},{'first':15.7006713,'second':76.16605609999999},{'first':15.5853428,'second':76.0073434},{'first':15.4088354,'second':76.5342694},{'first':15.350465199999999,'second':76.1567298},{'first':16.8439555,'second':75.7103272},{'first':12.5273158,'second':76.9009221},{'first':12.9009351,'second':77.6065713},{'first':12.960086400000002,'second':77.56419679999999},{'first':13.344323099999999,'second':74.7468063},{'first':15.3172775,'second':75.7138884},{'first':12.2953884,'second':76.653511},{'first':12.349661999999999,'second':76.600422},{'first':13.344002699999999,'second':74.7491886},{'first':16.4235352,'second':76.9354979},{'first':16.2010741,'second':77.3811963},{'first':16.4235352,'second':76.9354979},{'first':16.1907315,'second':77.3577773},{'first':15.995103399999998,'second':77.0478112},{'first':16.170825699999998,'second':77.3329182},{'first':16.002461,'second':77.04004549999999},{'first':15.770209900000001,'second':76.7560495},{'first':15.9726597,'second':76.64707},{'first':15.571121099999997,'second':76.41870589999999},{'first':16.1550404,'second':76.5199195},{'first':12.6169683,'second':77.53044779999999},{'first':12.7336992,'second':77.2934428},{'first':13.039334,'second':77.60261},{'first':12.6779525,'second':77.0935575},{'first':15.598840599999999,'second':74.7885443},{'first':13.9353085,'second':75.5628577},{'first':12.5201681,'second':76.8837162},{'first':13.098010799999999,'second':77.5930446},{'first':13.2788774,'second':76.3648471},{'first':15.493027099999999,'second':76.5081148},{'first':13.7476854,'second':76.8714176},{'first':13.302351999999999,'second':76.256869},{'first':13.435756699999999,'second':77.72724389999999},{'first':12.9233617,'second':77.55664399999999},{'first':13.027816999999999,'second':77.0383094},{'first':13.6643166,'second':77.20889869999999},{'first':13.409438999999999,'second':76.6209599},{'first':14.1030998,'second':77.2807423},{'first':13.313011399999999,'second':74.73578119999999},{'first':13.216613299999999,'second':75.016644},{'first':14.815825799999999,'second':74.1335438},{'first':15.2535145,'second':74.6215605},{'first':14.2433901,'second':74.5069961},{'first':14.818481199999999,'second':74.1416127},{'first':14.8005653,'second':75.39346859999999},{'first':13.995735,'second':74.554982},{'first':15.3291887,'second':74.7585773},{'first':15.334753699999998,'second':74.7666957},{'first':14.6245883,'second':74.83970769999999},{'first':14.974033499999999,'second':75.0473341},{'first':14.6613292,'second':74.310751},{'first':15.5797473,'second':74.7679054},{'first':15.161452500000001,'second':74.4886619},{'first':14.815825799999999,'second':74.1335438},{'first':14.815825799999999,'second':74.1335438},{'first':15.236119100000002,'second':74.6172819},{'first':14.416082399999999,'second':74.41578659999999},{'first':16.828098,'second':75.69171469999999},{'first':16.8832494,'second':75.5611485},{'first':16.8250732,'second':75.6816923},{'first':16.9161155,'second':75.72206729999999},{'first':16.3395804,'second':76.1290961},{'first':17.175164799999997,'second':75.9554927},{'first':16.908264499999998,'second':76.2437147},{'first':16.536690999999998,'second':76.7885838},{'first':15.488925299999998,'second':74.9812757},{'first':15.3172775,'second':75.7138884},{'first':19.1084298,'second':74.7353627},{'first':19.094173299999998,'second':74.7469287},{'first':19.7514798,'second':75.7138884},{'first':19.1084298,'second':74.7353627},{'first':20.7025966,'second':77.001948},{'first':20.7127657,'second':77.0114122},{'first':20.713240799999998,'second':77.0120563},{'first':20.944872,'second':77.7728837},{'first':21.2579714,'second':77.5119352},{'first':20.9197326,'second':77.7576804},{'first':20.9387598,'second':77.761167},{'first':20.9440967,'second':77.7433279},{'first':19.8812498,'second':75.34715430000001},{'first':19.872568400000002,'second':75.38766729999999},{'first':19.8777846,'second':75.3545145},{'first':19.8899963,'second':75.3181535},{'first':18.990088,'second':75.7531324},{'first':18.734950299999998,'second':76.3995645},{'first':18.7317373,'second':76.3717175},{'first':21.177657999999997,'second':79.6570127},{'first':20.7175621,'second':76.56354639999999},{'first':20.5303017,'second':76.1692103},{'first':20.7207,'second':76.5649787},{'first':20.7958732,'second':76.6964275},{'first':20.534150099999998,'second':76.1843512},{'first':20.707987199999998,'second':76.57724},{'first':20.5361367,'second':76.1723998},{'first':20.536344,'second':76.1728523},{'first':20.1450837,'second':76.57778119999999},{'first':20.867174,'second':76.202786},{'first':19.7514798,'second':75.7138884},{'first':19.949932099999998,'second':79.29342559999999},{'first':19.957858599999998,'second':79.2964058},{'first':19.964218499999998,'second':79.2916094},{'first':20.8639536,'second':74.7623454},{'first':20.1772405,'second':80.005074},{'first':20.184870999999998,'second':79.9947956},{'first':21.4576356,'second':80.1955268},{'first':21.4576356,'second':80.1955268},{'first':21.457018899999998,'second':80.20545059999999},{'first':21.4722863,'second':80.19616359999999},{'first':19.7514798,'second':75.7138884},{'first':19.722112,'second':77.154386},{'first':19.2376717,'second':73.1381723},{'first':21.0233731,'second':75.7050383},{'first':21.014450999999998,'second':75.5601212},{'first':20.9996139,'second':75.56010239999999},{'first':21.008802,'second':75.5675565},{'first':19.834665899999997,'second':75.88163449999999},{'first':18.619742,'second':73.850112},{'first':19.834665899999997,'second':75.88163449999999},{'first':16.671586599999998,'second':74.2346105},{'first':16.7144346,'second':74.2564812},{'first':18.429594899999998,'second':76.5779498},{'first':18.395753900000003,'second':76.57806380000001},{'first':18.4124244,'second':76.60887319999999},{'first':18.386288,'second':77.138015},{'first':19.095873700000002,'second':72.84011869999999},{'first':19.1204408,'second':72.91709139999999},{'first':18.6044971,'second':73.7754156},{'first':19.095873700000002,'second':72.84011869999999},{'first':19.107767799999998,'second':72.83620549999999},{'first':18.952507999999998,'second':72.81819899999999},{'first':18.9712447,'second':72.8209136},{'first':19.0551638,'second':72.82728809999999},{'first':18.9746317,'second':72.80650229999999},{'first':19.0025142,'second':72.8420769},{'first':19.0462839,'second':72.84267919999999},{'first':19.0511282,'second':72.8291996},{'first':19.054029699999997,'second':72.8525501},{'first':19.036666999999998,'second':72.85858379999999},{'first':19.0228644,'second':72.8636137},{'first':19.7514798,'second':75.7138884},{'first':19.0049019,'second':72.84316860000001},{'first':18.9752486,'second':72.82382179999999},{'first':19.0927141,'second':74.7385204},{'first':19.054029699999997,'second':72.8525501},{'first':18.9743706,'second':72.8361472},{'first':18.9716718,'second':72.8097633},{'first':19.1725542,'second':72.942537},{'first':19.0760717,'second':72.8862889},{'first':18.9705872,'second':72.82402929999999},{'first':18.9657017,'second':72.8133541},{'first':19.1179997,'second':72.8780374},{'first':19.2463579,'second':72.8605812},{'first':18.999497899999998,'second':72.8409269},{'first':19.7514798,'second':75.7138884},{'first':19.229341599999998,'second':72.8466084},{'first':18.6044971,'second':73.7754156},{'first':19.033500099999998,'second':72.838349},{'first':18.9840364,'second':72.8298487},{'first':19.059719599999998,'second':72.8526839},{'first':19.0222136,'second':72.8665122},{'first':19.1743581,'second':72.84461569999999},{'first':19.1620779,'second':72.9419882},{'first':18.94505,'second':72.8318278},{'first':18.9708409,'second':72.8365499},{'first':19.141035199999997,'second':72.85413059999999},{'first':19.112358399999998,'second':72.9346456},{'first':19.0735074,'second':72.8995453},{'first':18.940534000000003,'second':72.83814199999999},{'first':19.1589708,'second':72.8492072},{'first':19.4945979,'second':72.86040969999999},{'first':19.7514798,'second':75.7138884},{'first':21.126386999999998,'second':79.0964896},{'first':21.153418,'second':79.09397349999999},{'first':19.7514798,'second':75.7138884},{'first':21.038555799999997,'second':79.02377369999999},{'first':19.162482999999998,'second':77.3190683},{'first':19.110701499999998,'second':77.2909403},{'first':19.1349308,'second':77.305373},{'first':19.1553176,'second':77.3117925},{'first':18.999497899999998,'second':72.8409269},{'first':19.1760657,'second':77.29194849999999},{'first':18.781278999999998,'second':77.67222389999999},{'first':19.1570759,'second':77.30835830000001},{'first':19.1612254,'second':77.3047339},{'first':19.0927141,'second':74.7385204},{'first':21.3686011,'second':74.2434359},{'first':20.5623582,'second':74.5498702},{'first':20.014602,'second':73.795925},{'first':20.035863199999998,'second':73.8521623},{'first':19.7514798,'second':75.7138884},{'first':20.0121955,'second':73.81603679999999},{'first':19.973512,'second':73.7914263},{'first':19.9968854,'second':73.7781984},{'first':18.513111,'second':73.83929049999999},{'first':20.5328739,'second':76.18659509999999},{'first':18.0087239,'second':76.0708812},{'first':17.8397675,'second':76.6222433},{'first':19.4536442,'second':72.80180659999999},{'first':20.033053,'second':72.90619029999999},{'first':19.381158799999998,'second':72.8281071},{'first':19.786463599999998,'second':72.76046339999999},{'first':18.5936661,'second':73.7929195},{'first':19.436303499999998,'second':72.8112182},{'first':19.436303499999998,'second':72.8112182},{'first':19.288946499999998,'second':73.0687001},{'first':19.756812999999998,'second':73.0486446},{'first':19.7181931,'second':72.7638794},{'first':19.266115499999998,'second':76.7790055},{'first':19.289836100000002,'second':76.7368833},{'first':19.2614657,'second':76.77135249999999},{'first':19.2612128,'second':76.7712248},{'first':19.2634594,'second':76.7702733},{'first':19.2606991,'second':76.77685369999999},{'first':19.2599721,'second':76.7805796},{'first':19.271434799999998,'second':76.7646433},{'first':19.274606,'second':76.76118559999999},{'first':18.503024300000003,'second':73.9321215},{'first':18.459211099999997,'second':73.85772589999999},{'first':18.5021281,'second':73.83211039999999},{'first':18.534863899999998,'second':73.88742189999999},{'first':18.538875500000003,'second':73.7275776},{'first':18.513111,'second':73.83929049999999},{'first':18.5110281,'second':73.8424249},{'first':18.5410689,'second':73.9356306},{'first':18.510236799999998,'second':73.83706889999999},{'first':18.530471000000002,'second':73.8766357},{'first':18.4958276,'second':73.81251089999999},{'first':19.6513653,'second':73.1469415},{'first':18.5333826,'second':73.87701729999999},{'first':18.656008699999997,'second':73.7732903},{'first':18.5252302,'second':73.87051919999999},{'first':18.6252298,'second':73.77424549999999},{'first':19.843556,'second':75.232068},{'first':18.524888,'second':73.8733288},{'first':18.621819400000003,'second':73.8210282},{'first':18.5199723,'second':73.86697649999999},{'first':18.7352402,'second':73.67441529999999},{'first':18.4563263,'second':73.8208408},{'first':18.5049439,'second':73.9270805},{'first':18.9830114,'second':73.10828730000001},{'first':19.0176353,'second':73.1043852},{'first':17.7698942,'second':73.41649439999999},{'first':16.989092,'second':73.2992651},{'first':17.3855361,'second':73.5446889},{'first':16.8320924,'second':74.64542589999999},{'first':16.837025399999998,'second':74.64740069999999},{'first':18.4569217,'second':73.85617309999999},{'first':17.0314714,'second':74.29457889999999},{'first':17.693885899999998,'second':74.0114701},{'first':17.280445099999998,'second':74.17366969999999},{'first':17.686601,'second':74.0250746},{'first':17.6920912,'second':74.0077376},{'first':17.261010799999998,'second':74.17639369999999},{'first':17.687247,'second':73.9907581},{'first':18.0451829,'second':74.1868235},{'first':17.6926465,'second':74.0137446},{'first':18.1497495,'second':73.9737742},{'first':17.686381,'second':74.02767399999999},{'first':17.6916445,'second':74.0091107},{'first':17.7035837,'second':74.1580183},{'first':17.67981,'second':73.989682},{'first':17.9872417,'second':74.4382801},{'first':17.6949035,'second':73.9920941},{'first':17.275817999999997,'second':74.1812451},{'first':17.686090999999998,'second':74.015211},{'first':18.0471383,'second':74.19255609999999},{'first':17.6865232,'second':74.0155387},{'first':17.9838687,'second':74.4351465},{'first':17.685546199999997,'second':74.01774019999999},{'first':19.198551700000003,'second':72.9779714},{'first':17.67234,'second':75.919614},{'first':17.6674669,'second':75.900285},{'first':17.6710663,'second':75.3277705},{'first':17.6567535,'second':75.89724269999999},{'first':17.6661137,'second':75.87685929999999},{'first':17.670427399999998,'second':75.9095135},{'first':17.6458959,'second':75.9859752},{'first':18.2292013,'second':75.68413819999999},{'first':17.668657,'second':75.3156218},{'first':17.8836892,'second':75.01292649999999},{'first':17.645348,'second':75.91557619999999},{'first':17.6788593,'second':75.32904599999999},{'first':17.6728591,'second':75.3246808},{'first':17.6621912,'second':75.9017504},{'first':17.6607757,'second':75.9082616},{'first':19.2467667,'second':73.1090528},{'first':19.2717195,'second':72.9627958},{'first':19.0828568,'second':72.99621139999999},{'first':19.198251,'second':72.9670245},{'first':19.2599569,'second':73.1395292},{'first':19.2302626,'second':73.154099},{'first':19.248074199999998,'second':72.9757693},{'first':19.0828568,'second':72.99621139999999},{'first':19.2358145,'second':72.97555299999999},{'first':19.2154599,'second':73.10114039999999},{'first':19.031561699999997,'second':73.0162449},{'first':19.2164321,'second':73.082936},{'first':19.232107000000003,'second':73.15761499999999},{'first':19.2990255,'second':73.0669831},{'first':19.197525799999998,'second':72.9672792},{'first':19.208697,'second':72.9599333},{'first':19.239315899999998,'second':73.14102319999999},{'first':19.0205055,'second':73.02894049999999},{'first':19.2001465,'second':72.9665521},{'first':19.2037765,'second':72.96905},{'first':19.2184669,'second':72.97034719999999},{'first':18.386288,'second':77.138015},{'first':19.213715,'second':73.088436},{'first':19.2405381,'second':73.14097319999999},{'first':19.2112589,'second':72.977055},{'first':19.2665285,'second':72.9673877},{'first':19.2449436,'second':73.1257881},{'first':19.154861,'second':73.0623131},{'first':19.2125724,'second':73.1077451},{'first':19.297471899999998,'second':72.84811719999999},{'first':19.0049019,'second':72.84316860000001},{'first':19.2122694,'second':72.98037440000002},{'first':19.7514798,'second':75.7138884},{'first':19.0828568,'second':72.99621139999999},{'first':19.198551700000003,'second':72.9779714},{'first':19.2034141,'second':72.8280292},{'first':19.1944618,'second':72.959554},{'first':19.0828568,'second':72.99621139999999},{'first':19.7514798,'second':75.7138884},{'first':19.2964534,'second':72.87526919999999},{'first':19.2031115,'second':73.0039271},{'first':19.235822,'second':72.975562},{'first':19.7514798,'second':75.7138884},{'first':19.154861,'second':73.0623131},{'first':19.2967196,'second':72.864609},{'first':19.0828568,'second':72.99621139999999},{'first':19.229658699999998,'second':73.1650159},{'first':19.7514798,'second':75.7138884},{'first':19.184153,'second':72.9767801},{'first':19.1895392,'second':72.9628815},{'first':19.2449436,'second':73.1257881},{'first':19.7514798,'second':75.7138884},{'first':19.249961799999998,'second':73.0176783},{'first':19.158422899999998,'second':73.0293762},{'first':19.1978386,'second':73.19434679999999},{'first':19.2842953,'second':72.862231},{'first':19.246377,'second':73.123621},{'first':19.2410772,'second':73.1465254},{'first':19.249961799999998,'second':73.0176783},{'first':19.2922486,'second':72.86236819999999},{'first':18.959098800000003,'second':72.82023869999999},{'first':19.2961189,'second':73.2034805},{'first':20.7390579,'second':78.6606506},{'first':20.7153262,'second':78.5729417},{'first':20.122587,'second':77.13105279999999},{'first':20.3920386,'second':78.117422},{'first':19.579011599999998,'second':74.2097594},{'first':18.7239144,'second':75.3110574},{'first':19.8322491,'second':74.4760963},{'first':19.5934342,'second':74.1951085},{'first':19.7635291,'second':74.475736},{'first':19.3963753,'second':74.6446109},{'first':19.541115800000004,'second':74.00775759999999},{'first':19.3978804,'second':74.64631299999999},{'first':19.7631328,'second':74.47087379999999},{'first':19.4456331,'second':74.60273219999999},{'first':19.6216792,'second':74.6658425},{'first':19.1761399,'second':75.1749671},{'first':18.9603047,'second':74.5351965},{'first':18.617543899999998,'second':74.6981267},{'first':18.9580886,'second':74.5352156},{'first':19.0148695,'second':72.863143},{'first':18.661677500000003,'second':74.66353649999999},{'first':19.541115800000004,'second':74.00775759999999},{'first':19.3619639,'second':74.8565483},{'first':19.3541789,'second':75.2204825},{'first':18.545227,'second':75.0051316},{'first':18.994367399999998,'second':74.903339},{'first':20.711352899999998,'second':77.01012209999999},{'first':20.714274,'second':77.010443},{'first':20.7183353,'second':77.0065953},{'first':20.7140877,'second':77.00660570000001},{'first':20.7354497,'second':77.3619623},{'first':20.7025966,'second':77.001948},{'first':20.7123468,'second':77.0136733},{'first':20.926841300000003,'second':77.3242534},{'first':21.3396047,'second':78.010666},{'first':21.0417932,'second':78.0024134},{'first':20.9424274,'second':77.8454213},{'first':19.7514798,'second':75.7138884},{'first':20.299167999999998,'second':75.6583297},{'first':18.997058799999998,'second':72.8430731},{'first':19.474287099999998,'second':75.38553790000002},{'first':19.831749,'second':75.2884289},{'first':19.8956715,'second':75.3990932},{'first':19.8682884,'second':75.40411089999999},{'first':20.590101399999998,'second':75.6158951},{'first':19.8959556,'second':75.37022619999999},{'first':19.9290239,'second':74.7364413},{'first':19.697525199999998,'second':75.0105028},{'first':19.9256818,'second':74.72848119999999},{'first':19.881574399999998,'second':75.3604845},{'first':19.8692712,'second':75.3478556},{'first':19.7029812,'second':75.30299409999999},{'first':19.851537999999998,'second':75.314769},{'first':20.2697885,'second':75.1341064},{'first':19.0260644,'second':75.75758809999999},{'first':18.7271336,'second':76.3810922},{'first':19.7514798,'second':75.7138884},{'first':18.714236,'second':76.0643777},{'first':18.9861455,'second':75.7505638},{'first':19.2610489,'second':75.74908289999999},{'first':18.991626,'second':75.7544547},{'first':18.8490954,'second':76.52682930000002},{'first':19.0003287,'second':75.7578235},{'first':18.8453169,'second':76.5198462},{'first':19.0010161,'second':75.7550929},{'first':18.9938632,'second':75.7477391},{'first':18.726712499999998,'second':76.3888796},{'first':18.8491937,'second':76.52381749999999},{'first':18.978701900000004,'second':75.7557103},{'first':19.158025,'second':76.20396099999999},{'first':19.1631325,'second':76.2082538},{'first':18.987526799999998,'second':75.7457465},{'first':19.269410999999998,'second':75.74508},{'first':18.979472599999998,'second':75.7577455},{'first':21.177657999999997,'second':79.6570127},{'first':21.1796868,'second':79.6514408},{'first':21.161286999999998,'second':79.64167499999999},{'first':21.177657999999997,'second':79.6570127},{'first':20.83549,'second':76.465633},{'first':20.236418399999998,'second':76.4917322},{'first':20.3436807,'second':76.25049179999999},{'first':20.3446779,'second':76.2623095},{'first':20.885420699999997,'second':76.2055134},{'first':20.0875177,'second':76.51847409999999},{'first':20.7074671,'second':76.5657559},{'first':20.534271,'second':76.1737114},{'first':20.7916389,'second':76.7017331},{'first':19.960730899999998,'second':79.29543249999999},{'first':19.9521175,'second':79.2936677},{'first':19.783421999999998,'second':79.366176},{'first':19.962055,'second':79.2934573},{'first':19.9686614,'second':79.2920007},{'first':19.9500656,'second':79.29791320000001},{'first':19.9689977,'second':79.3092396},{'first':19.976382299999997,'second':79.28276249999999},{'first':21.3245073,'second':74.556386},{'first':21.520964,'second':74.891975},{'first':20.901677,'second':74.77096499999999},{'first':21.3259611,'second':74.5632803},{'first':21.349598099999998,'second':74.8797127},{'first':19.4289655,'second':80.05628639999999},{'first':20.624786,'second':80.214135},{'first':20.4696964,'second':79.9855401},{'first':32.219042,'second':76.3234037},{'first':21.4806708,'second':80.17940279999999},{'first':21.4576356,'second':80.1955268},{'first':21.412336999999997,'second':79.92645979999999},{'first':19.1410472,'second':77.3068898},{'first':19.325087699999997,'second':77.1572426},{'first':19.6751188,'second':77.3079806},{'first':21.238978799999998,'second':75.2938994},{'first':21.047932100000004,'second':75.06061079999999},{'first':21.0519519,'second':75.79261749999999},{'first':20.663665299999998,'second':75.3360036},{'first':21.0468205,'second':76.0594972},{'first':21.247208099999998,'second':75.3031435},{'first':20.665349,'second':75.345204},{'first':19.870596,'second':75.78234599999999},{'first':19.8490946,'second':75.90548439999999},{'first':19.800660999999998,'second':75.89216429999999},{'first':19.2927237,'second':72.8615849},{'first':19.8685868,'second':75.6513083},{'first':19.8523674,'second':75.86229159999999},{'first':16.768229299999998,'second':74.5648073},{'first':16.6733187,'second':74.2717624},{'first':21.1352326,'second':79.0911656},{'first':18.512556800000002,'second':73.84454389999999},{'first':16.7423041,'second':74.3822754},{'first':16.2563951,'second':74.3556159},{'first':16.6812373,'second':74.25689899999999},{'first':16.1459759,'second':74.33585339999999},{'first':18.1258753,'second':76.75096599999999},{'first':18.3980944,'second':77.1037912},{'first':18.5641876,'second':76.88633779999999},{'first':18.429594899999998,'second':76.5779498},{'first':18.4202336,'second':76.5741213},{'first':19.0411561,'second':73.0246854},{'first':18.9862285,'second':72.814939},{'first':19.0522583,'second':72.86276409999999},{'first':19.1716949,'second':72.960426},{'first':19.0852596,'second':72.90620720000001},{'first':19.049546,'second':72.906958},{'first':19.0786829,'second':72.90120759999999},{'first':19.0032392,'second':72.8430332},{'first':19.11944,'second':72.8449787},{'first':19.2922486,'second':72.86236819999999},{'first':19.0196824,'second':72.8585635},{'first':19.049428799999998,'second':72.9110839},{'first':19.057454399999997,'second':72.83364499999999},{'first':19.241384,'second':72.853099},{'first':21.1018591,'second':79.064843},{'first':19.0099044,'second':72.81726549999999},{'first':19.0619309,'second':72.89646739999999},{'first':19.159716,'second':72.998493},{'first':19.150268999999998,'second':72.8530249},{'first':19.0651581,'second':72.8778501},{'first':18.9793906,'second':72.8128744},{'first':18.9687336,'second':72.8191844},{'first':19.241455,'second':72.85483599999999},{'first':18.9421721,'second':72.8322919},{'first':18.941034,'second':72.8274361},{'first':18.9871061,'second':72.8236605},{'first':19.1933693,'second':72.8470241},{'first':19.1783514,'second':72.85125579999999},{'first':19.209443999999998,'second':72.8507588},{'first':19.036666999999998,'second':72.85858379999999},{'first':19.0653245,'second':72.8661943},{'first':18.6720504,'second':73.8376415},{'first':19.190018000000002,'second':72.8548213},{'first':18.9012293,'second':72.9753984},{'first':19.023406299999998,'second':72.8378245},{'first':18.9618331,'second':72.83671149999999},{'first':19.0788205,'second':72.84503269999999},{'first':19.1833618,'second':72.9515692},{'first':19.012746999999997,'second':72.8613887},{'first':19.8671981,'second':75.3502092},{'first':19.108667699999998,'second':72.878675},{'first':19.1106753,'second':72.8252049},{'first':19.7514798,'second':75.7138884},{'first':19.1662566,'second':72.8525696},{'first':19.1848469,'second':72.8345642},{'first':18.5912716,'second':73.73890899999999},{'first':19.150268999999998,'second':72.8530249},{'first':19.7514798,'second':75.7138884},{'first':19.2376717,'second':73.1381723},{'first':19.8761522,'second':75.3713281},{'first':21.1269465,'second':79.1135087},{'first':19.1564144,'second':77.3131911},{'first':24.8158998,'second':93.92280509999999},{'first':24.810074399999998,'second':93.9611346},{'first':24.3432347,'second':93.6930701},{'first':24.6251328,'second':94.01280969999999},{'first':24.6319257,'second':93.7620137},{'first':24.31554,'second':93.98471649999999},{'first':25.2854726,'second':94.0301452},{'first':24.985497199999998,'second':93.50251689999999},{'first':25.0981512,'second':94.36510439999999},{'first':24.786434699999997,'second':93.1538899},{'first':24.251281,'second':94.3013043},{'first':25.5168859,'second':94.1454948},{'first':24.8546947,'second':93.6167146},{'first':24.499150699999998,'second':93.9675663},{'first':23.735494499999998,'second':92.74643619999999},{'first':23.8332344,'second':92.62637079999999},{'first':23.811674999999997,'second':92.6551207},{'first':23.481050099999997,'second':93.30970029999999},{'first':23.474708399999997,'second':93.33275300000001},{'first':24.2077113,'second':92.6748057},{'first':23.481050099999997,'second':93.30970029999999},{'first':22.535620599999998,'second':92.8982618},{'first':22.5284445,'second':92.89263419999999},{'first':23.7701601,'second':92.73903089999999},{'first':22.904674699999998,'second':92.4716581},{'first':22.9653238,'second':92.930081},{'first':22.8586888,'second':92.8199492},{'first':23.929444099999998,'second':92.49057069999999},{'first':24.1244041,'second':92.336159},{'first':23.9948195,'second':92.3744792},{'first':23.270801,'second':92.7746617},{'first':23.3416578,'second':92.8502302},{'first':23.2903743,'second':92.7707353},{'first':23.164543,'second':92.9375739},{'first':23.9093742,'second':92.4949516},{'first':25.905668,'second':93.7301806},{'first':25.905077799999997,'second':93.7316085},{'first':25.6693845,'second':94.0959027},{'first':25.679237099999998,'second':94.142493},{'first':25.905077799999997,'second':93.7316085},{'first':26.3181913,'second':94.5246248},{'first':26.7238735,'second':95.02869199999999},{'first':25.905077799999997,'second':93.7316085},{'first':25.905077799999997,'second':93.7316085},{'first':26.2529564,'second':94.8178428},{'first':25.905077799999997,'second':93.7316085},{'first':25.905077799999997,'second':93.7316085},{'first':20.9360711,'second':85.17289079999999},{'first':20.357724899999997,'second':85.8091718},{'first':21.4716077,'second':86.8908758},{'first':20.7079713,'second':83.4941061},{'first':20.462521,'second':85.8829895},{'first':21.0705331,'second':86.49646299999999},{'first':20.951665800000004,'second':85.0985236},{'first':20.409335,'second':85.82306059999999},{'first':21.5332302,'second':86.847235},{'first':21.853584299999998,'second':84.01700559999999},{'first':20.175776199999998,'second':85.705716},{'first':20.9660939,'second':85.989896},{'first':20.258386299999998,'second':86.66326529999999},{'first':20.9660939,'second':85.989896},{'first':21.853584299999998,'second':84.01700559999999},{'first':19.9147152,'second':83.1063346},{'first':20.4851499,'second':84.22290430000001},{'first':21.0308864,'second':86.121512},{'first':21.628933,'second':85.5816847},{'first':22.0187085,'second':85.4183374},{'first':20.3534543,'second':85.8154183},{'first':20.284393599999998,'second':85.7703081},{'first':18.8606126,'second':82.5510469},{'first':18.3376829,'second':81.87572809999999},{'first':20.3577066,'second':85.809551},{'first':20.275488199999998,'second':85.8398201},{'first':20.355844599999998,'second':86.15864289999999},{'first':20.6912499,'second':83.4833908},{'first':21.5208701,'second':86.8854779},{'first':19.8112116,'second':85.8355124},{'first':22.2336772,'second':84.8272444},{'first':20.251732699999998,'second':86.17987049999999},{'first':20.4454454,'second':85.8970705},{'first':22.2235247,'second':84.8301225},{'first':22.093518400000004,'second':84.0355986},{'first':11.950302299999999,'second':79.7996963},{'first':11.9404142,'second':79.79627909999999},{'first':10.917627099999999,'second':79.8366123},{'first':12.0462822,'second':79.8551148},{'first':11.812002,'second':79.77810099999999},{'first':11.8312098,'second':79.78237759999999},{'first':11.9036618,'second':79.7010718},{'first':11.9215454,'second':79.62805999999999},{'first':11.938203,'second':79.73601289999999},{'first':11.9555221,'second':79.7953427},{'first':11.9375646,'second':79.80698009999999},{'first':11.699507899999999,'second':75.53659019999999},{'first':11.9415915,'second':79.8083133},{'first':16.7294268,'second':82.2149872},{'first':10.9534487,'second':79.8501912},{'first':11.954481699999999,'second':79.7960092},{'first':11.9326151,'second':79.7981322},{'first':11.925962199999999,'second':79.8337545},{'first':11.9539861,'second':79.8163671},{'first':11.9302429,'second':79.804335},{'first':11.951108,'second':79.836507},{'first':11.9484102,'second':79.8000734},{'first':11.931068,'second':79.7745769},{'first':11.957384699999999,'second':79.7933491},{'first':11.9529269,'second':79.792119},{'first':11.9212331,'second':79.8244553},{'first':10.9196171,'second':79.8336621},{'first':10.9164465,'second':79.8258491},{'first':11.9323122,'second':79.8058526},{'first':11.947503000000001,'second':79.8078199},{'first':11.9527568,'second':79.8022876},{'first':11.7201954,'second':75.5381788},{'first':11.94216,'second':79.7867366},{'first':12.0233144,'second':79.8441643},{'first':31.5367137,'second':75.1922268},{'first':31.71556,'second':74.637101},{'first':31.757273299999994,'second':74.96090269999999},{'first':30.524053100000003,'second':75.5680086},{'first':30.361986700000003,'second':75.52174819999999},{'first':30.085182,'second':74.8434755},{'first':31.1166724,'second':76.15551339999999},{'first':30.455314499999997,'second':74.9807852},{'first':30.707192799999998,'second':74.5844061},{'first':31.3117475,'second':75.6174169},{'first':30.5161164,'second':76.3425002},{'first':30.6405815,'second':76.3995118},{'first':30.6835943,'second':74.7347734},{'first':30.713983299999995,'second':74.402424},{'first':30.9585207,'second':74.6090716},{'first':30.918125999999997,'second':74.630526},{'first':32.033179,'second':75.38742599999999},{'first':31.8195248,'second':75.20358759999999},{'first':31.958503999999998,'second':75.323245},{'first':31.812695500000004,'second':75.6614115},{'first':31.2815587,'second':76.2596611},{'first':31.4023576,'second':75.9049493},{'first':31.530078399999997,'second':75.9001308},{'first':31.878074,'second':75.9303563},{'first':31.3229839,'second':75.5683959},{'first':31.3117475,'second':75.6174169},{'first':31.3708802,'second':75.38618319999999},{'first':30.707076899999993,'second':76.2169907},{'first':31.1471305,'second':75.34121789999999},{'first':30.87843,'second':75.87366},{'first':30.8113103,'second':75.4780024},{'first':30.5161164,'second':76.3425002},{'first':29.985317100000003,'second':75.4031728},{'first':30.682014400000003,'second':75.0961524},{'first':30.811700299999995,'second':75.1693418},{'first':30.8065027,'second':75.040671},{'first':32.2740732,'second':75.64351239999999},{'first':32.4436566,'second':75.7340239},{'first':29.959334799999997,'second':76.0565965},{'first':30.155434099999997,'second':76.1957618},{'first':30.356731399999997,'second':76.3908419},{'first':30.508353999999997,'second':76.24549809999999},{'first':30.3730177,'second':76.1469551},{'first':30.476579599999997,'second':76.5905317},{'first':30.1563733,'second':76.5253869},{'first':30.966053100000003,'second':76.52515869999999},{'first':31.3979372,'second':76.3769324},{'first':31.383221300000002,'second':76.3765753},{'first':30.722423,'second':76.72911599999999},{'first':31.656836400000003,'second':74.8874671},{'first':30.6752667,'second':76.732959},{'first':32.3496417,'second':74.69783699999999},{'first':30.252009200000003,'second':75.83627779999999},{'first':31.1166724,'second':76.15551339999999},{'first':30.4627958,'second':74.53518369999999},{'first':31.1471305,'second':75.34121789999999},{'first':31.4578399,'second':74.922614},{'first':26.4672983,'second':74.63633999999999},{'first':26.961926,'second':75.78092699999999},{'first':25.1153732,'second':75.8564561},{'first':27.665747999999997,'second':76.6886648},{'first':27.5611811,'second':76.6060926},{'first':27.5634458,'second':76.61249269999999},{'first':23.552362,'second':74.44396499999999},{'first':25.1100489,'second':76.5010006},{'first':25.752146699999997,'second':71.3966865},{'first':26.7442599,'second':77.0330307},{'first':25.3407388,'second':74.63131829999999},{'first':28.006826399999998,'second':73.3291242},{'first':25.4398141,'second':75.6453343},{'first':24.5884717,'second':73.6926228},{'first':28.2896227,'second':74.95917709999999},{'first':26.883267,'second':76.335053},{'first':26.690373299999997,'second':77.9001967},{'first':23.8589946,'second':73.7117208},{'first':29.938351199999996,'second':73.88011159999999},{'first':29.870291899999998,'second':73.9358874},{'first':25.1043,'second':76.5029496},{'first':29.588691,'second':74.3233201},{'first':29.5776775,'second':74.3358179},{'first':26.9033832,'second':75.8171277},{'first':26.8404676,'second':75.8058945},{'first':26.9034506,'second':75.72933700000002},{'first':26.8627282,'second':75.7847499},{'first':26.8527116,'second':75.8679061},{'first':26.769882799999998,'second':75.85464309999999},{'first':26.8462629,'second':75.80336369999999},{'first':26.7975004,'second':75.8265747},{'first':26.8934581,'second':75.8125258},{'first':26.8568777,'second':75.8010658},{'first':26.9160279,'second':70.9077315},{'first':25.3457692,'second':72.6181014},{'first':24.588096699999998,'second':76.16042209999999},{'first':28.116822199999998,'second':75.3949931},{'first':26.240205099999997,'second':73.0049621},{'first':26.2833307,'second':73.0176291},{'first':26.2659383,'second':73.0091252},{'first':25.1153732,'second':75.8564561},{'first':25.11973,'second':75.8310018},{'first':27.203263600000003,'second':73.7200757},{'first':25.7768232,'second':73.3316565},{'first':24.023930999999997,'second':74.78175999999999},{'first':25.02416,'second':73.883653},{'first':24.739350100000003,'second':73.74395059999999},{'first':25.9926082,'second':76.3643012},{'first':27.622469300000002,'second':75.16041469999999},{'first':27.6104716,'second':75.15113629999999},{'first':27.6102577,'second':75.1501241},{'first':27.3728293,'second':75.57507559999999},{'first':27.568199699999997,'second':75.1562948},{'first':24.8864484,'second':72.8593202},{'first':24.5896083,'second':73.69319449999999},{'first':24.5544597,'second':73.7326712},{'first':26.104585,'second':74.31990379999999},{'first':24.2896376,'second':76.6499348},{'first':25.1043,'second':76.5029496},{'first':27.2236363,'second':77.50589149999999},{'first':28.0039992,'second':73.3310776},{'first':26.8619095,'second':75.7549636},{'first':25.434924,'second':75.6409245},{'first':26.298254099999998,'second':74.2736848},{'first':26.646789899999998,'second':77.6153017},{'first':29.903839899999998,'second':73.8771902},{'first':29.112278300000003,'second':75.1731708},{'first':29.2565632,'second':74.40488309999999},{'first':26.907781999999997,'second':75.777346},{'first':26.9124336,'second':75.7872709},{'first':26.968871099999998,'second':75.7734715},{'first':26.8742754,'second':75.82313359999999},{'first':27.7020567,'second':76.1909423},{'first':26.920541099999998,'second':71.9165463},{'first':24.5637303,'second':76.1734858},{'first':27.8454214,'second':75.2546476},{'first':28.1187076,'second':75.3871848},{'first':24.2896376,'second':76.6499348},{'first':26.273014399999997,'second':72.9861008},{'first':26.902849999999997,'second':75.8166739},{'first':26.677872999999998,'second':77.00196249999999},{'first':26.5006506,'second':77.0259208},{'first':28.0321751,'second':73.30663919999999},{'first':27.6483378,'second':74.39375059999999},{'first':27.1470339,'second':74.8565613},{'first':27.402621,'second':74.56270119999999},{'first':25.922162,'second':73.663139},{'first':26.025585099999997,'second':73.9379742},{'first':25.132561100000004,'second':73.45337789999999},{'first':25.1335811,'second':73.11182509999999},{'first':24.041057499999997,'second':74.74441180000001},{'first':25.9981047,'second':76.3603097},{'first':26.478103500000003,'second':76.7211325},{'first':27.612900999999997,'second':75.15308329999999},{'first':27.993125,'second':74.960805},{'first':27.7407389,'second':75.7900938},{'first':27.367677999999998,'second':75.574147},{'first':25.150932100000002,'second':73.0815697},{'first':24.5381755,'second':72.8019745},{'first':24.793512999999997,'second':73.04973799999999},{'first':24.6198761,'second':72.52920089999999},{'first':26.1659063,'second':75.7962852},{'first':24.624716,'second':73.710261},{'first':26.2837696,'second':73.0226358},{'first':27.8814918,'second':76.28595349999999},{'first':28.198144799999998,'second':76.8674977},{'first':27.524360400000003,'second':76.6813624},{'first':28.101737099999998,'second':76.593242},{'first':27.9293359,'second':76.8390733},{'first':27.2595369,'second':76.7587391},{'first':27.3907174,'second':76.3212078},{'first':28.629811099999998,'second':75.3958339},{'first':27.9714617,'second':76.37841949999999},{'first':27.8168722,'second':75.0322377},{'first':28.200277699999997,'second':76.80977949999999},{'first':27.8165905,'second':76.7282373},{'first':27.6915363,'second':76.34870529999999},{'first':27.894097199999997,'second':76.2748958},{'first':23.763918999999998,'second':74.4112708},{'first':23.404335699999997,'second':74.26726959999999},{'first':23.5664512,'second':74.321437},{'first':23.5890714,'second':74.1768412},{'first':23.1978014,'second':74.4496965},{'first':24.6660583,'second':76.8436833},{'first':25.3021337,'second':74.6604874},{'first':26.940929099999998,'second':75.751346},{'first':25.2926328,'second':74.5951443},{'first':25.324171699999997,'second':74.6393001},{'first':26.5020219,'second':77.0233415},{'first':25.309698899999997,'second':74.6291157},{'first':25.3605906,'second':74.6595535},{'first':25.304287,'second':74.657419},{'first':25.274648199999998,'second':74.6222666},{'first':25.3490329,'second':74.62790609999999},{'first':27.5586023,'second':73.47196079999999},{'first':28.0121184,'second':73.35568099999999},{'first':28.0273,'second':73.325357},{'first':28.009549099999997,'second':73.31884889999999},{'first':28.0257206,'second':73.29850660000001},{'first':28.2896227,'second':74.95917709999999},{'first':28.022934799999998,'second':73.3119159},{'first':28.0966287,'second':74.00698539999999},{'first':24.8609412,'second':74.6109713},{'first':26.952567199999997,'second':76.7906047},{'first':26.952567199999997,'second':76.7906047},{'first':26.920465200000002,'second':76.34306509999999},{'first':26.9037303,'second':76.3646311},{'first':26.8945737,'second':76.3569224},{'first':26.692995,'second':77.8923674},{'first':26.600932999999998,'second':77.4769699},{'first':26.6867172,'second':77.8756257},{'first':26.6951717,'second':77.8348115},{'first':26.696552099999998,'second':77.8907576},{'first':24.8851548,'second':72.8574558},{'first':26.616819999999997,'second':77.6392939},{'first':23.6655007,'second':74.01580179999999},{'first':23.666507,'second':74.01792879999999},{'first':23.6673272,'second':74.0235896},{'first':23.955563899999998,'second':74.0753766},{'first':23.903995000000002,'second':73.6580032},{'first':26.9538373,'second':75.7764031},{'first':26.8188362,'second':75.5428032},{'first':26.821597999999998,'second':75.543962},{'first':26.6833648,'second':75.2334094},{'first':26.293415,'second':73.0467224},{'first':25.3444799,'second':72.6253763},{'first':24.4164069,'second':75.8272961},{'first':24.5973494,'second':76.1609838},{'first':24.414524399999998,'second':75.8752069},{'first':28.016247099999998,'second':73.336182},{'first':24.5973494,'second':76.1609838},{'first':24.4135653,'second':76.56618929999999},{'first':24.4164292,'second':76.56905189999999},{'first':24.516116,'second':76.1765197},{'first':24.4146663,'second':75.83183869999999},{'first':26.9567439,'second':75.73755469999999},{'first':28.1355491,'second':75.403723},{'first':25.1489017,'second':75.85268549999999},{'first':25.1624838,'second':75.83144709999999},{'first':25.1573083,'second':75.8530323},{'first':25.0112149,'second':75.9138624},{'first':26.2744057,'second':73.0211569},{'first':24.0316509,'second':74.77873869999999},{'first':24.932019699999998,'second':73.8190856},{'first':24.7492925,'second':72.7098523},{'first':24.624184,'second':72.51784599999999},{'first':25.115658,'second':73.47287349999999},{'first':24.673523499999998,'second':72.49424069999999},{'first':24.586883999999998,'second':72.716115},{'first':24.7927847,'second':73.0608882},{'first':24.5712415,'second':73.7507366},{'first':11.1426345,'second':79.0697193},{'first':13.0701638,'second':80.2745838},{'first':12.6776173,'second':79.98029},{'first':12.9422564,'second':80.13236309999999},{'first':12.944999600000001,'second':80.13466079999999},{'first':12.745549599999999,'second':80.1320045},{'first':12.9545333,'second':80.1377943},{'first':12.820865699999999,'second':80.0481732},{'first':12.5931792,'second':79.9113261},{'first':12.9545333,'second':80.1377943},{'first':12.953614,'second':80.1385857},{'first':13.0673164,'second':80.27512159999999},{'first':13.081437999999999,'second':80.2771945},{'first':13.1062709,'second':80.2866738},{'first':13.078342699999999,'second':80.2438901},{'first':13.1089927,'second':80.2884019},{'first':13.0734891,'second':80.2569311},{'first':13.073690099999999,'second':80.2592078},{'first':13.0552786,'second':80.2648512},{'first':13.0595045,'second':80.2782201},{'first':13.034833299999999,'second':80.2075201},{'first':13.0948479,'second':80.2393185},{'first':13.012441299999999,'second':80.2176106},{'first':13.0757291,'second':80.2273271},{'first':13.057536899999999,'second':80.2457198},{'first':12.8356281,'second':79.7075908},{'first':13.0215835,'second':80.18557980000001},{'first':13.0025312,'second':80.2468391},{'first':13.076723,'second':80.205766},{'first':13.0294387,'second':80.2440762},{'first':13.0821506,'second':80.2532396},{'first':10.9954383,'second':76.97015449999999},{'first':11.005986199999999,'second':77.0263909},{'first':10.662644499999999,'second':77.003382},{'first':10.8850033,'second':77.0082254},{'first':11.0424639,'second':77.03930969999999},{'first':11.0189662,'second':77.0072696},{'first':11.023189,'second':76.977774},{'first':11.0002385,'second':76.9715681},{'first':11.0180549,'second':76.9606132},{'first':11.0266827,'second':76.94876959999999},{'first':11.007847799999999,'second':76.9666099},{'first':10.999773699999999,'second':76.99535620000002},{'first':11.0592387,'second':77.089316},{'first':11.3952473,'second':79.7160895},{'first':11.7566825,'second':79.7592638},{'first':11.127122499999999,'second':78.6568942},{'first':11.407044899999999,'second':79.6912455},{'first':11.7575142,'second':79.7614558},{'first':12.1233883,'second':78.15750299999999},{'first':10.3638935,'second':77.9763633},{'first':10.4484422,'second':77.5168048},{'first':10.547041499999999,'second':77.72544479999999},{'first':10.165712,'second':77.760817},{'first':10.3698287,'second':77.9817513},{'first':10.4881617,'second':77.75190409999999},{'first':11.3370602,'second':77.7109766},{'first':11.3345895,'second':77.70456279999999},{'first':11.3265504,'second':77.6881456},{'first':11.345132,'second':77.730142},{'first':11.3446229,'second':77.7318224},{'first':11.281595399999999,'second':77.57002299999999},{'first':11.339821299999999,'second':77.7172966},{'first':11.737262399999999,'second':78.95936789999999},{'first':12.8329933,'second':79.71027749999999},{'first':12.434194699999999,'second':79.8132151},{'first':13.0578335,'second':80.0788499},{'first':13.024574999999999,'second':80.017451},{'first':13.0178022,'second':80.110057},{'first':13.0390634,'second':80.141937},{'first':12.86122,'second':80.1363527},{'first':12.924040999999999,'second':80.1139042},{'first':12.8985968,'second':80.20663069999999},{'first':13.004209099999999,'second':80.1118583},{'first':12.797072499999999,'second':80.2180345},{'first':12.872612199999999,'second':79.7238623},{'first':8.1739367,'second':77.3962033},{'first':8.360718199999999,'second':77.29303569999999},{'first':8.1847241,'second':77.41009059999999},{'first':8.217096999999999,'second':77.46654149999999},{'first':8.2112757,'second':77.3030663},{'first':8.1804817,'second':77.4191218},{'first':8.1865671,'second':77.4292052},{'first':10.9510694,'second':78.1012353},{'first':12.5280974,'second':78.2185544},{'first':12.7919474,'second':77.80548619999999},{'first':9.9280709,'second':78.1294632},{'first':11.939490399999999,'second':78.0573284},{'first':11.127122499999999,'second':78.6568942},{'first':9.9252007,'second':78.1197754},{'first':9.8870522,'second':78.15004859999999},{'first':9.9479215,'second':78.1625445},{'first':9.9428427,'second':78.1303743},{'first':10.9604394,'second':78.06447059999999},{'first':9.9463405,'second':78.1443488},{'first':9.9252007,'second':78.1197754},{'first':10.7723989,'second':79.8436261},{'first':11.101678099999999,'second':79.6473705},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.2168195,'second':78.1685255},{'first':11.364682799999999,'second':77.947674},{'first':11.2147224,'second':78.17182199999999},{'first':12.8329933,'second':79.71027749999999},{'first':11.197254,'second':78.8707738},{'first':10.4089466,'second':78.8468948},{'first':11.127122499999999,'second':78.6568942},{'first':10.169231,'second':79.002342},{'first':10.034497499999999,'second':79.23062469999999},{'first':9.364518,'second':78.8297132},{'first':12.9254169,'second':79.36408449999999},{'first':11.6546272,'second':78.1522171},{'first':11.795824099999999,'second':77.79891549999999},{'first':11.5773263,'second':78.0373748},{'first':11.578671499999999,'second':78.04954939999999},{'first':11.6728104,'second':78.13315089999999},{'first':11.6252594,'second':78.1451622},{'first':11.703018499999999,'second':78.10276449999999},{'first':11.670354,'second':78.1431415},{'first':11.6290236,'second':78.1488717},{'first':11.677318,'second':78.15373799999999},{'first':11.6579779,'second':78.1665166},{'first':9.8368612,'second':78.4840014},{'first':10.076328199999999,'second':78.7803083},{'first':8.9707634,'second':77.3038334},{'first':10.7586,'second':79.1066},{'first':10.7855379,'second':79.13659650000001},{'first':10.9692463,'second':79.385656},{'first':10.436802,'second':79.2984907},{'first':11.4134668,'second':76.7110273},{'first':10.0061925,'second':77.5536939},{'first':10.006297,'second':77.4866188},{'first':10.123877799999999,'second':77.54747069999999},{'first':13.1781902,'second':79.81243239999999},{'first':13.057949299999999,'second':80.12733209999999},{'first':13.071800999999999,'second':80.240477},{'first':13.0707104,'second':80.1506203},{'first':12.274286300000002,'second':79.07909959999999},{'first':12.2255618,'second':79.06465899999999},{'first':10.776456999999999,'second':79.606028},{'first':11.127122499999999,'second':78.6568942},{'first':8.7876212,'second':78.1203416},{'first':9.175749300000001,'second':77.8741312},{'first':8.7117515,'second':77.7508167},{'first':12.4950124,'second':78.56784069999999},{'first':11.096521899999999,'second':77.3502778},{'first':10.5837077,'second':77.24737189999999},{'first':12.225876,'second':79.026192},{'first':12.661975,'second':79.5434841},{'first':10.7976359,'second':78.6793029},{'first':10.6042261,'second':78.43786469999999},{'first':10.9545471,'second':78.7551019},{'first':10.8527142,'second':78.7028362},{'first':10.9604394,'second':78.06447059999999},{'first':13.124832999999999,'second':80.290823},{'first':12.8453789,'second':79.13650729999999},{'first':12.9246021,'second':79.1348129},{'first':12.9246021,'second':79.1348129},{'first':12.870479699999999,'second':79.089967},{'first':11.994305899999999,'second':79.5152109},{'first':11.9401378,'second':79.4861449},{'first':11.824778,'second':78.94660309999999},{'first':10.829074,'second':78.677498},{'first':11.7208966,'second':78.9557637},{'first':9.5883452,'second':77.961942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':10.784546899999999,'second':78.72530119999999},{'first':13.043507,'second':80.2726562},{'first':12.9693667,'second':80.2457873},{'first':13.038486599999999,'second':80.2572725},{'first':12.978529,'second':80.221329},{'first':11.127122499999999,'second':78.6568942},{'first':11.0121802,'second':76.9808814},{'first':11.757622699999999,'second':79.7573626},{'first':12.0469674,'second':78.4832729},{'first':12.132659199999999,'second':78.1625962},{'first':12.132414299999999,'second':78.16154709999999},{'first':12.1130937,'second':78.1520262},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':12.987554600000001,'second':79.9369057},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':8.188379200000002,'second':77.41752009999999},{'first':10.9604394,'second':78.06447059999999},{'first':10.960234999999999,'second':78.0684862},{'first':12.728490899999999,'second':77.8244931},{'first':12.7418514,'second':77.8334989},{'first':11.127122499999999,'second':78.6568942},{'first':10.031287899999999,'second':78.33821170000002},{'first':9.957718900000001,'second':78.1541208},{'first':9.898329,'second':78.090372},{'first':9.9174711,'second':78.1367303},{'first':9.9412959,'second':78.1251703},{'first':11.096654899999999,'second':79.6532627},{'first':11.100013299999999,'second':79.6540349},{'first':11.101586,'second':79.652605},{'first':11.327042599999999,'second':79.7146592},{'first':11.127122499999999,'second':78.6568942},{'first':11.4611941,'second':78.1850534},{'first':11.2233029,'second':78.16729339999999},{'first':11.210210900000002,'second':78.17767479999999},{'first':11.2107644,'second':78.1670376},{'first':11.344847099999999,'second':76.7982969},{'first':11.338506299999999,'second':76.7940318},{'first':10.818774699999999,'second':78.68121719999999},{'first':11.127122499999999,'second':78.6568942},{'first':10.3794048,'second':78.8218912},{'first':10.267276599999999,'second':78.5387774},{'first':9.5493536,'second':78.5890663},{'first':9.3612754,'second':78.8535946},{'first':9.364530199999999,'second':78.8327448},{'first':12.7343528,'second':79.9472502},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.6771803,'second':78.1353457},{'first':11.6612384,'second':78.1920086},{'first':11.127122499999999,'second':78.6568942},{'first':9.849352999999999,'second':78.4870037},{'first':10.0715231,'second':78.7064517},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':10.9610231,'second':79.3839144},{'first':10.7454336,'second':79.1119027},{'first':10.7767241,'second':79.13673159999999},{'first':10.772649,'second':79.1338062},{'first':9.9479215,'second':78.1625445},{'first':11.127122499999999,'second':78.6568942},{'first':10.006297,'second':77.4866188},{'first':10.0411738,'second':77.4938751},{'first':10.0007305,'second':77.4676985},{'first':13.174641099999999,'second':79.611721},{'first':11.127122499999999,'second':78.6568942},{'first':13.165000599999999,'second':80.303401},{'first':13.169480799999999,'second':80.30439910000001},{'first':10.5488795,'second':79.639015},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':9.177796599999999,'second':77.5351242},{'first':8.7336511,'second':77.7230204},{'first':8.7004491,'second':77.7281671},{'first':8.728475999999999,'second':77.710178},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.120282099999999,'second':77.3292348},{'first':11.130818699999999,'second':77.34129469999999},{'first':11.2131017,'second':79.36432239999999},{'first':10.774885,'second':79.62809089999999},{'first':10.810222099999999,'second':78.68070519999999},{'first':10.604035999999999,'second':78.4168991},{'first':8.8017551,'second':78.1375386},{'first':8.8146322,'second':78.1468572},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.127122499999999,'second':78.6568942},{'first':11.9364783,'second':79.4850012},{'first':12.218838199999999,'second':79.65749629999999},{'first':11.9411788,'second':79.4956689},{'first':11.7382633,'second':78.9664469},{'first':9.4532852,'second':77.80241699999999},{'first':11.127122499999999,'second':78.6568942},{'first':9.5159101,'second':78.09928470000001},{'first':9.4415794,'second':77.5601399},{'first':11.127122499999999,'second':78.6568942},{'first':13.077902199999999,'second':80.2184578},{'first':10.9040854,'second':76.9409074},{'first':13.1500223,'second':80.1917623},{'first':13.1458189,'second':80.25656699999999},{'first':13.133938299999999,'second':80.2525081},{'first':13.1208131,'second':80.2807387},{'first':13.0938944,'second':80.2474914},{'first':11.1731006,'second':78.16606259999999},{'first':9.885830799999999,'second':78.0503454},{'first':12.977095799999999,'second':80.242188},{'first':13.1036781,'second':80.2866122},{'first':13.0855494,'second':80.26661639999999},{'first':13.1298047,'second':80.1874967},{'first':13.0839732,'second':80.21182979999999},{'first':13.0737863,'second':80.21225050000001},{'first':13.0804178,'second':80.2108145},{'first':11.0276508,'second':77.0004495},{'first':13.081437999999999,'second':80.2771945},{'first':13.0772017,'second':80.2173316},{'first':12.2317463,'second':79.0767582},{'first':13.0863164,'second':80.2198008},{'first':13.0633732,'second':80.2345447},{'first':13.0555589,'second':80.2503455},{'first':13.069992,'second':80.2491841},{'first':8.133652,'second':77.3430527},{'first':13.0486367,'second':80.2796907},{'first':13.0445189,'second':80.27903549999999},{'first':13.041744699999999,'second':80.1887086},{'first':13.0552578,'second':80.20051889999999},{'first':13.053106699999999,'second':80.166838},{'first':10.9545471,'second':78.7551019},{'first':12.985211,'second':80.1770657},{'first':13.0110043,'second':80.2132124},{'first':13.011081599999999,'second':80.2363137},{'first':12.9915639,'second':80.2336857},{'first':13.0879724,'second':80.2855871},{'first':12.9452892,'second':80.207843},{'first':12.943907999999999,'second':80.2075814},{'first':12.922617599999999,'second':80.223113},{'first':12.8713359,'second':80.222405},{'first':12.8698765,'second':80.2184272},{'first':12.131381500000002,'second':78.1975662},{'first':11.7109467,'second':79.2187251},{'first':11.6023608,'second':78.8255732},{'first':12.576056699999999,'second':77.6788806},{'first':13.0938944,'second':80.2474914},{'first':13.1284069,'second':80.1494848},{'first':10.9392292,'second':78.1358734},{'first':10.894012,'second':78.392237},{'first':11.0542286,'second':78.0484523},{'first':11.6694272,'second':78.1684793},{'first':13.0482515,'second':80.2803397},{'first':10.9985103,'second':76.9721631},{'first':10.4114735,'second':77.9139873},{'first':12.0198912,'second':78.09792829999999},{'first':12.9766592,'second':80.1522513},{'first':10.2708383,'second':77.94299869999999},{'first':11.368341899999999,'second':76.7358891},{'first':11.368341899999999,'second':76.7358891},{'first':11.3731382,'second':76.67055309999999},{'first':11.3785379,'second':76.70125530000001},{'first':9.362389199999999,'second':78.85245669999999},{'first':9.5012628,'second':78.0950964},{'first':10.7365096,'second':78.75586059999999},{'first':13.1933607,'second':79.6475062},{'first':13.0450375,'second':80.2223181},{'first':10.7782234,'second':78.7974483},{'first':12.9715324,'second':79.29207439999999},{'first':18.9161403,'second':78.1478918},{'first':17.3979881,'second':78.5324466},{'first':17.4483241,'second':78.4346661},{'first':17.4445492,'second':78.4508475},{'first':17.360531899999998,'second':78.4750474},{'first':17.3904055,'second':78.47741510000002},{'first':18.7463685,'second':79.5190594},{'first':17.4967152,'second':78.30526800000001},{'first':18.4353817,'second':79.13328899999999},{'first':18.389219699999998,'second':78.8014505},{'first':17.141751499999998,'second':79.6069691},{'first':17.393231800000002,'second':78.48198599999999},{'first':17.3520257,'second':78.3728371},{'first':17.4236318,'second':78.503858},{'first':17.4483599,'second':78.44042209999999},{'first':17.4150426,'second':78.412216},{'first':17.4452559,'second':78.4349556},{'first':17.472300699999998,'second':78.5170107},{'first':17.3505443,'second':78.5551663},{'first':17.398862899999997,'second':78.44362670000001},{'first':17.3892147,'second':78.4829888},{'first':17.5444307,'second':78.43218739999999},{'first':17.395964,'second':78.5023902},{'first':17.5383416,'second':78.3583821},{'first':18.453239399999998,'second':79.16508259999999},{'first':18.498778899999998,'second':79.1518771},{'first':17.2427991,'second':80.1681584},{'first':16.7558062,'second':78.0413232},{'first':17.7191981,'second':78.61249959999999},{'first':17.6224194,'second':78.1269745},{'first':17.5624265,'second':78.2039489},{'first':17.3505443,'second':78.5551663},{'first':17.3520637,'second':78.33419190000001},{'first':17.3318935,'second':78.29904959999999},{'first':17.3158262,'second':78.2565607},{'first':17.5464856,'second':78.4310964},{'first':17.617005,'second':78.54762769999999},{'first':17.318058399999998,'second':77.9219696},{'first':17.3064872,'second':78.1478223},{'first':17.445923,'second':78.365443},{'first':18.090164599999998,'second':78.9171767},{'first':18.005622799999998,'second':79.5572463},{'first':27.1533943,'second':78.42430809999999},{'first':27.2544971,'second':79.1691084},{'first':27.9450681,'second':78.15501800000001},{'first':27.882096299999997,'second':78.74024039999999},{'first':27.570208599999997,'second':77.9439563},{'first':27.886626,'second':78.7447868},{'first':25.956494,'second':83.2548083},{'first':26.480523599999998,'second':81.4367735},{'first':26.2010859,'second':81.69612769999999},{'first':26.3354704,'second':81.9932199},{'first':26.454207099999998,'second':82.7680906},{'first':26.7068142,'second':82.1336324},{'first':26.541247400000003,'second':81.8319574},{'first':26.7981564,'second':80.9015873},{'first':27.2387569,'second':79.05192799999999},{'first':27.1971529,'second':77.99592919999999},{'first':26.8591233,'second':81.1954181},{'first':28.339683299999997,'second':79.5062408},{'first':27.998079699999998,'second':79.011912},{'first':28.6322665,'second':79.70972019999999},{'first':27.8321378,'second':79.8719617},{'first':26.8534147,'second':82.40619749999999},{'first':27.373657299999998,'second':83.114925},{'first':26.7671755,'second':83.03613759999999},{'first':25.7488566,'second':84.23973400000001},{'first':25.9863261,'second':80.0367259},{'first':25.426938,'second':79.4641984},{'first':25.184134099999998,'second':80.4709283},{'first':27.822825899999998,'second':81.77424789999999},{'first':25.4467284,'second':81.8536166},{'first':27.121056900000003,'second':78.0593131},{'first':28.6556351,'second':77.43093449999999},{'first':26.8066878,'second':83.3818885},{'first':26.766178,'second':83.378772},{'first':26.5958962,'second':83.67074629999999},{'first':27.2395852,'second':83.6747342},{'first':26.9384567,'second':83.82078400000002},{'first':26.0047669,'second':79.1604971},{'first':28.8713322,'second':77.27737069999999},{'first':28.6556351,'second':77.43093449999999},{'first':25.0431752,'second':78.4327088},{'first':26.9572,'second':79.78860000000002},{'first':26.8744985,'second':78.91087809999999},{'first':26.6296479,'second':79.55123189999999},{'first':24.8356405,'second':81.3635582},{'first':26.2334326,'second':80.195605},{'first':26.4974556,'second':80.2424233},{'first':26.8467088,'second':80.9461592},{'first':27.0214058,'second':80.7415254},{'first':26.685845999999998,'second':80.9821942},{'first':26.535180099999998,'second':80.6339229},{'first':27.401233299999998,'second':80.02355349999999},{'first':27.530658799999998,'second':80.7453796},{'first':25.895951099999998,'second':81.2973325},{'first':27.882628,'second':80.63685389999999},{'first':28.864471699999996,'second':77.2806207},{'first':28.248980099999997,'second':77.854903},{'first':28.3409937,'second':78.2676128},{'first':28.971620700000003,'second':77.6123245},{'first':28.5717353,'second':77.43675019999999},{'first':28.771514099999997,'second':77.5131013},{'first':28.728496,'second':77.8021519},{'first':28.537769599999997,'second':79.20012659999999},{'first':28.584100399999997,'second':78.5719587},{'first':28.755275999999995,'second':77.286368},{'first':26.8467088,'second':80.9461592},{'first':26.8467088,'second':80.9461592},{'first':25.448001299999998,'second':82.00528829999999},{'first':26.728282099999998,'second':80.8971858},{'first':25.447844399999997,'second':81.825681},{'first':25.4608435,'second':81.2796219},{'first':29.456425,'second':77.714186},{'first':25.8319892,'second':81.01226799999999},{'first':29.5263557,'second':77.2270746},{'first':26.8467088,'second':80.9461592},{'first':25.935726100000004,'second':80.8131192},{'first':25.162236399999998,'second':82.5050566},{'first':25.385454799999998,'second':82.5848994},{'first':24.676855999999997,'second':83.2298555},{'first':25.615299999999998,'second':83.7443},{'first':25.6489489,'second':82.32121389999999},{'first':25.5349112,'second':81.8312781},{'first':41.7322247,'second':-72.79146159999999}];

  document.getElementById("healthcare").style.display="block";
    var mapProp;

        mapProp= {
         center:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
         zoom:9,
       };
       var map = new google.maps.Map(document.getElementById("healthcare"),mapProp);

       var marker1 = new google.maps.Marker({
         position:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
         animation:google.maps.Animation.BOUNCE
       });
       marker1.setMap(map);
  var markers=[];
  var i=0;
  var yes=true;
       for(i=0;i<hmap.length;i++){
            var marker2 = new google.maps.Marker({
             position:new google.maps.LatLng(hmap[i].first,hmap[i].second)
           });
           marker2.setMap(map);
           markers.push(marker2);
}

  for(i=0;i<markers.length;i++){
    google.maps.event.addListener(markers[i], 'click', function() {
        var con="<b><font color=#333333 size=+1>Get Direction</b></font>";
        con=con.link("http://maps.google.com/maps?daddr="+this.position);
      var infowindow = new google.maps.InfoWindow({
  content:con
  });
  infowindow.open(map,this);
    });

  }

  }


function myMap() {
  if(window.localStorage.getItem('email')!=null){
  document.getElementById("role_map").style.display="block";
    document.getElementById("googleMap").style.display="block";

  }
var mapProp;
  firebase.database().ref('/users/' + window.localStorage.getItem('email')).once('value').then(function(snapshot) {
    var user=snapshot.val();
    mapProp= {
     center:new google.maps.LatLng(parseFloat(user.lat),parseFloat(user.lon)),
     zoom:7,
   };
   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

   var marker = new google.maps.Marker({
     position:new google.maps.LatLng(parseFloat(user.lat),parseFloat(user.lon)),
     animation:google.maps.Animation.BOUNCE
   });
   marker.setMap(map);

 firebase.database().ref('/users/').once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {

    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();

    if(childKey!= window.localStorage.getItem('email')){
      var marker = new google.maps.Marker({
        position:new google.maps.LatLng(parseFloat(childData.lat),parseFloat(childData.lon)),
      });
      marker.setMap(map);
      var infowindow = new google.maps.InfoWindow({
  content:"<b><font color=#333333 size=+1>Name : </font></b><font color=#555555 size=+1>"+childData.name +"</font><br><b><font color=#222222>Role : </font><font color=#555555></b>"+childData.role+"</font>"
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
});
    }
    // ...
  });
});

      });
}

function donate(){
  var state=window.localStorage.getItem('state');
  if(state==null || state==""){
    var win = window.open("https://www.pmcares.gov.in/en/web/contribution/donate_india", '_blank');
 win.focus();
  }
  else {
    var win = window.open(state_values[state].donate, '_blank');
 win.focus();
  }
}

function epass(){
  var state=window.localStorage.getItem('state');
  if(state==null || state==""){
    alert("login to apply for epass");
  }
  else if(state_values[state].epass==""){
  alert("your state doesn't provided epass");
  }
  else {
    var win = window.open(state_values[state].epass, '_blank');
 win.focus();
  }
}

var count=0;
var ans=[];

function selfassess(a){
  var query=document.getElementById("question").value;
  var yes=document.getElementById("yes");
  var no=document.getElementById("no");



  switch(query) {
  case ques.q:
   if(a=="yes"){
     document.getElementById("question").innerHTML=ques.yes;
     yes.style.display="none";
     no.style.display="none";
   }
   else{
     document.getElementById("question").innerHTML=ques.no.q;
   }
    break;

    case ques.no.q:
     if(a=="yes"){
       document.getElementById("question").innerHTML=ques.no.yes.q;

     }
     else{
       document.getElementById("question").innerHTML=ques.no.no.q;
     }
      break;

      case ques.no.no.q:
       if(a=="yes"){
         document.getElementById("question").innerHTML=ques.no.no.yes;
         yes.style.display="none";
         no.style.display="none";
       }
       else{
         document.getElementById("question").innerHTML=ques.no.no.no;
         yes.style.display="none";
         no.style.display="none";
       }
        break;

        case ques.no.yes.q:
         if(a=="yes"){
           document.getElementById("question").innerHTML=ques.no.yes.yes;
           yes.style.display="none";
           no.style.display="none";
         }
         else{
           document.getElementById("question").innerHTML=ques.no.yes.no.q;
         }
          break;

          case ques.no.yes.no.q:
           if(a=="yes"){
             document.getElementById("question").innerHTML=ques.no.yes.no.yes;
             yes.style.display="none";
             no.style.display="none";
           }
           else{
             document.getElementById("question").innerHTML=ques.no.yes.no.no.q;
           }
            break;
            case ques.no.yes.no.no.q:
             if(a=="yes"){
               document.getElementById("question").innerHTML=ques.no.yes.no.no.yes;
               yes.style.display="none";
               no.style.display="none";
             }
             else{
               document.getElementById("question").innerHTML=ques.no.yes.no.no.no;
               yes.style.display="none";
               no.style.display="none";
             }
              break;
              case ques.no.yes.no.no.q:
               if(a=="yes"){
                 document.getElementById("question").innerHTML=ques.no.yes.no.no.yes;
                 yes.style.display="none";
                 no.style.display="none";
               }
               else{
                 document.getElementById("question").innerHTML=ques.no.yes.no.no.no;
                 yes.style.display="none";
                 no.style.display="none";
               }
                break;

  default: document.getElementById("question").innerHTML=ques.q;
    // code block
}

if(window.localStorage.getItem('email')!=null){

if(document.getElementById("question").value.toLowerCase().includes("result")){
  if(document.getElementById("question").value.toLowerCase().includes("it is unlikely")){
    firebase.database().ref('/users/' + window.localStorage.getItem('email')).once('value').then(function(snapshot) {
      var user=snapshot.val();
      user['status']=0;

      firebase.database().ref('/users/' + window.localStorage.getItem('email')).update(user);
      // ...
    });
  }
  else{
    firebase.database().ref('/users/' + window.localStorage.getItem('email')).once('value').then(function(snapshot) {
      var user=snapshot.val();
      user['status']=1;

      firebase.database().ref('/users/' + window.localStorage.getItem('email')).update(user);
      // ...
    });

  }
}
}
}
var ques ={
  "q":"Are you experiencing any of the following symptoms?   \n1) severe difficulty breathing (for example, struggling for each breath, speaking in single words)  \n2) severe chest pain  \n3) having a very hard time waking up  \n4) feeling confused  \n5) lost consciousness",
  "yes":"Self-assessment result  \nPlease call 1075, +91-11-23978046 or email at ncov2019@gmail.com or go directly to your nearest emergency department.",
  "no":
   {
     "q":"Are you experiencing any of the following symptoms (or a combination of these symptoms)? \n1)fever \n2)new cough \n3)difficulty breathing (for example, struggling for each breath, cannot hold breath for more than 10 seconds)",
     "yes":
     {
      "q":"Have you travelled outside of India in the last 14 days?",
       "yes":"Self-assessment result   \nPlease seek clinical assessment for COVID-19 over the phone.     Contact either:     your primary care provider (for example, family doctor) for a virtual assessment     \nPlease call at Toll free: 1075 or +91-11-23978046 and to speak with a COVID-19 Emergency Helpline     \nYou should:      \nOnly leave your home or see other people for essential reasons, and where possible seek services over the phone or online or ask for help from friends, family or neighbours.Learn more about Opens in a new windowself-isolating.",
       "no":{

       "q":"Does someone you are in close contact with have COVID-19 (for example, someone in your household or workplace)?",
       "yes":"Self-assessment result   \nPlease seek clinical assessment for COVID-19 over the phone.     Contact either:     your primary care provider (for example, family doctor) for a virtual assessment     \nPlease call at Toll free: 1075 or +91-11-23978046 and to speak with a COVID-19 Emergency Helpline     \nYou should:      \nOnly leave your home or see other people for essential reasons, and where possible seek services over the phone or online or ask for help from friends, family or neighbours.Learn more about Opens in a new windowself-isolating.",
       "no":{
       "q":"Are you in close contact with a person who is sick with respiratory symptoms (for example, fever, cough or difficulty breathing) who recently travelled outside of India?",

       "yes":"Self-assessment result   \nPlease seek clinical assessment for COVID-19 over the phone.     Contact either:     your primary care provider (for example, family doctor) for a virtual assessment     \nPlease call at Toll free: 1075 or +91-11-23978046 and to speak with a COVID-19 Emergency Helpline     \nYou should:      \nOnly leave your home or see other people for essential reasons, and where possible seek services over the phone or online or ask for help from friends, family or neighbours.Learn more about Opens in a new windowself-isolating.",
       "no":"Self-assessment result     \nIt is unlikely that you have COVID-19 but you should self-isolate at home until you are symptom-free.    \nYou should:     \n* Only leave your home or see other people for essential reasons, and where possible seek services over the phone or online or ask for help from friends, family or neighbours. Learn more about Opens in a new windowself-isolating.     \n* Continue to monitor your health after your symptoms started. Learn more about Opens in a new windowself-monitoring.     \n* Not call your primary care provider."
       }
       }

     },
     "no":{

      "q":"Are you experiencing any of the following symptoms (or a combination of these symptoms)?     \n1) muscle aches     \n2) fatigue     \n3) headache     \n4) sore throat     \n5) runny nose     \nSymptoms in young children may also be non-specific (for example, lethargy, poor feeding).",

     "yes":"Self-assessment result     \nPlease seek clinical assessment for COVID-19 over the phone.     Contact either:     your primary care provider (for example, family doctor) for a virtual assessment     \nPlease call at Toll free: 1075 or +91-11-23978046 and to speak with a COVID-19 Emergency Helpline     \nYou should:     \nOnly leave your home or see other people for essential reasons, and where possible seek services over the phone or online or ask for help from friends, family or neighbours.Learn more about Opens in a new windowself-isolating.",
     "no":"Self-assessment result:     \nIt is unlikely that you have COVID-19.     \nPractice Opens in a new windowsocial distancing in order to decrease risk of COVID-19 transmission.     \nYou should also Opens in a new windowself-isolate if you:     \n* are over 70     \n* are immunocompromised (for example if you have HIV/AIDS, are receiving     \n* immunosuppression therapy or treatment for cancer or have had a transplant)     \n* have returned to India from travel in the last 14 days     \n* have come into contact with someone withrespiratory symptoms"
}
         }
     }

function notices(){
var table =document.getElementById("myTable1");
var tableHeaderRowCount = 0;

var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
table.deleteRow(tableHeaderRowCount);
}

var times=[];
var names=[];
  firebase.database().ref('/notification/'+window.localStorage.getItem('email')).once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {

     var childKey = childSnapshot.key;
     var childData = childSnapshot.val();
     names.push(childData.name);
     times.push(childData.time);

     var row = table.insertRow(0);

     var cell1 = row.insertCell(0);

     cell1.innerHTML = childData.message+'\n'+childData.time;


     cell1.style.backgroundColor = "#F6FFF0";

     cell1.style.textAlign = "center";

   });
});
}
function go1 () {
  var time=1000;
    var i=0;

    firebase.database().ref('/notification/'+window.localStorage.getItem('email')).once('value', function(snapshot) {
      if(snapshot.val()!=null)
      document.getElementById("n1").style.color="blue";
    });
    setTimeout(go1, time); // callback
}
if(window.localStorage.getItem('email')!=null)
go1();

function go2 () {
  var time=1000;
    var i=0;
 var responded=false;
    firebase.database().ref('/Respond/Help/'+window.localStorage.getItem('email')).on('value', function(snapshot) {
      if(snapshot.val()!=null){
      var snapvalue=snapshot.val();
      var x = document.getElementById("myAudio");
      x.play();
      var help=document.getElementById("help_needed");
      var text=document.getElementById("help_needed_text");

      help.style.display="block";
      text.style.color="white";
      text.innerHTML=snapvalue.name +" needs your Help !(Click to help)";
      help.onclick=function replyhelp(){
        responded=true;
        firebase.database().ref('/Respond/reply/' + snapshot.val().email).set({
      "name":  window.localStorage.getItem('name'),
      "email": window.localStorage.getItem('email'),
      "lat":window.localStorage.getItem('lat'),
      "lon":window.localStorage.getItem('lon'),
      "phone":window.localStorage.getItem('phone'),
      "role":window.localStorage.getItem('role')
      }, function(error) {
      if (error) {

      }else {
          firebase.database().ref('/Respond/reply/'+snapshot.val().email).on('value', function(snapshot) {
              if(snapshot.val()==null){
                if(responded){
                alert("Connection disconnected !");
                window.location.reload();
              }
              }
          });
          var call=document.getElementById("callreply");
          var calldis=document.getElementById("calldisconnectreply");
          call.style.display="block";
          calldis.style.display="block";
          call.onclick=function cal(){
            window.open('tel:'+snapshot.val().phone);
          }
          calldis.onclick=function cal(){
            firebase.database().ref('/Respond/reply/' +snapshot.val().email).remove();
}
          var mapProp;

              var user=snapshot.val();
              mapProp= {
               center:new google.maps.LatLng(12.121312,80.1231564),
               zoom:7,
             };
             var map = new google.maps.Map(document.getElementById("response_map_reply"),mapProp);

             var marker = new google.maps.Marker({
               position:new google.maps.LatLng(parseFloat(snapvalue.lat),parseFloat(snapvalue.lon)),
               animation:google.maps.Animation.BOUNCE
             });
             marker.setMap(map);

                var infowindow = new google.maps.InfoWindow({
            content:"<b><font color=#333333 size=+1>Name : </font></b><font color=#555555 size=+1>"+snapshot.val().name +"</font><br><b><font color=#222222>Role : </font><font color=#555555></b>"+snapshot.val().role+"</font>"
          });
            infowindow.open(map,marker);


      }
      });
      }
      time=60000;}
    });
    setTimeout(go2, time); // callback
}
if(window.localStorage.getItem('email')!=null)
go2();


function clear_notification(){
  firebase.database().ref('/notification/'+window.localStorage.getItem('email')).remove();
  alert("Notifications cleared");
  window.location.reload();
}

function findDistance(lat,lon) {
  var R = 6371e3; // R is earth’s radius
  var lat1 = window.localStorage.getItem('lat'); // starting point lat
  var lat2 = lat;         // ending point lat
  var lon1 = window.localStorage.getItem('lon'); // starting point lon
  var lon2 = lon;         // ending point lon
  var lat1radians = toRadians(lat1);
  var lat2radians = toRadians(lat2);

  var latRadians = toRadians(lat2-lat1);
  var lonRadians = toRadians(lon2-lon1);

  var a = Math.sin(latRadians/2) * Math.sin(latRadians/2) +
       Math.cos(lat1radians) * Math.cos(lat2radians) *
       Math.sin(lonRadians/2) * Math.sin(lonRadians/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c;

return d;
}

function toRadians(val){
   var PI = 3.1415926535;
   return val / 180.0 * PI;
}
assess_radius_change();
function assess_radius_change(){

firebase.database().ref('/users/').on('value', function(snapshot) {
  var totalassessed=0;
  var totalvictim=0;
 snapshot.forEach(function(childSnapshot) {

   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();

   if(childKey!= window.localStorage.getItem('email')){
     if(childData.status!=null && findDistance(childData.lat,childData.lon)<=document.getElementById("assess_radius").value){
       totalassessed++;
       if(childData.status==1)
       totalvictim++;
     }

   }
 });

 document.getElementById("total_assessed").innerHTML="Total assesses : "+totalassessed;
  document.getElementById("total_victim").innerHTML="Found victim : "+totalvictim +"<br>( within "+document.getElementById("assess_radius").value/1000+" KM )";
  if(totalvictim==0){
      document.getElementById("assess_result").innerHTML="You are Safe !";
        document.getElementById("assess_result").style.color="green";
  }
  else{
    document.getElementById("assess_result").innerHTML="You have to be Safe !";
      document.getElementById("assess_result").style.color="red";
  }
});
}

function first_responder(){
  var data=[];
  var key=[];

var radius=document.getElementById("radius");
var first_response=document.getElementById("first_response");
var stop_scanning=document.getElementById("stop_scanning");
radius.innerHTML="Starting scan ...";
firebase.database().ref('/users/').once('value', function(snapshot) {
 snapshot.forEach(function(childSnapshot) {

if(childSnapshot.key!=window.localStorage.getItem('email')){
   key.push(childSnapshot.key);
   data.push(childSnapshot.val());
 }
 });

 var i=0;var responded=false;
 function alert_users () {
   var time=3000;
    if(i<data.length){
      firebase.database().ref('/Respond/Help/' + key[i]).set({
    "name":  window.localStorage.getItem('name'),
    "email": window.localStorage.getItem('email'),
    "lat":window.localStorage.getItem('lat'),
    "lon":window.localStorage.getItem('lon'),
    "phone":window.localStorage.getItem('phone'),
    "role":window.localStorage.getItem('role')
    }, function(error) {
    if (error) {

    }else {
    }
    });
    firebase.database().ref('Respond/reply/' + window.localStorage.getItem('email')).on('value', function(snapshot) {
      if(snapshot.val()!=null){
        responded=true;
      for(x=0;x<=i;x++){
        firebase.database().ref('/Respond/Help/' + key[x]).remove();
      }
      i=key.length+1;
      first_response.style.display="none";
      var call=document.getElementById("call");
      var calldis=document.getElementById("calldisconnect");
      call.style.display="block";
      calldis.style.display="block";
      call.onclick=function cal(){
        window.open('tel:'+snapshot.val().phone);
      }
      calldis.onclick=function cal(){
        firebase.database().ref('/Respond/reply/' +window.localStorage.getItem('email')).remove();
      }
      var mapProp;

          var user=snapshot.val();
          mapProp= {
           center:new google.maps.LatLng(parseFloat(snapshot.val().lat),parseFloat(snapshot.val().lon)),
           zoom:7,
         };
         var map = new google.maps.Map(document.getElementById("response_map"),mapProp);

         var marker = new google.maps.Marker({
           position:new google.maps.LatLng(parseFloat(snapshot.val().lat),parseFloat(snapshot.val().lon)),
           animation:google.maps.Animation.BOUNCE
         });
         marker.setMap(map);

            var infowindow = new google.maps.InfoWindow({
        content:"<b><font color=#333333 size=+1>Name : </font></b><font color=#555555 size=+1>"+snapshot.val().name +"</font><br><b><font color=#222222>Role : </font><font color=#555555></b>"+snapshot.val().role+"</font>"
      });
        infowindow.open(map,marker);


    }
    else{
      if(responded){
        alert("Connection disconnected !");
        window.location.reload();
      }

    }
});

    stop_scanning.onclick=function stop(){
      var x=0;
      for(x=0;x<=i;x++){
        firebase.database().ref('/Respond/Help/' + key[x]).remove();
      }
      i=key.length+1;
      alert("Scanning stopped !");
      window.location.reload();
    }

      radius.innerHTML="Scanning within " +Math.round(findDistance(data[i].lat,data[i].lon) / 1000) + " KM radius...";
        i++;
    }
     setTimeout(alert_users, time); // callback
 }
 alert_users();

});

}

var vol_key=[];
var vol_data=[];
var vol_selected=[];
var vol_selected_data=[];
firebase.database().ref('/users/').once('value', function(snapshot) {
 snapshot.forEach(function(childSnapshot) {

  vol_key.push(childSnapshot.key);
  vol_data.push(childSnapshot.val());

});
});
function add_workers(email){
var i=0;var row=1;

  for(i=0;i<vol_key.length;i++){
    if(vol_key[i]==email.substr(0,email.indexOf('@'))){
      var table=document.getElementById("assign_work");
      var row = table.insertRow(row++);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      vol_selected.push(vol_key[i]);
      vol_selected_data.push(vol_data);

      cell1.innerHTML = vol_data[i].name;
      cell2.innerHTML = vol_data[i].role;
      cell3.innerHTML = vol_data[i].phone;

      cell1.style.backgroundColor = "#F6FFF0";
      cell2.style.backgroundColor = "#FFD7D7";
      cell3.style.backgroundColor = "#F6FFF0";

      cell1.style.textAlign = "center";
      cell2.style.textAlign = "center";
      cell3.style.textAlign = "center";
        break;
      return;
    }
  }
  if(i==vol_key.length)
alert("No users found");
}

function add_material(name){
  if(name==""){
    alert("Please enter material name ");
    return;
  }
  else {
  firebase.database().ref('/material/' +  window.localStorage.getItem('email')).set({
"name": name,
"donor": window.localStorage.getItem('name'),
"lat":window.localStorage.getItem('lat'),
"lon":window.localStorage.getItem('lon'),
"phone":window.localStorage.getItem('phone')
}, function(error) {
if (error) {
} else {
  alert("Material added Successfully !");
  window.location.reload();
}
});
}
}

function add_foodmaterial(name){
  if(name==""){
    alert("Please enter item name ");
    return;
  }
  else {
  firebase.database().ref('/food/' +  window.localStorage.getItem('email')).set({
"name": name,
"donor": window.localStorage.getItem('name'),
"lat":window.localStorage.getItem('lat'),
"lon":window.localStorage.getItem('lon'),
"phone":window.localStorage.getItem('phone')
}, function(error) {
if (error) {
} else {
  alert("Item added Successfully !");
  window.location.reload();
}
});
}
}

function add_orphanmaterial(name){
  if(name==""){
    alert("Please enter item name ");
    return;
  }
  else {
  firebase.database().ref('/orphan/' +  window.localStorage.getItem('email')).set({
"name": name,
"donor": window.localStorage.getItem('name'),
"lat":window.localStorage.getItem('lat'),
"lon":window.localStorage.getItem('lon'),
"phone":window.localStorage.getItem('phone')
}, function(error) {
if (error) {
} else {
  alert("Item added Successfully !");
  window.location.reload();
}
});
}
}

function add_sectormaterial(name){
  if(name==""){
    alert("Please enter item name ");
    return;
  }
  else {
  firebase.database().ref('/sector/' +  window.localStorage.getItem('email')).set({
"name": name,
"donor": window.localStorage.getItem('name'),
"lat":window.localStorage.getItem('lat'),
"lon":window.localStorage.getItem('lon'),
"phone":window.localStorage.getItem('phone')
}, function(error) {
if (error) {
} else {
  alert("Item added Successfully !");
  window.location.reload();
}
});
}
}
function assign(){
  var title=document.getElementById("work_title").value;
  var desc=document.getElementById("work_desc").value;
  if(title=="" || desc=="" || vol_selected.length==0)
  {
    alert("Please fill all the fields");
  }
  else {
    var key=new Date().toString();
    var j=0;
    for(j=0;j<vol_selected.length;j++){

      var date=new Date().toString();
      firebase.database().ref('/notification/' + vol_selected[j]+'/'+new Date().toString()).set({
    "time": date.substr(0,24),
    "message":"You got work from "+window.localStorage.getItem('name')+" ( "+window.localStorage.getItem('phone')+" )"
  });

      firebase.database().ref('/work/' + vol_selected[j]+'/'+key).set({
    "title": title,
    "desc": desc,
    "key":'/worked/' + window.localStorage.getItem('email')+'/'+key
    }, function(error) {
    if (error) {
    } else {
    }
    });
    }

    firebase.database().ref('/worked/' + window.localStorage.getItem('email')+'/'+key).set({
  "title": title,
  "desc": desc,
  "comment":"You : In progress"
  }, function(error) {
  if (error) {
  } else {
  }
  });
    alert("Work assigned");
  }
}

function assigned_work(){
var row=0;
var tableHeaderRowCount = 0;
var table=document.getElementById("assigned_work_table");
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
table.deleteRow(tableHeaderRowCount);
}

  firebase.database().ref('/worked/' + window.localStorage.getItem('email')).once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {


    var row = table.insertRow(row++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = childSnapshot.val().title+"<br>"+childSnapshot.val().comment;
    cell2.innerHTML = childSnapshot.val().desc;



    cell1.style.backgroundColor = "#F6FFF0";
    cell2.style.backgroundColor = "#FFD7D7";



    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";

  });
  });
}

function orphansupplied(){
var row=0;
var tableHeaderRowCount = 0;
var table=document.getElementById("orphantable");
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
table.deleteRow(tableHeaderRowCount);
}

var mapProp;

    mapProp= {
     center:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
     zoom:5,
   };
   var map = new google.maps.Map(document.getElementById("orphanmap"),mapProp);

   var marker1 = new google.maps.Marker({
     position:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
     animation:google.maps.Animation.BOUNCE
   });
   marker1.setMap(map);
var markers=[];
var i=0;



firebase.database().ref('/orphan/').once('value', function(snapshot) {
 snapshot.forEach(function(childSnapshot) {
      var marker2 = new google.maps.Marker({
        position:new google.maps.LatLng(childSnapshot.val().lat,childSnapshot.val().lon),
        title:"<center><font size=+1 color='#333333'>"+childSnapshot.val().donor+"</font><br>"+"<font color='#555555'>"+childSnapshot.val().name+"<br>"+childSnapshot.val().phone+"</font></center>"
      });
      marker2.setMap(map);
      markers.push(marker2);
});

for(i=0;i<markers.length;i++){
google.maps.event.addListener(markers[i], 'click', function() {
    var con=this.title;
    con=con.link("http://maps.google.com/maps?daddr="+this.position);
  var infowindow = new google.maps.InfoWindow({
content:con

});
infowindow.open(map,this);
});

}
});

  firebase.database().ref('/orphan/' + window.localStorage.getItem('email')).once('value', function(childSnapshot) {
if(childSnapshot.val()!=null){
document.getElementById("insupply").style.display="block";
document.getElementById("addorphanmaterial").style.display="none";
}
    var row = table.insertRow(row++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    cell1.innerHTML = childSnapshot.val().name;
    cell2.innerHTML = "Remove";

    cell2.onclick=function remove(){
      firebase.database().ref('/orphan/' + window.localStorage.getItem('email')).remove();
      alert("Request removed");
      window.location.reload();
    }

    cell1.style.backgroundColor = "#F6FFF0";
    cell2.style.backgroundColor = "#FFD7D7";

    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";

  });
}

function sectorsupplied(){
var row=0;
var tableHeaderRowCount = 0;
var table=document.getElementById("sectortable");
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
table.deleteRow(tableHeaderRowCount);
}

var mapProp;

    mapProp= {
     center:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
     zoom:5,
   };
   var map = new google.maps.Map(document.getElementById("sectormap"),mapProp);

   var marker1 = new google.maps.Marker({
     position:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
     animation:google.maps.Animation.BOUNCE
   });
   marker1.setMap(map);
var markers=[];
var i=0;



firebase.database().ref('/sector/').once('value', function(snapshot) {
 snapshot.forEach(function(childSnapshot) {
      var marker2 = new google.maps.Marker({
        position:new google.maps.LatLng(childSnapshot.val().lat,childSnapshot.val().lon),
        title:"<center><font size=+1 color='#333333'>"+childSnapshot.val().donor+"</font><br>"+"<font color='#555555'>"+childSnapshot.val().name+"<br>"+childSnapshot.val().phone+"</font></center>"
      });
      marker2.setMap(map);
      markers.push(marker2);
});

for(i=0;i<markers.length;i++){
google.maps.event.addListener(markers[i], 'click', function() {
    var con=this.title;
    con=con.link("http://maps.google.com/maps?daddr="+this.position);
  var infowindow = new google.maps.InfoWindow({
content:con

});
infowindow.open(map,this);
});

}
});

  firebase.database().ref('/sector/' + window.localStorage.getItem('email')).once('value', function(childSnapshot) {
if(childSnapshot.val()!=null){
document.getElementById("insupply").style.display="block";
document.getElementById("addsectormaterial").style.display="none";
}
    var row = table.insertRow(row++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    cell1.innerHTML = childSnapshot.val().name;
    cell2.innerHTML = "Remove";

    cell2.onclick=function remove(){
      firebase.database().ref('/sector/' + window.localStorage.getItem('email')).remove();
      alert("Request removed");
      window.location.reload();
    }

    cell1.style.backgroundColor = "#F6FFF0";
    cell2.style.backgroundColor = "#FFD7D7";

    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";

  });
}

function materialsupplied(){
var row=0;
var tableHeaderRowCount = 0;
var table=document.getElementById("materialtable");
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
table.deleteRow(tableHeaderRowCount);
}

var mapProp;

    mapProp= {
     center:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
     zoom:5,
   };
   var map = new google.maps.Map(document.getElementById("materialmap"),mapProp);

   var marker1 = new google.maps.Marker({
     position:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
     animation:google.maps.Animation.BOUNCE
   });
   marker1.setMap(map);
var markers=[];
var i=0;



firebase.database().ref('/material/').once('value', function(snapshot) {
 snapshot.forEach(function(childSnapshot) {
      var marker2 = new google.maps.Marker({
        position:new google.maps.LatLng(childSnapshot.val().lat,childSnapshot.val().lon),
        title:"<center><font size=+1 color='#333333'>"+childSnapshot.val().donor+"</font><br>"+"<font color='#555555'>"+childSnapshot.val().name+"<br>"+childSnapshot.val().phone+"</font></center>"
      });
      marker2.setMap(map);
      markers.push(marker2);
});

for(i=0;i<markers.length;i++){
google.maps.event.addListener(markers[i], 'click', function() {
    var con=this.title;
    con=con.link("http://maps.google.com/maps?daddr="+this.position);
  var infowindow = new google.maps.InfoWindow({
content:con

});
infowindow.open(map,this);
});

}
});

  firebase.database().ref('/material/' + window.localStorage.getItem('email')).once('value', function(childSnapshot) {
if(childSnapshot.val()!=null){
document.getElementById("insupply").style.display="block";
document.getElementById("addmaterial").style.display="none";
}
    var row = table.insertRow(row++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    cell1.innerHTML = childSnapshot.val().name;
    cell2.innerHTML = "Remove";

    cell2.onclick=function remove(){
      firebase.database().ref('/material/' + window.localStorage.getItem('email')).remove();
      alert("Supply stoped");
      window.location.reload();
    }

    cell1.style.backgroundColor = "#F6FFF0";
    cell2.style.backgroundColor = "#FFD7D7";

    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";

  });
}

function foodsupply(){
var row=0;
var tableHeaderRowCount = 0;
var table=document.getElementById("foodtable");
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
table.deleteRow(tableHeaderRowCount);
}

var mapProp;

    mapProp= {
     center:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
     zoom:5,
   };
   var map = new google.maps.Map(document.getElementById("foodmap"),mapProp);

   var marker1 = new google.maps.Marker({
     position:new google.maps.LatLng(window.localStorage.getItem('lat'),window.localStorage.getItem('lon')),
     animation:google.maps.Animation.BOUNCE
   });
   marker1.setMap(map);
var markers=[];
var i=0;



firebase.database().ref('/food/').once('value', function(snapshot) {
 snapshot.forEach(function(childSnapshot) {
      var marker2 = new google.maps.Marker({
        position:new google.maps.LatLng(childSnapshot.val().lat,childSnapshot.val().lon),
        title:"<center><font size=+1 color='#333333'>"+childSnapshot.val().donor+"</font><br>"+"<font color='#555555'>"+childSnapshot.val().name+"<br>"+childSnapshot.val().phone+"</font></center>"
      });
      marker2.setMap(map);
      markers.push(marker2);
});

for(i=0;i<markers.length;i++){
google.maps.event.addListener(markers[i], 'click', function() {
    var con=this.title;
    con=con.link("http://maps.google.com/maps?daddr="+this.position);
  var infowindow = new google.maps.InfoWindow({
content:con

});
infowindow.open(map,this);
});

}
});

  firebase.database().ref('/food/' + window.localStorage.getItem('email')).once('value', function(childSnapshot) {
if(childSnapshot.val()!=null){
document.getElementById("inrequest").style.display="block";
document.getElementById("addfoodmaterial").style.display="none";
}
    var row = table.insertRow(row++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    cell1.innerHTML = childSnapshot.val().name;
    cell2.innerHTML = "Remove";

    cell2.onclick=function remove(){
      firebase.database().ref('/food/' + window.localStorage.getItem('email')).remove();
      alert("Request removed");
      window.location.reload();
    }

    cell1.style.backgroundColor = "#F6FFF0";
    cell2.style.backgroundColor = "#FFD7D7";

    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";

  });
}


function to_work(){
  var works=[];
   var monitor_work=[];
var row1=0;
var tableHeaderRowCount = 0;
var table=document.getElementById("todo_work_table");
var rowCount = table.rows.length;
for (var i = tableHeaderRowCount; i < rowCount; i++) {
table.deleteRow(tableHeaderRowCount);
}

  firebase.database().ref('/work/' + window.localStorage.getItem('email')).once('value', function(snapshot) {
   snapshot.forEach(function(childSnapshot) {


    var row = table.insertRow(row1++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    works.push(childSnapshot.key);
    monitor_work.push(childSnapshot.val().key);
    cell1.innerHTML = childSnapshot.val().title+"<br><p>("+childSnapshot.val().desc+" )</p>";
    cell2.innerHTML = "<button class='form-control'>Submit</button>";
    cell2.id=row1;
    cell2.onclick=function submit(){
        var com=prompt("Add your comments here");
        if(com==null || com==""){
          alert("Add a comment to submit the work");
          return;
        }
        else{
          firebase.database().ref(monitor_work[cell2.id-1]).once('value').then(function(snapshot) {
            var user=snapshot.val();
            user['comment']=user['comment']+"<br>"+window.localStorage.getItem('name')+" : "+com;
            firebase.database().ref(monitor_work[cell2.id-1]).update(user);
            });
            var date=new Date().toString();
            firebase.database().ref('/notification/' + monitor_work[cell2.id-1].substr(8,monitor_work[cell2.id-1].lastIndexOf('/'))).set({
          "time": date.substr(0,24),
          "message":"Work submitted by "+window.localStorage.getItem('name')+" ( "+window.localStorage.getItem('phone')+" )"
        });

     firebase.database().ref('/work/' + window.localStorage.getItem('email')+'/'+works[cell2.id-1]).remove();
      alert("work submitted");
      window.location.reload();
        }
    }
    cell1.style.backgroundColor = "#F6FFF0";




    cell1.style.textAlign = "center";
    cell2.style.textAlign = "center";

  });
  });
}
function counsellingform(){
var x=document.getElementById("counssub").value;
var y=document.getElementById("counsdesc").value;

if(x=="" || y=="")
{
  alert("Please fill all the fields");
  return;
}
firebase.database().ref('/Counselling/forms/' + window.localStorage.getItem('email')).set({
"sub": x,
"desc": y,
"name":window.localStorage.getItem('name'),
"phone":window.localStorage.getItem('phone'),
"role":window.localStorage.getItem('role')
}, function(error) {
if (error) {
} else {
  alert("Form submitted");
  window.location.reload();
}
});

}

function checkcoun(){
firebase.database().ref('/Counselling/forms/' + window.localStorage.getItem('email')).once('value', function(snapshot) {
if(snapshot.val()!=null){
document.getElementById("counssub").style.display="none";
document.getElementById("counsdesc").style.display="none";
document.getElementById("counsellingsubmit").value="Remove application form";
document.getElementById("counsellingsubmit").onclick=function remo(){
  firebase.database().ref('/Counselling/forms/' + window.localStorage.getItem('email')).remove();
  alert("Form removed");
  window.location.reload();
}
}
});
}

function docoun(){
  var row=0;
  var tableHeaderRowCount = 0;
  var table=document.getElementById("docounsellingtable");
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
  table.deleteRow(tableHeaderRowCount);
  }

    firebase.database().ref('/Counselling/forms/').once('value', function(snapshot) {
     snapshot.forEach(function(childSnapshot) {


      var row = table.insertRow(row++);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = childSnapshot.val().name+"<br>"+childSnapshot.val().role;
      cell2.innerHTML = childSnapshot.val().sub+"<br>"+childSnapshot.val().desc;
      cell3.innerHTML = "<b><font size=+1 color='blue'>Attend</font></b>";


      cell3.onclick=function  attend(){
        firebase.database().ref('/Counselling/notify/' + childSnapshot.key).set({
        "name":window.localStorage.getItem('name'),
        "phone":window.localStorage.getItem('phone'),
        "key":window.localStorage.getItem('email')
      });
      var date=new Date().toString();
      firebase.database().ref('/notification/' + childSnapshot.key+'/'+new Date().toString()).set({
    "time": date.substr(0,24),
    "message":"Your counselling application is accepted by "+window.localStorage.getItem('name')+" ( "+window.localStorage.getItem('phone')+" )"
  });
        window.localStorage.setItem('Counselling',childSnapshot.key);
window.localStorage.setItem('Counsellingname',childSnapshot.val().name);
window.localStorage.setItem('iscounselling',"yes");
window.localStorage.setItem('Counsellingphone',childSnapshot.val().phone);

        var win = window.open('counselling.html', '_blank');
       win.focus();
      }


      cell1.style.backgroundColor = "#F6FFF0";
      cell2.style.backgroundColor = "#FFD7D7";
      cell3.style.backgroundColor = "#F6FFF0";

      cell1.style.textAlign = "center";
      cell2.style.textAlign = "center";
      cell3.style.textAlign = "center";
    });
    });
}

firebase.database().ref('/Counselling/notify/'+window.localStorage.getItem('email')).on('value', function(snapshot) {
var x=document.getElementById("chat");
  if(snapshot.val()!=null){
    var s=snapshot.val();
    window.localStorage.setItem('Counselling',s.key);
window.localStorage.setItem('Counsellingname',s.name);
window.localStorage.setItem('iscounselling',"no");
window.localStorage.setItem('Counsellingphone',s.phone);
    var y=document.getElementById("coun_chat");
    y.style.color="white";
    y.innerHTML="Your counselling application is accepted by "+s.name+"("+s.phone+")";
    x.style.display="block";
}
else{
  x.style.display="none";
}
});

function removenotify(){
  firebase.database().ref('/Counselling/notify/'+window.localStorage.getItem('email')).remove();
}
