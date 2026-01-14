
import styles from './feature-layout.module.css';


export function FeatureLayout() {
const navigationItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { 
    id: 'services', 
    label: 'Services', 
    href: '#services',
    children: [
      { id: 'service-1', label: 'Service 1', href: '#service-1' },
      { id: 'service-2', label: 'Service 2', href: '#service-2' },
    ]
  },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
  return (
    <div className={styles['container']}>
      <Navigation items={navigationItems} />
      
      <main className={styles['content']}>
        <section id="home" className={styles['section']}>
          <h1>Home Section</h1>
          <p>Content here...</p>
        </section>
        
        <section id="about" className={styles['section']}>
          <h2>About Section</h2>
          <p>Content here...</p>
        </section>
        
        <section id="services" className={styles['section']}>
          <h2>Services Section</h2>
          <div id="service-1">
            <h3>Service 1</h3>
            <p>Content here...</p>
          </div>
          <div id="service-2">
            <h3>Service 2</h3>
            <p>Content here...</p>
          </div>
        </section>
        
        <section id="contact" className={styles['section']}>
          <h2>Contact Section</h2>
          <p>Content here...</p>
        </section>
      </main>
    </div>
  );
}

export default FeatureLayout;



