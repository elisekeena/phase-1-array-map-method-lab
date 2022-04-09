const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(title){
    const newArray = title.split(" ");

    let string = ""
      for (const title of newArray) {
        string += title.substring(0,1).toUpperCase() + title.substring(1) + " ";
      }
      return string.substring(0, string.length -1);
    })
}
