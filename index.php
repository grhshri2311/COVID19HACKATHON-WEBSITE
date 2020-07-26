<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="TemplateMo">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet">
<link rel="icon" href="assets/images/banner-bg.png" type="image/icon type">
    <title>COVID-19 RELIEF</title>
<!--

Lava Landing Page

https://templatemo.com/tm-540-lava-landing-page

-->

    <!-- Additional CSS Files -->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">

    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css">

    <link rel="stylesheet" href="assets/css/templatemo-lava.css">

    <link rel="stylesheet" href="assets/css/owl-carousel.css">



<style>
.location-permission{
  margin-top: 100px;
  background-color: #736AFF;
  padding: 20px;
  display: none;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 5px;
  margin-bottom: 5px;
  width: 100%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
.splash{
background-color: grey;color:black; position: absolute;top:0;bottom:0;left:0;right:0;

table {
  border-collapse: collapse;
  width: 100%;
}

table, td {
  border: 1px solid black;
}

#myTABLE {
  width: 100%;
}
}
</style>

</head>

<body onload="splash();">


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-database.js"></script>



    <!-- ***** Preloader Start ***** -->
    <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <!-- ***** Preloader End ***** -->

    <!-- ***** Header Area Start ***** -->
    <header class="header-area header-sticky" id="header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
<a href="tel:1075">
  <img src="assets\images\helpline.png" style="float:left;  margin-top: 20px;" width="50px" height="50px">
  <p style="float:left;  margin-left: 10px; margin-top: 30px;">Helpline</p></a>

                            <h4 class="logo" id="logo" style="visibility:hidden";>###</h4>


                        <ul class="nav">
                            <li class="scroll-to-section"><a href="#welcome" class="menu-item">Home</a></li>
                              <li><a  onclick="change_language();" class="menu-item" data-toggle="modal" data-target="#language">Language</a></li>
                            <li class="scroll-to-section" id="notifications">  <a data-toggle="modal" data-target="#notification">
<p id="n1" style="padding-top: 10px;" onclick="notices();">Notifications</p></a>
                            </li>
                            <li class="submenu" id="workheader">
                                <a href="javascript:;">Work</a>
                                <ul>
                                    <li><a style="color:white;" onclick="to_work();" class="menu-item" data-toggle="modal" data-target="#to_do">To do</a></li>
                                    <li><a style="color:white;" onclick="assigned_work();" class="menu-item" data-toggle="modal" data-target="#assigned_work">Assigned Work</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section"><a href="#contact-us" class="menu-item">About Us</a></li>
                            <li class="scroll-to-section" id="logout" onclick="logout_user();"><a class="menu-item">Logout</a>
<li class="scroll-to-section" id="signinsignup" ><a href="#signinsignup1" class="menu-item">SignIn/SignUp</a>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <br><br>    <br><br>
    <marquee behavior="scroll">
      <h6 id="cases_report" onclick="  var win = window.open('https://www.mygov.in/covid-19', '_blank');
       win.focus();"> </h6></marquee>

    <div class="modal fade" id="notification" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
     <div class="modal-content">
       <div class="modal-header">
         <p align=left><font color="blue" size=+1>Notifications</font></p>
         <button type="button" class="close" data-dismiss="modal">&times;</button>

       </div>
       <div class="modal-body">
      <table id="myTable1" class="table">
        <tr>
          <button type="button" onclick="clear_notification();" class="form-control" style="font-size: 14px;
          width: 100%;
         margin-bottom: 20px;
         background-color: #F8F8F8;
         color: #000;">
         Clear notifications</button>
        </tr>
      </table>
      <br>
  </div>  </div>  </div>  </div>  </div>  </div>

  <div class="modal fade" id="language" role="dialog">
 <div class="modal-dialog">

   <!-- Modal content-->
   <div class="modal-content">
     <div class="modal-header">
       <p align=left><font color="blue" size=+1>Select languages</font></p>
       <button type="button" class="close" data-dismiss="modal">&times;</button>

     </div>
     <div class="modal-body">
   <a href="https://translate.google.com/translate?hl=&sl=&tl=en&u=covid19relief.000webhostapp.com">
       <div class="card" style="padding:10px;">
      <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
         <div class="container">
           <p>English</p>
                 </div>
       </div></a>
       <a href="https://translate.google.com/translate?hl=&sl=&tl=hi&u=covid19relief.000webhostapp.com">
           <div class="card" style="padding:10px;">
          <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
             <div class="container">
               <p>Hindi</p>
                     </div>
           </div></a>
           <a href="https://translate.google.com/translate?hl=&sl=&tl=ta&u=covid19relief.000webhostapp.com">
               <div class="card" style="padding:10px;">
              <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                 <div class="container">
                   <p>Tamil</p>
                         </div>
               </div></a>
               <a href="https://translate.google.com/translate?hl=&sl=&tl=te&u=covid19relief.000webhostapp.com">
                   <div class="card" style="padding:10px;">
                  <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                     <div class="container">
                       <p>Telugu</p>
                             </div>
                   </div></a>
                   <a href="https://translate.google.com/translate?hl=&sl=&tl=kn&u=covid19relief.000webhostapp.com">
                       <div class="card" style="padding:10px;">
                      <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                         <div class="container">
                           <p>Kannada</p>
                                 </div>
                       </div></a>
                       <a href="https://translate.google.com/translate?hl=&sl=&tl=ml&u=covid19relief.000webhostapp.com">
                           <div class="card" style="padding:10px;">
                          <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                             <div class="container">
                               <p>Malayalam</p>
                                     </div>
                           </div></a>
                           <a href="https://translate.google.com/translate?hl=&sl=&tl=pa&u=covid19relief.000webhostapp.com">
                               <div class="card" style="padding:10px;">
                              <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                                 <div class="container">
                                   <p>Punjabi</p>
                                         </div>
                               </div></a>
                               <a href="https://translate.google.com/translate?hl=&sl=&tl=bn&u=covid19relief.000webhostapp.com">
                                   <div class="card" style="padding:10px;">
                                  <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                                     <div class="container">
                                       <p>Bengali</p>
                                             </div>
                                   </div></a>
                                   <a href="https://translate.google.com/translate?hl=&sl=&tl=gu&u=covid19relief.000webhostapp.com">
                                       <div class="card" style="padding:10px;">
                                      <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                                         <div class="container">
                                           <p>Gujarati</p>
                                                 </div>
                                       </div></a>
                                       <a href="https://translate.google.com/translate?hl=&sl=&tl=mr&u=covid19relief.000webhostapp.com">
                                           <div class="card" style="padding:10px;">
                                          <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                                             <div class="container">
                                               <p>Marati</p>
                                                     </div>
                                           </div></a>
                                           <a href="https://translate.google.com/translate?hl=&sl=&tl=or&u=covid19relief.000webhostapp.com">
                                               <div class="card" style="padding:10px;">
                                              <img src="https://www.chrmbook.com/wp-content/uploads/Google_Translate_Icon.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);">
                                                 <div class="container">
                                                   <p>Oriya</p>
                                                         </div>
                                               </div></a>

    <br>
