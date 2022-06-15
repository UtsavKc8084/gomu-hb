`use strict`;
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let senEmail = document.getElementById("senEmail").value;
  let message = document.getElementById("message").value;
  form.reset();
  sendEmail(name, senEmail, message);
});
function sendEmail(name, senEmail, message) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kcutsav8084@gmail.com",
    Password: "F39D59A2683B107A3ED2ACA05D60F8A89D9E",
    From: "kcutsav8084@gmail.com",
    To: senEmail,
    Subject: `Your Wish My Love`,
    Body: `1)${name}
           2)${senEmail}
           3)${message}
            `,
  }).then(
    (message) => alert(message)
    // alert(
    //   `Happy Birthday Gomu 💘. I wish your every dream come true and alive in these year. Your all obastacle goes far away From your life. And I will be your smile of your face and love of your life. Every day is a new day but today is the specal day for us because it direct us towards our destiny in where we want to see eachother. I love 💘 you a lot gomu and i want to live my whole life with you so for the reason i will do works that make me your man and help us to move ahead togther with lots of love 💘. Happy Birthday Gomu 💘{Love Of My Life}`
    // )
  );
}
