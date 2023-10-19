/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import { redirectToPreviewURL } from '@prismicio/next';

import { createClient } from '../../../prismicio';

export async function GET(request) {
  const client = createClient();

  return await redirectToPreviewURL({ client, request });
}
