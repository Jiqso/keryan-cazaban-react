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
  children?: React.ReactNode;
}
export function FadedNavigation({ items, children }: FadedNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    const contentElement = document.querySelector(`.${styles['content']}`) as HTMLElement;

    if (element && contentElement) {
      const elementDiv = (element as HTMLElement).offsetTop + 100;
      contentElement.scrollTo({ top: elementDiv, behavior: 'smooth' });
      setIsScrolled(true);
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Get the content element to attach scroll listener
    const contentElement = document.querySelector(`.${styles['content']}`) as HTMLElement;

    if (!contentElement) return;

    const handleScroll = () => {
      const scrollThreshold = 100;
      const scrolled = contentElement.scrollTop > scrollThreshold;

      setIsScrolled(scrolled);

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

    contentElement.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial check

    return () => contentElement.removeEventListener('scroll', throttledScroll);
  }, [items]);

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div className={styles['mobile-backdrop']} onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Top Horizontal Navigation */}
      <nav className={`${styles['top-nav']} ${isScrolled ? styles.hidden : ''}`}>
        <button
          className={styles['mobile-menu-toggle']}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles['hamburger']}></span>
          <span className={styles['hamburger']}></span>
          <span className={styles['hamburger']}></span>
        </button>
        <div className={styles['top-nav-content']}>
          {items.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={`${styles['top-nav-link']} ${activeSection === item.id ? styles.active : ''}`}
              onClick={e => handleNavigationClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Side Navigation Tree */}
      <aside
        className={`${styles['side-nav']} ${isScrolled ? styles.visible : ''} ${isMobileMenuOpen ? styles['mobile-open'] : ''}`}
      >
        {/* <button
          style={{ marginTop: '1rem' }}
          className={styles['mobile-menu-toggle']}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles['hamburger']}></span>
          <span className={styles['hamburger']}></span>
          <span className={styles['hamburger']}></span>
        </button> */}
        <nav className={styles['side-nav-content']}>
          {items.map(item => (
            <div key={item.id} className={styles['nav-item']}>
              <a
                href={item.href}
                className={`${styles['side-nav-link']} ${
                  activeSection === item.id ? styles.active : ''
                }`}
                onClick={e => handleNavigationClick(e, item.href)}
              >
                {item.label}
              </a>
              {item.children && item.children.length > 0 && (
                <div className={styles['nav-children']}>
                  {item.children.map(child => (
                    <a
                      key={child.id}
                      href={child.href}
                      className={`${styles['side-nav-child-link']} ${
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

      {/* Main Content Area */}
      <main className={`${styles['content']} ${isScrolled ? styles['content-shifted'] : ''}`}>
        {children}
      </main>
    </>
  );
}

export default FadedNavigation;
