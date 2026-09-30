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
    <div className="login-page home-page">
      <aside className="home-sidebar">
        <div className="home-brand">
          <h2>Audit Flow</h2>
          <p>Internal Audit Group</p>
        </div>
        <nav className="home-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              type="button"
              className={`home-nav-item${activeNav === item ? ' active' : ''}`}
              onClick={() => setActiveNav(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="home-sidebar-footer">
          <button type="button" className="home-nav-item">Audit Management</button>
          <button type="button" className="home-nav-item">Access Management</button>
          <button type="button" className="home-nav-item" onClick={onLogout}>Logout</button>
          <div className="home-user">
            <span className="home-user-name">IQA - Coordinator</span>
          </div>
        </div>
      </aside>

      <main className="home-main">
        <header className="home-header">
          <h1>Access Management</h1>
          <p>Create and manage access of all users</p>
        </header>

        <section className="login-form home-card">
          <h2>Permissions Matrix</h2>
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
                    <td>{row.action}</td>
                    {row.roles.map((granted, index) => (
                      <td key={ROLES[index]}>
                        <span className={`home-status${granted ? ' granted' : ''}`} />
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
