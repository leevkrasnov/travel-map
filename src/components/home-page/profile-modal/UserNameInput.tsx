import { Check, LoaderCircle, PenLine, X } from 'lucide-react'
import { AnimatePresence } from 'motion/react'

import { useUserNameInput } from '@/hooks/useUserNameInput'
import AnimatedButton from './AnimatedButton'

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
            className="bg-gray-100 border-2 border-cadet-gray focus:border-feldgrau pr-12 rounded-sm px-5 h-[50px] md:h-[60px] text-xl md:shadow-sm w-full duration-200 outline-none focus:outline-none"
          />
          <AnimatePresence mode="wait">
            {isDisabled ? (
              <button
                aria-label="Изменить имя"
                onClick={handleClick}
                className="hover:text-mount-pink right-8 absolute text-gray-500 top-1/2 -translate-y-1/2 cursor-pointer duration-400"
              >
                <PenLine />
              </button>
            ) : (
              <div>
                <AnimatedButton
                  label="Сохранить изменения"
                  onClick={handleConfirm}
                  styles="hover:text-mount-pink right-18 border-r border-gray-400 pr-4"
                >
                  {isLoading ? (
                    <LoaderCircle className="animate-spin text-mount-pink" />
                  ) : (
                    <Check />
                  )}
                </AnimatedButton>

                <AnimatedButton
                  label="Отменить"
                  onClick={() => setIsDisabled(true)}
                  styles="hover:text-flame right-8"
                >
                  <X />
                </AnimatedButton>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
