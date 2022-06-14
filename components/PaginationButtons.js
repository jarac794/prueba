import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;
  const langName = String(router.query.lan) || 'en';
  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          // href={`/search?term=${router.query.term}&start=${startIndex - 10}&lan=${router.query.lan||'en'}`}
          href={`/search?term=${router.query.term}&start=${startIndex - 10}&lan=${langName}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}&lan=${router.query.lan||'en'}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
