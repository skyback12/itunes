async function doNetworkCall(){
    console.log('fn starts');
    const URL=`https://itunes.apple.com/search?term=sonu+nigam&limit=20`;
    try {
        const response=await fetch(URL);
        const obj= await response.json();
        return obj;
    } catch (error) {
        throw error;
    }
}
export default doNetworkCall;