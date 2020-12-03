// eslint-disable-next-line import/no-unresolved
import NMRDisplayer, { NMRDisplayerProps } from 'nmr-displayer';
import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import 'cheminfo-font/dist/style.css';
import 'react-animated-slider-2/build/horizontal.css';
import 'prismjs/themes/prism.css';
/* eslint-enable */

export default function EnhancedNMRDisplayer(props: NMRDisplayerProps) {
  return <NMRDisplayer {...props} />;
}
