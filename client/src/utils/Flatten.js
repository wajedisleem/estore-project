const flattenMessages = (nestedMessages, prefix = '') =>
  Object.keys(nestedMessages).reduce((acc, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object') {
      Object.assign(acc, flattenMessages(value, prefixedKey));
    } else {
      acc[prefixedKey] = value;
    }

    return acc;
  }, {});

export { flattenMessages };