</div>  </div>  </div>  </div>  </div>  </div>


    <div class="splash" id="splash" style="background-color:white;">
  <center>  <img src="assets/images/splash.jpg" id="splashimg" height="100%" style="width:100%;"></center>
    </div>


    <div class="location-permission" id="location_permission">
      <center>
      <p><font color="white"  size=+1>Location permission is needed for the app to work normally ...</font>
      </center>
    </div>
    <div class="location-permission" id="alarm_goesof" style="display:none;">
      <center>
    <font color="white"  size=+1>  <p id="alarm_text"> </p></font>
      </center>
    </div>
  <a style="color:white;" data-toggle="modal" data-target="#modal_reply">  <div class="location-permission" id="help_needed" style="display:none;">
      <center>
    <font color="white"  size=+1>  <p id="help_needed_text"> </p></font>
      </center>
    </div>
    </a>

    <a style="color:white;" onclick=" var win = window.open('counselling.html', '_blank');win.focus();" >  <div class="location-permission" id="chat" style="display:none;" onclick="removenotify();">
        <center>
      <font color="white"  size=+1>  <p id="coun_chat"> </p></font>
        </center>
      </div>
      </a>
    <!-- ***** Header Area End ***** -->

                    <!-- ***** Contact Form End ***** -->

    <!-- ***** Welcome Area Start ***** -->
    <div class="welcome-area" id="welcome" id="welcome">

        <!-- ***** Header Text Start ***** -->
        <div class="header-text">
            <div class="container">
                <div class="row">
                    <div class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1 >COVID-19  <em>RELIEF</em></h1>
                        <p>COVID-19-RELIEF  is a mobile application developed to connect and coordinate essential health and various services with the people of India to fight against COVID-19.</p>
                        <a href="#about-us" class="main-button-slider">KNOW US BETTER</a><br><br>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <!-- ***** Header Text End ***** -->

    </div>
    <!-- ***** Welcome Area End ***** -->
      <section class="section" id="signinsignup1">
    <footer id="register-div">
        <div class="container">
            <div class="footer-content">
                <div class="row">
                    <!-- ***** Contact Form Start ***** -->
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="login-form">
                            <h1 align="left" style="color:#f4813f">Register</h1><br>
                                <h6 align="left" id="otp" ><font color="red"></h6><br>
                            <form id="contact">
                                <div class="row">
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Full Name" required=""
                                                style="background-color: rgba(250,250,250,0.3);">
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="email" type="text" id="email" placeholder="E-Mail"
                                                required="" style="background-color: rgba(250,250,250,0.3);">
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="password" type="password" id="password" placeholder="Password"
                                                required="" style="background-color: rgba(250,250,250,0.3);">
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                            <input name="mobile" type="number" id="mobile" placeholder="Mobile"
                                                required="" style="background-color: rgba(250,250,250,0.3);">
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                                  <select id="role" name="cars" class="form-control">

      <option value="select">Select your Role</option>
        <option value="monitors">monitors</option>
  <option value="volunteers">volunteers</option>
  <option value="labour">labour</option>
  <option value="healthworker">healthworker</option>
  <option value="counsellor">counsellor</option>
  <option value="stranded_migrant">stranded_migrant</option>
  <option value="workers">workers</option>
  <option value="orphan">orphan</option>
  <option value="general">general</option>
</select>
                                        </fieldset>
                                    </div>
                                    <br><br>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>
                                                  <select id="state" name="cars" class="form-control">

      <option value="select">Select your state</option>

<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Gujarat">Gujarat</option>
<option value="Goa">Goa</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Karnataka">Karnataka</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="West Bengal">West Bengal</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Dadra and Nagar Haveli ">Dadra and Nagar Haveli </option>
<option value="Delhi">Delhi</option>
<option value="Jammu & Kashmir">Jammu & Kashmir</option>
<option value="Ladakh">Ladakh</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>


</select>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <fieldset>

                                        </fieldset>
                                    </div><br><br>
                                    <p align="right" onclick="toggle_login();" color:"#f4813f">&nbsp;&nbsp;&nbsp;Already a  member? &nbsp;&nbsp;Sign IN</p><br><br>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <button type="button" id="register-button" onclick="register()"  class="main-button">Submit</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    </footer>
                    <footer id="login-div">
                        <div class="container">
                            <div class="footer-content">
                                <div class="row">
                                    <!-- ***** Contact Form Start ***** -->
                                    <div class="col-lg-6 col-md-12 col-sm-12">
                                        <div class="login-form">
                                            <h2 align="left" style="color:#f4813f">Login</h2><br>
                                              <h6 align="left" id="login_err" ><font color="red"></h6><br>
                                            <form id="contact">
                                                <div class="row">
                                                  <div class="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="email" type="text" id="emaill" placeholder="E-Mail"
                                                                required="" style="background-color: rgba(250,250,250,0.3);">
                                                        </fieldset>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <fieldset>
                                                            <input name="password" type="password" id="passwordl" placeholder="Password"
                                                                required="" style="background-color: rgba(250,250,250,0.3);">
                                                        </fieldset>
                                                      </div>
                                                    &nbsp;&nbsp;&nbsp;  <p align="left">Forgot Password ?</p><br>
                                                    <h6 align="right" onclick="toggle_register();" color:"#f4813f">&nbsp;&nbsp;&nbsp;New User ? Sign UP</h6><br><br>

                                                    <div class="col-lg-12" style="float:right">
                                                        <fieldset>
                                                            <button type="button"  onclick="login()"  class="main-button">Log In</button>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                  </footer>

                                  <div class="modal fade" id="selfassess" role="dialog">
                                 <div class="modal-dialog">

                                   <!-- Modal content-->
                                   <div class="modal-content">
                                     <div class="modal-header">
                                       <p align=left><font color="#C3BEBE">COVID-19 self-assessment</font></p>
                                       <button type="button" class="close" data-dismiss="modal">&times;</button>
                                     </div>
                                     <div class="modal-body">
                                  <div class="container">
                                    <form action="/action_page.php">
                                      <br>
                                      <div class="form-group">
                                        <textarea id="question" oninput="auto_grow(this)" class="form-control" name="w3review" rows="15" cols="50" style="height: 100%;align-content:center; overflow:auto;"></textarea>
                                      </div>
                                      <div class="form-group">
                                        <input type="button" id="yes" class="btn btn-danger" width=50% onclick="selfassess('yes');" value="Yes" style="width: 48%;float:left;margin-right:5px;"></button>
                                        <input type="button" id="no" class="btn btn-success" onclick="selfassess('no');" style="width: 48%;" value="No"></button>
                                      </div>
                                    </form>
                                </div></div></div></div></div>
