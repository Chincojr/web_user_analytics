import LogoMark from './LogoMark';

interface BrandProps {
  name: string;
  ariaLabel: string;
}

export default function Brand({ brand }: { brand: BrandProps }) {
  return (
    <a className="brand" href="#top" aria-label={brand.ariaLabel}>
      <LogoMark />
      {brand.name}
    </a>
  );
}
