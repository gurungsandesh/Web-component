import { FormControlLabel, InputLabel, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import { RadioProps, radioOption } from './radioProps'

const RadioButtonInput = ({ label, name, option, value, onChange, defaultValue }: RadioProps) => {
    return (
        <Stack width={'100%'} spacing={1}>
            <InputLabel htmlFor={'asfds'} sx={{ display: 'flex', gap: '0.2rem' }}>
                <Typography
                    variant="subtitle1"
                >
                    {label}
                </Typography>
            </InputLabel>

            <RadioGroup
                value={value}
                onChange={onChange}
                row
                aria-labelledby={name}
                defaultValue={defaultValue}
                name={name}
            >
                {option.map((option: radioOption, index: number) => (
                    <FormControlLabel
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                        key={`${option.label}-${index}`}
                    />
                ))}
            </RadioGroup>
        </Stack>

    )
}

export default RadioButtonInput