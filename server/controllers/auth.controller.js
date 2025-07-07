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

export const signup = (req, res) => {
  try {
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
