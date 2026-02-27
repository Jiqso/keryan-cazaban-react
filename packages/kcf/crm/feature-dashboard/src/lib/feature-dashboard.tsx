import styles from './feature-dashboard.module.scss';
import { useIntl } from 'react-intl';

export function FeatureDashboard() {
  const intl = useIntl();

  const kpis = [
    {
      label: intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.KPIS.PIPELINE_VALUE.LABEL' }),
      value: '124 500 €',
      trend: '+8.4%',
    },
    {
      label: intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.KPIS.NEW_LEADS.LABEL' }),
      value: '64',
      trend: '+12%',
    },
    {
      label: intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.KPIS.CONVERSION_RATE.LABEL' }),
      value: '18.6%',
      trend: '+1.9%',
    },
    {
      label: intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.KPIS.WON_DEALS.LABEL' }),
      value: '14',
      trend: '+6.1%',
    },
  ];

  const activity = [
    {
      company: 'Aurora Agency',
      status: intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.ACTIVITY.AURORA_AGENCY.STATUS' }),
      amount: '8 200 €',
    },
    {
      company: 'Northwind Labs',
      status: intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.ACTIVITY.NORTHWIND_LABS.STATUS' }),
      amount: '3 400 €',
    },
    {
      company: 'Blue Harbor',
      status: intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.ACTIVITY.BLUE_HARBOR.STATUS' }),
      amount: '5 950 €',
    },
    {
      company: 'Vertex Studio',
      status: intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.ACTIVITY.VERTEX_STUDIO.STATUS' }),
      amount: '12 100 €',
    },
  ];

  return (
    <section className={styles['dashboard']}>
      <header className={styles['header']}>
        <div>
          <p className={styles['subtitle']}>
            {intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.SUBTITLE' })}
          </p>
        </div>
        {/* <button className={styles['action']} type="button">
          Export Report
        </button> */}
      </header>

      <div className={styles['kpi-grid']}>
        {kpis.map(item => (
          <article key={item.label} className={styles['kpi-card']}>
            <p className={styles['kpi-label']}>{item.label}</p>
            <p className={styles['kpi-value']}>{item.value}</p>
            <p className={styles['kpi-trend']}>
              {item.trend} {intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.KPIS.THIS_MONTH' })}
            </p>
          </article>
        ))}
      </div>

      <div className={styles['content-grid']}>
        <article className={styles['panel']}>
          <div className={styles['panel-head']}>
            <h2>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.REVENUE.TITLE' })}</h2>
            <span>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.REVENUE.PERIOD' })}</span>
          </div>
          <div className={styles['chart-bars']}>
            {[38, 52, 46, 65, 58, 72, 80].map((height, index) => (
              <div key={`bar-${index}`} className={styles['bar-wrap']}>
                <div className={styles['bar']} style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
        </article>

        <article className={styles['panel']}>
          <div className={styles['panel-head']}>
            <h2>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.FUNNEL.TITLE' })}</h2>
            <span>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.FUNNEL.PERIOD' })}</span>
          </div>
          <div className={styles['funnel']}>
            <div className={styles['funnel-row']}>
              <span>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.FUNNEL.QUALIFIED' })}</span>
              <div className={styles['meter']}>
                <div className={styles['meter-fill']} style={{ width: '88%' }} />
              </div>
              <strong>88</strong>
            </div>
            <div className={styles['funnel-row']}>
              <span>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.FUNNEL.PROPOSAL' })}</span>
              <div className={styles['meter']}>
                <div className={styles['meter-fill']} style={{ width: '62%' }} />
              </div>
              <strong>62</strong>
            </div>
            <div className={styles['funnel-row']}>
              <span>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.FUNNEL.NEGOTIATION' })}</span>
              <div className={styles['meter']}>
                <div className={styles['meter-fill']} style={{ width: '41%' }} />
              </div>
              <strong>41</strong>
            </div>
            <div className={styles['funnel-row']}>
              <span>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.FUNNEL.WON' })}</span>
              <div className={styles['meter']}>
                <div className={styles['meter-fill']} style={{ width: '24%' }} />
              </div>
              <strong>24</strong>
            </div>
          </div>
        </article>

        <article className={`${styles['panel']} ${styles['panel-wide']}`}>
          <div className={styles['panel-head']}>
            <h2>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.ACTIVITY.TITLE' })}</h2>
            <span>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.ACTIVITY.PERIOD' })}</span>
          </div>
          <ul className={styles['activity-list']}>
            {activity.map(item => (
              <li key={item.company} className={styles['activity-item']}>
                <div>
                  <p className={styles['activity-name']}>{item.company}</p>
                  <p className={styles['activity-status']}>{item.status}</p>
                </div>
                <p className={styles['activity-amount']}>{item.amount}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className={styles['panel']}>
          <div className={styles['panel-head']}>
            <h2>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.GOAL.TITLE' })}</h2>
            <span>{intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.GOAL.PERIOD' })}</span>
          </div>
          <div className={styles['progress-wrap']}>
            <div className={styles['progress-ring']}>
              <span>74%</span>
            </div>
            <p className={styles['progress-text']}>
              {intl.formatMessage({ id: 'CRM.DASHBOARD.FEATURE.GOAL.DESCRIPTION' })}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FeatureDashboard;
