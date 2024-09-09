import useSWR from "swr";
const url = "https://dev.to/api/articles/{id}";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const News = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data);
};
