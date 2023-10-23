// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
   // console.log("DOM has loaded");
    const thetext = document.getElementById("text").textContent;
   // console.log("now, ", thetext);
    document.getElementById("text").textContent = "This is really cool!";
});

//console.log("This console.log fires before DOMContentLoaded is triggered");