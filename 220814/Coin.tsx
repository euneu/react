import { useQuery } from "@tanstack/react-query";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  useMatch,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import { fetchCoininfo, fetchCoinTikers } from "../api";
import Chart from "./Chart";
import Price from "./Price";
import Helmet from "react-helmet";
import { FaArrowLeft } from "react-icons/fa";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Loader = styled.div`
  text-align: center;
  display: block;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Overview = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  padding: 20px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 13px;
    font-weight: 800;
    color: ${(props) => props.theme.textColor};
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  padding: 20px 20px;
  border-radius: 10px;
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: ${(props) => (props.isActive ? 16 : 15)}px;
  font-weight: ${(props) => (props.isActive ? 800 : 400)};
  background-color: ${(props) => props.theme.containerColor};
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  transition: all 0.3s;
  a {
    display: block;
  }
`;

const Arrow = styled.div`
  position: absolute;
  left: 0px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 15px;
  padding: 10px;
  font-size: 30px;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

interface LocationParams {
  state: {
    name: string;
  };
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams();

  //react-router-dom v6 부터 제네릭을 지원하지 않아서 이렇게 작성해야함
  //coin에서 받아온 state 사용하기 위해서 interface로 타입 정해주고 받음
  const { state } = useLocation() as LocationParams;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoininfo(coinId)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<IPriceData>(
    ["tickers", coinId],
    () => fetchCoinTikers(coinId),
    {
      // refetchInterval: 5000,
    }
  );

  const loading = infoLoading || tickersLoading;

  return (
    <>
      <Container>
        <Helmet>
          <title>
            {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
          </title>
        </Helmet>
        <Header>
          <Arrow>
            <Link to="/">
              <FaArrowLeft />
            </Link>
          </Arrow>
          <Title>
            {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
          </Title>
        </Header>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <>
            <Overview>
              <OverviewItem>
                <span>순위</span>
                <span>{infoData?.rank}</span>
              </OverviewItem>
              <OverviewItem>
                <span>Symbol</span>
                <span>${infoData?.symbol}</span>
              </OverviewItem>
              <OverviewItem>
                <span>현재가</span>
                <span>${tickersData?.quotes.USD.price?.toLocaleString()}</span>
              </OverviewItem>
            </Overview>
            <Description>{infoData?.description}</Description>
            <Overview>
              <OverviewItem>
                <span>총량</span>
                <span>{tickersData?.total_supply?.toLocaleString()}</span>
              </OverviewItem>
              <OverviewItem>
                <span>최대발생량</span>
                <span>{tickersData?.max_supply?.toLocaleString()}</span>
              </OverviewItem>
            </Overview>

            <Tabs>
              <Tab isActive={chartMatch !== null}>
                <Link to="chart">Chart</Link>
              </Tab>
              <Tab isActive={priceMatch !== null}>
                <Link to="price">price</Link>
              </Tab>
            </Tabs>

            <Routes>
              <Route
                path="chart"
                element={<Chart coinId={coinId as string} />}
              />
              <Route
                path="price"
                element={<Price tickersData={tickersData as IPriceData} />}
              />
            </Routes>
          </>
        )}
      </Container>
    </>
  );
}

export default Coin;
