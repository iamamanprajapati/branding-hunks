/** YouTube Shorts IDs used for hero marquees and the video grid. */
export const YOUTUBE_SHORT_VIDEO_IDS: readonly string[] = [
  '9B_bjfsrl_k',
  'LmVL7oYGgCE',
  '_Vv3yHrFYpY',
  'd51IdYIieEg',
  'kU3NYcumKMQ',
  'uzm_jbHu_so',
  'lU3lhdKtRBQ',
  'k4hUoySQ6VE',
  '9KwCu4HpaoU',
  'Hn9MsHdHWfk',
];

export function youtubeShortEmbedSrc(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`;
}
