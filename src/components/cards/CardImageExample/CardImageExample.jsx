import laptop1 from "../../../assets/images/laptops/laptop1.jpg";

export const CardImageExample = () => {
  return (
    <figure className="grid bg-slate-200 max-w-100 rounded-2xl overflow-hidden shadow-lg">
      <img className="aspect-video object-cover" src={laptop1} alt="Laptop" />
      <figcaption className="p-4">
        <h2 className="text-xl font-semibold mb-2">Laptop 1</h2>
        <p className="text-sm text-slate-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          quaerat.
        </p>
      </figcaption>
    </figure>
  );
};
