let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));
let btn = document.getElementById('btn');

let Signout = ()=>{
    sessionStorage.removeItem("user-creds"); 
    sessionStorage.removeItem("user-info");
    alert('Logging Out');
    window.location.href = 'index.html';
}

let CheckCred = ()=>{
    if (sessionStorage.getItem("user-creds")){
        console.log('User is logged in!');
    }
    else{
        window.location.href = 'index.html';
    }
}

window.addEventListener('load', CheckCred);
btn.addEventListener('click', Signout);


(function() {
    var oldLog = console.log;
    var oldWarn = console.warn;
    var oldError = console.error;
    var excludedMessages = [
      "Live reload enabled.",
      "[Five Server] connecting...",
      "[Five Server] connected."
    ];
    var consoleOutput = document.getElementById("console-output");
  
    function isExcludedMessage(message) {
      return excludedMessages.some(function(excludedMessage) {
        // Ensure message is converted to string before calling includes
        return message.toString().includes(excludedMessage);
      });
    }
  
    console.log = function() {
      var message = Array.from(arguments).map(function(arg) {
        // Convert all arguments to string for checking and display
        return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
      }).join(' '); // Join all arguments into a single string with spaces
  
      if (!isExcludedMessage(message)) {
        consoleOutput.innerHTML += message + '<br />';
      }
  
      oldLog.apply(console, arguments); // Continue to output the log to the browser console
    };
  
    console.warn = function(message) {
      if (!isExcludedMessage(message)) {
        consoleOutput.innerHTML += '<span style="color: orange;">' + message + '</span><br />';
      }
      oldWarn.apply(console, arguments);
    };
  
    console.error = function(message) {
      if (!isExcludedMessage(message)) {
        consoleOutput.innerHTML += '<span style="color: red;">' + message + '</span><br />';
      }
      oldError.apply(console, arguments);
    };
  })();