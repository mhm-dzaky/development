import Head from "next/head";
import Image from "next/image";
import Form from "../../components/form";
import Menu from "../../components/Menu";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import { useState } from "react";
registerLocale("id", id);
import "react-datepicker/dist/react-datepicker.css";
import Kandidat from "../../components/Kadidat";

export default function CreateVote() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="container mx-auto">
      <Head>
        <title>Voting baru</title>
      </Head>
      <Menu />

      <div className="py-10">
        <Image
          alt="create Vote"
          src={"/assets/mkvt.svg"}
          width={284}
          height={198}
        />
        <h1 className="text-4xl font-bold">Buat Voting baru</h1>
        <h2 className="text-zinc-700 mt-3">
          Silahkan masukan data yang di butuhkan sebelum membuat vote online
        </h2>

        <form className="flex flex-col">
          {/*Detail vote*/}
          <div className="space-y-5">
            <h3 className="font-medium text-xl mt-10">Detail voting</h3>
            <div className="flex flex-col">
              <label className="text-sm mt-5">Judul</label>
              <Form
                onChange={() => {}}
                value={""}
                placeHolder={"Contoh : Voting calon"}
                className={"mt-1 w-1/2"}
              />
            </div>
            <div className="flex flex-col w-2/3">
              <label className="text-sm">Kapan dimuali</label>
              <div className="inline-flex">
                <ReactDatePicker
                  locale={"id"}
                  showTimeSelect
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  dateFormat={"Pp"}
                  minDate={new Date()}
                  className={"w-full bg-zinc-100 py-2 px-3"}
                />
                <span className="text-sm text-center p-3"> Sampai</span>
                <ReactDatePicker
                  locale={"id"}
                  showTimeSelect
                  selected={endDate}
                  onChange={(date) => date && setEndDate(date)}
                  dateFormat={"Pp"}
                  minDate={startDate}
                  className={"w-full bg-zinc-100 py-2 px-3"}
                />
              </div>
            </div>
          </div>

          {/*Detail vote*/}
          {/*kandidat*/}
          <h3 className="font-medium text-xl mt-10">Kandidat</h3>
          <div className="grid gap-4 grid-cols-4 mt-5"></div>
          <Kandidat />
          <Kandidat />
          <Kandidat />
          <Kandidat />
          <Kandidat />
          <Kandidat />
          <Kandidat />
          <Kandidat />
          <Kandidat />

          {/*kandidat*/}
        </form>
      </div>
    </div>
  );
}
