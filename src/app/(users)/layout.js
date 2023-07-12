/** @format */

"use client";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Grid, Drawer, Button } from "antd";
import React, { useEffect, useState } from "react";
const { Header, Sider, Content } = Layout;
import { useRouter } from "next/navigation";
import SiderDrawer from "./components/SiderDrawer";

export default function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const screens = Grid.useBreakpoint();
  const router = useRouter();

  useEffect(() => {
    screens.md ? setCollapsed(false) : setCollapsed(true);
    screens.sm ? setIsMobileView(false) : setIsMobileView(true);
  }, [screens]);

  const navigate = (item) => {
    router.push(item.key);
  };

  const getItem = (key, icon, label, onClick, children) => {
    return {
      key,
      icon,
      label,
      onClick,
      children,
    };
  };

  const menuItems = [
    getItem("/admin", <DashboardOutlined />, "Dashboard", (item) =>
      navigate(item)
    ),
    getItem("/", <UserOutlined />, "Consumers", (item) => navigate(item)),
  ];

  return (
    <Layout className="layout h-screen">
      <SiderDrawer
        isMobileView={isMobileView}
        setCollapsed={setCollapsed}
        collapsed={collapsed}
        menuItems={menuItems}
      />
      <Layout className="site-layout">
        <Header className=" bg-white px-5">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background bg-white"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
