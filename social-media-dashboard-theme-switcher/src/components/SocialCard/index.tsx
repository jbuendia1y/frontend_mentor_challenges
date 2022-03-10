import icons, { getSocialIcon } from "../icons";
import type { SocialsType } from "../icons";

export interface ISocialData {
  total: string;
  label: string;
  username: string;
  socialIcon: SocialsType;
  todayIncrement: number;
  hasIncrement: boolean;
}

const colors = {
  Facebook: "bg-Facebook",
  Twitter: "bg-Twitter",
  Youtube: "bg-Youtube",
  Instagram: "bg-gradient-to-r from-InstagramFrom to-InstagramTo",
};

function BorderTopSocial(props: { social: SocialsType }) {
  const { social } = props;

  return <div className={`w-full h-2 mb-8 ${colors[social]}`}></div>;
}

export default function SocialCard(props: { data: ISocialData }) {
  const { data } = props;
  const SocialIcon = getSocialIcon(data.socialIcon);
  const HasIncrementIcon = icons[data.hasIncrement ? "Up" : "Down"];

  return (
    <div
      className={`bg-lightBgEl mb-2 md:mb-0 overflow-hidden rounded-md dark:bg-darkBgEl text-center text-lightText dark:text-darkText pb-5`}
    >
      <BorderTopSocial social={data.socialIcon}></BorderTopSocial>
      <a className="flex items-center justify-center my-3" href="#">
        <SocialIcon />
        <span className="ml-1 font-bold opacity-70">{data.username}</span>
      </a>
      <div className="boxSocials__stats">
        <p className="text-5xl font-bold">{data.total}</p>
        <p className="text-xs tracking-[.35rem] uppercase opacity-40">
          {data.label}
        </p>
        <p className="flex items-center justify-center mt-3 mb-1">
          <HasIncrementIcon />
          <span
            className={`ml-2 font-bold ${
              data.hasIncrement ? "text-green" : "text-red"
            }`}
          >
            {data.todayIncrement} Today
          </span>
        </p>
      </div>
    </div>
  );
}
