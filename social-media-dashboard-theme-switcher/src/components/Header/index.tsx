import useToggleTheme from "../../hooks/useToggleTheme";
import Container from "../Container";

export default function Header() {
  const { toggleTheme, isToggle } = useToggleTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <header className="py-4">
      <Container className="md:flex md:items-center md:justify-between">
        <div className="py-1">
          <h1 className="text-2xl font-semibold">
            <a href="#">Social Media Dashboard</a>
          </h1>
          <p className="font-bold opacity-60">Total Followers: 23,004</p>
        </div>

        <div className="md:hidden w-full h-0.5 my-3 bg-lightBgEl dark:bg-darkBgEl"></div>

        <div className="flex items-center py-1">
          <p className="text-sm font-bold">Dark Mode</p>
          <div
            onClick={handleClick}
            className="w-12 ml-2 h-6 px-0.5 py-0.5 cursor-pointer rounded-l-full rounded-r-full dark:bg-gradient-to-r bg-lightToggle dark:from-darkToggleFrom dark:to-darkToggleTo"
          >
            <div
              className={`box-content w-5 h-full transition-transform rounded-full bg-lightBgEl dark:bg-darkBgEl ${
                isToggle && "translate-x-full"
              }`}
            ></div>
          </div>
        </div>
      </Container>
    </header>
  );
}
