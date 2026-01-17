import styles from './faded-navigation.module.scss';
import { useEffect, useState } from 'react';

interface FadedNavigationItem {
  id: string;
  label: string;
  href: string;
  children?: FadedNavigationItem[];
}

interface FadedNavigationProps {
  items: FadedNavigationItem[];
  isScrolled?: boolean;
  onScrolledChange?: (isScrolled: boolean) => void;
}
export function FadedNavigation({
  items,
  isScrolled: externalIsScrolled,
  onScrolledChange,
}: FadedNavigationProps) {
  const [internalIsScrolled, setInternalIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Use external state if provided, otherwise use internal
  const isScrolled = externalIsScrolled !== undefined ? externalIsScrolled : internalIsScrolled;

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setInternalIsScrolled(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      const scrolled = window.scrollY > scrollThreshold;

      if (externalIsScrolled === undefined) {
        setInternalIsScrolled(scrolled);
      }

      if (onScrolledChange) {
        onScrolledChange(scrolled);
      }

      // Detect active section based on scroll position
      const sections = items.map(item => document.getElementById(item.id));
      const current = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', throttledScroll);
  }, [items, externalIsScrolled, onScrolledChange]);

  return (
    <>
      {/* Top Horizontal Navigation */}
      <nav className={`${styles.topNav} ${isScrolled ? styles.hidden : ''}`}>
        <div className={styles.topNavContent}>
          {items.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={`${styles.topNavLink} ${activeSection === item.id ? styles.active : ''}`}
              onClick={e => handleNavigationClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Side Navigation Tree */}
      <aside className={`${styles.sideNav} ${isScrolled ? styles.visible : ''}`}>
        <nav className={styles.sideNavContent}>
          {items.map(item => (
            <div key={item.id} className={styles.navItem}>
              <a
                href={item.href}
                className={`${styles.sideNavLink} ${
                  activeSection === item.id ? styles.active : ''
                }`}
                onClick={e => handleNavigationClick(e, item.href)}
              >
                {item.label}
              </a>
              {item.children && item.children.length > 0 && (
                <div className={styles.navChildren}>
                  {item.children.map(child => (
                    <a
                      key={child.id}
                      href={child.href}
                      className={`${styles.sideNavChildLink} ${
                        activeSection === child.id ? styles.active : ''
                      }`}
                      onClick={e => handleNavigationClick(e, child.href)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default FadedNavigation;
