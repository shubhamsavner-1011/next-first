import Head from "next/head";
type IProps = {
    title : string,
    description: string,
    keywords: string,
}
const MetaHead = ({title, description, keywords}: IProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </div>
  );
};

export default MetaHead;
