import propertySetupModels from "../models/propertySetupModels.js";

export const propertySetupController = async (req, res) => {
  try {
    const { property } = req.body;
    console.log(property);
    const propertyDetail = await new propertySetupModels({
      propertyType,
      propertyName,
      phone,
      email,
      address,
      state,
      city,
      pincode,
    }).save();
    res.status(201).json({
      success: true,
      message: "Property Setup Successfully",
      propertyDetail,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in updating profile",
      error,
    });
  }
};
