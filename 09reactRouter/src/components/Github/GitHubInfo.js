export const gitinfo = async () =>{
   const data = await fetch('https://api.github.com/users/nandishbt')
   return data.json()
}