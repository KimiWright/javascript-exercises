var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Aldous Huxley', title: 'Brave New World', libraryID: 3245},
   { author: 'Stephen Hawking', title: 'A Brief History of Time', libraryID: 8237},
   { author: 'Frank Herbert', title: 'Dune', libraryID: 390},
   { author: 'Herman Hesse', title: 'Siddhartha', libraryID: 2112}
   ];
function longest(arr) {
  // your code here
  var len=arr.length;
  var lgth=100000;
  var longest = "";

  for (i=0;i<len;i++){
    if (arr[i].libraryID < lgth){
      lgth = arr[i].libraryID;
      longest = arr[i];
    }
  }
  //delete arr[longest];
  //console.log(library);
  return (longest);
}
//console.log(longest(library));
//delete library[longest(library)];
var list=[];
for(x=0;x<6;x++){ 
  list.push(longest(library)); 
  library.splice(library.indexOf(longest(library)),1);
}
console.log(list)
