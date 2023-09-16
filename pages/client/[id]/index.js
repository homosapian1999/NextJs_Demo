import Link from "next/link";
import { useRouter } from "next/router";

const ClientIdPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // Perform some actions
    router.push({
      pathname: "/client/[id]/[clientProjectId]",
      query: { id: "id", clientProjectId: "ank" },
    });
  };
  return (
    <div>
      <h1>This is the client Id Page</h1>
      <button onClick={loadProjectHandler}>
        GO to Project Id specific Page
      </button>
    </div>
  );
};

export default ClientIdPage;
