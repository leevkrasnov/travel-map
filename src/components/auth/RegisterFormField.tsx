import type { RegisterFormProps } from '@/types/register.types'

export default function RegisterFormField({
  id,
  label,
  type,
  register,
  placeholder,
  error,
}: RegisterFormProps) {
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
        className="border-2 border-gray-300 rounded-md p-2 w-full"
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
