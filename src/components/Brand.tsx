interface BrandProps {
  name: string;
  mark: string;
  ariaLabel: string;
}

export default function Brand({ brand }: { brand: BrandProps }) {
  return (
    <a className="brand" href="#top" aria-label={brand.ariaLabel}>
      <span className="brand-mark" aria-hidden="true">{brand.mark}</span>
      {brand.name}
    </a>
  );
}
