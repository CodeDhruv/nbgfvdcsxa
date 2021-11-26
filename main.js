$.getJSON(
  "https://free-quotes-api.herokuapp.com",
  function gotResult (data) {
    console.log(data);

   var quotes = data.quote;
   var author = data.author;

    console.log(quotes);
    console.log(author);

    document.getElementById("quotes").innerHTML = "" + quotes;
    document.getElementById("author").innerHTML = "~ " + author;
    
    var synth = window.speechSynthesis;
    speak_data = quotes;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
  

    
  }
);