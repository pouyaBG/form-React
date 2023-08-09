const validata = data => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "user name required";
  } else {
    delete errors.name
  }

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S\+\.\S+/.test(data.email)) {
    errors.email = "is not a valid email";
  } else {
    delete errors.email
  }

  if (!data.password) {
    errors.password = "Password required";
  } else if (data.password.length < 5) {
    errors.password = "password must be at least 5 characters";
  }
  else {
    delete errors.password
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "enter password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "password must be a match";
  } else {
    delete errors.confirmPassword
  }

  if (data.isAccepted) {
    delete errors.isAccepted
  } else {
    errors.isAccepted = "accepted the ruls";
  }

  return errors
}