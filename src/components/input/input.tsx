import {
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
import { InputProps, } from './inputProps';


const Input = ({ label, name, type, disabled, defaultValue, multiline, placeholder, rows, value, onBlur, onChange }: InputProps) => {

    return (
        <Stack width={'100%'} spacing={1}>
            <InputLabel htmlFor={name} sx={{ display: 'flex', gap: '0.2rem' }}>
                <Typography
                    variant="subtitle1"
                >
                    {label}
                </Typography>
            </InputLabel>
            <OutlinedInput
                fullWidth
                id={name}
                type={type ?? 'text'}
                value={value}
                defaultValue={defaultValue}
                name={name}
                placeholder={placeholder}
                inputProps={{}}
                multiline={multiline}
                rows={rows}
                disabled={disabled ?? false}
                onChange={onChange}
                onBlur={onBlur}
            />
        </Stack>
    );
};

export default Input

