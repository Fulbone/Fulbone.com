var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = "<p>" + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + "</p>";
var quote = `<p><i>
"The prophecy is true"<br>~ Morpheus
</i></p>`;
document.getElementById("quote-text").innerHTML = quote;
