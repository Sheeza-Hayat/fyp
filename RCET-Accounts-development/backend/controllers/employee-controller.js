const Employee = require("../models/employee");
const HttpError = require("../models/http-error");
const User = require("../models/user");
const mongoose = require("mongoose");
const moment = require("moment");

const getEmployees = async (req, res, next) => {
  let employees;
  try {
    employees = await Employee.find();
  } catch (error) {
    const er = new HttpError(
      "somthing went wrong, could not fetch Employee",
      500
    );
    return next(er);
  }
  res.status(200).json({
    results: employees.map((employee) => ({
      id: employee._id,
      basicInfo: {
        name: employee.basicInfo.name,
        email: employee.basicInfo.email,
        password: employee.basicInfo.password,
        cnic: employee.basicInfo.cnic,
        pageNo: employee.basicInfo.pageNo,
        accountNo: employee.basicInfo.accountNo,
        department: employee.basicInfo.department,
        scale: employee.basicInfo.scale,
        experience: employee.basicInfo.experience,
        type: employee.basicInfo.type,
        designation: employee.basicInfo.designation,
        category: employee.basicInfo.category,
        status: employee.basicInfo.status,
      },

      salaries: employee.salaries,

      currentPay: {
        date: employee.currentPay.date,
        verified: employee.currentPay.verified,
        amolument: {
          basicPay: employee.currentPay.amolument.basicPay,
          nonPracticingAllowance:
            employee.currentPay.amolument.nonPracticingAllowance,
          specialHealthCareAllowance:
            employee.currentPay.amolument.specialHealthCareAllowance,
          healthProfnlAllowance:
            employee.currentPay.amolument.healthProfnlAllowance,
          houseRent: employee.currentPay.amolument.houseRent,
          conPetAllowance: employee.currentPay.amolument.conPetAllowance,
          qualificationAllowance:
            employee.currentPay.amolument.qualificationAllowance,
          entertainmentAllowance:
            employee.currentPay.amolument.entertainmentAllownace,
          personalAllowance: employee.currentPay.amolument.personalAllowance,
          tTAllowance: employee.currentPay.amolument.tTAllowance,
          medicalAllowance: employee.currentPay.amolument.medicalAllowance,
          socialSecuirtyBenefit:
            employee.currentPay.amolument.socialSecuirtyBenefit,
          seniorPostAllowance:
            employee.currentPay.amolument.seniorPostAllowance,
          chairmanAllowance: employee.currentPay.amolument.chairmanAllowance,
          rTWardenAllowance: employee.currentPay.amolument.rTWardenAllowance,
          specialReliefAllowance:
            employee.currentPay.amolument.specialReliefAllowance,
          entertainment: employee.currentPay.amolument.entertainment,
        },
        deductions: {
          incomeTax: employee.currentPay.deductions.incomeTax,
          gPFSubscription: employee.currentPay.deductions.gPFSubscription,
          recGPF: employee.currentPay.deductions.recGPF,
          houseRentR: employee.currentPay.deductions.houseRentR,
          waterCharges: employee.currentPay.deductions.waterCharges,
          shortDays: employee.currentPay.deductions.shortDays,
          convRecovery: employee.currentPay.deductions.convRecovery,
          uniTTAllowance: employee.currentPay.deductions.uniTTAllowance,
          tSAFund: employee.currentPay.deductions.tSAFund,
          benevolentFund: employee.currentPay.deductions.benevolentFund,
          groupInsurance: employee.currentPay.deductions.groupInsurance,
          eidAdvance: employee.currentPay.deductions.eidAdvance,
          busCharges: employee.currentPay.deductions.busCharges,
          speciialIncentive: employee.currentPay.deductions.speciialIncentive,
          conveyanceAllowance:
            employee.currentPay.deductions.conveyanceAllowance,
          integratedAllowance:
            employee.currentPay.deductions.integratedAllowance,
          disableAllowance: employee.currentPay.deductions.disableAllowance,
          sSB: employee.currentPay.deductions.sSB,
          gIP: employee.currentPay.deductions.gIP,
          recEidAdvance: employee.currentPay.deductions.recEidAdvance,
          accomadationCharges:
            employee.currentPay.deductions.accomadationCharges,
        },
        netPayable: employee.currentPay.netPayable,
      },
    })),
  });
};

