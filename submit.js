const FullName = document.getElementById('name');
const EmailAddress = document.getElementById('EmailAddress');
const Subject = document.getElementById('sub');
const Message = document.getElementById('Textarea');

function emailSend() {
    const message = `Full name :${FullName.value}<br> Email :${EmailAddress.value}<br> Message :${Message.value}`

    Email.send({
        SecureToken: "916d9fc6-9f1d-41f1-9705-3df2c5207b17",
        To: 'amir.m.s1010@gmail.com',
        From: "amir.m.s1010@gmail.com",
        Subject: Subject.value,
        Body: message
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    for (const item of items) {
        if (item.value == '') {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != '') {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const EmailErrorMS = document.querySelector(".errorMs.email");

    if (!EmailAddress.value.match(emailRegex)) {
        EmailAddress.classList.add("error");
        EmailAddress.parentElement.classList.add("error");

        if (EmailAddress.value != '') {
            EmailErrorMS.innerText = "Enter a valid email address";
        }
        else {
            EmailErrorMS.innerText = "Email address can't be blank";
        }
    }
    else {
        EmailAddress.classList.remove("error");
        EmailAddress.parentElement.classList.remove("error");
    }
}

document.querySelector('#emailSender').addEventListener('click', (e) => {
    checkInputs();
    e.preventDefault();

    if (!FullName.classList.contains('error') && !EmailAddress.classList.contains('error') && !Subject.classList.contains('error') && !Message.classList.contains('error')) {
        emailSend();
    }
});