export default function Validation(values) {
  let errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if(values?.name){
  if (values.name === "") {
    errors.name = "Name should not Empty.";
  } else if (values.name.length < 3 || values.name.length > 30) {
    errors.name = "Name Must be B/W 3-30 character.";
  } else {
    errors.name = "";
  } 
}
  if (values.email === "") {
    errors.email = "Email should not Empty.";
  // } else if (!email_pattern.test(values.email)) {
  //   errors.email = "Invalid Email";
  } else {
    errors.email = "";
  }

  if (values.password === "") {
    errors.password = "Password should not Empty.";
  // } else if (!password_pattern.test(values.password)) {
  //   errors.password = "1 small and capital char a number to {8}";
  } else {
    errors.password = "";
  }
  return errors;
}
