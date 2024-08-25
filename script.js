var isDate = function (input) {
  //   write your code here
	 if (input instanceof Date) {
    // Check if the Date object is valid
    return !isNaN(input.getTime());
  }

  // Check if the input is a string or a number that can be parsed into a valid date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // Return false for all other types
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
