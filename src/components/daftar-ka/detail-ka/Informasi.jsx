// ** Import Assets
import ListNumber from "./ListNumber";

// ** Import Components
import assets from "../../../assets/assets";

const Informasi = ({ data }) => {
  return (
    <div className="py-2 space-y-7">
      <div className="flex justify-between items-start px-7">
        <div className="space-y-8">
          <img src={assets.logoKai} alt="" />

          <h1 className="font-bold text-xl mt-8 ">{data.name}</h1>

          <h1 className="font-bold text-[#0080FF] text-xl mt-3">
            #{data.code_train}
          </h1>
        </div>

        <button
          className={`rounded-xl py-2 px-20 text-[16px] font-bold text-white ${
            data.status === "available" ? "bg-[#4CDB24]" : "bg-[#DB2D24]"
          } `}
        >
          {data.status === "available" ? "Aktif" : "Non Aktif"}
        </button>
      </div>

      <div className="bg-[#F5F6F8] w-full py-1"></div>

      <div className="px-7">
        <h2 className="text-[#262627] text-[24px] font-bold mb-7">
          Rute Perjalanan & Jadwal Perjalanan
        </h2>

        <div className="pb-9 space-y-2">
          {data.rute.map((rut, i) => (
            <ListNumber key={i} label={i + 1} data={rut} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Informasi;
