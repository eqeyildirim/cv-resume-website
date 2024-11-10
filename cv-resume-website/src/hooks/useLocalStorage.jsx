import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  // LocalStorage'den veriyi almak ya da varsayılan değeri döndürmek için useState kullanıyoruz.
  const [value, setValue] = useState(() => {
    const localVal = localStorage.getItem(key);

    // Eğer değer yoksa, defaultValue ile set ediyoruz
    if (localVal === null || localVal === 'undefined') {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }

    try {
      return JSON.parse(localVal); // Veriyi JSON olarak parse ediyoruz
    } catch (error) {
      console.error(`LocalStorage key "${key}" okunurken hata oluştu:`, error);
      return defaultValue;
    }
  });

  // Yeni değeri localStorage'a kaydeden fonksiyon
  const setLocalStorage = (newValue) => {
    const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
    localStorage.setItem(key, JSON.stringify(valueToStore)); // LocalStorage'a yeni değeri kaydediyoruz
    setValue(valueToStore); // state güncelleniyor
  };

  return [value, setLocalStorage]; // Değer ve set fonksiyonu döndürülüyor
}
