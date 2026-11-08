// Cloudinary delivery helpers. They insert transformations into a stored /upload/ URL.
const withT = (url, t) => url.replace('/upload/', `/upload/${t}/`);

export const img = (url, w) => withT(url, `f_auto,q_auto,c_limit,w_${w}`);

export const srcset = (url, widths = [480, 800, 1200, 1600]) =>
  widths.map((w) => `${img(url, w)} ${w}w`).join(', ');

export const og = (url) => withT(url, 'c_fill,w_1200,h_630,f_jpg,q_auto');

// First frame of a video as a JPG, used as the poster and as a cover when a project has no photos.
export const poster = (url) =>
  withT(url, 'so_0,f_jpg,q_auto,w_1200').replace(/\.[a-z0-9]+$/i, '.jpg');

export const videoSrc = (url) => withT(url, 'q_auto');
