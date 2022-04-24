function QuestionsMarks(str) { 
  
  let counter = 0;
  let char = "";
  let word = str;

  for (let i = 0; i < word.length; i++){
      char = str.slice(i, i+1);
      if (char == "?") {
        counter++;
        if (counter == 3) return true;
      }
      else {
        counter = 0;
      }
      
  }
  return false;
}
     
  // keep this function call here 
  console.log(QuestionsMarks("???aa?aa"));
  console.log(QuestionsMarks("??aa?aa"));
  console.log(QuestionsMarks("?aa?aa"));
  console.log(QuestionsMarks("aa?aa"));
  console.log(QuestionsMarks("aa??aa"));
  console.log(QuestionsMarks("aa???aa"));
  console.log(QuestionsMarks("aa?aa"));
  console.log(QuestionsMarks("aa????aa"));
  console.log(QuestionsMarks("aa?aa???"));
 