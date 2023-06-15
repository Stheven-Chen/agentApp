import React,{useState} from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import FabComponent from '../component/fab';
import useToday from '../component/function/today';
import Input from '../component/input';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {setEndors} from '../reducers/endorsSlice';

const EndorsMv: React.FC = ()=>{
    const [data,setData] = useState({
        nPolis:'',
        insuredName:'',
        periode:'',
        eDate:'',
        polis:'',
        okupasi:'',
        jEndors:'',
        before:'',
        after:'',
        keterangan:'',

    })
    const today = useToday();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch(setEndors({
            nPolis:data.nPolis,
            insuredName:data.insuredName,
            periode:data.periode,
            eDate:data.eDate,
            polis:data.polis,
            okupasi:data.okupasi,
            jEndors:data.jEndors,
            before:data.before,
            after:data.after,
            keterangan:data.keterangan,
            COB:"MV",
            type:"Endorsement",
            addedDate:today
        }));
        navigate('/agent/application/');
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prevState) => ({ ...prevState, [name]: value }));
      };
    return(
        <>
            <Nav/>
            <Tab/>
            
            <MainBox
            content={
                <>
                <span className="font-semibold text-xl mb-5">Endorsement</span>
                <form onSubmit={submit}>
                <div className={`relative my-5`}>
                <label
                  htmlFor="nPolis"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  No Polis
                </label>
                <Input
                  id="nPolis"
                  name="nPolis"
                  placeholder=""
                  value={data.nPolis}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={`relative my-5`}>
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

              <div className={`relative my-5`}>
                <label htmlFor="eDate" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Tanggal Effektif:
                </label>
                <div className="flex justify-between items-center gap-4">
                  <input
                    id="eDate"
                    name="eDate"
                    placeholder=""
                    value={data.eDate}
                    onChange={handleInputChange}
                    className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                    type="date"
                    min={today}
                  />
                </div>
                </div>
                <div className={`relative my-5`}>
                <label htmlFor="polis" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Polis:
                </label>
                <select
                  id="polis"
                  name="polis"
                  value={data.polis}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                    <option value="">Jenis Polis</option>
                    <option value="Comprehensive">Comprehensive</option>
                  <option value="TLO">TLO</option>
                  
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="okupasi" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Okupasi:
                </label>
                <select
                  id="okupasi"
                  name="okupasi"
                  value={data.okupasi}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                 <option value="">Pilih okupasi</option>
                  <option value="pribadi">Pribadi</option>
                  <option value="dinas">Dinas</option>
                  <option value="niaga">Niaga</option>
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="jEndors" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Endorsement:
                </label>
                <select
                  id="jEndors"
                  name="jEndors"
                  value={data.jEndors}
                  onChange={handleInputChange}
                  className="rounded-xl pl-3 w-full h-10 mt-5 font-Poppins font-semibold"
                >
                  <option value="">Pilih Endorsement</option>
                  <option value="Perubahan TSI">Perubahan TSI</option>
                  <option value="Perubahan Administrasi Polis">Perubahan Administrasi Polis</option>
                  <option value="Perubahan Coverage">Perubahan Coverage</option>
                  <option value="Cancelation">Cancelation</option>
                  <option value="Perluasan Diskon">Perluasan Diskon</option>
                </select>
              </div>

              <div className={`relative my-5`}>
                <label
                  htmlFor="before"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Sebelum
                </label>
                <Input
                  id="before"
                  name="before"
                  placeholder=""
                  value={data.before}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={`relative my-5`}>
                <label
                  htmlFor="after"
                  className={`absolute left-3 -top-2.5 transition-all duration-200`}
                >
                  Sesudah
                </label>
                <Input
                  id="after"
                  name="after"
                  placeholder=""
                  value={data.after}
                  onChange={handleInputChange}
                  additionalStyles="rounded-xl pl-3"
                />
              </div>
              <div className={`relative my-5`}>
                    <label
                      htmlFor="keterangan"
                      className={`absolute left-3 -top-2.5 transition-all duration-200`}
                    >
                      Keterangan
                    </label>
                    <textarea
                      id="keterangan"
                      name="keterangan"
                      placeholder=""
                      value={data.keterangan}
                      onChange={handleInputChange}
                      className="rounded-xl pl-3 w-full h-32 mt-5 p-3 font-Poppins font-semibold" 
                      rows={5}                   
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
            <FabComponent/>

        </>
    );
};

export default EndorsMv;