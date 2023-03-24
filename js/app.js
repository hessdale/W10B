//using variables to get ids and all p tags using querySelector
let get_id_1 = document.querySelector(`#text_1`);
let all_p_tags = document.querySelectorAll(`p`);
//using variables and document.getElement to define them
let class_1 = document.getElementsByClassName(`class_1`);
let get_id_2 = document.getElementById(`text_2`);


//using the variables to change the style of this p-tag
get_id_1[`style`][`color`] = `green`;

//because this is an array I used a loop to go through and change each
for (counter = 0; counter < all_p_tags.length; counter++) {
    all_p_tags[counter].innerText = `CHANGED!`;
};

//because this is an array I used a loop to go through and change each
for (counter = 0; counter < class_1.length; counter++) {
    class_1[counter].insertAdjacentHTML(`afterend`, `<p>new nested tag</p>`);
};

//using the variables to change the html on index.html
get_id_2.insertAdjacentHTML(`beforebegin`, `<p>new tag before existing tag</p>`);