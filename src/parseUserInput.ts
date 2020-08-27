export const parseUserInput = (userInput: number) => {
  if (userInput && userInput <= 25) {
    console.log("Invalid user input, returning 5 headlines");
    return userInput
  } else {
    return 5
  }
}
