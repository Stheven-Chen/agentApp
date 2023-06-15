import React, { useState } from 'react';
import Nav from '../component/nav';
import Tab from '../component/tab';
import MainBox from '../component/mainBox';
import Input from '../component/input';
import FabComponent from '../component/fab';
import { useDispatch } from 'react-redux';
import { setKlaim } from '../reducers/klaimSlice';
import { useNavigate } from 'react-router-dom';
import useToday from '../component/function/today';

const KlaimH = () => {
  const [data, setData] = useState({
    nPolis: '',
    insuredName: '',
    periode: '',
    polis: '',
    okupasi: '',
    dol: '',
    kronologi: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = useToday();
  const date = new Date();
    date.setDate(date.getDate() - 10);
    const minDate = date.toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      setKlaim({
        insuredName: data.insuredName,
        nPolis: data.nPolis,
        type: 'Klaim',
        COB: 'Harta Benda',
        periode: data.periode,
        polis: data.polis,
        okupasi: data.okupasi,
        dol: data.dol,
        kronologi: data.kronologi,
        addedDate: today,
      })
    );
    navigate('/agent/application');
  };

  return (
    <>
      <Nav />
      <Tab />
      <MainBox
        content={
          <>
            <span className="font-semibold text-xl mb-5">Klaim</span>
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
                  <option value="FLEXAS">FLEXAS</option>
                  <option value="PAR">PAR</option>
                  
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
                  <option value="">Pilih Okupasi</option>
                  <option value="Rumah Tinggal">Rumah Tinggal</option>
                  <option value="Ruko">Ruko</option>
                </select>
              </div>
              <div className={`relative my-5`}>
                <label htmlFor="dol" className={`absolute left-3 -top-2.5 transition-all duration-200`}>
                  Tanggal Kejadian:
                </label>
                <div className="flex justify-between items-center gap-4">
                  <input
                    id="dol"
                    name="dol"
                    placeholder=""
                    value={data.dol}
                    onChange={handleInputChange}
                    className="rounded-xl pl-3 w-full h-10 mt-5 p-3 font-Poppins font-semibold"
                    type="date"
                    min={minDate}
                    max={today}
                  />
                </div>
                  <div className={`relative my-5`}>
                    <label
                      htmlFor="kronologi"
                      className={`absolute left-3 -top-2.5 transition-all duration-200`}
                    >
                      Kronologi Kejadian
                    </label>
                    <textarea
                      id="kronologi"
                      name="kronologi"
                      placeholder=""
                      value={data.kronologi}
                      onChange={handleInputChange}
                      className="rounded-xl pl-3 w-full h-32 mt-5 p-3 font-Poppins font-semibold" 
                      rows={5}                   
                      />
                  </div>
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

export default KlaimH;
