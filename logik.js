  var div = document.getElementById('hello');
  var mark = document.getElementById('helloMark');
  var text = document.getElementById('text');

function showDiv(){
  div.style.display="inline-block";
  div.style.width="10px";
  div.style.height="10px";
  div.style.marginTop="20%";
};

function makeBigger(){
  div.style.width="300px";
  div.style.height="300px";
  mark.style.width="200px";
  mark.style.height="200px";
  mark.style.borderRadius="200px"
  mark.style.display="inline-block";
  mark.style.margin="50px";

}

function makeWider(){
    div.style.width="610px";
    mark.style.display="inline-block";
    // mark.style.width="200px";
    // mark.style.height="200px";
    // mark.style.borderRadius="200px";
    // mark.style.margin="50px";
}

function makeWiderAgaine(){
    div.style.width="610px";
    div.style.borderRadius="10px";
    mark.style.display="inline-block";
    mark.style.width="20px";
    mark.style.height="20px";
    mark.style.margin="50px";
}


function makeHighter(){
    div.style.height="610px";
    div.style.marginTop="3%";
}

function showText(){
  text.style.display="inline-block";
}

function hideText(){
  text.style.display="none";

}

function makeTextSlimmer(){
  text.style.width="1px";
  mark.style.width="100px";
  text.style.color="white";

}

function makeTextFatter(){
  text.style.width="400px";
    text.style.color="black";
}

function makeMarkSlimmer(){
  mark.style.width="400px";
  mark.style.height="2px";

}

function insertTextAboutMe(){
  text.innerText="I am a beginner web-developer and am engaged in the creation of interactive web applications and sites.";
  text.style.top="100px";
  text.style.fontSize="20pt";
  text.style.width="400px";
}

function insertTextMyEducation(){
    text.innerText="April 2019 – IT Education Academy ITEA Kharkiv «Course JavaScript basic», 2013 - Oracle IT Academy «Course Java Core»";
}

function insertHTMLMyScills(){
  div.style.width="800px";
  text.style.top="-50px";
  text.style.width="700px";
  text.innerHTML="Skills:<br>Understanding the principles of <b>OOP</b>;<br>Practical knowledge of using HTML and <b>CSS</b>;<br>Practical knowledge of using <b>Java Script, Emmet, GIT</b>;<br>Practical knowledge of using <b>MySql, Denwer</b>;<br>Basic knowledge of using <b>PHP</b>;<br>English – Pre-intermediate<br>Ukrainian - Native"
}

function insertHTMLMyTools(){
  div.style.width="600px";
  text.style.top="-70px";
  text.style.width="400px";
  text.innerHTML="MY TOOLS:<br>WebStorm<br>Atom<br>Sublime Text<br>GIT<br>OS – Windows<br>database-MySQL<br>"
}

function insertHTMLMyHobbies(){
  div.style.width="500px";
  text.style.top="-70px";
  text.style.width="400px";
  text.innerHTML="MY HOBBIES:<br>My hobbies are music and motorbikes.<br> I love to collect and customize <br>all the mechanics in them."
}

function insertHTMLMyContacts(){
  div.style.width="500px";
  text.style.top="-70px";
  text.style.width="400px";
  text.innerHTML="MY CONTACTS<hr>:<br>Ukraine, Kharkiv<br>10th of January 1985<br>+380(67)9014837<br>shima3d@gmail.com<br><a href=''https://www.linkedin.com/in игорьшиманский-15912a162'><img src='linkedIn.png' width='30px' alt=''></a><br><a href='https://github.com/shimansky'><img src='gitHub.png' width='30px' alt=''></a><br> <a href='cv Igor Shimanskyi Trainee JS.pdf'>Download cv as PDF</a>"

}





setTimeout(showDiv, 1000,);
setTimeout(makeBigger, 2000);
setTimeout(makeWider, 2500);
setTimeout(showText,3000);
setTimeout(hideText,7000);
setTimeout(makeBigger, 7000);
setTimeout(makeHighter, 7500);
setTimeout(makeWiderAgaine, 8000);
setTimeout(insertTextAboutMe, 8000);
setTimeout(showText, 8000);
setTimeout(makeTextSlimmer, 12000);
setTimeout(insertTextMyEducation, 12500);
setTimeout(makeTextFatter, 13000);
setTimeout(makeMarkSlimmer, 17000);
setTimeout(insertHTMLMyScills, 17000);
setTimeout(insertHTMLMyTools, 25000);
setTimeout(insertHTMLMyHobbies, 29000);
setTimeout(insertHTMLMyContacts, 33000);
