<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device=width, initial-scale= 1.0">
<meta name="keywords" content="JavaScript">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Search</title>

	<!--STYLESHEET-->
<link rel="stylesheet" type="text/css" media="screen" href="stylesheet.css">

	<!--SCRIPTS-->
<script src="scripts/jquery-1.12.4.min.js"></script>
<script src="scripts/jsModules.js"></script>
<script src="scripts/collapse.js"></script>
<script src="http://code.jquery.com/jquery-3.2.1.js"
  integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
  crossorigin="anonymous"></script>

</head>

<body>

<div id="Container">

	<!--HEADER-->
   <div id="header">
   <h1>Your Personalised Learning Environment</h1>
   </div>
   
         <!--NAVIGATION-->
<?php 
	include "php_Includes/navigation.php"; 
	?>
   
   <!--CONTENT CONTAINER-->
   <div id="ContentContainer">
   
   <!--SEARCH BAR DIV-->
   <div id = "SearchBar" style="width: 1100px">
   <!-- <form id="metaSearch" name="search"> -->
   <p>Please use the search bar to find specific topics or use the button below to upload new content to your PLE</p>
          <input id="metaSearch" type="text" placeholder="Keywords: eg. 'HTML5'" name="search">
          <button onClick="javascript:metaSearch()">Search</button>
    <br><br>
    <button onclick="newTopic()">Add New Lesson</button> or
    <button>Modify</button>
   <!-- </form> -->
   </div><!--END OF SEARCH BAR DIV-->
   
   <p>Below you will find some introductory lessons to JavaScript to help get you started. Click on each of the tabs to get the content. To add more please please use the upload function above 
		which will allow you to add further content of your own choosing to your Personal Learning Environment, or or edit anything please use the modify button to edit or remove content as you see fit.</p>
   
   <p></p>
   
	<!--									LESSON 1: JAVASCRIPT								-->
   
   <div id="toggler" onclick="toggleText('toggleJS');"> <h3> Lesson 1: JavaScript Basics </h3></div>
   <div id="toggleJS" class="togglerContent"> 
   <p>The following sections will introduce you to the basics of JavaScript and discuss some of the main features of the language.</p>
   
    <button onclick="javascriptOverview()">Overview</button>
	<button onclick="javascriptFurtherReading()">Further Reading</button>
   
	<p></p>

	<div id="Lesson1_displayContent">
	Click the various buttons above to view content and material about JavaScript!
		<div id="imageHere">
		
		</div>
	</div>
   </div>
   
	<!--									LESSON 2: JQUERY AJAX + DOM								-->
   
   <div id="toggler" onClick="toggleText('toggleJAD');"> <h3> Lesson 2: jQuery, Ajax & DOM </h3></div>
   <div id="toggleJAD" class="togglerContent"> 
   <p>The following section will look into JQuery, Ajax & DOM.</p>
   
	<button onclick="jQueryF()">jQuery</button>
	<button onclick="Ajax()">Ajax</button>
	<button onclick="DOM()">DOM</button>
	<button onclick="nicktest()">JSON</button>
   
	<p></p>

		<div id="Lesson2_displayContent">
		Click the various buttons above to view content and material about jQuery, Ajax and the DOM!
		
			<div id="pdfData" style="display: none;">
				<button class="prev2">Previous</button>
				<div></div>
				<button class="next2">Next</button>
			</div>
		
		</div>
	
	
   </div>
   
	<!--									LESSON 3: XML								-->
   
   <div id="toggler" onClick="toggleText('toggleXML');"> <h3> Lesson 3: XML </h3></div>
   <div id="toggleXML" class="togglerContent"> 
   <p>The following section will look into XML.</p>
   
	<button onclick="xmlOverview()">Overview</button>
	<button onclick="xmlFurtherReading()">Further Reading</button>
	<button onclick="xmlTut()">XML + JSON Tutorial</button>
	<button onclick="xmlMultiChoice()">Multiple Choice Quiz</button>
	
	<p></p>

	<div id="Lesson3_displayContent">
	Click the various buttons above to view content and material about XML!
	</div>
	
	<h4>XML + JSON Tutorial</h4>
	<textarea id="txtArea">
	Click the XML + JSON Tutorial button to learn more here!
	</textarea>
	
   </div>
   
	<!--									LESSON 4: SINGLE PAGE APPLICATION								-->
   
   <div id="toggler" onClick="toggleText('toggleSAP');"> <h3> Lesson 4: Single Page Applications </h3></div>
   <div id="toggleSAP" class="togglerContent">
   <p>The following section will look into Single Page Applications.</p>
   
	<button onclick="spaOverview()">Overview</button>
	<button onclick="spaFurtherReading()">Further Reading</button>
	
	<p></p>

	<div id="Lesson4_displayContent">
	Click the various buttons above to view content and material about SPA's!
	</div>
	
	<div id="slideshow" class="container">
		<h4>Single Page Application Lecture Slides</h4>
		
			<div class="slider-outer">
				<button class="prev" alt="Prev">Previous</button>
				<div class="slider-inner">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide1.jpg" class="active">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide2.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide3.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide4.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide5.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide6.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide7.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide8.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide9.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide10.jpg">
					<img src="PLE_Content/Lesson4_SPA/jpg/slides/Slide11.jpg">
				</div> <!-- end of slider outer -->
				<button class="next" alt="Next">Next</button>
			</div> <!-- end of slider outer -->
	
	
	</div>

   </div>
   
	<!--									LESSON 1: DATATYPES								-->
   
   <div id="toggler" onClick="toggleText('toggleDataTypes');"> <h3> Lesson 5: Data Types </h3></div>
   <div id="toggleDataTypes" class="togglerContent"> 
   <p>The following section will look into Data Types.</p>
   
	<button onclick="datatypeOverview()">Overview</button>
	<button onclick="datatypeFurtherReading()">Further Reading</button>
	
	<p></p>

	<div id="Lesson5_displayContent">
	Click the various buttons above to view content and material about Data Types!
	</div>
   </div>
   
	<!--									LESSON 6: FURTHER READING								-->
   
    <div id="toggler" onClick="toggleText('toggleTuts');"> <h3> Lesson 6: Further Reading and Tutorials </h3></div>
	<div id="toggleTuts" class="togglerContent"> 
	<p>A list of further learning resources and tutorials to help with learning:</p>
   
	<p><a href="https://developer.mozilla.org/bm/docs/Web/JavaScript">Official Mozilla Documentation</a></p>
	<p><a href="https://www.tutorialspoint.com/javascript/">Tutorials Point: JavaScript</a></p>
	<p><a href="https://www.codecademy.com/learn/introduction-to-javascript">Code Academy</a></p>
	<p><a href="https://www.youtube.com/watch?v=vZBCTc9zHtI">YouTube Totorial</a></p>
	<p><a href="https://stackoverflow.com/tags/javascript/info">Stack Overflow</a></p>
	<p><a href="https://www.w3.org/XML/">XML Documentation</a></p>
	<p><a href="https://www.w3schools.com/html/">w3schools tutorial</a></p>
	<p><a href="https://jquery.com/">jQuery</a></p>
	
	<p></p>
   </br>

   </div>
   
   </div>
   
   </div>
   
  </div><!--END OF CONTENT CONTAINER-->
   
   <!--FOOTER-->
  <?php 
	include "php_Includes/footer.php"; 
	?>
   
</div><!--END OF MAIN CONTAINER DIV-->

</body>
</html>