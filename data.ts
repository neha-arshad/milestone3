function generateResume(): void {

const name = (document.getElementById("namefield") as HTMLInputElement).value;

const lastname = (document.getElementById("lastnamefield") as HTMLInputElement).value

const email = (document.getElementById("Emailfield") as HTMLInputElement).value;

const phone = (document.getElementById("contactfield") as HTMLInputElement).value;

const address = (document.getElementById("Addressfield") as HTMLTextAreaElement).value;

const facebook = (document.getElementById("fbfield") as HTMLInputElement).value;

const instagram = (document.getElementById("instafield") as HTMLInputElement).value;

const linkedin = (document.getElementById("linkdinfeild") as HTMLInputElement).value;

const github = (document.getElementById("githubfield") as HTMLInputElement).value;

const education = (document.getElementById("edufield") as HTMLTextAreaElement).value;

const experience = (document.getElementById("expfield") as HTMLTextAreaElement).value;

const skills = (document.getElementById("skillfield") as HTMLTextAreaElement).value;

//resume template
(document.getElementById("firstnametemp") as HTMLElement).innerText = name;

(document.getElementById("lastnametemp") as HTMLElement).innerText = name;

(document.getElementById("emailtemp") as HTMLElement).innerText = email;

(document.getElementById("phonetemp") as HTMLElement).innerText = phone;

(document.getElementById("Addresstemp") as HTMLElement).innerText = address;

(document.getElementById("fbtemp") as HTMLAnchorElement).href = facebook;

(document.getElementById("instatemp") as HTMLAnchorElement).href = instagram;

(document.getElementById("linkdintemp") as HTMLAnchorElement).href = linkedin;

(document.getElementById("githubtemp") as HTMLAnchorElement).href = github;

(document.getElementById("edutemp") as HTMLElement).innerHTML = `<li>${education}</li>`;

(document.getElementById("exptemp") as HTMLElement).innerText = experience;

  (document.getElementById("skiltemp") as HTMLElement).innerHTML = `<li>${skills}</li>`;

// Show resume templete
(document.getElementById("Templet-generate") as HTMLElement).style.display ="block";

//hide form nd button
(document.getElementById("RESUME-GENERATE") as HTMLElement).style.display ="none";

}