import Image from "next/image"
const Info = ()=>{
    return(
       <div>
        <div >
        <Image
          src={"/image3.jpeg"}
          width={80}
          height={80}
          alt="Naimal Salahuddin"/>
      </div>
        <div>
            <h1>My Info</h1>
            <h2>About me</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, rerum! Nostrum ipsa itaque inventore recusandae dolores at illo distinctio ducimus necessitatibus?</p>
            <button>Download CV</button>
        </div>
        </div>
    )
}
export default Info;