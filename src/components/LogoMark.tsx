export default function LogoMark({ compact = false }: { compact?: boolean }) {
  return <img className={`brand-mark ${compact ? 'brand-mark-compact' : ''}`} src="/trace-mark.svg" alt="" aria-hidden="true" />;
}
