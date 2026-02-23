# Navigation Layout Pattern

This document explains how navigation items flow from child components to parent layouts in this application.

## Architecture Overview

The app uses React Router's nested routes with outlet context to pass navigation configuration from feature pages up to their layout components.

## How It Works

### 1. App Routes (`apps/kcf/src/app/app.tsx`)

```tsx
<Routes>
  <Route path="/" element={<FadedNavigation />}>
    <Route index element={<FeatureHomepage />} />
  </Route>
  <Route path="/marketplace" element={<StickyNavigation />}>
    <Route index element={<FeatureMarketplace />} />
    <Route path=":uuid" element={<FeatureProduct />} />
  </Route>
</Routes>
```

- **FadedNavigation** is a layout that wraps the homepage
- **StickyNavigation** is a layout that wraps marketplace pages
- Child routes render inside their parent layout via `<Outlet />`

### 2. Layout Component (`FadedNavigation`)

The layout provides context to its children and renders them via `<Outlet context={...}>`:

```tsx
const [items, setItems] = useState<FadedNavigationItem[]>([]);

<Outlet context={{ setNavigationItems: setItems }} />;
```

Navigation items are dynamic and controlled by whichever child route is active.

### 3. Child Component (`FeatureHomepage`)

The child component receives the context and sets its navigation items:

```tsx
const { setNavigationItems } = useOutletContext<OutletContext>();

const navigationItems = useMemo(
  () => [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    // ...
  ],
  [intl],
);

useEffect(() => {
  setNavigationItems(navigationItems);
}, [navigationItems, setNavigationItems]);
```

## Benefits

1. **Decoupled**: Navigation items are defined in the feature component, not hardcoded in layouts
2. **Dynamic**: Different routes can provide different navigation structures
3. **Type-safe**: TypeScript enforces the contract between parent and child
4. **Clean**: Follows React Router best practices for nested routes

## Adding Navigation to a New Page

1. Define navigation items in your feature component using `useMemo`
2. Get the outlet context: `const { setNavigationItems } = useOutletContext<OutletContext>()`
3. Pass items to the layout in a `useEffect` hook
4. The layout automatically renders them

## Example: Adding Product Navigation

If `FeatureProduct` needs custom navigation items:

```tsx
export function FeatureProduct() {
  const { setNavigationItems } = useOutletContext<OutletContext>();

  const productNav = useMemo(
    () => [
      { id: 'overview', label: 'Overview', href: '#overview' },
      { id: 'specs', label: 'Specifications', href: '#specs' },
    ],
    [],
  );

  useEffect(() => {
    setNavigationItems(productNav);
  }, [productNav, setNavigationItems]);

  // ... rest of component
}
```

The `StickyNavigation` layout will automatically display these items.
