document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('vimeo-player');
  const player = new Vimeo.Player(iframe);

  const saveCurrentTime = () => {
    return player
      .getCurrentTime()
      .then(currentTime => {
        localStorage.setItem(
          'videoplayer-current-time',
          JSON.stringify(currentTime)
        );
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };

  const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

  player.on('timeupdate', throttledSaveCurrentTime);

  const setPlaybackFromStorage = () => {
    const storedTime = localStorage.getItem('videoplayer-current-time');
    if (storedTime) {
      const currentTime = JSON.parse(storedTime);
      return player
        .setCurrentTime(currentTime)
        .then(() => {
          // Dodaj obsługę powodzenia, jeśli to konieczne
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
    }
    return Promise.resolve();
  };

  setPlaybackFromStorage();
});
//
/*
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo.Player(document.getElementById('vimeo-player'));

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

document.addEventListener('DOMContentLoaded', () => {
  setPlaybackFromStorage().then(({ success, currentTime, error }) => {});
});
*/
