// small blue picture made in code so the images work even with no internet
const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">' +
  '<rect width="100%" height="100%" fill="#1565c0"/>' +
  '</svg>';

export const placeholderImage = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);