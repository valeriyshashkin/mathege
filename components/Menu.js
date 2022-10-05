import {
  HomeIcon,
  ArrowRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import slugify from "slugify";
import data from "../data";

export default function Menu() {
  return (
    <div className="w-64 shrink-0 space-y-4 mt-4 pr-6">
      <Link href="/">
        <a className="flex items-center">
          <HomeIcon className="w-6 mr-6" />
          Главная
        </a>
      </Link>
      <Link href="/teachers">
        <a className="flex items-center">
          <UserGroupIcon className="w-6 mr-6" />
          Преподаватели
        </a>
      </Link>
      <div className="border-b border-neutral-500"></div>
      {data.content.map(({ theme }, i) => (
        <Link href={`/${slugify(theme).toLowerCase()}`} key={i}>
          <a className="flex items-center">
            <ArrowRightIcon className="w-6 mr-6" />
            {theme}
          </a>
        </Link>
      ))}
    </div>
  );
}