const getEmployee = async (req, res, next) => {
  const employeeId = req.params.id;
  let employee;
  try {
    employee = await Employee.findById({ _id: employeeId });
  } catch (error) {
    const er = new HttpError(
      "something went wrong, could not save Employee",
      500
    );
    return next(er);
  }
  res.status(200).json({
    id: employee._id,
    basicInfo: {
      name: employee.basicInfo.name,
      email: employee.basicInfo.email,
      password: employee.basicInfo.password,
      cnic: employee.basicInfo.cnic,
      pageNo: employee.basicInfo.pageNo,
      accountNo: employee.basicInfo.accountNo,
      department: employee.basicInfo.department,
      scale: employee.basicInfo.scale,
      experience: employee.basicInfo.experience,
      type: employee.basicInfo.type,
      designation: employee.basicInfo.designation,
      category: employee.basicInfo.category,
      status: employee.basicInfo.status,
    },

    salaries: employee.salaries,

    currentPay: {
      date: employee.currentPay.date,
      verified: employee.currentPay.verified,
      amolument: {
        basicPay: employee.currentPay.amolument.basicPay,
        nonPracticingAllowance:
          employee.currentPay.amolument.nonPracticingAllowance,
        specialHealthCareAllowance:
          employee.currentPay.amolument.specialHealthCareAllowance,
        healthProfnlAllowance:
          employee.currentPay.amolument.healthProfnlAllowance,
        houseRent: employee.currentPay.amolument.houseRent,
        conPetAllowance: employee.currentPay.amolument.conPetAllowance,
        qualificationAllowance:
          employee.currentPay.amolument.qualificationAllowance,
        entertainmentAllowance:
          employee.currentPay.amolument.entertainmentAllownace,
        personalAllowance: employee.currentPay.amolument.personalAllowance,
        tTAllowance: employee.currentPay.amolument.tTAllowance,
        medicalAllowance: employee.currentPay.amolument.medicalAllowance,
        socialSecuirtyBenefit:
          employee.currentPay.amolument.socialSecuirtyBenefit,
        seniorPostAllowance: employee.currentPay.amolument.seniorPostAllowance,
        chairmanAllowance: employee.currentPay.amolument.chairmanAllowance,
        rTWardenAllowance: employee.currentPay.amolument.rTWardenAllowance,
        specialReliefAllowance:
          employee.currentPay.amolument.specialReliefAllowance,
        entertainment: employee.currentPay.amolument.entertainment,
      },
      deductions: {
        incomeTax: employee.currentPay.deductions.incomeTax,
        gPFSubscription: employee.currentPay.deductions.gPFSubscription,
        recGPF: employee.currentPay.deductions.recGPF,
        houseRentR: employee.currentPay.deductions.houseRentR,
        waterCharges: employee.currentPay.deductions.waterCharges,
        shortDays: employee.currentPay.deductions.shortDays,
        convRecovery: employee.currentPay.deductions.convRecovery,
        uniTTAllowance: employee.currentPay.deductions.uniTTAllowance,
        tSAFund: employee.currentPay.deductions.tSAFund,
        benevolentFund: employee.currentPay.deductions.benevolentFund,
        groupInsurance: employee.currentPay.deductions.groupInsurance,
        eidAdvance: employee.currentPay.deductions.eidAdvance,
        busCharges: employee.currentPay.deductions.busCharges,
        speciialIncentive: employee.currentPay.deductions.speciialIncentive,
        conveyanceAllowance: employee.currentPay.deductions.conveyanceAllowance,
        integratedAllowance: employee.currentPay.deductions.integratedAllowance,
        disableAllowance: employee.currentPay.deductions.disableAllowance,
        sSB: employee.currentPay.deductions.sSB,
        gIP: employee.currentPay.deductions.gIP,
        recEidAdvance: employee.currentPay.deductions.recEidAdvance,
        accomadationCharges: employee.currentPay.deductions.accomadationCharges,
      },
      netPayable: employee.currentPay.netPayable,
    },
  });
};

