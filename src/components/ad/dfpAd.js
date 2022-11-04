import useDfpSlot from '../../useDfpSlot';

const DfpAd = ({ width, height }) => {
  useDfpSlot({
    path: '/40175602/mirror_RWD_2022FIFA_970250-300250_FT',
    size: [width, height],
    id: 'CI3jpfTNkfsCFZJgDwIdIwIOow',
  });

  return (
    <div
      id='CI3jpfTNkfsCFZJgDwIdIwIOow'
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

export default DfpAd;
