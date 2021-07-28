const loginURL = "http://localhost:4000/api/v1/auth/login";
const signupURL = "http://localhost:4000/api/v1/auth/signup";

async function logInWithEmailAndPassword(email, password) {
  const user = { email, password };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const response = await fetch(loginURL, requestOptions);
  const data = await response.json();

  if (data.error) {
    return {
      error: "Error de autenticación",
      message: "El email y contraseña ingresados no son validos.",
    };
  }

  return data.detail;
}

async function createUserWithEmailAndPassword(email, name, password) {
  const user = { email, name, password };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const response = await fetch(signupURL, requestOptions);
  const data = await response.json();

  if (data.error) {
    return {
      error: "Error de autenticación",
      message: "El email ingresado ya ha sido usado. Intente ingresar otro.",
    };
  }
  return data;
}

export { logInWithEmailAndPassword, createUserWithEmailAndPassword };
