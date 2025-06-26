'use client';

import { Tags } from '@/types/note';
import css from './TagsMenu.module.css';
import { useState } from 'react';
import Link from 'next/link';

type Props = {
  tags: Tags[];
};

const TagsMenu = ({ tags }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const toggle = () => setIsOpenMenu(!isOpenMenu);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      {isOpenMenu && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link href={`/notes/filter/all`} className={css.menuLink}>
              All Notes
            </Link>
          </li>
          {tags.map((tag, id) => (
            <li key={id} className={css.menuItem}>
              <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
