import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', async () => {
  const iframe = document.getElementById('vimeo-player');
  const player = new Vimeo(iframe);

  const saveCurrentTime = throttle(async () => {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime)
    );
  }, 1000);

  player.on('timeupdate', saveCurrentTime);

  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime) {
    const parsedStoredTime = JSON.parse(storedTime);
    await player.setCurrentTime(parsedStoredTime);
  }
});
