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
  let template = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style>
                    * {
                        padding: 0;
                        margin: 0;
                    }
        
                    html,body {
                        background-color: #6E7889;
                        font-family: tahoma, sans-serif;
                        color: #E6EBEE;
                    }
        
                    #card {
                        background-color: #393B45;
                        height: auto;
                        width: 350px;
                        margin: 10vh auto;
                        border-radius: 25px;
                        padding-bottom: 1px;
                        box-shadow: 2px 2px 5px #4069E2;
                    }
        
                    h1 {
                        color: white;
                        text-align: center;
                        width: 100%;
                        background-color: #E6EBEE;
                        border-radius: 25px 25px 0 0;
                        color: #393B45;
                        padding: 30px 0;
                        font-weight: 800;
                        margin: 0;
                    }
        
                    .image-crop {
                        display: block;
                        position: relative;
                        background-color: #E6EBEE;
                        width: 150px;
                        height: 150px;
                        margin: 0 auto;
                        margin-top: 30px;
                        overflow: hidden;
                        border-radius: 50%;
                        box-shadow: 1px 1px 5px #4069E2;
                    }
        
                    #avatar {
                        display: inline;
                        height: 230px;
                        width: auto;
                        margin-left: -34px;
                        src: url('https://png.pngitem.com/pimgs/s/22-223925_female-avatar-female-avatar-no-face-hd-png.png');
                    }
        
                    #bio {
                        display: block;
                        margin: 30px auto;
                        width: 280px;
                        height: auto;
                    }
        
                    #bio p {
                        color: #E6EBEE;
                        font-weight: lighter;
                        font-size: 15px;
                        text-align: justify;
                    }
        
                    #stats {
                        display: flex;
                        flex-direction: row;
                        height: auto;
                        width: 280px;
                        justify-content: space-between;
                        align-items: center;
                        margin: 0 auto;
                        font-weight: 500;
                    }
        
                    .col {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: auto;
                    }
        
                    .stat {
                        font-size: 25px;
                        margin: 0;
                    }
        
                    .label {
                        margin: 0;
                    }
        
                    #buttons {
                        display: flex;
                        margin: 0 auto;
                        justify-content: space-between;
                        width: 280px;
                    }
        
                    button {
                        display: block;
                        position: relative;
                        padding: 10px 0;
                        width: 130px;
                        margin: 30px 0;
                        border-radius: 25px;
                        border: none;
                        font-size: 20px;
                        letter-spacing: 0.2px;
                        font-weight: 500;
                        background-color: #4069E2;
                        color: #E6EBEE;
                    }
        
                    button:focus {
                        display: none;
                    }
        
                    button:hover {
                        transform: scale(1.03);
                        cursor: pointer;
                        transition: all 0.2s ease-in-out;
                    }
        
                    #msg{
                        background-color: #E6EBEE;
                        color: #393B45;
                    }
                </style>
            </head>
            <body>
                <div id="card">
                    <h1>Hey There!!!</h1>
                    <div class="image-crop">
                        <img id="avatar"</img>
                    </div>
                    <div id="bio">
                        <p>{{CONTENT}}</p>
                    </div>
                </div>
            </body>
        </html>        
        `;
  template = template.replace("{{CONTENT}}", message);

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kcutsav8084@gmail.com",
    Password: "F39D59A2683B107A3ED2ACA05D60F8A89D9E",
    From: "kcutsav8084@gmail.com",
    To: senEmail,
    Subject: `Your Wish My Love`,
    Body: template,
  }).then((_) =>
    alert(
      `Happy Birthday Gomu 💘. I wish your every dream come true and alive in these year. Your all obastacle goes far away From your life. And I will be your smile of your face and love of your life. Every day is a new day but today is the specal day for us because it direct us towards our destiny in where we want to see eachother. I love 💘 you a lot gomu and i want to live my whole life with you so for the reason i will do works that make me your man and help us to move ahead togther with lots of love 💘. Happy Birthday Gomu 💘{Love Of My Life}`
    )
  );
}
