import * as yup from "yup";

export const validateLogin = yup.object().shape({
	email: yup
		.string()
		.email()
		.required(),
   password: yup
      .string()
      .required()
});

export const validateRegister = yup.object().shape({
	name: yup
		.string()
		.label("Nama Anda")
		.required("Nama Anda Wajib diisi"),
	email: yup
		.string()
		.email("Email Anda Tidak Valid")
		.label("Email")
		.required("Email Wajib diisi"),
	password: yup
		.string()
		.label("Your Password")
		.required()
		.min(3, "too short !")
		.max(10, "too loong !"),
	confirmPassword: yup
		.string()
		.required()
		.label("Confirm password")
		.test("passwords-match", "Passwords dosn't match", function (value) {
			return this.parent.password === value;
		}),
	isAgree: yup
		.boolean()
		.label("Terms")
		.test("is-true", "You Must agree to terms to continue", value => value)
});