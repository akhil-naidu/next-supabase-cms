import Head from 'next/head';

const Seo = () => {
  const title = 'Next Supabase Saas';
  const description =
    'Build your Supabase schema visually in this easy-to-use web based tool.';
  const url = 'https://contentql.io';
  const image =
    'https://asset.cloudinary.com/leewardslope/06f4372cea77305f1910fdba22dd3e7d';

  return (
    <Head>
      <title>Prisma Schema Builder</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
    </Head>
  );
};

export default Seo;
