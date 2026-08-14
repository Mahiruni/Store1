export function formatMoney(amount: string, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: Number(amount) % 1 === 0 ? 0 : 2,
  }).format(Number(amount));
}
