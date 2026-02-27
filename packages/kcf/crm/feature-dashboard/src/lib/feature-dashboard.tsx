import styles from './feature-dashboard.module.scss';

export function FeatureDashboard() {
  const kpis = [
    { label: 'Pipeline Value', value: '$124,500', trend: '+8.4%' },
    { label: 'New Leads', value: '64', trend: '+12%' },
    { label: 'Conversion Rate', value: '18.6%', trend: '+1.9%' },
    { label: 'Won Deals', value: '14', trend: '+6.1%' },
  ];

  const activity = [
    { company: 'Aurora Agency', status: 'Proposal sent', amount: '$8,200' },
    { company: 'Northwind Labs', status: 'Call scheduled', amount: '$3,400' },
    { company: 'Blue Harbor', status: 'Negotiation', amount: '$5,950' },
    { company: 'Vertex Studio', status: 'Contract signed', amount: '$12,100' },
  ];

  return (
    <section className={styles['dashboard']}>
      <header className={styles['header']}>
        <div>
          <h1 className={styles['title']}>CRM Dashboard</h1>
          <p className={styles['subtitle']}>Overview of sales performance and team activity</p>
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
            <p className={styles['kpi-trend']}>{item.trend} this month</p>
          </article>
        ))}
      </div>

      <div className={styles['content-grid']}>
        <article className={styles['panel']}>
          <div className={styles['panel-head']}>
            <h2>Revenue Trend</h2>
            <span>Last 7 days</span>
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
            <h2>Deal Funnel</h2>
            <span>Q1 snapshot</span>
          </div>
          <div className={styles['funnel']}>
            <div className={styles['funnel-row']}>
              <span>Qualified</span>
              <div className={styles['meter']}>
                <div className={styles['meter-fill']} style={{ width: '88%' }} />
              </div>
              <strong>88</strong>
            </div>
            <div className={styles['funnel-row']}>
              <span>Proposal</span>
              <div className={styles['meter']}>
                <div className={styles['meter-fill']} style={{ width: '62%' }} />
              </div>
              <strong>62</strong>
            </div>
            <div className={styles['funnel-row']}>
              <span>Negotiation</span>
              <div className={styles['meter']}>
                <div className={styles['meter-fill']} style={{ width: '41%' }} />
              </div>
              <strong>41</strong>
            </div>
            <div className={styles['funnel-row']}>
              <span>Won</span>
              <div className={styles['meter']}>
                <div className={styles['meter-fill']} style={{ width: '24%' }} />
              </div>
              <strong>24</strong>
            </div>
          </div>
        </article>

        <article className={`${styles['panel']} ${styles['panel-wide']}`}>
          <div className={styles['panel-head']}>
            <h2>Recent Activity</h2>
            <span>Live updates</span>
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
            <h2>Goal Progress</h2>
            <span>Monthly target</span>
          </div>
          <div className={styles['progress-wrap']}>
            <div className={styles['progress-ring']}>
              <span>74%</span>
            </div>
            <p className={styles['progress-text']}>$74,000 reached of $100,000 objective</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FeatureDashboard;
