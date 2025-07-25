import express from "express";
import * as authController from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute
  .route("/signup")
  .get(authController.getSignUpPage)
  .post(authController.signup);

authRoute
  .route("/login")
  .get(authController.getLogInPage)
  .post(authController.login);

authRoute.route("/logout").get(authController.logout);

authRoute
  .route("/verify/email")
  .get(authController.getVerifyEmailPage)
  .post(authController.getVerifyEmailToken);

authRoute.route("/verify-email-token").get(authController.verifyEmail);

export default authRoute;
