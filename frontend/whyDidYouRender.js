// whyDidYouRender setup for debugging React re-renders
if (process.env.NODE_ENV === 'development') {
  const React = require('react');
  // eslint-disable-next-line global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
