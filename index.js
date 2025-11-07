
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

  const lowercaseChar = `abcdefghijklmnopqrstuvwxyz`;
  const uppercaseChar = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  const numberChar = `0123456789`;
  const symbolsChar = `!@#$%^&*()`;

  let allowedChar = "";
  let password = "";

  allowedChar += includeLowercase ? lowercaseChar: "";
  allowedChar += includeUppercase ? uppercaseChar: "";
  allowedChar += includeNumbers ? numberChar: "";
  allowedChar += includeSymbols ? symbolsChar: "";

  if(length <= 0){
    return `(Password should contain atleast 1 character)`;
  }

  if(allowedChar.length === 0){
    return `(At least 1 character should be selected)`;
  }

  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChar.length);
    password += allowedChar[randomIndex];
  }





  return password;
}

const passwordLength = 12;
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true


const password = generatePassword(passwordLength,
                                  includeUppercase,
                                  includeLowercase,
                                  includeNumbers,
                                  includeSymbols
);

console.log(`Generated Password: ${password}`);