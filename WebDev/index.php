<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<!--JAVASCRIPT-->
<script src="scripts/jsModules.js"></script>

<title>Index</title>

	<!--STYLESHEET-->
<link rel="stylesheet" type="text/css" media="screen" href="stylesheet.css">
</head>

<body>

<div id="Container">

	<!--HEADER-->
   <div id="header">
   <h1>Personalised Learning Environment</h1>
   </div>
   
     <!--NAVIGATION-->
<?php 
	include "php_Includes/navigation.php"; 
	?>
   
   <!--CONTENT CONTAINER-->
   <div id="ContentContainer">
   
    <p></p>
   
   <h3>Welcome to PLE!</h3>
   <p>Please view specification below. Use the navigation bar to your left to enter the "Your PLE" section of the website.</p>
   
   <embed src="coursework.pdf" width="100%;" height="1200px;" type='application/pdf'>
   
   <p></p>
   
   <div id="specSpace"> <!--Coursework Specifications to print here-->
   </div>
   
</br>
  </div>
   
   <!--FOOTER-->
   <?php 
	include "php_Includes/footer.php"; 
	?>
   
</div><!--END OF MAIN CONTAINER DIV-->

</body>
</html>