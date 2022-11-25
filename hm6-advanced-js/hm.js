function MyAwesomeSet(array) {
  const unique = (array) => {
    return array.filter(
      (value, index, a) =>
        (Number.isNaN(value) ? a.findIndex(Number.isNaN) : a.indexOf(value)) ===
        index
    );
  };

  return {
    array: unique(array),

    get size() {
      return this.array.length;
    },

    has(value) {
      return this.array.includes(value);
    },

    add(new_value) {
      this.array.push(new_value);
      this.array = unique(this.array);
      return this;
    },

    delete(new_value) {
      const status = this.has(new_value);
      this.array = this.array.filter((value) =>
        Number.isNaN(value) && Number.isNaN(new_value)
          ? false
          : value !== new_value
      );
      return status;
    },

    clear() {
      this.array = [];
    },
  };
}

module.exports = MyAwesomeSet;
