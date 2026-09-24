const numberFormatter = new Intl.NumberFormat("bn-BD");

export const bnNumber = (value: number) => numberFormatter.format(value);

export const bnRating = (value: number | null) =>
  value === null ? "রেটিং নেই" : numberFormatter.format(value);

export const bnPrice = (value?: number) =>
  typeof value === "number" ? `${numberFormatter.format(value)} টাকা` : "তথ্য নেই";
