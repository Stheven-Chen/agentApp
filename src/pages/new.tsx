import React, { useState, useEffect } from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import Input from '../component/input';
import { useNavigate } from 'react-router-dom';
import postal from '../component/function/postalCode';


const NewApp: React.FC = () => {
  const [data, setData] = useState<{
    insuredName: string;
    nik: string;
    alamat: string;
    telp: string;
    email: string;
    ktpFile: File | undefined;
    prov:string;
    kota:string;
    kecamatan:string;
    kelurahan:string;
  }>({
    insuredName: '',
    nik: '',
    alamat: '',
    telp: '',
    email: '',
    ktpFile: undefined,
    prov:'',
    kota:'',
    kecamatan:'',
    kelurahan:''
  });
  const navigate = useNavigate();
  const [listProv, setListProv] = useState([]);
  const [listKota, setListKota] = useState([]);
  const [listKecamatan, setListKecamatan] = useState([]);
  const [listKelurahan, setListKelurahan] = useState([]);
  const [kodePos, setKodePos] = useState();
  const [daerah, setDaerah] = useState({
    prov:'',
    kota:'',
    kecamatan:'',
    kelurahan:'',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
  
    if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
      const file = e.target.files?.[0];
      console.log('Selected File:', file);
  
      setData((prevState) => ({
        ...prevState,
        ktpFile: file,
        ktpFileUrl: file ? URL.createObjectURL(file) : null,
      }));
    } else if (name === 'prov' || name === 'kota' || name === 'kecamatan' || name === 'kelurahan') {
      setData((prevState) => ({ ...prevState, [name]: value }));
      setDaerah((prevData: any) => ({
        ...prevData,
        [name]: (e.target as HTMLSelectElement).selectedOptions[0].textContent,
      }));
    } else {
      setData((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  
  
  

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  
  //   if (file) {
  //     const fileUrl = URL.createObjectURL(file);
  //     console.log('Selected File:', file);
      
  //     setData((prevState) => {
  //       return { ...prevState, ktpFile: file, ktpFileUrl: fileUrl };
  //     });
  //   }
  // };
  


  useEffect(() => {
    const fetch = async () => {
      let query = "";
      const result = await postal(query);
      setListProv(result);
      if(data.prov){
        query = data.prov
        const result = await postal(query);
        setListKota(result);
      }
      if(data.kota){
        query = data.kota
        const result = await postal(undefined,query);
        setListKecamatan(result);
      }
      if(data.kecamatan){
        query = data.kecamatan
        const result = await postal(undefined,undefined,query);
        setListKelurahan(result);
      }
      if(data.kelurahan){
        query = data.kelurahan
        const result = await postal(undefined,undefined,undefined,query);
        setKodePos(result[0].postal_code);
      }
    };
    fetch();

  }, [data.prov, data.kota, data.kecamatan, data.kelurahan]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`ini dari new ${JSON.stringify(data, null, 2)}`);
    navigate(`:${data.nik}`, {
      state: {
        insuredName: data.insuredName,
        NIK: data.nik,
        address: `${data.alamat} ${daerah.kelurahan} ${daerah.kecamatan} ${daerah.kota} ${daerah.prov} -${kodePos}`,
        phone: data.telp,
        email: data.email,
        COB: 'Harta Benda',
        ktp:data.ktpFile
      },
    });
  };

  return (
    <>
      <Nav />
      <Tab />
      <MainBox
        content={
          <>
            <span className="font-semibold text-xl mb-5">New Application</span>
            <form onSubmit={submit}>
              <div className={` relative my-5 `}>
                <label
                  htmlFor="insuredName"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Insured Name
                </label>
                <Input
                  id="insuredName"
                  name="insuredName"
                  placeholder=""
                  value={data.insuredName}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="nik"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  NIK
                </label>
                <Input
                  id="nik"
                  name="nik"
                  placeholder=""
                  value={data.nik}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="alamat"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Alamat
                </label>
                <Input
                  id="alamat"
                  name="alamat"
                  placeholder=""
                  value={data.alamat}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="prov" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Provinsi:
                </label>
                <select
                  id="prov"
                  name="prov"
                  value={data.prov}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Provinsi</option>
                  {listProv.map((item:string, index:number) => {
                    return <option key={index} value={item}>{item}</option>;
                  })}
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="kota" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Kota:
                </label>
                <select
                  id="kota"
                  name="kota"
                  value={data.kota}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Kota</option>
                  {listKota.map((item:{city_id:string, kota:string}, index:number) => {
                    return <option key={index} value={item.city_id}>{item.kota}</option>;
                  })}
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="kecamatan" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Kecamatan:
                </label>
                <select
                  id="kecamatan"
                  name="kecamatan"
                  value={data.kecamatan}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Kecamatan</option>
                  {listKecamatan.map((item:{dis_id:string, dis_name:string},index:number) => {
                    return <option key={index} value={item.dis_id}>{item.dis_name}</option>;
                  })}
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="kelurahan" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Kelurahan:
                </label>
                <select
                  id="kelurahan"
                  name="kelurahan"
                  value={data.kelurahan}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Kelurahan</option>
                  {listKelurahan.map((item:{subdis_id:string, subdis_name:string},index:number) => {
                    return <option key={index} value={item.subdis_id}>{item.subdis_name}</option>;
                  })}
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="kodepos" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Kode Pos:
                </label>
                <input
                  id="kodepos"
                  name="kodepos"
                  placeholder=""
                  value={kodePos}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                  type="text"
                />
              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="telp"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  No Telp
                </label>
                <Input
                  id="telp"
                  name="telp"
                  placeholder=""
                  value={data.telp}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="email"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  placeholder=""
                  value={data.email}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={` relative mb-5 `}>
                <label
                  htmlFor="ktpFile"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  KTP:
                </label>
                <input
                  id="ktpFile"
                  name="ktpFile"
                  type="file"
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-sky-500 h-8 w-32 text-white font-Poppins rounded-xl transform-gpu transition-transform duration-300 active:scale-90"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        }
      />
      <FabComponent />
    </>
  );
};

export default NewApp;
