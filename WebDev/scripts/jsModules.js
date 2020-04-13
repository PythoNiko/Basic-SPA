/* ######################### FUNCTIONS FOR INDEX ######################### */
	function loadSpec() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("specSpace").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "ajax_info.txt", true);
	xhttp.send();
}

/* ######################### FUNCTIONS FOR PLE ######################### */

/* -------------------- LESSON 1: JAVASCRIPT BASIC SECTION -------------------- */
	function javascriptOverview(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson1_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson1_Javascript/txt/Lesson1_JavaScriptBasics.txt", true);
	xhttp.send();
}

	function javascriptFurtherReading(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson1_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson1_Javascript/html/Lesson1_JavaScriptBasics.html", true);
	xhttp.send();
}

	function javascriptHelloWorld(){
		var img = $("#testtt").append("<img />").attr('src', "Slide1.jpg").on('load', function() {
            console.log('Test to get this')
            if(!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                alert('broken image!');
            }else{
				$("#imageHere").append(img);
            }
        });
}

/* -------------------- LESSON 2: JQUERY + AJAX + DOM SECTION -------------------- */

	function jQueryF(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson2_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson2_JAD/html/Lesson2_jquery.html", true);
	xhttp.send();
}

	function Ajax(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson2_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson2_JAD/html/Lesson2_ajax.html", true);
	xhttp.send();
}

	function DOM(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson2_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson2_JAD/html/Lesson2_dom.html", true);
	xhttp.send();
}

	function nicktest(){
		console.log("hi");
	}

/* -------------------- LESSON 3: XML SECTION -------------------- */

	function xmlOverview(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson3_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson3_XML/html/Lesson4_xml.html", true);
	xhttp.send();
}

	function xmlFurtherReading(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson3_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson3_XML/html/Lesson4_xml_furtherReading.html", true);
	xhttp.send();
}
	
	function xmlTut(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("txtArea").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson3_XML/xmlJson.tut", true);
	xhttp.send();
}
	
	function xmlMultiChoice(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText);
			var xml = this.responseText,
			xmlDoc = $.parseXML(xml),
			$xml = $(xmlDoc),
			$description = $xml.find("description");
			//console.log($xml)
			var quizDiv = $("<div id='quizDivId'>");
			quizDiv.append( $description.text()).append("<br>").append("<br>");
			$xml.find('mcq').each(function(questionNumber) {
				quizDiv.append(escapeHtml($(this).find("question").text())).append("<br>");
				//quizDiv.append("<ol>");
				var answerPosition = $(this).find("answer").text();
				$(this).find("option").each(function(optionIndex) {
					var optionValue = false;
					if (answerPosition == (optionIndex + 1)) {
						optionValue = true;
					}
				//console.log(optionValue);
				quizDiv.append("<input type='radio' name='" +questionNumber+"' value='" + optionValue + "'>" +  $(this).text() + "<br>");
				//console.log($(this).text());
				//console.log("nnnn", questionNumber)
				// Console logging used for debugging purposes

		});
		quizDiv.append("<br>");

		});
		quizDiv.append("<button type='button' onclick='javascript:scoreQuiz();'>Score</button>");
		$( "#Lesson3_displayContent" ).append(quizDiv);

		}
		};
		xhttp.responseType = "xml";
		xhttp.open("GET", "PLE_Content/Lesson3_XML/xml/mcqs.xml", true);
		xhttp.send();
		}
		
		function scoreQuiz() {
			// result text to display with place holders,
			var resultText = "You answered <b>{numAnswered}</b> questions and got <b>{numACorrect}</b> correct.";

			// use jquery to get number of radio button checked
			var numAnswered = $( "input:radio" ).filter(":checked").length;
			var numCorrect = 0;
			// for each checked radio button, get the value and count which are correct.
			$( "input:radio" ).filter(":checked").each(function(i, item) {
			if (item.value == "true") {
				console.log("in", item.value)
				numCorrect++;
			}
		});

		// Update the results text and display
		$("#quizDivId").append("<br>");
		$("#quizDivId").append(resultText.replace("{numAnswered}", numAnswered).replace("{numACorrect}", numCorrect));
}
  
	// Forces to ignore string literals found within question 3 of XML quiz
	// This will allow to display as normal text
    function escapeHtml(unsafe) {
		return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
	}
   

