import styles from './input.module.scss';
import { useContext } from 'react';
import { Select, MenuItem } from '@mui/material';
import { LanguageContext } from '@packages/shared/utils/language-provider';
import { FR, GB } from 'country-flag-icons/react/3x2';

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

/* eslint-disable-next-line */
interface LanguageSelectInputProps {}
export function LanguageSelectInput(props: LanguageSelectInputProps) {
  const { language, handleLanguageChange } = useContext(LanguageContext);

  const languages = [
    { code: 'en', flag: <GB /> },
    { code: 'fr', flag: <FR /> },
  ];

  const handleLocaleChange = (event: any) => {
    handleLanguageChange(event.target.value);
  };
  return (
    <Select
      sx={{
        width: '80px',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
      }}
      id="language-select"
      value={language}
      label="Language"
      onChange={handleLocaleChange}
      autoWidth
    >
      {languages.map(language => (
        <MenuItem
          className={styles['language-select__menu-item']}
          id="language-select-menu-item"
          key={language.code}
          value={language.code}
        >
          {language.flag}
        </MenuItem>
      ))}
    </Select>
  );
}
