export function generateSlug(text: string): string {
    const normalizedText = text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  
    return normalizedText
      .replace(/[^a-z0-9]/g, "-") // substitui caracteres não alfanuméricos por hífen
      .replace(/-+/g, "-") // remove múltiplos hífens seguidos
      .replace(/^-|-$/g, ""); // remove hífens do início e do fim
}

  