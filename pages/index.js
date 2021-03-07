import setupAxios from "../config/setupAxios";
import MyApp from "./_app";
import axios from "axios";
import "tailwindcss/tailwind.css";
setupAxios(axios);
const Index = () => {
  return <MyApp />;
};
export default Index;
