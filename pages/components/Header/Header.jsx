import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Header.module.css";
import {
  locales,
  localeNames,
  TEXTS_BY_LANGUAGE,
} from "../../../locale/constants";

const Header = () => {
  const language = useRouter();
  return (
    <header className={styles.header}>
      <div>
        <figure>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>tienda</p>
          <p>libre</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href="./">
          {TEXTS_BY_LANGUAGE[language.locale].HEADER.PRODUCTS}
        </Link>
        <Link href="./tycs">
          {TEXTS_BY_LANGUAGE[language.locale].HEADER.TYCS}
        </Link>
        <select name="language" id="language">
          {Object.keys(locales).map((lan) => {
            return (
              <Link key={lan} href={language.asPath} locale={locales[lan]}>
                <option
                  value={locales[lan]}
                  selected={language.locale == locales[lan]}
                >
                  {localeNames[locales[lan]]}
                </option>
              </Link>
            );
          })}
        </select>
      </div>
    </header>
  );
};

export default Header;
