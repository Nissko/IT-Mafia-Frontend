import React, { useContext, useState } from 'react';

import ThemeContext from '../../themeContext'; // Используйте относительный путь ./themeContext
import './sidebar.css';

const Sidebar = () => {
  const theme = useContext(ThemeContext as React.Context<string>);
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''} ${theme}`}>
      <div className="sidebar-header">
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <i className={`fas ${collapsed ? 'fa-bars' : 'fa-times'}`}></i>
        </div>
        {!collapsed && <div className="sidebar-title">MAFIA</div>}
      </div>
      <div className="sidebar-menu">
        {/* <div className="sidebar-menu-item active" onClick={toggleProfile}>
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
        </div> */}
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-home"></i>
          {!collapsed && <span>Главная</span>}
        </div>
     
         <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-users"></i>
          
          {!collapsed && <span>Список семей</span>}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          
          <i className="fas fa-building"></i>
          {!collapsed && <span>Компании</span>}
        </div>
       
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-shop"></i>
          {!collapsed && <span>Магазин</span>}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-gamepad"></i>
          {!collapsed && <span>Мини игра "Ринг"</span>}
        </div>
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-gamepad"></i>
          {!collapsed && <span>Мини игра "Снайпер"</span>}
        </div>   
        <div className={`sidebar-menu-item ${collapsed ? 'collapsed' : ''}`}>
          <i className="fas fa-cog"></i>
          {!collapsed && <span>Настройки</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
