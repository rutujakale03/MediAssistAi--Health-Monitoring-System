export function isValidPersonName(value) {
  return /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]*$/u.test(value.trim());
}

export function isValidIndianMobile(value) {
  return /^[6-9]\d{9}$/.test(value);
}
