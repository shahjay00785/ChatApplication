ifUserIsLoogeIn(function() {

   updateUserData();
   loadUsers(function(users){

   var userList = "";

   for(var uid  in users){
     var user = users[uid];
     if(window.currentUser != user.id){
        userList += renderUser(user);
     }

 }
   //console.log(userList);
   getElement("members").innerHTML = userList;

   });

 onClickMultiple("member",function(element) {
   var chat_id = element.id;
   

   loadMessages(chat_id,function(messages){

     var messagesList = "";

     for(var uid  in messages){
       var message = messages[uid];
        console.log(messages);
       messagesList += renderMessage(message);
     }
     //console.log(userList);
console.log(messagesList);
     getElement("messages").innerHTML = messagesList;


   });

   getElement("chat-id").value = chat_id;



});

click("send-button",function(){
    var text=getElement("message-text").value;
    var chat_id=getElement("chat-id").value;

    sendMessage(chat_id,text);
});


  var sendButton = getElement("send-button");

  click("send-button",function(){

    var text = getElement("message-text").value;



  });

});
