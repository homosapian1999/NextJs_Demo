import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "anki", name: "Ankit" },
    { id: "anku", name: "Ankut" },
  ];
  return (
    <div>
      <h1>This is the client Page</h1>
      {/* <ul>
        <li>
          <Link href="/client/anki">Ankit dubey</Link>
        </li>
        <li>
          <Link href="/client/anku">Ankur dubey</Link>
        </li>
      </ul> */}
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/client/${client.id}`}> {client.name} </Link> */}
            <Link href={{ pathname: "/client/[id]", query: { id: client.id } }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
