import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <i className={`fas ${collapsed ? 'fa-bars' : 'fa-times'}`}></i>
        </div>
        {!collapsed && <div className="sidebar-title">MAFIA</div>}
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-menu-item active" onClick={toggleProfile}>
          <div className={`profile-avatar ${collapsed ? 'collapsed' : ''}`}>
            <i className="fas fa-user-circle"></i>
          </div>
          {!collapsed && (
            <div className="profile-info">
              <div className="profile-name">Имя пользователя</div>
              <div className="profile-edit">
                <a href="/edit-profile">Редактировать профиль</a>
              </div>
            </div>
          )}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-home"></i>
          {!collapsed && <span>Главная</span>}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-users"></i>
          {!collapsed && <span>Пользователи</span>}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-building"></i>
          {!collapsed && <span>Компании</span>}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-money-bill-wave"></i>
          {!collapsed && <span>Доход</span>}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-cog"></i>
          {!collapsed && <span>Настройки</span>}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-user-lock"></i>
          {!collapsed && <span>Роли и права</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