/* -------------------- LESSON 4: SINGLE PAGE APPLICATION SECTION -------------------- */

	function spaOverview(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson4_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson4_SPA/html/Lesson4_spa_overview.html", true);
	xhttp.send();
}

	function spaFurtherReading(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson4_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson4_SPA/html/Lesson4_spa_furtherReading.html", true);
	xhttp.send();
}

/* -------------------- SPA SLIDESHOW -------------------- */
	$(document).ready(function(){
		$('.next').on('click', function(){
			console.log("clicked");
			var currentImg = $('.active');
			var nextImg = currentImg.next();
		
			if(nextImg.length){
				currentImg.removeClass('active').css('z-index', -10);
				nextImg.addClass('active').css('z-index', 10);
			}
		});
	
	$('.prev').on('click', function(){
		var currentImg = $('.active');
		var prevImg = currentImg.prev();
		
		if(prevImg.length){
			currentImg.removeClass('active').css('z-index', -10);
			prevImg.addClass('active').css('z-index', 10);
		}
	});
});


/* -------------------- LESSON 5: DATA TYPE SECTION -------------------- */

	function datatypeOverview(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson5_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson5_DataTypes/html/Lesson5_datatypes_overview.html", true);
	xhttp.send();
}

	function datatypeFurtherReading(){
		var xhttp = new XMLHttpRequest();
  		xhttp.onreadystatechange = function() {
   		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("Lesson5_displayContent").innerHTML = this.responseText;
		}
	};
	xhttp.open("GET", "PLE_Content/Lesson5_DataTypes/html/Lesson5_datatypes_furtherReading.html", true);
	xhttp.send();
}

/* -------------------- MISCELANIOUS -------------------- */

	function metaSearch(){
		// This will return one object per section
		var spaResourceMetaInfo =
		[
			// Further tags could be added to return a larger set of 
			// searchable results within the site
			{ id:1,
			tags:['js', 'javascript'],
			togglerId:'toggleJS'
			},
			{ id:2,
			tags:['jquery', 'ajax', 'dom'],
			togglerId:'toggleJAD'
			},
			{ id:3,
			tags:['xml'],
			togglerId:'toggleXML'
			},
			{ id:4,
			tags:['html', 'spa'],
			togglerId:'toggleSAP'
			},
			{ id:5,
			tags:['data'],
			togglerId:'toggleDataTypes'
			},
			{ id:6,
			tags:['tut'],
			togglerId:'toggleTuts'
			}
		];

		searchTerm = document.getElementById("metaSearch").value.toLowerCase(); // Case sensitive
		console.log("searchterm", searchTerm);
		for (var i=0; i<spaResourceMetaInfo.length; i++) {
			if(spaResourceMetaInfo[i].tags.indexOf(searchTerm) > -1) {
				// If search term matches it will expand the relevant tab.
				// Clicking again will close the tab - something which could be improved
				toggleText(spaResourceMetaInfo[i].togglerId);
			break;
			}
		}
	}

	// Function to create a new topic - Not relevant for now
	function newTopic(){
		// Capture user input
		var newTopicName = prompt("New Topic:", "New Topic e.g. 'HTML5'");
        document.getElementById("NewTopic0").innerHTML = newTopicName;
		var but = document.createElement("button");
		$("#NewTopic").append(but);
		$("#NewTopic").append("<div>Add your new content here</div>")
		$("#NewTopic").append("<button >Upload Content</button>")
		$("#NewTopic").append("<p id='NewData'>Your content</p>")
		$("#NewTopic").append("<p>Your content</p>")
		$("#NewTopic").append("<p></p>")
		$("#NewTopic").append("<p></p>")
	}