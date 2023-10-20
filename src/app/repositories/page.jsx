'use client';
import { useEffect, useState } from 'react';
import useUsersApi from "@/service/Users";
import Book from "@/components/Book";

const page = () => {
  const [repositories, setRepositories] = useState([]);

  const [step, setStep] = useState(1);
  const [pbtn, psetBtn] = useState(false);
  const [nbtn, nsetBtn] = useState(false);
  useEffect(() => {
    if (step <= 1) {
      psetBtn(true);
    }
    useUsersApi.repositories().then((res) => {
      if (res.status == 200) {
        setRepositories(res.data)
        nsetBtn(false);
      }

    })
  }, [step])

  const next = () => {
    setStep(step + 1);
    nsetBtn(true);
  }

  const prev = () => {
    setStep(step - 1);
    psetBtn(true);
  }
  return (
    <div className="grow">
      <div className="py-4 flex items-center justify-between gap-4">
        <input type="text" className='py-[5px] px-4 bg-transparent border focus:outline-none rounded-md w-full' placeholder="Find a repository..."/>

        <div className='flex items-center gap-x-1'>
          <select name="type" id="type" className='py-[5px] px-4 bg-[#272b33] border rounded-md text-[#F0F3F6] cursor-pointer'>
            <option value="type">Type</option>
          </select>

          <select name="type" id="type" className='py-[5px] px-4 bg-[#272b33] border rounded-md text-[#F0F3F6] cursor-pointer'>
            <option value="type">Language</option>
          </select>

          <select name="type" id="type" className='py-[5px] px-4 bg-[#272b33] border rounded-md text-[#F0F3F6] cursor-pointer'>
            <option value="type">Sort</option>
          </select>
        </div>

        <button className='flex items-center gap-x-1 py-[5px] px-4 bg-[#09B43A] rounded-md border-transparent'>
          <Book/>
          <span>New</span>
        </button>
      </div>

      <ul className='pb-12'>
        {
          repositories?.length ? repositories?.map((repo) => {
            return <li key={repo?.id}>
              <div className="text-white">
                <div className="py-6 border-y border-gray-300 flex justify-between items-center">
                  <div>
                    <div className='flex items-center gap-x-4'>
                      <a href={repo?.html_url} target="_blank" className="flex items-center gap-x-3 cursor-pointer">
                      <h5 className='text-xl text-[#54aeff] font-semibold hover:underline'>{repo?.name}</h5>
                    </a>
                    <span className='px-[7px] border rounded-[2em] text-xs text-[#F0F3F6]'>{!repo?.public ? "Public" : "Private"}</span>
                    </div>
                    <p className='mt-2 mb-4 text-sm text-[#F0F3F6]'>
                      {repo?.description ? repo?.description : ""}
                    </p>

                    <div className="flex items-center gap-x-5">
                      <div className='flex items-center gap-x-[5px]'>
                        <div className='w-3 h-3 border bg-[#f1e05a] rounded-full'></div>
                        <span className='text-xs text-[#F0F3F6]'>{repo?.language}</span>
                      </div>
                      <p className='text-xs text-[#F0F3F6]'>{repo?.updated_at}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          }) : <h1>Not Found!</h1>
        }
      </ul>
    </div>
  );
}

export default page