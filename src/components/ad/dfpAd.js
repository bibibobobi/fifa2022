// import useDfpSlot from '../../useDfpSlot';

import { useEffect } from 'react';
import useViewport from '../../useViewport';

const DfpAd = ({ width, height }) => {
  // useDfpSlot({
  //   path: '/40175602/mirror_RWD_2022FIFA_970250-300250_FT',
  //   size: [width, height],
  //   id: 'mirror_RWD_2022FIFA_970250-300250_FT',
  // });
  useEffect(() => {
    const googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function () {
      googletag.display('div-gpt-ad-1667527475103-0');
    });
  }, []);

  return (
    <div
      id='div-gpt-ad-1667527475103-0'
      style={{ minWidth: '300px', minHeight: '250px' }}
    ></div>
  );
};

export default DfpAd;
