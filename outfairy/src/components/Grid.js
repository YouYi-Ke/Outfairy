import Card from "./Card";

export default function Grid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id}>
          <Card product={product} />
        </div>
      ))}
    </div>
  );
}