</section>
                                <center>
                                <div class="card" id="assessment_card" style="  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                                  max-width: 90%;
                                  margin: 20px;
                                  margin-top: 50px;
                                  text-align: center;
                                  font-family: arial;">
                                  <img src="https://png.pngtree.com/png-vector/20200227/ourlarge/pngtree-people-symptoms-corona-virus-infographic-png-image_2153997.jpg" alt="John" style="width:100%">
                                  <h1 id="assess_result"></h1>
                                  <p class="title" id="total_assessed"></p>
                                  <p id="total_victim"></p>
                                  <div style="margin: 24px 0;">
                                    <i class="fa fa-dribbble"></i>
                                    <i class="fa fa-twitter"></i>
                                    <i class="fa fa-linkedin"></i>
                                    <i class="fa fa-facebook"></i>
                                  </div>
                                  <p><input id="assess_radius" type="number" value="1000" onchange="assess_radius_change();" style="margin:5px;">m radius</p>
                                </div>
                                </center>
<br><br>
                                <div class="col-lg-8 offset-lg-2">
                                    <div class="center-heading">
                                        <h2>Useful <em>Section</em></h2>
                                        <p>Users of COVID-19 RELIEF are provided with some useful modules like first response in emergency etc.,</p>
                                    </div>
                                </div>

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div class="features-item">
                        <div class="features-icon">
                            <h2>01</h2>
                            <img src="https://www.edds.com.pk/wp-content/uploads/2018/08/Picture1-300x288.png" width="150px" alt="">
                            <p>If you are having difficulty breathing or experiencing other severe symptoms, call 1075, +91-11-23978046 or ncov2019@gmail.com immediately. Advise them of your symptoms and travel history.</p>
                            <a onclick="selfassess('123');" class="main-button" data-toggle="modal" data-target="#selfassess" style="color:white;">
                                Take assessment
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                    <div class="features-item">
                        <div class="features-icon">
                            <h2>02</h2>
                            <img src="https://www.fenlandfirstaid.co.uk/wp-content/uploads/2015/08/efaw-icon-heart.png" width=150px alt="">
                            <h4>First responder</h4>
                            <p>A first responder is a person with specialized training who is among the first to arrive and provide assistance at the scene of an emergency. </p>
                            <a href="#" data-toggle="modal" data-target="#first_responder" class="main-button" onclick="if(window.localStorage.getItem('email')==null){document.getElementById('stop_scanning').innerHTML='Sign in to use this feature';return false;}if(confirm('Are you sure you want to alert nearby users?')){first_responder();return true;}else{return false;};">
                                Alert near by
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <div class="features-item">
                        <div class="features-icon">
                            <h2>03</h2>
                            <img src="assets/images/helplineicon.png" alt="">
                            <h4>Indian Helpline:</h4>
                            <p>Indian government and Ministry of Health & Family Welfare has provided the following helpline numbers of States.</p>
                            <a style="color:white;"class="main-button" data-toggle="modal" data-target="#myModal">
                              click to view
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="modal fade" id="modal_reply" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
     <div class="modal-content">
       <div class="modal-header">
         <p align=left><font color="blue" size=+1>First responder:</font></p>
         <button type="button" class="close" data-dismiss="modal">&times;</button>
       </div>
       <div class="modal-body">

           <button class="form-control" id="calldisconnectreply" style="display:none;">Disconnect</button>
  <button class="form-control" id="callreply" style="display:none;">click to call</button>
          <div id="response_map_reply" style="width:100%;height:400px;display:block;">

          </div>
       </div>

     </div>

   </div>
 </div>


    <div class="modal fade" id="first_responder" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
     <div class="modal-content">
       <div class="modal-header">
         <p align=left><font color="blue" size=+1>First responder:</font></p>
         <button type="button" class="close" data-dismiss="modal">&times;</button>
       </div>
       <div class="modal-body">
         <div class="card" id="first_response">
           <button type="button" id="stop_scanning" class="form-control" style="font-size: 14px;
           width: 100%;
          margin-bottom: 20px;
          background-color: #F8F8F8;
          color: #000;">
          Stop Scanning</button>

         <img src="https://thumbs.gfycat.com/MatureShamefulFoxterrier-size_restricted.gif" alt="Avatar" width=100%>
           <div class="container">
             <p id="radius"></p>
             <font size=+2 color="black"></font>

           </div>
         </div>
           <button class="form-control" id="calldisconnect" style="display:none;">Disconnect</button>
  <button class="form-control" id="call" style="display:none;">click to call</button>
          <div id="response_map" style="width:100%;height:400px;display:block;">

          </div>
       </div>

     </div>

   </div>
 </div>

    <div class="modal fade" id="myModal" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
     <div class="modal-content">
       <div class="modal-header">
         <p align=left><font color="blue" size=+1>States helpline number:</font></p>
         <button type="button" class="close" data-dismiss="modal">&times;</button>
       </div>
       <div class="modal-body">
