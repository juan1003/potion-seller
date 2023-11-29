export default function BadassForm({
    name,
    subject,
    description,
    setName,
    setSubject,
    setDescription,
    onSubmit
}: {
    name: string,
    subject: string,
    description: string,
    setName: (state: any) => any,
    setSubject: (state: any) => any,
    setDescription: (state: any) => any,
    onSubmit: (e: any) => any
}) {
    return (
      <form
        className="flex flex-col justify-center items-center gap-4"
        action={""} 
        method={"POST"} 
        onSubmit={onSubmit}
      >
        <input type="text" name="name" id="name" placeholder="Full Name" className="bg-slate-800 hover:bg-slate-700 transition delay-4 rounded outline-none py-2 px-3 w-[250px]" value={name} onChange={(e: any) => setName(e.target.value)}/>
        <input type="text" name="subject" id="subject" placeholder="Subject" className="bg-slate-800 hover:bg-slate-700 transition delay-4 rounded outline-none py-2 px-3 w-[250px]"  value={subject} onChange={(e: any) => setSubject(e.target.value)}/>
        <textarea name="description" id="description" rows={7} placeholder="Description" className="bg-slate-800 hover:bg-slate-700 transition delay-4 rounded outline-none py-2 px-3 w-[250px]" value={description} onChange={(e: any) => setDescription(e.target.value)}></textarea>
        <input type="submit" value="submit" className="border-2 border-slate-600 w-[250px] rounded text-sm uppercase text-slate-500 py-2 hover:cursor-pointer hover:bg-slate-600 hover:border-transparent hover:text-white transition delay-4"/>
      </form>
    )
  }