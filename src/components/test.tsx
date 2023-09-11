import { Form, Formik, FormikProps } from 'formik';
import FormikCheckbox from './formik/formikCheckbox';
import FormikInput from './formik/formikInput';
import FormikRadio from './formik/formikRadio';
import { testSchema } from './test.schema';
import HorizontalLinearStepper from './Stepper/stepper';


const Example = () => (
    <div>
        <Formik
            initialValues={{ name: "" }}
            validationSchema={testSchema}
            onSubmit={(values, actions) => {
                console.log("🚀 ~ file: test.tsx:16 ~ values:", values)
                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     actions.setSubmitting(false);
                // }, 1000);
            }}
        >
            {(props: FormikProps<any>) => (
                <Form>

                    <FormikInput label='name' type='' name='name' />

                    <FormikRadio label='radio test' name='radioTest' option={[
                        {
                            label: 'test',
                            value: "test",
                        },
                        {
                            label: 'check',
                            value: "check"
                        },
                    ]} />

                    <FormikCheckbox
                        option={[
                            {
                                label: 'test',
                                value: "test",
                            },
                            {
                                label: 'check',
                                value: "check"
                            },
                        ]}
                        name='checkTest'
                    />

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>


        <HorizontalLinearStepper
            steps={[
                {
                    component: <>First componemnt</>,
                    label: "first"
                },
                {
                    component: <>second componemnt</>,
                    label: "second"
                }
            ]}
        />
    </div>
);

export default Example