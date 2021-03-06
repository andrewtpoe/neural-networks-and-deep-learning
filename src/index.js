const { loadData } = require('./data-loader');
const { initializeNetwork } = require('./network');

(async () => {
  const { trainingData, testData } = await loadData;

  const network = initializeNetwork();

  network.train(trainingData, network.evaluate(testData));
})();
