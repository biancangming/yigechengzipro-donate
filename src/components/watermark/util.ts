export function createMarkBase64(str: string, ) {
  const can = document.createElement('canvas');
  const width = 260;
  const height = 130;
  Object.assign(can, { width, height });

  const cans = can.getContext('2d');
  if (cans) {
    cans.rotate((-20 * Math.PI) / 120);
    cans.font = '20px Vedana';
    cans.fillStyle = 'rgba(0, 0, 0, 0.55)';
    cans.textAlign = 'left';
    cans.textBaseline = 'middle';
    cans.fillText(str, width / 20, height);
  }
  return can.toDataURL('image/png');
}