import { FormHelperText } from '@mui/material';
import { useField } from 'formik';
import CheckBoxInput from '../checkBox/checkBoxInput';
import { checkBoxProps } from '../checkBox/checkBoxProps';

const FormikCheckbox = (checkBoxProps: checkBoxProps) => {

    const [field, meta] = useField(checkBoxProps.name);

    return (
        <div>
            <CheckBoxInput
                {...field}
                {...checkBoxProps}
            />

            {meta.error && (
                <FormHelperText error id={checkBoxProps.name}>
                    {`${meta.error}`}
                </FormHelperText>
            )}
        </div>
    )
}

export default FormikCheckbox