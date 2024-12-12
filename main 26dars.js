async function getAll() {
  try {
    const {data} = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1");
    return data;
  } catch (error) {
    console.log("hatolik", error);
  }
}
(async () => {
  const post = await getAll();



  const name = document.getElementById("name"); 
  name.innerText =`name: ${post.name}`

  const email = document.getElementById("email"); 
  email.innerText = `email: ${post.email}`

  const address = document.getElementById("adres"); 
  address.innerText = `City: ${post.address.city}, Street: ${post.address.street}`

  const phone = document.getElementById("phone"); 
  phone.innerText = `phone: ${post.phone}`

   const website = document.getElementById("website"); 
   website.innerText = `website: ${post.website}`

   const company = document.getElementById("company"); 
   company.innerText = `company: ${post.company.name}`
})();
