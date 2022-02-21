async function login(e){
  e.preventDefault()
  const username=document.querySelector('#username')
  const password=document.querySelector('#password')
}
async function getuserinfo(userID){
  cons infosnap=firebase.firestore()
  .collection('user')
  .doc(userID)
  .get()
  const userinfo=infosnap.data()
  if(userinfo){

  }
}
