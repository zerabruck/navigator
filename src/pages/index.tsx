import MerchantsTable from "@/components/MerchantsTable";

export default function Home() {
  async function fetchData() {
    try {
      const response = await fetch('/api/shareasale');
      if (response.ok) {
        const responseData = await response.json();
        console.log("this is the response data", responseData)
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <main
      className={``}
    >
      <div className="flex flex-col gap-5">
        <h1 className="w-fit mx-auto text-[2rem] py-10 text-blue-800 font-bold "> Merchants</h1>
        <div className="max-w-[20rem] mx-auto flex ">
          <input placeholder="search merchant here" className=" w-full border rounded-l-md  outline-blue-200 active:border-blue-200 py-3 px-3"/>
          <button className=" bg-blue-500 text-white py-3 px-3 rounded-r-md">Search</button>
        </div>
      </div>
      {/* <button onClick={fetchData}>clickme</button> */}

      <div className="w-[80%] mx-auto pt-10 ">
        <p className=" text-gray-500 pl-5 pb-2">Search results .... </p>
        <MerchantsTable/>
      </div>
    </main>
  );
}
