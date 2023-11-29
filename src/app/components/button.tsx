export default function Button({ label, onClick }: { label: string, onClick?: (event?: any) => any }) {
    return (<button className='border-2 border-slate-600 text-slate-500 hover:border-transparent hover:bg-blue-600 hover:text-white transition delay-2 text-sm uppercase rounded-md py-1 px-2' onClick={onClick}>{ label }</button>)
}