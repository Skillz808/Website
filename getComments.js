var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    var messages = document.getElementById("messages");
    // loop through messages and add them to the page
    for (var i = 0; i < data.length; i++) {
      var entry = document.createElement("div");
      entry.classList.add("entrysq");
      var paragraph = document.createElement("p");
      var name = document.createElement("strong");
      name.textContent = data[i].name + ": ";
      paragraph.appendChild(name);
      paragraph.appendChild(document.createTextNode(data[i].message));
      entry.appendChild(paragraph);
      messages.appendChild(entry);
    }
  }
};
xhr.send();

//I pretty much stole this from https://articexploit.xyz:8443... please don't get mad at me :(