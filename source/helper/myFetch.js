export const api = async (opts={}) => {
   const optsFetch = {
      method : 'POST',
      headers: {
         Accept: 'application/json',
         "Content-Type": 'application/json'
      },
      ...opts
   }
   const url = "http://192.168.43.251/react_native_services/simple-app.php";
   try{
       let response = await fetch(url, optsFetch );
       return await response.json()
   }catch(e){
      return { error: 'Failed fetch from Network'}
   }
}