async function solution(input) {
  const recurse = async (async_array) => {
    // just a number
    if (typeof async_array === "number") {
      return async_array;
    }

    if (typeof array !== "undefined" && array.length === 0) {
      return;
    }

    let size_async_array;
    await new Promise((resolve) =>
      async_array.size((size) => {
        size_async_array = size;
        resolve();
      })
    );

    let result = [];
    for (let i = 0; i < size_async_array; i++) {
      await new Promise((resolve) =>
        async_array.read(i, async (item) => {
          let lol = await recurse(item);
          result = result.concat(lol);
          resolve();
        })
      );
    }
    return result;
  };

  return await recurse(input);
}

module.exports = solution;
