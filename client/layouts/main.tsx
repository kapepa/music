import React from "react";
import {Container} from "@material-ui/core";
import NavBar from "../components/NavBar/NavBar";
import styles from '../styles/layout.module.scss'

const MainLayout: React.FC = ({children}) => {

  return (
    <Container>
      <NavBar/>
      <div className={styles.layout}>
        {children}
      </div>
    </Container>
  )
};

export default MainLayout;