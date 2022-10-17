import React from "react";
import Loadable from "react-loadable";
import LoadingScreen from "../components/LoadingScreen";
const loader = () => <LoadingScreen />;

export function Head() {
  return (
    <>
      <title>Maria Danai Eguiguren - Método de Sanación Asistida</title>
      <meta name="description" content="Maria Danai Eguiguren - Método de Sanación Asistida" />
    </>
  );
}

const HomeLazy = Loadable({
  loader: () => import("../home/Home"),
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
