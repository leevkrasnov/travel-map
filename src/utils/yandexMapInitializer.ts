let scriptPromise: Promise<void> | null = null

export function yandexMapInitializer(): Promise<void> {
  const apiKey = import.meta.env.VITE_YANDEX_MAPS_API_KEY

  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve, reject) => {
    if (document.querySelector('script[data-ymaps3]')) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`
    script.async = true
    script.setAttribute('data-ymaps3', 'true')
    script.onload = () => resolve()
    script.onerror = () =>
      reject(new Error('Failed to load Yandex Maps script'))
    document.head.appendChild(script)
  })
  return scriptPromise
}
