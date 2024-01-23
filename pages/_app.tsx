import '../styles/globals.css';
import 'react-cmdk/dist/cmdk.css';
import 'reactflow/dist/style.css';

import Seo from '../components/Seo';
import Stack from '../components/Stack';
import axios from 'axios';

import type { AppProps } from 'next/app';
import { SchemaContext } from '../lib/context';
import { Toaster } from 'react-hot-toast';
import { classNames } from 'react-cmdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { inter } from '../lib/font';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [schemas, setSchemas] = useState<any[]>([]);

  useEffect(() => {
    if (window) {
      const lcValue = localStorage.getItem('schemas');
      if (lcValue) {
        setSchemas(JSON.parse(lcValue));
      }
    }
  }, []);

  useEffect(() => {
    if (window) {
      localStorage.setItem('schemas', JSON.stringify(schemas ?? []));
    }
  }, [schemas]);

  const schema = schemas?.find((s) => s.name === router.query.schemaId);
  const isOldModelRoute = router.pathname.startsWith('/models');
  const isRoot = router.pathname === '/';

  if (!isRoot && !isOldModelRoute && !schema) {
    return null;
  }

  return (
    <>
      <Seo />

      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>

      <SchemaContext.Provider
        value={{
          schema,
          schemas,
          setSchemas,
          setSchema: (newValues) => {
            setSchemas(
              schemas.map((s) =>
                s.name === schema.name
                  ? {
                      ...schema,
                      ...newValues,
                    }
                  : s,
              ),
            );
          },
        }}
      >
        <main className={classNames(inter.variable, 'font-sans')}>
          <div className='h-screen flex'>
            <Component {...pageProps} />
            <Toaster
              toastOptions={{
                className: 'dark:!bg-neutral-900 dark:!text-white',
              }}
            />
          </div>
        </main>
      </SchemaContext.Provider>
    </>
  );
}

export default MyApp;
