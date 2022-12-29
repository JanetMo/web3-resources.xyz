// function to send the email
function sendMessage() {
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
        document.getElementById("text").value,
    }).then((message) => {
      console.log(`Email send result: ${message}`);
      if (message === "OK") {
        document.getElementById("submitresult").innerText =
          "Your message has been forwarded. Thank you!";
      } else {
        document.getElementById("submitresult").innerText =
          "Your message could not be sent. Please try again!";
      }
    });
  } catch (e) {
    console.error(`Error sending email: ${message}`);
    document.getElementById("submitresult").innerText =
      "There was an error sending your message. Please contact the administrator";
  }
}
