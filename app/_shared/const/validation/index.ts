import type { ValidationRule } from 'react-hook-form'

export const emailPattern: ValidationRule<RegExp> = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email'
}

export const phonePattern: ValidationRule<RegExp> = {
    value: /^\+?[1-9]\d{1,14}$/,
    message: 'Invalid phone number'
}
