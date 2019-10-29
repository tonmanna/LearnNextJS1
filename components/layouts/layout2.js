import Header from "../headers/header";
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout2 = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout2;
