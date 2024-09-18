function generateResume() {
    var name = document.getElementById("namefield").value;
    var lastname = document.getElementById("lastnamefield").value;
    var email = document.getElementById("Emailfield").value;
    var phone = document.getElementById("contactfield").value;
    var address = document.getElementById("Addressfield").value;
    var facebook = document.getElementById("fbfield").value;
    var instagram = document.getElementById("instafield").value;
    var linkedin = document.getElementById("linkdinfeild").value;
    var github = document.getElementById("githubfield").value;
    var education = document.getElementById("edufield").value;
    var experience = document.getElementById("expfield").value;
    var skills = document.getElementById("skillfield").value;
    //resume template
    document.getElementById("firstnametemp").innerText = name;
    document.getElementById("lastnametemp").innerText = name;
    document.getElementById("emailtemp").innerText = email;
    document.getElementById("phonetemp").innerText = phone;
    document.getElementById("Addresstemp").innerText = address;
    document.getElementById("fbtemp").href = facebook;
    document.getElementById("instatemp").href = instagram;
    document.getElementById("linkdintemp").href = linkedin;
    document.getElementById("githubtemp").href = github;
    document.getElementById("edutemp").innerHTML = "<li>".concat(education, "</li>");
    document.getElementById("exptemp").innerText = experience;
    document.getElementById("skiltemp").innerHTML = "<li>".concat(skills, "</li>");
    // Show the resume template and hide the input form
    document.getElementById("Templet-generate").style.display = "block";
    document.getElementById("RESUME-GENERATE").style.display = "none";
}
