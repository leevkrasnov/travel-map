import { Check, LoaderCircle, PenLine, X } from 'lucide-react'

import { useUserNameInput } from '@/hooks/useUserNameInput'
import EditButton from './EditButton'

export default function UserNameInput() {
  const {
    isDisabled,
    setIsDisabled,
    inputValue,
    setInputValue,
    inputRef,
    handleClick,
    handleConfirm,
    isLoading,
    displayName,
    eventKeyDown,
  } = useUserNameInput()

  return (
    <div className="flex flex-col">
      <label className="text-mount-pink font-semibold">ИМЯ</label>
      <div className="mt-2 flex-row flex gap-x-4">
        <div className="relative flex-1">
          <input
            type="text"
            ref={inputRef}
            disabled={isDisabled}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={eventKeyDown}
            value={isDisabled ? displayName : inputValue}
            className="bg-gray-100 border-2 border-cadet-gray focus:border-feldgrau pr-32 rounded-sm px-3 md:px-5 h-[45px] md:h-[55px] md:text-xl md:shadow-sm w-full duration-200 outline-none focus:outline-none"
          />
          {isDisabled ? (
            <EditButton
              label="Изменить имя"
              onClick={handleClick}
              styles="hover:text-mount-pink right-5 lg:right-6"
            >
              <PenLine strokeWidth={1.7} />
            </EditButton>
          ) : (
            <div>
              <EditButton
                label="Сохранить изменения"
                onClick={handleConfirm}
                styles="hover:text-mount-pink right-14 lg:right-16 border-r border-gray-400 pr-4"
              >
                {isLoading ? (
                  <LoaderCircle className="animate-spin text-mount-pink" />
                ) : (
                  <Check strokeWidth={1.7} />
                )}
              </EditButton>

              <EditButton
                label="Отменить"
                onClick={() => setIsDisabled(true)}
                styles="hover:text-flame right-5 lg:right-6"
              >
                <X strokeWidth={1.7} />
              </EditButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
