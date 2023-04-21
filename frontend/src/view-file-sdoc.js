import React from 'react';
import ReactDom from 'react-dom';
import { SimpleEditor } from '@seafile/sdoc-editor';
import { I18nextProvider } from 'react-i18next';
import i18n from './_i18n/i18n-sdoc-editor';
import { Suspense } from 'react';
import Loading from './components/loading';

const { serviceURL } = window.app.config;
const { repoID, docPath, docName, docUuid, seadocAccessToken, seadocServerUrl } = window.app.pageOptions;

window.seafile = {
  repoID,
  docPath,
  docName,
  docUuid,
  isOpenSocket: true,
  serviceUrl: serviceURL,
  accessToken: seadocAccessToken,
  sdocServer: seadocServerUrl,
};

ReactDom.render(
  <I18nextProvider i18n={ i18n } >
    <Suspense fallback={<Loading />}>
      <SimpleEditor />
    </Suspense>
  </I18nextProvider>,
  document.getElementById('wrapper')
);
