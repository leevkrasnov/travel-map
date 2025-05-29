import { Eye, EyeClosed } from 'lucide-react'
import { useState } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

import { firstLetterUp } from '@/utils/edit'

interface FormFieldProps {
  id: string
  label: string
  register: UseFormRegisterReturn
  placeholder: string
  error?: FieldError
  capitalize?: boolean
}

export default function PasswordForm({
  id,
  label,
  register,
  placeholder,
  error,
  capitalize,
}: FormFieldProps) {
  const [showPass, setShowPass] = useState(false)

  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        {...register}
        onBlur={(e) => {
          const value = e.currentTarget.value
          if (value && capitalize) e.currentTarget.value = firstLetterUp(value)
        }}
        type={showPass ? 'text' : 'password'}
        placeholder={placeholder}
        className={`border-2 bg-gray-50 ${
          error
            ? 'border-flame/50 focus:border-flame'
            : 'border-cadet-gray focus:border-feldgrau'
        } rounded-sm px-5 h-[45px] md:h-[55px] text-lg md:shadow-sm w-full duration-200 outline-none focus:outline-none`}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <button
        type="button"
        onClick={() => setShowPass((prev) => !prev)}
        aria-label={showPass ? 'Скрыть пароль' : 'Показать пароль'}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2"
      >
        {showPass ? (
          <EyeClosed size={24} color="#9da2ab" strokeWidth={1.5} />
        ) : (
          <Eye size={24} color="#9da2ab" strokeWidth={1.5} />
        )}
      </button>
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
