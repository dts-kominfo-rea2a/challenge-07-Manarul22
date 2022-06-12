const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let t1 = await promiseTheaterIXX();
  let t2 = await promiseTheaterVGC();
  let combined = t1.concat(t2);
  let result = 0;
  combined.map((t1) => {
    t1.hasil === emosi && (result += 1);
    return result;
  })
};

module.exports = {
  promiseOutput,
};
