import Image from 'next/image';


export default function Spinner() {
  return (
    <Image src={'/spinner.gif'} alt='spinner loading' width={30} height={30}></Image>
  )
}
