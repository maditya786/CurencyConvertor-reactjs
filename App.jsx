import { useEffect,useState } from "react";
import useCurrencyInfo from  "./hooks/useCurrencyInfo";

function App() {  
const rates = useCurrencyInfo("USD");
const currencyOptions = Object.keys(rates);
const [fromCurrency, setFromCurrency] = useState("");
const [toCurrency, setToCurrency] = useState("");
const [Amount,setamount]=useState("")
// const[label,setlabel]=useState(false)
  // console.log(currencyOptions);
  let convertedcurrnecy =""
  if(Amount && rates[fromCurrency] && rates[toCurrency]){
    convertedcurrnecy = (Amount * (rates[toCurrency]/rates[fromCurrency])).toFixed(2)
  }
  return (
    <>
    <div className="d-flex justify-content-center align-items-center pt-5" style={{backgroundImage:"url('/images/stock.jpg')",
      backgroundSize:"cover",
      backgroundPosition:"center",
      width:"100vw",
      height:"100vh"
    }}>
      <div className="d-flex justify-content-center card shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", border: "1px solid rgba(255,255,255,0.3)",width:"500px" ,minHeight:"300px",maxHeight:"800px",   overflow: "visible"}}>
        <div className="card-box d-flex justify-content-center ">
          <h3 className="fs-6 fw-bold px-4 py-3 rounded-5 mt-3 mb-4" style={{backgroundColor:"gold"}}>Currency Convertor</h3>
          {/* <p className="text-white text-center">
  Amount: {Amount}
</p> */}
           </div>
           {/* <div className="d-flex flex-column align-items-center position-relative "> */}
{/* 
           <input type="text" className="w-75 rounded-4  form-control  mt-3 py-4" placeholder="From" /> */}
     <div className="w-75 bg-white rounded-4 px-4 py-3 d-flex align-items-center justify-content-between mb-3 mx-auto">

          <div className="flex-grow-1 me-3">
    <label className="text-muted small">From:{fromCurrency}</label>
    <input
    min="0"
      type="number"
      className="form-control border-0 p-0 fs-5"
      placeholder="Amount"
      value={Amount}
      onChange={(e)=>setamount(e.target.value)}
    />
  </div>
  <div className="text-end">
    <label className="text-muted small text-nowrap">Currency Type</label>
  <select className="form-select form-select-sm mt-1" value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
     <option value="" >
    Select currency
  </option>
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency} onChange={(e)=>setToCurrency(e.target.value)}>
          {currency}
        </option>
      ))}
    </select>
  </div>
           </div>

           <button className="btn btn-info rounded-pill px-3 py-1  mx-auto" style={{top:"50%",zIndex:2,marginTop:"-30px",marginBottom:"-20px"}}> <i className="bi bi-arrow-down-up fs-5"></i></button>
         <div className="w-75 bg-white rounded-4 px-4 py-3 d-flex align-items-center justify-content-between mb-3 mx-auto">

              <div className="flex-grow-1 me-3">
    <label className="text-muted small">To:{toCurrency}</label>
     <input
     min="0"
      type="number"
      className="form-control border-0 p-0 fs-5"
      placeholder="Amount"
      value={convertedcurrnecy}
      readOnly
    />
  </div>
  <div className="text-end">
    <label className="text-muted small text-nowrap">Currency Type</label>
      <select className="form-select form-select-sm mt-1" value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)} >
         <option value="" >
    Select currency
  </option>
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency} >
          {currency}
        </option>
      ))}
    </select>
  </div>
           </div>
 <button className="btn btn-primary mb-4 w-75 rounded-4 mx-auto">Convert</button>
           </div> 
      </div>

    {/* </div> */}   
    </>
  );
}

export default App;
