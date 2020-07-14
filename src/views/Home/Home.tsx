import React, { FC } from "react";
import { Button } from "antd";
import { LoginForm } from "../../components/Components";

const Home: FC = () => {
  return (
    <>
      <div>
        <Button>I Need Help!</Button>
        <Button>I Can Help!</Button>
      </div>
      <div>
        <LoginForm />
      </div>
    </>
  );
};

export default Home;