<?php
 $state=array("andhrapradesh",                "arunachalpradesh",                "assam",                "Bihar",                "Chhattisgarh",                "Goa",                "Gujarat",                "Haryana",                "Himachalpradesh",                "Jharkhand",                "Karnataka",                "Kerala",                "Madhyapradesh",                "Maharashtra",                "Manipur",                "Meghalaya",                "Mizoram",               "Nagaland",                "Odisha",                "Punjab",                "Rajasthan",                "Sikkim",                "Tamilnadu",                "Telangana",                "Tripura",                "Uttarpradesh",                "Uttarakhand",                "Westbengal",                "AndamanandNicobarIsland",                "Chandigarh",                "DadraNagarHaveliDamanandDiu",                "Delhi",                "JammuandKashmir",                "Ladakh",                "Lakshadweep",                "Puducherry");
 $number=array("0866-2410978",                "104",                "0612-2217681",                "104",                "0771-282113",                "104",                "079-23251900",                "0172-2545938",                "104",                "104",                "080-46848600 ",                "0471-2552056",                "0755-2411180",                "022-22024535",                "1800-345-3818",                "108",                "102",                "0370-2291122",                "0674-2534177",                "104",                "0141-2225000",                "104",                "044-29510500",                "104",                "0381-2315879",                "0522-2237515",                "104",                "1800-313-444222",                "03192-232102",                "0172-2752038",                "104",                "011-22307145",                "0191-2549676",                "01982-256462",                "104",                "104");

 $i=0;
 while($i<count($state)){
 ?>
         <div class="card">
        <a href="tel:<?php  echo $number[$i];?>">   <img src="assets/images/phone.png" alt="Avatar" width="30px" height="30px" style="  margin: 0;  position: absolute;  top: 60%;  left: 90%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);"></a>
           <div class="container">
             <p><?php  echo $state[$i];?></p>
             <font size=+2 color="black"><?php  echo $number[$i];?></font>

           </div>
         </div>
<?php
$i++;
}
  ?>
       </div>

     </div>

   </div>
 </div>
    <!-- ***** Features Big Item End ***** -->
    <div class="col-lg-8 offset-lg-2">
        <div class="center-heading">
            <h2>Mapping Or <em>Tracking</em></h2>
            <p>Users of COVID-19 RELIEF are mapped with their locations to provide right measures at right time.</p>
        </div>
    </div>

    <select id="role_map"  onchange="map_filter()" name="cars" class="form-control" style="margin-right:10px;display:none;">

  <option value="select">Select Role to filter</option>
  <option value="monitors">monitors</option>
  <option value="volunteers">volunteers</option>
  <option value="labour">labour</option>
  <option value="healthworker">healthworker</option>
  <option value="counsellor">counsellor</option>
  <option value="stranded_migrant">stranded_migrant</option>
  <option value="workers">workers</option>
  <option value="orphan">orphan</option>
  <option value="general">general</option>
</select>
    <div id="googleMap" style="width:100%;height:400px;display:none;"></div>

    <div class="left-image-decor"></div>

    <!-- ***** Features Big Item Start ***** -->
    <section class="section" id="promotion">
        <div class="container">
            <div class="row">
                <div class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big" width=50% height=50%
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src="https://www.venminder.com/hubfs/Blog_Images/2020_Blog_Posts/03.25.2020-COVID-19-brings-3-vendor-management-changes-to-know-HEADER.png" class="rounded img-fluid d-block mx-auto" alt="App">
                </div>
                <div class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                    <ul>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <img src="https://images.squarespace-cdn.com/content/v1/576740f45016e10f9510a056/1470444621013-TT1D00FYRD8BM5U66HJ4/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxQ1ibo-zdhORxWnJtmNCajDe36aQmu-4Z4SFOss0oowgxUaachD66r8Ra2gwuBSqM/image-asset.png" width="100px" alt="">
                            <div class="text">
                                <h4 onclick="donate();"><font color="blue">Make a Donation</font></h4>
                                <p>To render financial assistance, provide grants of payments of money or take such other steps as may be deemed necessary by the Board of Trustees to the affected population.</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                            <img src="https://img.icons8.com/bubbles/2x/bus.png" alt="" width="150px">
                            <div class="text">
                                  <h4 onclick="epass();"><font color="blue">Apply for Epass</font></h4>
                                <p><b>E - PASS REGISTER</b> &nbsp;for Movement During Lockdown (for Migrant Labourers, Student, Essential supplier, etc)</p>
                            </div>
                        </li>
                        <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                            <img src="assets/images/MSME.png" width="150px" alt="">
                            <div class="text">
                              <a data-toggle="modal" data-target="#MSME">  <h4><font color="blue">MSME Products</font></h4></a>
                                <p>The Ministry of Micro, Small and Medium Enterprises, a branch of the Government of India, is the apex executive body for the formulation and administration of rules, regulations and laws relating to micro, small and medium enterprises in India.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- ***** Features Big Item End ***** -->
    <div class="modal fade" id="MSME" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
     <div class="modal-content">
       <div class="modal-header">
         <p align=left><font color="blue" size=+1>MSME Products:</font></p>
         <button type="button" class="close" data-dismiss="modal">&times;</button>
       </div>
       <div class="modal-body">
  <?php
  $product=array("Ventilators", "Alcohol based hand-rub", "Face shield (eye, nose & mouth protection)", "N95 Masks", "Latex single use gloves (clinical)",
                "Reusable vinyl / rubber gloves (cleaning)", "Eye protection (visor / goggles)", "Protective Gowns / Aprons", "Disposable thermometers",
                "UV tube light for sterilization", "Medical masks (surgical / procedure)", "Detergent / Disinfectant", "Single use towels", "Biohazard bags",
                "Wheel Chair", "Glucometer with strips", "Medicine", "IV Fluid - DNS", "IV Fluid - Dextrose", "20.Hard-frozen Gel Packs", "Sample Collection Kit",
                "Thermocool box / Ice-box", "Stretcher", "Thermal scanners", "Batteries for thermal scanners", "26.BP apparatus", "IV Sets", "IV Cannula",
                "IV Stand", "Ambulance", "First aid", "Medical Waste Incinerator", "ICU Beds", "Cardiac monitors", "Syringe pumps", "Portable x ray machines",
                "Endotracheal tube", "Suction tube", "Oxygen cylinders");


  $i=0;
  while($i<count($product)){

  ?>

         <div class="card"  onclick="window.open('https://mkp.gem.gov.in/search?q=<?php echo $product[$i];?>');">
        <img src="assets/images/MSME.png" alt="Avatar" width="60px" height="60px" >
           <div class="container">
        <center>     <p style="  margin: 0;  position: absolute;  top: 50%;  left: 50%;  -ms-transform: translate(-50%, -50%);  transform: translate(-50%, -50%);"><?php  echo $product[$i];?></p></center>

           </div>
         </div>

  <?php
  $i++;
  }
  ?>
       </div>

     </div>

   </div>
  </div>
    <div class="right-image-decor"></div>

    <!-- ***** Testimonials Starts ***** -->
    <section class="section" id="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="center-heading">
                        <h2>Heath <em>Care</em></h2>
                        <p>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.</p>
                    </div>
                    <img src="https://webstockreview.net/images/clipart-arrow-orange-5.png" width="50px" style="float:right;" >

                </div>
                <div class="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div class="owl-carousel owl-theme">

                        <div class="item service-item" onclick="  var win = window.open('https://ors.gov.in/copp/welcome.jsp?NICSecurityORS=KVJF-IIQJ-X44U-BM3H-SPSG-SF4I-YIQL-DIRP', '_blank');
                       win.focus();">
                            <div class="author">
                                <i><img src="assets/images/admissionicon.png" alt=""></i>
                            </div>
                            <div class="testimonial-content">
                                <ul class="stars">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h4>Appointments/Admissions</h4>
                                <p>“You can get an appointments for hosptals ,lab tests and you can even order medicines online..”</p>
                                <span>Get Appointments</span>
                            </div>
                        </div>
                        <div class="item service-item" onclick="  var win = window.open('https://www.google.com/maps/search/hospitals' + '/@' + window.localStorage.getItem('lat') + ',' + window.localStorage.getItem('lon'), '_blank');
                       win.focus();">
                            <div class="author">
                                <i><img src="assets/images/hospital.png" alt=""></i>
                            </div>
                            <div class="testimonial-content">
                                <ul class="stars">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h4>Nearby Hospitals</h4>
                                <p>“List of Hospital locations that are filtered based on your location.”</p>
                                <span>Show hospitals</span>
                            </div>
                        </div>

                        <div class="item service-item" onclick="healthcaremap();">
                            <div class="author">
                                <i><img src="assets/images/admissionicon.png" alt=""></i>
                            </div>
                            <div class="testimonial-content">
                                <ul class="stars">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h4>Public health care location</h4>
                                <p>“List of Public healthcare locations that are filtered based on your location.”</p>
                                <span>Show health cares</span>
                            </div>
                        </div>
                        <div class="item service-item" onclick="  var win = window.open('https://www.google.com/maps/search/chemists' + '/@' + window.localStorage.getItem('lat') + ',' + window.localStorage.getItem('lon'), '_blank');
                       win.focus();">
                            <div class="author">
                                <i><img src="assets/images/medicalshop.png" alt=""></i>
                            </div>
                            <div class="testimonial-content">
                                <ul class="stars">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h4>Nearby Medical Shops</h4>
                                <p>“List of Medical shops locations that are filtered based on your location.”</p>
                                <span>Show Medical shops</span>
                            </div>
                        </div>
                        <div class="item service-item" onclick="labsmap();">
                            <div class="author">
                                <i><img src="assets/images/labsicon.webp" alt="Fourth Author"></i>
                            </div>
                            <div class="testimonial-content">
                                <ul class="stars">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h4>Labs for test</h4>
                                <p>"Contact your healthcare provider if your symptoms are getting worse or if you have questions about your health.​​"</p>
                                <span>View Labs</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

  <div id="labsmap" style="width:100%;height:400px;display:none;"></div>
  <Button class="form-control" id="labsmapbutton" onclick="document.getElementById('labsmap').style.display='none';this.style.display='none';" style="display:none;width:10%;float:right;margin:15px;background:#555555;color:white;">Close Map</button>
  <br><br>
  <Button class="form-control" id="healthcarebutton" onclick="document.getElementById('healthcare').style.display='none';this.style.display='none';" style="display:none;width:10%;float:right;margin:15px;background:#555555;color:white;">Close Map</button>
  <div id="healthcare" style="width:100%;height:400px;display:none;"></div>

    <!-- ***** Testimonials Ends ***** -->
    <div class="modal fade" id="alarmdialog" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
     <div class="modal-content">
       <div class="modal-header">
         <p align=left><font color="blue" size=+1>Alarm Manager</font></p>
         <button type="button" class="close" data-dismiss="modal">&times;</button>
       </div>
       <div class="modal-body">
    <div class="form-group">
      <input type="text" id="alarmname" class="form-control"  placeholder="Alarm Name"  style="margin: 10px;">

      <input type="time" id="time" class="form-control"  style="margin-left: 10px;width: 65%;float:left;margin-right:5px;"></button>
      <input type="button"  class="btn btn-success" onclick="setalarm();" style="padding:5px;width: 25%;" value="Set Alarm"></button>
