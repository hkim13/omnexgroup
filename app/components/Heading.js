export default function Heading({ heading, title, detail }) {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold pb-3 text-2xl text-green">
          {heading}
      </h2>
      <h1 className="font-bold pb-3 text-5xl">
          {title}
      </h1>
      <p className="text-lg">
          {detail}
      </p>
    </div>
  );
}