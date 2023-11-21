const axios = require('axios');

const postData = {
  client_id: 'e40543f4-2ce9-441b-86b9-9af18065609e',
  client_secret: 'Xjc22xsRyfhPxcJtQ965jmMRh1xJtHvfUYKx0Db4u5tU3F8I8MxL2CcP4ASh7Uad',
  grant_type: "refresh_token",
  refresh_token: "def502002474c8aa892c9e3b2948af187ad1e3b525b20f3c7d063e955ba3a06ea735bf13a1755c4fe4d6f1176c7360c1ce577f8e3c4806d5c53bb5e83107a7b0fb298734bd1a1cb1992bae83ce4c7cacedc25483091ec33013c9f34ea7633a84649a0d8a380cd33cf3ca7cdf2e8b08461c2562ae80e0393dcfb81900229a8441c46150030704d14fe25efd73158ee87d49fcf19e9ea97597685e7b12cad233339e269fece3b4a36adc7650891898776fd1eaa243bf174d59cb5cc0d2e8c366b42132f89d72b4d5ed7767e2d3e7a3db670d0bdeff8c0c19d26f6e8f81b44384fcad395779f3ba99f30be3ff941cd6b4432b5a84570cb4503d8cc3787a38057739e95000d3a8ba8759a2c2e3c09200ca4997bfeccf7e3f1f2923b669e077a25bb6de9de1cca3b134586370057a58165e3db680c5bfb296cd70398d4f19c0449851fbb1896da66f26913716068efd3ede827c60c3bcdebdf7dc65942d668b2b75508bc52cd23675a91cab2751a9152966bf6da361a3e02f85f0482004d520bd1179600b6ce987c38e8f48e6495353798e01c68d0bd78176360bd583f9bce8b18f32d09763837be18eb34ba5e42813129c4622c5e84511c7d8f3e7bf2fec3415780607ac214c36495230bcddc38940c968b43a74faa7df13721aabd87990f8039f58986f356e78cd3fb92aa019c95ce7",
  redirect_uri: "https://27f3-95-25-95-209.ngrok-free.app/"
};

const sendPostRequest = async () => {
  try {
    const response = await axios.post('https://dinozavrik9911.amocrm.ru/oauth2/access_token', postData);
    accessToken = response.data.access_token
    return accessToken;
  } catch (error) {
    console.error(error);
  }
};


module.exports = {
  sendPostRequest: sendPostRequest
}



