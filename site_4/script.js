   
(function(name)
  {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i<names.length; i++)
    {
    var res = names[i].charAt(0);
    if (res=='J')
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