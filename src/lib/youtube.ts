export function getYouTubeThumbnail(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}
