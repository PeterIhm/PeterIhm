function sendmessage(){
    var username = document.getElementById("username")
    var usermail = document.getElementById("usermail")
    var usermessage = document.getElementById("usermessage")
    var sendmessage = document.getElementById("sendmessage")


    if(username.value == null || usermail.value == null || usermessage.value == null){
        console.log("dont send message")       
    }
    else
    {
        console.log("send message")
    }
}