<br><br>

      <table id="myTable" class="table">
      </table>
      <br>
</div>
</div>
</div>
</div>


    </div>

    <section class="section" id="testimonials">
        <div class="container" id="testimonials1">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="center-heading">
                        <h2>Disaster<br><em>Management</em></h2>
                        <p>Disaster Management can be defined as the organization and management of resources and responsibilities for dealing with all humanitarian aspects of emergencies, in particular preparedness, response and recovery in order to lessen the impact of disasters.</p>
                    </div>
                    <img src="https://webstockreview.net/images/clipart-arrow-orange-5.png" width="50px" style="float:right;" >

                </div>
                <div class="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <div class="owl-carousel owl-theme">

                      <a data-toggle="modal" data-target="#assignwork">          <div class="item service-item">
                                  <div class="author">
                                      <i><img src="https://uybor.uz/borless/avtobor/img/user-images/user_no_photo_300x300.png" width="150px" alt=""></i>
                                  </div>
                                  <div class="testimonial-content">
                                      <ul class="stars">
                                          <li><i class="fa fa-star"></i></li>
                                          <li><i class="fa fa-star"></i></li>
                                          <li><i class="fa fa-star"></i></li>
                                          <li><i class="fa fa-star"></i></li>
                                          <li><i class="fa fa-star"></i></li>
                                      </ul>
                                      <h4>Assign Work</h4>
                                      <p>“The Assign Work tool can be used to assign your project's tasks to your team in bulk, saving your unnecessary overhead administrative work.”</p>
                                      <span>Assign</span>
                                  </div>
                              </div></a>
                              <a data-toggle="modal" data-target="#alarmdialog">       <div class="item service-item">
                                        <div class="author">
                                            <i><img src="https://images-na.ssl-images-amazon.com/images/I/61h5USwSS6L.png" alt="Alarm"></i>
                                        </div>
                                        <div class="testimonial-content">
                                            <ul class="stars">
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                                <li><i class="fa fa-star"></i></li>
                                            </ul>
                                            <h4>Alarm Manager</h4>
                                            <p>“ you can schedule your tasks to run at a specific time in the future. ... ”</p>
                                            <span>Set an Alarm</span>
                                        </div>
                                    </div></a>
            <a data-toggle="modal" data-target="#courses">          <div class="item service-item" onclick="loadDoc();">
                            <div class="author">
                                <i><img src="assets/images/onlinecourse.webp" alt="Alarm"></i>
                            </div>
                            <div class="testimonial-content">
                                <ul class="stars">
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                    <li><i class="fa fa-star"></i></li>
                                </ul>
                                <h4>Online Courses</h4>
                                <p>“Discover a range of free learning content designed to help grow your business or jumpstart your career. You can learn by selecting individual modules, or dive right in and take an entire course end-to-end. ”</p>
                                <span>View courses</span>
                            </div>
                        </div></a>
                        <a data-toggle="modal" data-target="#collectmaterial" onclick="materialsupplied();">          <div class="item service-item">
                                    <div class="author">
                                        <i><img src="assets./images/distributeicon.webp" width="150px" alt=""></i>
                                    </div>
                                    <div class="testimonial-content">
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <h4>Material Collection</h4>
                                        <p>“The materials required are drinking water, rice,biscuit, rusk, baby food, coconut, medicines, bedsheet, towels, torch, candles, lighter and sanitary napkins. Items like bread and bun which become unusable in a few days should be avoided.”</p>
                                        <span>Collect</span>
                                    </div>
                                </div></a>

                        <a data-toggle="modal" data-target="#counselling" onclick="checkcoun();">          <div class="item service-item">
                                    <div class="author">
                                        <i><img src="https://www.pinclipart.com/picdir/big/381-3819091_thrive-counselling-774-4184-sandrathrivewinnipeg-clipart.png" width="150px" alt=""></i>
                                    </div>
                                    <div class="testimonial-content">
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <h4>Apply for Counselling</h4>
                                        <p>“Advice and resources for coping with stress, anxiety, or distress during the current outbreak of coronavirus (COVID-19) by Counselling.”</p>
                                        <span>Apply</span>
                                    </div>
                                </div></a>
                                <a data-toggle="modal" data-target="#docounselling" onclick="docoun();">          <div class="item service-item">
                                            <div class="author">
                                                <i><img src="https://www.pinclipart.com/picdir/big/381-3819091_thrive-counselling-774-4184-sandrathrivewinnipeg-clipart.png" width="150px" alt=""></i>
                                            </div>
                                            <div class="testimonial-content">
                                                <ul class="stars">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                </ul>
                                                <h4>Do Counselling</h4>
                                                <p>“The act of helping the client to see things more clearly, possibly from a different view-point. This can enable the client to focus on feelings, experiences or behaviour, with a goal of facilitating positive change.”</p>
                                                <span>Start</span>
                                            </div>
                                        </div></a>
                        <a data-toggle="modal" data-target="#food" onclick="foodsupply();">          <div class="item service-item">
                                    <div class="author">
                                        <i><img src="https://img.pngio.com/food-bag-png-stock-images-png-play-food-bag-png-png-1170_1755.png" width="150px" alt=""></i>
                                    </div>
                                    <div class="testimonial-content">
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <h4>Isolation food supply</h4>
                                        <p>“Emergency food storage and the ability to cook this food are among the most important aspects of any plan to evacuate or shelter-in-place in case of an emergency or disaster or preparation for an infectious disease quarantine or self-isolation (voluntary or mandatory).”</p>
                                        <span>View</span>
                                    </div>
                                </div></a>
                                <a data-toggle="modal" data-target="#orphan" onclick="orphansupplied();">          <div class="item service-item">
                                            <div class="author">
                                                <i><img src="https://images.vexels.com/media/users/3/128082/isolated/preview/040e64f15431e65bdd3f667c9297aa8a-house-in-hands-icon-by-vexels.png" width="200px" alt=""></i>
                                            </div>
                                            <div class="testimonial-content">
                                                <ul class="stars">
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                    <li><i class="fa fa-star"></i></li>
                                                </ul>
                                                <h4>Orphan & Vulnerable</h4>
                                                <p>“COVID-19 is often more severe in people 60+yrs or with health conditions like lung or heart disease, diabetes or conditions that affect their immune system.”</p>
                                                <span>View</span>
                                            </div>
                                        </div></a>
                                        <a data-toggle="modal" data-target="#sector" onclick="sectorsupplied();">          <div class="item service-item">
                                                    <div class="author">
                                                        <i><img src="https://images.emojiterra.com/google/android-nougat/512px/1f477-2642.png" width="150px" alt=""></i>
                                                    </div>
                                                    <div class="testimonial-content">
                                                        <ul class="stars">
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                            <li><i class="fa fa-star"></i></li>
                                                        </ul>
                                                        <h4>Unorganised sectors</h4>
                                                        <p>“Relief for migrants! Indian Railways’ Shramik Special trains to run with full capacity; have up to 3 stoppages.”</p>
                                                        <span>View</span>
                                                    </div>
                                                </div></a>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal fade" id="courses" role="dialog">
   <div class="modal-dialog">

     <!-- Modal content-->
     <div class="modal-content">
       <div class="modal-header">
         <p align=left><font color="blue" size=+1>Online  Courses</font></p>
         <button type="button" class="close" data-dismiss="modal">&times;</button>
       </div>
       <div class="modal-body">
    <div class="form-group">
      <input type="search" id="key" class="form-control" style="margin: 10px;" placeholder="Search for courses">
      <input type="button" id="search" class="btn btn-success" style="padding:5px;width: 25%;float:right;" value="Search" onclick="loadDoc();">

