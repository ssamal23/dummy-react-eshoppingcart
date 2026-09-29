import React from 'react';
import './AccessManagementPage.css';

const ROLES = ['IAG Head', 'IAG Coordinator', 'Auditor', 'Auditee'] as const;

type Role = (typeof ROLES)[number];

interface ActionPermission {
  action: string;
  permissions: Record<Role, boolean>;
}

const PERMISSIONS: ActionPermission[] = [
  {
    action: 'Review audit schedule',
    permissions: { 'IAG Head': true, 'IAG Coordinator': false, Auditor: false, Auditee: false },
  },
  {
    action: 'Approve audit schedule',
    permissions: { 'IAG Head': false, 'IAG Coordinator': true, Auditor: false, Auditee: false },
  },
  {
    action: 'Reject audit schedule',
    permissions: { 'IAG Head': false, 'IAG Coordinator': false, Auditor: true, Auditee: true },
  },
  {
    action: 'Create audit schedule',
    permissions: { 'IAG Head': true, 'IAG Coordinator': false, Auditor: false, Auditee: false },
  },
  {
    action: 'Modify audit schedule',
    permissions: { 'IAG Head': true, 'IAG Coordinator': true, Auditor: false, Auditee: false },
  },
  {
    action: 'Send for approval',
    permissions: { 'IAG Head': true, 'IAG Coordinator': false, Auditor: false, Auditee: false },
  },
  {
    action: 'Publish audit schedule',
    permissions: { 'IAG Head': false, 'IAG Coordinator': true, Auditor: false, Auditee: false },
  },
  {
    action: 'Schedule / Re-schedule Audit',
    permissions: { 'IAG Head': false, 'IAG Coordinator': false, Auditor: true, Auditee: true },
  },
  {
    action: 'Generate report',
    permissions: { 'IAG Head': true, 'IAG Coordinator': false, Auditor: false, Auditee: false },
  },
  {
    action: 'Execute audit',
    permissions: { 'IAG Head': true, 'IAG Coordinator': true, Auditor: false, Auditee: false },
  },
  {
    action: 'Prepare audit finding',
    permissions: { 'IAG Head': true, 'IAG Coordinator': false, Auditor: false, Auditee: false },
  },
  {
    action: 'Follow up on audit finding for closer',
    permissions: { 'IAG Head': false, 'IAG Coordinator': true, Auditor: false, Auditee: false },
  },
  {
    action: 'Participate audit',
    permissions: { 'IAG Head': false, 'IAG Coordinator': false, Auditor: true, Auditee: true },
  },
  {
    action: 'Review audit finding',
    permissions: { 'IAG Head': true, 'IAG Coordinator': false, Auditor: false, Auditee: false },
  },
  {
    action: 'Action of audit finding',
    permissions: { 'IAG Head': true, 'IAG Coordinator': true, Auditor: false, Auditee: false },
  },
];

const AccessManagementPage: React.FC = () => {
  return (
    <div className="access-management-page">
      <div className="access-management-header">
        <h1>Access Management</h1>
        <p className="access-management-subtitle">Create and manage access of all users</p>
      </div>
      <div className="permissions-matrix-container">
        <h2>Permissions Matrix</h2>
        <div className="permissions-matrix-table-wrapper">
          <table className="permissions-matrix-table">
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
                  <td className="action-cell">{row.action}</td>
                  {ROLES.map((role) => (
                    <td key={role} className="permission-cell">
                      <span className={row.permissions[role] ? 'permission-granted' : 'permission-denied'}>
                        {row.permissions[role] ? '✓' : '–'}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccessManagementPage;
