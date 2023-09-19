import Link from "next/link";

const footer = () => {
  return (
    <div className="mt-auto w-full py-3 px-4 flex justify-center">
      <span className="my-auto">{"Made with ❤️ by"}</span>
      <Link
        href="https://twitter.com/dull_joker"
        className="my-auto text-MainRed hover:text-white font-bold text-center ml-[.35rem]"
      >
        DullJoker
      </Link>
    </div>
  );
};

export default footer;
