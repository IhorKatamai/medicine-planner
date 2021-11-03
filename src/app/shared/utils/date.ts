export function formatDate(date: Date) {
  return `${date.getFullYear()}-${toDateNum(date.getMonth()+1)}-${toDateNum(date.getDate())}`;
}

function toDateNum(num: number) {
  return num >= 0 && num < 10 ? '0' + num : num;
}

export function formatTime(dateString: string) {
  const date = new Date(dateString);
  return `${toDateNum(date.getHours())}:${toDateNum(date.getMinutes())}`;
}
