export function parseDate(dateString: string): Date | null {
  const [day, month, year] = dateString.split('.').map(Number)
  const date = new Date(year, month - 1, day)
  if (
    !isNaN(date.getTime()) &&
    date.getDate() === day &&
    date.getMonth() + 1 === month &&
    date.getFullYear() === year
  ) {
    return date
  }
  return null
}
