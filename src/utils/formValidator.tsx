import * as yup from "yup";

export const formValidator = yup.object().shape({
  userEmail: yup.string().trim().required("El email es obligatorio"),
  userPassword: yup.string().trim().required("El password es obligatorio"),
});
