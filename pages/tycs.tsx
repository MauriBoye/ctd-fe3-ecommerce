import { GetStaticProps, NextPage } from "next";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";
import { TEXTS_BY_LANGUAGE } from "../locale/constants";
import { useRouter } from "next/router";

interface Props {
  data: TyCsAPIResponse;
}

const TerminosYCondiciones: NextPage<Props> = ({ data }: Props) => {
  if (!data) return null;

  const language = useRouter().locale as keyof typeof TEXTS_BY_LANGUAGE;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre - {TEXTS_BY_LANGUAGE[language].MAIN.TYCS}</title>
        <meta
          name="description"
          content={`${TEXTS_BY_LANGUAGE[language].MAIN.TYCS} de Tienda Libre`}
        />
      </Head>
      <h2>{TEXTS_BY_LANGUAGE[language].MAIN.TYCS}</h2>
      <p>Versión: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

// Aquí debemos agregar el método para obtener la información
// de la API
export const getStaticProps: GetStaticProps = async (context) => {
  const len = context.locale;
  const res = await fetch(
    "https://ctd-fe3-ecommerce.vercel.app/api/tycs/" + len
  );
  const data: TyCsAPIResponse = await res.json();
  return {
    props: { data },
  };
};

export default TerminosYCondiciones;
