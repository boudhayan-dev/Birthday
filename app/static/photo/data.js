var data = [];

var dataStr = "mix1<br>\
<br>\
Photographer Mix<br>\
<br>\
<br>\
mix2<br>\
<br>\
Sleeping Mix<br>\
<br>\
<br>\
mix3<br>\
<br>\
Model Mix<br>\
<br>\
<br>\
mix4<br>\
<br>\
Angry Mix<br>\
<br>\
<br>\
mix5<br>\
<br>\
Happy Mix<br>\
<br>\
<br>\
mix6<br>\
<br>\
Pretty Mix<br>\
<br>\
<br>\
mix7<br>\
<br>\
Gangster Mix<br>\
<br>\
<br>\
mix8<br>\
<br>\
Sunflower Mix<br>\
<br>\
<br>\
mix9<br>\
<br>\
Wow Mix<br>\
<br>\
<br>\
mix10<br>\
<br>\
Scary Mix<br>\
<br>\
<br>\
mix11<br>\
<br>\
Rajnikanth Mix<br>\
<br>\
<br>\
mix12<br>\
<br>\
Fat Mix<br>\
<br>\
<br>\
"
  


var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length-1; i++){
  var c = d[i].split("<br><br>");
  //console.log((c[0].split('.'))[1]);
  data.push({
    img: c[0]+ ".jpg",
    caption: c[1],
    desc: c[1]
  });
  //console.log(c[1]);
}

// console.log(data);


// "1.DeathNote<br>\
// <br>\
// Japanese Cartoon<br>\
// <br>\
// <br>\
// 2.FateUBW<br>\
// <br>\
// Japanese Cartoon<br>\
// <br>\
// <br>\
// 3.FateZero<br>\
// <br>\
// Japanese Cartoon<br>\
// <br>\
// <br>\
// 4.GoneGirl<br>\
// <br>\
// American Movie<br>\
// <br>\
// <br>\
// 5.Shameless<br>\
// <br>\
// American TV Series<br>\
// <br>\
// <br>\
// 6.theDarkKnight<br>\
// <br>\
// American Movie<br>\
// <br>\
// <br>\
// 7.ToyStory<br>\
// <br>\
// American Movie<br>\
// "