const addEmployee = async (req, res, next) => {
  const obj = req.body;

  const employee = new Employee(obj);
  const createUser = new User({
    name: obj.basicInfo.name,
    email: obj.basicInfo.email,
    role: "employee",
    password: obj.basicInfo.password,
  });
  const userExists = await User.findOne({ email: obj.basicInfo.email });
  if (userExists) {
    const err = new HttpError("user already exists", 409);
    return next(err);
  }
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await employee.save({ session: sess });
    await createUser.save({ session: sess });
    await sess.commitTransaction();
  } catch (error) {
    console.log(error);
    const err = new HttpError(
      "something went wrong, could not save Employee",
      403
    );
    return next(err);
  }
  res.status(201).json({
    id: employee._id,
    basicInfo: {
      name: employee.basicInfo.name,
      email: employee.basicInfo.email,
      password: employee.basicInfo.password,
      cnic: employee.basicInfo.cnic,
      pageNo: employee.basicInfo.pageNo,
      accountNo: employee.basicInfo.accountNo,
      department: employee.basicInfo.department,
      scale: employee.basicInfo.scale,
      experience: employee.basicInfo.experience,
      type: employee.basicInfo.type,
      designation: employee.basicInfo.designation,
      category: employee.basicInfo.category,
      status: employee.basicInfo.status,
    },

    salaries: employee.salaries,

    currentPay: {
      date: moment().format("DD-MM-YYY"),
      verified: employee.currentPay.verified,
      amolument: {
        basicPay: employee.currentPay.amolument.basicPay,
        nonPracticingAllowance:
          employee.currentPay.amolument.nonPracticingAllowance,
        specialHealthCareAllowance:
          employee.currentPay.amolument.specialHealthCareAllowance,
        healthProfnlAllowance:
          employee.currentPay.amolument.healthProfnlAllowance,
        houseRent: employee.currentPay.amolument.houseRent,
        conPetAllowance: employee.currentPay.amolument.conPetAllowance,
        qualificationAllowance:
          employee.currentPay.amolument.qualificationAllowance,
        entertainmentAllowance:
          employee.currentPay.amolument.entertainmentAllownace,
        personalAllowance: employee.currentPay.amolument.personalAllowance,
        tTAllowance: employee.currentPay.amolument.tTAllowance,
        medicalAllowance: employee.currentPay.amolument.medicalAllowance,
        socialSecuirtyBenefit:
          employee.currentPay.amolument.socialSecuirtyBenefit,
        seniorPostAllowance: employee.currentPay.amolument.seniorPostAllowance,
        chairmanAllowance: employee.currentPay.amolument.chairmanAllowance,
        rTWardenAllowance: employee.currentPay.amolument.rTWardenAllowance,
        specialReliefAllowance:
          employee.currentPay.amolument.specialReliefAllowance,
        entertainment: employee.currentPay.amolument.entertainment,
      },
      deductions: {
        incomeTax: employee.currentPay.deductions.incomeTax,
        gPFSubscription: employee.currentPay.deductions.gPFSubscription,
        recGPF: employee.currentPay.deductions.recGPF,
        houseRentR: employee.currentPay.deductions.houseRentR,
        waterCharges: employee.currentPay.deductions.waterCharges,
        shortDays: employee.currentPay.deductions.shortDays,
        convRecovery: employee.currentPay.deductions.convRecovery,
        uniTTAllowance: employee.currentPay.deductions.uniTTAllowance,
        tSAFund: employee.currentPay.deductions.tSAFund,
        benevolentFund: employee.currentPay.deductions.benevolentFund,
        groupInsurance: employee.currentPay.deductions.groupInsurance,
        eidAdvance: employee.currentPay.deductions.eidAdvance,
        busCharges: employee.currentPay.deductions.busCharges,
        speciialIncentive: employee.currentPay.deductions.speciialIncentive,
        conveyanceAllowance: employee.currentPay.deductions.conveyanceAllowance,
        integratedAllowance: employee.currentPay.deductions.integratedAllowance,
        disableAllowance: employee.currentPay.deductions.disableAllowance,
        sSB: employee.currentPay.deductions.sSB,
        gIP: employee.currentPay.deductions.gIP,
        recEidAdvance: employee.currentPay.deductions.recEidAdvance,
        accomadationCharges: employee.currentPay.deductions.accomadationCharges,
      },
      netPayable: employee.currentPay.netPayable,
    },
  });
};

