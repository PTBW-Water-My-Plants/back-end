
exports.seed = function (knex, Promise) {
  return knex('plants').insert([
    { nickname: 'Purple Bell Flowers/Angel Trumpets', species: 'Brugmansia suaveolens', h2ofrequency: 'every 2-3 days', image_url: 'https://images.pexels.com/photos/128868/thimble-common-foxglove-digitalis-purpurea-cinquefoil-128868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { nickname: 'Josephs Coat', species: 'Amaranthus tricolor', h2ofrequency: '1-2 times per week', image_url: 'https://www.gardeningknowhow.com/wp-content/uploads/2019/03/Amaranthus-tricolor.jpg' },
    { nickname: 'Foxglove', species: 'Digitalis purpurea', h2ofrequency: 'once per week', image_url: 'https://s3.amazonaws.com/cdn.brecks.com/images/500/64030.jpg' },
    { nickname: 'Sword Fern/Boston Fern', species: 'Polystichum', h2ofrequency: 'once per week', image_url: 'https://www.trees.com/sites/default/files/inline-images/Boston-Fern.jpg' },
  ]);
};
