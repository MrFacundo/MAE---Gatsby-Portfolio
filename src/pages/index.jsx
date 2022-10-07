import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";

const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"),
  loading: loader,
});

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;


export const Head = () => (
  <>
    <title>Maria Danai Eguiguren</title>
    <meta name="description" content="Maria Danai Eguiguren"/>
  </>
)