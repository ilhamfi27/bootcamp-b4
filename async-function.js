function asynchronousFunction(teksInput, callback) {
  setTimeout(() => {
    callback('hello ' + teksInput);
  }, 0);
}
function asyncUppercase(str, callback, callbackError) {
  if (str.length > 10) {
    callbackError('Error Processing asyncUppercase');
  } else {
    callback(str.toUpperCase());
  }
}
function asyncLowercase(str, callback, callbackError) {
  if (str.length > 8) {
    callbackError('Error Processing asyncLowercase');
  } else {
    callback(str.toLowerCase());
  }
}
asynchronousFunction('Ilham',function (teksOutput) {
    asyncUppercase(
      teksOutput,
      function (uppercasedText) {
        asyncLowercase(
          uppercasedText,
          function (lowercasedText) {
            console.log(lowercasedText);
          },
          function (err) {
            console.log('ada error', err);
          }
        );
      },
      function (err) {
        console.log('ada error', err);
      }
    );
  },
  function (err) {
    console.log('ada error', err);
  }
);
