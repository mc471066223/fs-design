import React from 'react';
import { Layout } from 'antd';
import styles from "./index.module.scss";
const MainFooter = () => (
  <Layout.Footer>
    <div className={styles.footer}>
      <div>Internet Product Innovation De</div>
      <div>FS.COM Design Specification</div>
    </div>
  </Layout.Footer>
);

export default MainFooter;