<br><br>

<table id="course_table" class="table">

</table>
      <br>
</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="counselling" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>Apply for Counselling</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">
       <input type="button" id="counsellingsubmit" class="btn btn-success" style="padding:5px;width: 100%;float:right;" value="Submit Form" onclick="counsellingform();">
<br><br>
     <form>
  <div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
    <input id="counssub" type="text" class="form-control" name="email" placeholder="Subject">
  </div><br>
  <div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
    <input id="counsdesc" type="text" class="form-control" name="email" style="height:200px;" placeholder="Description">
  </div><br>
  <br>

</form>

  <br>
</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="docounselling" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>Do Counselling</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">
       <br><br>

<table id="docounsellingtable" class="table">
<tr>
<th>Users</th><th>details</th><th></th>
</tr>
</table>
  <br>
</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="assignwork" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>Assign Work</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">
       <input type="button" id="search" class="btn btn-success" style="padding:5px;width: 100%;float:right;" value="Submit Work" onclick="assign();">
<br><br>
     <form>
  <div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
    <input id="work_title" type="text" class="form-control" name="email" placeholder="Work title">
  </div><br>
  <div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
    <input id="work_desc" type="text" class="form-control" name="email" style="height:200px;" placeholder="Work description">
  </div><br>
  <div class="input-group">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
    <input id="emails" type="email" class="form-control" name="password" placeholder="Enter emails of volunteers">
      <input type="button" id="search" class="btn btn-success" style="padding:5px;width: 25%;float:right;" value="Add" onclick="add_workers(document.getElementById('emails').value)">
  </div>
  <br>

</form>
<br>
<br>

<table id="assign_work" class="table">
<tr>
<th>Name</th><th>Role</th><th>Phone</th>
</tr>
</table>
  <br>
