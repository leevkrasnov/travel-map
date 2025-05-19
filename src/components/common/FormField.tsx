import type { FormFieldProps } from '@/types/authForm.types'

export default function FormField({
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
      <input
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
      <div className="flex items-center h-4 my-1 mx-1">
        {error && (
          <p id={`${id}-error`} className="text-rose-900 text-xs">
            {error.message}
          </p>
        )}
      </div>
    </div>
  )
}
