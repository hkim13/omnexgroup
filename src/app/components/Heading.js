export default function Heading({ heading, title, detail }) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold pb-4 text-green">
          {heading}
      </h3>
      <h1 className="font-bold pb-3">
          {title}
      </h1>
      <p>
          {detail}
      </p>
    </div>
  );
}