const deleteEmployee = async (req, res, next) => {
  const employeeId = req.params.id;
  let employee;
  try {
    employee = await Employee.findById({ _id: employeeId });
  } catch (error) {
    const err = new HttpError(
      "somthing went wrong, could not delete Employee",
      500
    );
    return next(err);
  }
  if (!employee) {
    const err = new HttpError("could not find employee", 500);
    return next(err);
  }
  try {
    await Employee.deleteOne({ _id: employeeId });
  } catch (error) {
    const err = new HttpError(
      "somthing went wrong, could not delete employee",
      500
    );
    return next(err);
  }
  res.status(200).json({ message: "Deleted Employee" });
};

const updateEmployee = async (req, res, next) => {
  const employeeId = req.params.id;
  let employee;
  try {
    employee = await Employee.findById({ _id: employeeId });
  } catch (error) {
    const err = new HttpError(
      "somthing went wrong, could not delete employee",
      500
    );
    return next(err);
  }
  if (!employee) {
    const err = new HttpError("could not find employee", 500);
    return next(err);
  }

  const updatedEmployee = req.body;

  try {
    await Employee.updateOne({ _id: employeeId }, updatedEmployee);
  } catch (error) {
    const err = new HttpError(
      "something went wrong,could not update employee",
      500
    );
    return next(err);
  }
  res.status(200).json({
    id: updatedEmployee._id,
    basicInfo: {
      name: updatedEmployee.basicInfo.name,
      email: updatedEmployee.basicInfo.email,
      password: updatedEmployee.basicInfo.password,
      cnic: updatedEmployee.basicInfo.cnic,
      pageNo: updatedEmployee.basicInfo.pageNo,
      accountNo: updatedEmployee.basicInfo.accountNo,
      department: updatedEmployee.basicInfo.department,
      scale: updatedEmployee.basicInfo.scale,
      experience: updatedEmployee.basicInfo.experience,
      type: updatedEmployee.basicInfo.type,
      designation: updatedEmployee.basicInfo.designation,
      category: updatedEmployee.basicInfo.category,
      status: updatedEmployee.basicInfo.status,
    },

    salaries: updatedEmployee.salaries,

    currentPay: {
      date: moment().format("DD-MM-YYY"),
      verified: updatedEmployee.currentPay.verified,
      amolument: {
        basicPay: updatedEmployee.currentPay.amolument.basicPay,
        nonPracticingAllowance:
          updatedEmployee.currentPay.amolument.nonPracticingAllowance,
        specialHealthCareAllowance:
          updatedEmployee.currentPay.amolument.specialHealthCareAllowance,
        healthProfnlAllowance:
          updatedEmployee.currentPay.amolument.healthProfnlAllowance,
        houseRent: updatedEmployee.currentPay.amolument.houseRent,
        conPetAllowance: updatedEmployee.currentPay.amolument.conPetAllowance,
        qualificationAllowance:
          updatedEmployee.currentPay.amolument.qualificationAllowance,
        entertainmentAllowance:
          updatedEmployee.currentPay.amolument.entertainmentAllownace,
        personalAllowance:
          updatedEmployee.currentPay.amolument.personalAllowance,
        tTAllowance: updatedEmployee.currentPay.amolument.tTAllowance,
        medicalAllowance: updatedEmployee.currentPay.amolument.medicalAllowance,
        socialSecuirtyBenefit:
          updatedEmployee.currentPay.amolument.socialSecuirtyBenefit,
        seniorPostAllowance:
          updatedEmployee.currentPay.amolument.seniorPostAllowance,
        chairmanAllowance:
          updatedEmployee.currentPay.amolument.chairmanAllowance,
        rTWardenAllowance:
          updatedEmployee.currentPay.amolument.rTWardenAllowance,
        specialReliefAllowance:
          updatedEmployee.currentPay.amolument.specialReliefAllowance,
        entertainment: updatedEmployee.currentPay.amolument.entertainment,
      },
      deductions: {
        incomeTax: updatedEmployee.currentPay.deductions.incomeTax,
        gPFSubscription: updatedEmployee.currentPay.deductions.gPFSubscription,
        recGPF: updatedEmployee.currentPay.deductions.recGPF,
        houseRentR: updatedEmployee.currentPay.deductions.houseRentR,
        waterCharges: updatedEmployee.currentPay.deductions.waterCharges,
        shortDays: updatedEmployee.currentPay.deductions.shortDays,
        convRecovery: updatedEmployee.currentPay.deductions.convRecovery,
        uniTTAllowance: updatedEmployee.currentPay.deductions.uniTTAllowance,
        tSAFund: updatedEmployee.currentPay.deductions.tSAFund,
        benevolentFund: updatedEmployee.currentPay.deductions.benevolentFund,
        groupInsurance: updatedEmployee.currentPay.deductions.groupInsurance,
        eidAdvance: updatedEmployee.currentPay.deductions.eidAdvance,
        busCharges: updatedEmployee.currentPay.deductions.busCharges,
        speciialIncentive:
          updatedEmployee.currentPay.deductions.speciialIncentive,
        conveyanceAllowance:
          updatedEmployee.currentPay.deductions.conveyanceAllowance,
        integratedAllowance:
          updatedEmployee.currentPay.deductions.integratedAllowance,
        disableAllowance:
          updatedEmployee.currentPay.deductions.disableAllowance,
        sSB: updatedEmployee.currentPay.deductions.sSB,
        gIP: updatedEmployee.currentPay.deductions.gIP,
        recEidAdvance: updatedEmployee.currentPay.deductions.recEidAdvance,
        accomadationCharges:
          updatedEmployee.currentPay.deductions.accomadationCharges,
      },
      netPayable: updatedEmployee.currentPay.netPayable,
    },
  });
};

