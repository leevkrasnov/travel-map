import { Check, LoaderCircle, PenLine, X } from 'lucide-react'
import { AnimatePresence } from 'motion/react'

import { useUserNameInput } from '@/hooks/useUserNameInput'
import AnimatedButtonChangeName from './AnimatedButtonChangeName'

export default function ChangeUserName() {
  const {
    isDisabled,
    setIsDisabled,
    inputValue,
    setInputValue,
    inputRef,
    handleClick,
    handleConfirm,
    isLoading,
    userName,
    eventKeyDown,
  } = useUserNameInput()

  return (
    <div className="flex flex-col">
      <label className="text-mount-pink">ИМЯ</label>
      <div className="mt-2 flex-row flex gap-x-4">
        <div className="relative flex-1">
          <input
            type="text"
            ref={inputRef}
            disabled={isDisabled}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={eventKeyDown}
            value={isDisabled ? userName : inputValue}
            className="bg-gray-200 border-cadet-gray focus:border-feldgrau pr-12 rounded-xl px-5 h-[45px] md:h-[55px] text-lg md:shadow-sm w-full duration-200 outline-none focus:outline-none"
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
                <AnimatedButtonChangeName
                  label="Сохранить изменения"
                  onClick={handleConfirm}
                  styles="hover:text-mount-pink right-18 border-r border-gray-400 pr-4"
                >
                  {isLoading ? (
                    <LoaderCircle className="animate-spin text-mount-pink" />
                  ) : (
                    <Check />
                  )}
                </AnimatedButtonChangeName>

                <AnimatedButtonChangeName
                  label="Отменить"
                  onClick={() => setIsDisabled(true)}
                  styles="hover:text-flame right-8"
                >
                  <X />
                </AnimatedButtonChangeName>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
