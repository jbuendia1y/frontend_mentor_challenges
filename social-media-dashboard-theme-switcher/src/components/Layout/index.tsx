import Header from "../Header";

export default function Layout(props: any) {
  return (
    <div className="text-lightText dark:text-darkText">
      <Header></Header>
      {props.children}
    </div>
  );
}
