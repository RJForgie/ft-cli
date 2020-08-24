const parseUserInput = (userInput) => {
    if (userInput && userInput <= 25 ) {
      return userInput
    } else {
      return 5
    }
  }

  exports.parseUserInput = parseUserInput