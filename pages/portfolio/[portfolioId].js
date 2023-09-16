import { useRouter } from "next/router";

const PortfolioProdictPage = () => {
  const router = useRouter();
  // can be used to send request to the backend server
  console.log(router.pathname);
  // to fetch the piece of data from the server like prortfolio.query/projectId;
  console.log(router.query);
  return (
    <div>
      <h1>Portfolio Product Page</h1>
    </div>
  );
};

export default PortfolioProdictPage;
