module.exports = function (api) {
  // Cache the returned value forever and don't call this function again.
  api.cache.forever();

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['macros'],
  };
};
