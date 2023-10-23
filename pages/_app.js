import RootLayout from '@/components/RootLayout';
import { ReactSwitchTransition } from '@/components/TransitionGroup';

import '@/styles/style.scss';

export default function App({ Component, pageProps, router }) {
  return (
    <RootLayout>
      <ReactSwitchTransition
        transitionKey={router.route}
        timeout={{ exit: 900 }}
        mode="out-in"
      >
        <Component {...pageProps} />
      </ReactSwitchTransition>
    </RootLayout>
  );
}