</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="collectmaterial" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>Material Collection</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">
     <form>
    <b>  <font color="#555555">Collect/Supply Relief materials</font></b>
       <div id="materialmap" style="width:100%;height:400px;display:block;"></div>
       <br>

  <div class="input-group" id="addmaterial">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
    <input id="materialname" type="text" class="form-control" name="password" placeholder="Enter material name">
      <input type="button" id="search" class="btn btn-success" style="padding:5px;width: 25%;float:right;" value="Add" onclick="add_material(document.getElementById('materialname').value)">
  </div><br><br>
  <div class="input-group" id="insupply" style="display:none;">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
     <p><font size=+1>In Supply</font></p><br>
  </div>
</form>
<table id="materialtable" class="table">
<tr>
<th>Materials</th><th></th>
</tr>
</table>
  <br>
</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="food" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>Isolation food supply</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">
    <b> <font color="#555555">Revised guidelines for Home Isolation of very mild/pre-symptomatic COVID-19 cases</font></b>
   <br>
   <a href="https://www.mohfw.gov.in/pdf/RevisedguidelinesforHomeIsolationofverymildpresymptomaticCOVID19cases10May2020.pdf"><p style="float:right;">View more</p></a>
<br><br>      <b> <font color="#333333">Home Isolation of very mild/pre-symptomatic COVID-19 cases</font></b>
<font color="#555555"> You must self-isolate if you or anyone else in your household have coronavirus symptoms:
 a temperature of more than 37.8C (100F) 
 OR, a new and persistent cough - this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual)
 OR, anosmia – this is the loss of or a change in your normal sense of smell. It can also affect your sense of taste as the two are closely linked</font>
     <form>
       <br><b>  <font color="#555555">Request/Supply Food materials</font></b>
       <div id="foodmap" style="width:100%;height:400px;display:block;"></div>
       <br>

  <div class="input-group" id="addfoodmaterial">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
    <input id="materialname1" type="text" class="form-control" name="password" placeholder="Enter item name">
      <input type="button" id="search" class="btn btn-success" style="padding:5px;width: 25%;float:right;" value="Add" onclick="add_foodmaterial(document.getElementById('materialname1').value)">
  </div><br><br>
  <div class="input-group" id="inrequest" style="display:none;">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
     <p><font size=+1>Requests</font></p><br>
  </div>
</form>
<table id="foodtable" class="table">
<tr>
</tr>
</table>
  <br>
</div>
</div>
</div>
</div>
</div>


<div class="modal fade" id="orphan" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>Orphan and Vulnerable</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">
  <b>   <font color="#333333" size=+1>COVID-19: vulnerable and high risk groups</font><br></b>
     <font color="#555555">COVID-19 is often more severe in people who are older than 60 years or who have health conditions like lung or heart disease, diabetes or conditions that affect their immune system. If you’re at high risk, know what to do, and take the right actions now to protect yourself.​ If you’re not at high risk, do your part to prevent the spread of coronavirus to those who are.</font>
<br>
<a href="https://drive.google.com/file/d/1OyzDh6IXDVn4DIpcVwL3SnhAy2y6fHYx/view?usp=sharing"><p style="float:right;">View more</p></a>
     <form>
       <br><b>  <font color="#555555">Request/Supply Relief materias for Orphans</font></b>
       <div id="orphanmap" style="width:100%;height:400px;display:block;"></div>
       <br>

  <div class="input-group" id="addorphanmaterial">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
    <input id="materialname2" type="text" class="form-control" name="password" placeholder="Enter item name">
      <input type="button" id="search" class="btn btn-success" style="padding:5px;width: 25%;float:right;" value="Add" onclick="add_orphanmaterial(document.getElementById('materialname2').value)">
  </div><br><br>
  <div class="input-group" id="inrequest" style="display:none;">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
     <p><font size=+1>Requests</font></p><br>
  </div>
</form>
<table id="orphantable" class="table">
<tr>
</tr>
</table>
  <br>
</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="sector" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>Unorganised Sector workers</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">
     <font color="#555555">Relief for migrants! Indian Railways’ Shramik Special trains to run with full capacity; have up to 3 stoppages</font>
<br>
  <a href="https://enquiry.indianrail.gov.in/mntes/q?opt=TrainRunning&subOpt=splTrnDtl" class="main-button-slider" style="position: absolute; right: 0;margin:5px;"> Special Trains</a><br>
    <br><br><b>  <font color="#555555">Request/Supply Relief materias for migrants</font></b>
     <form>
       <div id="sectormap" style="width:100%;height:400px;display:block;"></div>
       <br>

  <div class="input-group" id="addsectormaterial">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
    <input id="sectoritem" type="text" class="form-control" name="password" placeholder="Enter item name">
      <input type="button" id="search" class="btn btn-success" style="padding:5px;width: 25%;float:right;" value="Add" onclick="add_sectormaterial(document.getElementById('sectoritem').value);">
  </div><br><br>
  <div class="input-group" id="inrequest" style="display:none;">
    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
     <p><font size=+1>Requests</font></p><br>
  </div>
</form>
<table id="sectortable" class="table">
<tr>
</tr>
</table>
  <br>
</div>
</div>
</div>
</div>
</div>


<div class="modal fade" id="assigned_work" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>Assigned Work</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">

<table class="table">
<th>Work title</th><th style="float:right;">Work description</th></table>
<table id="assigned_work_table" class="table">
</table>
  <br>
</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="to_do" role="dialog">
<div class="modal-dialog">

 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-header">
     <p align=left><font color="blue" size=+1>ToDo Work</font></p>
     <button type="button" class="close" data-dismiss="modal">&times;</button>
   </div>
   <div class="modal-body">

<table class="table">
<th>Work</th><th style="float:right;"></th></table>
<table id="todo_work_table" class="table">

</table>
  <br>
</div>
</div>
</div>
</div>
</div>


    <!-- ***** Footer Start ***** -->

    <div>
      <div class="container" onclick=" var win = window.open('https://drive.google.com/file/d/1GPoaMCIwbUdd3XDCzHnY_HiP7p2dVJ4x/view?usp=sharing', '_blank'); win.focus();">
    <div class="card" style="width:100%;border-radius: 25px;background-color: #FBFFD5;">

    <div class="card-body">
      <center><img src="https://www.pngmart.com/files/10/FAQ-Transparent-Background.png" width="250px"></center>
        <h5 style="float:right;">( ENGLISH )</h5>
    </div>
  </div>
    </div>
    <br>
    <div class="container" onclick=" var win = window.open('https://drive.google.com/file/d/1A0mY4oMMoSMY5IeuhtKTWVvTkkdOy7lf/view?usp=sharing', '_blank'); win.focus();">
  <div class="card" style="width:100%;border-radius: 25px;background-color: #F2F8FF;">

  <div class="card-body">
    <center><img src="https://www.pngmart.com/files/10/FAQ-Transparent-PNG.png" width="200px"></center>
      <h5 style="float:right;">( HINDI )</h5>
  </div>
