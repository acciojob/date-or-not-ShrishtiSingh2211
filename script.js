var isDate = function (input) {
  // Check if the input is a Date object
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
alert(isDate(new Date(input))); // Convert back to Date object
