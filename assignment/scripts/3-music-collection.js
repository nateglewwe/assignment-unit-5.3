console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection (collection, title, artist, yearPublished) {
let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
  }
  collection.push (album);
  return album;
}
console.log('array before adding', myCollection);

console.log(addToCollection(myCollection, 'Endless Forms Most Beautiful', 'Nightwish', 2015));
console.log(addToCollection(myCollection, 'Imaginaerum', 'Nightwish', 2011));
console.log(addToCollection(myCollection, 'Twist is the New Twerk', 'Postmodern Jukebox', 2014));
console.log(addToCollection(myCollection, 'Historical Misappropriation', 'Postmodern Jukebox', 2014));
console.log(addToCollection(myCollection, 'Sing It All Away', 'Walk Off the Earth', 2015));
console.log(addToCollection(myCollection, 'Here We Go!', 'Walk Off the Earth', 2019));
console.log(myCollection);

function showCollection (collection) {
for (album of collection) {
  console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);  
  }
}
console.log(showCollection(myCollection));

function findByArtist (collection, artist) {
let results = [];
for (album of collection) {
  if (artist === album.artist) {
    results.push(album);  
    }
  }
  return results;
}
console.log(findByArtist(myCollection, 'Nightwish')); //testing with artist in myCollection
console.log(findByArtist(myCollection, 'Billy Joel')); //testing with artist not in myCollection



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