</div>
  </div>
    </div>

<center>
    <div>
      <div class="container">
    <div class="card" id="card2" style="width:100%;margin-top: 25px;border-radius: 25px;padding:20px;">
      <img src="https://www.businessupturn.com/wp-content/uploads/2020/06/kalaignarseithigal_2020-04_f64ce622-c4f3-4f31-b737-d3686d5988d9_vikatan_2020_03_9d3441d4_b8ad_42fa_b6ac_bf69a7ced2bc_pm_cares.jpg" width=100% style="padding:20px;">
      <button type="button" onclick="window.open('https://www.pmcares.gov.in/en/web/contribution/donate_india', '_blank').focus();" class="form-control" style="width:100%;" name="button"><b>DONATE VIA PM CARE WEBSITE</b></button>
    </div>
  </div>
    </div>
  </center>
<br><br><br>
<center>
<div class="container">
<div class="card" id="card1" style="width:100%;border-radius: 25px;">
      <h6 style="margin:10px;" onclick="var x=document.getElementById('imp_link');if(x.style.display=='none'){x.style.display='block'}else{x.style.display='none'}"><font color="#333333" size=+1>Important Links:- <br>(click to expand)</font></h6>
      <div id="imp_link" style="display:none;">

<center>
      <div class="container">
    <div class="card" style="width:90%;padding:5px;">
    <img class="card-img-top" src="https://www.deccanherald.com/sites/dh/files/article_images/2020/05/19/mygov%20fb-1992559706-1577598644.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <a href="#" class="btn btn-primary">Visit site</a>
    </div>
  </div>
    </div>
    <div class="container">
  <div class="card" style="width:90%;padding:5px;">
  <img class="card-img-top" src="https://healthyindiachronicle.in/wp-content/uploads/2017/08/nhp.jpg" alt="Card image" style="width:100%">
  <div class="card-body">
    <a href="#" class="btn btn-primary">Visit site</a>
  </div>
</div>
  </div>
  <div class="container">
<div class="card" style="width:90%;padding:5px;">
<img class="card-img-top" src="https://www.ngoregistration.org/wp-content/uploads/2014/07/ministry-and-health-family-welfare.png" alt="Card image" style="width:100%">
<div class="card-body">
  <a href="#" class="btn btn-primary">Visit site</a>
</div>
</div>
</div>
<div class="container">
<div class="card" style="width:90%;padding:5px;">
<img class="card-img-top" src="https://img.dtnext.in/Articles/2019/Dec/201912131923106402_ICMR-issues-guidelines-for-gene-therapy-in-India_SECVPF.gif" alt="Card image" style="width:100%">
<div class="card-body">
<a href="#" class="btn btn-primary">Visit site</a>
</div>
</div>
</div>
<div class="container">
<div class="card" style="width:90%;padding:5px;">
<img class="card-img-top" src="https://cdn1.byjus.com/wp-content/uploads/2015/11/national-rural-health-mission2.png" alt="Card image" style="width:100%">
<div class="card-body">
<a href="#" class="btn btn-primary">Visit site</a>
</div>
</div>
</div>
</center>
</div></div>
</div>
</center>
    <footer id="contact-us">
        <div class="container">
            <div class="footer-content">
                <div class="row">
                    <!-- ***** Contact Form Start ***** -->
                    <div class="col-lg-6 col-md-12 col-sm-12">
                      <div class="contact-form">
                          <form id="contact" action="" method="post">
                            <h6 align="left">Send Email to ncov2019@gov.in</h6>
                            <br>
                              <div class="row">
                                  <div class="col-md-6 col-sm-12">
                                      <fieldset>
                                          <input name="name" type="text" id="subject" placeholder="Subject" required=""
                                              style="background-color: rgba(250,250,250,0.3);">
                                      </fieldset>
                                  </div>

                                  <div class="col-lg-12">
                                      <fieldset>
                                          <textarea name="message" rows="6" id="message" placeholder="Your Message"
                                              required="" style="background-color: rgba(250,250,250,0.3);"></textarea>
                                      </fieldset>
                                  </div>
                                  <div class="col-lg-12">
                                      <fieldset>
                                          <button  class="main-button" type="button" onclick="enquiry()">Send Message
                                              Now</button>
                                      </fieldset>
                                  </div>
                              </div>
                          </form>
                      </div>
                    </div>
       <!-- ***** Contact Form End ***** -->
                    <div class="right-content col-lg-6 col-md-12 col-sm-12" id="about-us">
                        <h2>More About <em>COVID-19-RELIEF</em></h2>
                        <p><b><em>COVID-19-RELIEF </em></b> is a mobile application developed to connect and coordinate essential health and various services with the people of India to fight against COVID-19. The App is aimed at building a community to help and coordinate  various services and sectors, particularly the Department of Health, in proactively reaching out to and informing the users of the app regarding risks, best practices and relevant updates of COVID-19.
</p>

                        <ul class="social">
                            <li><a><i class="fa fa-facebook"></i></a></li>
                            <li><a><i class="fa fa-twitter"></i></a></li>
                            <li><a><i class="fa fa-linkedin"></i></a></li>
                            <li><a><i class="fa fa-rss"></i></a></li>
                            <li><a><i class="fa fa-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="sub-footer">
                        <p>Copyright &copy; 2020 COVID-19-RELIEF

                        | Designed by <a rel="nofollow" href="#">SHRIRAM G</a></p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  <!-- Add a container for reCaptcha -->
  <div id="recaptcha-container"></div>

  <audio id="myAudio">
    <source src="assets/images/alarm.mp3" type="audio/ogg">
    <source src="horse.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
    <!-- jQuery -->
    <script src="assets/js/jquery-2.1.0.min.js"></script>

    <!-- Bootstrap -->
    <script src="assets/js/popper.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>

    <!-- Plugins -->
    <script src="assets/js/owl-carousel.js"></script>
    <script src="assets/js/scrollreveal.min.js"></script>
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>
    <script src="assets/js/imgfix.min.js"></script>

    <!-- Global Init -->
    <script src="assets/js/custom.js"></script>
<?php echo "<script src='assets/js/functions.js'></script>";?>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyzwQZpKtxTMj8bwa7K2rKmj3uISYC61Q&callback=myMap"></script>
</body>
</html>
