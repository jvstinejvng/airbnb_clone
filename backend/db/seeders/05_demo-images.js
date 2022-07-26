'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Images', [
      {
        spotId: 1,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/97/1c/e7/971ce7628b56bbe8c548d1c4223be5a2.jpg",
      },
      {
        spotId: 1,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/5a/f5/fe/5af5fe73f3edcf79db584ccc54ee05f0.jpg",
      },
      {
        spotId: 1,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/8a/50/29/8a50295030a9b107dc5098b435eb83a4.jpg",
      },
      {
        spotId: 1,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/03/ec/ee/03ecee47558503a1afbefb798659b911.jpg",
      },
      {
        spotId: 2,
        imageableType: 'Spot',
        url:"https://i.pinimg.com/564x/de/6e/75/de6e7593b90e2ddbd79834ee5ee12945.jpg",
      },
      {
        spotId: 2,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/62/75/7f/62757f20073fdbbe18353b67cf96a2bf.jpg",
      },
      {
        spotId: 2,
        imageableType: 'Spot',
        url: "https://www.hayneedle.com/tips-and-ideas/wp-content/uploads/2013/09/dog-run-with-hammock-800x533.jpg",
      },
      {
        spotId: 2,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/9f/fe/87/9ffe879860cf9dd294708c54a00105b9.jpg",
      },
      {
        spotId: 3,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/e4/af/9d/e4af9dfa8b996a9353be615415eb38de.jpg",
      },
      {
        spotId: 3,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/3c/1c/f8/3c1cf81e2cd5e865463c744d63c7a2ab.jpg",
      },
      {
        spotId: 3,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/3e/5a/54/3e5a5451adfbb63b4a5b1136a53f5934.jpg",
      },
      {
        spotId: 3,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/ba/a8/0f/baa80f13a0e2f9e48a20d5a948f0e516.jpg",
      },
      {
        spotId: 4,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/0d/31/4f/0d314fb988d69fefbbb16b965939afa8.jpg",
      },
      {
        spotId: 4,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/86/ff/7f/86ff7fddd4b8a61e29ca74ae88684813.jpg",
      },
      {
        spotId: 4,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/ce/34/c6/ce34c6b5bf19a0a8ee1c504075b55af9.jpg",
      },
      {
        spotId: 4,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/29/21/69/2921690251481b1ccad62f5d181f1051.jpg",
      },
      {
        spotId: 5,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/40/77/4c/40774ca19cdea6ba1a8d1ed63b51e7ff.jpg",
      },
      {
        spotId: 5,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/ba/a8/0f/baa80f13a0e2f9e48a20d5a948f0e516.jpg",
      },
      {
        spotId: 5,
        imageableType: 'Spot',
        url: "https://image.chewy.com/is/image/catalog/213784_MAIN._AC_SL600_V1599771967_.jpg",
      },
      {
        spotId: 5,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/2d/ec/3f/2dec3f3078bd86b17b4b9ae94fa5635b.jpg",
      },
      {
        spotId: 6,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/originals/86/4b/d2/864bd2ed6ad77fba125aeb872bf15124.jpg",
      },
      {
        spotId: 6,
        imageableType: 'Spot',
        url: "https://www.cinemacats.com/wp-content/uploads/movies/princessdiaries11.jpg",
      },
      {
        spotId: 6,
        imageableType: 'Spot',
        url: "https://hookedonhouses.net/wp-content/uploads/2014/10/Exterior-of-Mias-firehouse-Princess-Diaries-2.jpg",
      },
      {
        spotId: 6,
        imageableType: 'Spot',
        url: "https://houseandhistory.com/wp-content/uploads/2021/03/Anne-Hathaway-Princess-Diaries.jpg",
      },
      {
        spotId: 7,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/d9/54/6d/d9546d5904d083395d7db8cef74ee268.jpg",
      },
      {
        spotId: 7,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/e8/a9/c9/e8a9c9237917363e4cafa39785f473d6.jpg",
      },
      {
        spotId: 7,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/0c/75/4d/0c754d82e90f962b7477feba23e33494.jpg",
      },
      {
        spotId: 7,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/07/6d/9f/076d9fc57e1b7a498a570507d10d0b07.jpg",
      },
      {
        spotId: 8,
        imageableType: 'Spot',
        url: "https://cdn.shopify.com/s/files/1/0486/7532/4069/products/eleanor-rattan-pet-bed-hawaii-pre-order-pet-bed-picnic-imports-833158_1024x1024@2x.jpg?v=1621875799",
      },
      {
        spotId: 8,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/30/f1/6a/30f16aad10dbbe0d0db4e34062e533a2.jpg",
      },
      {
        spotId: 8,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/bd/4e/f3/bd4ef3966a6983716e8f21607c608db2.jpg",
      },
      {
        spotId: 8,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/09/be/e3/09bee39b94aa93da563852ff5db2a287.jpg",
      },
      {
        spotId: 9,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/38/2f/d7/382fd7ec9c6b642fe37f09686baa6aa6.jpg",
      },
      {
        spotId: 9,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/71/c6/d8/71c6d8b5ee90e1824eb217701a4f3f11.jpg",
      },
      {
        spotId: 9,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/42/8d/74/428d74902058e5dee1f407a01f1baf2a.jpg",
      },
      {
        spotId: 9,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/7c/f9/f3/7cf9f37c7b2789ebc3170242c9ab7b18.jpg",
      },
      {
        spotId: 10,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/82/26/d9/8226d968c93625fde1a5f208bc4205bf.jpg",
      },
      {
        spotId: 10,
        imageableType: 'Spot',
        url: "https://i.etsystatic.com/10416934/r/il/7bb3ba/2211898011/il_794xN.2211898011_p0dt.jpg",
      },
      {
        spotId: 10,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/8d/1d/81/8d1d815af3f4b995e2f678d8af961597.jpg",
      },
      {
        spotId: 10,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/f8/5d/97/f85d97ceb064fd265844f86f36398846.jpg",
      },
      {
        spotId: 11,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/15/bc/e4/15bce4a4d5db925e5235ee8433f3944a.jpg",
      },
      {
        spotId: 11,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/18/21/56/18215613b87cf3ec1adf329701bfbc90.jpg",
      },
      {
        spotId: 11,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/44/05/b0/4405b07568f811846d971e6f2f6b8db5.jpg",
      },
      {
        spotId: 11,
        imageableType: 'Spot',
        url: "https://i.pinimg.com/564x/93/aa/e4/93aae40faf38d00df3a402b2d11d8afa.jpg",
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Images', {}, {});
  }
};
