var library = [
   { 
      author: 'Bill Gates', 
      title: 'The Road Ahead', 
      readingStatus: true 
    }, 
      
   {   
      author: 'Steve Jobs', 
      title: 'Walter Isaacson', 
      readingStatus: false 
    }, 
  
   {   
      author: 'Suzanne Collins', 
      title: 'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: true 
    }
];

for(i=0; i<library.length; i++)
{
    
    console.log("Book- "+library[i].title + '  by  ' + library[i].author);
    console.log("Status- "+library[i].readingStatus);
    console.log("");
}