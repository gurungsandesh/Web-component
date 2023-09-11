import { Checkbox, FormControlLabel, FormGroup, Stack } from '@mui/material'
import { checkBoxProps, checkboxOption } from './checkBoxProps'

const CheckBoxInput = ({ name, onChange, onBlur, defaultValue, option }: checkBoxProps) => {
    return (

        <Stack width={'100%'} direction={"row"} alignItems={"center"} justifyContent={"center"}>
            <FormGroup
                //value={values}
                onChange={onChange}
                row
                defaultValue={defaultValue}
                onBlur={onBlur}
            >
                {option.map((values: checkboxOption, index: number) => (
                    <FormControlLabel
                        name={name}
                        value={values.value}
                        control={<Checkbox />}
                        label={values.label}
                        key={`${values.label}-${index}`}
                    />
                ))}
            </FormGroup>
        </Stack>
    )
}

export default CheckBoxInput