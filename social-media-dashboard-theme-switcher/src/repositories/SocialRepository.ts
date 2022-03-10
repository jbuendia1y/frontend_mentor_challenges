import type { IStatistic } from "../components/StatisticCard";
import { ISocialData } from "../components/SocialCard";

class SocialRepository {
  public data: ISocialData[] = [
    {
      hasIncrement: true,
      label: "Followers",
      username: "@nathanf",
      socialIcon: "Facebook",
      todayIncrement: 12,
      total: "1987",
    },
    {
      hasIncrement: true,
      label: "Followers",
      username: "@nathanf",
      socialIcon: "Twitter",
      todayIncrement: 99,
      total: "1044",
    },
    {
      hasIncrement: true,
      label: "Followers",
      username: "@realnathanf",
      socialIcon: "Instagram",
      todayIncrement: 1099,
      total: "11k",
    },
    {
      hasIncrement: false,
      label: "Subscribers",
      username: "Nathan F.",
      socialIcon: "Youtube",
      todayIncrement: 144,
      total: "8239",
    },
  ];

  public overviewStatisticsToday: IStatistic[] = [
    {
      count: "87",
      hasIncrement: true,
      incrementCount: 3,
      label: "Page Views",
      socialIcon: "Facebook",
    },
    {
      count: "52",
      hasIncrement: false,
      incrementCount: 2,
      label: "Likes",
      socialIcon: "Facebook",
    },
    {
      count: "5462",
      hasIncrement: true,
      incrementCount: 2257,
      label: "Likes",
      socialIcon: "Instagram",
    },
    {
      count: "52k",
      hasIncrement: true,
      incrementCount: 2,
      label: "Profile Views",
      socialIcon: "Instagram",
    },
    {
      count: "117",
      hasIncrement: true,
      incrementCount: 303,
      label: "Retweets",
      socialIcon: "Twitter",
    },
    {
      count: "507",
      hasIncrement: true,
      incrementCount: 553,
      label: "Likes",
      socialIcon: "Twitter",
    },
    {
      count: "107",
      hasIncrement: false,
      incrementCount: 19,
      label: "Likes",
      socialIcon: "Youtube",
    },
    {
      count: "1407",
      hasIncrement: false,
      incrementCount: 12,
      label: "Total Views",
      socialIcon: "Youtube",
    },
  ];

  async mainStatistics() {
    return this.data;
  }

  async overviewToday() {
    return this.overviewStatisticsToday;
  }

  async fetchAll() {
    const mainStatistics = await this.mainStatistics();
    const overviewStatistics = await this.overviewToday();

    return {
      mainStatistics,
      overviewStatistics,
    };
  }
}

export default new SocialRepository();
