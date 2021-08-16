
$(document).ready(function (){
    $.getJSON('https://api.ipify.org?format=json', function(data){
        console.log(data.ip);
        let visited = data.ip;
        let dt = new Date();
        let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        console.log(dt);
        console.log(time);


        const user= {
            userId : Math.random().toString(36).substr(2, 9),
            userIP : data.ip,
            userVisitedDate: dt,
            userVisitedTime: time
        }

        const setUserRecord = async (data) => {
            if (data){
                let existingEntries = JSON.parse(localStorage.getItem("userRecords"));
                if(existingEntries == null) existingEntries = [];
                localStorage.setItem("userRecords", JSON.stringify(data));
                existingEntries.push(data);
                localStorage.setItem("userRecords", JSON.stringify(existingEntries));

                existingEntries.forEach(function(item){
                    console.log(item);
                    $('tbody').append('<tr><td>'+item.userIP+'</td><td>'+item["userVisitedDate"]+'</td><td>'+item.userVisitedTime+'</td></tr>')
                });
            }
        }
        setUserRecord(user).then(res => console.log(res))
    });

})




function formValidation() {
    var fname = document.getElementById('firstName').value;
    var lname = document.getElementById('lastName').value;
    var pnumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('e-mail').value;
    var text = "";
    if (FirstName(fname)) {
    }
    if (LastName(lname)) {
    }
    if (PhoneNumber(pnumber)) {
    }
    if (Email(email)) {
    }

    return false;
}

/*first name input validation*/
function FirstName(fname) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if ( fname =="" || fname.match(letters)) {
        text="";
        message[0].innerHTML = text;
        return true;
    }

    else {
        text="First name should contain only letters";
        message[0].innerHTML = text;
        return false;
    }
}

/*last name input validation*/
function  LastName(lname) {
    var message = document.getElementsByClassName("error-message");
    var letters = /^[A-Za-z]+$/;
    if ( lname =="" || lname.match(letters)) {
        text="";
        message[1].innerHTML = text;
        return true;
    }

    else {
        text="Last name should contain only letters";
        message[1].innerHTML = text;
        return false;
    }
}

/*email address input validation*/
function Email(email) {
    var message = document.getElementsByClassName("error-message");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if ( email =="" || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
        text="";
        message[2].innerHTML = text;
        return true;
    }

    else {
        text="Wrong email format";
        message[2].innerHTML = text;
        return false;
    }
}

/*phone number validation*/
function  PhoneNumber(pnumber) {
    var message = document.getElementsByClassName("error-message");
    var numbers = /^[0-9]+$/;
    if ( pnumber =="" || pnumber.match(numbers)) {
        text="";
        message[3].innerHTML = text;
        return true;
    }

    else {
        text="Phone number should contain only numbers";
        message[3].innerHTML = text;
        return false;
    }
}



