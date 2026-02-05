import styles from './sticky-navigation.module.scss';
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
  children?: React.ReactNode;
}

export function StickyNavigation({
  categories = [],
  onSearch,
  onCategorySelect,
  cartItemCount = 0,
  onCartClick,
  children,
}: StickyNavigationProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
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
            </button>
            <button className={styles['action-btn']} title="Account">
              👤
            </button> */}
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

      {/* Main Content Area */}
      <main className={styles['content']}>{children}</main>
    </div>
  );
}

export default StickyNavigation;
