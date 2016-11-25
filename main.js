
$(document).ready(function () {

	// $('#send').click(function() {
	// 	var msg = $('<p>')
	// 	msg = $(.userMsg).val();
	// 	$('.chatbox').append(msg)
	// })




	$('#getQuote').click(function() {
	  $.ajax({
	      method: "GET",
	      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en",
	      dataType: "jsonp",
	    })
	});

});

function parseQuote(response) {
	console.log(response);
	$('.chatbox').append("<div>"+ response.quoteText + "</div> ");
	$('.chatbox').append("<div>"+ response.quoteAuthor + "</div> " + "<p></p>");
};
