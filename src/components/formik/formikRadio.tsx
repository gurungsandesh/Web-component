import { Box, FormHelperText } from '@mui/material';
import { useField } from 'formik';
import RadioButtonInput from '../radio button/radioButton';
import { RadioProps } from '../radio button/radioProps';


const FormikRadio = (InputProps: RadioProps) => {

    const [field, meta] = useField(InputProps.name);

    return (
        <Box>
            <RadioButtonInput
                {...field}
                {...InputProps}
            // option={InputProps}
            />
            {meta.error && (
                <FormHelperText error id={InputProps.name}>
                    {`${meta.error}`}
                </FormHelperText>
            )}
        </Box>
    )
}

export default FormikRadio
