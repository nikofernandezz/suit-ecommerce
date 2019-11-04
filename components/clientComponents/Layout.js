import Head from "next/head";
import Navbar from "./navigation/Navbar";
import { Button } from "antd";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Sir Shallum</title>
        <link
          href="https://fonts.googleapis.com/css?family=Anton&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Anton&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />

      {props.children}

      <style jsx global>{`
        html,
        body {
          margin: 0px;
          padding: 0px;
          border: 0px;
        }

        ul {
          list-style: none;
        }

        @import "~antd/dist/antd.css";

        .ant-popover-message-title {
          padding-left: 8px;
        }

        .ant-popover-inner-content {
          padding: 12px 23px 16px 16px;
        }

        .menuBar {
          padding: 0 20px;
          border-bottom: solid 1px #e8e8e8;
          overflow: auto;
          box-shadow: 0 0 30px #f3f1f1;
        }
        .logo {
          width: 150px;
          float: left;
        }

        .logo a {
          display: inline-block;
          font-size: 24px;
          padding: 19px 20px;
          text-transform: capitalize;
          color: black;
          font-family: "Anton", sans-serif;
        }
        .menuCon {
          width: calc(100% - 150px);
          float: left;
          margin-top: 0.3%;
        }
        .menuCon .ant-menu-item {
          padding: 0px 5px;
        }

        .menuCon .ant-menu-submenu-title {
          padding: 10px 20px;
        }
        .menuCon .ant-menu-item a,
        .menuCon .ant-menu-submenu-title a {
          padding: 10px 15px;
        }
        .menuCon .ant-menu-horizontal {
          border-bottom: none;
        }
        .menuCon .leftMenu {
          float: left;
        }
        .menuCon .rightMenu {
          float: right;
        }
        .barsMenu {
          float: right;
          height: 32px;
          padding: 6px;
          margin-top: 8px;
          display: none;
          background: none;
          border-width: 0px;
        }
        .barsBtn {
          display: block;

          width: 20px;
          height: 2px;
          background: black;
          position: relative;
        }
        .barsBtn:after,
        .barsBtn:before {
          content: attr(x);
          width: 20px;
          position: absolute;
          top: -6px;
          left: 0;
          height: 2px;
          background: black;
        }
        .barsBtn:after {
          top: auto;
          bottom: -6px;
        }
        .ant-drawer-body {
          padding: 0;
        }
        .ant-drawer-body .ant-menu-horizontal > .ant-menu-item,
        .ant-drawer-body .ant-menu-horizontal > .ant-menu-submenu {
          display: inline-block;
          width: 100%;
        }
        .ant-drawer-body .ant-menu-horizontal {
          border-bottom: none;
        }
        .ant-drawer-body .ant-menu-horizontal > .ant-menu-item:hover {
          border-bottom-color: transparent;
        }

        .modified-item:hover {
          border-bottom: 2px solid black !important;
          color: red;
        }

        @media (max-width: 767px) {
          .barsMenu {
            display: inline-block;
          }
          .leftMenu,
          .rightMenu {
            display: none;
          }
          .logo a {
            margin-left: -20px;
          }
          .menuCon .ant-menu-item,
          .menuCon .ant-menu-submenu-title {
            padding: 1px 20px;
          }
          .logo a {
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
