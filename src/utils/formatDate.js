export function formatArabicDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ar-EG-u-nu-arab", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
