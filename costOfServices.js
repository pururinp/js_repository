var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн", 
    "Послуга1":"3000 грн",
    "Послуга2":"30 грн"
  };
  
  var costOfServices = {

    price: function() {
      var sum = 0;
      for (var key in services) {
        var priceStr = services[key]; 
        var priceNum = parseFloat(priceStr);
        sum += priceNum;
      }
      return sum;
    },
  
  
    minPrice: function() {
      var min = null;
      for (var key in services) {
        var price = parseFloat(services[key]);
        if (min === null || price < min) {
          min = price;
        }
      }
      return min;
    },
  
    
    maxPrice: function() {
      var max = null;
      for (var key in services) {
        var price = parseFloat(services[key]);
        if (max === null || price > max) {
          max = price;
        }
      }
      return max;
    }
  };
  

  console.log("Загальна вартість: " + costOfServices.price() + " грн");
  console.log("Мінімальна ціна: " + costOfServices.minPrice() + " грн");
  console.log("Максимальна ціна: " + costOfServices.maxPrice() + " грн");