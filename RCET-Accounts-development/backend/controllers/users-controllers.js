const User = require("../models/user");
const Employee = require("../models/employee");
const HttpError = require("../models/http-error");
const generateToken = require("../util/jwt");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log("error", error);
    const err = new HttpError("something went wrong, please try again", 500);
    return next(err);
  }
  if (!existingUser || existingUser.password !== password) {
    const err = new HttpError(
      "Invalid email or password, could not log in",
      401
    );
    return next(err);
  }

  let existingEmployee;
  if (existingUser.role === "employee") {
    try {
      existingEmployee = await Employee.findOne({ "basicInfo.email": email });
    } catch (error) {
      console.log("error", error);
      const err = new HttpError("something went wrong", 500);
      return next(err);
    }
  }

  console.log("employee", existingEmployee);

  res.status(200).send({
    id: existingUser._id,
    employeeId: existingUser.role === "employee" ? existingEmployee._id : null,
    email: existingUser.email,
    name: existingUser.name,
    role: existingUser.role,
    token: generateToken(existingUser._id),
  });
};

const getUserData = async (req, res, next) => {
  const userId = req.params.id;
  let existingUser;
  try {
    existingUser = await User.findOne({ _id: userId });
  } catch (error) {
    console.log("error", error);
    const err = new HttpError("something went wrong, please try again", 500);
    return next(err);
  }
  if (!existingUser) {
    const err = new HttpError("could not find user", 404);
    return next(err);
  }

  let existingEmployee;
  if (existingUser.role === "employee") {
    try {
      existingEmployee = await Employee.findOne({
        "basicInfo.email": existingUser.email,
      });
    } catch (error) {
      console.log("error", error);
      const err = new HttpError("something went wrong", 500);
      return next(err);
    }
  }

  res.status(200).send({
    id: existingUser._id,
    email: existingUser.email,
    employeeId: existingUser.role === "employee" ? existingEmployee._id : null,
    name: existingUser.name,
    role: existingUser.role,
    token: generateToken(existingUser._id),
  });
};

module.exports = { login, getUserData };
