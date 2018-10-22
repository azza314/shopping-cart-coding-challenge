var express = require('express');
var router = express.Router();

// var data = require('./items.json')

// console.log(data)
/* GET users listing. */


router.get('/suggestions', function(req, res, next) {
  res.json([
    "cherimoya",
    "cherry",
    "pineapple",
    "pinapple",
    "pine nuts",
    "almonds",
    "milk",
    "almond milk",
    "broccoli",
    "broccolini",
    "pie",
    "cherry pie",
    "blueberry pie",
    "blueberries",
    "apples",
    "apple pie",
    "avocado",
    "sugar",
    "bacon",
    "eggs",
    "tofu",
    "tofurkey",
    "potatoes",
    "patatoes",
    "bananas",
    "grapes",
    "grapefruit",
    "grapefruit juice",
    "grape juice",
    "orange juice",
    "oranges",
    "orange bandana",
    "orangutan stuffed animal",
    "oranigram games and puzzled",
    "diapers",
    "tea tree shampoo",
    "hand soap",
    "dishsoap",
    "hand sanitizer",
    "paper plates",
    "paper towels",
    "raspberries",
    "cat food",
    "tuna fish",
    "kibbles",
    "English breakfast tea",
    "green tea",
    "cherry chapstick",
    "sirloin steak",
    "New York strip steak",
    "chicken nuggets",
    "sparkling water",
    "coconut water",
    "coconut flakes",
    "taco mix",
    "trailmix",
    "spam",
    "beef broth",
    "chicken soup",
    "tomato soup",
    "cherry tomatoes",
    "beefsteak tomatoes",
    "sun-dried tomatoes",
    "sunscreen",
    "sunblock",
    "shaving cream",
    "whipped cream",
    "creamy tomato soup",
    "chocolate candy bar",
    "chocolate-covered cherries",
    "milk",
    "chocolate milk",
    "protein bar",
    "bar soap",
    "pickles",
    "pickled fish",
    "olive oil",
    "olives",
    "coconut oil",
    "avocado oil",
    "zucchini",
    "zuchini",
    "peanut butter",
    "almond butter",
    "peanuts",
    "macadamia nuts",
    "butter"
  ])
  
});

module.exports = router;
