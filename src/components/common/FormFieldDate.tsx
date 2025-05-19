import type { FormFieldProps } from '@/types/authForm.types'
import { InputMask } from '@react-input/mask'

export default function FormFieldDate({
  id,
  label,
  type,
  register,
  placeholder,
  error,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <InputMask
        mask="99.99.9999"
        replacement={{ '9': /\d/ }}
        id={id}
        {...register}
        type={type}
        placeholder={placeholder}
        className={`border ${
          error
            ? 'border-rose-900 focus:ring focus:ring-rose-900/50'
            : 'border-gray-500 focus:ring focus:ring-blue-600'
        } rounded-lg p-3 w-full duration-200 outline-none focus:outline-none`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <div className="h-1 mt-1 mx-1">
        {error && (
          <p id={`${id}-error`} className="text-rose-900 text-xs">
            {error.message}
          </p>
        )}
      </div>
    </div>
  )
}
