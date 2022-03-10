export default function LoadingBox(props: any) {
  let className = "w-full bg-lightBgEl dark:bg-darkBgEl";

  if (props.className) {
    className += ` ${props.className}`;
  }

  return <div className={className}></div>;
}
