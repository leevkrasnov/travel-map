import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface FormFieldProps {
  id: string
  label: string
  type: string
  register: UseFormRegisterReturn
  placeholder: string
  error?: FieldError
}

export default function FormField({
  id,
  label,
  type,
  register,
  placeholder,
  error,
}: FormFieldProps) {
  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        {...register}
        type={type}
        placeholder={placeholder}
        className={`border-2 bg-gray-50 ${
          error
            ? 'border-flame/50 focus:border-flame'
            : 'border-cadet-gray focus:border-feldgrau'
        } rounded-sm p-4 text-lg w-full duration-200 outline-none focus:outline-none`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="absolute bottom-0 right-3 text-flame text-xs bg-gray-50 px-1 transform translate-y-1/2"
        >
          {error.message}
        </p>
      )}
    </div>
  )
}
