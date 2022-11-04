import Head from "next/head";

let defaultMeta = {
  title: "Zaw Z Tun || Tech Blogs ",
  description:
    "Designed, developed and implemented software applications for websites based on analyzed requirements and understanding of industry technical standards.",
  url: "https://zztblog-zawztun.vercel.app/",
  image: "/home/test_meta.png",
};
const Metatag = ({ meta = defaultMeta }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content="ZAWTUN || Tech Blogs" />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>
    </>
  );
};
export default Metatag;
