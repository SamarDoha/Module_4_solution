   
(function(name)
  {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i<names.length; i++)
    {
      var firstLetter = names[i].charAt(0).toLowerCase();
    var res = names[i].charAt(0).toLowerCase();;
    if (res==='j')
    {
      byeSpeaker.speak(names[i]);
    }
    else
    {
      helloSpeaker.speak(names[i]);
    }
    }
  }
)()