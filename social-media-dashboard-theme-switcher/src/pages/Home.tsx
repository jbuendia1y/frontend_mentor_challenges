import Container from "../components/Container";
import Layout from "../components/Layout";
import LoadingBox from "../components/LoadingBox";
import SocialCard from "../components/SocialCard";
import StatisticCard from "../components/StatisticCard";
import useSocial from "../hooks/useSocial";

export default function Home() {
  const { mainStatistics, overViewStatistics, loading } = useSocial();

  if (loading) {
    return (
      <Layout>
        <main>
          <Container>
            <div className="grid grid-cols-1 gap-2 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <LoadingBox
                    key={"loading-social-card-" + i}
                    className="h-48 rounded-md animate-pulse"
                  />
                ))}
            </div>
            <h2 className="mb-4 text-xl font-bold">Overview - Today</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <LoadingBox
                    key={"loading-statistic-card-" + i}
                    className="h-20 rounded-md animate-pulse"
                  />
                ))}
            </div>
          </Container>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main>
        <Container>
          <div className="grid grid-cols-1 gap-2 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mainStatistics?.map((item, index) => {
              return (
                <SocialCard data={item} key={item.label + index}></SocialCard>
              );
            })}
          </div>
          <h2 className="mb-4 text-xl font-bold">Overview - Today</h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {overViewStatistics?.map((item, index) => {
              return <StatisticCard data={item} key={item.label + index} />;
            })}
          </div>
        </Container>
      </main>
    </Layout>
  );
}
