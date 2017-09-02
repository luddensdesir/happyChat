
// function ajax(){
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "test", false);
//   // xhr.open("GET", "http://www.SupermarketAPI.com/api.asmx/StoresByZip?APIKEY=" + marketKey + "&ZipCode=90026", false);
//   xhr.setRequestHeader('Content-Type', 'text/json');
//   xhr.send();

//   xmlDocument = xhr.responseXML;

//   var getNextMsg = function(){
//     return funcs.findNextMessage(inbox, session.lastMessageHash)
//   }
 
//   getNextMsg().then(function (success){
//     var nextMessage = success
//     console.log(nextMessage)
//   }).catch(function(err) {
//     console.error(err);
//   });


//    var getFile = function (filename) {
//       return new Promise(function (resolve, reject) {
//           try {
//               fs.readFile(filename, 'utf8', function(err, buffer){
//                   if (err) reject(err); else resolve( 'from: ' + decode(from) + '\n---\n' + decode(buffer));
//               });
//           } catch (err) {
//               reject(err);
//           }
//       });
//   };

// }