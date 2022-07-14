import {ArrayList} from "./ArrayList";

interface Post {
    title: string;
}

let array = new ArrayList<Post>();

array.add({title: "Lập trình JS"});
array.add({title: "Lập trình PHP"});
array.add({title: "Lập trình Java"});

console.log(array.container)