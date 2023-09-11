import * as Yup from "yup";

interface test {
  name: string;
  age: string;
}

export const testSchema = Yup.object().shape({
  name: Yup.string().required("needed"),
  radioTest: Yup.string().required("radio needed"),
  checkTest: Yup.array()
    .of(Yup.string())
    .min(1, "Please select one")
    .required("needed to check"),
});
