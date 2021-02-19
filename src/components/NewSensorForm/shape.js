import * as yup from "yup";

export const validation = {
  shape: {
    name: "",
    type: "",
    values: "",
    dates: "",
  },
  schema: yup.object().shape({
    name: yup
      .string()
      .min(3, "Need min 3 letters")
      .max(20, "20 letters is max")
      .required("Name is required"),
    type: yup.string().required("Choose type for your sensor"),
  }),
};
