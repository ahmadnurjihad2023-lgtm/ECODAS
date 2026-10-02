import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Brain,
  Lightbulb,
  Users,
  ClipboardList,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/images/logo.png";
import "./AdminSidebar.css";

export default function AdminSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(() =>
    typeof window === "undefined" ? true : window.innerWidth > 900,
  );
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(true);
    };

    window.addEventListener("toggle-admin-sidebar", handleToggle);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("toggle-admin-sidebar", handleToggle);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMobileSidebar = () => {
    if (window.innerWidth <= 900) setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const navItemClass = ({ isActive }) =>
    `admin-sidebar-nav-item ${isActive ? "admin-sidebar-nav-active" : ""}`;

  return (
    <>
      {isOpen && (
        <div
          className="admin-sidebar-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`admin-sidebar ${
          isOpen ? "admin-sidebar-open" : "admin-sidebar-closed"
        }`}
      >
        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-logo-box">
            {!logoError ? (
              <img
                src={logo}
                alt="ECODAS"
                className="admin-sidebar-logo"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="admin-sidebar-logo-fallback">E</div>
            )}
          </div>

          <div className="admin-sidebar-brand-copy">
            <strong>Administration</strong>
            <span>Sustainability Intelligence</span>
          </div>
        </div>

        <div className="admin-sidebar-content">
          <div className="admin-sidebar-section-label">OVERVIEW</div>
          <nav className="admin-sidebar-nav">
            <NavLink
              to="/admin/dashboard"
              className={navItemClass}
              onClick={closeMobileSidebar}
            >
              <LayoutDashboard size={18} strokeWidth={1.8} />
              <span>Dashboard</span>
            </NavLink>
          </nav>

          <div className="admin-sidebar-section-label admin-sidebar-section-space">
            INTELLIGENCE
          </div>
          <nav className="admin-sidebar-nav">
            <NavLink
              to="/admin/collective"
              className={navItemClass}
              onClick={closeMobileSidebar}
            >
              <Brain size={18} strokeWidth={1.8} />
              <span>Collective Intelligence</span>
            </NavLink>

            <NavLink
              to="/admin/decision"
              className={navItemClass}
              onClick={closeMobileSidebar}
            >
              <Lightbulb size={18} strokeWidth={1.8} />
              <span>Decision Support</span>
            </NavLink>
          </nav>

          <div className="admin-sidebar-section-label admin-sidebar-section-space">
            DATA MANAGEMENT
          </div>
          <nav className="admin-sidebar-nav">
            <NavLink
              to="/admin/students"
              className={navItemClass}
              onClick={closeMobileSidebar}
            >
              <Users size={18} strokeWidth={1.8} />
              <span>Students</span>
            </NavLink>

            <NavLink
              to="/admin/activities"
              className={navItemClass}
              onClick={closeMobileSidebar}
            >
              <ClipboardList size={18} strokeWidth={1.8} />
              <span>Activity Review</span>
            </NavLink>
          </nav>

          <div className="admin-sidebar-section-label admin-sidebar-section-space">
            SYSTEM
          </div>
          <nav className="admin-sidebar-nav">
            <NavLink
              to="/admin/settings"
              className={navItemClass}
              onClick={closeMobileSidebar}
            >
              <Settings size={18} strokeWidth={1.8} />
              <span>Settings</span>
            </NavLink>
          </nav>
        </div>

        <div className="admin-sidebar-footer">
          <button type="button" className="admin-sidebar-footer-item">
            <HelpCircle size={18} strokeWidth={1.8} />
            <span>Support</span>
          </button>

          <button
            type="button"
            className="admin-sidebar-footer-item admin-sidebar-logout"
            onClick={handleLogout}
          >
            <LogOut size={18} strokeWidth={1.8} />
            <div className="admin-sidebar-logout-text">
              <span>Sign out</span>
              <small>admin@ecodas.id</small>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
}
