export const CHANGE_OVERLAY = 'CHANGE_OVERLAY';
export const changeOverlay = (img, title, hasOverlay) => ({
  type: CHANGE_OVERLAY,
  img,
  title,
  hasOverlay
});