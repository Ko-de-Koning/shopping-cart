const CURRENCTY_FORMATTER = new Intl.NumberFormat(undefined, { currency: "EUR", style: "currency" })

export function formatCurrency(number: number) {
    return CURRENCTY_FORMATTER.format(number)
}