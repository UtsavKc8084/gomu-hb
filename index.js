`use strict`;
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let recEmail = document.querySelector("#recEmail").value;
  let senEmail = document.querySelector("#senEmail").value;
  let message = document.querySelector("#message").value;
  document.querySelector(".contact-form").reset();
  sendEmail(name, recEmail, sendEmail, message);
});
function sendEmail(name, recEmail, senEmail, message) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "vastu8084@gmail.com",
    Password: "A4B578C8EBEB70C6FCDABCFE3E3F5F4E41AF",
    To: recEmail,
    From: senEmail,
    Subject: `Your Wish My Love`,
    Body: `LoveName:${name}
                 EmailToLove:${recEmail}
                 EmailFromLove:${senEmail}
                 YourWish:${message}`,
  }).then((message) => alert(message));
  // }).then((message) =>
  //   alert(
  //     `Happy Birthday Gomu 💘. I wish your every dream come true and alive in these year. Your all obastacle goes far away From your life. And I will be your smile of your face and love of your life. Every day is a new day but today is the specal day for us because it direct us towards our destiny in where we want to see eachother. I love 💘 you a lot gomu and i want to live my whole life with you so for the reason i will do works that make me your man and help us to move ahead togther with lots of love 💘. Happy Birthday Gomu 💘{Love Of My Life}`
  //   )
  // );
}
