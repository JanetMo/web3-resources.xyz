// function isEmail(sendermail) {
//   let regex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//   return regex.test(String(senderemail).toLowerCase());
// }

// function ValidateEmail(sendermail) {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sendermail.value)) {
//     return true;
//   }
//   alert("You have entered an invalid email address!");
//   return false;
// }

// function to send the email
function sendMessage(event) {
  const sendermail = document.getElementById("senderemail");
  console.log(sendermail.value);
  if (sendermail.value == "" || sendermail.value == null) {
    document.getElementById("submitresult").innerHTML =
      "<span style='color:red'>Please provide an e-mail address";
    event.preventDefault();
    return;
  }

  // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(sendermail.value)) {
  //   return true;
  // }
  // document.getElementById("submitresult").innerHTML =
  //   "<span style='color:red'>Please provide a valid e-mail address";
  // event.preventDefault();
  // return;

  if (document.getElementById("checkbox").checked === false) {
    document.getElementById("submitresult").innerHTML =
      "<span style='color:red'>Please confirm the checkbox";
    event.preventDefault();
    return;
  }

  try {
    Email.send({
      SecureToken: "4bef7b02-0f08-4f19-a770-a77e63278246",
      To: "web3-resources@web.de",
      From: "web3-resources@web.de",
      Subject: "web3 resources contact form",
      Body:
        "Name: " +
        document.getElementById("sendername").value +
        "<br> E-mail: " +
        document.getElementById("senderemail").value +
        "<br> Category: " +
        document.getElementById("category").value +
        "<br> Resource: " +
        document.getElementById("resource").value +
        "<br> Text: " +
        document.getElementById("text").value +
        "<br> Checkbox: " +
        document.getElementById("checkbox").checked,
    }).then((message) => {
      console.log(`Email send result: ${message}`);
      if (message === "OK") {
        document.getElementById("submitresult").innerHTML =
          "<span style='color:wheat'>Your message has been forwarded. Thank you!";
      } else {
        document.getElementById("submitresult").innerHTML =
          "<span style='color:wheat'>Your message could not be sent. Please try again!";
      }
    });
  } catch (e) {
    console.error(`Error sending email: ${message}`);
    document.getElementById("submitresult").innerText =
      "<span style='color:red'>There was an error sending your message. Please contact the administrator";
  }
  document.getElementById("form").reset();
  return false;
}