const verifyEmployee = async (req, res, next) => {
  const employeeId = req.params.id;
  let employeeExists;
  try {
    employeeExists = await Employee.findOne({ _id: employeeId });
  } catch (error) {
    const err = new HttpError("something went wrong", 500);
    return next(err);
  }
  if (!employeeExists) {
    const err = new HttpError("employee not found", 404);
    return next(err);
  }
  let updatingEmployee = employeeExists._doc;
  updatingEmployee = {
    ...updatingEmployee,
    currentPay: { ...updatingEmployee.currentPay, verified: true },
  };
  try {
    await Employee.updateOne({ _id: employeeId }, updatingEmployee);
  } catch (error) {
    const err = new HttpError("something went wrong", 500);
    return next(err);
  }
  res.status(200).json({
    id: updatingEmployee._id,
    basicInfo: {
      name: updatingEmployee.basicInfo.name,
      email: updatingEmployee.basicInfo.email,
      password: updatingEmployee.basicInfo.password,
      cnic: updatingEmployee.basicInfo.cnic,
      pageNo: updatingEmployee.basicInfo.pageNo,
      accountNo: updatingEmployee.basicInfo.accountNo,
      department: updatingEmployee.basicInfo.department,
      scale: updatingEmployee.basicInfo.scale,
      experience: updatingEmployee.basicInfo.experience,
      type: updatingEmployee.basicInfo.type,
      designation: updatingEmployee.basicInfo.designation,
      category: updatingEmployee.basicInfo.category,
      status: updatingEmployee.basicInfo.status,
    },

    salaries: updatingEmployee.salaries,

    currentPay: {
      date: moment().format("DD-MM-YYY"),
      verified: updatingEmployee.currentPay.verified,
      amolument: {
        basicPay: updatingEmployee.currentPay.amolument.basicPay,
        nonPracticingAllowance:
          updatingEmployee.currentPay.amolument.nonPracticingAllowance,
        specialHealthCareAllowance:
          updatingEmployee.currentPay.amolument.specialHealthCareAllowance,
        healthProfnlAllowance:
          updatingEmployee.currentPay.amolument.healthProfnlAllowance,
        houseRent: updatingEmployee.currentPay.amolument.houseRent,
        conPetAllowance: updatingEmployee.currentPay.amolument.conPetAllowance,
        qualificationAllowance:
          updatingEmployee.currentPay.amolument.qualificationAllowance,
        entertainmentAllowance:
          updatingEmployee.currentPay.amolument.entertainmentAllownace,
        personalAllowance:
          updatingEmployee.currentPay.amolument.personalAllowance,
        tTAllowance: updatingEmployee.currentPay.amolument.tTAllowance,
        medicalAllowance:
          updatingEmployee.currentPay.amolument.medicalAllowance,
        socialSecuirtyBenefit:
          updatingEmployee.currentPay.amolument.socialSecuirtyBenefit,
        seniorPostAllowance:
          updatingEmployee.currentPay.amolument.seniorPostAllowance,
        chairmanAllowance:
          updatingEmployee.currentPay.amolument.chairmanAllowance,
        rTWardenAllowance:
          updatingEmployee.currentPay.amolument.rTWardenAllowance,
        specialReliefAllowance:
          updatingEmployee.currentPay.amolument.specialReliefAllowance,
        entertainment: updatingEmployee.currentPay.amolument.entertainment,
      },
      deductions: {
        incomeTax: updatingEmployee.currentPay.deductions.incomeTax,
        gPFSubscription: updatingEmployee.currentPay.deductions.gPFSubscription,
        recGPF: updatingEmployee.currentPay.deductions.recGPF,
        houseRentR: updatingEmployee.currentPay.deductions.houseRentR,
        waterCharges: updatingEmployee.currentPay.deductions.waterCharges,
        shortDays: updatingEmployee.currentPay.deductions.shortDays,
        convRecovery: updatingEmployee.currentPay.deductions.convRecovery,
        uniTTAllowance: updatingEmployee.currentPay.deductions.uniTTAllowance,
        tSAFund: updatingEmployee.currentPay.deductions.tSAFund,
        benevolentFund: updatingEmployee.currentPay.deductions.benevolentFund,
        groupInsurance: updatingEmployee.currentPay.deductions.groupInsurance,
        eidAdvance: updatingEmployee.currentPay.deductions.eidAdvance,
        busCharges: updatingEmployee.currentPay.deductions.busCharges,
        speciialIncentive:
          updatingEmployee.currentPay.deductions.speciialIncentive,
        conveyanceAllowance:
          updatingEmployee.currentPay.deductions.conveyanceAllowance,
        integratedAllowance:
          updatingEmployee.currentPay.deductions.integratedAllowance,
        disableAllowance:
          updatingEmployee.currentPay.deductions.disableAllowance,
        sSB: updatingEmployee.currentPay.deductions.sSB,
        gIP: updatingEmployee.currentPay.deductions.gIP,
        recEidAdvance: updatingEmployee.currentPay.deductions.recEidAdvance,
        accomadationCharges:
          updatingEmployee.currentPay.deductions.accomadationCharges,
      },
      netPayable: updatingEmployee.currentPay.netPayable,
    },
  });
};




const getStats = async (req, res, next) => {
  let totalEmployees = 0
  let pensioners = 0;
  let employees = []
  let totalSalaries = 0
  try {
    employees = await Employee.find({})
    pensioners = (await Employee.find({ "basicInfo.category": "Pensioner" }))?.length

    totalSalaries = employees.reduce((prev, next) => (prev + next?.currentPay?.netPayable ?? 0), 0)


    totalEmployees = employees?.length

  } catch (error) {
    const err = new HttpError("something went wrong", 500);
    return next(err);
  }
  res.status(200).json({
    totalEmployees,
    pensioners,
    currentEmployees: totalEmployees - pensioners,
    totalSalaries
  });
};



module.exports = {
  addEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
  getEmployee,
  verifyEmployee,
  getStats
};
