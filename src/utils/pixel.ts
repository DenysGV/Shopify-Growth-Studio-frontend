import ReactPixel from 'react-facebook-pixel';

const pixelId: string = '1658681604736069';

const options = {
   autoConfig: true, // Автоматическая конфигурация
   debug: false,     // Отключить debug-режим
};

export const initFacebookPixel = (): void => {
   ReactPixel.init(pixelId, undefined, options);
   ReactPixel.pageView();
};

export const trackLead = (): void => {
   ReactPixel.track('Lead');
};
