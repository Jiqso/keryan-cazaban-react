import styles from './feature-homepage.module.scss';
import { FadedNavigation } from '@packages/shared/navigation/faded-navigation';
import { PortfolioCard } from '@packages/shared/components/cards';
import { useIntl } from 'react-intl';

export function FeatureHomepage() {
  const intl = useIntl();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    fetch(`${import.meta.env.VITE_BACKEND_URL}/homepage/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
        return response.json();
      })
      .then(data => {
        console.log('Message sent successfully:', data);
        form.reset();
        // You can add a success message to the user here
      })
      .catch(error => {
        console.error('Error sending message:', error);
        // You can add an error message to the user here
      });
  }

  const navigationItems = [
    {
      id: 'home',
      label: intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.HOME' }),
      href: '#home',
    },
    {
      id: 'about',
      label: intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.ABOUT' }),
      href: '#about',
    },
    {
      id: 'skills',
      label: intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.SKILLS' }),
      href: '#skills',
    },
    {
      id: 'portfolio',
      label: intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.PORTFOLIO' }),
      href: '#portfolio',
    },
    {
      id: 'contact',
      label: intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.CONTACT' }),
      href: '#contact',
    },
  ];


  const portfolioItems = [
    {
      companyName: 'MyHobbyPlace',
      projectTitle: '',
      description: '',
      previewImage: '/websiteScreenshot/MyHobbyPlace.png',
      websiteUrl: 'https://app.my-hobby-place.com/marketplace',
      tags: ['Marketplace', 'CRM'],
    },
    {
      companyName: 'Template',
      projectTitle: '',
      description: '',
      previewImage: '',
      websiteUrl: `/marketplace`,
      tags: ['Marketplace', 'Template'],
    },
  ];

  return (
    <FadedNavigation
      items={navigationItems}
      children={
        <>
          <section id="home" className={styles['section']}>
            <div className={styles['hero']}>
              {/* <div className={styles['hero-background']}>
              <div className={styles['radiant-gradient']} />
              <div className={styles['shape'] + ' ' + styles['shape1']}></div>
              <div className={styles['shape'] + ' ' + styles['shape2']}></div>
              <div className={styles['shape'] + ' ' + styles['shape3']}></div>
            </div> */}
              <div className={styles['hero-content']}>
                <h1 className={styles['hero-title']}>Keryan Cazaban</h1>
                <p className={styles['hero-subtitle']}>
                  {intl.formatMessage({
                    id: 'HOMEPAGE.HOME.JOB',
                  })}
                </p>
                <p className={styles['hero-description']}>
                  {intl.formatMessage({
                    id: 'HOMEPAGE.HOME.JOB_DESCRIPTION',
                  })}
                </p>
                <a href="#contact" className={styles['cta-button']}>
                  {intl.formatMessage({
                    id: 'HOMEPAGE.HOME.CONTACT_ME',
                  })}
                </a>
              </div>
            </div>
          </section>

          <section id="about" className={styles['section']}>
            <h2 className={styles['section-title']}>
              {intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.ABOUT' })}
            </h2>
            <div className={styles['about-content']}>
              <p>
                {intl.formatMessage({
                  id: 'HOMEPAGE.HOME.ABOUT.DESCRIPTION',
                })}
              </p>
              <p>
                {intl.formatMessage({
                  id: 'HOMEPAGE.HOME.ABOUT.DESCRIPTION_2',
                })}
              </p>
            </div>
          </section>

          <section id="skills" className={styles['section']}>
            <h2 className={styles['section-title']}>
              {intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.SKILLS' })}
            </h2>
            <div className={styles['skills-grid']}>
              <div className={styles['skills-category']}>
                <h3>
                  {intl.formatMessage({
                    id: 'HOMEPAGE.HOME.SKILLS.FRONTEND_TITLE',
                  })}
                </h3>
                <ul>
                  <li>React, PHP, Angular</li>
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>Material UI</li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.FRONTEND.RESPONSIVE_DESIGN',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.FRONTEND.UI_UX_IMPLEMENTATION',
                    })}
                  </li>
                </ul>
              </div>
              <div className={styles['skills-category']}>
                <h3>
                  {intl.formatMessage({
                    id: 'HOMEPAGE.HOME.SKILLS.BACKEND_TITLE',
                  })}
                </h3>
                <ul>
                  <li>Node.js</li>
                  <li>REST APIs</li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.BACKEND.DATABASE_DESIGN',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.BACKEND.AUTH_SECURITY',
                    })}
                  </li>
                </ul>
              </div>

              <div className={styles['skills-category']}>
                <h3>
                  {intl.formatMessage({
                    id: 'HOMEPAGE.HOME.SKILLS.TOOLS_TITLE',
                  })}
                </h3>
                <ul>
                  <li>Typescript</li>
                  <li>Github</li>
                  <li>Nx Monorepo</li>
                  <li>Vite, Express</li>
                  <li>CI/CD Pipelines, Testing (Vitest, Jest)</li>
                  <li>Prettier, ESLint, i18n, Theming</li>
                </ul>
              </div>

              <div className={styles['skills-category']}>
                <h3>
                  {intl.formatMessage({
                    id: 'HOMEPAGE.HOME.SKILLS.SOFT_SKILLS_TITLE',
                  })}
                </h3>
                <ul>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.SOFT_SKILLS.PROBLEM_SOLVING',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.SOFT_SKILLS.CLIENT_COMMUNICATION',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.SOFT_SKILLS.PROJECT_MANAGEMENT',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.SOFT_SKILLS.CODE_REVIEW_MENTORING',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.SOFT_SKILLS.TEAMWORK',
                    })}
                  </li>
                  <li>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.SKILLS.SOFT_SKILLS.ADAPTABILITY',
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="portfolio" className={styles['section']}>
            <h2 className={styles['section-title']}>
              {intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.PORTFOLIO' })}
            </h2>
            <div className={styles['portfolio-grid']}>
              {portfolioItems.map((item, index) => (
                <PortfolioCard
                  companyName={item.companyName}
                  projectTitle={item.projectTitle}
                  description={item.description}
                  previewImage={item.previewImage}
                  websiteUrl={item.websiteUrl}
                  tags={item.tags}
                />
              ))}
            </div>
          </section>

          <section id="contact" className={styles['section']}>
            <h2 className={styles['section-title']}>
              {intl.formatMessage({ id: 'HOMEPAGE.HOME.NAVIGATION.CONTACT' })}
            </h2>
            <div className={styles['contact-content']}>
              <p className={styles['contact-intro']}>
                {intl.formatMessage({ id: 'HOMEPAGE.HOME.CONTACT.INTRO' })}
              </p>
              <div className={styles['contact-methods']}>
                <div className={styles['contact-method']}>
                  <h3>Email</h3>
                  <a href="mailto:keryan.cazaban@gmail.com">keryan.cazaban@gmail.com</a>
                </div>

                <div className={styles['contact-method']}>
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/keryan-cazaban-ba69b2153"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/keryan-cazaban
                  </a>
                </div>

                <div className={styles['contact-method']}>
                  <h3>GitHub</h3>
                  <a href="https://github.com/Jiqso" target="_blank" rel="noopener noreferrer">
                    github.com/Jiqso
                  </a>
                </div>
              </div>

              <div className={styles['contact-form']}>
                <h3>
                  {intl.formatMessage({
                    id: 'HOMEPAGE.HOME.CONTACT.SEND_MESSAGE',
                  })}
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className={styles['contact-form-group']}>
                    <label htmlFor="name">
                      {intl.formatMessage({
                        id: 'HOMEPAGE.HOME.CONTACT.FULLNAME',
                      })}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={styles['form-input']}
                    />
                  </div>
                  <div className={styles['contact-form-group']}>
                    <label htmlFor="email">
                      {intl.formatMessage({
                        id: 'HOMEPAGE.HOME.CONTACT.EMAIL',
                      })}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={styles['form-input']}
                    />
                  </div>

                  <div className={styles['contact-form-group']}>
                    <label htmlFor="message">
                      {intl.formatMessage({
                        id: 'HOMEPAGE.HOME.CONTACT.MESSAGE',
                      })}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className={styles['form-input']}
                    ></textarea>
                  </div>

                  <button type="submit" className={styles['contact-submit-button']}>
                    {intl.formatMessage({
                      id: 'HOMEPAGE.HOME.CONTACT.SEND_MESSAGE',
                    })}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}

export default FeatureHomepage;
