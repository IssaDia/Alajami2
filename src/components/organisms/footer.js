import React from 'react';
import { LastPostsFooter } from '../../logic/lastsPosts';
import { BioDescription, BioTitle } from '../../logic/bio';
import SingleHomepageLink from '../atoms/single-homepage-link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="justify-around flex flex-wrap">
        <div className="flex flex-col">
          <h4 className="mt-8 uppercase">Liens Rapides</h4>
          <div>
            <ul className="my-6">
              <SingleHomepageLink
                url="/"
                styles="border-b-2 border-gray-600 text-gray-800 hover:text-white"
                name="Home"
              />
              <SingleHomepageLink
                url="/themes"
                styles="border-b-2 border-gray-600 text-gray-800 hover:text-white"
                name="Themes"
              />
              <SingleHomepageLink
                url="/search"
                styles="border-b-2 border-gray-600 text-gray-800 hover:text-white"
                name="Search"
              />
              <SingleHomepageLink
                url="/contact"
                styles="border-b-2 border-gray-600 text-gray-800 hover:text-white"
                name="Contact"
              />
             
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="mt-8 uppercase">Articles Récents</h4>
          <div>
            <ul className="my-6">
              <LastPostsFooter />
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="mt-8 uppercase">
            <BioTitle />
          </h4>
          <div className="my-6 text-xs text-gray-800 italic w-48 hover:text-white cursor-pointer">
            <BioDescription />
          </div>
        </div>
      </div>
      <div className="float-right mt-8">
        <p className="text-xs px-8">Copyright © All rights reserved.</p>
      </div>
    </footer>
  );
}
