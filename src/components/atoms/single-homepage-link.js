import React from 'react';
import { Link } from 'gatsby';

export default function SingleHomepageLink({ url, styles, name }) {
  return (
    <li>
      <Link to={url} className={styles}>
        {name}
      </Link>
    </li>
  );
}
