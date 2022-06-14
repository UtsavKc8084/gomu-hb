`use strict`;
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let recEmail = document.getElementById("recEmail").value;
  let senEmail = document.getElementById("senEmail").value;
  let message = document.getElementById("message").value;
  form.reset();
  sendEmail(name, recEmail, senEmail, message);
});
function sendEmail(name, recEmail, senEmail, message) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vastu8084@gmail.com",
    Password: "453A71B60938B6759CA77655410B3574A798",
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
