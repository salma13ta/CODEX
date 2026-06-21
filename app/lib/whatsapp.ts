export const WHATSAPP_PHONE = '201226694723';

export function openWhatsApp(message: string) {
  window.open(
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer'
  );
}
