import styles from './sticky-navigation.module.scss';
import React from 'react';
import { useIntl } from 'react-intl';
import { MarketplaceLoginInput } from '@packages/shared/components/inputs';
import { Dialog, MenuItem, Menu, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';

interface StickyNavigationCategory {
  id: string;
  label: string;
  icon?: string;
  subcategories?: {
    id: string;
    label: string;
  }[];
}

interface StickyNavigationProps {
  categories?: StickyNavigationCategory[];
  onSearch?: (query: string) => void;
  onCategorySelect?: (categoryId: string) => void;
  cartItemCount?: number;
  onCartClick?: () => void;
  hasLogin?: boolean;
  children?: React.ReactNode;
}

export function StickyNavigation({
  categories = [],
  onSearch,
  onCategorySelect,
  cartItemCount = 0,
  onCartClick,
  hasLogin = false,
  children,
}: StickyNavigationProps) {
  const intl = useIntl();

  // const [searchQuery, setSearchQuery] = useState('');
  // const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  // const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [loginIsOpen, setLoginIsOpen] = useState<boolean>(false);
  const [loginOption, setLoginOption] = useState<boolean>(true);
  const [pseudo, setPseudo] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [showFilters, setShowFilters] = useState(false);

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (onSearch) {
  //     onSearch(searchQuery);
  //   }
  // };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('marketplaceUser', JSON.stringify({ pseudo }));
    setLoginIsOpen(false);
  };
  // const handleCategoryClick = (categoryId: string) => {
  //   setActiveCategory(activeCategory === categoryId ? null : categoryId);
  //   if (onCategorySelect) {
  //     onCategorySelect(categoryId);
  //   }
  // };
  const handleProfileClick = () => {
    setLoginIsOpen(true);
  };

  return (
    <div className={styles['marketplace-container']}>
      {/* Sticky Navigation Bar */}
      <nav className={styles['navbar']}>
        <div className={styles['navbar-content']}>
          {/* Logo/Brand */}
          <div className={styles['brand']}>
            <span className={styles['brand-icon']}>🖨️</span>
            <span className={styles['brand-text']}>Marketplace</span>
          </div>

          {/* Categories Dropdown */}
          {/* <div className={styles['categories-section']}>
            <button
              className={styles['categories-btn']}
              onClick={() => setShowFilters(!showFilters)}
            >
              <span className={styles['menu-icon']}>☰</span>
              Categories
            </button>

            {showFilters && (
              <div className={styles['categories-dropdown']}>
                {categories.map(category => (
                  <div key={category.id} className={styles['category-item']}>
                    <button
                      className={`${styles['category-btn']} ${
                        activeCategory === category.id ? styles['active'] : ''
                      }`}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.icon && (
                        <span className={styles['category-icon']}>{category.icon}</span>
                      )}
                      {category.label}
                    </button>
                    {activeCategory === category.id && category.subcategories && (
                      <div className={styles['subcategories']}>
                        {category.subcategories.map(sub => (
                          <button
                            key={sub.id}
                            className={styles['subcategory-btn']}
                            onClick={() => onCategorySelect?.(sub.id)}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div> */}

          {/* Search Bar */}
          {/* <input
            type="text"
            className={styles['search-input']}
            placeholder="Search 3D prints..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchExpanded(true)}
            onBlur={() => setIsSearchExpanded(false)}
          /> */}

          {/* Actions */}
          <div className={styles['navbar-actions']}>
            {/* <button className={styles['action-btn']} title="Favorites">
              ❤️
            </button>
            <button className={styles['action-btn']} title="Shopping Cart" onClick={onCartClick}>
              <span className={styles['cart-icon']}>🛒</span>
              {cartItemCount > 0 && <span className={styles['cart-badge']}>{cartItemCount}</span>}
            </button> */}
            {localStorage.getItem('marketplaceUser') ? (
              <IconButton
                onClick={event => {
                  setAnchorEl(event.currentTarget as HTMLElement);
                }}
                sx={{
                  height: '40px',
                  width: '40px',
                }}
              >
                <AccountCircle
                  sx={{
                    height: '30px',
                    width: '30px',
                    color: 'green',
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={handleProfileClick}
                sx={{
                  height: '40px',
                  width: '40px',
                }}
              >
                <AccountCircle
                  sx={{
                    height: '30px',
                    width: '30px',
                    color: 'red',
                  }}
                />
              </IconButton>
            )}
          </div>
        </div>
      </nav>

      {/* Secondary Navigation Bar with Filters */}
      {/* <div className={styles['secondary-nav']}>
        <div className={styles['filters']}>
            <button className={styles['filter-btn']}>Material</button>


          <button className={styles['filter-btn']}>Print Quality</button>
          <button className={styles['filter-btn']}>Category</button>
          <button className={styles['filter-btn']}>Price Range</button>
          <button className={styles['filter-btn']}>Creator</button>
          <button className={styles['filter-btn']}>Rating</button>
        </div>
      </div> */}

      {/* Login Content Area */}
      {!localStorage.getItem('marketplaceUser') ? (
        <Dialog
          open={loginIsOpen}
          onClose={() => setLoginIsOpen(false)}
          style={{ backgroundColor: 'transparent' }}
        >
          {loginOption ? (
            <form className={styles['login']} onSubmit={handleLogin}>
              <h1>
                {intl.formatMessage({
                  id: 'SHARED.FORM.LOGIN',
                })}
              </h1>
              <MarketplaceLoginInput
                type="pseudo"
                value={pseudo}
                placeholder={intl.formatMessage({
                  id: 'INPUTS.PSEUDO_EMAIL',
                })}
                setValue={setPseudo}
                autoFocus
              />
              <MarketplaceLoginInput
                type="password"
                value={password}
                placeholder={intl.formatMessage({ id: 'INPUTS.PASSWORD' })}
                setValue={setPassword}
              />
              <button type="submit" className={styles['login__button']}>
                {intl.formatMessage({
                  id: 'SHARED.FORM.GET_LOGGED',
                })}
              </button>
              <p>
                {intl.formatMessage({
                  id: 'COMPONENTS.NAVIGATION.STICKY_NAVIGATION.TEXT.NO_ACCOUNT',
                })}{' '}
                <button
                  type="button"
                  onClick={() => setLoginOption(false)}
                  className={styles['login__link-button']}
                >
                  {intl.formatMessage({
                    id: 'COMPONENTS.NAVIGATION.STICKY_NAVIGATION.TEXT.REGISTER',
                  })}
                </button>
              </p>
            </form>
          ) : (
            <form className={styles['login']} onSubmit={handleLogin}>
              <h1>
                {intl.formatMessage({
                  id: 'SHARED.FORM.REGISTER',
                })}
              </h1>
              <MarketplaceLoginInput
                type="pseudo"
                value={pseudo}
                placeholder={intl.formatMessage({
                  id: 'INPUTS.PSEUDO_EMAIL',
                })}
                setValue={setPseudo}
                autoFocus
              />
              <MarketplaceLoginInput
                type="password"
                value={password}
                placeholder={intl.formatMessage({ id: 'INPUTS.PASSWORD' })}
                setValue={setPassword}
              />
              <button type="submit" className={styles['login__button']}>
                {intl.formatMessage({
                  id: 'SHARED.FORM.GET_REGISTERED',
                })}
              </button>
              <p>
                {intl.formatMessage({
                  id: 'COMPONENTS.NAVIGATION.STICKY_NAVIGATION.TEXT.ALREADY_HAVE_ACCOUNT',
                })}{' '}
                <button
                  type="button"
                  onClick={() => setLoginOption(true)}
                  className={styles['login__link-button']}
                >
                  {intl.formatMessage({
                    id: 'COMPONENTS.NAVIGATION.STICKY_NAVIGATION.TEXT.LOGIN',
                  })}
                </button>
              </p>
            </form>
          )}
        </Dialog>
      ) : (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => {
              localStorage.removeItem('marketplaceUser');
              setAnchorEl(null);
            }}
          >
            {intl.formatMessage({
              id: 'COMPONENTS.NAVIGATION.STICKY_NAVIGATION.TEXT.GET_DISCONNECTED',
            })}
          </MenuItem>
        </Menu>
      )}
      {/* Main Content Area */}
      <main className={styles['content']}>{children}</main>
    </div>
  );
}

export default StickyNavigation;
