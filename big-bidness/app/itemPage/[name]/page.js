const ItemPage = ({ params }) => {
  const { name } = params;

  if (!name) return <div>Loading...</div>;

  const decodedName = decodeURIComponent(name);

  return (
    <div>
      <h1>Item: {decodedName}</h1>
      <p>This is the page for {decodedName}.</p>
    </div>
  );
};

export default ItemPage;
