import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import data from '../src/data.json'
import Image from "next/image";
import check from '../src/Check.png'

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1217px] mx-auto flex-col items-center text-lg justify-between my-32">
      <section className="text-center flex flex-col items-center gap-6 mb-16">
        <h1 className="text-[56px] leading-[56px] font-medium ">Des prix en accord avec<br /> <span className="text-transparent bg-clip-text bg-[radial-gradient(44.52%_83.97%_at_55.31%_103.97%,rgba(4,59,203,1)_28%,rgba(136,179,253,1)_100%)]  w-max">notre vision</span></h1>
        <div className="flex justify-center gap-4 py-4">
          <Button className="w-[275px] bg-[radial-gradient(51.41%_105.14%_at_50.04%_105.14%,rgba(10,48,139,1)_0%,rgba(30,110,251,1)_100%)]" >Paiement mensuel</Button>
          <Button className="w-[275px]">Paiement mensuel (-20%)</Button>
        </div>
      </section>
      <section className="flex gap-6 w-full">
        {data && data.map((plan) => (
          <Card key={plan.title} className={plan.title !== "Ultime" ? "bg-[radial-gradient(103.02%_79.39%_at_50.04%_100%,rgba(3,25,83,1)_0%,rgba(23,112,247,1)_120%)]" : ""}>
            <CardTitle className="mb-4 text-[34px] font-medium">
              {plan.title === "Ultime" ? (<div className="mb-5 p-2 bg-white rounded-lg shadow-def shadow-purple-700/80 w-max">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="black" d="M12 20.212L2.596 8.923L5.308 3.5h13.384l2.712 5.423zM8.817 8.5h6.366l-2-4h-2.366zm2.683 9.56V9.5H4.392zm1 0l7.108-8.56H12.5zm3.792-9.56h3.766l-2-4h-3.766zm-12.35 0h3.766l2-4H5.942z" /></svg>
              </div>) : (<div className="mb-5 overflow-hidden p-3 bg-blue-700 rounded-lg  w-max relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7" /><path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z" /></g></svg>
                <div className="rounded-full w-16 h-16 bg-white/20 absolute -top-4 -left-6"></div>
                <div className="rounded-full w-16 h-16 bg-white/20 absolute top-1.5 -left-3"></div>
              </div>)}
              {plan.title}
              <p className="text-5xl my-8">${plan.price}<span className="text-base">/ month</span></p>
              <div className="h-[0.77px] w-full bg-gradient-to-r from-white/0 via-white/80 to-white/0  "></div>
            </CardTitle>
            <CardContent className="flex flex-col p-0 text-sm">
              {plan.included.map((item) => (
                <ul key={item}>
                  <li className="flex text-lg gap-[5px] leading-[31px]"><Image src={check} alt="" />{item}</li>
                </ul>
              ))}
            </CardContent>
            <CardFooter className="p-0">
              <Button className="w-full">Je m&rsquo;abonne</Button>
            </CardFooter>
          </Card>
        ))
        }
      </section>

    </main>
  );
}
