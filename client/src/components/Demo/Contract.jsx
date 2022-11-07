import {useEffect, useRef} from "react";

function Contract({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <code className="whitespace-pre-wrap p-2 rounded-l-3xl p-4 bg-gray-300 col-span-3 block">
      {`contract SimpleStorage {
  uint256 value = `}

      <span className="text-red-500" ref={spanEle}>
        <strong>{value}</strong>
      </span>

      {`;

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;
  }
}`}
    </code>
  );
}

export default Contract;
