import { signupSchema } from "../validators/auth.validation.js";

export const getSignUpPage = (req, res) => {
  try {
    return res.status(200).render("signup", { errors: req.flash("errors") });
  } catch (err) {
    return res.status(404).send("Page Not Found");
  }
};

export const getLogInPage = (req, res) => {
  try {
    return res.status(200).render("login", { errors: req.flash("errors") });
  } catch (err) {
    return res.status(404).send("Page Not Found");
  }
};

export const getVerifyEmailPage = (req, res) => {
  try {
    return res
      .status(200)
      .render("verifyEmail", { errors: req.flash("errors") });
  } catch (err) {
    return res.status(404).send("Page Not Found");
  }
};

export const signup = async (req, res) => {
  try {
    const { data, error } = signupSchema.safeParse(req.body);

    if (error) {
      req.flash("errors", error.errors[0].message);
      return res.redirect("/signup");
    }

    const { name, userName, email, password } = data;

    const newUser = await createNewUser({ name, userName, email, password });

    if (!newUser) {
      req.flash("errors", "Couldn't create User");
      return res.redirect("/signup");
    }

    return res.redirect("/login");
  } catch (err) {
    return res.status(400).send("Something went wrong");
  }
};

export const login = (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something went wrong");
  }
};

export const logout = (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something went wrong");
  }
};

export const getVerifyEmailToken = (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something went wrong");
  }
};

export const verifyEmail = (req, res) => {
  try {
  } catch (err) {
    return res.status(400).send("Something went wrong");
  }
};
