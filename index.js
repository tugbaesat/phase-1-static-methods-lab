class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {

 return string.replace(/[^A-Za-z0-9\-'\s]+/g, '');

  }
  static titleize(string) {
   const excludedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
   const words = string.split(" ");
words[0] = this.capitalize(words[0]);
for (let i = 1; i < words.length; i++) {
  if (!excludedWords.includes(words[i])) {
    words[i] = this.capitalize(words[i]);
  }
}

// Join the words back into a string
const capitalizedString = words.join(" ");

return capitalizedString;

  }
}