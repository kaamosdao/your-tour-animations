import { usePathname } from 'next/navigation';
import { PrismicPreview } from '@prismicio/next';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { repositoryName } from '@/prismicio';

import RootLayout from '@/components/RootLayout';
import { ReactSwitchTransition } from '@/components/TransitionGroup';

import '@/styles/style.scss';

export default function App({ Component, pageProps }) {
  const pathName = usePathname();

  gsap.registerPlugin(ScrollTrigger);

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
