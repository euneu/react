const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoininfo(coinId: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTikers(coinId: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string | undefined) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((response) => response.json());
}
