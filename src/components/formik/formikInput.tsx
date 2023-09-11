import { Box, FormHelperText } from '@mui/material';
import { useField } from 'formik';
import Input from '../input/input';
import { InputProps } from '../input/inputProps';


const FormikInput = (InputProps: InputProps) => {

    const [field, meta] = useField(InputProps.name);

    return (
        <Box>
            <Input
                {...field}
                {...InputProps}
            />
            {meta.touched && meta.error && (
                <FormHelperText error id={InputProps.name}>
                    {`${meta.error}`}
                </FormHelperText>
            )}
        </Box>
    )
}

export default FormikInput
