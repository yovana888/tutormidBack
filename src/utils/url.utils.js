export const isValidHttpUrl = (string) => {
  try {
    const newUrl = new URL(string);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
};

export const isValidPassword = (string) => {
  const errors = [];
  if (string.length < 8) {
    errors.push("Your password must be at least 8 characters");
  }
  if (string.search(/[a-z]/) < 0) {
    errors.push("Your password must contain at least one lowercase letter.");
  }
  if (string.search(/[A-Z]/) < 0) {
    errors.push("Your password must contain at least one uppercase letter.");
  }
  if (string.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit.");
  }
  if (errors.length == 0) {
    return true;
  }
  return errors;
};
