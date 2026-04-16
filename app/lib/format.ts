export function formatPrice(price: number | null): string {
  if (price === null) return "na zapytanie";
  return (
    price.toLocaleString("pl-PL", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }) + " zł"
  );
}

export function formatPriceDetail(price: number | null): string {
  if (price === null) return "na zapytanie";
  return (
    price.toLocaleString("pl-PL", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }) + " zł"
  );
}

export function mailto(subject: string, body?: string): string {
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) params.set("body", body);
  return `mailto:jakub.gornicki@gmail.com?${params.toString()}`;
}
