export const firstLetterUp = (str: string) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomSvg = (images: { path: string; alt: string }[]) => {
  const index = getRandomNumber(0, images.length - 1)
  return images[index]
}

export const getRandomRotate = (min: number, max: number) => {
  return getRandomNumber(min, max)
}
