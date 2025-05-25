/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { yandexMapInitializer } from '@/utils/yandexMapInitializer'

export function useYMapV3() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    yandexMapInitializer()
      .then(() => {
        return (window as any).ymaps3?.ready
      })
      .then(() => {
        if (!cancelled) setReady(true)
      })
      .catch((error) => {
        console.error('Ошибка загрузки API Яндекс.Карт:', error)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return ready
}
