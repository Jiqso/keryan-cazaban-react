import styles from './crm-navigation.module.scss';
import { JSX, useState } from 'react';
import { LanguageSelectInput } from '@packages/shared/components/inputs';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

interface NavItemProps {
  to: string;
  section: string;
  label: any;
  icon: JSX.Element;
}

export function CrmNavigation() {
  const intl = useIntl();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItemProps[] = [
    {
      to: '/crm',
      section: 'dashboard',
      label: useIntl().formatMessage({ id: 'CRM.DASHBOARD.NAVIGATION.DASHBOARD' }),
      icon: <DashboardRoundedIcon fontSize="small" />,
    },
    // {
    //   to: '/crm#clients',
    //   section: 'clients',
    //   label: useIntl().formatMessage({ id: 'CRM.DASHBOARD.NAVIGATION.CLIENTS' }),
    //   icon: <GroupRoundedIcon fontSize="small" />,
    // },
    // {
    //   to: '/crm#sales',
    //   section: 'sales',
    //   label: useIntl().formatMessage({ id: 'CRM.DASHBOARD.NAVIGATION.SALES' }),
    //   icon: <InsightsRoundedIcon fontSize="small" />,
    // },
    // {
    //   to: '/crm#settings',
    //   section: 'settings',
    //   label: useIntl().formatMessage({ id: 'CRM.DASHBOARD.NAVIGATION.SETTINGS' }),
    //   icon: <SettingsRoundedIcon fontSize="small" />,
    // },
  ];

  const getCurrentCrmLocationLabel = () => {
    const normalizedHash = location.hash.replace('#', '').toLowerCase();
    if (normalizedHash) {
      const hashItem = navItems.find(item => item.section === normalizedHash);
      if (hashItem) {
        return hashItem.label;
      }
    }

    const normalizedPath = location.pathname.toLowerCase();
    if (normalizedPath === '/crm' || normalizedPath === '/crm/') {
      return intl.formatMessage({ id: 'CRM.DASHBOARD.NAVIGATION.DASHBOARD' });
    }

    const pathSegment = normalizedPath.split('/').filter(Boolean)[1];
    if (pathSegment) {
      const segmentItem = navItems.find(item => item.section === pathSegment);
      if (segmentItem) {
        return segmentItem.label;
      }
    }

    return intl.formatMessage({ id: 'CRM.DASHBOARD.NAVIGATION.DASHBOARD' });
  };

  return (
    <>
      {/* Top Horizontal Navigation */}
      <nav className={styles['top-nav']}>
        <div className={styles['top-nav__content']}>
          <div className={styles['top-nav__content__map']}>
            <button
              className={styles['top-nav-toggle']}
              type="button"
              aria-label="Toggle CRM navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              ☰
            </button>
            <p>{getCurrentCrmLocationLabel()}</p>
          </div>
          <div className={styles['top-nav__content__title']}>
            <p>My CRM Template</p>
          </div>
          <LanguageSelectInput />
        </div>
      </nav>

      {/* Side Navigation Tree */}
      <aside className={`${styles['side-nav']} ${isMenuOpen ? styles['menu-open'] : ''}`}>
        <nav className={styles['side-nav-content']}>
          {navItems.map(item => (
            <Link key={item.to} to={item.to} className={styles['side-nav-link']}>
              <span className={styles['side-nav-icon']}>{item.icon}</span>
              <span
                className={`${styles['side-nav-label']} ${isMenuOpen ? styles['side-nav-label-open'] : ''}`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className={`${styles['content']} ${isMenuOpen ? styles['content__menu-open'] : ''}`}>
        <Outlet />
      </main>
    </>
  );
}

export default CrmNavigation;
