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
        className="border-2 border-gray-300 rounded-lg p-3 w-full"
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
