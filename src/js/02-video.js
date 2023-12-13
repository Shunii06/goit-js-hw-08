import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('vimeo-player');
  const player = new Vimeo(iframe);
  const saveCurrentTime = throttle(() => {
    return player
      .getCurrentTime()
      .then(currentTime => {
        localStorage.setItem(
          'videoplayer-current-time',
          JSON.stringify(currentTime)
        );
        return { success: true, currentTime };
      })
      .catch(error => {
        console.error('An error occurred:', error);
        return { success: false, error };
      });
  }, 1000);

  player.on('timeupdate', () => {
    saveCurrentTime().then(({ success, currentTime, error }) => {});
  });
  const setPlaybackFromStorage = () => {
    const storedTime = localStorage.getItem('videoplayer-current-time');
    return storedTime
      ? player
          .setCurrentTime(JSON.parse(storedTime))
          .then(() => ({ success: true, currentTime: JSON.parse(storedTime) }))
          .catch(error => ({ success: false, error }))
      : Promise.resolve({ success: true });
  };
  setPlaybackFromStorage().then(({ success, currentTime, error }) => {});
});
