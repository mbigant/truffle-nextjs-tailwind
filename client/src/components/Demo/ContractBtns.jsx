import {useState} from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const read = async () => {
    const value = await contract.methods.read().call({ from: accounts[0] });
    setValue(value);
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue);
    await contract.methods.write(newValue).send({ from: accounts[0] });
  };

  return (
    <div className="bg-neutral-400 rounded-r-3xl p-4 flex flex-col justify-around">

      <button onClick={read} className="bg-gray-200 py-2">
        read()
      </button>

      <div onClick={write} className="bg-gray-300 py-2 text-center cursor-pointer">
        write(<input
          type="text"
          placeholder="uint"
          className="w-10"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;
