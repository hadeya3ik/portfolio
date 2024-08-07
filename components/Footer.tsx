import  ParallaxText  from "@/common/ParallaxText";


function Footer() {
    return (
      <div className="bg-secondary h-[60vh] relative text-secondary-foreground" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)" }}>
        <div className='fixed h-[60vh] bottom-0 z-0'>
            <div className="flex gap-4">
                <div className="text-3xl">
                    <h3>Github</h3>
                    <h3>Linkedin</h3>            
                    <h3>Dribble</h3>          
                </div>
                <div className="text-3xl">
                        <h3>Contact</h3>
                        <h3>About</h3>         
                </div>
            </div>
            <div className="font-medium w-full">
                <ParallaxText baseVelocity={3}>h3ikram@uwaterloo.ca</ParallaxText>
            </div>
            <div className="text-3xl">
                    <h3>Designed and developed by Hadeya </h3>
                    <h3>Let's Make something Great Together</h3>
            </div>
        </div>
      </div>
    );
  }
export default Footer