export default (data) => {
  let errors = {};

  if (!data.email.includes("@")) errors.e1 = "Ingrese un email valido!";

  if (!data.email) errors.e2 = "Igresa un email campeon!";

  if (data.email.length > 35) errors.e3 = "Escribi menos capo!";

  if (!/\d/.test(data.password)) errors.p1 = "Debe tener al menos un numero!";

  if (data.password.length < 6 || data.password.length > 10)
    errors.p2 = "Longitud incorrecta!";

  return errors;
};
