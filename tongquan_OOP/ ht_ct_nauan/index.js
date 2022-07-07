class Recipe {
    constructor(title, serving, ingredients) {
        this.title = title;
        this.serving = serving;
        this.ingredients = ingredients;
    }

}
let menu = new Recipe('Sườn xào chua ngọt',
    2,
    ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua',
        'Hành tây (ớt chuông)']);
console.log(`Tên món ăn ${menu.title}`);
console.log(`Khẩu phần ăn ${menu.serving}`);
console.log(`Thành Phần: `);
for (let i = 0; i < menu.ingredients.length; i++) {
    console.log(`${menu.ingredients[i]}`)
}
