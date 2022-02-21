create item collection(item){
  firebase.firestore().collection('item')
  .doc(user.uid)
}
