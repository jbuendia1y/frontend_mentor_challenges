import icons, { getSocialIcon } from "../icons";
import type { SocialsType } from "../icons";

export interface IStatistic {
  label: string;
  socialIcon: SocialsType;
  count: string;
  hasIncrement: boolean;
  incrementCount: number;
}

export default function StatisticCard(props: { data: IStatistic }) {
  const { data } = props;
  const SocialIcon = getSocialIcon(data.socialIcon);
  const HasIncrementIcon = icons[data.hasIncrement ? "Up" : "Down"];

  return (
    <div className="px-4 py-3 rounded-md bg-lightBgEl dark:bg-darkBgEl">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold opacity-70">{data.label}</h3>
        <SocialIcon />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">{data.count}</p>
        <p className="flex items-center mt-2">
          <HasIncrementIcon />
          <span
            className={`ml-1 font-bold text-xs ${
              data.hasIncrement ? "text-green" : "text-red"
            }`}
          >
            {data.incrementCount}%
          </span>
        </p>
      </div>
    </div>
  );
}
