function(doc) {
  var shop, price, value;
  if (doc.item && doc.prices) {
      for (shop in doc.prices) {
          price = doc.prices[shop];
          value = [doc.item, shop];
          emit(price, value);
      }
  }
}