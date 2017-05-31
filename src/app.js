firebase.database().ref('items').on('value', function(snapshot) {
    console.log(snapshot.val());
});

var addItem = function(item) {
    firebase.database().ref('items/' + item).set(true);
}