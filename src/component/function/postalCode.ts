
  
  const postal = async (prov?: string, city_id?: string, dis_id?: string, subdis_id?: string) => {
    const options = {
        method:"POST"
    }
    try{
        let parameter = '';
        if (prov) {
            parameter = `prov=${prov}`;
          } else if (dis_id) {
            parameter = `dis_id=${dis_id}`;
          } else if (subdis_id) {
            parameter = `subdis_id=${subdis_id}`;
          } else if (city_id) {
            parameter = `city_id=${city_id}`;
          } else {
            parameter = 'prov=true';
          }
        const res = await fetch(`https://agentserver-production.up.railway.app/eq?${parameter}`, options)
        const data = await res.json()
        if(res.status===404){
            console.error('Tidak ditemukan')
        }
        return data
    }catch(err){
        throw err
    }

  };
  
  export default postal;
  