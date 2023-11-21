const axios = require('axios');

const postData = {
  client_id: 'e40543f4-2ce9-441b-86b9-9af18065609e',
  client_secret: 'Xjc22xsRyfhPxcJtQ965jmMRh1xJtHvfUYKx0Db4u5tU3F8I8MxL2CcP4ASh7Uad',
  grant_type: "refresh_token",
  refresh_token: "def50200e1d97fa224dd0e05464464e010832bbf2158d3fed6618cbe1983a025c3dc0bf735f10f2205bc061755f9fa97b61e8ee62caeca78e41afa53f810b8bc53696deeb197799e03d25c7f8bfbe97575ae52fae72e2b8e7afe89486afb5b8c70f4ed90508dc5108e22739e101edba1ae87e6f7f3ec2e9525e513937193a4facb6539732e6dd36da7008b43d98cc3684b667d93820f6c28ea5538615a487481af42531ffb3b93f11f725e1cdf5f49fdd6507083f6d6d66370b8e1cfd325e27ddd46ad7600ef574c5197319d30000976dc87cd8174ca8685f2fc75b5181091dcb00ac676c1035fa42685999fce1bfcdcc65e7e6224006daad7eb26a59f0d021d44f17cfcd36d2d5bae8b057f005e702ec7bc84527bf85e4145741a7e756d8187936ee9cbf6312239fe2b8b35ec0d4805b186ad347db540e99849fc6537a1cb9aea972f4b5f66b4caf972cf652680400eba72dc437da72feabf0dacd0b6b5bde76cca15e5eea549a620de57d905448a8e8d03eff4283310de3c2ef9c118497b741221caa336c0e65b238c97fc6ceddfc6fdd95c2b8345ad5ace814ff6ca672b174ec36d586e50df52adb24d1753701926debb308fd3909fd2d06cdf64bca93fb0dbad4fe4bbab79d8bba272a2772eed6225c0f550ae80437746351efd8f73c92d6bc8bf424d50f30d342caf7dadbd",
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



