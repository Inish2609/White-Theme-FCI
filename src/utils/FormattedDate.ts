export function FormattedDate(value: Date): string {
  const date = new Date(value);
  const formatted =
    date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  console.log(formatted);
  return formatted;
}
