setInterval(() => {
  const main = document.querySelector('main');
if (main) main.remove();

const header_channel = document.querySelector('.header-channel');
if (header_channel) header_channel.remove();
}, 1000);
