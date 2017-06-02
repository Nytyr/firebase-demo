var addItem = function(name) {
    firebase.database().ref('items/'+name).set(true);
}

firebase.database().ref('items').on('value', function(value) {
    console.log(value.val());
    $("#app").html(JSON.stringify(value.val()));
});