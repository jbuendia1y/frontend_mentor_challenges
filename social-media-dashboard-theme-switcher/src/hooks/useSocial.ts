import { useEffect, useState } from "react";
import SocialRepository from "../repositories/SocialRepository";
import type { ISocialData } from "../components/SocialCard";
import type { IStatistic } from "../components/StatisticCard";

export default function useSocial() {
  const [mainStatistics, setMainStatistics] = useState<
    undefined | ISocialData[]
  >();
  const [overViewStatistics, setOverViewStatistics] = useState<
    undefined | IStatistic[]
  >();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    SocialRepository.fetchAll().then((data) => {
      setMainStatistics(data.mainStatistics);
      setOverViewStatistics(data.overviewStatistics);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  return {
    mainStatistics,
    overViewStatistics,
    loading,
  };
}
