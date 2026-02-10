import styles from './input.module.scss';

interface MarketplaceLoginInputProps {
  type: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  autoFocus?: boolean;
}
export function MarketplaceLoginInput({
  placeholder,
  type,
  value,
  setValue,
  autoFocus = false,
}: MarketplaceLoginInputProps) {
  return (
    <input
      type={type}
      className={styles['marketplace-login-input']}
      value={value}
      placeholder={placeholder}
      onChange={e => setValue(e.target.value)}
      autoFocus={autoFocus}
    />
  );
}
