import React, { useState } from 'react';
import './HomePage.css';

interface HomePageProps {
  onLoginSuccess?: () => void;
  onLogout: () => void;
}

interface PermissionRow {
  action: string;
  roles: boolean[];
}

const ROLES = ['IAG Head', 'IAG Coordinator', 'Auditor', 'Auditee'];

const PERMISSIONS: PermissionRow[] = [
  { action: 'Review audit schedule', roles: [true, false, false, false] },
  { action: 'Approve audit schedule', roles: [false, true, false, false] },
  { action: 'Reject audit schedule', roles: [false, false, true, true] },
  { action: 'Create audit schedule', roles: [true, false, false, false] },
  { action: 'Modify audit schedule', roles: [true, true, false, false] },
  { action: 'Send for approval', roles: [true, false, false, false] },
  { action: 'Publish audit schedule', roles: [false, true, false, false] },
  { action: 'Schedule / Re-schedule Audit', roles: [false, false, true, true] },
  { action: 'Generate report', roles: [true, false, false, false] },
  { action: 'Execute audit', roles: [true, true, false, false] },
  { action: 'Prepare audit finding', roles: [true, false, false, false] },
  { action: 'Follow up on audit finding for closer', roles: [false, true, false, false] },
  { action: 'Participate audit', roles: [false, false, true, true] },
  { action: 'Review audit finding', roles: [true, false, false, false] },
  { action: 'Action of audit finding', roles: [true, true, false, false] },
];

const NAV_ITEMS = ['Users', 'Roles', 'Actions'];

const HomePage: React.FC<HomePageProps> = ({ onLogout }) => {
  const [activeNav, setActiveNav] = useState('Actions');

  return (
    <div className="home-page">
      <aside className="home-sidebar">
        <div className="home-brand">
          <span className="home-logo" aria-hidden="true">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1.5 17 4v5.5c0 5-3.2 8.3-7 9-3.8-.7-7-4-7-9V4l7-2.5z" fill="#FFFFFF" />
            </svg>
          </span>
          <div className="home-brand-text">
            <h2>Audit Flow</h2>
            <p>Internal Audit Group</p>
          </div>
        </div>
        <nav className="home-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              className={`home-nav-item${activeNav === item ? ' active' : ''}`}
              onClick={() => setActiveNav(item)}
            >
              <span className="home-nav-icon" aria-hidden="true">
                {item === 'Users' && (
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.5" cy="4.5" r="2.25" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="11" cy="5.5" r="1.75" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1.5 13.5c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M9.5 10.5c1.8.1 3.1 1.2 3.1 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                )}
                {item === 'Roles' && (
                  <svg viewBox="0 0 16 17" width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1.5 13.5 3.5V8c0 4-2.6 6.6-5.5 7-2.9-.4-5.5-3-5.5-7V3.5L8 1.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                )}
                {item === 'Actions' && (
                  <svg viewBox="0 0 22 16" width="22" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                    <path d="m6 8 1.5 1.5L10.5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="home-nav-label">{item}</span>
            </button>
          ))}
        </nav>
        <div className="home-footer-nav">
          <button type="button" className="home-nav-item">
            <span className="home-nav-icon" aria-hidden="true">
              <svg viewBox="0 0 14 16" width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="2" width="12" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M4 1v3M10 1v3M1 6h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </span>
            <span className="home-nav-label">Audit Management</span>
          </button>
          <button type="button" className="home-nav-item active">
            <span className="home-nav-icon" aria-hidden="true">
              <svg viewBox="0 0 20 16" width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="7" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M6.5 7V5a3.5 3.5 0 0 1 7 0v2" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </span>
            <span className="home-nav-label">Access Management</span>
          </button>
        </div>
        <div className="home-sidebar-footer">
          <button type="button" className="home-nav-item" onClick={onLogout}>Logout</button>
          <div className="home-user">
            <span className="home-avatar">SG</span>
            <span className="home-user-name">IQA - Coordinator</span>
          </div>
        </div>
      </aside>

      <main className="home-main">
        <header className="home-header">
          <h1>Access Management</h1>
          <p>Create and manage access of all users</p>
        </header>

        <section className="home-card">
          <div className="home-card-header">
            <h2>Permissions Matrix</h2>
            <div className="home-card-toolbar">
              <svg viewBox="0 0 18 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="9" cy="9" r="7.5" stroke="#1C3FB7" strokeWidth="1.2" />
                <path d="M9 5.5v7M5.5 9h7" stroke="#1C3FB7" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <svg viewBox="0 0 18 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12.5 2.5l3 3-9 9-3.5.5.5-3.5 9-9z" stroke="#154EA1" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              <svg viewBox="0 0 18 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 5h12M7 5V3.5h4V5M5 5l.7 10a1 1 0 0 0 1 .9h4.6a1 1 0 0 0 1-.9L13 5" stroke="#1C3FB7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="home-table-wrapper">
            <table className="home-table">
              <thead>
                <tr>
                  <th>Action/Role</th>
                  {ROLES.map((role) => (
                    <th key={role}>{role}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PERMISSIONS.map((row) => (
                  <tr key={row.action}>
                    <td>
                      <span className="home-row-checkbox" aria-hidden="true" />
                      {row.action}
                    </td>
                    {row.roles.map((granted, index) => (
                      <td key={ROLES[index]}>
                        <span className={`home-status${granted ? ' granted' : ''}`}>
                          {granted && (
                            <svg viewBox="0 0 8 6" width="8" height="6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path d="M1 3 3 5 7 1" stroke="#FFFFFF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
