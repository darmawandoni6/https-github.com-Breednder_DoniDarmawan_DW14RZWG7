import React, { Component } from "react";
import { Layout } from "./layout";
import Header from "./heder";
import Isi from "./isi";

import "../stayle.css";
class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
          <Isi />
        </Layout>
        <div className="footer">
          <h1>FIND YOUR PET'S MATCH</h1>
        </div>
      </div>
    );
  }
}
export default Home;
