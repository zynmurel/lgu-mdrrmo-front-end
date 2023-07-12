import { Layout, Menu, Drawer, Button, theme } from "antd";
import { usePathname } from "next/navigation";
import { MenuFoldOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const SiderDrawer = ({ isMobileView, setCollapsed, collapsed, menuItems }) => {
  const { token } = theme.useToken();
  const path = usePathname();
  const drawerOnClose = () => {
    setCollapsed(true);
  };

  return !isMobileView ? (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      hidden={isMobileView}
    >
      <div className="logo" />
      <Menu
        mode="inline"
        defaultSelectedKeys={[path]}
        items={menuItems}
        className=" p-3 h-screen"
        style={{ color: token.colorPrimaryBg }}
      />
    </Sider>
  ) : (
    <Drawer
      title={
        <div className="flex w-full justify-center items-center">Some</div>
      }
      placement="left"
      open={!collapsed}
      width="100%"
      onClose={drawerOnClose}
      closable={false}
      extra={
        <Button type="text" className="mr-2" danger onClick={drawerOnClose}>
          <MenuFoldOutlined className=" text-lg" />
        </Button>
      }
    >
      <div className=" flex flex-col h-full">
        <Menu
          mode="inline"
          defaultSelectedKeys={[path]}
          items={menuItems}
          className=" p-3 h-screen"
        />
      </div>
    </Drawer>
  );
};

export default SiderDrawer;
