import React, { useState } from 'react';
import HomepageWrapperLink from '../../molecules/homepage-wrapper-link';
import SingleHomepageLink from '../atoms/single-homepage-link';

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-teal-200 hover:border-teal-200"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <HomepageWrapperLink>
          <SingleHomepageLink
            url="/"
            styles="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-center hover:border-white hover:bg-white hover:text-black py-2 px-4 uppercase"
            name="Home"
          />
          <SingleHomepageLink
            url="/themes"
            styles="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-center hover:border-white hover:bg-white hover:text-black py-2 px-4 uppercase"
            name="Themes"
          />
          <SingleHomepageLink
            url="/search"
            styles="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-center hover:border-white hover:bg-white hover:text-black py-2 px-4 uppercase"
            name="Search"
          />
        </HomepageWrapperLink>
      </div>
      <div className="float-right">
        <SingleHomepageLink
          url="/search"
          styles="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
          name="Contact"
        />
      </div>
    </nav>
  );
}
