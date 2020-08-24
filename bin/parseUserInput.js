const parseUserInput = userInput => {
  if (userInput && userInput <= 25) {
    console.log("Invalid user input, returning 5 headlines");
    return userInput;
  } else {
    return 5;
  }
};

exports.parseUserInput = parseUserInput;
