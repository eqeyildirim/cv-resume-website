import { useEffect, useState } from 'react';
import axios from 'axios';

const ApiRequest = () => {
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .post('https://reqres.in/api/workintech', {
        username: 'eqeyildirim',
        password: '333444',
      })
      .then((res) => {
        console.log(res.data); // API'den alınan veriyi sadece konsola yazdır
        setLoad(false);
      })
      .catch((err) => {
        setError('Bir hata oluştu: ' + err.message);
        setLoad(false);
      });
  }, []);

  if (load) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return null; // Ekranda hiçbir şey göstermiyoruz
};

export default ApiRequest;
