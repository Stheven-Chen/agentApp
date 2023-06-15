const formatCurrency = (input:string) => {
    // Menghilangkan semua karakter selain digit
    const value = input.replace(/[^0-9]/g, "");
  
    // Mengkonversi string ke number
    const number = parseInt(value);
  
    // Memeriksa apakah nilai input adalah NaN
    if (isNaN(number)) {
      // Mengembalikan nilai kosong jika nilai input adalah NaN
      return "";
    } else {
      // Memformat angka ke dalam format currency
      const formattedValue = "Rp " + number.toLocaleString("id-ID");
  
      // Mengembalikan nilai input field dengan format currency
      return formattedValue;
    }
  };

  export default formatCurrency;