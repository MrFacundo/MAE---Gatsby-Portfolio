import React from "react";
import Loadable from "react-loadable";

const HomeLazy = Loadable({
  loader: () => import("../home/Home"), 
  loading: () => null,
});

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;