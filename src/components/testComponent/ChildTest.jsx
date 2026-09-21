export default function ChildTest(props) {
  console.log(props.product);

  if (!props.product) return null;

  const { title, description, price, count, onSale } = props.product;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow duration-300 relative group">
      {onSale && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md z-10">
          On Sale 🔥
        </span>
      )}
      <div className="p-5 text-left">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight line-clamp-1 mb-1">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-1.5 mb-4 text-xs font-semibold text-emerald-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          In Stock ({count} items)
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Price</span>
            <span className="text-xl font-extrabold text-gray-900">
              ${price ? price.toFixed(2) : "0.00"}
            </span>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white p-3 rounded-xl shadow-md hover:shadow-indigo-200 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
