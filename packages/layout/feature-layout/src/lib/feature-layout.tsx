import styles from "./feature-layout.module.scss";
import { FadedNavigation } from "@navigation/faded-navigation";
import { useIntl } from "react-intl";
import { useState } from "react";

export function FeatureLayout() {
  const intl = useIntl();
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    {
      id: "home",
      label: intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.HOME" }),
      href: "#home",
    },
    {
      id: "about",
      label: intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.ABOUT" }),
      href: "#about",
    },
    {
      id: "skills",
      label: intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.SKILLS" }),
      href: "#skills",
    },
    {
      id: "portfolio",
      label: intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.PORTFOLIO" }),
      href: "#portfolio",
    },
    {
      id: "contact",
      label: intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.CONTACT" }),
      href: "#contact",
    },
  ];

  console.log("isScrolled", isScrolled);

  return (
    <div className={styles["container"]}>
      <FadedNavigation
        items={navigationItems}
        isScrolled={isScrolled}
        onScrolledChange={setIsScrolled}
      />

      <main
        className={`${styles["content"]} ${
          isScrolled ? styles["contentShifted"] : ""
        }`}
      >
        <section id="home" className={styles["section"]}>
          <div className={styles["hero"]}>
            <h1 className={styles["heroTitle"]}>Keryan Cazaban</h1>
            <p className={styles["heroSubtitle"]}>
              {intl.formatMessage({
                id: "HOMEPAGE.HOME.JOB",
              })}
            </p>
            <p className={styles["heroDescription"]}>
              {intl.formatMessage({
                id: "HOMEPAGE.HOME.JOB_DESCRIPTION",
              })}
            </p>
            <a href="#contact" className={styles["ctaButton"]}>
              {intl.formatMessage({
                id: "HOMEPAGE.HOME.CONTACT_ME",
              })}
            </a>
          </div>
        </section>

        <section id="about" className={styles["section"]}>
          <h2 className={styles["sectionTitle"]}>
            {intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.ABOUT" })}
          </h2>
          <div className={styles["aboutContent"]}>
            <p>
              {intl.formatMessage({
                id: "HOMEPAGE.HOME.ABOUT.DESCRIPTION",
              })}
            </p>
            <p>
              {intl.formatMessage({
                id: "HOMEPAGE.HOME.ABOUT.DESCRIPTION_2",
              })}
            </p>
          </div>
        </section>

        <section id="skills" className={styles["section"]}>
          <h2 className={styles["sectionTitle"]}>
            {intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.SKILLS" })}
          </h2>
          <div className={styles["skillsGrid"]}>
            <div className={styles["skillCategory"]}>
              <h3>
                {intl.formatMessage({
                  id: "HOMEPAGE.HOME.SKILLS.FRONTEND",
                })}
              </h3>
              <ul>
                <li>React & TypeScript</li>
                <li>Next.js</li>
                <li>HTML5, CSS3, JavaScript</li>
                <li>Responsive Design</li>
                <li>UI/UX Implementation</li>
              </ul>
            </div>

            <div className={styles["skillCategory"]}>
              <h3>
                {intl.formatMessage({
                  id: "HOMEPAGE.HOME.SKILLS.BACKEND",
                })}
              </h3>
              <ul>
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>Database Design</li>
                <li>Authentication & Security</li>
                <li>Server-side Rendering</li>
              </ul>
            </div>

            <div className={styles["skillCategory"]}>
              <h3>
                {intl.formatMessage({
                  id: "HOMEPAGE.HOME.SKILLS.TOOLS",
                })}
              </h3>
              <ul>
                <li>Git & Version Control</li>
                <li>Nx Monorepo</li>
                <li>Vite & Build Tools</li>
                <li>Testing (Vitest, Jest)</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>

            <div className={styles["skillCategory"]}>
              <h3>
                {intl.formatMessage({
                  id: "HOMEPAGE.HOME.SKILLS.SOFT_SKILLS",
                })}
              </h3>
              <ul>
                <li>Problem Solving</li>
                <li>Client Communication</li>
                <li>Project Management</li>
                <li>Agile Methodology</li>
                <li>Code Review & Mentoring</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="portfolio" className={styles["section"]}>
          <h2 className={styles["sectionTitle"]}>
            {intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.PORTFOLIO" })}
          </h2>
          <p className={styles["portfolioPlaceholder"]}>
            Portfolio examples coming soon. This section will showcase
            real-world applications and projects demonstrating my capabilities
            in web development.
          </p>
          {/* Future portfolio items will be added here */}
        </section>

        <section id="contact" className={styles["section"]}>
          <h2 className={styles["sectionTitle"]}>
            {intl.formatMessage({ id: "HOMEPAGE.HOME.NAVIGATION.CONTACT" })}
          </h2>
          <div className={styles["contactContent"]}>
            <div className={styles["contactMethods"]}>
              <div className={styles["contactMethod"]}>
                <h3>Email</h3>
                <a href="mailto:keryan.cazaban@gmail.com">
                  keryan.cazaban@gmail.com
                </a>
              </div>

              <div className={styles["contactMethod"]}>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/keryan-cazaban-ba69b2153"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/keryan-cazaban
                </a>
              </div>

              <div className={styles["contactMethod"]}>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Jiqso"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Jiqso
                </a>
              </div>
            </div>
            <p className={styles["contactIntro"]}>
              {intl.formatMessage({ id: "HOMEPAGE.HOME.CONTACT.INTRO" })}
            </p>

            <div className={styles["contactForm"]}>
              <h3>
                {intl.formatMessage({
                  id: "HOMEPAGE.HOME.CONTACT.SEND_MESSAGE",
                })}
              </h3>
              <form>
                <div className={styles["formGroup"]}>
                  <label htmlFor="name">
                    {intl.formatMessage({
                      id: "HOMEPAGE.HOME.CONTACT.FULLNAME",
                    })}
                  </label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles["formGroup"]}>
                  <label htmlFor="email">
                    {intl.formatMessage({
                      id: "HOMEPAGE.HOME.CONTACT.EMAIL",
                    })}
                  </label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className={styles["formGroup"]}>
                  <label htmlFor="message">
                    {intl.formatMessage({
                      id: "HOMEPAGE.HOME.CONTACT.MESSAGE",
                    })}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles["submitButton"]}>
                  {intl.formatMessage({
                    id: "HOMEPAGE.HOME.CONTACT.SEND_MESSAGE",
                  })}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FeatureLayout;
