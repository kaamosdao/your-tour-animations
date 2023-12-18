import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { PrismicPreview } from '@prismicio/next';
import gsap from 'gsap/dist/gsap';

import { repositoryName } from '@/prismicio';

import RootLayout from '@/components/RootLayout';
import { ReactSwitchTransition } from '@/components/TransitionGroup';

import '@/styles/style.scss';

export default function App({ Component, pageProps }) {
  const pathName = usePathname();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.unobserve(document.body);
    };
  }, []);

  return (
    <>
      <RootLayout>
        <ReactSwitchTransition
          transitionKey={pathName}
          timeout={{ exit: 900 }}
          mode="out-in"
        >
          <Component {...pageProps} />
        </ReactSwitchTransition>
      </RootLayout>
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
