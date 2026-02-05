import styles from './sticky-navigation.module.scss';

interface StickyNavigationItem {
  id: string;
  label: string;
  href: string;
  children?: StickyNavigationItem[];
}

interface StickyNavigationProps {
  // items: StickyNavigationItem[];
  children?: React.ReactNode;
}

export function StickyNavigation({ children }: StickyNavigationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StickyNavigation!</h1>
      {children}
    </div>
  );
}

export default StickyNavigation;
