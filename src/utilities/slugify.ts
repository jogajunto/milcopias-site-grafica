export function slugify(value: string) {
  const convertedValue = value
    .normalize("NFD") // separa letras e acentos
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // substitui não alfanuméricos por hífen
    .replace(/^-+|-+$/g, ""); // remove hífens no início/fim

  return convertedValue;
}
