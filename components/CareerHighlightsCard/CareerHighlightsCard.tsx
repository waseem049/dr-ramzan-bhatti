type CareerHighlightsProps = {
  heading: string;
  highlights: string[];
};

export const CareerHighlightsCard = ({
  heading,
  highlights,
}: CareerHighlightsProps) => {
  return (
    <div className="p-6 bg-gray-100 border-b-4 border-primary">
      <h2 className="text-2xl font-bold border-b border-black pb-2 mb-4 w-fit">
        {heading}
      </h2>
      <ul className="">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <span className="text-2xl mr-3">•</span>
            <span className="text-base leading-6">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
