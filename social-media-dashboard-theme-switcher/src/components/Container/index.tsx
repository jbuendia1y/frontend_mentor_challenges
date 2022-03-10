export default function Container(props: any) {
  let className = "w-11/12 mx-auto max-w-7xl";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <div className={className}>{props.children}</div>;
}
